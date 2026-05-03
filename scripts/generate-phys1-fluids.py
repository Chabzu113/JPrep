#!/usr/bin/env python3
"""Phase 4: Build Unit 8 Fluids from scratch — 55 questions + 4 SVG diagrams.
Usage: python3 generate-phys1-fluids.py [--dry-run]

Topics:
  1. Density & pressure fundamentals (8q)
  2. Pressure with depth  (8q)
  3. Archimedes / buoyancy (12q)
  4. Floating & sinking    (6q)
  5. Pascal's principle / hydraulic systems (7q)
  6. Continuity equation   (7q)
  7. Bernoulli's principle (7q)

Guardrails:
  - No ID collisions
  - Unit 8 ends up in [50, 65]
  - All other units unchanged
"""
import json, re, sys
from pathlib import Path

DRY_RUN = '--dry-run' in sys.argv
ROOT = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js' / 'data' / 'physics_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'physics_mcq.js',
]

# ── SVG DIAGRAMS ──────────────────────────────────────────────────────────────

SVG_BUOYANCY_SUBMERGED = (
    "<svg viewBox='0 0 300 240' xmlns='http://www.w3.org/2000/svg' "
    "style='max-width:300px;font-family:Inter,system-ui,sans-serif;font-size:12px'>"
    # water tank
    "<rect x='40' y='40' width='220' height='170' fill='#dbeafe' stroke='#334155' stroke-width='2'/>"
    "<text x='150' y='30' text-anchor='middle' font-size='11' fill='#334155'>Water  ρ_fluid</text>"
    # submerged block
    "<rect x='105' y='110' width='90' height='60' fill='#94a3b8' stroke='#334155' stroke-width='2'/>"
    "<text x='150' y='145' text-anchor='middle' font-size='11' fill='#1e293b'>object</text>"
    # buoyant force arrow up (blue)
    "<line x1='150' y1='110' x2='150' y2='65' stroke='#3b82f6' stroke-width='2.5'/>"
    "<polygon points='150,52 144,68 156,68' fill='#3b82f6'/>"
    "<text x='162' y='88' font-size='11' fill='#3b82f6'>F_b = ρ_f V g</text>"
    # weight arrow down (red)
    "<line x1='150' y1='170' x2='150' y2='205' stroke='#dc2626' stroke-width='2.5'/>"
    "<polygon points='150,218 144,203 156,203' fill='#dc2626'/>"
    "<text x='162' y='200' font-size='11' fill='#dc2626'>W = mg</text>"
    "</svg>"
)

SVG_FLOATING = (
    "<svg viewBox='0 0 300 220' xmlns='http://www.w3.org/2000/svg' "
    "style='max-width:300px;font-family:Inter,system-ui,sans-serif;font-size:12px'>"
    # water below waterline
    "<rect x='40' y='120' width='220' height='80' fill='#dbeafe' stroke='#334155' stroke-width='2'/>"
    # air above
    "<rect x='40' y='40' width='220' height='80' fill='#f0f9ff' stroke='#334155' stroke-width='2'/>"
    # waterline label
    "<text x='270' y='124' font-size='10' fill='#334155'>waterline</text>"
    # floating block: top half in air, bottom half in water
    "<rect x='105' y='80' width='90' height='80' fill='#94a3b8' stroke='#334155' stroke-width='2'/>"
    # submerged fraction shading
    "<rect x='105' y='120' width='90' height='40' fill='#7dd3fc' stroke='#334155' stroke-width='0'/>"
    "<text x='150' y='115' text-anchor='middle' font-size='10' fill='#334155'>above</text>"
    "<text x='150' y='148' text-anchor='middle' font-size='10' fill='#1e293b'>submerged</text>"
    # buoyant force arrow up
    "<line x1='75' y1='160' x2='75' y2='125' stroke='#3b82f6' stroke-width='2.5'/>"
    "<polygon points='75,112 69,128 81,128' fill='#3b82f6'/>"
    "<text x='20' y='148' font-size='10' fill='#3b82f6'>F_b</text>"
    # weight arrow down
    "<line x1='225' y1='100' x2='225' y2='135' stroke='#dc2626' stroke-width='2.5'/>"
    "<polygon points='225,148 219,133 231,133' fill='#dc2626'/>"
    "<text x='232' y='122' font-size='10' fill='#dc2626'>W</text>"
    # equilibrium note
    "<text x='150' y='215' text-anchor='middle' font-size='10' fill='#64748b'>Equilibrium: F_b = W</text>"
    "</svg>"
)

SVG_HYDRAULIC = (
    "<svg viewBox='0 0 320 220' xmlns='http://www.w3.org/2000/svg' "
    "style='max-width:320px;font-family:Inter,system-ui,sans-serif;font-size:12px'>"
    # left cylinder (narrow)
    "<rect x='30' y='60' width='60' height='110' fill='#f0f9ff' stroke='#334155' stroke-width='2'/>"
    # right cylinder (wide)
    "<rect x='180' y='60' width='110' height='110' fill='#f0f9ff' stroke='#334155' stroke-width='2'/>"
    # connecting pipe at bottom
    "<rect x='90' y='145' width='90' height='25' fill='#f0f9ff' stroke='#334155' stroke-width='2'/>"
    # fluid fill (blue) in both
    "<rect x='31' y='130' width='58' height='39' fill='#bfdbfe'/>"
    "<rect x='91' y='145' width='88' height='24' fill='#bfdbfe'/>"
    "<rect x='181' y='130' width='108' height='39' fill='#bfdbfe'/>"
    # left piston
    "<rect x='30' y='110' width='60' height='14' fill='#94a3b8' stroke='#334155' stroke-width='1.5'/>"
    # right piston
    "<rect x='180' y='110' width='110' height='14' fill='#94a3b8' stroke='#334155' stroke-width='1.5'/>"
    # F1 arrow down (left)
    "<line x1='60' y1='60' x2='60' y2='108' stroke='#dc2626' stroke-width='2.5'/>"
    "<polygon points='60,110 54,96 66,96' fill='#dc2626'/>"
    "<text x='60' y='50' text-anchor='middle' font-size='11' fill='#dc2626'>F₁</text>"
    # F2 arrow up (right)
    "<line x1='235' y1='108' x2='235' y2='60' stroke='#3b82f6' stroke-width='2.5'/>"
    "<polygon points='235,48 229,64 241,64' fill='#3b82f6'/>"
    "<text x='235' y='40' text-anchor='middle' font-size='11' fill='#3b82f6'>F₂</text>"
    # area labels
    "<text x='60' y='175' text-anchor='middle' font-size='11' fill='#334155'>A₁ (small)</text>"
    "<text x='235' y='175' text-anchor='middle' font-size='11' fill='#334155'>A₂ (large)</text>"
    # Pascal label
    "<text x='160' y='205' text-anchor='middle' font-size='10' fill='#64748b'>P = F₁/A₁ = F₂/A₂</text>"
    "</svg>"
)

SVG_CONTINUITY = (
    "<svg viewBox='0 0 340 180' xmlns='http://www.w3.org/2000/svg' "
    "style='max-width:340px;font-family:Inter,system-ui,sans-serif;font-size:12px'>"
    # wide pipe left
    "<rect x='10' y='50' width='120' height='80' fill='#dbeafe' stroke='#334155' stroke-width='2'/>"
    # transition wedge
    "<polygon points='130,50 130,130 200,90 200,90' fill='#dbeafe' stroke='#334155' stroke-width='2'/>"
    "<polygon points='130,130 200,110 200,90 130,50' fill='#dbeafe' stroke='#334155' stroke-width='0'/>"
    "<line x1='130' y1='50' x2='200' y2='70' stroke='#334155' stroke-width='2'/>"
    "<line x1='130' y1='130' x2='200' y2='110' stroke='#334155' stroke-width='2'/>"
    # narrow pipe right
    "<rect x='200' y='70' width='130' height='40' fill='#dbeafe' stroke='#334155' stroke-width='2'/>"
    # velocity arrow in wide section
    "<line x1='30' y1='90' x2='85' y2='90' stroke='#16a34a' stroke-width='2.5'/>"
    "<polygon points='90,90 75,84 75,96' fill='#16a34a'/>"
    "<text x='55' y='80' text-anchor='middle' font-size='11' fill='#16a34a'>v₁ (slow)</text>"
    # velocity arrow in narrow section
    "<line x1='215' y1='90' x2='295' y2='90' stroke='#16a34a' stroke-width='2.5'/>"
    "<polygon points='302,90 287,84 287,96' fill='#16a34a'/>"
    "<text x='255' y='80' text-anchor='middle' font-size='11' fill='#16a34a'>v₂ (fast)</text>"
    # area labels
    "<text x='65' y='145' text-anchor='middle' font-size='11' fill='#334155'>A₁ (large)</text>"
    "<text x='265' y='125' text-anchor='middle' font-size='11' fill='#334155'>A₂ (small)</text>"
    # equation
    "<text x='170' y='168' text-anchor='middle' font-size='11' fill='#64748b'>A₁v₁ = A₂v₂  →  A↓ means v↑</text>"
    "</svg>"
)

# ── QUESTIONS ─────────────────────────────────────────────────────────────────

Q = []   # will be extended below

def q(id_, topic, diff, question, choices, answer, explanation, svg=None):
    obj = {
        "id": id_, "subject": "apphys1", "unit": 8,
        "topic": topic, "difficulty": diff, "type": "MCQ",
        "question": question, "choices": choices,
        "answer": answer, "explanation": explanation
    }
    if svg:
        obj["graphSvg"] = svg
    Q.append(obj)

# ── 1. Density & pressure fundamentals (8q) ──────────────────────────────────

q("phys1_u8_q001","fluid pressure","easy",
  "The SI unit of pressure is:",
  ["Newton (N)","Pascal (Pa)","Joule (J)","Watt (W)"],
  1,
  "Pressure = Force/Area. 1 Pa = 1 N/m². Newtons measure force; Joules measure energy; Watts measure power."
)

q("phys1_u8_q002","fluid pressure","easy",
  "A force of $F = 100\\,\\text{N}$ is applied uniformly over an area of $A = 0.5\\,\\text{m}^2$. What is the pressure?",
  ["$50\\,\\text{Pa}$","$100\\,\\text{Pa}$","$200\\,\\text{Pa}$","$500\\,\\text{Pa}$"],
  2,
  "$P = F/A = 100/0.5 = 200\\,\\text{Pa}$. Pressure is force per unit area — the same force over a smaller area gives higher pressure (e.g., a nail tip vs. a flat palm)."
)

q("phys1_u8_q003","fluid density","easy",
  "An object has mass $m = 500\\,\\text{g}$ and volume $V = 250\\,\\text{cm}^3$. What is its density?",
  ["$0.5\\,\\text{g/cm}^3$","$1.0\\,\\text{g/cm}^3$","$2.0\\,\\text{g/cm}^3$","$4.0\\,\\text{g/cm}^3$"],
  2,
  "$\\rho = m/V = 500/250 = 2.0\\,\\text{g/cm}^3$. This is equivalent to $2000\\,\\text{kg/m}^3$, roughly twice the density of water."
)

q("phys1_u8_q004","fluid density","easy",
  "Which correctly ranks these materials by density (lowest to highest)? Water $\\approx 1000\\,\\text{kg/m}^3$.",
  ["Air, Water, Lead","Water, Air, Lead","Lead, Water, Air","Air, Lead, Water"],
  0,
  "Air $\\approx 1.2\\,\\text{kg/m}^3$, Water $= 1000\\,\\text{kg/m}^3$, Lead $\\approx 11{,}300\\,\\text{kg/m}^3$. Objects denser than water sink; objects less dense float."
)

q("phys1_u8_q005","fluid pressure","medium",
  "A $60\\,\\text{kg}$ person stands on one foot. The contact area is $150\\,\\text{cm}^2 = 0.015\\,\\text{m}^2$. Using $g = 10\\,\\text{m/s}^2$, what is the pressure on the floor?",
  ["$4{,}000\\,\\text{Pa}$","$10{,}000\\,\\text{Pa}$","$40{,}000\\,\\text{Pa}$","$90{,}000\\,\\text{Pa}$"],
  2,
  "$P = mg/A = (60)(10)/0.015 = 600/0.015 = 40{,}000\\,\\text{Pa}$. The same weight distributed over two feet halves the pressure to $20{,}000\\,\\text{Pa}$."
)

q("phys1_u8_q006","fluid density","medium",
  "A rectangular tank ($0.4\\,\\text{m} \\times 0.5\\,\\text{m} \\times 0.2\\,\\text{m}$) is filled with a fluid of density $\\rho = 800\\,\\text{kg/m}^3$. What is the mass of the fluid?",
  ["$16\\,\\text{kg}$","$32\\,\\text{kg}$","$40\\,\\text{kg}$","$64\\,\\text{kg}$"],
  1,
  "$V = 0.4 \\times 0.5 \\times 0.2 = 0.04\\,\\text{m}^3$. $m = \\rho V = 800 \\times 0.04 = 32\\,\\text{kg}$."
)

q("phys1_u8_q007","fluid pressure","medium",
  "As you go deeper below the surface of a static fluid, the pressure:",
  ["Decreases","Stays constant","Increases linearly with depth","Increases as the square of depth"],
  2,
  "$P = P_0 + \\rho g h$ — pressure increases linearly with depth $h$. Each additional meter of water adds $\\rho g \\approx 9{,}800\\,\\text{Pa}$ of pressure."
)

q("phys1_u8_q008","fluid pressure","medium",
  "Three connected containers of different shapes are filled with water to the same height. The pressure at the bottom of each container is:",
  ["Greatest in the widest container","Greatest in the narrowest container","Equal in all three","Proportional to the volume of water"],
  2,
  "Pressure at a given depth depends only on $P = \\rho g h$ — not on the shape or volume of the container. This is the hydrostatic paradox: a narrow tall tube and a wide short pool at the same depth have the same pressure."
)

# ── 2. Pressure with depth (8q) ──────────────────────────────────────────────

q("phys1_u8_q009","fluid pressure","easy",
  "What is the gauge pressure (pressure above atmospheric) at a depth of $h = 5\\,\\text{m}$ in fresh water? ($\\rho = 1000\\,\\text{kg/m}^3$, $g = 10\\,\\text{m/s}^2$)",
  ["$500\\,\\text{Pa}$","$5{,}000\\,\\text{Pa}$","$50{,}000\\,\\text{Pa}$","$500{,}000\\,\\text{Pa}$"],
  2,
  "$P_{\\text{gauge}} = \\rho g h = (1000)(10)(5) = 50{,}000\\,\\text{Pa}$. Gauge pressure ignores atmospheric pressure and measures only the contribution from the fluid column above."
)

q("phys1_u8_q010","fluid pressure","medium",
  "At a depth of $10\\,\\text{m}$ in seawater ($\\rho = 1025\\,\\text{kg/m}^3$, $g = 10\\,\\text{m/s}^2$, $P_0 = 101{,}000\\,\\text{Pa}$), what is the absolute pressure?",
  ["$101{,}000\\,\\text{Pa}$","$102{,}500\\,\\text{Pa}$","$201{,}000\\,\\text{Pa}$","$203{,}500\\,\\text{Pa}$"],
  3,
  "$P = P_0 + \\rho g h = 101{,}000 + (1025)(10)(10) = 101{,}000 + 102{,}500 = 203{,}500\\,\\text{Pa}$. Absolute pressure includes atmospheric pressure."
)

q("phys1_u8_q011","fluid pressure","medium",
  "A dam holds fresh water to a depth of $h = 20\\,\\text{m}$. What is the gauge pressure at the base of the dam? ($\\rho = 1000\\,\\text{kg/m}^3$, $g = 10\\,\\text{m/s}^2$)",
  ["$20{,}000\\,\\text{Pa}$","$200{,}000\\,\\text{Pa}$","$2{,}000{,}000\\,\\text{Pa}$","$20{,}000{,}000\\,\\text{Pa}$"],
  1,
  "$P_{\\text{gauge}} = \\rho g h = (1000)(10)(20) = 200{,}000\\,\\text{Pa} = 200\\,\\text{kPa}$. This is about twice atmospheric pressure."
)

q("phys1_u8_q012","fluid pressure","medium",
  "Two points at the same depth in a connected static fluid have:",
  ["The same velocity","The same temperature","The same pressure","The same density only if the fluid is uniform"],
  2,
  "In a static connected fluid, pressure at the same depth is equal — this is the foundation of Pascal's principle and explains why hydraulic systems work. Velocity is zero everywhere in a static fluid."
)

q("phys1_u8_q013","fluid pressure","medium",
  "A mercury manometer shows the fluid level displaced by $h = 15\\,\\text{cm} = 0.15\\,\\text{m}$. What is the gauge pressure of the trapped gas? ($\\rho_{\\text{Hg}} = 13{,}600\\,\\text{kg/m}^3$, $g = 10\\,\\text{m/s}^2$)",
  ["$2{,}040\\,\\text{Pa}$","$20{,}400\\,\\text{Pa}$","$204{,}000\\,\\text{Pa}$","$2{,}040{,}000\\,\\text{Pa}$"],
  1,
  "$P_{\\text{gauge}} = \\rho g h = (13{,}600)(10)(0.15) = 20{,}400\\,\\text{Pa}$. Mercury is used in manometers because its high density means a small height difference corresponds to a large pressure."
)

q("phys1_u8_q014","fluid pressure","hard",
  "A sealed container holds oil ($\\rho_{\\text{oil}} = 800\\,\\text{kg/m}^3$) to a depth of $3\\,\\text{m}$, sitting atop water ($\\rho_{\\text{w}} = 1000\\,\\text{kg/m}^3$) to a depth of $5\\,\\text{m}$. What is the gauge pressure at the very bottom? ($g = 10\\,\\text{m/s}^2$)",
  ["$24{,}000\\,\\text{Pa}$","$50{,}000\\,\\text{Pa}$","$74{,}000\\,\\text{Pa}$","$104{,}000\\,\\text{Pa}$"],
  2,
  "$P_{\\text{gauge}} = \\rho_{\\text{oil}} g h_{\\text{oil}} + \\rho_{\\text{w}} g h_{\\text{w}} = (800)(10)(3) + (1000)(10)(5) = 24{,}000 + 50{,}000 = 74{,}000\\,\\text{Pa}$. Pressures from different fluid layers add."
)

q("phys1_u8_q015","fluid pressure","hard",
  "A closed-top tank of water has a pressure gauge at depth $h = 4\\,\\text{m}$ that reads $180{,}000\\,\\text{Pa}$. What is the pressure at the top surface of the water? ($\\rho = 1000\\,\\text{kg/m}^3$, $g = 10\\,\\text{m/s}^2$)",
  ["$40{,}000\\,\\text{Pa}$","$100{,}000\\,\\text{Pa}$","$140{,}000\\,\\text{Pa}$","$180{,}000\\,\\text{Pa}$"],
  2,
  "$P_{\\text{top}} = P_{\\text{gauge}} - \\rho g h = 180{,}000 - (1000)(10)(4) = 180{,}000 - 40{,}000 = 140{,}000\\,\\text{Pa}$. The top surface is pressurized above atmospheric."
)

q("phys1_u8_q016","fluid pressure","medium",
  "Which statement about pressure in a static fluid is correct?",
  ["Pressure acts only downward","Pressure at a point acts equally in all directions","Pressure is greatest near the walls","Pressure is independent of the fluid's density"],
  1,
  "Fluid pressure at a point is isotropic — it acts equally in all directions. This is why a submerged object experiences force from all sides, and why pressure can push upward (producing buoyancy)."
)

# ── 3. Archimedes / buoyancy (12q) ────────────────────────────────────────────

q("phys1_u8_q017","buoyancy","easy",
  "Archimedes' principle states that the buoyant force on a submerged object equals:",
  ["The weight of the object","The weight of fluid displaced by the object","The pressure at the object's depth times its surface area","The difference in density between fluid and object"],
  1,
  "$F_b = \\rho_{\\text{fluid}} V_{\\text{displaced}} g$ — the weight of the displaced fluid. This is Archimedes' principle. The object's own weight and density do not directly determine the buoyant force.",
  SVG_BUOYANCY_SUBMERGED
)

q("phys1_u8_q018","buoyancy","easy",
  "An object fully submerged in fresh water displaces $V = 0.002\\,\\text{m}^3$. What is the buoyant force? ($\\rho_w = 1000\\,\\text{kg/m}^3$, $g = 10\\,\\text{m/s}^2$)",
  ["$2\\,\\text{N}$","$10\\,\\text{N}$","$20\\,\\text{N}$","$200\\,\\text{N}$"],
  2,
  "$F_b = \\rho_w V g = (1000)(0.002)(10) = 20\\,\\text{N}$. This equals the weight of $2\\,\\text{kg}$ of water, which is the mass of fluid displaced."
)

q("phys1_u8_q019","buoyancy","medium",
  "A steel cube weighs $W = 50\\,\\text{N}$ in air. When fully submerged in water it displaces $V = 0.0006\\,\\text{m}^3$. What does it weigh in water (apparent weight)? ($\\rho_w = 1000$, $g = 10$)",
  ["$6\\,\\text{N}$","$44\\,\\text{N}$","$50\\,\\text{N}$","$56\\,\\text{N}$"],
  1,
  "$F_b = \\rho_w V g = (1000)(0.0006)(10) = 6\\,\\text{N}$. Apparent weight $= W - F_b = 50 - 6 = 44\\,\\text{N}$. Submerged objects appear lighter by the buoyant force.",
  SVG_BUOYANCY_SUBMERGED
)

q("phys1_u8_q020","buoyancy","medium",
  "An object weighs $80\\,\\text{N}$ in air and $50\\,\\text{N}$ when submerged in fresh water. What is the object's volume? ($\\rho_w = 1000\\,\\text{kg/m}^3$, $g = 10\\,\\text{m/s}^2$)",
  ["$0.0005\\,\\text{m}^3$","$0.003\\,\\text{m}^3$","$0.005\\,\\text{m}^3$","$0.008\\,\\text{m}^3$"],
  1,
  "$F_b = 80 - 50 = 30\\,\\text{N}$. Using $F_b = \\rho_w V g$: $V = F_b/(\\rho_w g) = 30/(1000 \\times 10) = 0.003\\,\\text{m}^3$."
)

q("phys1_u8_q021","buoyancy","medium",
  "A fully submerged rigid object is moved from a depth of $2\\,\\text{m}$ to a depth of $8\\,\\text{m}$. How does the buoyant force change?",
  ["It doubles","It quadruples","It stays the same","It decreases because pressure increases"],
  2,
  "$F_b = \\rho_{\\text{fluid}} V_{\\text{displaced}} g$. For a rigid solid object, $V_{\\text{displaced}}$ does not change with depth. Therefore $F_b$ stays the same regardless of depth."
)

q("phys1_u8_q022","buoyancy","medium",
  "A steel ball ($\\rho_{\\text{steel}} = 7{,}800\\,\\text{kg/m}^3$) and an aluminum ball ($\\rho_{\\text{Al}} = 2{,}700\\,\\text{kg/m}^3$) have the same volume $V = 0.001\\,\\text{m}^3$ and are both fully submerged in water. Which has the greater buoyant force?",
  ["The steel ball","The aluminum ball","Both have the same buoyant force","The one with greater weight"],
  2,
  "$F_b = \\rho_w V g$ depends on the displaced fluid volume, not on the object's density or composition. Both balls displace the same volume, so both experience the same buoyant force."
)

q("phys1_u8_q023","buoyancy","medium",
  "A block of density $\\rho_{\\text{obj}} = 500\\,\\text{kg/m}^3$ is fully submerged in water ($\\rho_w = 1000\\,\\text{kg/m}^3$). What is the direction of the net force on the block?",
  ["Downward — it sinks","Upward — it rises","Zero — it is in equilibrium","Cannot be determined"],
  1,
  "$F_b = \\rho_w V g$ and $W = \\rho_{\\text{obj}} V g$. Since $\\rho_{\\text{obj}} < \\rho_w$, $F_b > W$ and the net force is upward. The block will rise until it floats."
)

q("phys1_u8_q024","buoyancy","hard",
  "A helium balloon has volume $V = 0.5\\,\\text{m}^3$ and an average density (gas + envelope) of $\\rho_{\\text{avg}} = 0.2\\,\\text{kg/m}^3$. In air ($\\rho_{\\text{air}} = 1.2\\,\\text{kg/m}^3$, $g = 10\\,\\text{m/s}^2$), what is the net upward force?",
  ["$1\\,\\text{N}$","$3\\,\\text{N}$","$5\\,\\text{N}$","$6\\,\\text{N}$"],
  2,
  "$F_b = \\rho_{\\text{air}} V g = (1.2)(0.5)(10) = 6\\,\\text{N}$. Weight $= \\rho_{\\text{avg}} V g = (0.2)(0.5)(10) = 1\\,\\text{N}$. Net upward force $= 6 - 1 = 5\\,\\text{N}$."
)

q("phys1_u8_q025","buoyancy","medium",
  "A $2\\,\\text{kg}$ object ($V = 0.004\\,\\text{m}^3$) is suspended by a string while fully submerged in fresh water. What is the tension in the string? ($\\rho_w = 1000$, $g = 10$)",
  ["$0\\,\\text{N}$","$20\\,\\text{N}$","$40\\,\\text{N}$","$60\\,\\text{N}$"],
  0,
  "$F_b = \\rho_w V g = (1000)(0.004)(10) = 40\\,\\text{N}$ (up). Weight $= (2)(10) = 20\\,\\text{N}$ (down). Net upward force without string $= 40 - 20 = 20\\,\\text{N}$. The string pulls down to hold it: $T = F_b - W = 20\\,\\text{N}$ down... wait — $F_b > W$, so the object wants to rise. String tension acts downward: $T + W = F_b \\Rightarrow T = 40 - 20 = 20\\,\\text{N}$.",
)
# Fix q025 answer and explanation
Q[-1]['answer'] = 1
Q[-1]['explanation'] = ("$F_b = \\rho_w V g = (1000)(0.004)(10) = 40\\,\\text{N}$ (upward). "
    "Weight $W = (2)(10) = 20\\,\\text{N}$ (downward). Since $F_b > W$, the object floats upward; "
    "the string (attached below) pulls it down. Equilibrium: $F_b = W + T \\Rightarrow T = 40 - 20 = 20\\,\\text{N}$.")

q("phys1_u8_q026","buoyancy","hard",
  "An object has mass $m = 3\\,\\text{kg}$ and volume $V = 0.001\\,\\text{m}^3$. It is placed in a fluid of unknown density $\\rho_f$. The object sinks. Which condition must be true?",
  ["$\\rho_f > 3{,}000\\,\\text{kg/m}^3$","$\\rho_f < 3{,}000\\,\\text{kg/m}^3$","$\\rho_f > 1{,}000\\,\\text{kg/m}^3$","$\\rho_f < 1{,}000\\,\\text{kg/m}^3$"],
  1,
  "Object density $= m/V = 3/0.001 = 3{,}000\\,\\text{kg/m}^3$. An object sinks when $\\rho_{\\text{obj}} > \\rho_f$, so the fluid must have density $< 3{,}000\\,\\text{kg/m}^3$."
)

q("phys1_u8_q027","buoyancy","hard",
  "A cube of side $L$ floats in a liquid of density $\\rho_L$ with exactly half its volume submerged. What is the density of the cube?",
  ["$\\rho_L / 4$","$\\rho_L / 2$","$\\rho_L$","$2\\rho_L$"],
  1,
  "For floating equilibrium: $F_b = W \\Rightarrow \\rho_L (V/2) g = \\rho_{\\text{cube}} V g \\Rightarrow \\rho_{\\text{cube}} = \\rho_L/2$. In general, the fraction submerged equals $\\rho_{\\text{obj}}/\\rho_{\\text{fluid}}$.",
  SVG_FLOATING
)

q("phys1_u8_q028","buoyancy","medium",
  "An ice cube floats in a glass of water. When the ice melts completely, the water level:",
  ["Rises","Falls","Stays the same","Depends on the size of the ice cube"],
  2,
  "The floating ice displaces water equal to its own weight. When it melts, the resulting water has exactly the same mass, so it occupies the same volume that was previously displaced. The water level does not change."
)

# ── 4. Floating & sinking (6q) ───────────────────────────────────────────────

q("phys1_u8_q029","buoyancy","easy",
  "An object placed in a fluid sinks to the bottom. This means:",
  ["$\\rho_{\\text{obj}} < \\rho_{\\text{fluid}}$","$\\rho_{\\text{obj}} = \\rho_{\\text{fluid}}$","$\\rho_{\\text{obj}} > \\rho_{\\text{fluid}}$","The object has no buoyant force acting on it"],
  2,
  "When $\\rho_{\\text{obj}} > \\rho_{\\text{fluid}}$, weight exceeds maximum buoyant force (which occurs at full submersion), so the object sinks. Even a sinking object still has a buoyant force — it is just less than its weight."
)

q("phys1_u8_q030","buoyancy","medium",
  "A wooden block ($\\rho = 600\\,\\text{kg/m}^3$) floats in fresh water ($\\rho_w = 1000\\,\\text{kg/m}^3$). What fraction of the block is above the water surface?",
  ["$40\\%$","$60\\%$","$80\\%$","It is fully submerged"],
  0,
  "Fraction submerged $= \\rho_{\\text{obj}}/\\rho_{\\text{fluid}} = 600/1000 = 0.60 = 60\\%$. The remaining $40\\%$ is above the surface. A denser fluid like seawater means less of the block submerges.",
  SVG_FLOATING
)

q("phys1_u8_q031","buoyancy","medium",
  "The same wooden block ($\\rho = 600\\,\\text{kg/m}^3$) is placed in seawater ($\\rho_{\\text{sw}} = 1025\\,\\text{kg/m}^3$). Compared to floating in fresh water, the block now floats:",
  ["Higher — less of it is submerged","Lower — more of it is submerged","At the same level","It sinks in seawater"],
  0,
  "Fraction submerged in seawater $= 600/1025 \\approx 58.5\\%$, vs $60\\%$ in fresh water. The denser seawater provides more buoyant force per unit volume, so the block needs less volume submerged to support its weight — it rides higher."
)

q("phys1_u8_q032","buoyancy","easy",
  "A boat floats lower in the water after loading cargo. This is because:",
  ["Cargo increases the boat's volume","Greater weight requires more displaced fluid to achieve equilibrium","Cargo increases buoyant force","The water level around the boat drops"],
  1,
  "The boat sinks until the buoyant force (weight of displaced water) equals the total weight (boat + cargo). More weight means more displaced water is needed, so the boat sits deeper."
)

q("phys1_u8_q033","buoyancy","hard",
  "A block of density $\\rho_{\\text{obj}} = 800\\,\\text{kg/m}^3$ floats at the interface between oil ($\\rho_{\\text{oil}} = 700\\,\\text{kg/m}^3$, on top) and water ($\\rho_w = 1000\\,\\text{kg/m}^3$, on bottom). Approximately what fraction of the block is submerged in water?",
  ["$\\approx 33\\%$","$\\approx 50\\%$","$\\approx 67\\%$","$\\approx 80\\%$"],
  0,
  "Let fraction in water $= f$, in oil $= (1-f)$. Equilibrium: $\\rho_w f + \\rho_{\\text{oil}}(1-f) = \\rho_{\\text{obj}}$. $1000f + 700(1-f) = 800 \\Rightarrow 300f = 100 \\Rightarrow f \\approx 0.33 = 33\\%$."
)

q("phys1_u8_q034","buoyancy","medium",
  "An object barely floats (just fully submerged, net force $= 0$) in liquid A. It is then placed in liquid B, which is less dense than liquid A. What happens?",
  ["It floats higher in liquid B","It sinks in liquid B","It floats at the same level","It floats with more volume above the surface"],
  1,
  "Barely floating means $\\rho_{\\text{obj}} = \\rho_A$. Since $\\rho_B < \\rho_A$, the fluid is now less dense than the object, so $F_b < W$ at any depth and the object sinks."
)

# ── 5. Pascal's principle / hydraulic systems (7q) ───────────────────────────

q("phys1_u8_q035","Pascal's principle","easy",
  "Pascal's principle states:",
  ["Pressure in a fluid increases with depth","A change in pressure applied to an enclosed fluid is transmitted equally throughout","Buoyant force equals weight of displaced fluid","Faster-moving fluid has lower pressure"],
  1,
  "Pascal's principle: pressure applied at one point in a confined fluid is transmitted undiminished to all other points. This is the basis of hydraulic machines. (Choice A is hydrostatics; C is Archimedes; D is Bernoulli.)"
)

q("phys1_u8_q036","Pascal's principle","medium",
  "A hydraulic lift has input piston area $A_1 = 0.01\\,\\text{m}^2$ and output piston area $A_2 = 0.5\\,\\text{m}^2$. An input force $F_1 = 100\\,\\text{N}$ is applied. What output force $F_2$ is produced?",
  ["$2\\,\\text{N}$","$500\\,\\text{N}$","$5{,}000\\,\\text{N}$","$50{,}000\\,\\text{N}$"],
  2,
  "By Pascal's principle, pressure is equal: $P = F_1/A_1 = F_2/A_2$. $F_2 = F_1(A_2/A_1) = 100 \\times (0.5/0.01) = 100 \\times 50 = 5{,}000\\,\\text{N}$.",
  SVG_HYDRAULIC
)

q("phys1_u8_q037","Pascal's principle","medium",
  "In a hydraulic system, the input piston ($A_1 = 0.05\\,\\text{m}^2$) moves down by $d_1 = 0.4\\,\\text{m}$. The output piston area is $A_2 = 0.2\\,\\text{m}^2$. How far does the output piston move up?",
  ["$0.02\\,\\text{m}$","$0.04\\,\\text{m}$","$0.1\\,\\text{m}$","$1.6\\,\\text{m}$"],
  2,
  "Fluid volume is conserved: $A_1 d_1 = A_2 d_2 \\Rightarrow d_2 = A_1 d_1 / A_2 = (0.05)(0.4)/(0.2) = 0.1\\,\\text{m}$. The output moves less than the input — force is multiplied but displacement is divided."
)

q("phys1_u8_q038","Pascal's principle","hard",
  "A hydraulic press multiplies force by a factor of $25$. An input force of $200\\,\\text{N}$ is applied over a distance of $0.5\\,\\text{m}$. How much work does the output piston do?",
  ["$8\\,\\text{J}$","$100\\,\\text{J}$","$200\\,\\text{J}$","$2{,}500\\,\\text{J}$"],
  1,
  "Ideal hydraulic systems conserve energy: $W_{\\text{out}} = W_{\\text{in}} = F_1 d_1 = (200)(0.5) = 100\\,\\text{J}$. The output force is $25 \\times 200 = 5{,}000\\,\\text{N}$ but the output moves only $0.02\\,\\text{m}$, giving the same $100\\,\\text{J}$. Hydraulics trade force for distance."
)

q("phys1_u8_q039","Pascal's principle","medium",
  "A hydraulic system has $A_1 = 2\\,\\text{cm}^2$ and $A_2 = 20\\,\\text{cm}^2$. An input force of $F_1 = 50\\,\\text{N}$ is applied. What is the output force?",
  ["$5\\,\\text{N}$","$50\\,\\text{N}$","$500\\,\\text{N}$","$5{,}000\\,\\text{N}$"],
  2,
  "$F_2 = F_1 \\times (A_2/A_1) = 50 \\times (20/2) = 50 \\times 10 = 500\\,\\text{N}$. The area ratio directly gives the force multiplication factor.",
  SVG_HYDRAULIC
)

q("phys1_u8_q040","Pascal's principle","medium",
  "Why can a person exert a small force on a hydraulic car jack and lift a heavy vehicle?",
  ["The hydraulic fluid adds extra energy","Pressure is transmitted equally, and the large output area converts small pressure to large force","The vehicle's weight is reduced by the fluid's buoyancy","The small piston moves faster, creating more kinetic energy"],
  1,
  "$F = PA$. The same pressure $P$ acts on a much larger output area, producing a proportionally larger force. Energy is conserved — you push the small piston a greater distance to raise the car a small amount."
)

q("phys1_u8_q041","Pascal's principle","hard",
  "Two hydraulic pistons are connected. Piston 1: $A_1 = 10\\,\\text{cm}^2$, force $F_1 = 200\\,\\text{N}$. Piston 2: $A_2 = 40\\,\\text{cm}^2$. If piston 1 is pushed down $8\\,\\text{cm}$, how high does piston 2 rise?",
  ["$0.5\\,\\text{cm}$","$2\\,\\text{cm}$","$8\\,\\text{cm}$","$32\\,\\text{cm}$"],
  1,
  "Volume conservation: $A_1 d_1 = A_2 d_2 \\Rightarrow d_2 = (A_1/A_2) d_1 = (10/40)(8) = 2\\,\\text{cm}$. Output force: $F_2 = F_1(A_2/A_1) = 200 \\times 4 = 800\\,\\text{N}$."
)

# ── 6. Continuity equation (7q) ──────────────────────────────────────────────

q("phys1_u8_q042","continuity equation","easy",
  "The continuity equation $A_1 v_1 = A_2 v_2$ is based on:",
  ["Conservation of energy","Conservation of momentum","Conservation of mass (incompressible flow)","Bernoulli's principle"],
  2,
  "For incompressible steady flow, the volume flow rate $Q = Av$ must be constant — no fluid is created or destroyed. This is conservation of mass for fluids.",
  SVG_CONTINUITY
)

q("phys1_u8_q043","continuity equation","easy",
  "Water flows through a pipe of cross-sectional area $A = 0.02\\,\\text{m}^2$ at speed $v = 3\\,\\text{m/s}$. What is the volume flow rate?",
  ["$0.006\\,\\text{m}^3/\\text{s}$","$0.06\\,\\text{m}^3/\\text{s}$","$0.6\\,\\text{m}^3/\\text{s}$","$6\\,\\text{m}^3/\\text{s}$"],
  1,
  "$Q = Av = (0.02)(3) = 0.06\\,\\text{m}^3/\\text{s}$. Flow rate has units of volume per time (m³/s or liters/s)."
)

q("phys1_u8_q044","continuity equation","medium",
  "A pipe narrows from $A_1 = 0.04\\,\\text{m}^2$ to $A_2 = 0.01\\,\\text{m}^2$. Water enters at $v_1 = 2\\,\\text{m/s}$. What is the speed in the narrow section?",
  ["$0.5\\,\\text{m/s}$","$2\\,\\text{m/s}$","$4\\,\\text{m/s}$","$8\\,\\text{m/s}$"],
  3,
  "$v_2 = A_1 v_1 / A_2 = (0.04 \\times 2)/0.01 = 8\\,\\text{m/s}$. The area decreased by a factor of 4, so the speed increases by a factor of 4.",
  SVG_CONTINUITY
)

q("phys1_u8_q045","continuity equation","medium",
  "Water flows from a pipe of diameter $d_1 = 4\\,\\text{cm}$ to a pipe of diameter $d_2 = 2\\,\\text{cm}$. What is the ratio $v_2/v_1$?",
  ["$2$","$4$","$8$","$16$"],
  1,
  "$A \\propto d^2$, so $A_1/A_2 = (4/2)^2 = 4$. By continuity: $v_2/v_1 = A_1/A_2 = 4$. Halving the diameter quadruples the speed — area scales as $d^2$."
)

q("phys1_u8_q046","continuity equation","medium",
  "Blood flows at $v = 0.5\\,\\text{m/s}$ through the aorta (radius $r = 1\\,\\text{cm}$). It splits into two arteries each with radius $r = 0.5\\,\\text{cm}$. What is the speed in each artery?",
  ["$0.25\\,\\text{m/s}$","$0.5\\,\\text{m/s}$","$1\\,\\text{m/s}$","$2\\,\\text{m/s}$"],
  2,
  "$Q_{\\text{aorta}} = \\pi(0.01)^2 \\times 0.5 = 5\\pi \\times 10^{-5}\\,\\text{m}^3/\\text{s}$. Each artery gets half: $Q_{\\text{artery}} = 2.5\\pi \\times 10^{-5}$. Speed $= Q/A = (2.5\\pi \\times 10^{-5})/(\\pi \\times 0.0025) = 1\\,\\text{m/s}$."
)

q("phys1_u8_q047","continuity equation","medium",
  "In a wide river that narrows to a gorge, water flows:",
  ["Slower in the gorge","Faster in the gorge","At the same speed","Depends on the river's depth"],
  1,
  "By continuity, $A_1 v_1 = A_2 v_2$. A narrower cross-section (smaller $A$) requires higher speed $v$ to maintain the same flow rate. This is why river gorges have fast, turbulent water."
)

q("phys1_u8_q048","continuity equation","hard",
  "A pipe of area $A_1 = 0.1\\,\\text{m}^2$ carries water at $v_1 = 4\\,\\text{m/s}$. It branches into three equal pipes. Each branch has area $A_b = 0.05\\,\\text{m}^2$. What is the speed in each branch?",
  ["$1.33\\,\\text{m/s}$","$2\\,\\text{m/s}$","$2.67\\,\\text{m/s}$","$4\\,\\text{m/s}$"],
  2,
  "$Q_{\\text{total}} = A_1 v_1 = 0.4\\,\\text{m}^3/\\text{s}$. Each branch carries $Q_{\\text{total}}/3 = 0.4/3\\,\\text{m}^3/\\text{s}$. Speed $= Q_b/A_b = (0.4/3)/0.05 = 8/3 \\approx 2.67\\,\\text{m/s}$."
)

# ── 7. Bernoulli's principle (7q) ─────────────────────────────────────────────

q("phys1_u8_q049","Bernoulli's principle","easy",
  "Bernoulli's principle states that in a steady, incompressible flow:",
  ["Faster-moving fluid has higher pressure","Faster-moving fluid has lower pressure","Pressure is constant throughout the fluid","Pressure depends only on depth"],
  1,
  "Bernoulli's equation: $P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{const}$. For horizontal flow, as $v$ increases, $P$ must decrease to keep the sum constant. High-speed flow = low pressure."
)

q("phys1_u8_q050","Bernoulli's principle","medium",
  "Water flows horizontally through a pipe that narrows. In the narrow section, compared to the wide section:",
  ["Speed decreases and pressure increases","Speed increases and pressure increases","Speed increases and pressure decreases","Speed decreases and pressure decreases"],
  2,
  "Continuity requires speed to increase in the narrower section. Bernoulli then requires pressure to decrease (energy is conserved: higher kinetic energy means lower pressure energy). This is the operating principle of a Venturi meter."
)

q("phys1_u8_q051","Bernoulli's principle","medium",
  "Water ($\\rho = 1000\\,\\text{kg/m}^3$) flows horizontally at $v_1 = 2\\,\\text{m/s}$ with $P_1 = 200{,}000\\,\\text{Pa}$ in a wide pipe. It enters a narrow section where $v_2 = 6\\,\\text{m/s}$. What is $P_2$?",
  ["$184{,}000\\,\\text{Pa}$","$196{,}000\\,\\text{Pa}$","$200{,}000\\,\\text{Pa}$","$216{,}000\\,\\text{Pa}$"],
  0,
  "$P_2 = P_1 + \\tfrac{1}{2}\\rho(v_1^2 - v_2^2) = 200{,}000 + \\tfrac{1}{2}(1000)(4 - 36) = 200{,}000 - 16{,}000 = 184{,}000\\,\\text{Pa}$."
)

q("phys1_u8_q052","Bernoulli's principle","hard",
  "Water ($\\rho = 1000\\,\\text{kg/m}^3$) flows at $v = 3\\,\\text{m/s}$ and pressure $P_1 = 150{,}000\\,\\text{Pa}$ at ground level. It rises through a vertical pipe to height $h = 2\\,\\text{m}$ where the pipe has the same diameter. What is the pressure at the top? ($g = 10\\,\\text{m/s}^2$)",
  ["$110{,}000\\,\\text{Pa}$","$130{,}000\\,\\text{Pa}$","$150{,}000\\,\\text{Pa}$","$170{,}000\\,\\text{Pa}$"],
  1,
  "Same diameter means same speed at both points. Bernoulli reduces to: $P_1 + \\rho g h_1 = P_2 + \\rho g h_2$. $P_2 = P_1 - \\rho g \\Delta h = 150{,}000 - (1000)(10)(2) = 130{,}000\\,\\text{Pa}$."
)

q("phys1_u8_q053","Bernoulli's principle","medium",
  "Aircraft wings generate lift primarily because:",
  ["The wing pushes air downward (Newton's 3rd law only)","Air travels faster over the curved upper surface, creating lower pressure above than below","The wing is tilted, creating a pressure difference","Wings are made of light materials"],
  1,
  "The curved upper surface accelerates airflow; by Bernoulli's principle, higher speed creates lower pressure. The pressure difference between the lower (high pressure) and upper (low pressure) surfaces produces the upward lift force. Both Bernoulli and Newton's 3rd law contribute."
)

q("phys1_u8_q054","Bernoulli's principle","medium",
  "A spinning baseball curves because:",
  ["Spin reduces air resistance","One side of the ball moves with the airflow (faster air, lower pressure) and the other against it (slower air, higher pressure)","Spin increases the ball's weight","The seams deflect air symmetrically"],
  1,
  "The Magnus effect: spin makes air on one side of the ball move faster (spin adds to flow velocity) — lower pressure. The other side moves slower — higher pressure. The pressure difference pushes the ball sideways, causing it to curve."
)

q("phys1_u8_q055","Bernoulli's principle","hard",
  "A tank of water has a small hole at depth $h = 5\\,\\text{m}$ below the open water surface. Using Bernoulli's equation, what is the efflux speed of water from the hole? ($g = 10\\,\\text{m/s}^2$)",
  ["$5\\,\\text{m/s}$","$10\\,\\text{m/s}$","$50\\,\\text{m/s}$","$100\\,\\text{m/s}$"],
  1,
  "Apply Bernoulli from the surface (large area, $v \\approx 0$, $P = P_0$) to the hole ($P = P_0$, height $= 0$): $\\rho g h = \\frac{1}{2}\\rho v^2 \\Rightarrow v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = \\sqrt{100} = 10\\,\\text{m/s}$. This is Torricelli's theorem."
)

# ── VALIDATION ────────────────────────────────────────────────────────────────

assert len(Q) == 55, f"Expected 55 questions, got {len(Q)}"

REQUIRED = {'id','subject','unit','topic','difficulty','type','question','choices','answer','explanation'}
errors = []
ids = set()
for ques in Q:
    qid = ques.get('id','?')
    missing = REQUIRED - ques.keys()
    if missing: errors.append(f'{qid}: missing {missing}')
    if qid in ids: errors.append(f'Duplicate ID: {qid}')
    ids.add(qid)
    if not isinstance(ques.get('choices'), list) or len(ques['choices']) != 4:
        errors.append(f'{qid}: need 4 choices')
    ans = ques.get('answer')
    if not isinstance(ans, int) or not (0 <= ans <= 3):
        errors.append(f'{qid}: answer {ans!r} not in 0-3')
    if ques.get('unit') != 8:
        errors.append(f'{qid}: unit={ques.get("unit")} (expected 8)')
    if ques.get('difficulty') not in ('easy','medium','hard'):
        errors.append(f'{qid}: bad difficulty')

if errors:
    print('VALIDATION ERRORS:')
    for e in errors: print(' ', e)
    sys.exit(1)

diff_dist = {}
for ques in Q: diff_dist[ques['difficulty']] = diff_dist.get(ques['difficulty'],0)+1
svg_count = sum(1 for ques in Q if 'graphSvg' in ques)
print(f'Validated: {len(Q)} questions | difficulty={diff_dist} | with SVG={svg_count}')

# ── APPLY ──────────────────────────────────────────────────────────────────────

def process(path):
    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'ERROR: cannot parse {path}'); sys.exit(1)
    questions = json.loads(m.group(1))

    existing_ids = {qq['id'] for qq in questions}
    collisions = [ques['id'] for ques in Q if ques['id'] in existing_ids]
    if collisions:
        print(f'ID COLLISION in {path.name}: {collisions}'); sys.exit(1)

    if not DRY_RUN:
        questions.extend(Q)

    live = [qq for qq in (questions if not DRY_RUN else questions + Q) if not qq.get('deprecated')]
    after = {}
    for qq in live: after[qq['unit']] = after.get(qq['unit'],0) + 1

    print(f'  After dist: {dict(sorted(after.items()))}')

    # Guards
    assert 50 <= after.get(8,0) <= 65, f'Unit 8 count {after.get(8,0)} out of [50,65]'
    assert after.get(1,0) == 66, f'Unit 1 changed'
    assert after.get(5,0) == 55, f'Unit 5 changed'
    assert after.get(6,0) == 53, f'Unit 6 changed'
    assert after.get(7,0) == 66, f'Unit 7 changed'

    if not DRY_RUN:
        prefix = text[:m.start(1)]
        suffix = text[m.end(1):]
        path.write_text(prefix + json.dumps(questions, indent=2, ensure_ascii=False) + suffix)
    print(f'  {"[DRY] " if DRY_RUN else ""}wrote {path.name}')

print(f'\n{"=== DRY RUN ===" if DRY_RUN else "=== LIVE RUN ==="}')
for t in TARGETS:
    print(f'\n{t.name}:')
    process(t)
print('\nDone.')

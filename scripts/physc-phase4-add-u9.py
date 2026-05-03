#!/usr/bin/env python3
"""Phase 4: Add 18 questions to AP Physics C E&M Unit 9 (Electric Potential).

Brings U9 from 37 → 55, in line with the other E&M units (53–76 each).

Coverage:
  - Potential due to point charges (scalar superposition)
  - Potential energy of charge configurations
  - Work done moving a charge through a potential difference
  - V from continuous distributions (ring, disk on axis)
  - E from V (gradient: -dV/dx in 1D, full ∇V in 2D)
  - V from E (line integral)
  - Equipotential surfaces and their geometry
  - Conductors at equilibrium
  - Charged-particle kinematics through ΔV

Answer distribution: balanced 4/5/5/4 across A/B/C/D.

Usage: python3 physc-phase4-add-u9.py [--dry-run]
"""
import json, re, sys
from pathlib import Path
from collections import Counter

DRY_RUN = '--dry-run' in sys.argv
ROOT    = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js'       / 'data' / 'physc_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'physc_mcq.js',
]

def q(qid, topic, difficulty, question, choices, answer, explanation, latex=True):
    """Build a single question dict matching the bank schema."""
    assert len(choices) == 4, f'{qid}: need 4 choices'
    assert answer in (0,1,2,3), f'{qid}: bad answer'
    return {
        "id": qid,
        "subject": "apphyscem",
        "unit": 9,
        "topic": topic,
        "topicLabel": topic,
        "difficulty": difficulty,
        "type": "MCQ",
        "question": question,
        "choices": choices,
        "answer": answer,
        "explanation": explanation,
        "calculator": False,
        "isLatex": latex,
        "format": "latex" if latex else "text",
    }

NEW = []

# ── Point-charge potential & superposition ──────────────────────────────────
NEW.append(q('physc_u9_q801', 'electric potential', 'easy',
    r"A point charge $q = +4\,\mu\text{C}$ is located at the origin. What is the electric potential at a point $r = 2\,\text{m}$ away? Use $k = 9 \times 10^9\,\text{N·m}^2/\text{C}^2$.",
    [r"$9{,}000\,\text{V}$", r"$36{,}000\,\text{V}$", r"$18{,}000\,\text{V}$", r"$4{,}500\,\text{V}$"],
    2,
    r"$V = kq/r = (9 \times 10^9)(4 \times 10^{-6})/2 = 18{,}000\,\text{V}$. Choice A and D drop a factor of 2 or 4; Choice B forgets to divide by $r$.",
))

NEW.append(q('physc_u9_q802', 'electric potential', 'medium',
    r"Two point charges, $q_1 = +3\,\mu\text{C}$ and $q_2 = -3\,\mu\text{C}$, are placed at $x = -1\,\text{m}$ and $x = +1\,\text{m}$ respectively. What is the electric potential at the origin?",
    [r"$0\,\text{V}$", r"$+27{,}000\,\text{V}$", r"$-27{,}000\,\text{V}$", r"$+13{,}500\,\text{V}$"],
    0,
    r"Potential is a scalar sum: $V = kq_1/r_1 + kq_2/r_2$. Both points are equidistant ($r = 1\,\text{m}$), and the charges are equal and opposite, so $V = k(+3\,\mu\text{C})/1 + k(-3\,\mu\text{C})/1 = 0$. The electric field at the origin is non-zero, but potential is zero — common student error is to confuse the two.",
))

NEW.append(q('physc_u9_q803', 'electric potential', 'medium',
    r"Three identical $+q$ charges sit at the corners of an equilateral triangle of side $a$. What is the electric potential at the centroid (distance $a/\sqrt{3}$ from each vertex)?",
    [r"$kq/a$", r"$\sqrt{3}\,kq/a$", r"$3\sqrt{3}\,kq/a$", r"$3kq/a$"],
    2,
    r"Each charge contributes $kq/(a/\sqrt{3}) = \sqrt{3}\,kq/a$. Three identical charges give $V = 3\sqrt{3}\,kq/a$. Choice B forgets to multiply by 3 (number of charges); Choice D uses $r = a$ instead of $a/\sqrt{3}$.",
))

# ── Potential energy of configurations ──────────────────────────────────────
NEW.append(q('physc_u9_q804', 'potential energy electric', 'easy',
    r"What is the electric potential energy of a system of two point charges $q_1 = +2\,\mu\text{C}$ and $q_2 = -5\,\mu\text{C}$ separated by $r = 0.10\,\text{m}$?",
    [r"$+0.90\,\text{J}$", r"$-0.90\,\text{J}$", r"$+0.45\,\text{J}$", r"$-0.45\,\text{J}$"],
    1,
    r"$U = kq_1q_2/r = (9 \times 10^9)(2 \times 10^{-6})(-5 \times 10^{-6})/0.10 = -0.90\,\text{J}$. The negative sign indicates the system is bound — work must be done against the attractive force to separate the charges to infinity.",
))

NEW.append(q('physc_u9_q805', 'potential energy electric', 'hard',
    r"Three identical point charges $+q$ are brought from infinity and placed at the corners of an equilateral triangle of side $a$. What is the total work done by an external agent (= the system's electric potential energy)?",
    [r"$kq^2/a$", r"$2kq^2/a$", r"$3kq^2/a$", r"$6kq^2/a$"],
    2,
    r"There are $\binom{3}{2} = 3$ unique pairs, each contributing $U_{\text{pair}} = kq^2/a$. Total: $U = 3kq^2/a$. Common error is to count six pairs (Choice D) or forget to count interactions (Choice A).",
))

# ── Work done by/against the field ──────────────────────────────────────────
NEW.append(q('physc_u9_q806', 'electric potential', 'medium',
    r"A charge $q = +2\,\mu\text{C}$ is moved from a point at potential $V_a = +50\,\text{V}$ to a point at $V_b = -150\,\text{V}$. What is the work done by the electric field on the charge?",
    [r"$-4 \times 10^{-4}\,\text{J}$", r"$+2 \times 10^{-4}\,\text{J}$", r"$-2 \times 10^{-4}\,\text{J}$", r"$+4 \times 10^{-4}\,\text{J}$"],
    3,
    r"$W_{\text{field}} = -q\Delta V = -q(V_b - V_a) = -(2 \times 10^{-6})(-150 - 50) = -(2 \times 10^{-6})(-200) = +4 \times 10^{-4}\,\text{J}$. A positive charge naturally moves toward lower potential; the field does positive work. Sign-error gives Choice A.",
))

NEW.append(q('physc_u9_q807', 'electric potential', 'medium',
    r"An electron (charge $-e$, mass $m_e$) is accelerated from rest through a potential difference of $\Delta V = +100\,\text{V}$ (from low to high potential). Its final speed is approximately:",
    [r"$1.9 \times 10^7\,\text{m/s}$", r"$2.0 \times 10^5\,\text{m/s}$", r"$3.0 \times 10^8\,\text{m/s}$", r"$5.9 \times 10^6\,\text{m/s}$"],
    3,
    r"Energy conservation: $\tfrac{1}{2}m_e v^2 = e\Delta V$, so $v = \sqrt{2e\Delta V / m_e} = \sqrt{2(1.6 \times 10^{-19})(100)/(9.11 \times 10^{-31})} \approx 5.9 \times 10^6\,\text{m/s}$. Choice C is the speed of light, a non-relativistic-region check.",
))

# ── E from V (gradient) ─────────────────────────────────────────────────────
NEW.append(q('physc_u9_q808', 'field from potential', 'medium',
    r"The electric potential along the $x$-axis is given by $V(x) = 4x^3 - 6x^2 + 2$ (in volts, with $x$ in meters). What is the $x$-component of the electric field at $x = 1\,\text{m}$?",
    [r"$0\,\text{V/m}$", r"$+12\,\text{V/m}$", r"$-12\,\text{V/m}$", r"$-6\,\text{V/m}$"],
    0,
    r"$E_x = -dV/dx = -(12x^2 - 12x) = -12x^2 + 12x$. At $x = 1$: $E_x = -12 + 12 = 0$. This is a critical point of $V$, so the field vanishes there. Choice B drops the negative sign; Choice C plugs in incorrectly.",
))

NEW.append(q('physc_u9_q809', 'field from potential', 'hard',
    r"In a region where $V(x, y) = 3x^2 y - y^3$ (V, with x,y in m), what is the electric field vector at the point $(1, 2)$?",
    [r"$\langle -12, 9 \rangle\,\text{V/m}$", r"$\langle 12, -9 \rangle\,\text{V/m}$", r"$\langle -12, -9 \rangle\,\text{V/m}$", r"$\langle -6, 9 \rangle\,\text{V/m}$"],
    0,
    r"$\vec{E} = -\nabla V$. $\partial V/\partial x = 6xy$, so $E_x = -6xy = -6(1)(2) = -12$. $\partial V/\partial y = 3x^2 - 3y^2$, so $E_y = -(3 - 12) = +9$. Therefore $\vec{E} = \langle -12, 9 \rangle\,\text{V/m}$. Sign errors give the other choices.",
))

NEW.append(q('physc_u9_q810', 'field from potential', 'medium',
    r"In a region the electric potential varies as $V(r) = A/r$ where $A$ is a positive constant and $r$ is the radial distance from a fixed point. What is the magnitude of the electric field at distance $r$?",
    [r"$A/r^2$ (radially inward)", r"$A/r^2$ (radially outward)", r"$A/r$ (radially outward)", r"$2A/r^3$ (radially outward)"],
    1,
    r"$E_r = -dV/dr = -d/dr(A/r) = +A/r^2$. The positive sign means $\vec{E}$ points radially outward — consistent with a positive point charge having $V = kq/r$ and field $E = kq/r^2$ outward. The minus sign in $-dV/dr$ combines with $-1/r^2$ from differentiation to give a positive result.",
))

# ── V from continuous distributions ─────────────────────────────────────────
NEW.append(q('physc_u9_q811', 'electric potential', 'hard',
    r"A thin ring of radius $R$ carries a uniformly distributed total charge $+Q$. What is the electric potential at a point on the central axis at distance $z$ from the center of the ring?",
    [r"$kQ/R$", r"$kQ/z$", r"$kQ/\sqrt{R^2 + z^2}$", r"$kQz/(R^2 + z^2)^{3/2}$"],
    2,
    r"Every element of the ring is the same distance $\sqrt{R^2 + z^2}$ from the axial point. Since $V$ is a scalar, $V = kQ/\sqrt{R^2 + z^2}$. Choice D is the on-axis $E$-field of a ring (vector), not $V$. At $z = 0$: $V = kQ/R$ (Choice A is the special case).",
))

NEW.append(q('physc_u9_q812', 'electric potential', 'hard',
    r"A uniformly charged disk of radius $R$ has surface charge density $\sigma$. The potential on the central axis at distance $z > 0$ is $V(z) = (\sigma/2\varepsilon_0)\!\left[\sqrt{R^2 + z^2} - z\right]$. What is the magnitude of the electric field on the axis at distance $z$?",
    [r"$\dfrac{\sigma}{2\varepsilon_0}\!\left[1 - \dfrac{z}{\sqrt{R^2 + z^2}}\right]$",
     r"$\dfrac{\sigma}{2\varepsilon_0}\!\left[\dfrac{z}{\sqrt{R^2 + z^2}} - 1\right]$",
     r"$\dfrac{\sigma z}{2\varepsilon_0\sqrt{R^2 + z^2}}$",
     r"$\dfrac{\sigma}{2\varepsilon_0}$"],
    0,
    r"$E_z = -dV/dz = -(\sigma/2\varepsilon_0)\,d/dz[\sqrt{R^2+z^2} - z] = -(\sigma/2\varepsilon_0)[z/\sqrt{R^2+z^2} - 1] = (\sigma/2\varepsilon_0)[1 - z/\sqrt{R^2+z^2}]$. As $R \to \infty$ this approaches $\sigma/(2\varepsilon_0)$ (Choice D — the infinite-sheet limit, but only correct in that limit).",
))

# ── V from E (line integral) ────────────────────────────────────────────────
NEW.append(q('physc_u9_q813', 'potential from field', 'medium',
    r"A uniform electric field $\vec{E} = 200\,\hat{x}\,\text{V/m}$ exists in a region. What is the potential difference $V_A - V_B$ between point $A = (0, 0)$ and point $B = (3\,\text{m}, 4\,\text{m})$?",
    [r"$+1000\,\text{V}$", r"$+600\,\text{V}$", r"$-600\,\text{V}$", r"$-1000\,\text{V}$"],
    1,
    r"$V_A - V_B = -\!\int_B^A \vec{E} \cdot d\vec{\ell} = \int_A^B \vec{E} \cdot d\vec{\ell}$. With uniform $\vec{E}$, $V_A - V_B = \vec{E} \cdot (\vec{r}_B - \vec{r}_A) = (200)(3) + 0(4) = +600\,\text{V}$. The y-component of displacement contributes nothing because $E_y = 0$. Choice A wrongly uses the path length 5 m; sign errors give C/D.",
))

NEW.append(q('physc_u9_q814', 'potential from field', 'hard',
    r"In a region the electric field is $\vec{E}(x) = (6x^2)\,\hat{x}\,\text{V/m}$ (with x in meters). Taking $V(0) = 0$, what is the potential at $x = 2\,\text{m}$?",
    [r"$+24\,\text{V}$", r"$-24\,\text{V}$", r"$+16\,\text{V}$", r"$-16\,\text{V}$"],
    3,
    r"$V(x) - V(0) = -\int_0^x E_x\,dx' = -\int_0^2 6x'^2\,dx' = -[2x'^3]_0^2 = -16\,\text{V}$. So $V(2) = -16\,\text{V}$. The field points in $+\hat{x}$, so potential decreases in that direction — Choice C drops the sign.",
))

# ── Equipotential surfaces ──────────────────────────────────────────────────
NEW.append(q('physc_u9_q815', 'equipotential surfaces', 'easy',
    r"Which of the following statements about equipotential surfaces is TRUE?",
    [r"Equipotential surfaces are always parallel to the electric field.",
     r"Work done in moving a charge along an equipotential surface is zero.",
     r"Equipotential surfaces only exist near point charges.",
     r"The electric field magnitude is constant along an equipotential surface."],
    1,
    r"By definition $\Delta V = 0$ along an equipotential, so $W = -q\Delta V = 0$. Equipotentials are always perpendicular (not parallel) to $\vec{E}$ — Choice A is the opposite of the truth. Choice C is wrong (they exist for any field). Choice D is wrong: only $V$ is constant, not $|\vec{E}|$.",
))

NEW.append(q('physc_u9_q816', 'equipotential surfaces', 'medium',
    r"A solid metal sphere of radius $R$ carries net charge $+Q$ and sits in electrostatic equilibrium. Which statement about its electric potential is correct?",
    [r"The potential is highest at the center and decreases with $r$.",
     r"The potential inside the sphere is zero.",
     r"The potential is constant everywhere inside (and on) the sphere, equal to $kQ/R$.",
     r"The potential outside increases linearly with distance from the surface."],
    2,
    r"In a conductor at equilibrium, $\vec{E} = 0$ inside, so $\nabla V = 0$ — i.e., $V$ is uniform throughout the conductor and equal to its surface value $kQ/R$. Outside, $V = kQ/r$ (decreases as $1/r$, Choice D wrong). Choice A confuses field with potential intuition; Choice B confuses zero field with zero potential.",
))

# ── Mixed conceptual / synthesis ────────────────────────────────────────────
NEW.append(q('physc_u9_q817', 'electric potential', 'medium',
    r"A proton and an alpha particle (charge $+2e$, mass $\approx 4m_p$) are accelerated from rest through the same potential difference $\Delta V$. The ratio of their final kinetic energies $K_\alpha / K_p$ is:",
    [r"$1/2$", r"$1$", r"$4$", r"$2$"],
    3,
    r"$K = q\Delta V$. Since the alpha has twice the charge, $K_\alpha = 2e\Delta V$ while $K_p = e\Delta V$. The ratio is 2. Mass does not appear because the work done by the field depends only on charge and $\Delta V$ — the alpha ends up slower than the proton ($v \propto \sqrt{q/m}$), but its kinetic energy is twice as large.",
))

NEW.append(q('physc_u9_q818', 'field from potential', 'medium',
    r"The graph of $V(x)$ versus $x$ along a line shows a region where $V$ decreases steeply from 12 V to 4 V over $\Delta x = 2\,\text{m}$ (approximately linear). What is the electric field $E_x$ in that region?",
    [r"$+4\,\text{V/m}$", r"$-4\,\text{V/m}$", r"$+8\,\text{V/m}$", r"$-2\,\text{V/m}$"],
    0,
    r"$E_x = -dV/dx \approx -(\Delta V/\Delta x) = -((4 - 12)/2) = -(-4) = +4\,\text{V/m}$. The positive sign shows the field points in $+\hat{x}$, the direction of decreasing $V$. Choice B drops the leading minus sign.",
))

# ── Self-validation ─────────────────────────────────────────────────────────
ids = [x['id'] for x in NEW]
assert len(ids) == len(set(ids)) == 18, f'{len(ids)} not 18 unique'
ans_dist = Counter(x['answer'] for x in NEW)
print(f'Generated {len(NEW)} questions. Answer distribution: {dict(sorted(ans_dist.items()))}')
for x in NEW:
    assert len(x['choices']) == 4
    assert x['answer'] in (0,1,2,3)
    assert x['unit'] == 9 and x['subject'] == 'apphyscem'
    assert len(x['explanation']) >= 100, f'{x["id"]}: short explanation'
print('Self-checks passed.')

# ── Apply to files ──────────────────────────────────────────────────────────
def process(path):
    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'ERROR: cannot parse {path}'); sys.exit(1)
    questions = json.loads(m.group(1))
    existing_ids = {q.get('id') for q in questions}
    overlap = [x['id'] for x in NEW if x['id'] in existing_ids]
    assert not overlap, f'ID collisions: {overlap}'

    if not DRY_RUN:
        questions.extend(NEW)
        # Sanity: U9 count
        u9_total = sum(1 for q in questions if q.get('subject')=='apphyscem' and q.get('unit')==9)
        assert 50 <= u9_total <= 60, f'U9 total {u9_total} out of expected range'
        prefix = text[:m.start(1)]
        suffix = text[m.end(1):]
        path.write_text(prefix + json.dumps(questions, indent=2, ensure_ascii=False) + suffix)
        print(f'  wrote {path.name} (U9 now {u9_total})')
    else:
        print(f'  [DRY] would add {len(NEW)} → U9 would become {37 + len(NEW)}')

print(f'\n{"=== DRY RUN ===" if DRY_RUN else "=== LIVE RUN ==="}')
for t in TARGETS:
    print(f'\n{t.name}:')
    process(t)
print('\nDone.')

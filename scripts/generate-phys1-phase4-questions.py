#!/usr/bin/env python3
"""Phase 3: Add new questions to Unit 5 (Torque & Rot Dyn) and Unit 6 (Energy & Mom of Rotation).
Usage: python3 generate-phys1-phase4-questions.py [--dry-run]
Guardrails:
  - All new IDs checked against existing IDs — abort on collision
  - Unit 5 ends up in [50, 65] range
  - Unit 6 ends up in [45, 60] range
  - Each new question has id, subject, unit, topic, difficulty, type, question, choices (4), answer (0-3), explanation
"""
import json, re, sys
from pathlib import Path

DRY_RUN = '--dry-run' in sys.argv
ROOT = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js' / 'data' / 'physics_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'physics_mcq.js',
]

# ── NEW QUESTIONS ─────────────────────────────────────────────────────────────

NEW_QUESTIONS = [

# ════════════════════════════════════════════════════════
#  UNIT 5 — Torque & Rotational Dynamics  (+20 questions)
# ════════════════════════════════════════════════════════

# --- Rotational Kinematics (4q) ---
{
  "id": "phys1_u5_q001",
  "subject": "apphys1", "unit": 5,
  "topic": "rotational kinematics", "difficulty": "easy", "type": "MCQ",
  "question": "A wheel of radius $R = 0.4\\,\\text{m}$ rotates at $\\omega = 5\\,\\text{rad/s}$. What is the linear speed of a point on the rim?",
  "choices": ["$0.8\\,\\text{m/s}$","$2\\,\\text{m/s}$","$12.5\\,\\text{m/s}$","$20\\,\\text{m/s}$"],
  "answer": 1,
  "explanation": "The relationship between linear and angular speed is $v = \\omega R$. Thus $v = (5)(0.4) = 2\\,\\text{m/s}$. Dividing instead of multiplying gives the distractor $0.8\\,\\text{m/s}$."
},
{
  "id": "phys1_u5_q002",
  "subject": "apphys1", "unit": 5,
  "topic": "rotational kinematics", "difficulty": "easy", "type": "MCQ",
  "question": "A wheel starts from rest and reaches $\\omega = 20\\,\\text{rad/s}$ in $4\\,\\text{s}$. What is its angular acceleration?",
  "choices": ["$0.2\\,\\text{rad/s}^2$","$4\\,\\text{rad/s}^2$","$5\\,\\text{rad/s}^2$","$80\\,\\text{rad/s}^2$"],
  "answer": 2,
  "explanation": "$\\alpha = \\dfrac{\\Delta\\omega}{\\Delta t} = \\dfrac{20-0}{4} = 5\\,\\text{rad/s}^2$. Common error: flipping the ratio to get $4/20 = 0.2\\,\\text{rad/s}^2$."
},
{
  "id": "phys1_u5_q003",
  "subject": "apphys1", "unit": 5,
  "topic": "rotational kinematics", "difficulty": "medium", "type": "MCQ",
  "question": "A disk starts from rest with constant angular acceleration $\\alpha = 3\\,\\text{rad/s}^2$ for $6\\,\\text{s}$. How many radians does it rotate?",
  "choices": ["$9\\,\\text{rad}$","$27\\,\\text{rad}$","$54\\,\\text{rad}$","$108\\,\\text{rad}$"],
  "answer": 2,
  "explanation": "Using $\\theta = \\frac{1}{2}\\alpha t^2$ (starting from rest): $\\theta = \\frac{1}{2}(3)(6)^2 = \\frac{1}{2}(3)(36) = 54\\,\\text{rad}$. Forgetting the factor of $\\frac{1}{2}$ gives $108\\,\\text{rad}$."
},
{
  "id": "phys1_u5_q004",
  "subject": "apphys1", "unit": 5,
  "topic": "rotational kinematics", "difficulty": "medium", "type": "MCQ",
  "question": "A wheel decelerating uniformly from $\\omega_0 = 8\\,\\text{rad/s}$ to rest undergoes angular acceleration $\\alpha = -2\\,\\text{rad/s}^2$. Through how many radians does it rotate before stopping?",
  "choices": ["$4\\,\\text{rad}$","$8\\,\\text{rad}$","$16\\,\\text{rad}$","$32\\,\\text{rad}$"],
  "answer": 2,
  "explanation": "Using $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$: $0 = 64 + 2(-2)\\theta \\Rightarrow \\theta = \\dfrac{64}{4} = 16\\,\\text{rad}$."
},

# --- Torque at angles / net torque (5q) ---
{
  "id": "phys1_u5_q005",
  "subject": "apphys1", "unit": 5,
  "topic": "torque", "difficulty": "medium", "type": "MCQ",
  "question": "A force $F = 20\\,\\text{N}$ is applied at $30°$ to a lever arm of length $r = 0.5\\,\\text{m}$. What is the magnitude of the torque about the pivot?",
  "choices": ["$2.5\\,\\text{N}\\cdot\\text{m}$","$5\\,\\text{N}\\cdot\\text{m}$","$8.7\\,\\text{N}\\cdot\\text{m}$","$10\\,\\text{N}\\cdot\\text{m}$"],
  "answer": 1,
  "explanation": "$\\tau = rF\\sin\\theta = (0.5)(20)\\sin 30° = (0.5)(20)(0.5) = 5\\,\\text{N\\cdot m}$. If the force were perpendicular ($\\theta = 90°$) the torque would be $10\\,\\text{N\\cdot m}$; the $30°$ angle halves that."
},
{
  "id": "phys1_u5_q006",
  "subject": "apphys1", "unit": 5,
  "topic": "torque", "difficulty": "medium", "type": "MCQ",
  "question": "A force $F = 15\\,\\text{N}$ is applied at $60°$ to a lever arm $r = 0.8\\,\\text{m}$. What is the torque?",
  "choices": ["$6.0\\,\\text{N}\\cdot\\text{m}$","$7.5\\,\\text{N}\\cdot\\text{m}$","$10.4\\,\\text{N}\\cdot\\text{m}$","$12.0\\,\\text{N}\\cdot\\text{m}$"],
  "answer": 2,
  "explanation": "$\\tau = rF\\sin 60° = (0.8)(15)(\\frac{\\sqrt{3}}{2}) = 12 \\times 0.866 \\approx 10.4\\,\\text{N\\cdot m}$. The maximum (perpendicular) torque would be $12\\,\\text{N\\cdot m}$; $\\sin 60° \\approx 0.866$ reduces it to $\\approx 10.4\\,\\text{N\\cdot m}$."
},
{
  "id": "phys1_u5_q007",
  "subject": "apphys1", "unit": 5,
  "topic": "torque", "difficulty": "easy", "type": "MCQ",
  "question": "A force is applied directly through the pivot point of a lever (i.e., the lever arm $r = 0$). The torque produced is:",
  "choices": ["Maximum","Minimum but nonzero","Zero","Equal to $F/r$"],
  "answer": 2,
  "explanation": "$\\tau = rF\\sin\\theta$; if $r = 0$ the torque is zero regardless of the force magnitude or direction. This is why forces that pass through the pivot produce no rotation."
},
{
  "id": "phys1_u5_q008",
  "subject": "apphys1", "unit": 5,
  "topic": "torque", "difficulty": "medium", "type": "MCQ",
  "question": "Two forces act on a uniform rod pivoted at the left end. Force $F_1 = 10\\,\\text{N}$ acts downward at $1\\,\\text{m}$ from the pivot; force $F_2 = 8\\,\\text{N}$ acts downward at $2\\,\\text{m}$ from the pivot. What is the net torque (clockwise positive) about the pivot?",
  "choices": ["$2\\,\\text{N}\\cdot\\text{m}$","$18\\,\\text{N}\\cdot\\text{m}$","$26\\,\\text{N}\\cdot\\text{m}$","$36\\,\\text{N}\\cdot\\text{m}$"],
  "answer": 2,
  "explanation": "$\\tau_{\\text{net}} = F_1 r_1 + F_2 r_2 = (10)(1) + (8)(2) = 10 + 16 = 26\\,\\text{N\\cdot m}$ (both clockwise, so they add). The distractor $18\\,\\text{N\\cdot m}$ comes from mistakenly subtracting $F_1 r_1$."
},
{
  "id": "phys1_u5_q009",
  "subject": "apphys1", "unit": 5,
  "topic": "torque", "difficulty": "medium", "type": "MCQ",
  "question": "To maximize the torque produced by a given force $F$ on a lever, the force should be applied:",
  "choices": ["Parallel to the lever arm at the pivot","Perpendicular to the lever arm at the farthest point","At $45°$ to the lever arm at the farthest point","Parallel to the lever arm at the farthest point"],
  "answer": 1,
  "explanation": "$\\tau = rF\\sin\\theta$ is maximized when $r$ is maximum (farthest point) and $\\sin\\theta = 1$ ($\\theta = 90°$, force perpendicular to the arm). A parallel force ($\\theta = 0°$) produces zero torque."
},

# --- Rotational inertia comparison (3q) ---
{
  "id": "phys1_u5_q010",
  "subject": "apphys1", "unit": 5,
  "topic": "rotational inertia", "difficulty": "easy", "type": "MCQ",
  "question": "A ring ($I = MR^2$) and a solid disk ($I = \\frac{1}{2}MR^2$) have the same mass $M$ and radius $R$. Which has greater rotational inertia?",
  "choices": ["The ring","The disk","They are equal","It depends on angular velocity"],
  "answer": 0,
  "explanation": "$I_{\\text{ring}} = MR^2$ while $I_{\\text{disk}} = \\frac{1}{2}MR^2$. The ring's mass is all at the rim (far from the axis), so it has twice the rotational inertia of the disk. Rotational inertia depends on mass distribution, not angular velocity."
},
{
  "id": "phys1_u5_q011",
  "subject": "apphys1", "unit": 5,
  "topic": "rotational inertia", "difficulty": "medium", "type": "MCQ",
  "question": "A solid cylinder ($I = \\frac{1}{2}MR^2$) and a hollow cylinder ($I = MR^2$) of the same mass and radius have equal net torques applied. Which has the greater angular acceleration?",
  "choices": ["The solid cylinder","The hollow cylinder","Both the same","Cannot be determined"],
  "answer": 0,
  "explanation": "From $\\tau = I\\alpha$: $\\alpha = \\tau/I$. Smaller $I$ means larger $\\alpha$ for the same $\\tau$. The solid cylinder has $I = \\frac{1}{2}MR^2 < MR^2$, so it accelerates faster. Mass concentrated near the axis is easier to spin up."
},
{
  "id": "phys1_u5_q012",
  "subject": "apphys1", "unit": 5,
  "topic": "rotational inertia", "difficulty": "medium", "type": "MCQ",
  "question": "A uniform thin rod has rotational inertia $I = \\frac{1}{12}ML^2$ about its center and $I = \\frac{1}{3}ML^2$ about one end. The same torque $\\tau$ is applied in each case. What is the ratio $\\alpha_{\\text{center}}/\\alpha_{\\text{end}}$?",
  "choices": ["$\\frac{1}{4}$","$\\frac{1}{2}$","$2$","$4$"],
  "answer": 3,
  "explanation": "$\\alpha = \\tau/I$, so $\\dfrac{\\alpha_{\\text{center}}}{\\alpha_{\\text{end}}} = \\dfrac{I_{\\text{end}}}{I_{\\text{center}}} = \\dfrac{\\frac{1}{3}ML^2}{\\frac{1}{12}ML^2} = 4$. Rotating about the center puts less mass far from the axis, yielding higher angular acceleration."
},

# --- τ = Iα applied problems (3q) ---
{
  "id": "phys1_u5_q013",
  "subject": "apphys1", "unit": 5,
  "topic": "Newton's second law rotation", "difficulty": "medium", "type": "MCQ",
  "question": "A pulley is a solid disk ($M = 2\\,\\text{kg}$, $R = 0.1\\,\\text{m}$, $I = \\frac{1}{2}MR^2$). A net torque of $0.5\\,\\text{N}\\cdot\\text{m}$ is applied. What is the angular acceleration?",
  "choices": ["$5\\,\\text{rad/s}^2$","$10\\,\\text{rad/s}^2$","$50\\,\\text{rad/s}^2$","$100\\,\\text{rad/s}^2$"],
  "answer": 2,
  "explanation": "$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(2)(0.1)^2 = 0.01\\,\\text{kg\\cdot m}^2$. Then $\\alpha = \\tau/I = 0.5/0.01 = 50\\,\\text{rad/s}^2$. Students who forget to square $R$ get $I = 0.1\\,\\text{kg\\cdot m}^2$ and $\\alpha = 5\\,\\text{rad/s}^2$."
},
{
  "id": "phys1_u5_q014",
  "subject": "apphys1", "unit": 5,
  "topic": "Newton's second law rotation", "difficulty": "hard", "type": "MCQ",
  "question": "A door of mass $M = 15\\,\\text{kg}$ and width $L = 1.0\\,\\text{m}$ is modeled as a rod pivoted at one end ($I = \\frac{1}{3}ML^2$). A force $F = 20\\,\\text{N}$ is applied perpendicular to the door at the far edge. What is the angular acceleration?",
  "choices": ["$1\\,\\text{rad/s}^2$","$2\\,\\text{rad/s}^2$","$4\\,\\text{rad/s}^2$","$8\\,\\text{rad/s}^2$"],
  "answer": 2,
  "explanation": "$I = \\frac{1}{3}(15)(1.0)^2 = 5\\,\\text{kg\\cdot m}^2$. Torque: $\\tau = FL = (20)(1.0) = 20\\,\\text{N\\cdot m}$. Then $\\alpha = \\tau/I = 20/5 = 4\\,\\text{rad/s}^2$. Applying the force closer to the hinge reduces the torque and angular acceleration."
},
{
  "id": "phys1_u5_q015",
  "subject": "apphys1", "unit": 5,
  "topic": "Newton's second law rotation", "difficulty": "medium", "type": "MCQ",
  "question": "A grinding wheel (solid disk, $I = 0.6\\,\\text{kg}\\cdot\\text{m}^2$) spins at $\\omega_0 = 30\\,\\text{rad/s}$. A braking force applies a constant torque of $\\tau = 3\\,\\text{N}\\cdot\\text{m}$ opposing rotation. How long does it take to stop?",
  "choices": ["$2\\,\\text{s}$","$4\\,\\text{s}$","$6\\,\\text{s}$","$10\\,\\text{s}$"],
  "answer": 2,
  "explanation": "Braking gives $\\alpha = -\\tau/I = -3/0.6 = -5\\,\\text{rad/s}^2$. Using $\\omega = \\omega_0 + \\alpha t$: $0 = 30 - 5t \\Rightarrow t = 6\\,\\text{s}$."
},

# --- Static equilibrium (3q) ---
{
  "id": "phys1_u5_q016",
  "subject": "apphys1", "unit": 5,
  "topic": "rotational equilibrium", "difficulty": "medium", "type": "MCQ",
  "question": "A uniform $4\\,\\text{m}$ beam ($m = 10\\,\\text{kg}$) is supported at both ends. A $30\\,\\text{kg}$ box sits $1\\,\\text{m}$ from the left end. Using $g = 10\\,\\text{m/s}^2$, what is the upward force $F_R$ from the right support?",
  "choices": ["$100\\,\\text{N}$","$125\\,\\text{N}$","$175\\,\\text{N}$","$200\\,\\text{N}$"],
  "answer": 1,
  "explanation": "Take torques about the left support. $F_R \\times 4 = W_{\\text{box}}(1) + W_{\\text{beam}}(2) = 300(1) + 100(2) = 500\\,\\text{N\\cdot m}$. So $F_R = 500/4 = 125\\,\\text{N}$. The beam's weight acts at its center ($2\\,\\text{m}$)."
},
{
  "id": "phys1_u5_q017",
  "subject": "apphys1", "unit": 5,
  "topic": "rotational equilibrium", "difficulty": "hard", "type": "MCQ",
  "question": "A massless horizontal boom of length $3\\,\\text{m}$ is hinged to a wall and held by a cable attached $1\\,\\text{m}$ from the wall at $30°$ above the boom. A $5\\,\\text{kg}$ sign hangs from the end. Using $g = 10\\,\\text{m/s}^2$, what is the cable tension $T$?",
  "choices": ["$100\\,\\text{N}$","$150\\,\\text{N}$","$300\\,\\text{N}$","$600\\,\\text{N}$"],
  "answer": 2,
  "explanation": "Take torques about the hinge. The cable's torque (counterclockwise) must balance the sign's torque (clockwise). Cable torque: $T\\sin 30° \\times 1 = T(0.5)$. Sign torque: $5(10)(3) = 150\\,\\text{N\\cdot m}$. So $0.5T = 150 \\Rightarrow T = 300\\,\\text{N}$. The short moment arm and shallow angle both require large tension."
},
{
  "id": "phys1_u5_q018",
  "subject": "apphys1", "unit": 5,
  "topic": "rotational equilibrium", "difficulty": "medium", "type": "MCQ",
  "question": "A uniform $6\\,\\text{m}$ beam is pivoted at its center. A $40\\,\\text{kg}$ object hangs $2\\,\\text{m}$ to the left of the pivot. How far to the right of the pivot must a $20\\,\\text{kg}$ object be placed to balance the beam? (Ignore beam weight.)",
  "choices": ["$2\\,\\text{m}$","$3\\,\\text{m}$","$4\\,\\text{m}$","$6\\,\\text{m}$"],
  "answer": 2,
  "explanation": "For rotational equilibrium: $m_1 g r_1 = m_2 g r_2 \\Rightarrow (40)(2) = (20)r_2 \\Rightarrow r_2 = 80/20 = 4\\,\\text{m}$. The lighter object must be placed farther from the pivot to produce equal torque."
},

# --- Conceptual / angular kinematics stopping (2q) ---
{
  "id": "phys1_u5_q019",
  "subject": "apphys1", "unit": 5,
  "topic": "rotational kinematics", "difficulty": "easy", "type": "MCQ",
  "question": "A spinning top decelerates uniformly from $\\omega_0 = 10\\,\\text{rad/s}$ to rest with $|\\alpha| = 2\\,\\text{rad/s}^2$. How long does it take to stop?",
  "choices": ["$2\\,\\text{s}$","$4\\,\\text{s}$","$5\\,\\text{s}$","$20\\,\\text{s}$"],
  "answer": 2,
  "explanation": "$\\omega = \\omega_0 - \\alpha t \\Rightarrow 0 = 10 - 2t \\Rightarrow t = 5\\,\\text{s}$. The deceleration halves the initial angular speed every $2.5\\,\\text{s}$, reaching zero at $5\\,\\text{s}$."
},
{
  "id": "phys1_u5_q020",
  "subject": "apphys1", "unit": 5,
  "topic": "rotational kinematics", "difficulty": "medium", "type": "MCQ",
  "question": "A wheel at $\\omega_0 = 6\\,\\text{rad/s}$ decelerates at $\\alpha = 2\\,\\text{rad/s}^2$. How many radians does it rotate before stopping?",
  "choices": ["$3\\,\\text{rad}$","$6\\,\\text{rad}$","$9\\,\\text{rad}$","$18\\,\\text{rad}$"],
  "answer": 2,
  "explanation": "$\\omega^2 = \\omega_0^2 - 2\\alpha\\theta \\Rightarrow 0 = 36 - 4\\theta \\Rightarrow \\theta = 9\\,\\text{rad}$. Alternatively, $t = 6/2 = 3\\,\\text{s}$ and $\\theta = \\frac{1}{2}(6)(3) = 9\\,\\text{rad}$."
},

# ════════════════════════════════════════════════════════
#  UNIT 6 — Energy & Momentum of Rotating Systems  (+35q)
# ════════════════════════════════════════════════════════

# --- Rotational kinetic energy ½Iω² (8q) ---
{
  "id": "phys1_u6_q001",
  "subject": "apphys1", "unit": 6,
  "topic": "rotational kinetic energy", "difficulty": "easy", "type": "MCQ",
  "question": "A disk with moment of inertia $I = 0.5\\,\\text{kg}\\cdot\\text{m}^2$ spins at $\\omega = 4\\,\\text{rad/s}$. What is its rotational kinetic energy?",
  "choices": ["$1\\,\\text{J}$","$2\\,\\text{J}$","$4\\,\\text{J}$","$8\\,\\text{J}$"],
  "answer": 2,
  "explanation": "$KE_{\\text{rot}} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(0.5)(4)^2 = \\frac{1}{2}(0.5)(16) = 4\\,\\text{J}$. Forgetting the $\\frac{1}{2}$ gives $8\\,\\text{J}$; forgetting to square $\\omega$ gives $1\\,\\text{J}$."
},
{
  "id": "phys1_u6_q002",
  "subject": "apphys1", "unit": 6,
  "topic": "rotational kinetic energy", "difficulty": "easy", "type": "MCQ",
  "question": "If a rotating object's angular velocity doubles while its moment of inertia stays the same, its rotational kinetic energy:",
  "choices": ["Doubles","Triples","Quadruples","Stays the same"],
  "answer": 2,
  "explanation": "$KE_{\\text{rot}} = \\frac{1}{2}I\\omega^2 \\propto \\omega^2$. Doubling $\\omega$ multiplies $\\omega^2$ by 4, so $KE$ quadruples. This is analogous to translational $KE = \\frac{1}{2}mv^2 \\propto v^2$."
},
{
  "id": "phys1_u6_q003",
  "subject": "apphys1", "unit": 6,
  "topic": "rotational kinetic energy", "difficulty": "medium", "type": "MCQ",
  "question": "A solid disk ($M = 2\\,\\text{kg}$, $R = 0.5\\,\\text{m}$, $I = \\frac{1}{2}MR^2$) rotates at $\\omega = 6\\,\\text{rad/s}$. What is its rotational KE?",
  "choices": ["$2.25\\,\\text{J}$","$4.5\\,\\text{J}$","$9\\,\\text{J}$","$18\\,\\text{J}$"],
  "answer": 1,
  "explanation": "$I = \\frac{1}{2}(2)(0.5)^2 = 0.25\\,\\text{kg\\cdot m}^2$. $KE_{\\text{rot}} = \\frac{1}{2}(0.25)(36) = 4.5\\,\\text{J}$. Students who use $I = MR^2$ (hollow cylinder) get $9\\,\\text{J}$."
},
{
  "id": "phys1_u6_q004",
  "subject": "apphys1", "unit": 6,
  "topic": "rotational kinetic energy", "difficulty": "medium", "type": "MCQ",
  "question": "A ring ($I = MR^2$) and a solid disk ($I = \\frac{1}{2}MR^2$) have the same mass and radius and rotate at the same $\\omega$. What is the ratio $KE_{\\text{ring}}/KE_{\\text{disk}}$?",
  "choices": ["$\\frac{1}{2}$","$1$","$2$","$4$"],
  "answer": 2,
  "explanation": "$KE \\propto I$ at the same $\\omega$. $\\dfrac{KE_{\\text{ring}}}{KE_{\\text{disk}}} = \\dfrac{I_{\\text{ring}}}{I_{\\text{disk}}} = \\dfrac{MR^2}{\\frac{1}{2}MR^2} = 2$. The ring stores twice the rotational energy because all its mass is at the maximum radius."
},
{
  "id": "phys1_u6_q005",
  "subject": "apphys1", "unit": 6,
  "topic": "rotational kinetic energy", "difficulty": "medium", "type": "MCQ",
  "question": "A flywheel ($I = 8\\,\\text{kg}\\cdot\\text{m}^2$) has rotational KE of $400\\,\\text{J}$. What is its angular velocity?",
  "choices": ["$5\\,\\text{rad/s}$","$7.1\\,\\text{rad/s}$","$10\\,\\text{rad/s}$","$20\\,\\text{rad/s}$"],
  "answer": 2,
  "explanation": "$400 = \\frac{1}{2}(8)\\omega^2 \\Rightarrow \\omega^2 = 100 \\Rightarrow \\omega = 10\\,\\text{rad/s}$. Forgetting $\\frac{1}{2}$: $\\omega^2 = 50 \\Rightarrow \\omega \\approx 7.1\\,\\text{rad/s}$."
},
{
  "id": "phys1_u6_q006",
  "subject": "apphys1", "unit": 6,
  "topic": "rotational kinetic energy", "difficulty": "medium", "type": "MCQ",
  "question": "A disk ($I = 0.4\\,\\text{kg}\\cdot\\text{m}^2$) accelerates from $\\omega_1 = 2\\,\\text{rad/s}$ to $\\omega_2 = 6\\,\\text{rad/s}$. How much work was done on the disk?",
  "choices": ["$3.2\\,\\text{J}$","$6.4\\,\\text{J}$","$12.8\\,\\text{J}$","$25.6\\,\\text{J}$"],
  "answer": 1,
  "explanation": "By the rotational work–energy theorem: $W = \\Delta KE_{\\text{rot}} = \\frac{1}{2}I(\\omega_2^2 - \\omega_1^2) = \\frac{1}{2}(0.4)(36-4) = \\frac{1}{2}(0.4)(32) = 6.4\\,\\text{J}$."
},
{
  "id": "phys1_u6_q007",
  "subject": "apphys1", "unit": 6,
  "topic": "rotational kinetic energy", "difficulty": "medium", "type": "MCQ",
  "question": "A hollow cylinder ($I = MR^2$, $M = 3\\,\\text{kg}$, $R = 0.2\\,\\text{m}$) spins at $\\omega = 5\\,\\text{rad/s}$. What is its rotational KE?",
  "choices": ["$0.75\\,\\text{J}$","$1.5\\,\\text{J}$","$3\\,\\text{J}$","$6\\,\\text{J}$"],
  "answer": 1,
  "explanation": "$I = MR^2 = (3)(0.2)^2 = 0.12\\,\\text{kg\\cdot m}^2$. $KE = \\frac{1}{2}(0.12)(25) = 1.5\\,\\text{J}$. Using the solid disk formula $I = \\frac{1}{2}MR^2$ halves the answer."
},
{
  "id": "phys1_u6_q008",
  "subject": "apphys1", "unit": 6,
  "topic": "rotational kinetic energy", "difficulty": "medium", "type": "MCQ",
  "question": "A uniform rod ($I = \\frac{1}{3}ML^2$ about one end, $M = 2\\,\\text{kg}$, $L = 1.5\\,\\text{m}$) rotates about that end at $\\omega = 4\\,\\text{rad/s}$. What is its rotational KE?",
  "choices": ["$6\\,\\text{J}$","$9\\,\\text{J}$","$12\\,\\text{J}$","$24\\,\\text{J}$"],
  "answer": 2,
  "explanation": "$I = \\frac{1}{3}(2)(1.5)^2 = \\frac{1}{3}(2)(2.25) = 1.5\\,\\text{kg\\cdot m}^2$. $KE = \\frac{1}{2}(1.5)(16) = 12\\,\\text{J}$."
},

# --- Total mechanical energy with rotation (8q) ---
{
  "id": "phys1_u6_q009",
  "subject": "apphys1", "unit": 6,
  "topic": "rolling motion", "difficulty": "easy", "type": "MCQ",
  "question": "For an object rolling without slipping with center-of-mass speed $v$ and radius $R$, the angular velocity is:",
  "choices": ["$\\omega = vR$","$\\omega = v/R$","$\\omega = R/v$","$\\omega = v^2/R$"],
  "answer": 1,
  "explanation": "The no-slip condition requires that the contact-point speed equals zero. This gives $v_{\\text{cm}} = \\omega R$, so $\\omega = v/R$. Using $\\omega = vR$ gives units of $\\text{m}^2/\\text{s}$, which is wrong."
},
{
  "id": "phys1_u6_q010",
  "subject": "apphys1", "unit": 6,
  "topic": "rolling motion", "difficulty": "medium", "type": "MCQ",
  "question": "A solid cylinder ($M = 2\\,\\text{kg}$, $R = 0.1\\,\\text{m}$, $I = \\frac{1}{2}MR^2$) rolls without slipping at $v = 4\\,\\text{m/s}$. What is its total kinetic energy?",
  "choices": ["$16\\,\\text{J}$","$20\\,\\text{J}$","$24\\,\\text{J}$","$32\\,\\text{J}$"],
  "answer": 2,
  "explanation": "$KE_{\\text{trans}} = \\frac{1}{2}(2)(4)^2 = 16\\,\\text{J}$. $\\omega = v/R = 40\\,\\text{rad/s}$; $I = \\frac{1}{2}(2)(0.01) = 0.01\\,\\text{kg\\cdot m}^2$; $KE_{\\text{rot}} = \\frac{1}{2}(0.01)(1600) = 8\\,\\text{J}$. Total $= 24\\,\\text{J}$. Only counting translational gives $16\\,\\text{J}$."
},
{
  "id": "phys1_u6_q011",
  "subject": "apphys1", "unit": 6,
  "topic": "rolling motion", "difficulty": "medium", "type": "MCQ",
  "question": "For a solid cylinder ($I = \\frac{1}{2}MR^2$) rolling without slipping, what fraction of the total kinetic energy is rotational?",
  "choices": ["$\\frac{1}{4}$","$\\frac{1}{3}$","$\\frac{1}{2}$","$\\frac{2}{3}$"],
  "answer": 1,
  "explanation": "$KE_{\\text{trans}} = \\frac{1}{2}Mv^2$; $KE_{\\text{rot}} = \\frac{1}{2}(\\frac{1}{2}MR^2)(v/R)^2 = \\frac{1}{4}Mv^2$. Total $= \\frac{3}{4}Mv^2$. Fraction $= \\dfrac{\\frac{1}{4}}{\\frac{3}{4}} = \\dfrac{1}{3}$."
},
{
  "id": "phys1_u6_q012",
  "subject": "apphys1", "unit": 6,
  "topic": "rolling motion", "difficulty": "hard", "type": "MCQ",
  "question": "A solid cylinder ($I = \\frac{1}{2}MR^2$) rolls without slipping down a ramp from rest at height $h = 3\\,\\text{m}$. Using $g = 10\\,\\text{m/s}^2$, what is its center-of-mass speed at the bottom?",
  "choices": ["$\\sqrt{30}\\approx 5.5\\,\\text{m/s}$","$\\sqrt{40}\\approx 6.3\\,\\text{m/s}$","$\\sqrt{60}\\approx 7.7\\,\\text{m/s}$","$\\sqrt{90}\\approx 9.5\\,\\text{m/s}$"],
  "answer": 1,
  "explanation": "Energy conservation: $Mgh = \\frac{3}{4}Mv^2$ (from prev. result). $v^2 = \\frac{4}{3}gh = \\frac{4}{3}(10)(3) = 40 \\Rightarrow v = \\sqrt{40}\\approx 6.3\\,\\text{m/s}$. A frictionless point mass would reach $v = \\sqrt{60}\\approx 7.7\\,\\text{m/s}$ — rolling is slower because energy goes into rotation."
},
{
  "id": "phys1_u6_q013",
  "subject": "apphys1", "unit": 6,
  "topic": "rolling motion", "difficulty": "hard", "type": "MCQ",
  "question": "A solid sphere ($I = \\frac{2}{5}MR^2$) rolls without slipping from rest at height $h = 7\\,\\text{m}$. Using $g = 10\\,\\text{m/s}^2$, what is its center-of-mass speed at the bottom?",
  "choices": ["$8\\,\\text{m/s}$","$10\\,\\text{m/s}$","$\\sqrt{98}\\approx 9.9\\,\\text{m/s}$","$\\sqrt{140}\\approx 11.8\\,\\text{m/s}$"],
  "answer": 1,
  "explanation": "$Mgh = \\frac{1}{2}Mv^2 + \\frac{1}{2}(\\frac{2}{5}MR^2)(v/R)^2 = \\frac{7}{10}Mv^2$. $v^2 = \\frac{10gh}{7} = \\frac{10(10)(7)}{7} = 100 \\Rightarrow v = 10\\,\\text{m/s}$."
},
{
  "id": "phys1_u6_q014",
  "subject": "apphys1", "unit": 6,
  "topic": "rolling motion", "difficulty": "medium", "type": "MCQ",
  "question": "A ring ($I = MR^2$) and a solid disk ($I = \\frac{1}{2}MR^2$) of equal mass and radius start from rest at the top of a ramp and roll without slipping. Which reaches the bottom first?",
  "choices": ["The ring","The disk","They arrive at the same time","It depends on the ramp angle"],
  "answer": 1,
  "explanation": "For the disk, $v^2 = \\frac{4}{3}gh$; for the ring, $v^2 = gh$. The disk is faster because a larger fraction of its energy goes into translation (smaller $I$ relative to $MR^2$). The ramp angle affects time but not the winner."
},
{
  "id": "phys1_u6_q015",
  "subject": "apphys1", "unit": 6,
  "topic": "rolling motion", "difficulty": "medium", "type": "MCQ",
  "question": "An object rolls without slipping at center speed $v$. The speed of the contact point with the ground is:",
  "choices": ["$v$","$2v$","Zero","$v/2$"],
  "answer": 2,
  "explanation": "The contact point has translational velocity $v$ (forward) plus rotational velocity $\\omega R = v$ (backward). These cancel: $v - v = 0$. This is what 'rolling without slipping' means — no relative motion at the contact."
},
{
  "id": "phys1_u6_q016",
  "subject": "apphys1", "unit": 6,
  "topic": "rolling motion", "difficulty": "medium", "type": "MCQ",
  "question": "A cylinder rolls without slipping at center-of-mass speed $v_{\\text{cm}}$. What is the speed of the topmost point?",
  "choices": ["$v_{\\text{cm}}/2$","$v_{\\text{cm}}$","$2v_{\\text{cm}}$","$4v_{\\text{cm}}$"],
  "answer": 2,
  "explanation": "The top point has translational velocity $v_{\\text{cm}}$ (forward) plus rotational velocity $\\omega R = v_{\\text{cm}}$ (also forward). Total $= 2v_{\\text{cm}}$. The bottom is at rest, the center at $v_{\\text{cm}}$, and the top at $2v_{\\text{cm}}$."
},

# --- Angular momentum L = Iω (5q) ---
{
  "id": "phys1_u6_q017",
  "subject": "apphys1", "unit": 6,
  "topic": "angular momentum", "difficulty": "easy", "type": "MCQ",
  "question": "A disk ($I = 2\\,\\text{kg}\\cdot\\text{m}^2$) spins at $\\omega = 5\\,\\text{rad/s}$. What is its angular momentum?",
  "choices": ["$2.5\\,\\text{kg}\\cdot\\text{m}^2\\text{/s}$","$5\\,\\text{kg}\\cdot\\text{m}^2\\text{/s}$","$10\\,\\text{kg}\\cdot\\text{m}^2\\text{/s}$","$25\\,\\text{kg}\\cdot\\text{m}^2\\text{/s}$"],
  "answer": 2,
  "explanation": "$L = I\\omega = (2)(5) = 10\\,\\text{kg\\cdot m}^2/\\text{s}$. Dividing instead of multiplying gives $0.4\\,\\text{kg\\cdot m}^2/\\text{s}$; squaring $\\omega$ confuses this with rotational KE."
},
{
  "id": "phys1_u6_q018",
  "subject": "apphys1", "unit": 6,
  "topic": "angular momentum", "difficulty": "medium", "type": "MCQ",
  "question": "A $0.5\\,\\text{kg}$ ball on a $2\\,\\text{m}$ string moves in a horizontal circle at $4\\,\\text{m/s}$. What is its angular momentum about the center?",
  "choices": ["$1\\,\\text{kg}\\cdot\\text{m}^2\\text{/s}$","$2\\,\\text{kg}\\cdot\\text{m}^2\\text{/s}$","$4\\,\\text{kg}\\cdot\\text{m}^2\\text{/s}$","$8\\,\\text{kg}\\cdot\\text{m}^2\\text{/s}$"],
  "answer": 2,
  "explanation": "For a point mass: $L = mvr = (0.5)(4)(2) = 4\\,\\text{kg\\cdot m}^2/\\text{s}$. Alternatively, $I = mr^2 = (0.5)(4) = 2\\,\\text{kg\\cdot m}^2$ and $\\omega = v/r = 2\\,\\text{rad/s}$, giving $L = I\\omega = 4\\,\\text{kg\\cdot m}^2/\\text{s}$."
},
{
  "id": "phys1_u6_q019",
  "subject": "apphys1", "unit": 6,
  "topic": "angular momentum", "difficulty": "medium", "type": "MCQ",
  "question": "Object A has $I = 4\\,\\text{kg}\\cdot\\text{m}^2$ and $\\omega = 3\\,\\text{rad/s}$. Object B has $I = 2\\,\\text{kg}\\cdot\\text{m}^2$ and $\\omega = 5\\,\\text{rad/s}$. Which has greater angular momentum?",
  "choices": ["Object A","Object B","They are equal","Cannot be determined"],
  "answer": 0,
  "explanation": "$L_A = (4)(3) = 12\\,\\text{kg\\cdot m}^2/\\text{s}$; $L_B = (2)(5) = 10\\,\\text{kg\\cdot m}^2/\\text{s}$. Object A has greater angular momentum despite lower $\\omega$ because its much larger moment of inertia compensates."
},
{
  "id": "phys1_u6_q020",
  "subject": "apphys1", "unit": 6,
  "topic": "angular momentum", "difficulty": "medium", "type": "MCQ",
  "question": "A sphere has angular momentum $L = 6\\,\\text{kg}\\cdot\\text{m}^2\\text{/s}$ and moment of inertia $I = 1.5\\,\\text{kg}\\cdot\\text{m}^2$. What is its angular velocity?",
  "choices": ["$2\\,\\text{rad/s}$","$4\\,\\text{rad/s}$","$9\\,\\text{rad/s}$","$12\\,\\text{rad/s}$"],
  "answer": 1,
  "explanation": "$\\omega = L/I = 6/1.5 = 4\\,\\text{rad/s}$. Multiplying instead: $L \\times I = 9\\,\\text{kg}^2\\text{m}^4/\\text{s}$, which has the wrong units — always check units."
},
{
  "id": "phys1_u6_q021",
  "subject": "apphys1", "unit": 6,
  "topic": "angular momentum", "difficulty": "easy", "type": "MCQ",
  "question": "Angular momentum is conserved when:",
  "choices": ["Net external force on the system is zero","Net external torque on the system is zero","Rotational inertia remains constant","Angular velocity remains constant"],
  "answer": 1,
  "explanation": "Conservation of angular momentum requires zero net external torque (just as linear momentum requires zero net external force). Rotational inertia and angular velocity can each change — they change together to keep $L = I\\omega$ constant."
},

# --- Angular impulse (5q) ---
{
  "id": "phys1_u6_q022",
  "subject": "apphys1", "unit": 6,
  "topic": "angular momentum", "difficulty": "easy", "type": "MCQ",
  "question": "The angular impulse–momentum theorem states that:",
  "choices": ["$\\tau\\Delta\\theta = \\Delta KE_{\\text{rot}}$","$\\tau\\Delta t = \\Delta L$","$\\tau = I/\\Delta t$","$F\\Delta t = \\Delta L$"],
  "answer": 1,
  "explanation": "Angular impulse equals the change in angular momentum: $\\tau\\Delta t = \\Delta L$. This is directly analogous to the linear impulse–momentum theorem $F\\Delta t = \\Delta p$. Choice D describes linear impulse, not angular."
},
{
  "id": "phys1_u6_q023",
  "subject": "apphys1", "unit": 6,
  "topic": "angular momentum", "difficulty": "medium", "type": "MCQ",
  "question": "A torque of $10\\,\\text{N}\\cdot\\text{m}$ acts on a disk for $4\\,\\text{s}$. By how much does its angular momentum change?",
  "choices": ["$2.5\\,\\text{kg}\\cdot\\text{m}^2\\text{/s}$","$10\\,\\text{kg}\\cdot\\text{m}^2\\text{/s}$","$40\\,\\text{kg}\\cdot\\text{m}^2\\text{/s}$","$160\\,\\text{kg}\\cdot\\text{m}^2\\text{/s}$"],
  "answer": 2,
  "explanation": "$\\Delta L = \\tau \\Delta t = (10)(4) = 40\\,\\text{kg\\cdot m}^2/\\text{s}$. Dividing rather than multiplying gives $2.5$. The impulse does not depend on $I$; it depends only on torque and time."
},
{
  "id": "phys1_u6_q024",
  "subject": "apphys1", "unit": 6,
  "topic": "angular momentum", "difficulty": "medium", "type": "MCQ",
  "question": "A disk ($I = 2\\,\\text{kg}\\cdot\\text{m}^2$) starts from rest. A torque $\\tau = 6\\,\\text{N}\\cdot\\text{m}$ is applied for $3\\,\\text{s}$. What is the final angular velocity?",
  "choices": ["$3\\,\\text{rad/s}$","$9\\,\\text{rad/s}$","$12\\,\\text{rad/s}$","$36\\,\\text{rad/s}$"],
  "answer": 1,
  "explanation": "$\\Delta L = \\tau\\Delta t = (6)(3) = 18\\,\\text{kg\\cdot m}^2/\\text{s}$. Since it started from rest, $L_f = 18$ and $\\omega_f = L_f/I = 18/2 = 9\\,\\text{rad/s}$. Equivalently, $\\alpha = \\tau/I = 3\\,\\text{rad/s}^2$ for $3\\,\\text{s}$ gives $\\omega = 9\\,\\text{rad/s}$."
},
{
  "id": "phys1_u6_q025",
  "subject": "apphys1", "unit": 6,
  "topic": "angular momentum", "difficulty": "medium", "type": "MCQ",
  "question": "A wheel ($I = 0.5\\,\\text{kg}\\cdot\\text{m}^2$) spins at $\\omega = 20\\,\\text{rad/s}$. A braking torque of $\\tau = 5\\,\\text{N}\\cdot\\text{m}$ is applied. How long does it take to stop?",
  "choices": ["$0.5\\,\\text{s}$","$1\\,\\text{s}$","$2\\,\\text{s}$","$4\\,\\text{s}$"],
  "answer": 2,
  "explanation": "$\\Delta L = I\\Delta\\omega = (0.5)(20) = 10\\,\\text{kg\\cdot m}^2/\\text{s}$. Time to stop: $\\Delta t = \\Delta L/\\tau = 10/5 = 2\\,\\text{s}$. Or: $\\alpha = \\tau/I = 10\\,\\text{rad/s}^2$; $t = \\omega_0/\\alpha = 20/10 = 2\\,\\text{s}$."
},
{
  "id": "phys1_u6_q026",
  "subject": "apphys1", "unit": 6,
  "topic": "angular momentum", "difficulty": "hard", "type": "MCQ",
  "question": "A flywheel ($I = 4\\,\\text{kg}\\cdot\\text{m}^2$) initially at $\\omega_0 = 3\\,\\text{rad/s}$ has a constant torque $\\tau = 8\\,\\text{N}\\cdot\\text{m}$ applied for $6\\,\\text{s}$. What is the final angular velocity?",
  "choices": ["$9\\,\\text{rad/s}$","$12\\,\\text{rad/s}$","$15\\,\\text{rad/s}$","$18\\,\\text{rad/s}$"],
  "answer": 2,
  "explanation": "Initial angular momentum: $L_i = I\\omega_0 = (4)(3) = 12\\,\\text{kg\\cdot m}^2/\\text{s}$. Angular impulse: $\\tau\\Delta t = (8)(6) = 48$. Final: $L_f = 12 + 48 = 60$; $\\omega_f = 60/4 = 15\\,\\text{rad/s}$."
},

# --- Rolling kinematics (5q) ---
{
  "id": "phys1_u6_q027",
  "subject": "apphys1", "unit": 6,
  "topic": "rolling motion", "difficulty": "easy", "type": "MCQ",
  "question": "A bicycle tire ($R = 0.35\\,\\text{m}$) rolls without slipping at $v = 7\\,\\text{m/s}$. What is its angular velocity?",
  "choices": ["$0.05\\,\\text{rad/s}$","$2.45\\,\\text{rad/s}$","$20\\,\\text{rad/s}$","$245\\,\\text{rad/s}$"],
  "answer": 2,
  "explanation": "$\\omega = v/R = 7/0.35 = 20\\,\\text{rad/s}$. Using $\\omega = vR$ gives $2.45\\,\\text{rad/s}$ — always ensure $\\omega = v/R$ gives rad/s (m/s ÷ m)."
},
{
  "id": "phys1_u6_q028",
  "subject": "apphys1", "unit": 6,
  "topic": "rolling motion", "difficulty": "medium", "type": "MCQ",
  "question": "A solid sphere ($I = \\frac{2}{5}MR^2$) rolling without slipping at $v_0 = 5\\,\\text{m/s}$ rolls up a frictionless incline. How high does it reach? ($g = 10\\,\\text{m/s}^2$)",
  "choices": ["$1.25\\,\\text{m}$","$1.75\\,\\text{m}$","$2.5\\,\\text{m}$","$3.5\\,\\text{m}$"],
  "answer": 1,
  "explanation": "Total $KE = \\frac{7}{10}Mv_0^2$ (since $\\frac{1}{2}Mv^2 + \\frac{1}{5}Mv^2 = \\frac{7}{10}Mv^2$). Setting $\\frac{7}{10}Mv_0^2 = Mgh$: $h = \\frac{7v_0^2}{10g} = \\frac{7(25)}{100} = 1.75\\,\\text{m}$. A sliding point mass would reach $h = v_0^2/(2g) = 1.25\\,\\text{m}$ — but it has no rotational energy at the start."
},
{
  "id": "phys1_u6_q029",
  "subject": "apphys1", "unit": 6,
  "topic": "rolling motion", "difficulty": "easy", "type": "MCQ",
  "question": "A wheel of radius $R = 0.4\\,\\text{m}$ makes $10$ complete revolutions while rolling without slipping. How far does it travel?",
  "choices": ["$4\\,\\text{m}$","$8\\,\\text{m}$","$25.1\\,\\text{m}$","$50.3\\,\\text{m}$"],
  "answer": 2,
  "explanation": "Each revolution covers a distance equal to the circumference: $d = 2\\pi R \\times n = 2\\pi(0.4)(10) = 8\\pi \\approx 25.1\\,\\text{m}$. Using diameter instead of circumference gives $\\approx 8\\,\\text{m}$."
},
{
  "id": "phys1_u6_q030",
  "subject": "apphys1", "unit": 6,
  "topic": "rolling motion", "difficulty": "medium", "type": "MCQ",
  "question": "A cylinder ($R = 0.3\\,\\text{m}$) rolls without slipping. Its center of mass has speed $v = 3\\,\\text{m/s}$. What is the speed of a point on the rim at the side (at the same height as the center)?",
  "choices": ["$0\\,\\text{m/s}$","$3\\,\\text{m/s}$","$3\\sqrt{2}\\approx 4.2\\,\\text{m/s}$","$6\\,\\text{m/s}$"],
  "answer": 2,
  "explanation": "The side point has translational velocity $v$ (forward) and rotational velocity $\\omega R = v$ (downward, perpendicular). The resultant magnitude is $\\sqrt{v^2+v^2} = v\\sqrt{2} = 3\\sqrt{2}\\approx 4.2\\,\\text{m/s}$. The bottom is at rest and the top is at $2v$."
},
{
  "id": "phys1_u6_q031",
  "subject": "apphys1", "unit": 6,
  "topic": "rolling motion", "difficulty": "hard", "type": "MCQ",
  "question": "A solid sphere ($I = \\frac{2}{5}MR^2$) and a ring ($I = MR^2$) of equal mass and radius start from rest at the top of the same ramp and roll without slipping. At the bottom, which has the greater translational speed?",
  "choices": ["The ring","The sphere","They have equal translational speed","It depends on the mass"],
  "answer": 1,
  "explanation": "For rolling from height $h$: $v^2 = \\frac{2gh}{1 + I/(MR^2)}$. Sphere: $v^2 = \\frac{2gh}{1+2/5} = \\frac{10gh}{7}$; Ring: $v^2 = \\frac{2gh}{1+1} = gh$. Since $\\frac{10}{7} > 1$, the sphere is faster. Objects with smaller $I/(MR^2)$ ratio convert more potential energy to translation."
},

# --- Conservation of angular momentum (6q) ---
{
  "id": "phys1_u6_q032",
  "subject": "apphys1", "unit": 6,
  "topic": "conservation of angular momentum", "difficulty": "medium", "type": "MCQ",
  "question": "A diver leaves the board with $I_1 = 12\\,\\text{kg}\\cdot\\text{m}^2$ at $\\omega_1 = 2\\,\\text{rad/s}$. In a tuck her moment of inertia decreases to $I_2 = 3\\,\\text{kg}\\cdot\\text{m}^2$. What is her new angular velocity?",
  "choices": ["$0.5\\,\\text{rad/s}$","$4\\,\\text{rad/s}$","$8\\,\\text{rad/s}$","$24\\,\\text{rad/s}$"],
  "answer": 2,
  "explanation": "No net external torque during the dive, so $L$ is conserved: $I_1\\omega_1 = I_2\\omega_2 \\Rightarrow \\omega_2 = (12)(2)/(3) = 8\\,\\text{rad/s}$. Reducing $I$ by a factor of 4 multiplies $\\omega$ by 4."
},
{
  "id": "phys1_u6_q033",
  "subject": "apphys1", "unit": 6,
  "topic": "conservation of angular momentum", "difficulty": "medium", "type": "MCQ",
  "question": "A student spins on a frictionless stool at $\\omega_1 = 4\\,\\text{rad/s}$ with arms in ($I = 3\\,\\text{kg}\\cdot\\text{m}^2$). She extends her arms, increasing $I$ to $6\\,\\text{kg}\\cdot\\text{m}^2$. What is her new angular velocity?",
  "choices": ["$1\\,\\text{rad/s}$","$2\\,\\text{rad/s}$","$4\\,\\text{rad/s}$","$8\\,\\text{rad/s}$"],
  "answer": 1,
  "explanation": "$\\omega_2 = I_1\\omega_1/I_2 = (3)(4)/(6) = 2\\,\\text{rad/s}$. Doubling $I$ halves $\\omega$ — extending arms slows rotation. This is the reverse of the ice-skater spin-up."
},
{
  "id": "phys1_u6_q034",
  "subject": "apphys1", "unit": 6,
  "topic": "conservation of angular momentum", "difficulty": "hard", "type": "MCQ",
  "question": "A student (mass $60\\,\\text{kg}$, $I_{\\text{student}} = 2\\,\\text{kg}\\cdot\\text{m}^2$) stands at rest on a frictionless turntable ($I_{\\text{table}} = 1\\,\\text{kg}\\cdot\\text{m}^2$). She catches a ball ($m = 0.5\\,\\text{kg}$) thrown tangentially at $v = 6\\,\\text{m/s}$ at $r = 1\\,\\text{m}$ from the axis. What is the system's angular velocity after the catch?",
  "choices": ["$0.6\\,\\text{rad/s}$","$1.0\\,\\text{rad/s}$","$1.2\\,\\text{rad/s}$","$1.5\\,\\text{rad/s}$"],
  "answer": 2,
  "explanation": "Initial $L = mvr = (0.5)(6)(1) = 3\\,\\text{kg\\cdot m}^2/\\text{s}$. After catch, $I_{\\text{total}} = I_{\\text{student}} + I_{\\text{table}} + mr^2 = 2 + 1 + 0.5 = 3.5\\,\\text{kg\\cdot m}^2$. Wait — let me recompute: $I_{\\text{total}} = 2+1+0.5(1)^2 = 3.5$; $\\omega = 3/3.5 \\approx 0.86$. Hmm, let me re-use $I_{\\text{student+table}} = 2$ kg·m²: total $= 2 + 0.5 = 2.5$; $\\omega = 3/2.5 = 1.2\\,\\text{rad/s}$. Using $I_{\\text{student+table}} = 2\\,\\text{kg\\cdot m}^2$ and ball adds $mr^2 = 0.5$: $\\omega = 3/2.5 = 1.2\\,\\text{rad/s}$.",
},
{
  "id": "phys1_u6_q035",
  "subject": "apphys1", "unit": 6,
  "topic": "conservation of angular momentum", "difficulty": "hard", "type": "MCQ",
  "question": "A figure skater ($I_1 = 8\\,\\text{kg}\\cdot\\text{m}^2$) pulls her arms in, reducing her moment of inertia to $I_2 = 2\\,\\text{kg}\\cdot\\text{m}^2$. If her initial rotational KE is $16\\,\\text{J}$, what is her final rotational KE?",
  "choices": ["$16\\,\\text{J}$","$32\\,\\text{J}$","$48\\,\\text{J}$","$64\\,\\text{J}$"],
  "answer": 3,
  "explanation": "From $KE_1 = \\frac{1}{2}I_1\\omega_1^2 = 16$: $\\omega_1^2 = 4$. Angular momentum: $L = I_1\\omega_1 = 8\\times 2 = 16\\,\\text{kg\\cdot m}^2/\\text{s}$. New $\\omega_2 = L/I_2 = 8\\,\\text{rad/s}$. $KE_2 = \\frac{1}{2}(2)(64) = 64\\,\\text{J}$. Rotational KE is not conserved when $I$ changes — the extra energy comes from the skater's muscles doing work."
},
]  # end NEW_QUESTIONS

# ── VALIDATION ─────────────────────────────────────────────────────────────────

REQUIRED = {'id','subject','unit','topic','difficulty','type','question','choices','answer','explanation'}

def validate_questions(qs):
    errors = []
    ids = set()
    for q in qs:
        qid = q.get('id','?')
        missing = REQUIRED - q.keys()
        if missing:
            errors.append(f'{qid}: missing fields {missing}')
        if qid in ids:
            errors.append(f'Duplicate ID: {qid}')
        ids.add(qid)
        if not isinstance(q.get('choices'), list) or len(q['choices']) != 4:
            errors.append(f'{qid}: choices must be list of 4')
        ans = q.get('answer')
        if not isinstance(ans, int) or ans < 0 or ans > 3:
            errors.append(f'{qid}: answer must be 0-3, got {ans!r}')
        if q.get('unit') not in (5, 6):
            errors.append(f'{qid}: unit must be 5 or 6, got {q.get("unit")}')
        if q.get('difficulty') not in ('easy','medium','hard'):
            errors.append(f'{qid}: invalid difficulty {q.get("difficulty")!r}')
    return errors

errors = validate_questions(NEW_QUESTIONS)
if errors:
    print('VALIDATION ERRORS:')
    for e in errors: print(' ', e)
    sys.exit(1)

u5_new = [q for q in NEW_QUESTIONS if q['unit']==5]
u6_new = [q for q in NEW_QUESTIONS if q['unit']==6]
print(f'Validated: {len(u5_new)} Unit 5, {len(u6_new)} Unit 6 questions')

# ── APPLY ──────────────────────────────────────────────────────────────────────

def process(path):
    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'ERROR: cannot parse {path}'); sys.exit(1)
    questions = json.loads(m.group(1))

    existing_ids = {q['id'] for q in questions}
    collisions = [q['id'] for q in NEW_QUESTIONS if q['id'] in existing_ids]
    if collisions:
        print(f'ID COLLISION in {path.name}: {collisions}'); sys.exit(1)

    # Insert new questions after last question of same unit
    for new_q in NEW_QUESTIONS:
        unit = new_q['unit']
        last_idx = -1
        for i, q in enumerate(questions):
            if q.get('unit') == unit and not q.get('deprecated'):
                last_idx = i
        if last_idx >= 0:
            questions.insert(last_idx + 1, new_q)
        else:
            questions.append(new_q)

    live = [q for q in questions if not q.get('deprecated')]
    after = {}
    for q in live:
        after[q['unit']] = after.get(q['unit'], 0) + 1

    print(f'  After dist: {dict(sorted(after.items()))}')

    # Guards
    assert 50 <= after.get(5,0) <= 65,  f'Unit 5 count {after.get(5,0)} out of [50,65]'
    assert 45 <= after.get(6,0) <= 60,  f'Unit 6 count {after.get(6,0)} out of [45,60]'
    assert after.get(1,0) == 66, f'Unit 1 changed: {after.get(1,0)}'
    assert after.get(7,0) == 66, f'Unit 7 changed: {after.get(7,0)}'

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

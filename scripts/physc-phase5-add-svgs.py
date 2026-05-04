#!/usr/bin/env python3
"""Phase 5: Add inline SVG diagrams (graphSvg field) to Physics C questions
whose text describes a setup that benefits from a figure.

Scope: ~15 reusable SVGs covering the highest-impact categories. A classifier
walks each question's text, matches the dominant setup, and assigns the
matching SVG. Targets ~90 questions across 6 unit buckets.

Categories (SVG name → typical questions):
  - svg_gauss_sphere      → Gaussian sphere around point/spherical charge
  - svg_gauss_cylinder    → Gaussian cylinder around line charge / wire
  - svg_charge_two        → two opposite point charges (dipole-ish)
  - svg_charge_triangle   → three charges at corners of an equilateral triangle
  - svg_parallel_plate    → parallel-plate capacitor with field arrows
  - svg_circuit_series    → battery + 2 resistors in series
  - svg_circuit_parallel  → battery + 2 resistors in parallel
  - svg_circuit_rc        → RC circuit (battery + resistor + capacitor + switch)
  - svg_wire_b_field      → long current-carrying wire with B-field circles
  - svg_solenoid          → solenoid with internal B-field
  - svg_charge_in_b       → positive charge moving in B-field (circular path)
  - svg_incline_block     → block on inclined plane
  - svg_atwood            → Atwood machine (pulley with two masses)
  - svg_projectile        → parabolic trajectory with v₀ at angle
  - svg_rolling_disk      → disk rolling without slipping on horizontal surface
  - svg_v_x_graph         → V vs x linear-decrease graph (for q818 specifically)

Usage: python3 physc-phase5-add-svgs.py [--dry-run]
"""
import json, re, sys
from pathlib import Path
from collections import Counter, defaultdict

DRY_RUN = '--dry-run' in sys.argv
ROOT    = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js'       / 'data' / 'physc_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'physc_mcq.js',
]

# ── SVG library ──────────────────────────────────────────────────────────────
# All SVGs share a common stylistic vocabulary: viewBox, theme-aware classes
# (svg-axis, svg-label) where defined, and accent colors for emphasis.

SVG_GAUSS_SPHERE = """<svg viewBox='0 0 280 220' xmlns='http://www.w3.org/2000/svg' style='max-width:280px;font-family:Inter,system-ui,sans-serif;font-size:12px'><circle cx='140' cy='110' r='80' fill='none' stroke='#3b82f6' stroke-width='2' stroke-dasharray='6 4'/><circle cx='140' cy='110' r='8' fill='#ef4444'/><text x='140' y='114' text-anchor='middle' fill='white' font-size='12' font-weight='700'>+q</text><line x1='140' y1='110' x2='220' y2='110' stroke='#64748b' stroke-width='1'/><text x='178' y='105' text-anchor='middle' fill='#64748b' font-size='11'>r</text><text x='200' y='40' text-anchor='middle' fill='#3b82f6' font-size='11' font-weight='600'>Gaussian surface</text><line x1='140' y1='110' x2='196' y2='54' stroke='#3b82f6' stroke-width='1.5'/><polygon points='200,50 192,57 196,49' fill='#3b82f6'/><text x='220' y='180' text-anchor='middle' fill='#64748b' font-size='10'>radius r</text></svg>"""

SVG_GAUSS_CYLINDER = """<svg viewBox='0 0 320 200' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;font-family:Inter,system-ui,sans-serif;font-size:12px'><line x1='30' y1='100' x2='290' y2='100' stroke='#ef4444' stroke-width='3'/><text x='285' y='92' fill='#ef4444' font-size='11' font-weight='700'>line charge λ</text><ellipse cx='160' cy='100' rx='30' ry='60' fill='none' stroke='#3b82f6' stroke-width='2' stroke-dasharray='6 4'/><line x1='130' y1='40' x2='190' y2='40' stroke='#3b82f6' stroke-width='2' stroke-dasharray='6 4'/><line x1='130' y1='160' x2='190' y2='160' stroke='#3b82f6' stroke-width='2' stroke-dasharray='6 4'/><line x1='160' y1='100' x2='200' y2='100' stroke='#64748b' stroke-width='1'/><text x='180' y='95' text-anchor='middle' fill='#64748b' font-size='11'>r</text><text x='160' y='185' text-anchor='middle' fill='#3b82f6' font-size='11' font-weight='600'>Gaussian cylinder (length L)</text></svg>"""

SVG_CHARGE_TWO = """<svg viewBox='0 0 280 160' xmlns='http://www.w3.org/2000/svg' style='max-width:280px;font-family:Inter,system-ui,sans-serif;font-size:12px'><circle cx='80' cy='80' r='14' fill='#ef4444'/><text x='80' y='85' text-anchor='middle' fill='white' font-size='13' font-weight='700'>+q</text><circle cx='200' cy='80' r='14' fill='#3b82f6'/><text x='200' y='85' text-anchor='middle' fill='white' font-size='13' font-weight='700'>−q</text><line x1='94' y1='80' x2='186' y2='80' stroke='#64748b' stroke-width='1' stroke-dasharray='4 3'/><text x='140' y='75' text-anchor='middle' fill='#64748b' font-size='11'>d</text><text x='140' y='105' text-anchor='middle' fill='#64748b' font-size='10'>(separation)</text><line x1='40' y1='130' x2='240' y2='130' stroke='#94a3b8' stroke-width='1'/><text x='40' y='145' fill='#94a3b8' font-size='10'>x = 0</text><text x='240' y='145' text-anchor='end' fill='#94a3b8' font-size='10'>x = d</text></svg>"""

SVG_CHARGE_TRIANGLE = """<svg viewBox='0 0 240 220' xmlns='http://www.w3.org/2000/svg' style='max-width:240px;font-family:Inter,system-ui,sans-serif;font-size:12px'><polygon points='120,40 50,170 190,170' fill='none' stroke='#94a3b8' stroke-width='1' stroke-dasharray='4 3'/><circle cx='120' cy='40' r='14' fill='#ef4444'/><text x='120' y='45' text-anchor='middle' fill='white' font-size='12' font-weight='700'>+q</text><circle cx='50' cy='170' r='14' fill='#ef4444'/><text x='50' y='175' text-anchor='middle' fill='white' font-size='12' font-weight='700'>+q</text><circle cx='190' cy='170' r='14' fill='#ef4444'/><text x='190' y='175' text-anchor='middle' fill='white' font-size='12' font-weight='700'>+q</text><text x='30' y='105' fill='#64748b' font-size='11'>a</text><text x='210' y='105' text-anchor='end' fill='#64748b' font-size='11'>a</text><text x='120' y='195' text-anchor='middle' fill='#64748b' font-size='11'>a</text><circle cx='120' cy='127' r='2.5' fill='#3b82f6'/><text x='130' y='131' fill='#3b82f6' font-size='10'>centroid</text></svg>"""

SVG_PARALLEL_PLATE = """<svg viewBox='0 0 280 200' xmlns='http://www.w3.org/2000/svg' style='max-width:280px;font-family:Inter,system-ui,sans-serif;font-size:12px'><line x1='40' y1='40' x2='240' y2='40' stroke='#ef4444' stroke-width='4'/><text x='250' y='44' fill='#ef4444' font-size='12' font-weight='700'>+σ</text><line x1='40' y1='160' x2='240' y2='160' stroke='#3b82f6' stroke-width='4'/><text x='250' y='164' fill='#3b82f6' font-size='12' font-weight='700'>−σ</text><line x1='80' y1='50' x2='80' y2='148' stroke='#64748b' stroke-width='1.5'/><polygon points='80,154 76,144 84,144' fill='#64748b'/><line x1='140' y1='50' x2='140' y2='148' stroke='#64748b' stroke-width='1.5'/><polygon points='140,154 136,144 144,144' fill='#64748b'/><line x1='200' y1='50' x2='200' y2='148' stroke='#64748b' stroke-width='1.5'/><polygon points='200,154 196,144 204,144' fill='#64748b'/><text x='160' y='105' fill='#64748b' font-size='11' font-weight='600'>E</text><line x1='30' y1='40' x2='30' y2='160' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3 3'/><text x='25' y='105' text-anchor='end' fill='#94a3b8' font-size='10'>d</text></svg>"""

SVG_CIRCUIT_SERIES = """<svg viewBox='0 0 320 180' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;font-family:Inter,system-ui,sans-serif;font-size:12px'><rect x='30' y='130' width='260' height='2' fill='#64748b'/><line x1='30' y1='130' x2='30' y2='60' stroke='#64748b' stroke-width='2'/><line x1='290' y1='130' x2='290' y2='60' stroke='#64748b' stroke-width='2'/><line x1='30' y1='60' x2='110' y2='60' stroke='#64748b' stroke-width='2'/><line x1='110' y1='55' x2='110' y2='65' stroke='#64748b' stroke-width='3'/><line x1='118' y1='50' x2='118' y2='70' stroke='#64748b' stroke-width='3'/><text x='95' y='45' fill='#64748b' font-size='11'>ε</text><line x1='118' y1='60' x2='160' y2='60' stroke='#64748b' stroke-width='2'/><rect x='160' y='52' width='40' height='16' fill='none' stroke='#ef4444' stroke-width='2'/><text x='180' y='45' text-anchor='middle' fill='#ef4444' font-size='11' font-weight='700'>R₁</text><line x1='200' y1='60' x2='240' y2='60' stroke='#64748b' stroke-width='2'/><rect x='240' y='52' width='40' height='16' fill='none' stroke='#ef4444' stroke-width='2'/><text x='260' y='45' text-anchor='middle' fill='#ef4444' font-size='11' font-weight='700'>R₂</text><line x1='280' y1='60' x2='290' y2='60' stroke='#64748b' stroke-width='2'/></svg>"""

SVG_CIRCUIT_PARALLEL = """<svg viewBox='0 0 320 200' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;font-family:Inter,system-ui,sans-serif;font-size:12px'><line x1='30' y1='170' x2='290' y2='170' stroke='#64748b' stroke-width='2'/><line x1='30' y1='170' x2='30' y2='40' stroke='#64748b' stroke-width='2'/><line x1='30' y1='40' x2='80' y2='40' stroke='#64748b' stroke-width='2'/><line x1='80' y1='35' x2='80' y2='45' stroke='#64748b' stroke-width='3'/><line x1='88' y1='30' x2='88' y2='50' stroke='#64748b' stroke-width='3'/><text x='75' y='25' fill='#64748b' font-size='11' font-weight='600'>ε</text><line x1='88' y1='40' x2='290' y2='40' stroke='#64748b' stroke-width='2'/><line x1='150' y1='40' x2='150' y2='90' stroke='#64748b' stroke-width='2'/><rect x='130' y='90' width='40' height='18' fill='none' stroke='#ef4444' stroke-width='2'/><text x='150' y='103' text-anchor='middle' fill='#ef4444' font-size='12' font-weight='700'>R₁</text><line x1='150' y1='108' x2='150' y2='170' stroke='#64748b' stroke-width='2'/><line x1='240' y1='40' x2='240' y2='90' stroke='#64748b' stroke-width='2'/><rect x='220' y='90' width='40' height='18' fill='none' stroke='#3b82f6' stroke-width='2'/><text x='240' y='103' text-anchor='middle' fill='#3b82f6' font-size='12' font-weight='700'>R₂</text><line x1='240' y1='108' x2='240' y2='170' stroke='#64748b' stroke-width='2'/></svg>"""

SVG_CIRCUIT_RC = """<svg viewBox='0 0 320 200' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;font-family:Inter,system-ui,sans-serif;font-size:12px'><line x1='40' y1='160' x2='280' y2='160' stroke='#64748b' stroke-width='2'/><line x1='40' y1='160' x2='40' y2='60' stroke='#64748b' stroke-width='2'/><line x1='280' y1='160' x2='280' y2='60' stroke='#64748b' stroke-width='2'/><line x1='40' y1='60' x2='100' y2='60' stroke='#64748b' stroke-width='2'/><line x1='100' y1='55' x2='100' y2='65' stroke='#64748b' stroke-width='3'/><line x1='108' y1='50' x2='108' y2='70' stroke='#64748b' stroke-width='3'/><text x='90' y='45' fill='#64748b' font-size='11'>ε</text><line x1='108' y1='60' x2='160' y2='60' stroke='#64748b' stroke-width='2'/><rect x='160' y='52' width='40' height='16' fill='none' stroke='#ef4444' stroke-width='2'/><text x='180' y='45' text-anchor='middle' fill='#ef4444' font-size='11' font-weight='700'>R</text><line x1='200' y1='60' x2='240' y2='60' stroke='#64748b' stroke-width='2'/><line x1='240' y1='50' x2='240' y2='70' stroke='#3b82f6' stroke-width='3'/><line x1='246' y1='44' x2='246' y2='76' stroke='#3b82f6' stroke-width='3'/><text x='243' y='95' text-anchor='middle' fill='#3b82f6' font-size='11' font-weight='700'>C</text><line x1='246' y1='60' x2='280' y2='60' stroke='#64748b' stroke-width='2'/></svg>"""

SVG_WIRE_B_FIELD = """<svg viewBox='0 0 280 200' xmlns='http://www.w3.org/2000/svg' style='max-width:280px;font-family:Inter,system-ui,sans-serif;font-size:12px'><line x1='140' y1='20' x2='140' y2='180' stroke='#ef4444' stroke-width='3'/><polygon points='140,15 134,25 146,25' fill='#ef4444'/><text x='150' y='30' fill='#ef4444' font-size='12' font-weight='700'>I</text><circle cx='140' cy='100' r='35' fill='none' stroke='#3b82f6' stroke-width='1.5' stroke-dasharray='4 3'/><circle cx='140' cy='100' r='55' fill='none' stroke='#3b82f6' stroke-width='1.5' stroke-dasharray='4 3'/><circle cx='140' cy='100' r='75' fill='none' stroke='#3b82f6' stroke-width='1.5' stroke-dasharray='4 3'/><polygon points='175,100 168,96 168,104' fill='#3b82f6'/><polygon points='105,100 112,96 112,104' fill='#3b82f6'/><polygon points='195,100 188,96 188,104' fill='#3b82f6'/><text x='220' y='105' fill='#3b82f6' font-size='11' font-weight='600'>B</text></svg>"""

SVG_SOLENOID = """<svg viewBox='0 0 320 180' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;font-family:Inter,system-ui,sans-serif;font-size:12px'><rect x='40' y='60' width='240' height='60' fill='none' stroke='#64748b' stroke-width='1.5'/><g fill='#ef4444' font-size='13' font-weight='700' text-anchor='middle'><text x='65' y='75'>×</text><text x='90' y='75'>×</text><text x='115' y='75'>×</text><text x='140' y='75'>×</text><text x='165' y='75'>×</text><text x='190' y='75'>×</text><text x='215' y='75'>×</text><text x='240' y='75'>×</text><text x='265' y='75'>×</text></g><g fill='#ef4444' text-anchor='middle'><circle cx='65' cy='110' r='4' fill='none' stroke='#ef4444' stroke-width='1.5'/><circle cx='65' cy='110' r='1.5'/><circle cx='90' cy='110' r='4' fill='none' stroke='#ef4444' stroke-width='1.5'/><circle cx='90' cy='110' r='1.5'/><circle cx='115' cy='110' r='4' fill='none' stroke='#ef4444' stroke-width='1.5'/><circle cx='115' cy='110' r='1.5'/><circle cx='140' cy='110' r='4' fill='none' stroke='#ef4444' stroke-width='1.5'/><circle cx='140' cy='110' r='1.5'/><circle cx='165' cy='110' r='4' fill='none' stroke='#ef4444' stroke-width='1.5'/><circle cx='165' cy='110' r='1.5'/><circle cx='190' cy='110' r='4' fill='none' stroke='#ef4444' stroke-width='1.5'/><circle cx='190' cy='110' r='1.5'/><circle cx='215' cy='110' r='4' fill='none' stroke='#ef4444' stroke-width='1.5'/><circle cx='215' cy='110' r='1.5'/><circle cx='240' cy='110' r='4' fill='none' stroke='#ef4444' stroke-width='1.5'/><circle cx='240' cy='110' r='1.5'/><circle cx='265' cy='110' r='4' fill='none' stroke='#ef4444' stroke-width='1.5'/><circle cx='265' cy='110' r='1.5'/></g><line x1='100' y1='90' x2='220' y2='90' stroke='#3b82f6' stroke-width='2.5'/><polygon points='225,90 215,86 215,94' fill='#3b82f6'/><text x='245' y='94' fill='#3b82f6' font-size='12' font-weight='700'>B</text><text x='160' y='150' text-anchor='middle' fill='#64748b' font-size='11'>solenoid (cross-section, current into top, out of bottom)</text></svg>"""

SVG_CHARGE_IN_B = """<svg viewBox='0 0 280 220' xmlns='http://www.w3.org/2000/svg' style='max-width:280px;font-family:Inter,system-ui,sans-serif;font-size:12px'><g fill='#3b82f6' font-size='13' font-weight='700' text-anchor='middle'><text x='40' y='40'>•</text><text x='90' y='40'>•</text><text x='140' y='40'>•</text><text x='190' y='40'>•</text><text x='240' y='40'>•</text><text x='40' y='90'>•</text><text x='240' y='90'>•</text><text x='40' y='140'>•</text><text x='240' y='140'>•</text><text x='40' y='190'>•</text><text x='90' y='190'>•</text><text x='140' y='190'>•</text><text x='190' y='190'>•</text><text x='240' y='190'>•</text></g><text x='30' y='25' fill='#3b82f6' font-size='11' font-weight='600'>B (out of page)</text><circle cx='140' cy='110' r='55' fill='none' stroke='#ef4444' stroke-width='2.5' stroke-dasharray='4 4'/><circle cx='195' cy='110' r='8' fill='#ef4444'/><text x='195' y='115' text-anchor='middle' fill='white' font-size='11' font-weight='700'>+q</text><line x1='195' y1='110' x2='195' y2='80' stroke='#ef4444' stroke-width='2'/><polygon points='195,72 191,82 199,82' fill='#ef4444'/><text x='205' y='85' fill='#ef4444' font-size='11' font-weight='600'>v</text><text x='140' y='115' text-anchor='middle' fill='#64748b' font-size='11'>radius r</text></svg>"""

SVG_INCLINE_BLOCK = """<svg viewBox='0 0 320 200' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;font-family:Inter,system-ui,sans-serif;font-size:12px'><polygon points='40,170 280,170 280,70' fill='#e2e8f0' stroke='#64748b' stroke-width='1.5'/><polygon points='200,93 240,93 240,118 200,118' fill='#3b82f6' stroke='#1e40af' stroke-width='1.5' transform='rotate(-22.6 220 105)'/><line x1='220' y1='105' x2='220' y2='160' stroke='#ef4444' stroke-width='2'/><polygon points='220,165 215,153 225,153' fill='#ef4444'/><text x='230' y='150' fill='#ef4444' font-size='11' font-weight='700'>mg</text><path d='M 80,170 A 30,30 0 0 0 110,148' fill='none' stroke='#64748b' stroke-width='1.5'/><text x='102' y='162' fill='#64748b' font-size='12'>θ</text><text x='160' y='185' text-anchor='middle' fill='#64748b' font-size='11'>incline angle θ</text></svg>"""

SVG_ATWOOD = """<svg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg' style='max-width:240px;font-family:Inter,system-ui,sans-serif;font-size:12px'><circle cx='120' cy='40' r='22' fill='none' stroke='#64748b' stroke-width='2'/><circle cx='120' cy='40' r='4' fill='#64748b'/><line x1='98' y1='40' x2='80' y2='150' stroke='#64748b' stroke-width='1.5'/><line x1='142' y1='40' x2='160' y2='150' stroke='#64748b' stroke-width='1.5'/><rect x='60' y='150' width='40' height='35' fill='#3b82f6' stroke='#1e40af' stroke-width='1.5'/><text x='80' y='173' text-anchor='middle' fill='white' font-size='12' font-weight='700'>m₁</text><rect x='140' y='150' width='40' height='45' fill='#ef4444' stroke='#991b1b' stroke-width='1.5'/><text x='160' y='178' text-anchor='middle' fill='white' font-size='12' font-weight='700'>m₂</text><line x1='105' y1='15' x2='135' y2='15' stroke='#64748b' stroke-width='3'/><line x1='110' y1='15' x2='110' y2='5' stroke='#64748b' stroke-width='1.5'/><line x1='130' y1='15' x2='130' y2='5' stroke='#64748b' stroke-width='1.5'/><line x1='120' y1='5' x2='120' y2='18' stroke='#64748b' stroke-width='1.5'/><text x='120' y='225' text-anchor='middle' fill='#64748b' font-size='10'>frictionless pulley</text></svg>"""

SVG_PROJECTILE = """<svg viewBox='0 0 320 220' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;font-family:Inter,system-ui,sans-serif;font-size:12px'><line x1='30' y1='190' x2='300' y2='190' stroke='#64748b' stroke-width='1.5'/><path d='M 50,190 Q 165,40 280,190' stroke='#3b82f6' stroke-width='2.5' fill='none'/><circle cx='50' cy='190' r='5' fill='#94a3b8'/><circle cx='280' cy='190' r='5' fill='#94a3b8'/><line x1='50' y1='190' x2='95' y2='150' stroke='#ef4444' stroke-width='2'/><polygon points='100,146 90,148 95,156' fill='#ef4444'/><text x='105' y='148' fill='#ef4444' font-size='12' font-weight='700'>v₀</text><path d='M 50,190 A 25,25 0 0 0 75,170' fill='none' stroke='#64748b' stroke-width='1.5'/><text x='62' y='180' fill='#64748b' font-size='11'>θ</text><text x='165' y='205' text-anchor='middle' fill='#64748b' font-size='11'>Range R</text><line x1='165' y1='75' x2='165' y2='190' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3 3'/><text x='170' y='130' fill='#94a3b8' font-size='10'>max height</text></svg>"""

SVG_ROLLING_DISK = """<svg viewBox='0 0 320 180' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;font-family:Inter,system-ui,sans-serif;font-size:12px'><line x1='20' y1='140' x2='300' y2='140' stroke='#64748b' stroke-width='1.5'/><circle cx='160' cy='90' r='45' fill='none' stroke='#3b82f6' stroke-width='2.5'/><line x1='160' y1='90' x2='200' y2='75' stroke='#3b82f6' stroke-width='1.5'/><circle cx='160' cy='90' r='3' fill='#3b82f6'/><text x='205' y='75' fill='#3b82f6' font-size='11' font-weight='600'>R</text><path d='M 200,90 A 40,40 0 0 1 160,130' fill='none' stroke='#ef4444' stroke-width='2'/><polygon points='160,130 168,124 168,134' fill='#ef4444'/><text x='200' y='115' fill='#ef4444' font-size='12' font-weight='700'>ω</text><line x1='220' y1='90' x2='265' y2='90' stroke='#10b981' stroke-width='2.5'/><polygon points='270,90 260,86 260,94' fill='#10b981'/><text x='275' y='95' fill='#10b981' font-size='12' font-weight='700'>v</text><text x='160' y='160' text-anchor='middle' fill='#64748b' font-size='11'>rolling without slipping (v = ωR)</text></svg>"""

SVG_V_X_GRAPH = """<svg viewBox='0 0 280 200' xmlns='http://www.w3.org/2000/svg' style='max-width:280px;font-family:Inter,system-ui,sans-serif;font-size:12px'><line x1='40' y1='40' x2='40' y2='170' stroke='#64748b' stroke-width='1.5'/><line x1='40' y1='170' x2='250' y2='170' stroke='#64748b' stroke-width='1.5'/><polygon points='40,35 36,45 44,45' fill='#64748b'/><polygon points='255,170 245,166 245,174' fill='#64748b'/><text x='30' y='35' text-anchor='end' fill='#64748b' font-size='11'>V (volts)</text><text x='258' y='185' fill='#64748b' font-size='11'>x (m)</text><line x1='40' y1='60' x2='100' y2='60' stroke='#3b82f6' stroke-width='2.5'/><line x1='100' y1='60' x2='200' y2='140' stroke='#3b82f6' stroke-width='2.5'/><line x1='200' y1='140' x2='250' y2='140' stroke='#3b82f6' stroke-width='2.5'/><text x='30' y='65' text-anchor='end' fill='#64748b' font-size='10'>12</text><text x='30' y='145' text-anchor='end' fill='#64748b' font-size='10'>4</text><line x1='100' y1='170' x2='100' y2='173' stroke='#64748b' stroke-width='1'/><text x='100' y='185' text-anchor='middle' fill='#64748b' font-size='10'>x₀</text><line x1='200' y1='170' x2='200' y2='173' stroke='#64748b' stroke-width='1'/><text x='200' y='185' text-anchor='middle' fill='#64748b' font-size='10'>x₀+2</text></svg>"""

# ── Classifier: question text → SVG name ─────────────────────────────────────
# Order matters: more specific patterns first.

RULES = [
    # V vs x graph (q818 only)
    (r'graph of \$?v\(?x?\)?\$? versus|graph of \$v.*x.*\$ along', 'svg_v_x_graph'),
    # Circuits
    (r'\bRC\s+circuit\b|\bcapacitor\s+(?:and\s+)?(?:through|charges?\s+through|discharges?)', 'svg_circuit_rc'),
    (r'\b(?:two\s+)?resistors?\s+in\s+parallel\b|\bin\s+parallel\b.*resistor|parallel\s+combination.*resistor', 'svg_circuit_parallel'),
    (r'\b(?:two\s+)?resistors?\s+in\s+series\b|\bin\s+series\b.*resistor|series\s+combination.*resistor|series\s+circuit', 'svg_circuit_series'),
    (r'\bKirchhoff|\bjunction\b|\bloop\s+(?:rule|equation)|\bemf.*resistor', 'svg_circuit_series'),
    # Magnetic
    (r'\bsolenoid\b|\btoroid\b', 'svg_solenoid'),
    (r'\b(?:long\s+)?(?:straight\s+)?(?:current[-\s]carrying\s+)?wire.*magnetic|magnetic\s+field.*wire|biot[-\s]?savart', 'svg_wire_b_field'),
    (r'\b(?:enters?|moves?)\s+(?:a\s+)?(?:uniform\s+)?magnetic\s+field|(?:charged\s+particle|electron|proton).*(?:circular|magnetic)', 'svg_charge_in_b'),
    (r'\bcurrent\s+loop\b|\bcurrent[-\s]carrying\s+loop\b', 'svg_wire_b_field'),
    # E&M Gauss / charge configs
    (r'\b(?:infinite|long)\s+(?:line|wire|cylinder)\s+of\s+charge|\bline\s+charge\b|\bcylindrical\s+(?:shell|conductor)', 'svg_gauss_cylinder'),
    (r'\b(?:gaussian|gauss)\s+(?:surface|sphere)|\b(?:spherical|solid)\s+(?:shell|conductor).*charge|uniformly\s+charged\s+sphere', 'svg_gauss_sphere'),
    (r'\b(?:three|four)\s+(?:identical\s+)?(?:point\s+)?charges?.*(?:corners?|triangle|equilateral)', 'svg_charge_triangle'),
    (r'\b(?:two\s+)?(?:point\s+)?charges?.*(?:separated|distance|apart)|\bdipole\b', 'svg_charge_two'),
    # Capacitors
    (r'\bparallel[-\s]plate\s+capacitor|\bbetween\s+(?:the\s+)?plates\b|\bplate\s+separation\b', 'svg_parallel_plate'),
    # Mech
    (r'\bAtwood\b|\bpulley\b.*(?:masses?|connect)', 'svg_atwood'),
    (r'\b(?:incline|ramp|slope)d?\s+(?:plane|surface|at)|block.*incline|incline.*block', 'svg_incline_block'),
    (r'\bprojectile\b|\binitial\s+velocity\s+at\s+(?:an?\s+)?angle\b|\b(?:launched|fired|thrown)\s+(?:at\s+)?(?:an?\s+)?angle', 'svg_projectile'),
    (r'\b(?:disk|hoop|cylinder|sphere)\s+(?:of\s+(?:mass|radius)|rolling)|rolling\s+without\s+slipping', 'svg_rolling_disk'),
]

SVG_BY_NAME = {
    'svg_v_x_graph':       SVG_V_X_GRAPH,
    'svg_circuit_rc':      SVG_CIRCUIT_RC,
    'svg_circuit_parallel':SVG_CIRCUIT_PARALLEL,
    'svg_circuit_series':  SVG_CIRCUIT_SERIES,
    'svg_solenoid':        SVG_SOLENOID,
    'svg_wire_b_field':    SVG_WIRE_B_FIELD,
    'svg_charge_in_b':     SVG_CHARGE_IN_B,
    'svg_gauss_cylinder':  SVG_GAUSS_CYLINDER,
    'svg_gauss_sphere':    SVG_GAUSS_SPHERE,
    'svg_charge_triangle': SVG_CHARGE_TRIANGLE,
    'svg_charge_two':      SVG_CHARGE_TWO,
    'svg_parallel_plate':  SVG_PARALLEL_PLATE,
    'svg_atwood':          SVG_ATWOOD,
    'svg_incline_block':   SVG_INCLINE_BLOCK,
    'svg_projectile':      SVG_PROJECTILE,
    'svg_rolling_disk':    SVG_ROLLING_DISK,
}

def classify(q):
    blob = q.get('question', '').lower()
    for pat, name in RULES:
        if re.search(pat, blob):
            return name
    return None

def process(path):
    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'ERROR: cannot parse {path}'); sys.exit(1)
    questions = json.loads(m.group(1))

    assigned = Counter()
    skipped_already_has = 0
    skipped_no_match = 0
    plan = []  # (q, svg_name)

    for q in questions:
        if q.get('graphSvg'):
            skipped_already_has += 1
            continue
        name = classify(q)
        if not name:
            skipped_no_match += 1
            continue
        plan.append((q, name))
        assigned[name] += 1

    print(f'  {"[DRY] " if DRY_RUN else ""}SVG assignments: {dict(assigned)}')
    print(f'  Total questions diagrammed: {sum(assigned.values())}')
    print(f'  (already had: {skipped_already_has}, no match: {skipped_no_match})')

    # Per-unit breakdown
    by_unit = Counter((q.get('subject'), q.get('unit')) for q, _ in plan)
    print(f'  By (subject, unit): {dict(sorted(by_unit.items()))}')

    if not DRY_RUN:
        for q, name in plan:
            q['graphSvg'] = SVG_BY_NAME[name]

        # ── Guardrails ───────────────────────────────────────────────────────
        with_svg = [q for q in questions if q.get('graphSvg')]
        assert len(with_svg) >= 50, f'Only {len(with_svg)} questions got SVGs'
        for q in with_svg:
            assert q['graphSvg'].startswith('<svg'), f'{q.get("id")}: bad SVG'
            assert q['graphSvg'].endswith('</svg>'), f'{q.get("id")}: SVG not closed'

        prefix = text[:m.start(1)]
        suffix = text[m.end(1):]
        path.write_text(prefix + json.dumps(questions, indent=2, ensure_ascii=False) + suffix)
        print(f'  wrote {path.name} ({len(with_svg)} total questions now have graphSvg)')

print(f'{"=== DRY RUN ===" if DRY_RUN else "=== LIVE RUN ==="}')
for t in TARGETS:
    print(f'\n{t.name}:')
    process(t)
print('\nDone.')

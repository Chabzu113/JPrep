// AP Practice Platform — Subject Registry
// All 11 supported AP subjects with exam dates, colors, and metadata

const SUBJECTS = [
  {
    id: 'apcsa',
    name: 'AP Computer Science A',
    shortName: 'AP CS A',
    emoji: '💻',
    color: '#3B82F6',
    colorDark: '#93C5FD',
    examDate: new Date('2026-05-07T08:00:00'),
    description: 'Java programming, OOP, algorithms & data structures.',
    hasContent: true,
    dataFiles: ['MCQ_U1U2', 'MCQ_U3U4', 'FRQ_BANK'],
    testFiles: ['PRACTICE_TESTS'],
    questionTypes: [
      { value: 'all', label: 'All' },
      { value: 'MCQ', label: 'MCQ' },
      { value: 'FRQ', label: 'FRQ' }
    ],
    units: [
      { num: 1, title: 'Using Objects and Methods',  weight: '15–25%', topics: [
        { value: '1.1',  label: '1.1 Introduction to Algorithms' },
        { value: '1.2',  label: '1.2 Variables and Data Types' },
        { value: '1.3',  label: '1.3 Expressions and Output' },
        { value: '1.4',  label: '1.4 Assignment Statements and Input' },
        { value: '1.5',  label: '1.5 Casting and Range of Variables' },
        { value: '1.6',  label: '1.6 Compound Assignment Operators' },
        { value: '1.7',  label: '1.7 API and Libraries' },
        { value: '1.8',  label: '1.8 Documentation with Comments' },
        { value: '1.9',  label: '1.9 Method Signatures' },
        { value: '1.10', label: '1.10 Calling Class Methods' },
        { value: '1.11', label: '1.11 Math Class' },
        { value: '1.12', label: '1.12 Objects: Instances of Classes' },
        { value: '1.13', label: '1.13 Object Creation and Storage' },
        { value: '1.14', label: '1.14 Calling Instance Methods' },
        { value: '1.15', label: '1.15 String Manipulation' }
      ]},
      { num: 2, title: 'Selection and Iteration',    weight: '25–35%', topics: [
        { value: '2.1',  label: '2.1 Algorithms with Selection and Repetition' },
        { value: '2.2',  label: '2.2 Boolean Expressions' },
        { value: '2.3',  label: '2.3 if Statements' },
        { value: '2.4',  label: '2.4 Nested if Statements' },
        { value: '2.5',  label: '2.5 Compound Boolean Expressions' },
        { value: '2.6',  label: '2.6 Comparing Boolean Expressions' },
        { value: '2.7',  label: '2.7 while Loops' },
        { value: '2.8',  label: '2.8 for Loops' },
        { value: '2.9',  label: '2.9 Implementing Selection and Iteration Algorithms' },
        { value: '2.10', label: '2.10 Implementing String Algorithms' },
        { value: '2.11', label: '2.11 Nested Iteration' },
        { value: '2.12', label: '2.12 Informal Run-Time Analysis' }
      ]},
      { num: 3, title: 'Class Creation',             weight: '10–18%', topics: [
        { value: '3.1', label: '3.1 Abstraction and Program Design' },
        { value: '3.2', label: '3.2 Impact of Program Design' },
        { value: '3.3', label: '3.3 Anatomy of a Class' },
        { value: '3.4', label: '3.4 Constructors' },
        { value: '3.5', label: '3.5 Methods: How to Write Them' },
        { value: '3.6', label: '3.6 Methods: Passing and Returning References' },
        { value: '3.7', label: '3.7 Class Variables and Methods' },
        { value: '3.8', label: '3.8 Scope and Access' },
        { value: '3.9', label: '3.9 this Keyword' }
      ]},
      { num: 4, title: 'Data Collections',           weight: '30–40%', topics: [
        { value: '4.1',  label: '4.1 Ethical and Social Issues Around Data Collection' },
        { value: '4.2',  label: '4.2 Introduction to Using Data Sets' },
        { value: '4.3',  label: '4.3 Array Creation and Access' },
        { value: '4.4',  label: '4.4 Array Traversals' },
        { value: '4.5',  label: '4.5 Implementing Array Algorithms' },
        { value: '4.6',  label: '4.6 Using Text Files' },
        { value: '4.7',  label: '4.7 Wrapper Classes' },
        { value: '4.8',  label: '4.8 ArrayList Methods' },
        { value: '4.9',  label: '4.9 ArrayList Traversals' },
        { value: '4.10', label: '4.10 Implementing ArrayList Algorithms' },
        { value: '4.11', label: '4.11 2D Array Creation and Access' },
        { value: '4.12', label: '4.12 2D Array Traversals' },
        { value: '4.13', label: '4.13 Implementing 2D Array Algorithms' },
        { value: '4.14', label: '4.14 Searching Algorithms' },
        { value: '4.15', label: '4.15 Sorting Algorithms' },
        { value: '4.16', label: '4.16 Recursion' },
        { value: '4.17', label: '4.17 Recursive Searching and Sorting' }
      ]}
    ]
  },
  {
    id: 'apbio',
    name: 'AP Biology',
    shortName: 'AP Bio',
    emoji: '🧬',
    color: '#10B981',
    colorDark: '#6EE7B7',
    examDate: new Date('2026-05-12T08:00:00'),
    description: 'Biochemistry, cells, genetics, evolution & ecology.',
    hasContent: true,
    dataFiles: ['APBIO_MCQ', 'APBIO_FRQ'],
    testFiles: ['APBIO_TESTS'],
    testDataFiles: ['APBIO_TEST_MCQ'],
    questionTypes: [
      { value: 'all',       label: 'All' },
      { value: 'MCQ',       label: 'MCQ' },
      { value: 'Short FRQ', label: 'Short FRQ' },
      { value: 'Long FRQ',  label: 'Long FRQ' }
    ],
    units: [
      { num: 1, title: 'Chemistry of Life', weight: '8–11%', topics: [
        { value: '1.1', label: '1.1 Water Properties' },
        { value: '1.2', label: '1.2 pH and Buffers' },
        { value: '1.3', label: '1.3 Macromolecules' },
        { value: '1.4', label: '1.4 Carbohydrates' },
        { value: '1.5', label: '1.5 Enzymes' },
        { value: '1.6', label: '1.6 Free Energy' }
      ]},
      { num: 2, title: 'Cell Structure and Function', weight: '10–13%', topics: [
        { value: '2.2', label: '2.2 Membrane Structure' },
        { value: '2.3', label: '2.3 Membrane Transport' },
        { value: '2.4', label: '2.4 Cell Organelles' },
        { value: '2.5', label: '2.5 Cell Theory' },
        { value: '2.6', label: '2.6 Cell Size' },
        { value: '2.7', label: '2.7 Cell Compartmentalization' },
        { value: '2.8', label: '2.8 Water Potential' },
        { value: '2.9', label: '2.9 Prokaryotes vs Eukaryotes' },
        { value: '2.10', label: '2.10 Cytoskeleton' }
      ]},
      { num: 3, title: 'Cellular Energetics', weight: '12–16%', topics: [
        { value: '3.1', label: '3.1 Calvin Cycle' },
        { value: '3.2', label: '3.2 Cellular Respiration' },
        { value: '3.3', label: '3.3 Fermentation' },
        { value: '3.4', label: '3.4 Photosynthesis vs Respiration' },
        { value: '3.5', label: '3.5 Enzyme Regulation' },
        { value: '3.6', label: '3.6 Energy Coupling' },
        { value: '3.7', label: '3.7 C4 and CAM Photosynthesis' },
        { value: '3.8', label: '3.8 Chemiosmosis' }
      ]},
      { num: 4, title: 'Cell Communication and Cell Cycle', weight: '10–15%', topics: [
        { value: '4.1', label: '4.1 Cell Signaling' },
        { value: '4.2', label: '4.2 Signal Transduction' },
        { value: '4.3', label: '4.3 Cell Cycle' },
        { value: '4.4', label: '4.4 Mitosis' },
        { value: '4.5', label: '4.5 Feedback Mechanisms' },
        { value: '4.6', label: '4.6 Apoptosis' }
      ]},
      { num: 5, title: 'Heredity', weight: '8–11%', topics: [
        { value: '5.1', label: '5.1 Meiosis' },
        { value: '5.2', label: '5.2 Mendelian Genetics' },
        { value: '5.3', label: '5.3 Non-Mendelian Inheritance' },
        { value: '5.4', label: '5.4 Chromosomal Inheritance' }
      ]},
      { num: 6, title: 'Gene Expression and Regulation', weight: '12–16%', topics: [
        { value: '6.1', label: '6.1 DNA Structure' },
        { value: '6.2', label: '6.2 DNA Replication' },
        { value: '6.3', label: '6.3 Transcription and Translation' },
        { value: '6.5', label: '6.5 Gene Regulation' },
        { value: '6.6', label: '6.6 Mutations' },
        { value: '6.7', label: '6.7 Biotechnology' },
        { value: '6.8', label: '6.8 Epigenetics' },
        { value: '6.9', label: '6.9 RNA Processing' }
      ]},
      { num: 7, title: 'Natural Selection and Evolution', weight: '11–15%', topics: [
        { value: '7.1', label: '7.1 Natural Selection' },
        { value: '7.2', label: '7.2 Evolution Evidence' },
        { value: '7.3', label: '7.3 Speciation' },
        { value: '7.4', label: '7.4 Phylogenetics' },
        { value: '7.5', label: '7.5 Hardy-Weinberg' },
        { value: '7.6', label: '7.6 Evolution Mechanisms' }
      ]},
      { num: 8, title: 'Ecology', weight: '10–15%', topics: [
        { value: '8.1', label: '8.1 Ecosystem Ecology' },
        { value: '8.4', label: '8.4 Population Ecology' },
        { value: '8.5', label: '8.5 Community Ecology' },
        { value: '8.6', label: '8.6 Biodiversity' }
      ]}
    ]
  },
  {
    id: 'apcalcab',
    name: 'AP Calculus AB',
    shortName: 'AP Calc AB',
    emoji: '∫',
    color: '#F59E0B',
    colorDark: '#FCD34D',
    examDate: new Date('2026-05-13T08:00:00'),
    description: 'Limits, derivatives, integrals & the Fundamental Theorem.',
    hasContent: true,
    dataFiles: ['APCALC_MCQ'],
    testFiles: [],
    questionTypes: [
      { value: 'all',          label: 'All' },
      { value: 'Non-Calc MCQ', label: 'Non-Calc MCQ' },
      { value: 'Calc MCQ',     label: 'Calc MCQ' },
      { value: 'Short FRQ',    label: 'Short FRQ' },
      { value: 'Long FRQ',     label: 'Long FRQ' }
    ],
    units: [
      { num: 1, title: 'Limits and Continuity', weight: '10–12%', topics: [
        { value: '1.1', label: '1.1 Limits – Algebraic Evaluation' },
        { value: '1.2', label: '1.2 Limits at Infinity' },
        { value: '1.3', label: '1.3 Trigonometric Limits' },
        { value: '1.4', label: '1.4 Continuity' },
        { value: '1.5', label: '1.5 Intermediate Value Theorem' },
      ]},
      { num: 2, title: 'Differentiation: Definition & Properties', weight: '10–12%', topics: [
        { value: '2.1', label: '2.1 Definition of Derivative' },
        { value: '2.2', label: '2.2 Basic Differentiation Rules' },
        { value: '2.3', label: '2.3 Product & Quotient Rules' },
        { value: '2.4', label: '2.4 Trigonometric Derivatives' },
      ]},
      { num: 3, title: 'Differentiation: Composite, Implicit & Inverse', weight: '9–13%', topics: [
        { value: '3.1', label: '3.1 Chain Rule' },
        { value: '3.2', label: '3.2 Implicit Differentiation' },
        { value: '3.3', label: '3.3 Inverse Function Derivatives' },
      ]},
      { num: 4, title: 'Contextual Applications of Differentiation', weight: '10–15%', topics: [
        { value: '4.1', label: '4.1 Related Rates' },
        { value: '4.2', label: '4.2 Linear Approximation' },
        { value: '4.3', label: "4.3 L'Hôpital's Rule" },
      ]},
      { num: 5, title: 'Analytical Applications of Differentiation', weight: '15–18%', topics: [
        { value: '5.1', label: '5.1 Mean Value Theorem' },
        { value: '5.2', label: '5.2 Extrema & Critical Points' },
        { value: '5.3', label: '5.3 Concavity & Inflection Points' },
        { value: '5.4', label: '5.4 Curve Sketching' },
        { value: '5.5', label: '5.5 Optimization' },
      ]},
      { num: 6, title: 'Integration and Accumulation of Change', weight: '17–20%', topics: [
        { value: '6.1', label: '6.1 Antiderivatives' },
        { value: '6.2', label: '6.2 Riemann Sums' },
        { value: '6.3', label: '6.3 Definite Integrals' },
        { value: '6.4', label: '6.4 Fundamental Theorem of Calculus' },
        { value: '6.5', label: '6.5 U-Substitution' },
      ]},
      { num: 7, title: 'Differential Equations', weight: '6–12%', topics: [
        { value: '7.1', label: '7.1 Slope Fields' },
        { value: '7.2', label: '7.2 Separable Differential Equations' },
        { value: '7.3', label: '7.3 Exponential Growth & Decay' },
      ]},
      { num: 8, title: 'Applications of Integration', weight: '10–15%', topics: [
        { value: '8.1', label: '8.1 Average Value of a Function' },
        { value: '8.2', label: '8.2 Area Between Curves' },
        { value: '8.3', label: '8.3 Volume: Disc & Washer Method' },
        { value: '8.4', label: '8.4 Accumulation Problems' },
      ]},
    ]
  },
  {
    id: 'apcalcbc',
    name: 'AP Calculus BC',
    shortName: 'AP Calc BC',
    emoji: '∑',
    color: '#EF4444',
    colorDark: '#FCA5A5',
    examDate: new Date('2026-05-13T08:00:00'),
    description: 'All of AB plus series, polar, parametric & vector functions.',
    hasContent: false,
    dataFiles: [],
    testFiles: [],
    questionTypes: [{ value: 'all', label: 'All' }, { value: 'MCQ', label: 'MCQ' }, { value: 'FRQ', label: 'FRQ' }],
    units: []
  },
  {
    id: 'apphys1',
    name: 'AP Physics 1',
    shortName: 'AP Phys 1',
    emoji: '⚡',
    color: '#D97706',
    colorDark: '#FCD34D',
    examDate: new Date('2026-05-06T08:00:00'),
    description: 'Mechanics, waves, circuits & rotational motion.',
    hasContent: false,
    dataFiles: [],
    testFiles: [],
    questionTypes: [{ value: 'all', label: 'All' }, { value: 'MCQ', label: 'MCQ' }, { value: 'FRQ', label: 'FRQ' }],
    units: []
  },
  {
    id: 'apphyscem',
    name: 'AP Physics C: E&M',
    shortName: 'AP Phys C',
    emoji: '🔌',
    color: '#0891B2',
    colorDark: '#67E8F9',
    examDate: new Date('2026-05-14T08:00:00'),
    description: 'Electrostatics, circuits, magnetism & electromagnetic induction.',
    hasContent: false,
    dataFiles: [],
    testFiles: [],
    questionTypes: [{ value: 'all', label: 'All' }, { value: 'MCQ', label: 'MCQ' }, { value: 'FRQ', label: 'FRQ' }],
    units: []
  },
  {
    id: 'apgov',
    name: 'AP Gov & Politics (US)',
    shortName: 'AP Gov',
    emoji: '🏛️',
    color: '#B45309',
    colorDark: '#FCD34D',
    examDate: new Date('2026-05-08T08:00:00'),
    description: 'Constitutional foundations, civil liberties & public policy.',
    hasContent: false,
    dataFiles: [],
    testFiles: [],
    questionTypes: [{ value: 'all', label: 'All' }, { value: 'MCQ', label: 'MCQ' }, { value: 'FRQ', label: 'FRQ' }],
    units: []
  },
  {
    id: 'apush',
    name: 'AP US History',
    shortName: 'APUSH',
    emoji: '🗽',
    color: '#DC2626',
    colorDark: '#FCA5A5',
    examDate: new Date('2026-05-09T08:00:00'),
    description: 'US history from pre-contact through present.',
    hasContent: false,
    dataFiles: [],
    testFiles: [],
    questionTypes: [{ value: 'all', label: 'All' }, { value: 'MCQ', label: 'MCQ' }, { value: 'SAQ', label: 'SAQ' }, { value: 'LEQ', label: 'LEQ' }, { value: 'DBQ', label: 'DBQ' }],
    units: []
  },
  {
    id: 'apstats',
    name: 'AP Statistics',
    shortName: 'AP Stats',
    emoji: '📊',
    color: '#2563EB',
    colorDark: '#93C5FD',
    examDate: new Date('2026-05-15T08:00:00'),
    description: 'Data collection, probability, inference & regression.',
    hasContent: false,
    dataFiles: [],
    testFiles: [],
    questionTypes: [{ value: 'all', label: 'All' }, { value: 'MCQ', label: 'MCQ' }, { value: 'FRQ', label: 'FRQ' }],
    units: []
  },
  {
    id: 'apmicro',
    name: 'AP Microeconomics',
    shortName: 'AP Micro',
    emoji: '📉',
    color: '#06B6D4',
    colorDark: '#67E8F9',
    examDate: new Date('2026-05-14T08:00:00'),
    description: 'Supply & demand, market structures & consumer theory.',
    hasContent: false,
    dataFiles: [],
    testFiles: [],
    questionTypes: [{ value: 'all', label: 'All' }, { value: 'MCQ', label: 'MCQ' }, { value: 'FRQ', label: 'FRQ' }],
    units: []
  },
  {
    id: 'apmacro',
    name: 'AP Macroeconomics',
    shortName: 'AP Macro',
    emoji: '📈',
    color: '#F97316',
    colorDark: '#FDBA74',
    examDate: new Date('2026-05-09T08:00:00'),
    description: 'GDP, fiscal & monetary policy & international trade.',
    hasContent: false,
    dataFiles: [],
    testFiles: [],
    questionTypes: [{ value: 'all', label: 'All' }, { value: 'MCQ', label: 'MCQ' }, { value: 'FRQ', label: 'FRQ' }],
    units: []
  }
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getSubjectById(id) {
  return SUBJECTS.find(s => s.id === id) || null;
}

function getSelectedSubjectObjects(selectedIds) {
  return (selectedIds || []).map(id => getSubjectById(id)).filter(Boolean);
}

// Returns days until exam (negative if past)
function daysUntilExam(subject) {
  const now = new Date();
  const exam = new Date(subject.examDate);
  return Math.ceil((exam - now) / (1000 * 60 * 60 * 24));
}

// Study phase based on days remaining
function getStudyPhase(daysRemaining) {
  if (daysRemaining > 60) return { phase: 'foundations', label: 'Build Foundations',      color: '#10B981' };
  if (daysRemaining > 30) return { phase: 'practice',    label: 'Mixed Practice',          color: '#F59E0B' };
  if (daysRemaining > 14) return { phase: 'intensive',   label: 'Intensive Review',        color: '#F97316' };
  if (daysRemaining > 0)  return { phase: 'finalprep',   label: 'Final Prep',              color: '#EF4444' };
  return                         { phase: 'past',        label: 'Exam Passed',             color: '#6B7280' };
}

// Format exam date as "May 7, 2025"
function formatExamDate(subject) {
  return new Date(subject.examDate).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });
}

window.SubjectRegistry = {
  SUBJECTS,
  getSubjectById,
  getSelectedSubjectObjects,
  daysUntilExam,
  getStudyPhase,
  formatExamDate
};

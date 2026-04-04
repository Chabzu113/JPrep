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
    mcqTime: 5400,
    frqTime: 5400,
    dataFiles: ['APCSA_MCQ', 'FRQ_BANK'],
    testFiles: ['PRACTICE_TESTS', 'P1_CSA_TEST'],
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
    mcqTime: 5400,
    frqTime: 5400,
    dataFiles: ['APBIO_MCQ', 'APBIO_FRQ', 'APBIO_FRQ_GRADED'],
    testFiles: ['APBIO_TESTS', 'P1_BIO_TEST'],
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
    mcqTime: 6300,
    frqTime: 5400,
    referenceSheet: 'https://apstudents.collegeboard.org/ap/pdf/ap-calculus-ab-bc-equations-and-formulas.pdf',
    dataFiles: ['APCALC_MCQ', 'APCALC_FRQ'],
    testFiles: ['P1_CALCAB_TEST'],
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
    id: 'apphys1',
    name: 'AP Physics 1',
    shortName: 'AP Phys 1',
    emoji: '⚡',
    color: '#D97706',
    colorDark: '#FCD34D',
    examDate: new Date('2026-05-06T08:00:00'),
    description: 'Algebra-based mechanics, waves, circuits & rotational motion.',
    hasContent: true,
    mcqTime: 5400,
    frqTime: 5400,
    referenceSheet: 'https://apstudents.collegeboard.org/ap/pdf/ap-physics-1-equations-table.pdf',
    dataFiles: ['PHYSICS_MCQ', 'PHYSICS_FRQ'],
    testFiles: ['P1_PHYS1_TEST'],
    questionTypes: [
      { value: 'all', label: 'All' },
      { value: 'MCQ', label: 'MCQ' },
      { value: 'FRQ', label: 'FRQ' }
    ],
    units: [
      { num: 1, title: 'Kinematics',                 weight: '12–18%', topics: [
        { value: '1.1', label: '1.1 Position, Velocity & Acceleration' },
        { value: '1.2', label: '1.2 Motion Graphs' },
        { value: '1.3', label: '1.3 Projectile Motion' }
      ]},
      { num: 2, title: 'Forces & Newton\'s Laws',     weight: '16–20%', topics: [
        { value: '2.1', label: '2.1 Newton\'s First & Second Law' },
        { value: '2.2', label: '2.2 Newton\'s Third Law' },
        { value: '2.3', label: '2.3 Friction & Normal Force' }
      ]},
      { num: 3, title: 'Work, Energy & Power',        weight: '20–28%', topics: [
        { value: '3.1', label: '3.1 Work & Work-Energy Theorem' },
        { value: '3.2', label: '3.2 Conservation of Energy' },
        { value: '3.3', label: '3.3 Power' }
      ]},
      { num: 4, title: 'Systems & Center of Mass',    weight: '4–6%',   topics: [
        { value: '4.1', label: '4.1 Center of Mass' },
        { value: '4.2', label: '4.2 Linear Momentum' }
      ]},
      { num: 5, title: 'Momentum',                    weight: '12–18%', topics: [
        { value: '5.1', label: '5.1 Impulse & Momentum' },
        { value: '5.2', label: '5.2 Conservation of Momentum' },
        { value: '5.3', label: '5.3 Collisions' }
      ]},
      { num: 6, title: 'Simple Harmonic Motion',      weight: '4–6%',   topics: [
        { value: '6.1', label: '6.1 Springs & Pendulums' },
        { value: '6.2', label: '6.2 Energy in SHM' }
      ]},
      { num: 7, title: 'Torque & Rotational Motion',  weight: '12–18%', topics: [
        { value: '7.1', label: '7.1 Torque' },
        { value: '7.2', label: '7.2 Rotational Kinematics' },
        { value: '7.3', label: '7.3 Angular Momentum' }
      ]},
      { num: 8, title: 'Electric Charge & Circuits',  weight: '16–20%', topics: [
        { value: '8.1', label: '8.1 Electric Charge & Coulomb\'s Law' },
        { value: '8.2', label: '8.2 Current, Resistance & Ohm\'s Law' },
        { value: '8.3', label: '8.3 Series & Parallel Circuits' }
      ]},
      { num: 9, title: 'Waves & Sound',               weight: '12–18%', topics: [
        { value: '9.1', label: '9.1 Wave Properties' },
        { value: '9.2', label: '9.2 Standing Waves' },
        { value: '9.3', label: '9.3 The Doppler Effect' }
      ]}
    ]
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
    hasContent: true,
    mcqTime: 2700,
    frqTime: 2700,
    referenceSheet: 'https://apstudents.collegeboard.org/ap/pdf/ap-physics-c-equations-table.pdf',
    dataFiles: ['APPHYSCEM_FRQ', 'PHYSC_MCQ'],
    testFiles: ['P1_PHYSCEM_TEST'],
    questionTypes: [
      { value: 'all', label: 'All' },
      { value: 'MCQ', label: 'MCQ' },
      { value: 'FRQ', label: 'FRQ' }
    ],
    units: [
      { num: 1, title: 'Electrostatics',                          weight: '', topics: [] },
      { num: 2, title: 'Conductors, Capacitors & Dielectrics',    weight: '', topics: [] },
      { num: 3, title: 'Electric Circuits',                        weight: '', topics: [] },
      { num: 4, title: 'Magnetic Fields',                          weight: '', topics: [] },
      { num: 5, title: 'Electromagnetism',                         weight: '', topics: [] },
      { num: 6, title: 'Kinematics (Calculus)',                    weight: '', topics: [] },
      { num: 7, title: 'Newton\'s Laws (Calculus)',                 weight: '', topics: [] },
      { num: 8, title: 'Work, Energy & Power (Calculus)',          weight: '', topics: [] },
      { num: 9, title: 'Momentum & Collisions',                   weight: '', topics: [] },
      { num: 10, title: 'Rotation (Calculus)',                     weight: '', topics: [] }
    ]
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
    hasContent: true,
    mcqTime: 5700,
    frqTime: 6000,
    dataFiles: ['APUSH_MCQ', 'APUSH_FRQ'],
    testFiles: ['P1_USH_TEST'],
    questionTypes: [
      { value: 'all', label: 'All' },
      { value: 'MCQ', label: 'MCQ' },
      { value: 'SAQ', label: 'SAQ' },
      { value: 'LEQ', label: 'LEQ' },
      { value: 'DBQ', label: 'DBQ' }
    ],
    units: [
      { num: 1, title: 'Period 1: 1491–1607', weight: '4–6%', topics: [
        { value: '1.2', label: '1.2 Native American Societies Before European Contact' },
        { value: '1.3', label: '1.3 European Exploration in the Americas' },
        { value: '1.4', label: '1.4 Columbian Exchange, Spanish Exploration, and Conquest' },
        { value: '1.6', label: '1.6 Cultural Interactions' }
      ]},
      { num: 2, title: 'Period 2: 1607–1754', weight: '6–8%', topics: [
        { value: '2.1', label: '2.1 European Colonization' },
        { value: '2.2', label: '2.2 Transatlantic Trade' },
        { value: '2.3', label: '2.3 Colonial Society' },
        { value: '2.4', label: '2.4 Governance' },
        { value: '2.5', label: '2.5 Interactions between European, Native American, and African Peoples' }
      ]},
      { num: 3, title: 'Period 3: 1754–1800', weight: '10–17%', topics: [
        { value: '3.1', label: '3.1 British–American Tensions' },
        { value: '3.2', label: '3.2 The American Revolution' },
        { value: '3.3', label: '3.3 The Articles of Confederation' },
        { value: '3.4', label: '3.4 The Constitutional Convention' },
        { value: '3.5', label: '3.5 The Early Republic' }
      ]},
      { num: 4, title: 'Period 4: 1800–1848', weight: '10–17%', topics: [
        { value: '4.1', label: '4.1 The New Republic' },
        { value: '4.2', label: '4.2 The Market Revolution' },
        { value: '4.3', label: '4.3 Politics and Regional Interests' },
        { value: '4.4', label: '4.4 Jacksonian Democracy' },
        { value: '4.5', label: '4.5 Westward Expansion' },
        { value: '4.6', label: '4.6 Reform Movements' }
      ]},
      { num: 5, title: 'Period 5: 1844–1877', weight: '10–17%', topics: [
        { value: '5.1', label: '5.1 Manifest Destiny' },
        { value: '5.2', label: '5.2 Sectional Conflict' },
        { value: '5.3', label: '5.3 The Civil War' },
        { value: '5.4', label: '5.4 Reconstruction' }
      ]},
      { num: 6, title: 'Period 6: 1865–1898', weight: '10–17%', topics: [
        { value: '6.1', label: '6.1 Westward Expansion' },
        { value: '6.2', label: '6.2 Industrialization' },
        { value: '6.3', label: '6.3 Labor and Immigration' },
        { value: '6.4', label: '6.4 Gilded Age Politics' },
        { value: '6.5', label: '6.5 Populism' }
      ]},
      { num: 7, title: 'Period 7: 1890–1945', weight: '10–17%', topics: [
        { value: '7.1', label: '7.1 Imperialism' },
        { value: '7.2', label: '7.2 Progressive Era' },
        { value: '7.3', label: '7.3 World War I' },
        { value: '7.4', label: '7.4 1920s' },
        { value: '7.5', label: '7.5 Great Depression and New Deal' },
        { value: '7.6', label: '7.6 World War II' }
      ]},
      { num: 8, title: 'Period 8: 1945–1980', weight: '10–17%', topics: [
        { value: '8.1', label: '8.1 The Cold War' },
        { value: '8.2', label: '8.2 The Korean War and McCarthyism' },
        { value: '8.3', label: '8.3 Civil Rights Movement' },
        { value: '8.4', label: '8.4 The Great Society' },
        { value: '8.5', label: '8.5 Vietnam and Counterculture' },
        { value: '8.6', label: '8.6 Nixon and Détente' }
      ]},
      { num: 9, title: 'Period 9: 1980–Present', weight: '4–6%', topics: [
        { value: '9.1', label: '9.1 Reagan and Conservatism' },
        { value: '9.2', label: '9.2 End of the Cold War' },
        { value: '9.3', label: '9.3 Contemporary America' }
      ]}
    ]
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
    hasContent: true,
    mcqTime: 5400,
    frqTime: 5400,
    referenceSheet: 'https://apstudents.collegeboard.org/ap/pdf/statistics-formula-sheet-and-tables.pdf',
    dataFiles: ['APSTATS_MCQ', 'APSTATS_FRQ'],
    testFiles: ['P1_STATS_TEST'],
    questionTypes: [
      { value: 'all',       label: 'All' },
      { value: 'MCQ',       label: 'MCQ' },
      { value: 'Short FRQ', label: 'Short FRQ' },
      { value: 'Long FRQ',  label: 'Long FRQ' }
    ],
    units: [
      { num: 1, title: 'Exploring One-Variable Data', weight: '15–23%', topics: [
        { value: '1.1', label: '1.1 Introducing Statistics' },
        { value: '1.2', label: '1.2 The Language of Variation: Variables' },
        { value: '1.3', label: '1.3 Representing a Categorical Variable with Tables' },
        { value: '1.4', label: '1.4 Representing a Categorical Variable with Graphs' },
        { value: '1.5', label: '1.5 Representing a Quantitative Variable with Graphs' },
        { value: '1.6', label: '1.6 Describing the Distribution of a Quantitative Variable' },
        { value: '1.7', label: '1.7 Summary Statistics for a Quantitative Variable' },
        { value: '1.8', label: '1.8 Graphical Representations of Summary Statistics' },
        { value: '1.9', label: '1.9 Comparing Distributions of a Quantitative Variable' },
        { value: '1.10', label: '1.10 The Normal Distribution' }
      ]},
      { num: 2, title: 'Exploring Two-Variable Data', weight: '5–7%', topics: [
        { value: '2.1', label: '2.1 Introducing Statistics: Are Variables Related?' },
        { value: '2.2', label: '2.2 Representing Two Categorical Variables' },
        { value: '2.3', label: '2.3 Statistics for Two Categorical Variables' },
        { value: '2.4', label: '2.4 Representing the Relationship Between Two Quantitative Variables' },
        { value: '2.5', label: '2.5 Correlation' },
        { value: '2.6', label: '2.6 Linear Regression Models' },
        { value: '2.7', label: '2.7 Residuals' },
        { value: '2.8', label: '2.8 Least Squares Regression' },
        { value: '2.9', label: '2.9 Analyzing Departures from Linearity' }
      ]},
      { num: 3, title: 'Collecting Data', weight: '12–15%', topics: [
        { value: '3.1', label: '3.1 Introducing Statistics: Do the Data We Collected Tell the Truth?' },
        { value: '3.2', label: '3.2 Introduction to Designing Studies' },
        { value: '3.3', label: '3.3 Random Sampling and Data Collection' },
        { value: '3.4', label: '3.4 Potential Problems with Sampling' },
        { value: '3.5', label: '3.5 Introduction to Experimental Design' },
        { value: '3.6', label: '3.6 Selecting an Experimental Design' },
        { value: '3.7', label: '3.7 Inference and Experiments' }
      ]},
      { num: 4, title: 'Probability, Random Variables & Probability Distributions', weight: '10–20%', topics: [
        { value: '4.1', label: '4.1 Introducing Statistics: Random and Non-Random Patterns?' },
        { value: '4.2', label: '4.2 Estimating Probabilities Using Simulation' },
        { value: '4.3', label: '4.3 Introduction to Probability' },
        { value: '4.4', label: '4.4 Mutually Exclusive Events' },
        { value: '4.5', label: '4.5 Conditional Probability' },
        { value: '4.6', label: '4.6 Independent Events and Unions of Events' },
        { value: '4.7', label: '4.7 Introduction to Random Variables and Probability Distributions' },
        { value: '4.8', label: '4.8 Mean and Standard Deviation of Random Variables' },
        { value: '4.9', label: '4.9 Combining Random Variables' },
        { value: '4.10', label: '4.10 Introduction to the Binomial Distribution' },
        { value: '4.11', label: '4.11 Parameters for a Binomial Distribution' },
        { value: '4.12', label: '4.12 The Geometric Distribution' }
      ]},
      { num: 5, title: 'Sampling Distributions', weight: '7–12%', topics: [
        { value: '5.1', label: '5.1 Introducing Statistics: Why Is My Sample Not Like Yours?' },
        { value: '5.2', label: '5.2 The Normal Distribution, Revisited' },
        { value: '5.3', label: '5.3 The Central Limit Theorem' },
        { value: '5.4', label: '5.4 Biased and Unbiased Point Estimates' },
        { value: '5.5', label: '5.5 Sampling Distributions for Sample Proportions' },
        { value: '5.6', label: '5.6 Sampling Distributions for Sample Means' }
      ]},
      { num: 6, title: 'Inference for Categorical Data: Proportions', weight: '12–15%', topics: [
        { value: '6.1', label: '6.1 Introducing Statistics: Why Be Normal?' },
        { value: '6.2', label: '6.2 Constructing a Confidence Interval for a Population Proportion' },
        { value: '6.3', label: '6.3 Justifying a Claim Based on a Confidence Interval' },
        { value: '6.4', label: '6.4 Setting Up a Test for a Population Proportion' },
        { value: '6.5', label: '6.5 Interpreting p-Values' },
        { value: '6.6', label: '6.6 Concluding a Test for a Population Proportion' },
        { value: '6.7', label: '6.7 Potential Errors When Performing Tests' }
      ]},
      { num: 7, title: 'Inference for Quantitative Data: Means', weight: '10–18%', topics: [
        { value: '7.1', label: '7.1 Introducing Statistics: Should I Worry About Error?' },
        { value: '7.2', label: '7.2 Constructing a Confidence Interval for a Population Mean' },
        { value: '7.3', label: '7.3 Justifying a Claim About a Population Mean' },
        { value: '7.4', label: '7.4 Setting Up a Test for a Population Mean' },
        { value: '7.5', label: '7.5 Carrying Out a Test for a Population Mean' },
        { value: '7.6', label: '7.6 Confidence Intervals for the Difference of Two Means' },
        { value: '7.7', label: '7.7 Testing for the Difference of Two Population Means' },
        { value: '7.8', label: '7.8 Inference for Means with Paired Data' },
        { value: '7.9', label: '7.9 Randomization-Based Inference for the Difference of Two Means' }
      ]},
      { num: 8, title: 'Inference for Categorical Data: Chi-Square', weight: '2–5%', topics: [
        { value: '8.1', label: '8.1 Introducing Statistics: Are My Results Unexpected?' },
        { value: '8.2', label: '8.2 Setting Up a Chi-Square Goodness of Fit Test' },
        { value: '8.3', label: '8.3 Carrying Out a Chi-Square Test for Goodness of Fit' },
        { value: '8.4', label: '8.4 Expected Counts in Two-Way Tables' },
        { value: '8.5', label: '8.5 Setting Up a Chi-Square Test for Homogeneity or Independence' },
        { value: '8.6', label: '8.6 Carrying Out a Chi-Square Test for Homogeneity or Independence' },
        { value: '8.7', label: '8.7 Skills Focus: Selecting an Appropriate Inference Procedure' }
      ]},
      { num: 9, title: 'Inference for Quantitative Data: Slopes', weight: '2–5%', topics: [
        { value: '9.1', label: '9.1 Introducing Statistics: Do Those Points Align?' },
        { value: '9.2', label: '9.2 Confidence Intervals for the Slope of a Regression Model' },
        { value: '9.3', label: '9.3 Justifying a Claim About the Slope of a Regression Model' },
        { value: '9.4', label: '9.4 Setting Up a Test for the Slope of a Regression Model' },
        { value: '9.5', label: '9.5 Carrying Out a Test for the Slope of a Regression Model' },
        { value: '9.6', label: '9.6 Skills Focus: Selecting an Appropriate Inference Procedure' }
      ]}
    ]
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
    hasContent: true,
    mcqTime: 4200,
    frqTime: 3600,
    dataFiles: ['APMICRO_MCQ', 'APMICRO_FRQ'],
    testFiles: ['P1_MICRO_TEST'],
    questionTypes: [
      { value: 'all',       label: 'All' },
      { value: 'MCQ',       label: 'MCQ' },
      { value: 'Short FRQ', label: 'Short FRQ' }
    ],
    units: [
      { num: 1, title: 'Basic Economic Concepts', weight: '12–15%', topics: [
        { value: '1.1', label: '1.1 Scarcity' },
        { value: '1.2', label: '1.2 Resource Allocation and Economic Systems' },
        { value: '1.3', label: '1.3 Production Possibilities Curve' },
        { value: '1.4', label: '1.4 Comparative Advantage and Trade' },
        { value: '1.5', label: '1.5 Cost-Benefit Analysis' },
        { value: '1.6', label: '1.6 Marginal Analysis and Consumer Choice' }
      ]},
      { num: 2, title: 'Supply and Demand', weight: '20–25%', topics: [
        { value: '2.1', label: '2.1 Demand' },
        { value: '2.2', label: '2.2 Supply' },
        { value: '2.3', label: '2.3 Price Elasticity of Demand' },
        { value: '2.4', label: '2.4 Price Elasticity of Supply' },
        { value: '2.5', label: '2.5 Other Elasticities' },
        { value: '2.6', label: '2.6 Market Equilibrium, Disequilibrium, and Changes in Equilibrium' },
        { value: '2.7', label: '2.7 The Effects of Government Intervention in Markets' },
        { value: '2.8', label: '2.8 International Trade and Public Policy' }
      ]},
      { num: 3, title: 'Production, Cost, and the Perfect Competition Model', weight: '22–25%', topics: [
        { value: '3.1', label: '3.1 The Production Function' },
        { value: '3.2', label: '3.2 Short-Run Production Costs' },
        { value: '3.3', label: '3.3 Long-Run Production Costs' },
        { value: '3.4', label: '3.4 Types of Profit' },
        { value: '3.5', label: '3.5 Profit Maximization' },
        { value: '3.6', label: '3.6 Firms\' Short-Run Decisions to Produce and Long-Run Decisions to Enter or Exit' },
        { value: '3.7', label: '3.7 Perfect Competition' }
      ]},
      { num: 4, title: 'Imperfect Competition', weight: '15–22%', topics: [
        { value: '4.1', label: '4.1 Introduction to Imperfectly Competitive Markets' },
        { value: '4.2', label: '4.2 Monopoly' },
        { value: '4.3', label: '4.3 Price Discrimination' },
        { value: '4.4', label: '4.4 Oligopoly and Game Theory' },
        { value: '4.5', label: '4.5 Monopolistic Competition' }
      ]},
      { num: 5, title: 'Factor Markets', weight: '10–13%', topics: [
        { value: '5.1', label: '5.1 Introduction to Factor Markets' },
        { value: '5.2', label: '5.2 Changes in Factor Demand and Factor Supply' },
        { value: '5.3', label: '5.3 Profit-Maximizing Behavior in Perfectly Competitive Factor Markets' },
        { value: '5.4', label: '5.4 Monopsonistic Markets' }
      ]},
      { num: 6, title: 'Market Failure and the Role of Government', weight: '8–13%', topics: [
        { value: '6.1', label: '6.1 Socially Efficient and Inefficient Market Outcomes' },
        { value: '6.2', label: '6.2 Externalities' },
        { value: '6.3', label: '6.3 Public and Private Goods' },
        { value: '6.4', label: '6.4 The Effects of Government Intervention in Different Market Structures' },
        { value: '6.5', label: '6.5 Inequality' }
      ]}
    ]
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
    hasContent: true,
    mcqTime: 4200,
    frqTime: 3600,
    dataFiles: ['APMACRO_MCQ', 'APMACRO_FRQ'],
    testFiles: ['P1_MACRO_TEST'],
    questionTypes: [
      { value: 'all',       label: 'All' },
      { value: 'MCQ',       label: 'MCQ' },
      { value: 'Short FRQ', label: 'Short FRQ' }
    ],
    units: [
      { num: 1, title: 'Basic Economic Concepts', weight: '5–10%', topics: [
        { value: '1.1', label: '1.1 Scarcity' },
        { value: '1.2', label: '1.2 Opportunity Cost and the PPC' },
        { value: '1.3', label: '1.3 Comparative Advantage and Trade' },
        { value: '1.4', label: '1.4 Demand' },
        { value: '1.5', label: '1.5 Supply' },
        { value: '1.6', label: '1.6 Market Equilibrium' }
      ]},
      { num: 2, title: 'Economic Indicators and the Business Cycle', weight: '12–17%', topics: [
        { value: '2.1', label: '2.1 The Circular Flow and GDP' },
        { value: '2.2', label: '2.2 Limitations of GDP' },
        { value: '2.3', label: '2.3 Unemployment' },
        { value: '2.4', label: '2.4 Price Indices and Inflation' },
        { value: '2.5', label: '2.5 Costs of Inflation' },
        { value: '2.6', label: '2.6 Real vs. Nominal GDP' },
        { value: '2.7', label: '2.7 Business Cycles' }
      ]},
      { num: 3, title: 'National Income and Price Determination', weight: '17–27%', topics: [
        { value: '3.1', label: '3.1 Aggregate Demand' },
        { value: '3.2', label: '3.2 Multipliers' },
        { value: '3.3', label: '3.3 Short-Run Aggregate Supply' },
        { value: '3.4', label: '3.4 Long-Run Aggregate Supply' },
        { value: '3.5', label: '3.5 Equilibrium in the AD-AS Model' },
        { value: '3.6', label: '3.6 Changes in the AD-AS Model' },
        { value: '3.7', label: '3.7 Fiscal Policy' }
      ]},
      { num: 4, title: 'Financial Sector', weight: '18–23%', topics: [
        { value: '4.1', label: '4.1 Financial Assets' },
        { value: '4.2', label: '4.2 Definition, Measurement, and Functions of Money' },
        { value: '4.3', label: '4.3 Banking and the Expansion of the Money Supply' },
        { value: '4.4', label: '4.4 The Money Market' },
        { value: '4.5', label: '4.5 Monetary Policy' },
        { value: '4.6', label: '4.6 The Loanable Funds Market' }
      ]},
      { num: 5, title: 'Long-Run Consequences of Stabilization Policies', weight: '20–30%', topics: [
        { value: '5.1', label: '5.1 Fiscal and Monetary Policy Actions in the Short Run' },
        { value: '5.2', label: '5.2 The Phillips Curve' },
        { value: '5.3', label: '5.3 Money Growth and Inflation' },
        { value: '5.4', label: '5.4 Government Deficits and the National Debt' },
        { value: '5.5', label: '5.5 Crowding Out' },
        { value: '5.6', label: '5.6 Economic Growth' }
      ]},
      { num: 6, title: 'Open Economy—International Trade and Finance', weight: '10–13%', topics: [
        { value: '6.1', label: '6.1 Balance of Payments Accounts' },
        { value: '6.2', label: '6.2 Exchange Rates' },
        { value: '6.3', label: '6.3 The Foreign Exchange Market' },
        { value: '6.4', label: '6.4 Effect of Changes in Policies and Economic Conditions on the Foreign Exchange Market' },
        { value: '6.5', label: '6.5 Real Interest Rates and International Capital Flows' }
      ]}
    ]
  },
  {
    id: 'apgov',
    name: 'AP United States Government and Politics',
    shortName: 'AP Gov',
    emoji: '🏛️',
    color: '#6366F1',
    colorDark: '#A5B4FC',
    examDate: new Date('2026-05-05T13:00:00'),
    description: 'Constitution, branches of government, civil rights, and political participation.',
    hasContent: true,
    mcqTime: 4800,
    frqTime: 6000,
    dataFiles: ['APGOV_MCQ', 'APGOV_FRQ'],
    testFiles: ['P1_GOV_TEST'],
    questionTypes: [
      { value: 'all',    label: 'All' },
      { value: 'MCQ',    label: 'MCQ' },
      { value: 'CA',     label: 'Concept Application' },
      { value: 'QA',     label: 'Quantitative Analysis' },
      { value: 'SCOTUS', label: 'SCOTUS Comparison' },
      { value: 'ARG',    label: 'Argument Essay' }
    ],
    units: [
      { num: 1, title: 'Foundations of American Democracy', weight: '15–22%', topics: [
        { value: '1.1', label: '1.1 Ideals of Democracy' },
        { value: '1.2', label: '1.2 Types of Democracy' },
        { value: '1.3', label: '1.3 Government Power and Individual Rights' },
        { value: '1.4', label: '1.4 Challenges of the Articles of Confederation' },
        { value: '1.5', label: '1.5 Ratification of the Constitution' },
        { value: '1.6', label: '1.6 Principles of American Government' },
        { value: '1.7', label: '1.7 Relationship Between States and the Federal Government' },
        { value: '1.8', label: '1.8 Constitutional Interpretations of Federalism' },
        { value: '1.9', label: '1.9 Federalism in Practice' }
      ]},
      { num: 2, title: 'Interactions Among Branches of Government', weight: '25–36%', topics: [
        { value: '2.1', label: '2.1 Congress: The Senate and the House' },
        { value: '2.2', label: '2.2 Structures, Powers, and Functions of Congress' },
        { value: '2.3', label: '2.3 Congressional Behavior' },
        { value: '2.4', label: '2.4 Roles and Powers of the President' },
        { value: '2.5', label: '2.5 Checks on the Presidency' },
        { value: '2.6', label: '2.6 Expansion of Presidential Power' },
        { value: '2.7', label: '2.7 The Bureaucracy' },
        { value: '2.8', label: '2.8 Checks on the Bureaucracy' },
        { value: '2.9', label: '2.9 The Federal Judiciary' },
        { value: '2.10', label: '2.10 Checks on the Judicial Branch' },
        { value: '2.11', label: '2.11 The Courts and Public Policy' },
        { value: '2.12', label: '2.12 Balancing Societal Goals' },
        { value: '2.13', label: '2.13 Recent Developments in the Interactions of Branches' }
      ]},
      { num: 3, title: 'Civil Liberties and Civil Rights', weight: '13–18%', topics: [
        { value: '3.1', label: '3.1 The Bill of Rights' },
        { value: '3.2', label: '3.2 First Amendment: Freedom of Religion' },
        { value: '3.3', label: '3.3 First Amendment: Freedom of Speech' },
        { value: '3.4', label: '3.4 First Amendment: Freedom of the Press' },
        { value: '3.5', label: '3.5 Second Amendment' },
        { value: '3.6', label: '3.6 Balancing Individual Freedom with Public Order and Safety' },
        { value: '3.7', label: '3.7 Selective Incorporation' },
        { value: '3.8', label: '3.8 Amendments: Due Process and the Rights of the Accused' },
        { value: '3.9', label: '3.9 Amendments: Due Process and the Right to Privacy' },
        { value: '3.10', label: '3.10 Social Movements and Equal Protection' },
        { value: '3.11', label: '3.11 Government Responses to Social Movements' },
        { value: '3.12', label: '3.12 Balancing Majority Rule and Minority Rights' }
      ]},
      { num: 4, title: 'American Political Ideologies and Beliefs', weight: '10–15%', topics: [
        { value: '4.1', label: '4.1 American Attitudes About Government and Politics' },
        { value: '4.2', label: '4.2 Political Socialization' },
        { value: '4.3', label: '4.3 Changes in Ideology' },
        { value: '4.4', label: '4.4 Influence of Political Events on Ideology' },
        { value: '4.5', label: '4.5 Measuring Public Opinion' },
        { value: '4.6', label: '4.6 Evaluating Public Opinion Data' },
        { value: '4.7', label: '4.7 Ideologies of Political Parties' },
        { value: '4.8', label: '4.8 Ideology and Policy Making' }
      ]},
      { num: 5, title: 'Political Participation', weight: '20–27%', topics: [
        { value: '5.1', label: '5.1 Voting Rights and Models of Voting Behavior' },
        { value: '5.2', label: '5.2 Voter Turnout' },
        { value: '5.3', label: '5.3 Political Parties' },
        { value: '5.4', label: '5.4 How and Why Political Parties Change and Adapt' },
        { value: '5.5', label: '5.5 Third-Party Politics' },
        { value: '5.6', label: '5.6 Interest Groups Influencing Policy Making' },
        { value: '5.7', label: '5.7 Groups Influencing Policy Outcomes' },
        { value: '5.8', label: '5.8 The Media' },
        { value: '5.9', label: '5.9 Changing Media and Political Communication' },
        { value: '5.10', label: '5.10 Elections and Electoral College' },
        { value: '5.11', label: '5.11 Campaign Finance' }
      ]}
    ]
  },
  {
    id: 'apcalcbc',
    name: 'AP Calculus BC',
    shortName: 'AP Calc BC',
    emoji: '∫',
    color: '#EC4899',
    colorDark: '#F9A8D4',
    examDate: new Date('2026-05-11T08:00:00'),
    description: 'All of Calc AB plus series, parametric, polar, and vector-valued functions.',
    hasContent: true,
    mcqTime: 6300,
    frqTime: 5400,
    referenceSheet: 'https://apstudents.collegeboard.org/ap/pdf/ap-calculus-ab-bc-equations-and-formulas.pdf',
    dataFiles: ['APCALCBC_MCQ', 'APCALCBC_FRQ'],
    testFiles: ['P1_CALCBC_TEST'],
    questionTypes: [
      { value: 'all',          label: 'All' },
      { value: 'Non-Calc MCQ', label: 'Non-Calc MCQ' },
      { value: 'Calc MCQ',     label: 'Calc MCQ' },
      { value: 'Short FRQ',    label: 'Short FRQ' },
      { value: 'Long FRQ',     label: 'Long FRQ' }
    ],
    units: [
      { num: 1, title: 'Limits and Continuity', weight: '4–7%', topics: [
        { value: '1.1', label: '1.1 Introducing Calculus' },
        { value: '1.2', label: '1.2 Defining Limits' },
        { value: '1.3', label: '1.3 Estimating Limit Values' },
        { value: '1.4', label: '1.4 Squeeze Theorem' },
        { value: '1.5', label: '1.5 Working with the Definition of a Limit' },
        { value: '1.6', label: '1.6 Continuity' }
      ]},
      { num: 2, title: 'Differentiation: Definition and Fundamental Properties', weight: '4–7%', topics: [
        { value: '2.1', label: '2.1 Average Rate of Change' },
        { value: '2.2', label: '2.2 Defining the Derivative' },
        { value: '2.3', label: '2.3 Estimating Derivatives' },
        { value: '2.4', label: '2.4 Connecting Differentiability and Continuity' },
        { value: '2.5', label: '2.5 Applying the Power Rule' },
        { value: '2.6', label: '2.6 Derivative Rules: Constant, Sum, Difference, Constant Multiple' }
      ]},
      { num: 3, title: 'Differentiation: Composite, Implicit, and Inverse Functions', weight: '4–7%', topics: [
        { value: '3.1', label: '3.1 Chain Rule' },
        { value: '3.2', label: '3.2 Implicit Differentiation' },
        { value: '3.3', label: '3.3 Differentiating Inverse Functions' },
        { value: '3.4', label: '3.4 Differentiating Inverse Trig Functions' },
        { value: '3.5', label: '3.5 Selecting Procedures for Calculating Derivatives' }
      ]},
      { num: 4, title: 'Contextual Applications of Differentiation', weight: '6–9%', topics: [
        { value: '4.1', label: '4.1 Interpreting Meaning of Derivative in Context' },
        { value: '4.2', label: '4.2 Straight-Line Motion' },
        { value: '4.3', label: '4.3 Rates of Change in Applied Contexts' },
        { value: '4.4', label: '4.4 Introduction to Related Rates' },
        { value: '4.5', label: '4.5 Solving Related Rates Problems' },
        { value: '4.6', label: '4.6 Approximating Values using Local Linearity' },
        { value: '4.7', label: "4.7 L'Hôpital's Rule" }
      ]},
      { num: 5, title: 'Analytical Applications of Differentiation', weight: '8–11%', topics: [
        { value: '5.1', label: '5.1 Mean Value Theorem' },
        { value: '5.2', label: '5.2 Extreme Value Theorem' },
        { value: '5.3', label: '5.3 Critical Points' },
        { value: '5.4', label: '5.4 First Derivative Test' },
        { value: '5.5', label: '5.5 Second Derivative Test' },
        { value: '5.6', label: '5.6 Concavity and Inflection Points' },
        { value: '5.7', label: '5.7 Curve Sketching' },
        { value: '5.8', label: '5.8 Optimization' }
      ]},
      { num: 6, title: 'Integration and Accumulation of Change', weight: '17–20%', topics: [
        { value: '6.1', label: '6.1 Riemann Sums and the Definite Integral' },
        { value: '6.2', label: '6.2 Fundamental Theorem of Calculus' },
        { value: '6.3', label: '6.3 u-Substitution' },
        { value: '6.4', label: '6.4 Integration by Parts' },
        { value: '6.5', label: '6.5 Linear Partial Fractions' },
        { value: '6.6', label: '6.6 Evaluating Improper Integrals' },
        { value: '6.7', label: '6.7 Average Value of a Function' }
      ]},
      { num: 7, title: 'Differential Equations', weight: '6–9%', topics: [
        { value: '7.1', label: '7.1 Modeling Situations with Differential Equations' },
        { value: '7.2', label: '7.2 Verifying Solutions for Differential Equations' },
        { value: '7.3', label: '7.3 Slope Fields' },
        { value: '7.4', label: "7.4 Euler's Method" },
        { value: '7.5', label: '7.5 Separation of Variables' },
        { value: '7.6', label: '7.6 Particular Solutions using Initial Conditions' },
        { value: '7.7', label: '7.7 Exponential Models' },
        { value: '7.8', label: '7.8 Logistic Models' }
      ]},
      { num: 8, title: 'Applications of Integration', weight: '6–9%', topics: [
        { value: '8.1', label: '8.1 Average Value of a Function on an Interval' },
        { value: '8.2', label: '8.2 Position, Velocity, Acceleration' },
        { value: '8.3', label: '8.3 Area Between Curves' },
        { value: '8.4', label: '8.4 Volume: Disc Method' },
        { value: '8.5', label: '8.5 Volume: Washer Method' },
        { value: '8.6', label: '8.6 Volume: Shell Method' },
        { value: '8.7', label: '8.7 Arc Length' }
      ]},
      { num: 9, title: 'Parametric Equations, Polar Coordinates, and Vector-Valued Functions', weight: '11–12%', topics: [
        { value: '9.1', label: '9.1 Defining and Differentiating Parametric Equations' },
        { value: '9.2', label: '9.2 Second Derivatives of Parametric Equations' },
        { value: '9.3', label: '9.3 Arc Length: Parametric Equations' },
        { value: '9.4', label: '9.4 Defining and Differentiating Vector-Valued Functions' },
        { value: '9.5', label: '9.5 Integrating Vector-Valued Functions' },
        { value: '9.6', label: '9.6 Solving Motion Problems Using Parametric/Vector-Valued Functions' },
        { value: '9.7', label: '9.7 Defining Polar Coordinates' },
        { value: '9.8', label: '9.8 Find dy/dx of Polar Curves' },
        { value: '9.9', label: '9.9 Find the Area Bounded by a Polar Curve' }
      ]},
      { num: 10, title: 'Infinite Sequences and Series', weight: '17–18%', topics: [
        { value: '10.1', label: '10.1 Defining Convergent and Divergent Infinite Series' },
        { value: '10.2', label: '10.2 Geometric Series' },
        { value: '10.3', label: '10.3 The nth Term Test for Divergence' },
        { value: '10.4', label: '10.4 Integral Test for Convergence' },
        { value: '10.5', label: '10.5 Harmonic Series and p-Series' },
        { value: '10.6', label: '10.6 Comparison Tests for Convergence' },
        { value: '10.7', label: '10.7 Alternating Series Test for Convergence' },
        { value: '10.8', label: '10.8 Ratio Test for Convergence' },
        { value: '10.9', label: '10.9 Determining Absolute or Conditional Convergence' },
        { value: '10.10', label: '10.10 Alternating Series Error Bound' },
        { value: '10.11', label: '10.11 Finding Taylor Polynomial Approximations' },
        { value: '10.12', label: '10.12 Lagrange Error Bound' },
        { value: '10.13', label: '10.13 Radius and Interval of Convergence of Power Series' },
        { value: '10.14', label: '10.14 Finding Taylor or Maclaurin Series' }
      ]}
    ]
  },
  {
    id: 'apenviro',
    name: 'AP Environmental Science',
    shortName: 'AP Enviro',
    emoji: '🌿',
    color: '#16A34A',
    colorDark: '#86EFAC',
    examDate: new Date('2026-05-07T13:00:00'), // placeholder — verify against College Board
    description: 'Ecosystems, biodiversity, populations, earth systems, and global change.',
    hasContent: true,
    mcqTime: 5400,
    frqTime: 4200,
    dataFiles: ['APENVIRO_MCQ', 'APENVIRO_FRQ'],
    testFiles: ['P1_ENVIRO_TEST'],
    questionTypes: [
      { value: 'all',       label: 'All' },
      { value: 'MCQ',       label: 'MCQ' },
      { value: 'Short FRQ', label: 'Short FRQ' },
      { value: 'Long FRQ',  label: 'Long FRQ' }
    ],
    units: [
      { num: 1, title: 'Ecosystems', weight: '6–8%', topics: [
        { value: '1.1',  label: '1.1 Ecosystems' },
        { value: '1.2',  label: '1.2 Biomes' },
        { value: '1.3',  label: '1.3 Carbon Cycle' },
        { value: '1.4',  label: '1.4 Nitrogen Cycle' },
        { value: '1.5',  label: '1.5 Phosphorus Cycle' },
        { value: '1.6',  label: '1.6 Hydrologic Cycle' },
        { value: '1.7',  label: '1.7 Primary Productivity' },
        { value: '1.8',  label: '1.8 Net Primary Productivity' },
        { value: '1.9',  label: '1.9 Trophic Levels' },
        { value: '1.10', label: '1.10 Energy Flow' },
        { value: '1.11', label: '1.11 Food Webs' },
        { value: '1.12', label: '1.12 Food Chains' },
        { value: '1.13', label: '1.13 10% Rule' }
      ]},
      { num: 2, title: 'Biodiversity', weight: '6–8%', topics: [
        { value: '2.1',  label: '2.1 Biodiversity' },
        { value: '2.2',  label: '2.2 Ecosystem Services' },
        { value: '2.3',  label: '2.3 Island Biogeography' },
        { value: '2.4',  label: '2.4 Species-Area Relationship' },
        { value: '2.5',  label: '2.5 Ecological Tolerance' },
        { value: '2.6',  label: '2.6 Range of Tolerance' },
        { value: '2.7',  label: '2.7 Ecological Succession' },
        { value: '2.8',  label: '2.8 Primary Succession' },
        { value: '2.9',  label: '2.9 Secondary Succession' },
        { value: '2.10', label: '2.10 Keystone Species' },
        { value: '2.11', label: '2.11 Adaptations' }
      ]},
      { num: 3, title: 'Populations', weight: '8–10%', topics: [
        { value: '3.1',  label: '3.1 Population Dynamics' },
        { value: '3.2',  label: '3.2 Exponential Growth' },
        { value: '3.3',  label: '3.3 Logistic Growth' },
        { value: '3.4',  label: '3.4 Carrying Capacity' },
        { value: '3.5',  label: '3.5 Survivorship Curves' },
        { value: '3.6',  label: '3.6 Age Structure Diagrams' },
        { value: '3.7',  label: '3.7 Demographic Transition Model' },
        { value: '3.8',  label: '3.8 Total Fertility Rate' },
        { value: '3.9',  label: '3.9 Doubling Time' },
        { value: '3.10', label: '3.10 Rule of 70' }
      ]},
      { num: 4, title: 'Earth Systems and Resources', weight: '10–15%', topics: [
        { value: '4.1',  label: '4.1 Plate Tectonics' },
        { value: '4.2',  label: '4.2 Soil Formation' },
        { value: '4.3',  label: '4.3 Soil Horizons' },
        { value: '4.4',  label: '4.4 Soil Composition' },
        { value: '4.5',  label: '4.5 Atmosphere Layers' },
        { value: '4.6',  label: '4.6 Global Wind Patterns' },
        { value: '4.7',  label: '4.7 Hadley Cells' },
        { value: '4.8',  label: '4.8 Watersheds' },
        { value: '4.9',  label: '4.9 Solar Radiation' },
        { value: '4.10', label: '4.10 Seasons' },
        { value: '4.11', label: '4.11 Coriolis Effect' },
        { value: '4.12', label: '4.12 El Niño' },
        { value: '4.13', label: '4.13 La Niña' },
        { value: '4.14', label: '4.14 Rain Shadow Effect' }
      ]},
      { num: 5, title: 'Land and Water Use', weight: '10–15%', topics: [
        { value: '5.1',  label: '5.1 Tragedy of the Commons' },
        { value: '5.2',  label: '5.2 Deforestation' },
        { value: '5.3',  label: '5.3 Green Revolution' },
        { value: '5.4',  label: '5.4 Agricultural Practices' },
        { value: '5.5',  label: '5.5 Irrigation Impacts' },
        { value: '5.6',  label: '5.6 Pesticides' },
        { value: '5.7',  label: '5.7 Integrated Pest Management' },
        { value: '5.8',  label: '5.8 Meat Production' },
        { value: '5.9',  label: '5.9 Overfishing' },
        { value: '5.10', label: '5.10 Bycatch' },
        { value: '5.11', label: '5.11 Mining Impacts' },
        { value: '5.12', label: '5.12 Urbanization' },
        { value: '5.13', label: '5.13 Ecological Footprint' },
        { value: '5.14', label: '5.14 CITES' },
        { value: '5.15', label: '5.15 Environmental Policy' }
      ]},
      { num: 6, title: 'Energy Resources and Consumption', weight: '10–15%', topics: [
        { value: '6.1',  label: '6.1 Renewable vs Nonrenewable Energy' },
        { value: '6.2',  label: '6.2 Fossil Fuels' },
        { value: '6.3',  label: '6.3 Coal' },
        { value: '6.4',  label: '6.4 Natural Gas' },
        { value: '6.5',  label: '6.5 Oil' },
        { value: '6.6',  label: '6.6 Nuclear Power' },
        { value: '6.7',  label: '6.7 Hydroelectric Power' },
        { value: '6.8',  label: '6.8 Solar Energy' },
        { value: '6.9',  label: '6.9 Wind Energy' },
        { value: '6.10', label: '6.10 Hydrogen Fuel Cells' },
        { value: '6.11', label: '6.11 EROI' },
        { value: '6.12', label: '6.12 Energy Conservation' },
        { value: '6.13', label: '6.13 Energy Efficiency' }
      ]},
      { num: 7, title: 'Atmospheric Pollution', weight: '7–10%', topics: [
        { value: '7.1',  label: '7.1 Air Pollution' },
        { value: '7.2',  label: '7.2 Primary vs Secondary Pollutants' },
        { value: '7.3',  label: '7.3 Photochemical Smog' },
        { value: '7.4',  label: '7.4 Thermal Inversion' },
        { value: '7.5',  label: '7.5 Indoor Air Pollutants' },
        { value: '7.6',  label: '7.6 Acid Deposition' },
        { value: '7.7',  label: '7.7 Acid Rain' },
        { value: '7.8',  label: '7.8 Ozone Depletion' },
        { value: '7.9',  label: '7.9 CFCs' },
        { value: '7.10', label: '7.10 Stratospheric Ozone' },
        { value: '7.11', label: '7.11 Clean Air Act' }
      ]},
      { num: 8, title: 'Aquatic and Terrestrial Pollution', weight: '7–10%', topics: [
        { value: '8.1',  label: '8.1 Water Pollution' },
        { value: '8.2',  label: '8.2 Point Source vs Nonpoint Source' },
        { value: '8.3',  label: '8.3 Eutrophication' },
        { value: '8.4',  label: '8.4 Hypoxic Zones' },
        { value: '8.5',  label: '8.5 Bioaccumulation' },
        { value: '8.6',  label: '8.6 Biomagnification' },
        { value: '8.7',  label: '8.7 Persistent Organic Pollutants' },
        { value: '8.8',  label: '8.8 Heavy Metals' },
        { value: '8.9',  label: '8.9 Solid Waste' },
        { value: '8.10', label: '8.10 MSW' },
        { value: '8.11', label: '8.11 Landfills' },
        { value: '8.12', label: '8.12 Recycling' },
        { value: '8.13', label: '8.13 Waste Reduction' }
      ]},
      { num: 9, title: 'Global Change', weight: '15–20%', topics: [
        { value: '9.1',  label: '9.1 Greenhouse Effect' },
        { value: '9.2',  label: '9.2 Greenhouse Gases' },
        { value: '9.3',  label: '9.3 Climate Change' },
        { value: '9.4',  label: '9.4 Global Warming' },
        { value: '9.5',  label: '9.5 Carbon Sequestration' },
        { value: '9.6',  label: '9.6 Ocean Warming' },
        { value: '9.7',  label: '9.7 Ocean Acidification' },
        { value: '9.8',  label: '9.8 Sea Level Rise' },
        { value: '9.9',  label: '9.9 Invasive Species' },
        { value: '9.10', label: '9.10 Endangered Species' },
        { value: '9.11', label: '9.11 Habitat Fragmentation' },
        { value: '9.12', label: '9.12 Biodiversity Loss' },
        { value: '9.13', label: '9.13 IPCC' },
        { value: '9.14', label: '9.14 Paris Agreement' }
      ]}
    ]
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

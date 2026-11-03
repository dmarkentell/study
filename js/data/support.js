/*
 * Foundation courses: the math, science and common-engineering courses every
 * MEEN student takes before or alongside the major.
 *
 * FIELD KEY (shared by every data file)
 *   id, title, cr (credit hours), y (typical year), s (typical semester)
 *   kind: 'support' | 'core' | 'elective'
 *   area: elective area ('thermo' | 'data' | 'mms') or null
 *   d:  difficulty 1-5 (estimate drawn from typical student experience)
 *   h:  hours per week OUTSIDE class for a B+/A (estimate)
 *   pre: prerequisite course ids (best known; always confirm in the catalog / Howdy)
 *   sum: one-paragraph summary          why: why it matters for the rest of the degree
 *   know: concepts to have solid BEFORE day one
 *   units: [name, 'topic; topic; topic', 'how to study this unit', 'self-check Q | self-check Q']
 *   top: most important topics          take: key takeaways
 *   real: where it shows up in industry pit: common mistakes
 *   res: [kind, label, search query]  (links are generated as searches so they never go stale)
 *   fe: FE Mechanical exam knowledge areas this course feeds
 *   sw: software / tools used
 */
window.MEEN = window.MEEN || { courses: [], tracks: [] };

window.MEEN.courses.push(
{
  id: 'ENGR 102', title: 'Engineering Lab I – Computation', cr: 2, y: 1, s: 'Fall', kind: 'support', d: 2, h: 5,
  pre: [],
  sum: 'First-year programming course for all engineers. You learn Python fundamentals and use them to solve small engineering problems, working in teams.',
  why: 'MEEN 357 (numerical methods), MEEN 260 (data analysis), and every lab report later assume you can write a script that loads data, loops, and plots. Weak programming here costs you most in junior year.',
  know: ['Algebra and basic functions', 'Comfort using a computer file system', 'Patience with debugging'],
  units: [
    ['Python basics', 'variables and types; input/output; arithmetic and operators; f-strings', 'Type every example yourself. Never copy-paste while learning syntax.', 'What is the difference between 7/2 and 7//2? | Why does "3" + 4 fail?'],
    ['Control flow', 'if/elif/else; for and while loops; break/continue; nested loops', 'Trace loops by hand on paper with a small table of variable values per iteration.', 'Write a loop that sums the odd numbers from 1 to 99. | When would you pick while over for?'],
    ['Functions and modules', 'def, arguments and return values; scope; importing modules; writing reusable code', 'Refactor an old homework into functions. If a function needs a comment to explain it, split it.', 'What does a function return if it has no return statement? | Why avoid global variables?'],
    ['Data structures', 'lists, tuples, dictionaries, sets; slicing; list comprehensions', 'Solve small puzzles (Codewars 8-7 kyu, or the course problem sets) until slicing is automatic.', 'How do you reverse a list with slicing? | When is a dict better than a list?'],
    ['Files, NumPy and plotting', 'reading CSV/text files; NumPy arrays; vectorized math; matplotlib plots with labels and units', 'Make every plot you submit publication-clean: axis labels with units, legend, title.', 'Why is a NumPy array faster than a Python list for math? | What 4 things must every engineering plot have?'],
    ['Team engineering project', 'problem decomposition; pseudocode; testing; version control basics; technical communication', 'Agree on function interfaces with teammates before anyone writes code.', 'How do you test a function you wrote? | What is pseudocode for?']
  ],
  top: ['Loops and functions', 'NumPy arrays', 'Plotting data correctly', 'Debugging systematically'],
  take: ['Programming is a tool for engineering, like a calculator that can repeat itself.', 'Break problems into small testable functions.', 'Read error messages from the bottom up; they usually tell you the line and the cause.'],
  real: ['Automating test-data processing in every industry', 'Python scripts drive CAD/CAE tools (SolidWorks API, Abaqus, ANSYS)', 'Data analysis and machine learning roles start from this skill set'],
  pit: ['Copying code without understanding it', 'Starting projects the night before; debugging takes longer than writing', 'Not commenting or naming variables clearly'],
  res: [['book', 'Automate the Boring Stuff with Python (free online)', 'Automate the Boring Stuff with Python'], ['video', 'Corey Schafer – Python tutorials', 'Corey Schafer Python tutorial'], ['practice', 'Codewars / LeetCode easy problems', 'codewars python beginner']],
  fe: ['Computational Tools'], sw: ['Python', 'Jupyter', 'VS Code', 'Git']
},
{
  id: 'MATH 151', title: 'Engineering Mathematics I (Calculus I)', cr: 4, y: 1, s: 'Fall', kind: 'support', d: 3, h: 8,
  pre: [],
  sum: 'Limits, derivatives and an introduction to integrals, with vectors and engineering applications. TAMU teaches it with an engineering focus and a computer lab component.',
  why: 'Every rate in mechanical engineering is a derivative: velocity, strain rate, heat flux, flow rate. If derivatives are not automatic, statics and dynamics feel twice as hard.',
  know: ['Algebra (factoring, exponents, logs)', 'Trigonometry and the unit circle', 'Graphs of common functions'],
  units: [
    ['Vectors', 'vector algebra; dot product; projections; parametric equations', 'Draw every vector problem. Vectors come back in statics week one.', 'What does a dot product of zero mean geometrically? | Find the projection of a onto b.'],
    ['Limits and continuity', 'limit laws; one-sided limits; limits at infinity; continuity', 'Focus on the intuition: what value does the function approach? Then learn the algebra tricks.', 'Why does sin(x)/x approach 1? | When is a function not continuous?'],
    ['Derivatives', 'definition; power, product, quotient, chain rules; implicit differentiation; trig/exp/log derivatives', 'Drill until chain rule is reflexive. Speed here pays off for four years.', 'Differentiate e^(3x)·sin(x²). | What does the derivative represent physically?'],
    ['Applications of derivatives', 'related rates; linear approximation; optimization; curve sketching; L\'Hôpital\'s rule', 'For optimization and related rates, always write the "given/find/relationship" step before differentiating.', 'A ladder slides down a wall; set up the related rate. | How do you confirm a max vs a min?'],
    ['Intro to integrals', 'antiderivatives; Riemann sums; definite integrals; Fundamental Theorem of Calculus; substitution', 'Understand the integral as accumulated area. That picture is what you use in engineering.', 'What does the FTC connect? | Integrate x·cos(x²) dx.']
  ],
  top: ['Chain rule', 'Optimization', 'Related rates', 'Integral as accumulation'],
  take: ['Derivatives measure rates of change; integrals accumulate quantities.', 'Fast, accurate differentiation is a core engineering skill.'],
  real: ['Optimizing designs (minimum weight, maximum efficiency)', 'Velocity and acceleration from position data', 'Linearizing nonlinear systems for control'],
  pit: ['Weak algebra and trig causing errors in calculus problems', 'Memorizing problem types instead of understanding setup'],
  res: [['video', 'Professor Leonard – Calculus 1', 'Professor Leonard Calculus 1'], ['video', '3Blue1Brown – Essence of Calculus', '3Blue1Brown essence of calculus'], ['book', 'Paul\'s Online Math Notes – Calculus I', 'Paul\'s Online Math Notes Calculus I'], ['course', 'MIT OCW 18.01 Single Variable Calculus', 'MIT OCW 18.01']],
  fe: ['Mathematics'], sw: ['Python or MATLAB (lab)']
},
{
  id: 'MATH 152', title: 'Engineering Mathematics II (Calculus II)', cr: 4, y: 1, s: 'Spring', kind: 'support', d: 4, h: 9,
  pre: ['MATH 151'],
  sum: 'Integration techniques, applications of integrals, and infinite sequences and series including Taylor series.',
  why: 'Integrals compute centroids, moments of inertia, work and fluid forces. Taylor series is how engineers linearize and approximate everything, including numerical methods in MEEN 357.',
  know: ['Fluent differentiation', 'u-substitution', 'Trig identities'],
  units: [
    ['Applications of integration', 'area between curves; volumes (disk, washer, shell); arc length; work; hydrostatic force; centroids', 'Sketch the region and a representative slice every time. The slice gives you the integral.', 'Set up the volume of revolution around the y-axis with shells. | How does a centroid integral work?'],
    ['Integration techniques', 'integration by parts; trig integrals; trig substitution; partial fractions; improper integrals', 'Make a one-page decision chart: which technique for which form. Practice choosing before solving.', 'When do you use partial fractions? | Integrate x·e^x.'],
    ['Sequences and series', 'convergence tests; geometric and p-series; comparison, ratio, root, alternating tests', 'Classify 30 series quickly using a test-selection flowchart. Exams reward recognition speed.', 'Does Σ1/n converge? | When is the ratio test inconclusive?'],
    ['Power and Taylor series', 'radius and interval of convergence; Taylor and Maclaurin series; error bounds', 'Memorize the Maclaurin series of e^x, sin x, cos x and 1/(1-x); derive the rest from them.', 'Write the first 3 terms of the Taylor series of ln(1+x). | Why is sin(x) ≈ x for small x?']
  ],
  top: ['Integration by parts', 'Centroids and work integrals', 'Taylor series', 'Convergence tests'],
  take: ['Integration is setting up the right slice, then picking the right technique.', 'Taylor series lets you replace hard functions with polynomials, which is the basis of most approximations engineers make.'],
  real: ['Centroids and inertias for beam design', 'Small-angle approximations in vibrations', 'Error estimates in simulation software'],
  pit: ['Rushing setup in application problems', 'Mixing up convergence tests', 'Not checking endpoints for interval of convergence'],
  res: [['video', 'Professor Leonard – Calculus 2', 'Professor Leonard Calculus 2'], ['book', 'Paul\'s Online Math Notes – Calculus II', 'Paul\'s Online Math Notes Calculus II'], ['practice', 'Integration bee practice sets', 'integration practice problems with solutions']],
  fe: ['Mathematics'], sw: []
},
{
  id: 'MATH 251', title: 'Engineering Mathematics III (Multivariable Calculus)', cr: 3, y: 2, s: 'Fall', kind: 'support', d: 3, h: 7,
  pre: ['MATH 152'],
  sum: 'Calculus in 3D: partial derivatives, gradients, multiple integrals, and vector calculus (line and surface integrals, Green\'s, Stokes\' and divergence theorems).',
  why: 'Fluids, heat transfer and solid mechanics all live in 3D fields. The divergence theorem is how conservation laws (mass, momentum, energy) are written in MEEN 344 and 461.',
  know: ['Vectors and dot/cross products', 'Integration techniques', 'Parametric curves'],
  units: [
    ['Vectors and 3D geometry', 'cross product; lines and planes; surfaces; cylindrical and spherical coordinates', 'Use a 3D grapher (GeoGebra 3D) to see every surface you work with.', 'Find the plane through three points. | What does the cross product magnitude represent?'],
    ['Partial derivatives', 'partials; chain rule; gradient; directional derivatives; tangent planes; optimization and Lagrange multipliers', 'Connect the gradient to "direction of steepest increase" and perpendicular to level curves.', 'Why is the gradient normal to level surfaces? | Set up a Lagrange multiplier problem.'],
    ['Multiple integrals', 'double and triple integrals; changing order; polar, cylindrical, spherical coordinates; Jacobians', 'Draw the region and choose coordinates that match its symmetry before writing limits.', 'Find the volume of a sphere with spherical coordinates. | When should you switch to polar?'],
    ['Vector calculus', 'vector fields; line integrals; conservative fields; Green\'s theorem; surface integrals; flux; Stokes\' and divergence theorems', 'Learn what each theorem means physically (circulation and flux). Fluids will use these exact ideas.', 'What does divergence measure? | When is a line integral path-independent?']
  ],
  top: ['Gradient', 'Multiple integrals in non-Cartesian coordinates', 'Divergence theorem', 'Flux'],
  take: ['Physical fields (temperature, velocity, stress) are multivariable functions.', 'Conservation laws come from flux integrals over control volumes.'],
  real: ['Control-volume analysis in fluids and heat transfer', 'Computing mass properties of 3D parts', 'Optimization with constraints in design'],
  pit: ['Wrong integration limits from not sketching the region', 'Forgetting the Jacobian (r, r² sin φ)'],
  res: [['video', 'Professor Leonard – Calculus 3', 'Professor Leonard Calculus 3'], ['video', 'Khan Academy – Multivariable calculus (Grant Sanderson)', 'Khan Academy multivariable calculus'], ['course', 'MIT OCW 18.02 Multivariable Calculus', 'MIT OCW 18.02']],
  fe: ['Mathematics'], sw: ['GeoGebra 3D']
},
{
  id: 'MATH 308', title: 'Differential Equations', cr: 3, y: 2, s: 'Spring', kind: 'support', d: 3, h: 7,
  pre: ['MATH 251'],
  sum: 'Ordinary differential equations: first-order methods, second-order linear equations, Laplace transforms, and systems of ODEs.',
  why: 'This is one of the most important math courses for MEEN. Vibrations (363), controls (364), heat transfer (461) and numerical methods (357) are built on ODEs and Laplace transforms.',
  know: ['Integration techniques', 'Partial fractions', 'Complex numbers and Euler\'s formula'],
  units: [
    ['First-order ODEs', 'separable; linear with integrating factor; exact; modeling (mixing, cooling, RC circuits); direction fields', 'For every model problem, write the balance equation (rate in − rate out) yourself before solving.', 'Solve dy/dt = −k(y − T∞). | What does a direction field show?'],
    ['Second-order linear ODEs', 'homogeneous with constant coefficients; characteristic equation; undetermined coefficients; variation of parameters', 'Link each root type (real, repeated, complex) to physical behavior: overdamped, critically damped, underdamped.', 'What solution form comes from complex roots? | When does resonance occur?'],
    ['Mechanical vibrations', 'mass-spring-damper; free and forced response; resonance; beats', 'This unit previews MEEN 363. Master it now and junior year gets easier.', 'Write the ODE of a damped spring-mass system. | What is the natural frequency?'],
    ['Laplace transforms', 'transform table; inverse transforms; partial fractions; step and impulse functions; convolution; solving IVPs', 'Make your own transform table and use it on every homework. Controls classes use Laplace constantly.', 'Laplace of a unit step delayed by 2 s? | Why does Laplace turn ODEs into algebra?'],
    ['Systems of ODEs', 'matrix form; eigenvalues and eigenvectors; phase portraits; stability', 'Connect eigenvalues to stability: negative real parts mean decay.', 'What do complex eigenvalues mean for a phase portrait? | Convert a 2nd-order ODE to a first-order system.']
  ],
  top: ['Second-order constant-coefficient ODEs', 'Laplace transforms', 'Eigenvalues and stability', 'Modeling physical systems'],
  take: ['Dynamic systems are described by ODEs; the roots of the characteristic equation tell you how the system behaves.', 'Laplace transforms are the language of control engineering.'],
  real: ['Suspension and vibration design', 'Control system design', 'Thermal transient analysis', 'Circuit analysis'],
  pit: ['Arithmetic errors in partial fractions', 'Memorizing solution forms without linking them to physical meaning'],
  res: [['book', 'Paul\'s Online Math Notes – Differential Equations', 'Paul\'s Online Math Notes Differential Equations'], ['video', 'MIT 18.03 Arthur Mattuck lectures', 'MIT 18.03 Mattuck differential equations'], ['video', 'Professor Leonard – Differential Equations', 'Professor Leonard differential equations']],
  fe: ['Mathematics'], sw: ['MATLAB/Python (ode45, solve_ivp)']
},
{
  id: 'CHEM 107', title: 'General Chemistry for Engineering Students (+ CHEM 117 lab)', cr: 4, y: 1, s: 'Fall', kind: 'support', d: 3, h: 6,
  pre: [],
  sum: 'One-semester chemistry for engineers: atomic structure, bonding, stoichiometry, gases, thermochemistry, and an intro to materials and electrochemistry.',
  why: 'Bonding explains material properties in MEEN 222. Thermochemistry and gas laws lead directly into thermodynamics (MEEN 315) and combustion.',
  know: ['Unit conversions', 'Algebra', 'Scientific notation'],
  units: [
    ['Atoms and periodic trends', 'electron configuration; periodic trends; quantum numbers', 'Learn trends as reasons (effective nuclear charge), not lists.', 'Why does atomic radius decrease across a period? | What is ionization energy?'],
    ['Bonding and structure', 'ionic, covalent, metallic bonds; Lewis structures; VSEPR; intermolecular forces', 'Relate each bond type to a material you know (salt, polymer, steel).', 'Why are metals ductile? | What makes water\'s boiling point high?'],
    ['Stoichiometry and reactions', 'moles; balancing; limiting reactant; yields; solution concentration', 'Always carry units through every step. This habit transfers to every engineering class.', 'Find the limiting reactant in a combustion problem. | Convert grams to moles.'],
    ['Gases and thermochemistry', 'ideal gas law; partial pressures; enthalpy; Hess\'s law; calorimetry', 'Treat this as your thermodynamics preview.', 'What is the enthalpy of reaction? | When is the ideal gas law not accurate?'],
    ['Electrochemistry and materials', 'redox; galvanic cells; corrosion; batteries', 'Connect corrosion to real failures (bridges, pipelines).', 'Why does galvanic corrosion occur? | What sets a battery\'s voltage?']
  ],
  top: ['Bonding and material properties', 'Stoichiometry', 'Ideal gas law', 'Enthalpy'],
  take: ['Material behavior traces back to bonding.', 'Units and dimensional analysis prevent most errors.'],
  real: ['Corrosion control on pipelines and offshore structures', 'Battery engineering for EVs', 'Combustion and emissions'],
  pit: ['Sloppy unit tracking', 'Not doing enough practice problems before exams'],
  res: [['video', 'The Organic Chemistry Tutor – General Chemistry', 'Organic Chemistry Tutor general chemistry'], ['book', 'OpenStax Chemistry (free)', 'OpenStax Chemistry 2e']],
  fe: ['Material Properties and Processing'], sw: []
},
{
  id: 'PHYS 216', title: 'Experimental Physics & Engineering Lab II – Mechanics (ENGR/PHYS 216)', cr: 2, y: 1, s: 'Spring', kind: 'support', d: 3, h: 6,
  pre: ['MATH 151'],
  sum: 'The lab that goes with PHYS 206: experiments in kinematics, Newton\'s laws, energy, momentum and rotation, with data analysis and uncertainty.',
  why: 'This is the physics behind MEEN 221 and 225. It also introduces uncertainty and data analysis, which MEEN 260 builds on.',
  know: ['Derivatives', 'Vectors', 'Basic Python for data'],
  units: [
    ['Kinematics', '1D and 2D motion; projectile motion; relative motion', 'Draw position, velocity and acceleration graphs for every problem.', 'What is acceleration at the top of a projectile path? | Relate slope of v(t) to a(t).'],
    ['Newton\'s laws', 'free-body diagrams; friction; circular motion', 'Free-body diagrams are the most important skill for the next two years. Draw one every time.', 'What forces act on a block on an incline with friction? | What provides centripetal force for a car on a curve?'],
    ['Energy and momentum', 'work-energy theorem; conservation of energy; impulse; collisions', 'Decide which principle to use: energy for speed vs position, momentum for collisions.', 'When is mechanical energy not conserved? | Elastic vs inelastic collision?'],
    ['Rotation', 'torque; moment of inertia; angular momentum; rolling', 'Map each linear quantity to its rotational version.', 'Why does a hollow cylinder roll slower than a solid one? | Define torque.'],
    ['Measurement and uncertainty', 'error propagation; curve fitting; lab reports', 'Write every lab report with clear figures and uncertainty. You will write many more.', 'How do errors combine in a product? | What does R² tell you?']
  ],
  top: ['Free-body diagrams', 'Energy methods', 'Rotational dynamics', 'Uncertainty'],
  take: ['Free-body diagrams are the start of every mechanics problem.', 'Every measurement has uncertainty and you must report it.'],
  real: ['Load analysis of structures and machines', 'Test engineering', 'Crash and impact analysis'],
  pit: ['Skipping free-body diagrams', 'Treating labs as busywork; they build MEEN 260 skills'],
  res: [['video', 'Michel van Biezen – Physics', 'Michel van Biezen physics mechanics'], ['book', 'OpenStax University Physics Vol. 1', 'OpenStax University Physics volume 1'], ['video', 'Flipping Physics', 'Flipping Physics']],
  fe: ['Statics', 'Dynamics, Kinematics, and Vibrations'], sw: ['Python', 'Excel']
},
{
  id: 'PHYS 217', title: 'Experimental Physics & Engineering Lab III – Electricity & Magnetism (ENGR/PHYS 217)', cr: 2, y: 2, s: 'Fall', kind: 'support', d: 3, h: 6,
  pre: ['PHYS 216', 'PHYS 206'],
  sum: 'The lab that goes with PHYS 207: experiments on fields, circuits, magnetism and induction using multimeters, oscilloscopes and data analysis.',
  why: 'Leads into ECEN 215 and MEEN 260 sensors. Motors, sensors and actuators in mechatronics depend on this material.',
  know: ['Integration', 'Vectors', 'Lab data analysis'],
  units: [
    ['Electric fields and potential', 'Coulomb\'s law; electric field; Gauss\'s law; potential; capacitance', 'Connect field (force per charge) and potential (energy per charge).', 'How does a capacitor store energy? | Field inside a conductor?'],
    ['DC circuits', 'current; resistance; Ohm\'s law; Kirchhoff\'s laws; RC circuits', 'Build the circuits on a breadboard if you can.', 'Two resistors in parallel: equivalent resistance? | RC time constant meaning?'],
    ['Magnetism', 'magnetic force; Biot-Savart; Ampère\'s law; magnetic materials', 'Use the right-hand rule physically on every problem.', 'Force on a current-carrying wire? | Why does a motor spin?'],
    ['Induction', 'Faraday\'s law; Lenz\'s law; inductors; generators and transformers', 'Tie each law to a device: generator, transformer, eddy-current brake.', 'Why does a moving magnet induce current? | What does Lenz\'s law say?']
  ],
  top: ['Circuit analysis', 'RC time constants', 'Induction and motors'],
  take: ['Electromechanical devices convert between electrical and mechanical energy.'],
  real: ['Motors and generators', 'Sensors (strain gauges, LVDTs)', 'EV powertrains'],
  pit: ['Sign errors in Kirchhoff loops', 'Ignoring units of μ0 and ε0'],
  res: [['video', 'Michel van Biezen – Electricity & Magnetism', 'Michel van Biezen electricity magnetism'], ['book', 'OpenStax University Physics Vol. 2', 'OpenStax University Physics volume 2']],
  fe: ['Electricity and Magnetism'], sw: ['Oscilloscope', 'Multimeter', 'Python']
},
{
  id: 'ECEN 215', title: 'Principles of Electrical Engineering', cr: 3, y: 2, s: 'Spring', kind: 'support', d: 3, h: 7,
  pre: ['PHYS 207', 'MATH 308'],
  sum: 'Circuits for non-EE majors: DC and AC analysis, op-amps, first- and second-order transients, power, and an introduction to motors and digital circuits.',
  why: 'Needed for MEEN 260 instrumentation and MEEN 364 controls. Mechatronics and robotics careers depend on it.',
  know: ['Kirchhoff\'s laws', 'Complex numbers', 'First- and second-order ODEs'],
  units: [
    ['Circuit fundamentals', 'nodal and mesh analysis; Thevenin and Norton equivalents; superposition', 'Pick one method (nodal is usually easiest) and get fast with it.', 'Find the Thevenin equivalent of a circuit. | When does mesh beat nodal?'],
    ['Op-amps', 'ideal op-amp rules; inverting and non-inverting amplifiers; integrators', 'Two rules solve every ideal op-amp problem: no input current, equal input voltages (with feedback).', 'Gain of a non-inverting amplifier? | What does an integrator do to a square wave?'],
    ['Transients', 'RC, RL and RLC circuits; step response; time constants', 'Notice that the RLC equation has the same form as a spring-mass-damper.', 'Time constant of an RL circuit? | What does underdamped look like?'],
    ['AC analysis and power', 'phasors; impedance; frequency response; real, reactive and apparent power; power factor', 'Practice phasor arithmetic until it is routine.', 'Impedance of a capacitor? | Why does power factor matter for plants?'],
    ['Machines and digital', 'DC motors; three-phase basics; logic gates', 'Connect motor torque-speed curves to mechanical loads.', 'How does a DC motor\'s speed depend on voltage? | What is three-phase power used for?']
  ],
  top: ['Nodal analysis', 'Op-amps', 'Transient response', 'Phasors'],
  take: ['Electrical and mechanical systems use the same math. An RLC circuit behaves like a mass-spring-damper.'],
  real: ['Sensor conditioning circuits', 'Motor selection', 'Plant electrical power and power factor'],
  pit: ['Sign conventions', 'Mixing peak and RMS values'],
  res: [['video', 'ALL ABOUT ELECTRONICS', 'ALL ABOUT ELECTRONICS circuit analysis'], ['video', 'Michel van Biezen – Electrical Engineering', 'Michel van Biezen electrical engineering circuits'], ['book', 'Hambley – Electrical Engineering: Principles and Applications', 'Hambley Electrical Engineering Principles and Applications']],
  fe: ['Electricity and Magnetism', 'Measurements, Instrumentation, and Controls'], sw: ['LTspice', 'Multisim']
},
{
  id: 'PHYS 206', title: 'Newtonian Mechanics for Engineering and Science', cr: 3, y: 1, s: 'Spring', kind: 'support', d: 3, h: 7,
  pre: ['MATH 151'],
  sum: 'Calculus-based mechanics lecture: kinematics, Newton\'s laws, work and energy, momentum, rotation, gravitation and oscillations. Taken with the ENGR/PHYS 216 lab.',
  why: 'The physics behind MEEN 225. Students who leave PHYS 206 with fast, reliable free-body diagrams have a much easier sophomore year.',
  know: ['Derivatives (MATH 151)', 'Vectors', 'Trigonometry'],
  units: [
    ['Kinematics', '1D and 2D motion; projectile motion; relative motion', 'Draw position, velocity and acceleration graphs for every problem.', 'Acceleration at the top of a projectile path? | Relate the slope of v(t) to a(t).'],
    ['Newton\'s laws', 'free-body diagrams; friction; circular motion; pulleys', 'Free-body diagrams are the most important skill for the next two years. Draw one every time.', 'Forces on a block on an incline with friction? | What provides centripetal force for a car on a curve?'],
    ['Work and energy', 'work-energy theorem; potential energy; conservation of energy; power', 'Use energy when the question links speed and position.', 'When is mechanical energy not conserved? | Spring potential energy?'],
    ['Momentum', 'impulse; conservation of momentum; elastic and inelastic collisions; center of mass', 'Use momentum for collisions and explosions.', 'Elastic vs inelastic collision? | Where is the center of mass of two particles?'],
    ['Rotation', 'torque; moment of inertia; angular momentum; rolling; static equilibrium', 'Map each linear quantity to its rotational version.', 'Why does a hollow cylinder roll slower than a solid one? | Conditions for static equilibrium?'],
    ['Oscillations and gravitation', 'simple harmonic motion; pendulums; universal gravitation; orbits', 'SHM is your first look at vibrations (MEEN 363).', 'Period of a mass on a spring? | Why is pendulum period independent of mass?']
  ],
  top: ['Free-body diagrams', 'Energy methods', 'Momentum', 'Rotational dynamics'],
  take: ['Free-body diagrams are the start of every mechanics problem.', 'Choose force, energy or momentum methods based on what the question asks.'],
  real: ['Load analysis of structures and machines', 'Crash and impact analysis', 'Orbital mechanics basics'],
  pit: ['Skipping free-body diagrams', 'Memorizing formulas without knowing when they apply'],
  res: [['video', 'Michel van Biezen – Physics', 'Michel van Biezen physics mechanics'], ['book', 'OpenStax University Physics Vol. 1', 'OpenStax University Physics volume 1'], ['video', 'Flipping Physics', 'Flipping Physics']],
  fe: ['Statics', 'Dynamics, Kinematics, and Vibrations'], sw: []
},
{
  id: 'PHYS 207', title: 'Electricity and Magnetism for Engineering and Science', cr: 3, y: 2, s: 'Fall', kind: 'support', d: 4, h: 7,
  pre: ['PHYS 206', 'MATH 152'],
  sum: 'Calculus-based electricity and magnetism lecture: electric fields, Gauss\'s law, potential, capacitance, circuits, magnetic fields, induction and an intro to electromagnetic waves. Taken with the ENGR/PHYS 217 lab.',
  why: 'Leads into ECEN 215 and the sensors in MEEN 260. Motors, sensors and actuators all rely on it.',
  know: ['Integration (MATH 152)', 'Vectors', 'PHYS 206 mechanics'],
  units: [
    ['Electric fields', 'Coulomb\'s law; field lines; continuous charge distributions; Gauss\'s law', 'Use symmetry first; Gauss\'s law only helps when symmetry is high.', 'Field of an infinite line charge? | Field inside a conductor?'],
    ['Potential and capacitance', 'electric potential; equipotentials; capacitors; dielectrics; stored energy', 'Connect field (force per charge) and potential (energy per charge).', 'How does a capacitor store energy? | Effect of a dielectric?'],
    ['Circuits', 'current; resistance; Ohm\'s law; Kirchhoff\'s laws; RC circuits', 'Build circuits on a breadboard if you can.', 'Two resistors in parallel? | RC time constant meaning?'],
    ['Magnetism', 'magnetic force; Biot-Savart; Ampère\'s law; solenoids', 'Use the right-hand rule physically on every problem.', 'Force on a current-carrying wire? | Field inside a solenoid?'],
    ['Induction', 'Faraday\'s law; Lenz\'s law; inductors; RL circuits; generators and transformers', 'Tie each law to a device: generator, transformer, eddy-current brake.', 'Why does a moving magnet induce current? | What does Lenz\'s law say?']
  ],
  top: ['Gauss\'s law', 'Circuit analysis', 'Induction and motors'],
  take: ['Electromechanical devices convert between electrical and mechanical energy.'],
  real: ['Motors and generators', 'Sensors (strain gauges, LVDTs, Hall sensors)', 'EV powertrains'],
  pit: ['Sign errors in Kirchhoff loops', 'Weak integration setup for charge distributions'],
  res: [['video', 'Michel van Biezen – Electricity & Magnetism', 'Michel van Biezen electricity magnetism'], ['book', 'OpenStax University Physics Vol. 2', 'OpenStax University Physics volume 2'], ['course', 'MIT OCW 8.02 Electricity and Magnetism', 'MIT OCW 8.02']],
  fe: ['Electricity and Magnetism'], sw: []
},
{
  id: 'STAT 211', title: 'Principles of Statistics I', cr: 3, y: 2, s: 'Fall', kind: 'support', d: 2, h: 5,
  pre: ['MATH 152'],
  sum: 'Probability and statistics for engineers: descriptive statistics, probability, random variables and distributions, sampling, confidence intervals, hypothesis tests and regression.',
  why: 'MEEN 260 uncertainty analysis and every lab course use it. It is also the base for machine learning, quality engineering and design of experiments.',
  know: ['Integration', 'Basic Python or Excel'],
  units: [
    ['Describing data', 'mean, median, variance, standard deviation; histograms; box plots', 'Compute statistics on a real data set (sports, weather) in Python.', 'When is the median better than the mean? | What does a box plot show?'],
    ['Probability', 'rules of probability; conditional probability; Bayes\' theorem; independence', 'Draw tree diagrams for conditional probability problems.', 'What does Bayes\' theorem compute? | Independent vs mutually exclusive?'],
    ['Distributions', 'binomial; Poisson; normal; exponential; Weibull basics', 'Know which real process each distribution models.', 'Which distribution models time between failures? | P(Z < 1.96)?'],
    ['Inference', 'sampling distributions; central limit theorem; confidence intervals; hypothesis tests; p-values', 'Write out what the p-value means in words for every problem.', 'What does a 95% confidence interval mean? | Type I vs Type II error?'],
    ['Regression', 'linear regression; correlation; residuals; R²', 'Always plot residuals before trusting a fit.', 'What does R² measure? | What do patterned residuals tell you?']
  ],
  top: ['Normal distribution', 'Confidence intervals', 'Hypothesis testing', 'Regression'],
  take: ['Data always has variation, and statistics tells you how much to trust a result.'],
  real: ['Quality and Six Sigma', 'Reliability engineering', 'Test data analysis', 'Machine learning'],
  pit: ['Misreading p-values', 'Using the normal distribution when the sample is small'],
  res: [['video', 'StatQuest with Josh Starmer', 'StatQuest statistics'], ['book', 'OpenStax Introductory Statistics', 'OpenStax Introductory Statistics'], ['book', 'Montgomery & Runger – Applied Statistics and Probability for Engineers', 'Montgomery Runger Applied Statistics and Probability for Engineers']],
  fe: ['Probability and Statistics'], sw: ['Python (pandas, SciPy)', 'Excel']
},
{
  id: 'ISEN 302', title: 'Economic Analysis of Engineering Projects', cr: 2, y: 4, s: 'Fall', kind: 'support', d: 2, h: 4,
  pre: [],
  sum: 'Engineering economics: time value of money, cash flows, present and annual worth, rate of return, depreciation, taxes, replacement analysis and project comparison.',
  why: 'Every design decision has a cost. Engineering economics is also some of the easiest points on the FE exam.',
  know: ['Algebra', 'Spreadsheet basics'],
  units: [
    ['Time value of money', 'interest; compounding; cash flow diagrams; interest factors (P/F, A/P, etc.)', 'Draw a cash flow diagram for every problem before using a formula.', 'Present worth of $1,000 in 5 years at 8%? | What is an annuity?'],
    ['Comparing alternatives', 'present worth; annual worth; future worth; rate of return; payback', 'Compare alternatives over the same study period.', 'When is annual worth easier than present worth? | What is IRR?'],
    ['Depreciation and taxes', 'straight-line; MACRS; after-tax cash flows', 'Set up a spreadsheet template for after-tax analysis.', 'Why does depreciation reduce taxes? | What is MACRS?'],
    ['Replacement and risk', 'replacement analysis; break-even; sensitivity analysis; inflation', 'Run a sensitivity analysis on your capstone budget.', 'When should equipment be replaced? | What is a break-even point?']
  ],
  top: ['Cash flow diagrams', 'Present and annual worth', 'Rate of return'],
  take: ['A dollar today is worth more than a dollar later; compare options on the same time basis.'],
  real: ['Capital project approvals', 'Equipment purchase decisions', 'Business cases for design changes'],
  pit: ['Mixing up interest factor notation', 'Ignoring study-period differences'],
  res: [['book', 'Newnan – Engineering Economic Analysis', 'Newnan Engineering Economic Analysis'], ['tool', 'FE Reference Handbook (economics tables)', 'NCEES FE Reference Handbook']],
  fe: ['Engineering Economics'], sw: ['Excel']
}
);

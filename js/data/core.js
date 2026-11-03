/*
 * Required MEEN courses (see field key in support.js).
 * Course numbers and titles match the current catalog as best known; semester
 * placement and prerequisites follow the typical 4-year plan. Confirm both in
 * the Undergraduate Catalog and Howdy before you register.
 */
window.MEEN.courses.push(
{
  id: 'MEEN 210', title: 'Geometric Modeling for Mechanical Design', cr: 2, y: 2, s: 'Fall', kind: 'core', d: 2, h: 5,
  pre: ['ENGR 102'],
  sum: 'Engineering graphics and 3D CAD. Sketching, solid modeling in SolidWorks, assemblies, engineering drawings, dimensioning and tolerancing.',
  why: 'Every design course (MEEN 360, 401, 402) and most internships assume you can model a part and produce a correct drawing quickly.',
  know: ['Basic 3D spatial reasoning', 'Orthographic views (helpful, not required)'],
  units: [
    ['Sketching and visualization', 'orthographic projection; isometric sketches; section and auxiliary views', 'Hand-sketch parts from your desk in three views. Spatial reasoning improves quickly with practice.', 'Which views are standard in third-angle projection? | When do you use a section view?'],
    ['Part modeling', 'sketch relations; extrude, revolve, sweep, loft; design intent; feature tree', 'Build every model so it survives a dimension change. Design intent is what graders and employers look for.', 'Why fully define a sketch? | What makes a feature tree robust?'],
    ['Assemblies', 'mates; bottom-up vs top-down; interference checks; exploded views; BOM', 'Model a real product you own (stapler, bike part) as a complete assembly.', 'What is the difference between coincident and concentric mates? | Why run interference detection?'],
    ['Engineering drawings', 'drawing standards (ASME Y14.5); title blocks; dimension placement; notes', 'Use a checklist: every feature dimensioned once, no redundant dimensions, units and tolerances stated.', 'Why avoid dimensioning to hidden lines? | What goes in a title block?'],
    ['Tolerancing and GD&T', 'limits and fits; tolerance stack-ups; datums; feature control frames', 'Learn the 14 GD&T symbols and what each controls. This is a common interview topic.', 'What does a position tolerance control? | Clearance vs interference fit?']
  ],
  top: ['Design intent in sketches', 'Assemblies and mates', 'Drawing standards', 'Intro GD&T'],
  take: ['A CAD model communicates design intent, not just shape.', 'Drawings are legal documents for manufacturing, so they must be complete and unambiguous.'],
  real: ['Every product design role uses CAD daily', 'GD&T controls manufacturing cost and quality', 'Drawings go to machine shops and suppliers'],
  pit: ['Under-defined sketches that break on edits', 'Over-dimensioned drawings', 'Leaving CAD homework to the last night'],
  res: [['course', 'SolidWorks CSWA practice exams', 'CSWA practice exam SolidWorks'], ['video', 'TooTallToby – SolidWorks speed modeling', 'TooTallToby SolidWorks'], ['book', 'GD&T Basics (gdandtbasics.com)', 'GD&T Basics symbols']],
  fe: ['Mechanical Design and Analysis'], sw: ['SolidWorks', 'Fusion 360 (practice)']
},
{
  id: 'MEEN 225', title: 'Engineering Mechanics', cr: 3, y: 2, s: 'Fall', kind: 'core', d: 4, h: 10,
  pre: ['PHYS 206', 'MATH 152'],
  sum: 'Statics and dynamics in one fast-paced course: equilibrium of particles and rigid bodies, trusses, frames, friction, centroids and moments of inertia, then kinematics and kinetics of particles and rigid bodies.',
  why: 'The base of the mechanics sequence. MEEN 305, 363 and 368 all assume statics and dynamics are automatic. It covers a lot of material in one semester, so falling behind early is costly.',
  know: ['Vectors, dot and cross products', 'Trigonometry', 'Free-body diagrams from physics', 'Integration for centroids'],
  units: [
    ['Force systems', 'vectors in 2D and 3D; position vectors; moments (r × F); couples; equivalent force systems', 'Do 3D moment problems with the cross product until you trust it more than geometry tricks.', 'Moment of a force about an axis? | What makes two force systems equivalent?'],
    ['Equilibrium of rigid bodies', 'free-body diagrams; support reactions; 2D and 3D equilibrium; two- and three-force members', 'Draw the FBD before any math. Draw it again if you get stuck. Most errors start in the FBD.', 'How many reactions does a pin support have? | Why do two-force members carry axial load only?'],
    ['Structures', 'trusses (method of joints and sections); frames and machines', 'Use the method of sections when the problem asks for only a few members. It saves time on exams.', 'Identify zero-force members. | How do you separate a frame into components?'],
    ['Friction', 'dry friction; impending motion; wedges; belts', 'Decide first: is it slipping or tipping? Check both.', 'What is the belt friction equation? | When does a block tip before it slides?'],
    ['Centroids and moments of inertia', 'centroids by integration and composite parts; area moments of inertia; parallel axis theorem', 'Use a table for composite areas. This exact skill is used for beam bending in MEEN 225 and 368.', 'Parallel axis theorem? | Centroid of a T-section?'],
    ['Particle kinematics', 'rectilinear and curvilinear motion; normal-tangential and polar coordinates; relative motion', 'Choose the coordinate system that matches the path. Circular paths mean n-t or polar.', 'Normal acceleration on a curve? | Relative velocity of two cars?'],
    ['Particle kinetics', 'Newton\'s 2nd law; work-energy; impulse-momentum; impacts', 'For each problem, write which principle you chose and why before solving.', 'When is work-energy better than F = ma? | Coefficient of restitution meaning?'],
    ['Rigid-body kinematics', 'translation and rotation; relative velocity and acceleration; instantaneous center; rotating frames', 'Use the instantaneous center for velocities, then the relative-acceleration equation. MEEN 363 assumes this is solid.', 'Velocity of a point on a rolling wheel? | What is Coriolis acceleration?'],
    ['Rigid-body kinetics', 'mass moment of inertia; planar equations of motion; work-energy and impulse-momentum for rigid bodies', 'Draw the FBD and the kinetic diagram (ma and Iα) side by side.', 'Equations of motion for a swinging rod? | When is angular momentum conserved?']
  ],
  top: ['Free-body diagrams', 'Equilibrium equations', 'Trusses', 'Moments of inertia', 'Rigid-body kinematics', 'Work-energy and momentum'],
  take: ['Equilibrium (ΣF = 0, ΣM = 0) underlies all structural design.', 'A correct free-body diagram usually solves most of the problem.', 'Pick the dynamics principle (force, energy or momentum) that matches what the problem asks for.', 'Rigid-body dynamics adds rotation (Iα) to Newton\'s law.'],
  real: ['Load paths in buildings, bridges and machine frames', 'Fixture and lifting design', 'Mechanism and linkage design', 'Vehicle and robot dynamics'],
  pit: ['Missing forces on FBDs', 'Sign errors on moments', 'Mixing up mass and area moments of inertia', 'Not practicing enough problems; mechanics is learned by repetition'],
  res: [['book', 'Hibbeler – Engineering Mechanics: Statics & Dynamics', 'Hibbeler Engineering Mechanics Statics'], ['video', 'Jeff Hanson – Statics and Dynamics', 'Jeff Hanson statics'], ['video', 'Question Solutions (Hibbeler worked problems)', 'Question Solutions statics'], ['course', 'MIT OCW 2.001 Mechanics & Materials', 'MIT OCW 2.001']],
  fe: ['Statics', 'Dynamics, Kinematics, and Vibrations'], sw: []
},
{
  id: 'MEEN 223', title: 'Principles of Materials and Manufacturing', cr: 2, y: 2, s: 'Spring', kind: 'core', d: 3, h: 6,
  pre: ['CHEM 107', 'PHYS 206'],
  sum: 'Materials science for mechanical engineers with an introduction to manufacturing: how atomic structure and microstructure set the properties of metals, ceramics, polymers and composites, and how processing changes them.',
  why: 'Material selection in MEEN 360, failure analysis in MEEN 368, and manufacturing decisions all depend on understanding why materials behave as they do. It is only 2 credits, so it moves quickly.',
  know: ['Chemical bonding', 'Stress and strain basics', 'Logarithms and exponentials'],
  units: [
    ['Structure of materials', 'bonding; crystal structures (FCC, BCC, HCP); Miller indices; density; X-ray diffraction', 'Build FCC and BCC with physical models or 3D viewers; atomic packing then makes sense.', 'Which structure is more ductile, FCC or BCC, and why? | Compute the APF of FCC.'],
    ['Defects and diffusion', 'point, line and planar defects; dislocations; Fick\'s laws; diffusion in heat treatment', 'Link dislocations to plastic deformation. That connection explains most of the course.', 'Why do dislocations make metals ductile? | What controls diffusion rate?'],
    ['Mechanical properties', 'stress-strain curves; elastic modulus; yield; ultimate strength; ductility; hardness; strengthening mechanisms', 'Sketch stress-strain curves for steel, aluminum, rubber and glass from memory.', 'What is the 0.2% offset method? | Name four strengthening mechanisms.'],
    ['Failure', 'fracture; ductile-to-brittle transition; fatigue (S-N curves); creep', 'Study real failures (Liberty ships, Comet airliner). The case studies make the theory memorable.', 'Why did Liberty ships crack in cold water? | What is an endurance limit?'],
    ['Phase diagrams and heat treatment', 'binary phase diagrams; lever rule; Fe-Fe3C diagram; TTT curves; martensite; tempering', 'Be able to draw the Fe-C diagram and do lever-rule problems quickly. Exams test it heavily.', 'Use the lever rule at a eutectoid. | Why is quenched steel brittle?'],
    ['Other material classes', 'ceramics; polymers (thermoplastic vs thermoset, glass transition); composites; corrosion', 'Make a comparison table of material families with typical properties.', 'What happens at Tg? | Why are composites anisotropic?'],
    ['Intro to manufacturing', 'casting; forming; machining; joining; polymer processing; how processing changes microstructure', 'For each process, note which properties it changes and why. MEEN 360 builds on this.', 'Why is a forged part stronger than a cast one? | How does cold work change strength?']
  ],
  top: ['Stress-strain behavior', 'Dislocations and strengthening', 'Fe-C phase diagram', 'Fatigue and fracture'],
  take: ['Material properties come from structure at the atomic and micro scale.', 'Heat treatment lets you trade strength against toughness.', 'Most mechanical failures are fatigue failures.'],
  real: ['Material selection for parts', 'Heat treatment specs on drawings', 'Root-cause failure analysis', 'Choosing a manufacturing process'],
  pit: ['Memorizing without understanding mechanisms', 'Weak phase-diagram skills'],
  res: [['book', 'Callister – Materials Science and Engineering: An Introduction', 'Callister Materials Science and Engineering'], ['video', 'Taylor Sparks – Materials Science lectures', 'Taylor Sparks materials science'], ['course', 'MIT OCW 3.091 Introduction to Solid-State Chemistry', 'MIT OCW 3.091']],
  fe: ['Material Properties and Processing'], sw: []
},
{
  id: 'MEEN 305', title: 'Solid Mechanics', cr: 3, y: 3, s: 'Fall', kind: 'core', d: 4, h: 9,
  pre: ['MEEN 225', 'MATH 251'],
  sum: 'Mechanics of deformable bodies: stress and strain, axial loading, torsion, bending, beam deflection, and statically indeterminate problems.',
  why: 'Sits between MEEN 225 and MEEN 368. Sizing any shaft, beam or bracket uses these formulas, and MEEN 368 assumes you can apply them quickly.',
  know: ['Equilibrium and FBDs', 'Centroids and area moments of inertia', 'Integration', 'Unit conversions'],
  units: [
    ['Stress and strain', 'internal forces; normal and shear stress; strain; Hooke\'s law; Poisson\'s ratio; factor of safety', 'Always cut the member and draw an FBD of the cut to find internal forces.', 'Average shear stress in a bolt in double shear? | What does Poisson\'s ratio describe?'],
    ['Axial loading', 'deformation of axial members; statically indeterminate members; thermal stress; stress concentrations', 'Indeterminate problems need equilibrium plus compatibility. Write both explicitly.', 'Deformation of a stepped bar? | Thermal stress in a constrained rod?'],
    ['Torsion', 'shear stress and angle of twist in circular shafts; power transmission; indeterminate shafts; thin-walled tubes', 'Memorize τ = Tc/J and φ = TL/(GJ), and know where each term comes from.', 'Angle of twist formula? | Power, torque and speed relationship?'],
    ['Bending', 'shear and moment diagrams; flexure formula; composite beams; transverse shear stress', 'Draw V and M diagrams with the area method until it is fast. It appears in almost every later course.', 'Max bending stress in a simply supported beam? | Relationship between load, shear and moment?'],
    ['Beam deflection', 'elastic curve; integration method; superposition; indeterminate beams', 'Use deflection tables plus superposition for speed on exams and the FE.', 'Max deflection of a cantilever with an end load? | When is superposition valid?'],
    ['Stress transformation (intro)', 'plane stress; principal stresses; Mohr\'s circle', 'Start Mohr\'s circle practice now. MEEN 368 uses it constantly.', 'Max shear stress from Mohr\'s circle? | What is a principal plane?']
  ],
  top: ['Shear and moment diagrams', 'Flexure formula', 'Torsion formulas', 'Beam deflection', 'Indeterminate problems'],
  take: ['Internal forces come from cutting the body and applying equilibrium.', 'Stress depends on load and geometry; deflection also depends on material stiffness.', 'Indeterminate problems need compatibility as well as equilibrium.'],
  real: ['Sizing shafts, beams and brackets', 'Structural checks on frames and fixtures', 'Every FEA result is checked against these hand calculations'],
  pit: ['Wrong signs in V/M diagrams', 'Using the wrong moment of inertia (I vs J)', 'Forgetting units (MPa vs psi)'],
  res: [['book', 'Hibbeler – Mechanics of Materials', 'Hibbeler Mechanics of Materials'], ['book', 'Gere & Goodno – Mechanics of Materials', 'Gere Goodno Mechanics of Materials'], ['video', 'Jeff Hanson – Mechanics of Materials', 'Jeff Hanson mechanics of materials'], ['video', 'The Efficient Engineer', 'The Efficient Engineer']],
  fe: ['Mechanics of Materials'], sw: []
},
{
  id: 'MEEN 260', title: 'Mechanical Measurements', cr: 3, y: 2, s: 'Spring', kind: 'core', d: 3, h: 8,
  pre: ['PHYS 207', 'STAT 211', 'ENGR 102'],
  sum: 'Measurement systems, sensors, signal conditioning, data acquisition, statistics and uncertainty analysis, with hands-on labs. Usually involves Arduino or DAQ hardware and Python/LabVIEW.',
  why: 'Every lab course and every test-engineering job relies on it. It is also the start of the Data Science & Experimentation thread in the degree.',
  know: ['Basic circuits', 'Python plotting', 'Statistics basics (mean, standard deviation)'],
  units: [
    ['Measurement systems', 'static and dynamic characteristics; calibration; accuracy vs precision; resolution', 'Learn the vocabulary exactly. Exams test precise definitions.', 'Accuracy vs precision? | What is hysteresis?'],
    ['Statistics', 'distributions; normal distribution; confidence intervals; t-distribution; regression; outlier rejection', 'Compute everything by hand once, then with Python. Know what each number means.', 'What does a 95% confidence interval mean? | When do you use the t-distribution?'],
    ['Uncertainty analysis', 'bias and precision error; propagation of uncertainty (RSS); design-stage uncertainty', 'Propagation of uncertainty appears in every later lab report. Make a template.', 'Propagate uncertainty for P = V²/R. | What is the RSS method?'],
    ['Sensors', 'strain gauges and Wheatstone bridges; thermocouples; RTDs; pressure transducers; accelerometers; encoders', 'For each sensor know the physical principle, output signal, range and typical error.', 'Why use a quarter vs full bridge? | How does a thermocouple work?'],
    ['Signals and DAQ', 'sampling; Nyquist and aliasing; ADC resolution; filtering; Fourier analysis', 'Demonstrate aliasing in code by sampling a sine wave too slowly.', 'Minimum sampling rate for a 1 kHz signal? | Resolution of a 12-bit ADC over 0-5 V?'],
    ['Dynamic response', 'first- and second-order instrument response; time constant; frequency response', 'Link to MATH 308: a thermocouple is a first-order ODE.', 'What is a sensor time constant? | Why does an accelerometer have a natural frequency limit?']
  ],
  top: ['Uncertainty propagation', 'Statistics and regression', 'Strain gauges and bridges', 'Sampling and aliasing'],
  take: ['A measurement without uncertainty is incomplete.', 'Pick sample rates and sensors deliberately to avoid aliasing and loading the system.'],
  real: ['Test and validation engineering', 'Quality and process control', 'Instrumenting prototypes', 'Data science on sensor data'],
  pit: ['Weak lab reports', 'Treating statistics as an afterthought', 'Wiring errors that cost hours in lab'],
  res: [['book', 'Figliola & Beasley – Theory and Design for Mechanical Measurements', 'Figliola Beasley Theory and Design for Mechanical Measurements'], ['video', 'StatQuest with Josh Starmer', 'StatQuest statistics'], ['tool', 'Arduino tutorials', 'Arduino sensor tutorial']],
  fe: ['Measurements, Instrumentation, and Controls', 'Probability and Statistics'], sw: ['Python', 'LabVIEW', 'Arduino']
},
{
  id: 'MEEN 315', title: 'Principles of Thermodynamics', cr: 3, y: 2, s: 'Spring', kind: 'core', d: 4, h: 9,
  pre: ['MATH 251', 'CHEM 107', 'PHYS 206'],
  sum: 'Energy, properties of pure substances, the first and second laws, entropy, and power and refrigeration cycles.',
  why: 'One of the most important MEEN courses. It is the gateway to fluids (344), heat transfer (461), and the whole energy industry. It is also a large part of the FE exam.',
  know: ['Integration', 'Unit conversions (SI and English)', 'Ideal gas law'],
  units: [
    ['Concepts and properties', 'systems and control volumes; state; properties; pure substances; phase diagrams; property tables; quality', 'Learn to read steam tables quickly and to tell which region (compressed, mixture, superheated) you are in.', 'Find the state of water at 200 °C, 1 MPa. | What is quality?'],
    ['Energy and the first law (closed systems)', 'work (boundary, shaft); heat; internal energy; enthalpy; specific heats; ideal gas processes', 'Write the full energy balance every time, then cancel terms with reasons.', 'Boundary work for an isothermal ideal-gas process? | Why is cp > cv?'],
    ['First law for control volumes', 'mass and energy balance; nozzles, diffusers, turbines, compressors, valves, heat exchangers; transient filling', 'Make a one-page table of device assumptions (e.g., valve: h1 = h2).', 'What is constant across a throttling valve? | Energy balance for a turbine?'],
    ['Second law', 'Kelvin-Planck and Clausius statements; reversibility; Carnot cycle; thermal efficiency and COP', 'Use the Carnot limit to sanity-check every cycle result you calculate.', 'Max efficiency between 800 K and 300 K? | Why can\'t COP be infinite?'],
    ['Entropy', 'entropy change; isentropic processes; isentropic efficiency; entropy generation', 'T-s diagrams make cycles intuitive. Sketch one for every cycle problem.', 'Isentropic efficiency of a turbine? | Can entropy decrease for a system?'],
    ['Cycles', 'Rankine; Brayton; Otto and Diesel; vapor-compression refrigeration', 'Solve each cycle start to finish in a single organized state table.', 'How does reheat improve a Rankine cycle? | What limits Brayton efficiency?']
  ],
  top: ['Property tables', 'Control-volume energy balance', 'Entropy and isentropic efficiency', 'Rankine and refrigeration cycles'],
  take: ['Energy is conserved; quality of energy (entropy) is not.', 'Every device can be analyzed with mass, energy and entropy balances.', 'Real efficiency is always below Carnot.'],
  real: ['Power plants (gas turbines, steam cycles)', 'HVAC and refrigeration', 'Engines and turbomachinery', 'Process plants and LNG'],
  pit: ['Table interpolation errors', 'Wrong sign convention for work and heat', 'Unit mistakes (kJ vs kW, kPa vs MPa)'],
  res: [['book', 'Çengel & Boles – Thermodynamics: An Engineering Approach', 'Cengel Boles Thermodynamics An Engineering Approach'], ['video', 'LearnChemE – Thermodynamics', 'LearnChemE thermodynamics'], ['video', 'Michel van Biezen – Thermodynamics', 'Michel van Biezen thermodynamics'], ['tool', 'CoolProp / NIST WebBook for properties', 'NIST Chemistry WebBook fluid properties']],
  fe: ['Thermodynamics'], sw: ['EES', 'CoolProp (Python)']
},
{
  id: 'MEEN 344', title: 'Fluid Mechanics', cr: 3, y: 3, s: 'Fall', kind: 'core', d: 4, h: 10,
  pre: ['MEEN 315', 'MATH 308', 'MEEN 225'],
  sum: 'Fluid statics, conservation laws in integral and differential form, Bernoulli, dimensional analysis, internal (pipe) flow and external flow (boundary layers, drag and lift).',
  why: 'Feeds heat transfer (461), turbomachinery, aerodynamics and HVAC. Pipe flow and pump selection are some of the most common real-world ME tasks.',
  know: ['Control-volume analysis (from 315)', 'Vector calculus and divergence theorem', 'ODEs', 'Integration'],
  units: [
    ['Fluid properties and statics', 'viscosity; pressure; manometers; hydrostatic forces on surfaces; buoyancy', 'Hydrostatic force problems follow one pattern: find the pressure distribution, integrate, find the center of pressure.', 'Force on a submerged gate? | Why does a ship float?'],
    ['Integral conservation laws', 'Reynolds transport theorem; mass, linear momentum, and energy for control volumes', 'Draw the control volume and label every flux crossing it. Momentum problems depend on getting directions right.', 'Force on a pipe bend? | What is the Reynolds transport theorem?'],
    ['Bernoulli and kinematics', 'Bernoulli equation and its limits; streamlines; Pitot tubes; flow visualization', 'Always list Bernoulli\'s assumptions and check them before using it.', 'When can you not use Bernoulli? | How does a Pitot tube measure velocity?'],
    ['Differential analysis', 'continuity; Navier-Stokes; exact solutions (Couette, Poiseuille)', 'Derive Poiseuille flow yourself once from Navier-Stokes.', 'Velocity profile in laminar pipe flow? | What does each Navier-Stokes term mean?'],
    ['Dimensional analysis', 'Buckingham Pi; Reynolds, Froude, Mach numbers; similitude and model testing', 'Know the physical meaning of each dimensionless number.', 'What does Reynolds number compare? | How do you scale a wind tunnel test?'],
    ['Internal flow', 'laminar vs turbulent; friction factor; Moody chart; major and minor losses; pipe networks; pump curves', 'Do many Moody-chart problems, including iterative ones (find flow rate).', 'Head loss in a turbulent pipe? | How do you pick a pump operating point?'],
    ['External flow', 'boundary layers; drag and lift; flow separation', 'Connect drag coefficient charts to real objects (cars, cyclists, golf balls).', 'Why do golf balls have dimples? | Skin friction vs pressure drag?']
  ],
  top: ['Control-volume momentum', 'Bernoulli (and its limits)', 'Pipe flow and Moody chart', 'Dimensional analysis'],
  take: ['Mass, momentum and energy conservation describe all fluid systems.', 'Reynolds number decides laminar vs turbulent behavior.', 'Most practical fluid design is pipe systems and pumps.'],
  real: ['Pipelines and pumping (oil & gas, water)', 'HVAC ducting', 'Aerodynamics', 'Cooling systems'],
  pit: ['Applying Bernoulli across pumps or with losses', 'Sign errors in momentum fluxes', 'Not iterating friction factor'],
  res: [['book', 'Munson – Fundamentals of Fluid Mechanics', 'Munson Fundamentals of Fluid Mechanics'], ['book', 'White – Fluid Mechanics', 'Frank White Fluid Mechanics'], ['video', 'NCFMF Fluid Mechanics films (MIT)', 'National Committee for Fluid Mechanics Films'], ['video', 'The Efficient Engineer – Fluids', 'The Efficient Engineer fluid mechanics']],
  fe: ['Fluid Mechanics'], sw: ['EES', 'Python']
},
{
  id: 'MEEN 345', title: 'Fluid Mechanics Laboratory', cr: 1, y: 3, s: 'Fall', kind: 'core', d: 2, h: 4,
  pre: ['MEEN 260', 'MEEN 344'],
  sum: 'Experiments that go with MEEN 344: pressure and flow measurement, pipe losses, pump performance, drag, and flow visualization, with formal lab reports.',
  why: 'Builds experimental and technical-writing skills and makes fluid theory concrete.',
  know: ['MEEN 344 concepts (taken concurrently)', 'Uncertainty analysis from MEEN 260'],
  units: [
    ['Flow measurement', 'venturi, orifice and rotameter; Pitot-static tubes; calibration', 'Compare measured values against Bernoulli predictions and explain the difference.', 'Why does an orifice need a discharge coefficient? | Calibration curve meaning?'],
    ['Pipe losses and pumps', 'friction factor experiments; minor losses; pump curves; system curves', 'Plot your data on top of the Moody chart.', 'Why do measured losses differ from the chart? | What is BEP for a pump?'],
    ['External flow and drag', 'drag on bodies; wind-tunnel testing; pressure distributions', 'Relate pressure distribution to separation.', 'Where does separation occur on a cylinder? | How is drag measured?'],
    ['Technical writing', 'lab report structure; figures; uncertainty; discussion of error', 'Write the discussion as "observed, expected, why they differ".', 'What goes in an abstract? | How do you report uncertainty in a figure?']
  ],
  top: ['Uncertainty in fluid measurements', 'Pump and system curves', 'Lab reports'],
  take: ['Experiments rarely match theory exactly; explaining why is the engineering skill.'],
  real: ['Flow testing and validation', 'Pump test stands', 'Wind-tunnel work'],
  pit: ['Weak discussion sections', 'Missing uncertainty bars'],
  res: [['book', 'Figliola & Beasley (measurement reference)', 'Figliola Beasley mechanical measurements'], ['tool', 'Purdue OWL – Lab report writing', 'Purdue OWL lab report']],
  fe: ['Fluid Mechanics', 'Measurements, Instrumentation, and Controls'], sw: ['Python', 'Excel', 'LabVIEW']
},
{
  id: 'MEEN 357', title: 'Engineering Analysis for Mechanical Engineers', cr: 3, y: 3, s: 'Fall', kind: 'core', d: 4, h: 11,
  pre: ['ENGR 102', 'MATH 308'],
  sum: 'Numerical methods for engineers in Python: root finding, linear systems, curve fitting, numerical differentiation and integration, and ODE solvers, applied through programming projects.',
  why: 'Teaches how simulation software works. Students often rate it among the most time-consuming MEEN courses because of the long programming projects.',
  know: ['Python programming (functions, loops, NumPy)', 'Linear algebra basics (matrices)', 'ODEs', 'Taylor series'],
  units: [
    ['Errors and Taylor series', 'round-off and truncation error; floating point; Taylor expansions; convergence', 'Understand error orders (O(h), O(h²)); they explain why methods are chosen.', 'Why is 0.1 + 0.2 ≠ 0.3 in floating point? | Truncation error of forward difference?'],
    ['Root finding', 'bisection; false position; Newton-Raphson; secant; convergence rates', 'Write each method from scratch once, then use SciPy.', 'When can Newton\'s method fail? | Convergence rate of bisection?'],
    ['Linear systems', 'Gaussian elimination; LU decomposition; pivoting; iterative methods; condition number', 'Relate linear systems to FEA. Every structural simulation solves Ax = b.', 'Why pivot? | What does a large condition number mean?'],
    ['Curve fitting and interpolation', 'least squares regression; polynomial fits; splines; overfitting', 'Always plot residuals, not just the fit.', 'Why might a high-order polynomial fit be bad? | What do splines solve?'],
    ['Numerical differentiation and integration', 'finite differences; trapezoid and Simpson\'s rules; Gaussian quadrature', 'Test methods on functions with known answers to see how error behaves.', 'Error order of Simpson\'s 1/3 rule? | Central vs forward difference accuracy?'],
    ['ODE solvers', 'Euler; Runge-Kutta (RK4); adaptive step size; systems of ODEs; stiffness; boundary value problems', 'Simulate a real system (projectile with drag, pendulum) and compare methods.', 'Why is RK4 popular? | What makes an ODE stiff?'],
    ['Projects', 'large multi-part programming projects modeling a mechanical system', 'Start the day it is released. Write and test one function at a time; use Git.', 'How do you validate a simulation? | How do you debug numerical code?']
  ],
  top: ['Newton-Raphson', 'Linear systems', 'Least squares', 'Runge-Kutta ODE solvers'],
  take: ['Every simulation tool runs these algorithms underneath.', 'Always verify numerical results against a known solution.', 'Step size trades accuracy against speed.'],
  real: ['FEA and CFD solvers', 'Writing analysis and test-data tools', 'Control and robotics simulation', 'Data and ML roles'],
  pit: ['Starting projects late', 'Not testing functions in isolation', 'Weak Python skills from ENGR 102'],
  res: [['book', 'Chapra & Canale – Numerical Methods for Engineers', 'Chapra Canale Numerical Methods for Engineers'], ['book', 'Kiusalaas – Numerical Methods in Engineering with Python', 'Kiusalaas Numerical Methods in Engineering with Python'], ['video', 'Steve Brunton – Engineering math', 'Steve Brunton numerical methods'], ['course', 'MIT OCW 2.086 Numerical Computation for ME', 'MIT OCW 2.086']],
  fe: ['Mathematics'], sw: ['Python (NumPy, SciPy, matplotlib)', 'Git']
},
{
  id: 'MEEN 360', title: 'Materials and Manufacturing Selection in Design', cr: 3, y: 3, s: 'Spring', kind: 'core', d: 3, h: 7,
  pre: ['MEEN 223', 'MEEN 305'],
  sum: 'Choosing materials and manufacturing processes for a design: Ashby charts, performance indices, and processes like casting, forming, machining, joining, molding and additive manufacturing.',
  why: 'Turns materials science into design decisions. Manufacturing knowledge (design for manufacturability) is one of the most useful skills for an entry-level design engineer.',
  know: ['Material properties from MEEN 223', 'Stress analysis from MEEN 305', 'CAD from MEEN 210'],
  units: [
    ['Material selection', 'Ashby charts; material indices (e.g., E^(1/2)/ρ); constraints and objectives; screening and ranking', 'Derive a material index yourself for a light, stiff beam. It shows where Ashby charts come from.', 'Index for a light, stiff tie rod? | How do you read an Ashby chart?'],
    ['Casting and molding', 'sand casting; investment casting; die casting; injection molding; design rules (draft, wall thickness)', 'Watch real factory videos for each process; it helps you remember the design rules.', 'Why do molded parts need draft? | When is die casting cost-effective?'],
    ['Forming', 'rolling; forging; extrusion; sheet metal; springback', 'Relate each process to grain flow and strength.', 'Why are forged parts strong? | What is springback?'],
    ['Machining', 'turning; milling; drilling; cutting forces; tool wear; tolerances and surface finish; CNC', 'Visit or join a machine shop (student orgs often have access).', 'What sets achievable tolerance? | Taylor tool-life equation?'],
    ['Joining and additive', 'welding; brazing; fasteners; adhesives; 3D printing processes (FDM, SLA, SLS, metal powder bed)', 'Compare joining methods by strength, cost and reversibility in a table.', 'Heat-affected zone? | When is AM the right choice?'],
    ['Cost and DFM/DFA', 'process cost models; design for manufacture and assembly; sustainability', 'Redesign a part to cut its cost and explain each change.', 'How does volume change process choice? | One DFA rule?']
  ],
  top: ['Material indices and Ashby charts', 'Process selection by volume and geometry', 'DFM rules'],
  take: ['Material and process are chosen together; the cheapest process depends on production volume.', 'Designing for manufacturability is a large part of good design.'],
  real: ['Product design and cost reduction', 'Supplier and manufacturing engineering', 'Aerospace lightweighting'],
  pit: ['Treating it as memorization; focus on reasoning', 'Ignoring cost and volume'],
  res: [['book', 'Ashby – Materials Selection in Mechanical Design', 'Ashby Materials Selection in Mechanical Design'], ['book', 'Kalpakjian – Manufacturing Engineering and Technology', 'Kalpakjian Manufacturing Engineering and Technology'], ['video', 'How It\'s Made / factory process videos', 'injection molding process explained'], ['course', 'MIT OCW 2.008 Design and Manufacturing II', 'MIT OCW 2.008']],
  fe: ['Material Properties and Processing', 'Mechanical Design and Analysis'], sw: ['Ansys Granta EduPack']
},
{
  id: 'MEEN 361', title: 'Materials and Manufacturing in Design Laboratory', cr: 1, y: 3, s: 'Spring', kind: 'core', d: 2, h: 4,
  pre: ['MEEN 260', 'MEEN 360'],
  sum: 'Hands-on lab for MEEN 360: tensile and hardness testing, heat treatment, metallography and manufacturing process experiments.',
  why: 'Turns material properties into measurements you have made yourself, and builds lab-report skill.',
  know: ['Stress-strain behavior', 'Heat treatment basics', 'Uncertainty analysis'],
  units: [
    ['Mechanical testing', 'tensile tests; hardness (Rockwell, Brinell); impact (Charpy)', 'Predict the results before each test, then compare.', 'Why does Charpy energy drop at low temperature? | Relate hardness to tensile strength.'],
    ['Heat treatment and microstructure', 'quenching; tempering; annealing; metallography; grain size', 'Connect the microstructure images to the phase diagram.', 'What does martensite look like? | Why temper after quenching?'],
    ['Manufacturing experiments', 'machining; forming or casting experiments; measurement of parts', 'Measure tolerances on the parts you make.', 'Why do measured dimensions vary? | Surface finish meaning?']
  ],
  top: ['Tensile testing', 'Heat treatment effects', 'Lab reporting'],
  take: ['Processing history changes properties a lot.'],
  real: ['Materials testing labs', 'Quality engineering', 'Failure analysis'],
  pit: ['Weak reports', 'Not linking results to theory'],
  res: [['book', 'Callister (reference)', 'Callister materials science tensile test']],
  fe: ['Material Properties and Processing'], sw: ['Excel', 'Python']
},
{
  id: 'MEEN 363', title: 'Dynamics and Vibrations', cr: 3, y: 3, s: 'Fall', kind: 'core', d: 5, h: 11,
  pre: ['MEEN 225', 'MATH 308'],
  sum: 'Advanced dynamics and vibrations: deriving equations of motion for particles and rigid bodies (Newton and energy/Lagrange methods), then free and forced vibrations of single and multi-degree-of-freedom systems.',
  why: 'Often rated one of the hardest MEEN courses. It is required for controls (364), vehicle dynamics, rotordynamics and robotics, and TAMU has well-known turbomachinery and rotordynamics research.',
  know: ['Rigid-body kinematics from MEEN 225 (strong!)', 'Second-order ODEs', 'Eigenvalues', 'Numerical ODE solving'],
  units: [
    ['Kinematics review and 3D', 'relative motion in rotating frames; angular velocity of 3D bodies', 'Redo MEEN 225 rigid-body kinematics problems in the first week. Weak kinematics is the most common reason students struggle here.', 'Acceleration in a rotating frame? | Angular velocity of a spinning, precessing disk?'],
    ['Deriving equations of motion', 'Newton-Euler; energy methods; Lagrange\'s equations; generalized coordinates', 'Derive the same system both ways (Newton and Lagrange) and check that they match.', 'Lagrange equation for a pendulum on a cart? | What are generalized coordinates?'],
    ['Linearization', 'equilibrium points; small-angle approximations; stability', 'Always linearize around the equilibrium the question asks about.', 'Linearize an inverted pendulum. | When is an equilibrium unstable?'],
    ['Free vibration (1-DOF)', 'natural frequency; damping ratio; underdamped/critical/overdamped; logarithmic decrement', 'Memorize ωn = √(k/m) and ζ = c/(2√(km)), and know what they mean physically.', 'Find ζ from a decay curve. | Effect of doubling mass on ωn?'],
    ['Forced vibration', 'harmonic excitation; resonance; magnification factor; base excitation; rotating unbalance; transmissibility; vibration isolation', 'Sketch magnification and transmissibility plots from memory.', 'Why does isolation require ω/ωn > √2? | Response to rotating unbalance?'],
    ['Multi-DOF systems', 'mass and stiffness matrices; eigenvalue problems; mode shapes; modal analysis; vibration absorbers', 'Solve 2-DOF problems by hand and verify with NumPy eig.', 'What is a mode shape? | How does a tuned mass damper work?']
  ],
  top: ['Deriving EOMs', 'Natural frequency and damping', 'Forced response and resonance', 'Mode shapes'],
  take: ['Every vibrating system can be modeled as mass, stiffness and damping.', 'Avoid running near resonance, or add damping or isolation.', 'Lagrange\'s method is the systematic way to derive EOMs for complex systems.'],
  real: ['Rotating machinery and turbomachinery', 'Vehicle suspension and NVH', 'Structural vibrations and earthquakes', 'Robotics'],
  pit: ['Weak rigid-body kinematics from MEEN 225', 'Not practicing derivations', 'Falling behind; topics build quickly'],
  res: [['book', 'Rao – Mechanical Vibrations', 'Rao Mechanical Vibrations'], ['book', 'Inman – Engineering Vibration', 'Inman Engineering Vibration'], ['video', 'Steve Brunton – Dynamical systems', 'Steve Brunton dynamical systems'], ['course', 'MIT OCW 2.003 Dynamics and Control I', 'MIT OCW 2.003SC']],
  fe: ['Dynamics, Kinematics, and Vibrations'], sw: ['Python', 'MATLAB']
},
{
  id: 'MEEN 364', title: 'Dynamic Systems and Controls', cr: 3, y: 3, s: 'Spring', kind: 'core', d: 5, h: 10,
  pre: ['MEEN 363', 'ECEN 215', 'MEEN 260'],
  sum: 'Modeling mechanical, electrical, fluid and thermal systems; transfer functions; time and frequency response; feedback control design with root locus, Bode plots and PID; lab work with real hardware.',
  why: 'Required for robotics, mechatronics, automotive, aerospace GNC and automation careers. Students often rate it alongside 363 as one of the hardest MEEN courses.',
  know: ['Laplace transforms', 'Second-order system response', 'Circuits', 'Vibrations (EOMs)'],
  units: [
    ['System modeling', 'mechanical, electrical, electromechanical, fluid and thermal models; analogies; state-space', 'Practice converting physical systems to ODEs, then to transfer functions.', 'Transfer function of a DC motor? | Mechanical-electrical analogy?'],
    ['Transfer functions and block diagrams', 'poles and zeros; block diagram reduction; signal flow', 'Relate pole locations to time response on a sketch of the s-plane.', 'Effect of moving poles left? | Closed-loop TF of a feedback loop?'],
    ['Time response', 'first and second-order response; rise time; overshoot; settling time; steady-state error; system type', 'Memorize the second-order spec formulas (%OS, Ts, Tp).', 'Find ζ from 20% overshoot. | Steady-state error to a ramp?'],
    ['Stability and root locus', 'Routh-Hurwitz; root locus sketching rules; gain selection', 'Sketch root loci by hand, then check with Python control library.', 'Range of K for stability? | Where do root loci start and end?'],
    ['Frequency response', 'Bode plots; gain and phase margins; Nyquist basics', 'Sketch Bode asymptotes for common factors until it is quick.', 'What does phase margin tell you? | Bode slope of a pole?'],
    ['Controller design', 'P, PI, PD, PID; lead/lag compensators; tuning; implementation', 'Tune a PID in simulation and on hardware. Watch Brian Douglas\'s PID series.', 'What does integral action fix? | Why does derivative action add damping?']
  ],
  top: ['Transfer functions', 'Second-order specs', 'Root locus', 'Bode plots and margins', 'PID control'],
  take: ['Feedback improves performance and rejects disturbances, but can cause instability.', 'Pole locations determine behavior.', 'Most real controllers are PID.'],
  real: ['Robotics and automation', 'Automotive cruise and stability control', 'Aircraft flight control', 'Process control in plants'],
  pit: ['Weak Laplace skills', 'Treating root locus as memorization', 'Ignoring units in modeling'],
  res: [['book', 'Nise – Control Systems Engineering', 'Nise Control Systems Engineering'], ['book', 'Ogata – Modern Control Engineering', 'Ogata Modern Control Engineering'], ['video', 'Brian Douglas – Control Systems Lectures', 'Brian Douglas control systems'], ['video', 'MATLAB Tech Talks – Control', 'MATLAB Tech Talks PID'], ['tool', 'Python control library', 'python-control library']],
  fe: ['Measurements, Instrumentation, and Controls'], sw: ['MATLAB/Simulink', 'python-control', 'LabVIEW']
},
{
  id: 'MEEN 365', title: 'Dynamic Systems and Controls Lab', cr: 1, y: 3, s: 'Spring', kind: 'core', d: 2, h: 4,
  pre: ['MEEN 260', 'MEEN 364'],
  sum: 'Hands-on lab taken with MEEN 364: system identification, motor and position control, PID tuning on real hardware, and lab reports.',
  why: 'Shows how real systems differ from models (friction, saturation, noise, delay). This is what controls jobs deal with every day.',
  know: ['Transfer functions and second-order response (MEEN 364, concurrent)', 'Data acquisition from MEEN 260', 'Python or MATLAB'],
  units: [
    ['System identification', 'step tests; estimating time constant, gain, natural frequency and damping from data; model fitting', 'Fit your model in Python and overlay it on the measured response.', 'Find ζ and ωn from a measured step response. | Why does the model never match exactly?'],
    ['Feedback control on hardware', 'P, PI, PID control of motors or positioning stages; tuning; actuator saturation; noise', 'Change one gain at a time and record what changes.', 'What does actuator saturation do to overshoot? | Why filter derivative action?'],
    ['Frequency response testing', 'sine sweeps; measured Bode plots; comparison with the model', 'Plot the measured Bode data on top of the predicted curve.', 'How do you measure phase lag? | What causes high-frequency mismatch?'],
    ['Reporting', 'lab reports; comparing model and experiment; error sources', 'Explain differences in physical terms (friction, delay, sensor noise).', 'What is the main source of model error in your setup? | How would you improve the model?']
  ],
  top: ['System identification', 'PID tuning on real hardware', 'Model vs experiment'],
  take: ['Real systems have friction, delay, noise and saturation that simple models leave out.'],
  real: ['Controls and test engineering', 'Robotics and automation commissioning', 'Process control tuning'],
  pit: ['Changing several gains at once', 'Not saving raw data', 'Weak comparison to theory'],
  res: [['video', 'Brian Douglas – PID control', 'Brian Douglas PID control'], ['tool', 'python-control library', 'python-control library']],
  fe: ['Measurements, Instrumentation, and Controls'], sw: ['MATLAB/Simulink', 'LabVIEW', 'Python']
},
{
  id: 'MEEN 368', title: 'Solid Mechanics in Mechanical Design', cr: 3, y: 3, s: 'Spring', kind: 'core', d: 4, h: 10,
  pre: ['MEEN 305', 'MEEN 223'],
  sum: 'Stress analysis for design: combined loading, stress transformation and Mohr\'s circle, failure theories, fatigue, deflection and energy methods, buckling, and design of machine elements such as shafts, bolts, springs and bearings.',
  why: 'The core of mechanical design analysis. Capstone (401/402) relies on it heavily, and it is a common source of technical interview questions.',
  know: ['Shear and moment diagrams', 'Flexure and torsion formulas (MEEN 305)', 'Stress-strain', 'Fatigue basics from MEEN 223'],
  units: [
    ['Stress and strain transformation', '3D stress state; principal stresses; Mohr\'s circle; strain gauge rosettes', 'Draw Mohr\'s circle for every combined-stress problem, even when not required.', 'Max shear stress from Mohr\'s circle? | What is a principal plane?'],
    ['Combined loading', 'axial + bending + torsion; pressure vessels; stress concentrations', 'Find the critical point on the cross-section first, then combine stresses there.', 'Critical point on a shaft under bending and torsion? | Stress in a thin-walled pressure vessel?'],
    ['Static failure theories', 'Tresca; von Mises (distortion energy); Mohr-Coulomb for brittle materials; factor of safety', 'Know which theory to use for ductile vs brittle materials.', 'Von Mises stress formula? | Why is Tresca more conservative?'],
    ['Fatigue', 'S-N curves; endurance limit and Marin factors; mean stress (Goodman, Gerber); stress concentration in fatigue', 'Follow one fatigue procedure step-by-step and stick to it. Shigley\'s method is standard.', 'Modified Goodman criterion? | Why does surface finish reduce fatigue strength?'],
    ['Deflection and energy methods', 'superposition; Castigliano\'s theorem; statically indeterminate beams', 'Castigliano is powerful for odd geometries. Practice curved members.', 'Deflection with Castigliano? | When is superposition valid?'],
    ['Buckling', 'Euler buckling; end conditions; Johnson formula; slenderness ratio', 'Know when Euler applies (long columns) vs Johnson (intermediate).', 'Effective length for fixed-free? | Why does buckling depend on E, not strength?'],
    ['Machine elements', 'shafts; bolted joints and preload; springs; bearings; gears (intro)', 'Treat each element as an application of the failure theories.', 'Why preload a bolt? | How do you choose a bearing?']
  ],
  top: ['Mohr\'s circle', 'Von Mises', 'Fatigue (Goodman)', 'Buckling', 'Shaft design'],
  take: ['Design starts with finding the critical point and stress state.', 'Fatigue, not static overload, causes most mechanical failures.', 'Always state the factor of safety and the failure theory used.'],
  real: ['Designing brackets, shafts and fasteners', 'Pressure vessel and piping design (ASME codes)', 'Fatigue life analysis in aerospace and automotive', 'Interview questions'],
  pit: ['Picking the wrong critical point', 'Inconsistent fatigue procedures', 'Unit errors with ksi and MPa'],
  res: [['book', 'Shigley\'s Mechanical Engineering Design', 'Shigley Mechanical Engineering Design'], ['book', 'Hibbeler – Mechanics of Materials (review)', 'Hibbeler Mechanics of Materials'], ['video', 'The Efficient Engineer – Mohr\'s circle and fatigue', 'The Efficient Engineer Mohr\'s circle'], ['course', 'MIT OCW 2.002 Mechanics and Materials II', 'MIT OCW 2.002']],
  fe: ['Mechanics of Materials', 'Mechanical Design and Analysis'], sw: ['Python', 'Excel', 'Intro FEA']
},
{
  id: 'MEEN 381', title: 'Seminar', cr: 1, y: 3, s: 'Fall', kind: 'core', d: 1, h: 2,
  pre: [],
  sum: 'Professional development: ethics, career planning, industry speakers, communication and professional licensure.',
  why: 'Low effort but useful for planning internships, the FE exam and career direction.',
  know: [],
  units: [
    ['Professionalism and ethics', 'NSPE code of ethics; case studies; licensure (EIT/PE)', 'Use the ethics cases as FE prep.', 'What are the steps to a PE license? | First canon of the NSPE code?'],
    ['Career development', 'résumés; interviews; internships and co-ops; graduate school', 'Update your résumé during this course and get it reviewed by the career center.', 'How do you describe a project in STAR format? | Co-op vs internship?'],
    ['Industry exposure', 'speakers; industry trends', 'Talk to at least one speaker after their talk.', 'Which industry speaker matched your interests? | What skills did they emphasize?']
  ],
  top: ['Ethics', 'Licensure path', 'Career planning'],
  take: ['Plan for the FE exam near graduation while material is fresh.'],
  real: ['Professional licensure and ethics in practice'],
  pit: ['Ignoring it; it is useful for planning'],
  res: [['tool', 'NCEES FE exam info', 'NCEES FE exam mechanical'], ['tool', 'NSPE Code of Ethics', 'NSPE code of ethics']],
  fe: ['Ethics and Professional Practice'], sw: []
},
{
  id: 'MEEN 401', title: 'Mechanical Engineering Design I (Introduction to Design)', cr: 3, y: 4, s: 'Fall', kind: 'core', d: 3, h: 10,
  pre: ['MEEN 360', 'MEEN 368', 'MEEN 364'],
  sum: 'The design process: customer needs, requirements, concept generation and selection, engineering analysis, prototyping, design reviews, engineering economics, and teamwork, leading into the capstone.',
  why: 'Starts the capstone sequence. The process you learn here (requirements → concepts → analysis → test) is how engineering teams work at companies.',
  know: ['CAD', 'Solid mechanics', 'Manufacturing processes', 'Teamwork'],
  units: [
    ['Problem definition', 'customer needs; requirements and specifications; QFD/House of Quality; benchmarking', 'Write requirements that are measurable ("< 2 kg", not "lightweight").', 'Make a measurable requirement from "easy to use". | What is QFD?'],
    ['Concept generation and selection', 'brainstorming; functional decomposition; morphological charts; Pugh and weighted decision matrices', 'Generate many concepts before evaluating any.', 'How do you weight criteria? | What is a Pugh matrix?'],
    ['Engineering analysis and modeling', 'first-order analysis; FEA sanity checks; tolerance analysis; FMEA', 'Do a quick hand calculation before any simulation.', 'What does FMEA rank? | Why hand-check FEA?'],
    ['Engineering economics', 'time value of money; NPV; cost estimation; break-even', 'These are easy FE points. Learn the formulas.', 'NPV of a project? | Payback period?'],
    ['Prototyping, testing and reviews', 'prototyping strategy; test plans; design reviews; documentation', 'Prototype early and cheaply to find problems.', 'What is a design review for? | Looks-like vs works-like prototype?']
  ],
  top: ['Requirements', 'Decision matrices', 'FMEA', 'Engineering economics'],
  take: ['Design is iterative and driven by requirements.', 'Documentation and communication matter as much as analysis.'],
  real: ['Product development in every industry', 'Design reviews and stage-gate processes'],
  pit: ['Picking a concept too early', 'Vague requirements', 'Poor team communication'],
  res: [['book', 'Ullman – The Mechanical Design Process', 'Ullman The Mechanical Design Process'], ['book', 'Ulrich & Eppinger – Product Design and Development', 'Ulrich Eppinger Product Design and Development'], ['video', 'Stuff Made Here (design iteration)', 'Stuff Made Here']],
  fe: ['Mechanical Design and Analysis', 'Engineering Economics'], sw: ['SolidWorks', 'FEA', 'Excel']
},
{
  id: 'MEEN 402', title: 'Intermediate Design (Capstone)', cr: 3, y: 4, s: 'Spring', kind: 'core', d: 4, h: 14,
  pre: ['MEEN 401'],
  sum: 'Team capstone project, often industry-sponsored: build, test and present a full design solution. Includes design reviews, a final report and a showcase.',
  why: 'Your best résumé item and the main source of interview stories. Treat it like a job.',
  know: ['Everything in the core', 'Project management', 'CAD and manufacturing'],
  units: [
    ['Planning', 'Gantt charts; budgets; sourcing; risk management', 'Plan for long part lead times; ordering is often the bottleneck.', 'What is the critical path? | How do you mitigate a lead-time risk?'],
    ['Detailed design', 'detailed analysis; drawings; BOM; design for manufacture', 'Keep a design notebook with every decision and its reason.', 'What goes in a BOM? | Why freeze a design?'],
    ['Build and test', 'fabrication; integration; verification against requirements', 'Test against the requirements from 401, one by one.', 'Verification vs validation? | What if a test fails?'],
    ['Communication', 'final report; presentations; posters; sponsor management', 'Practice the presentation like an interview.', 'How do you present a failed test honestly? | What does a sponsor care about most?']
  ],
  top: ['Project management', 'Verification testing', 'Communication'],
  take: ['Real projects are limited by schedule, budget and people, not only by technical problems.'],
  real: ['Directly mirrors industry product development'],
  pit: ['Late ordering', 'Uneven team workload', 'Skipping documentation'],
  res: [['tool', 'Project management (Trello, GitHub Projects)', 'Gantt chart engineering project template'], ['book', 'Ullman – The Mechanical Design Process', 'Ullman The Mechanical Design Process']],
  fe: ['Mechanical Design and Analysis', 'Ethics and Professional Practice'], sw: ['SolidWorks', 'FEA', 'MS Project / Trello']
},
{
  id: 'MEEN 461', title: 'Heat Transfer', cr: 3, y: 3, s: 'Spring', kind: 'core', d: 4, h: 10,
  pre: ['MEEN 344', 'MEEN 357'],
  sum: 'Conduction (steady and transient), convection (forced and natural, using correlations), radiation, and heat exchanger design.',
  why: 'Thermal management is everywhere: electronics, batteries, engines, buildings and plants. It is a large FE topic and the base of the thermo-fluids electives.',
  know: ['First law', 'Fluid mechanics (boundary layers, Re)', 'ODEs and PDEs basics', 'Numerical methods'],
  units: [
    ['Conduction basics', 'Fourier\'s law; heat equation; thermal resistance networks; contact resistance', 'Thermal resistance networks solve most steady problems. Get fast at them.', 'Total resistance of a composite wall? | Critical insulation radius?'],
    ['Extended surfaces and 2D', 'fins; fin efficiency; 2D conduction; shape factors; numerical (finite difference) conduction', 'Write a finite-difference conduction solver in Python. It ties 357 and 461 together.', 'When is a fin worth adding? | Fin efficiency meaning?'],
    ['Transient conduction', 'lumped capacitance; Biot number; Heisler charts and series solutions; semi-infinite solids', 'Check Bi < 0.1 before using lumped capacitance, every time.', 'How long to cool a steel ball? | What does Biot compare?'],
    ['Forced convection', 'boundary layers; Nusselt, Prandtl, Reynolds; external and internal flow correlations', 'Make a correlation decision tree (geometry → flow regime → correlation).', 'Which correlation for turbulent pipe flow? | What does Nu mean?'],
    ['Natural convection', 'buoyancy; Grashof and Rayleigh numbers; correlations', 'Evaluate properties at the film temperature.', 'When is natural convection significant? | Ra meaning?'],
    ['Radiation', 'blackbody; emissivity; view factors; radiation networks', 'Draw radiation networks like electrical circuits.', 'Net radiation between two plates? | Reciprocity rule?'],
    ['Heat exchangers', 'LMTD; effectiveness-NTU; fouling; sizing and rating', 'Use LMTD when temperatures are known, ε-NTU when outlet temperatures are unknown.', 'When use ε-NTU? | Counterflow vs parallel flow?']
  ],
  top: ['Thermal resistance networks', 'Lumped capacitance', 'Convection correlations', 'Heat exchangers'],
  take: ['Heat moves by conduction, convection and radiation; thermal resistance makes analysis simple.', 'Dimensionless numbers (Bi, Nu, Re, Pr, Ra) guide every analysis.'],
  real: ['Electronics and battery cooling', 'Heat exchangers in refineries and HVAC', 'Turbine blade cooling', 'Building energy'],
  pit: ['Wrong correlation for the flow regime', 'Property evaluation at the wrong temperature', 'Unit errors with W vs W/m²'],
  res: [['book', 'Incropera & DeWitt – Fundamentals of Heat and Mass Transfer', 'Incropera Fundamentals of Heat and Mass Transfer'], ['book', 'Çengel – Heat and Mass Transfer', 'Cengel Heat and Mass Transfer'], ['video', 'LearnChemE – Heat Transfer', 'LearnChemE heat transfer'], ['course', 'MIT OCW 2.51 Intermediate Heat and Mass Transfer', 'MIT OCW 2.51']],
  fe: ['Heat Transfer'], sw: ['EES', 'Python', 'ANSYS (thermal)']
},
{
  id: 'MEEN 464', title: 'Heat Transfer Laboratory', cr: 1, y: 3, s: 'Spring', kind: 'core', d: 2, h: 4,
  pre: ['MEEN 260', 'MEEN 461'],
  sum: 'Experiments that go with MEEN 461: conduction, fins, transient cooling, forced and natural convection, radiation, and heat exchangers, with lab reports.',
  why: 'Ties the correlations from MEEN 461 to real measurements and builds thermal testing skills used in electronics, battery and HVAC work.',
  know: ['MEEN 461 concepts (concurrent)', 'Thermocouples and uncertainty from MEEN 260'],
  units: [
    ['Conduction and fins', 'thermal conductivity measurement; fin temperature profiles; contact resistance', 'Predict temperatures before the experiment, then compare.', 'Why does measured fin efficiency differ from theory? | How does contact resistance show up in data?'],
    ['Transient tests', 'lumped capacitance; cooling curves; Biot number checks', 'Fit an exponential to cooling data to get h.', 'How do you extract h from a cooling curve? | When does lumped capacitance fail?'],
    ['Convection', 'forced convection over cylinders or in tubes; natural convection; comparison with correlations', 'Evaluate properties at the film temperature.', 'How far off are correlations typically? | What raises h most?'],
    ['Heat exchangers and radiation', 'LMTD and ε-NTU from measurements; emissivity and radiation tests', 'Compute effectiveness from data and compare with ε-NTU.', 'Measured vs predicted effectiveness? | How does emissivity affect surface temperature?']
  ],
  top: ['Correlations vs data', 'Thermocouple uncertainty', 'Heat exchanger performance'],
  take: ['Convection correlations are often only accurate to about ±20-25%, so test data matters.'],
  real: ['Thermal testing of electronics and batteries', 'HVAC equipment rating', 'Heat exchanger performance testing'],
  pit: ['Thermocouple placement errors', 'Ignoring radiation losses', 'Weak uncertainty analysis'],
  res: [['book', 'Incropera – Fundamentals of Heat and Mass Transfer', 'Incropera Fundamentals of Heat and Mass Transfer']],
  fe: ['Heat Transfer', 'Measurements, Instrumentation, and Controls'], sw: ['Python', 'LabVIEW', 'Excel']
},
{
  id: 'MEEN 399', title: 'High Impact Experience for Mechanical Engineers', cr: 0, y: 2, s: 'Summer', kind: 'core', d: 1, h: 0,
  pre: [],
  sum: 'Zero-credit graduation requirement recorded after a qualifying high-impact experience such as an internship, co-op, undergraduate research, study abroad, or another approved experience. The plan of study shows it in the summer after sophomore year; check with MEEN advising for what qualifies and how to register.',
  why: 'This is your first real engineering experience and the most useful item on an early résumé. Plan for it by fall of sophomore year.',
  know: ['A résumé reviewed by the career center', 'A list of target companies or research labs'],
  units: [
    ['Find an experience', 'career fairs (fall and spring); Handshake; research lab openings; co-op programs; study abroad', 'Apply early: many internships hire in September and October for the next summer.', 'Which three companies or labs are you targeting? | When is the next career fair?'],
    ['Do the work well', 'setting goals with your supervisor; keeping a work log; asking for feedback', 'Write down one result per week with numbers (time saved, cost cut, tests run).', 'What did you deliver this week? | Who can be a reference for you?'],
    ['Reflect and report', 'reflection requirements; turning the experience into résumé bullets and interview stories', 'Write STAR stories (situation, task, action, result) while details are fresh.', 'What is your best STAR story from the experience? | What did you learn that a class did not teach?']
  ],
  top: ['Getting an internship or research position', 'Résumé bullets with results'],
  take: ['Start looking a full year ahead.', 'Research positions count and are often easier to get early.'],
  real: ['Internships often lead to full-time offers'],
  pit: ['Starting the search in spring', 'Not documenting results during the experience'],
  res: [['tool', 'Texas A&M Career Center', 'Texas A&M career center engineering'], ['tool', 'Aggies Undergraduate Research (LAUNCH)', 'Texas A&M LAUNCH undergraduate research']],
  fe: [], sw: []
}
);

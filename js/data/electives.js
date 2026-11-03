/*
 * MEEN technical electives (see field key in support.js).
 *
 * Degree rule (catalog): at least three MEEN technical electives, with at least
 * one from each area: Thermo-fluids Systems ('thermo'), Data Science &
 * Experimentation ('data'), and Mechanical & Manufacturing Systems ('mms').
 * The plan of study shows 12 technical-elective hours; up to 3 may be non-MEEN
 * with advisor approval.
 *
 * Titles, areas and prerequisites follow the department's current technical
 * elective list (engineering.tamu.edu MEEN curriculum page). A `note` field
 * flags courses not on that list or with extra prerequisite details.
 * Unit outlines are typical content for each course; syllabi vary.
 * Elective offerings change every semester; check Howdy.
 */
window.MEEN.courses.push(
{
  id: 'MEEN 410', title: 'Internal Combustion Engines', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'thermo', areaSure: true, d: 3, h: 7,
  pre: ['MEEN 344'],
  sum: 'Spark- and compression-ignition engine cycles, combustion, fuel-air mixing, emissions, performance testing and engine design.',
  why: 'Direct path to automotive, motorsport, heavy equipment, marine and power generation (gas engines).',
  know: ['Otto and Diesel cycles', 'First law for control volumes', 'Combustion stoichiometry'],
  units: [
    ['Engine fundamentals', 'engine geometry; mean effective pressure; efficiencies; performance maps', 'Learn the key equations for bmep, bsfc and volumetric efficiency.', 'What does bsfc measure? | Why does bmep allow engine comparisons?'],
    ['Cycles and thermochemistry', 'ideal and fuel-air cycles; combustion chemistry; adiabatic flame temperature', 'Compare ideal-cycle results to real engine data to see the losses.', 'Why is real efficiency far below Otto? | Effect of equivalence ratio?'],
    ['Combustion and emissions', 'SI and CI combustion; knock; NOx, CO, HC, soot formation; aftertreatment', 'Link each emission to its formation conditions (temperature, mixture).', 'Why does EGR reduce NOx? | What causes knock?'],
    ['Air and fuel systems', 'intake and exhaust flows; turbocharging; fuel injection; heat transfer and friction', 'Sketch a turbocharger map and identify surge and choke.', 'Why turbocharge? | Where does friction loss come from?']
  ],
  top: ['Performance parameters', 'Combustion and emissions', 'Turbocharging'],
  take: ['Engine design trades efficiency, power and emissions against each other.'],
  real: ['Automotive and heavy-duty powertrains', 'Natural gas compression and generator sets', 'Motorsport (Formula SAE)'],
  pit: ['Weak thermo fundamentals'],
  res: [['book', 'Heywood – Internal Combustion Engine Fundamentals', 'Heywood Internal Combustion Engine Fundamentals'], ['video', 'Engineering Explained', 'Engineering Explained engine']],
  fe: [], sw: ['GT-Power (industry)', 'EES']
},
{
  id: 'MEEN 414', title: 'Principles of Turbomachinery', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: null, areaSure: true, d: 4, h: 8,
  note: 'Not on the current department technical elective list. It may not be offered or may not count toward the elective areas; check with MEEN advising before planning on it.',
  pre: ['MEEN 315', 'MEEN 344'],
  sum: 'Pumps, fans, compressors and turbines: velocity triangles, Euler turbomachinery equation, similarity laws, performance curves and an intro to blade design.',
  why: 'Texas has a lot of rotating-equipment work (oil and gas, power, aerospace), and Texas A&M has a long-running turbomachinery research lab and industry symposium.',
  know: ['Control-volume momentum (angular)', 'Thermo cycles (Brayton)', 'Dimensional analysis'],
  units: [
    ['Fundamentals', 'Euler turbomachinery equation; velocity triangles; degree of reaction', 'Draw velocity triangles for every problem. They are the core of the course.', 'What does the Euler equation relate? | Meaning of degree of reaction?'],
    ['Similarity and performance', 'specific speed; affinity laws; performance maps; cavitation and NPSH', 'Use affinity laws on real pump curves from a manufacturer catalog.', 'How does head scale with speed? | Why does NPSH matter?'],
    ['Pumps, fans and compressors', 'centrifugal and axial machines; surge and stall; multistage compression', 'Relate surge to flow instability in the compressor map.', 'What is surge? | Why use intercooling?'],
    ['Turbines', 'steam and gas turbines; impulse vs reaction stages; losses; cooling', 'Connect turbine design to Brayton and Rankine cycles from 315.', 'Impulse vs reaction turbine? | Why cool turbine blades?']
  ],
  top: ['Velocity triangles', 'Affinity laws', 'Pump and compressor maps'],
  take: ['All turbomachines exchange energy through changes in angular momentum of the fluid.'],
  real: ['Pipeline compressors and pumps', 'Gas turbines for power and aircraft', 'HVAC fans'],
  pit: ['Sign errors in velocity triangles', 'Unit confusion with head vs pressure'],
  res: [['book', 'Dixon & Hall – Fluid Mechanics and Thermodynamics of Turbomachinery', 'Dixon Hall Fluid Mechanics Thermodynamics of Turbomachinery'], ['tool', 'Texas A&M Turbomachinery & Pump Symposia', 'Texas A&M Turbomachinery Pump Symposia']],
  fe: [], sw: ['EES', 'Python']
},
{
  id: 'MEEN 421', title: 'Thermal-Fluids Analysis and Design', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'thermo', areaSure: true, d: 4, h: 8,
  pre: ['MEEN 461'],
  sum: 'Design of thermal-fluid systems: piping networks, pumps, heat exchangers, power and refrigeration systems, and system-level optimization.',
  why: 'Turns thermo, fluids and heat transfer into system design, which is what plant, HVAC and energy engineers do daily. It is also a prerequisite for MEEN 463.',
  know: ['Thermodynamics cycles', 'Pipe flow', 'Heat exchangers (helpful)'],
  units: [
    ['Fluid systems', 'piping networks; pump selection; system curves', 'Solve a pipe network with Python or EES.', 'How do you match a pump to a system? | Series vs parallel pumps?'],
    ['Thermal systems', 'heat exchanger selection; thermal system modeling', 'Use ε-NTU for sizing problems.', 'How do you pick a heat exchanger type? | What sets the pinch point?'],
    ['Cycles and plants', 'advanced Rankine and Brayton; combined cycles; refrigeration systems', 'Model a full cycle in EES and run parameter studies.', 'Why are combined cycles efficient? | Effect of condenser pressure?'],
    ['Optimization and economics', 'system simulation; optimization; life-cycle cost', 'Include cost in every design decision.', 'How do you trade capital vs operating cost? | What is a design variable?']
  ],
  top: ['System curves', 'Cycle modeling', 'Design optimization'],
  take: ['Real thermal-fluid design is a system-level trade between performance and cost.'],
  real: ['Power plants', 'Refineries and chemical plants', 'HVAC central plants', 'Data-center cooling'],
  pit: ['Weak fundamentals from 315/344'],
  res: [['book', 'Stoecker – Design of Thermal Systems', 'Stoecker Design of Thermal Systems'], ['tool', 'EES (Engineering Equation Solver)', 'EES Engineering Equation Solver']],
  fe: [], sw: ['EES', 'Python']
},
{
  id: 'MEEN 437', title: 'Principles of Building Energy Analysis', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'thermo', areaSure: true, d: 3, h: 6,
  pre: ['MEEN 315'],
  sum: 'Building heating and cooling loads, psychrometrics, HVAC systems, energy simulation and efficiency measures.',
  why: 'HVAC and building energy is one of the most stable ME job markets and a common path to a PE license.',
  know: ['Psychrometrics basics', 'Heat transfer (conduction, convection)', 'Refrigeration cycles'],
  units: [
    ['Psychrometrics', 'moist air properties; psychrometric chart; processes', 'Do all processes on a real chart by hand.', 'What happens in cooling with dehumidification? | Dew point meaning?'],
    ['Loads', 'heat gains and losses; solar gains; infiltration; cooling and heating load calculations', 'Calculate the load for your own apartment.', 'Main components of cooling load? | Why does Texas design for latent load?'],
    ['HVAC systems', 'chillers; air handlers; VAV systems; heat pumps; controls', 'Visit a campus mechanical room if possible.', 'VAV vs constant volume? | How does a heat pump work in heating mode?'],
    ['Energy simulation', 'energy modeling; building codes (ASHRAE 90.1); efficiency measures', 'Try a free energy modeling tool on a simple building.', 'What does ASHRAE 90.1 regulate? | Example efficiency measure?']
  ],
  top: ['Psychrometrics', 'Load calculations', 'HVAC systems'],
  take: ['Buildings use a large share of total energy, so efficient design has a big effect.'],
  real: ['MEP consulting firms', 'Energy auditing', 'Data center design'],
  pit: ['Misreading the psychrometric chart'],
  res: [['book', 'McQuiston – Heating, Ventilating and Air Conditioning', 'McQuiston Heating Ventilating Air Conditioning'], ['tool', 'EnergyPlus / OpenStudio', 'EnergyPlus OpenStudio tutorial'], ['tool', 'ASHRAE student resources', 'ASHRAE student membership']],
  fe: [], sw: ['EnergyPlus', 'Trane TRACE / Carrier HAP']
},
{
  id: 'MEEN 463', title: 'Cogeneration Systems', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'thermo', areaSure: true, d: 3, h: 6,
  pre: ['MEEN 421'],
  sum: 'Combined heat and power: gas turbines, engines, heat recovery steam generators, absorption chillers, and economic analysis of cogeneration plants.',
  why: 'Useful for power, petrochemical and campus-energy careers. Texas A&M runs its own campus combined heat and power plant.',
  know: ['Brayton and Rankine cycles', 'Heat exchangers', 'Engineering economics'],
  units: [
    ['CHP fundamentals', 'topping and bottoming cycles; efficiency metrics; heat-to-power ratio', 'Compare CHP efficiency to separate heat and power.', 'Why is CHP efficient? | Define heat-to-power ratio.'],
    ['Prime movers', 'gas turbines; reciprocating engines; steam turbines; part-load behavior', 'Use manufacturer data sheets to compare machines.', 'Why use a gas turbine vs an engine? | Effect of ambient temperature on output?'],
    ['Heat recovery', 'HRSGs; pinch analysis; absorption chillers', 'Draw the temperature profile in an HRSG.', 'What is pinch point? | How does an absorption chiller work?'],
    ['Economics', 'fuel costs; spark spread; payback; emissions', 'Build a simple payback spreadsheet.', 'What is spark spread? | Main economic risks?']
  ],
  top: ['CHP efficiency', 'HRSG design', 'Economics'],
  take: ['Using waste heat can greatly improve total energy efficiency.'],
  real: ['Industrial plants', 'Campus and hospital energy plants', 'Refineries'],
  pit: [],
  res: [['book', 'Horlock – Cogeneration: Combined Heat and Power', 'Horlock Cogeneration Combined Heat and Power'], ['tool', 'US DOE CHP resources', 'DOE combined heat and power technical assistance']],
  fe: [], sw: ['EES', 'Excel']
},
{
  id: 'MEEN 472', title: 'Gas Dynamics', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'thermo', areaSure: true, d: 4, h: 8,
  pre: ['MEEN 344'],
  sum: 'Compressible flow: isentropic flow, nozzles, normal and oblique shocks, expansion waves, and flow with friction and heat addition (Fanno and Rayleigh).',
  why: 'Required knowledge for rockets, jet engines, high-pressure gas systems, relief valves and supersonic aircraft.',
  know: ['Thermodynamics (entropy, isentropic relations)', 'Control-volume analysis', 'Mach number'],
  units: [
    ['Isentropic flow', 'speed of sound; stagnation properties; area-Mach relation; choking', 'Use the isentropic tables until relations are familiar.', 'Why does flow choke at the throat? | Stagnation temperature meaning?'],
    ['Nozzles', 'converging and converging-diverging nozzles; over- and under-expansion', 'Sketch pressure distributions for each back-pressure regime.', 'What happens when back pressure drops? | Why do rocket nozzles diverge?'],
    ['Shocks', 'normal shocks; oblique shocks; expansion fans', 'Use θ-β-M charts carefully; pick the weak shock solution unless told otherwise.', 'What changes across a normal shock? | Why does entropy increase across a shock?'],
    ['Fanno and Rayleigh flow', 'friction in ducts; heat addition; thermal choking', 'Know which way Mach number moves for subsonic and supersonic cases.', 'Effect of friction on subsonic flow? | Rayleigh line meaning?']
  ],
  top: ['Area-Mach relation', 'Choked flow', 'Normal shocks'],
  take: ['At high speeds, compressibility changes how flow behaves.'],
  real: ['Rocket engines', 'Jet engines', 'Gas pipelines and relief valves'],
  pit: ['Applying incompressible intuition'],
  res: [['book', 'Anderson – Modern Compressible Flow', 'Anderson Modern Compressible Flow'], ['tool', 'NASA Glenn Beginner\'s Guide to Aeronautics', 'NASA Glenn beginner\'s guide to aeronautics compressible']],
  fe: [], sw: ['Python', 'EES']
},
{
  id: 'MEEN 404', title: 'Experimental Design and Data Analysis', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'data', areaSure: true, d: 3, h: 8,
  pre: ['MEEN 345', 'MEEN 361'],
  sum: 'Planning and running engineering experiments and analyzing the data: design of experiments, statistical inference, regression, uncertainty, and data analysis in Python, with hands-on lab projects.',
  why: 'Test, validation, quality and R&D engineers spend much of their time designing experiments and defending results with statistics. It is also the clearest way to satisfy the Data Science & Experimentation area.',
  know: ['Statistics from STAT 211', 'Uncertainty analysis from MEEN 260', 'Python data processing', 'Lab experience from the junior labs'],
  units: [
    ['Planning experiments', 'objectives and hypotheses; variables and controls; test matrices; randomization and blocking; replication', 'Write the test plan, including how you will analyze the data, before touching hardware.', 'Why randomize run order? | What is blocking for?'],
    ['Factorial designs', 'full and fractional factorial designs; main effects and interactions; response surfaces', 'Run a 2³ design by hand once, then in Python, and interpret every effect.', 'How many runs in a 2⁴ full factorial? | What does an interaction mean physically?'],
    ['Statistical analysis', 'hypothesis tests; ANOVA; confidence intervals; regression and residual checks', 'For each result, state the effect size and the confidence, not just "significant".', 'What does ANOVA test? | What do patterned residuals tell you?'],
    ['Uncertainty and data quality', 'measurement uncertainty; outliers; repeatability; reporting results', 'Carry uncertainty all the way into your final plots.', 'When can you remove an outlier? | How do you report a result with uncertainty?'],
    ['Data analysis projects', 'processing large data sets; visualization; technical reports', 'Build a reusable Python pipeline: load, clean, analyze, plot.', 'How do you make an analysis reproducible? | What makes a figure readable?']
  ],
  top: ['Design of experiments', 'ANOVA and regression', 'Uncertainty reporting'],
  take: ['A good experimental design gets more information from fewer tests.', 'Results need effect sizes and uncertainty to be useful for decisions.'],
  real: ['Test and validation engineering', 'Process optimization in manufacturing', 'Quality and Six Sigma', 'R&D'],
  pit: ['Changing one factor at a time and missing interactions', 'Analyzing data without a plan made in advance'],
  res: [['book', 'Montgomery – Design and Analysis of Experiments', 'Montgomery Design and Analysis of Experiments'], ['book', 'Figliola & Beasley – Mechanical Measurements', 'Figliola Beasley mechanical measurements'], ['video', 'StatQuest with Josh Starmer', 'StatQuest ANOVA']],
  fe: [], sw: ['Python (pandas, statsmodels)', 'Minitab or JMP']
},
{
  id: 'MEEN 435', title: 'Compressed Air Systems', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'thermo', areaSure: true, d: 3, h: 6,
  pre: ['MEEN 315'],
  sum: 'Design and energy efficiency of industrial compressed air systems: compressors, treatment (drying and filtration), distribution piping, leaks, controls, and system audits.',
  why: 'Compressed air is one of the most expensive utilities in manufacturing plants, so engineers who can audit and improve it save companies real money.',
  know: ['Thermodynamics of compression', 'Pipe flow and pressure drop', 'Engineering economics'],
  units: [
    ['Compression', 'reciprocating, rotary screw and centrifugal compressors; compression work; intercooling; performance curves', 'Compute the specific power (kW per 100 cfm) for real compressor data sheets.', 'Why intercool? | Screw vs centrifugal: when to use each?'],
    ['Air treatment', 'moisture and dew point; dryers; filters; condensate', 'Use psychrometrics to find how much water a compressor makes per day.', 'What is pressure dew point? | Refrigerated vs desiccant dryer?'],
    ['Distribution and storage', 'piping design; pressure drop; receivers; demand', 'Size a header for a small plant and check pressure drop.', 'Why add storage? | Effect of undersized piping?'],
    ['Audits and efficiency', 'leak detection; controls and sequencing; heat recovery; cost of air', 'Estimate the yearly cost of a single 1/8-inch leak.', 'What fraction of air is typically lost to leaks? | How does pressure setpoint affect energy?']
  ],
  top: ['Compression work', 'Pressure drop', 'Energy audits'],
  take: ['Every psi and every leak costs energy; system-level fixes often pay back in months.'],
  real: ['Manufacturing plant utilities', 'Energy consulting', 'Industrial equipment sales engineering'],
  pit: [],
  res: [['tool', 'Compressed Air Challenge resources', 'Compressed Air Challenge best practices'], ['tool', 'US DOE compressed air sourcebook', 'DOE improving compressed air system performance sourcebook']],
  fe: [], sw: ['Excel', 'EES']
},
{
  id: 'MEEN 411', title: 'Mechanical Controls', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'mms', areaSure: true, d: 4, h: 8,
  pre: ['MEEN 364'],
  sum: 'Applied control of mechanical systems: actuators, hydraulic and pneumatic systems, motion control, and controller implementation.',
  why: 'A practical follow-on to MEEN 364 for automation, heavy equipment and motion-control roles.',
  know: ['Transfer functions and PID from MEEN 364', 'System modeling'],
  units: [
    ['Actuators', 'electric motors; hydraulic and pneumatic actuators; valves', 'Model one actuator in each energy domain.', 'Why use hydraulics for heavy loads? | What limits pneumatic precision?'],
    ['Motion control', 'position and velocity loops; trajectory generation; feedforward', 'Simulate a cascaded position-velocity loop.', 'Why add feedforward? | Why cascade loops?'],
    ['Nonlinear effects', 'saturation; backlash; friction; anti-windup', 'Add saturation to a simulation and watch integrator windup happen.', 'What is integrator windup? | How does backlash affect stability?'],
    ['Implementation', 'digital control; sampling; PLCs and microcontrollers', 'Discretize a PID and run it on hardware or in code.', 'Effect of sample rate on a controller? | What does a PLC do?']
  ],
  top: ['Actuator models', 'Cascaded control', 'Anti-windup'],
  take: ['Real controllers must handle saturation, friction and sampling.'],
  real: ['Factory automation', 'Heavy equipment', 'Motion control'],
  pit: [],
  res: [['video', 'Brian Douglas – Control', 'Brian Douglas control systems'], ['book', 'Franklin & Powell – Feedback Control of Dynamic Systems', 'Franklin Powell Feedback Control of Dynamic Systems']],
  fe: [], sw: ['MATLAB/Simulink', 'PLC software']
},
{
  id: 'MEEN 467', title: 'Mechanical Behavior of Materials', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'mms', areaSure: true, d: 4, h: 7,
  pre: ['MEEN 360', 'MEEN 361'],
  sum: 'How and why materials deform and fail: plasticity, fracture mechanics, fatigue crack growth, creep, and design against failure.',
  why: 'The base for failure analysis, damage tolerance in aerospace, and pressure equipment integrity in oil and gas.',
  know: ['Stress transformation and failure theories', 'Dislocations and microstructure', 'Fatigue basics'],
  units: [
    ['Plasticity', 'yield criteria; strain hardening; true stress and strain', 'Convert engineering to true stress-strain for real data.', 'Why use true stress? | What is strain hardening?'],
    ['Fracture mechanics', 'stress intensity factor; fracture toughness; LEFM; crack-tip plasticity', 'Use K = Yσ√(πa) to find a critical crack size.', 'Critical crack length for given K_IC? | Why are thick plates more brittle?'],
    ['Fatigue', 'stress-life and strain-life; Paris law crack growth; damage tolerance', 'Integrate the Paris law to estimate inspection intervals.', 'What does the Paris law predict? | Safe-life vs damage tolerance?'],
    ['Creep and high temperature', 'creep mechanisms; Larson-Miller parameter; stress rupture', 'Use Larson-Miller to compare service conditions.', 'When does creep matter? | What is Larson-Miller?']
  ],
  top: ['Stress intensity factor', 'Paris law', 'Creep'],
  take: ['Cracks control failure; design with fracture mechanics, not just strength.'],
  real: ['Aerospace damage tolerance', 'Pipeline and pressure vessel integrity', 'Failure analysis'],
  pit: [],
  res: [['book', 'Dowling – Mechanical Behavior of Materials', 'Dowling Mechanical Behavior of Materials'], ['book', 'Anderson – Fracture Mechanics', 'Anderson Fracture Mechanics Fundamentals and Applications']],
  fe: [], sw: []
},
{
  id: 'MEEN 476', title: 'Nanoscale Issues in Manufacturing', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: null, areaSure: true, d: 3, h: 6,
  note: 'Not on the current department technical elective list (it appeared on the 2019-20 list). Check with MEEN advising before planning on it.',
  pre: ['MEEN 360'],
  sum: 'Manufacturing at small scales: micro- and nanofabrication, thin films, surface forces, metrology, and how scale changes mechanics and heat transfer.',
  why: 'Relevant to semiconductors, MEMS sensors and advanced materials, which are growing fast in Texas.',
  know: ['Manufacturing processes', 'Materials science', 'Basic heat transfer'],
  units: [
    ['Scaling', 'surface-to-volume effects; adhesion and surface forces; size effects in properties', 'Compute how forces scale as size shrinks by 1000x.', 'Why does adhesion dominate at small scale? | Why are nanowires stronger?'],
    ['Micro- and nanofabrication', 'lithography; deposition; etching; self-assembly', 'Draw a process flow for a simple MEMS cantilever.', 'Additive vs subtractive steps in fabrication? | Wet vs dry etching?'],
    ['Metrology', 'SEM; AFM; optical methods; measurement limits', 'Match each instrument to what it can resolve.', 'What does an AFM measure? | Resolution limit of optical microscopy?'],
    ['Applications', 'MEMS; semiconductor manufacturing; nanocomposites', 'Pick one device and explain how it is made.', 'How is an accelerometer chip made? | What limits yield in a fab?']
  ],
  top: ['Scaling laws', 'Fabrication process flows', 'Metrology'],
  take: ['At small scales, surface effects dominate and normal intuition breaks down.'],
  real: ['Semiconductor fabs', 'MEMS sensors', 'Advanced materials'],
  pit: [],
  res: [['book', 'Madou – Fundamentals of Microfabrication', 'Madou Fundamentals of Microfabrication']],
  fe: [], sw: []
},
{
  id: 'MEEN 496', title: 'Laser Material Processing for Manufacturing', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'thermo', areaSure: true, d: 3, h: 6,
  pre: ['MEEN 315'],
  sum: 'Using lasers to cut, weld, harden, and additively manufacture metals: laser physics basics, laser-material interaction, heat transfer, and process selection.',
  why: 'Laser welding, cutting and metal 3D printing are core processes in aerospace, automotive, EV battery and medical device manufacturing.',
  know: ['Heat transfer (conduction)', 'Manufacturing processes', 'Phase transformations in metals'],
  units: [
    ['Laser basics', 'how lasers work; beam quality; focusing; laser types (fiber, CO₂, diode)', 'Relate spot size and power to intensity.', 'Why do fiber lasers dominate metal cutting? | What is beam quality M²?'],
    ['Laser-material interaction', 'absorption; heating; melting; vaporization; keyhole formation', 'Estimate the time to melt a spot with a simple heat-transfer model.', 'Why is copper hard to laser weld? | What is a keyhole?'],
    ['Processes', 'cutting; welding; surface hardening; cladding; marking', 'Compare process windows (power vs speed) for each process.', 'Conduction vs keyhole welding? | Why harden with a laser?'],
    ['Additive manufacturing', 'powder bed fusion; directed energy deposition; defects; residual stress', 'Link defects (porosity, cracking) to process parameters.', 'What causes lack-of-fusion porosity? | Why do AM parts warp?']
  ],
  top: ['Absorption and heating', 'Process windows', 'Metal AM'],
  take: ['Laser processes are controlled heat-transfer problems; parameters set quality.'],
  real: ['EV battery welding', 'Aerospace metal AM', 'Medical devices'],
  pit: [],
  res: [['book', 'Steen – Laser Material Processing', 'Steen Laser Material Processing']],
  fe: [], sw: []
},
{
  id: 'MEEN 423', title: 'Machine Learning for Mechanical Engineers', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'data', areaSure: true, d: 4, h: 8,
  pre: ['MEEN 357'],
  sum: 'Supervised and unsupervised learning applied to mechanical engineering data: regression, classification, neural networks, and model validation, using Python.',
  why: 'Data and ML skills are in demand in every ME industry (predictive maintenance, surrogate models, manufacturing quality).',
  know: ['Python with NumPy', 'Linear algebra', 'Statistics', 'Least squares'],
  units: [
    ['Foundations', 'regression; gradient descent; bias-variance tradeoff; cross-validation', 'Implement linear regression with gradient descent from scratch once.', 'What is overfitting? | Why cross-validate?'],
    ['Classical methods', 'logistic regression; decision trees; random forests; SVMs; clustering; PCA', 'Use scikit-learn on a real engineering data set (bearing faults, material properties).', 'When use PCA? | Random forest vs single tree?'],
    ['Neural networks', 'perceptrons; backpropagation; deep networks; CNNs basics', 'Train a small network in PyTorch or Keras.', 'What does backprop compute? | Why use activation functions?'],
    ['Engineering applications', 'surrogate models; fault detection; physics-informed ML', 'Do a project with your own lab data.', 'What is a surrogate model? | Why respect physics in ML models?']
  ],
  top: ['Model validation', 'Regression and classification', 'Neural networks'],
  take: ['A model is only as good as its data and validation.'],
  real: ['Predictive maintenance', 'Design optimization', 'Manufacturing quality control', 'Autonomous systems'],
  pit: ['Data leakage', 'Skipping validation'],
  res: [['book', 'Géron – Hands-On Machine Learning', 'Geron Hands-On Machine Learning'], ['video', 'Steve Brunton – Machine learning for engineers', 'Steve Brunton machine learning'], ['course', 'Andrew Ng – Machine Learning Specialization', 'Andrew Ng machine learning specialization']],
  fe: [], sw: ['Python (scikit-learn, PyTorch)']
},
{
  id: 'MEEN 408', title: 'Introduction to Robotics', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'mms', areaSure: true, d: 4, h: 8,
  pre: ['MEEN 364'],
  sum: 'Kinematics, dynamics and control of robot arms: transforms, forward and inverse kinematics, Jacobians, trajectory planning and robot control.',
  why: 'Core course for robotics, automation and manufacturing careers.',
  know: ['Linear algebra (matrices, rotations)', 'Rigid-body dynamics', 'Controls basics', 'Python/MATLAB'],
  units: [
    ['Rigid transforms', 'rotation matrices; homogeneous transforms; Euler angles; quaternions', 'Write a transform library in Python and plot coordinate frames.', 'Why are rotation matrices orthogonal? | What is gimbal lock?'],
    ['Kinematics', 'Denavit-Hartenberg parameters; forward kinematics; inverse kinematics', 'Do DH tables for 2-3 real robots (UR5, SCARA).', 'How many IK solutions for a 2-link arm? | What are DH parameters?'],
    ['Jacobians', 'velocity kinematics; singularities; statics with Jacobians', 'Plot manipulability across a workspace.', 'What happens at a singularity? | How does the Jacobian map forces?'],
    ['Dynamics and control', 'Lagrangian dynamics of manipulators; trajectory planning; computed torque and PD control', 'Simulate a 2-link arm with PD control.', 'What is computed torque control? | Why plan smooth trajectories?']
  ],
  top: ['Homogeneous transforms', 'DH parameters', 'Jacobians', 'Robot control'],
  take: ['Robotics combines kinematics, dynamics and control in one problem.'],
  real: ['Industrial automation', 'Surgical robots', 'Warehouse robotics', 'Space robotics'],
  pit: ['Frame-convention mistakes'],
  res: [['book', 'Lynch & Park – Modern Robotics (free PDF + videos)', 'Lynch Park Modern Robotics'], ['book', 'Craig – Introduction to Robotics', 'Craig Introduction to Robotics Mechanics and Control'], ['video', 'Peter Corke – Robot Academy', 'Peter Corke robot academy']],
  fe: [], sw: ['Python', 'MATLAB Robotics Toolbox', 'ROS']
},
{
  id: 'MEEN 412', title: 'Principles of Precision Machine Design', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'mms', areaSure: true, d: 4, h: 7,
  pre: ['MEEN 260', 'MEEN 363', 'MEEN 364'],
  sum: 'Design of machines with high accuracy: error budgets, kinematic coupling, flexures, bearings, thermal effects and metrology.',
  why: 'Highly relevant for semiconductor equipment, optics, metrology and advanced manufacturing.',
  know: ['Solid mechanics', 'Tolerancing', 'Heat transfer basics'],
  units: [
    ['Precision principles', 'accuracy, repeatability, resolution; Abbe error; error budgets', 'Build an error budget for a simple stage.', 'What is Abbe error? | Accuracy vs repeatability?'],
    ['Kinematic design', 'exact constraint; kinematic couplings; flexures', 'Count constraints and degrees of freedom for each design.', 'Why use exact constraint? | Advantage of flexures?'],
    ['Bearings and drives', 'rolling, air and hydrostatic bearings; ballscrews; linear motors', 'Compare bearing types in a table.', 'When use air bearings? | Why use linear motors?'],
    ['Thermal and metrology', 'thermal errors; materials with low expansion; measurement methods', 'Calculate thermal growth of a steel and aluminum frame.', 'Why does temperature matter at micron level? | What is a CMM?']
  ],
  top: ['Error budgets', 'Exact constraint', 'Thermal error'],
  take: ['Precision is designed in by controlling every error source.'],
  real: ['Semiconductor lithography and wafer handling', 'Optical systems', 'Machine tools'],
  pit: [],
  res: [['book', 'Slocum – Precision Machine Design', 'Slocum Precision Machine Design'], ['course', 'MIT OCW 2.75 Precision Machine Design', 'MIT OCW 2.75']],
  fe: [], sw: ['SolidWorks', 'FEA']
},
{
  id: 'MEEN 431', title: 'Advanced System Dynamics and Controls', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'mms', areaSure: true, d: 5, h: 9,
  pre: ['MEEN 364'],
  sum: 'State-space modeling, controllability and observability, pole placement, observers, optimal control (LQR), and digital control.',
  why: 'The next step after MEEN 364 for controls, robotics, aerospace GNC and autonomy roles, and a good base for graduate study.',
  know: ['Transfer functions', 'Linear algebra (eigenvalues)', 'MATLAB/Python'],
  units: [
    ['State-space models', 'state equations; transfer function conversion; linearization; solution of state equations', 'Convert every 364 system you know into state-space form.', 'Why use state-space? | What is the state transition matrix?'],
    ['Controllability and observability', 'rank tests; canonical forms', 'Test real examples in Python.', 'What does uncontrollable mean physically? | Why do we need observability?'],
    ['State feedback and observers', 'pole placement; Luenberger observers; separation principle', 'Design both and simulate them together.', 'What does the separation principle say? | How fast should observer poles be?'],
    ['Optimal and digital control', 'LQR; Kalman filter intro; discretization; sampling effects', 'Tune LQR weights and see what changes.', 'What do Q and R mean in LQR? | Effect of sample rate on stability?']
  ],
  top: ['State-space', 'Pole placement', 'LQR'],
  take: ['State-space methods scale to multi-input, multi-output systems.'],
  real: ['Flight control', 'Autonomous vehicles', 'Robotics', 'Process control'],
  pit: ['Weak linear algebra'],
  res: [['book', 'Franklin, Powell & Emami-Naeini – Feedback Control of Dynamic Systems', 'Franklin Powell Feedback Control of Dynamic Systems'], ['video', 'Steve Brunton – Control Bootcamp', 'Steve Brunton control bootcamp']],
  fe: [], sw: ['MATLAB/Simulink', 'python-control']
},
{
  id: 'MEEN 432', title: 'Automotive Engineering', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'mms', areaSure: true, d: 3, h: 7,
  pre: ['MEEN 363'],
  sum: 'Vehicle dynamics and powertrains: longitudinal performance, braking, tire mechanics, handling, ride and suspension, and electrified powertrains, often with simulation projects.',
  why: 'Main elective for automotive, EV and motorsport careers. Pairs well with Formula SAE.',
  know: ['Dynamics', 'Vibrations', 'Controls basics', 'MATLAB/Simulink'],
  units: [
    ['Longitudinal dynamics', 'tractive effort; road loads; acceleration and gradeability; braking', 'Build a vehicle acceleration model in Simulink or Python.', 'What limits acceleration? | Why does brake balance matter?'],
    ['Powertrains', 'engines and motors; transmissions; gear selection; EV and hybrid architectures', 'Compare an EV and ICE powertrain efficiency chain.', 'Why do EVs often use one gear? | Series vs parallel hybrid?'],
    ['Tires and handling', 'tire forces; slip angle; understeer and oversteer; bicycle model', 'Derive the bicycle model and simulate a lane change.', 'What causes understeer? | What is slip angle?'],
    ['Ride and suspension', 'quarter-car model; suspension geometry; ride comfort', 'Relate quarter-car to MEEN 363 vibrations.', 'Effect of damping on ride? | What is roll center?']
  ],
  top: ['Vehicle dynamics models', 'Tire mechanics', 'Powertrain sizing'],
  take: ['Vehicle design trades performance, efficiency, comfort and safety.'],
  real: ['Automotive OEMs and suppliers', 'EV startups', 'Motorsport', 'Autonomous vehicles'],
  pit: [],
  res: [['book', 'Gillespie – Fundamentals of Vehicle Dynamics', 'Gillespie Fundamentals of Vehicle Dynamics'], ['book', 'Milliken – Race Car Vehicle Dynamics', 'Milliken Race Car Vehicle Dynamics'], ['video', 'Engineering Explained', 'Engineering Explained']],
  fe: [], sw: ['MATLAB/Simulink', 'CarSim (industry)']
},
{
  id: 'MEEN 433', title: 'Mechatronics', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'data', areaSure: true, d: 4, h: 9,
  pre: ['MEEN 364'],
  sum: 'Integrating mechanical systems with electronics, sensors, actuators and microcontrollers; embedded programming and a hands-on mechatronic project.',
  why: 'Very practical for robotics, consumer products, automation and medical devices. Lab-heavy and great for building a portfolio.',
  know: ['Circuits', 'Sensors from MEEN 260', 'Controls', 'Basic C or Python'],
  units: [
    ['Electronics for mechatronics', 'transistors; H-bridges; op-amp signal conditioning; power electronics basics', 'Build each circuit on a breadboard.', 'Why use an H-bridge? | What is PWM?'],
    ['Microcontrollers', 'digital I/O; timers; interrupts; ADC; communication (I2C, SPI, UART)', 'Do small Arduino/STM32 projects weekly.', 'Polling vs interrupts? | I2C vs SPI?'],
    ['Actuators and sensors', 'DC, stepper and servo motors; encoders; IMUs', 'Characterize a motor (torque constant, back-EMF) yourself.', 'How does an encoder measure position? | Stepper vs servo?'],
    ['Integration project', 'system design; closed-loop control implementation; debugging hardware', 'Integrate one subsystem at a time and test each.', 'How do you debug a system that fails intermittently? | Why add a watchdog?']
  ],
  top: ['Microcontroller programming', 'Motor control', 'Sensor integration'],
  take: ['Most modern machines are mechatronic systems.'],
  real: ['Robotics', 'Consumer electronics', 'Medical devices', 'Industrial automation'],
  pit: ['Wiring errors', 'Starting integration too late'],
  res: [['book', 'Alciatore – Introduction to Mechatronics and Measurement Systems', 'Alciatore Introduction to Mechatronics and Measurement Systems'], ['tool', 'Arduino and STM32 tutorials', 'Arduino motor control tutorial'], ['video', 'GreatScott! / Ben Eater', 'Ben Eater electronics']],
  fe: [], sw: ['Arduino/C', 'MATLAB', 'KiCad']
},
{
  id: 'MEEN 434', title: 'Dynamics and Modeling of Mechatronic Systems', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'mms', areaSure: true, d: 4, h: 8,
  pre: ['MEEN 364'],
  sum: 'Modeling multi-domain systems (mechanical, electrical, hydraulic, thermal), often with bond graphs or energy-based methods, plus simulation and parameter identification.',
  why: 'Useful for system-level engineering, simulation roles and hydraulic or electromechanical system design.',
  know: ['System modeling from MEEN 364', 'ODEs', 'Simulation'],
  units: [
    ['Energy-based modeling', 'power variables; analogies; bond graphs or port-based modeling', 'Model the same system with both Newton and energy methods.', 'What are effort and flow variables? | Why use energy-based models?'],
    ['Multi-domain components', 'motors; hydraulics; transmissions; sensors', 'Build a library of component models.', 'How does a hydraulic actuator model look? | Model a gear train.'],
    ['Simulation', 'numerical integration; stiffness; model validation', 'Compare simulation against data.', 'Why do stiff models need special solvers? | How do you validate a model?'],
    ['Identification', 'parameter estimation; model reduction', 'Fit parameters from step-response data.', 'How do you estimate damping from data? | When can you reduce model order?']
  ],
  top: ['Multi-domain modeling', 'Simulation', 'Parameter identification'],
  take: ['Good models let you design and test systems before building them.'],
  real: ['Hydraulic machinery', 'Vehicle systems', 'Aerospace actuators'],
  pit: [],
  res: [['book', 'Karnopp – System Dynamics: Modeling, Simulation, and Control of Mechatronic Systems', 'Karnopp System Dynamics Mechatronic Systems'], ['tool', 'Simscape / Modelica tutorials', 'Simscape tutorial']],
  fe: [], sw: ['MATLAB/Simulink/Simscape', 'Modelica']
},
{
  id: 'MEEN 440', title: 'Bio-Inspired Design', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'mms', areaSure: true, d: 3, h: 6,
  pre: ['MEEN 368'],
  sum: 'Design methods that borrow from biological systems: structures, materials, locomotion and sensing in nature, applied to engineering design projects.',
  why: 'Good for biomedical, soft robotics and innovative product design interests.',
  know: ['Solid mechanics', 'Design process'],
  units: [
    ['Biomimetic design process', 'analogies; function-based search; case studies', 'Study known examples (Velcro, gecko adhesives, kingfisher train nose).', 'What function did the kingfisher solve? | How do you search biology for a function?'],
    ['Biological materials and structures', 'hierarchical structures; bone; wood; nacre', 'Relate structure to properties you learned in MEEN 223.', 'Why is nacre tough? | Why is bone hierarchical?'],
    ['Locomotion and sensing', 'flying, swimming, walking; biological sensors', 'Analyze one animal\'s locomotion with physics.', 'How do fish swim efficiently? | What is a bio-inspired sensor?'],
    ['Design project', 'concept generation; prototyping', 'Prototype quickly with 3D printing.', 'Which biological principle did you use? | How did you test it?']
  ],
  top: ['Biomimetic design', 'Hierarchical materials'],
  take: ['Nature offers tested solutions to many engineering problems.'],
  real: ['Soft robotics', 'Medical devices', 'Lightweight structures'],
  pit: [],
  res: [['tool', 'AskNature (Biomimicry Institute)', 'AskNature biomimicry']],
  fe: [], sw: ['SolidWorks', '3D printing']
},
{
  id: 'MEEN 441', title: 'Design of Mechanical Components and Systems', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'mms', areaSure: true, d: 4, h: 8,
  pre: ['MEEN 368'],
  sum: 'Detailed design of machine elements: gears, bearings, shafts, fasteners, welds, springs, clutches, brakes and belts, with design projects.',
  why: 'The most directly useful elective for a product or machine design engineer. It also covers much of the PE Machine Design exam.',
  know: ['Fatigue and failure theories (MEEN 368)', 'Shaft design basics'],
  units: [
    ['Shafts and connections', 'shaft design for fatigue; keys; couplings; critical speed', 'Design a shaft end to end with the Shigley procedure.', 'What sets shaft critical speed? | Why use a keyway?'],
    ['Bearings and lubrication', 'rolling-element bearing life; journal bearings; lubrication', 'Select a bearing from a manufacturer catalog (SKF).', 'What is L10 life? | When use journal bearings?'],
    ['Gears', 'gear geometry; spur and helical gears; AGMA bending and contact stress', 'Work through one full AGMA gear analysis.', 'Why are helical gears quieter? | What causes pitting?'],
    ['Fasteners, welds, springs, brakes', 'bolted joint stiffness and preload; weld stresses; spring design; clutches and brakes', 'Make a design checklist for each element.', 'How does preload help in fatigue? | Spring index meaning?']
  ],
  top: ['Shaft fatigue design', 'Bearing life', 'Gear stress', 'Bolted joints'],
  take: ['Most machines are built from standard components chosen and sized with established methods.'],
  real: ['Machine design', 'Heavy equipment', 'Gearboxes and drivetrains', 'Oilfield tools'],
  pit: ['Skipping catalog selection practice'],
  res: [['book', 'Shigley\'s Mechanical Engineering Design', 'Shigley Mechanical Engineering Design'], ['book', 'Norton – Machine Design', 'Norton Machine Design'], ['tool', 'SKF bearing catalog and calculator', 'SKF bearing calculator']],
  fe: [], sw: ['SolidWorks', 'Excel', 'KISSsoft (industry)']
},
{
  id: 'MEEN 442', title: 'Computer-Aided Engineering', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'mms', areaSure: true, d: 3, h: 7,
  pre: ['MEEN 363', 'MEEN 368'],
  sum: 'Using CAE tools in design: parametric modeling, simulation-driven design, FEA and CFD workflows, design optimization and automation.',
  why: 'Simulation skills are in demand across aerospace, automotive, energy and consumer products.',
  know: ['CAD', 'Solid mechanics', 'Numerical methods'],
  units: [
    ['Advanced CAD', 'parametric and surface modeling; configurations; design tables', 'Model complex parts with design tables.', 'Why parametrize? | When use surfaces?'],
    ['Simulation-driven design', 'static and thermal FEA in CAD; meshing; boundary conditions', 'Hand-check every simulation.', 'How do you choose boundary conditions? | What is mesh convergence?'],
    ['CFD basics', 'flow simulation setup; turbulence models; validation', 'Compare CFD drag to textbook values.', 'Why does CFD need validation? | What is y+?'],
    ['Optimization and automation', 'design of experiments; parametric studies; topology optimization; scripting', 'Automate a parameter sweep with a script.', 'What is topology optimization? | How do you avoid local optima?']
  ],
  top: ['Boundary conditions', 'Mesh convergence', 'Validation'],
  take: ['Simulation results need checking against hand calculations and data.'],
  real: ['CAE analyst roles', 'Product design', 'Aerospace structures'],
  pit: ['Trusting colorful results without checks'],
  res: [['tool', 'SolidWorks Simulation / ANSYS student', 'ANSYS student free download'], ['course', 'Cornell SimCafe (ANSYS tutorials)', 'Cornell SimCafe ANSYS']],
  fe: [], sw: ['SolidWorks', 'ANSYS', 'Python']
},
{
  id: 'MEEN 444', title: 'Finite Element Analysis in Mechanical Engineering', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'mms', areaSure: true, d: 4, h: 9,
  pre: ['MEEN 357', 'MEEN 368'],
  sum: 'Theory and practice of FEA: element formulations, stiffness matrices, isoparametric elements, 2D/3D solid elements, heat transfer, dynamics, and commercial software.',
  why: 'FEA is the most common simulation tool in mechanical engineering. Knowing the theory makes you a much better analyst.',
  know: ['Linear algebra', 'Solid mechanics', 'Numerical methods'],
  units: [
    ['Direct stiffness method', 'springs, bars and trusses; global assembly; boundary conditions', 'Write a truss FEA solver in Python.', 'How do you assemble a global stiffness matrix? | Why is K singular before BCs?'],
    ['Beams and frames', 'beam elements; shape functions; distributed loads', 'Compare FEA to beam formulas.', 'How many DOF per beam node? | What are shape functions?'],
    ['Continuum elements', 'weak form; isoparametric elements; numerical integration; CST and quad elements', 'Learn why element choice matters (shear locking).', 'What is the weak form? | Why use Gauss quadrature?'],
    ['Applications', 'heat transfer FEA; modal analysis; mesh convergence; error checking', 'Run a mesh convergence study on every model.', 'How do you know a mesh is fine enough? | What is a stress singularity?']
  ],
  top: ['Stiffness matrices', 'Shape functions', 'Mesh convergence'],
  take: ['FEA is an approximation, so you must understand its assumptions to trust its results.'],
  real: ['Structural analysis in aerospace and automotive', 'Pressure vessels', 'Medical implants'],
  pit: ['Stress singularities mistaken for real peaks'],
  res: [['book', 'Logan – A First Course in the Finite Element Method', 'Logan A First Course in the Finite Element Method'], ['book', 'Cook – Concepts and Applications of FEA', 'Cook Concepts and Applications of Finite Element Analysis'], ['video', 'The Efficient Engineer – FEA', 'The Efficient Engineer finite element']],
  fe: [], sw: ['ANSYS', 'Abaqus', 'Python']
},
{
  id: 'MEEN 445', title: 'Mechanics of Compliant Materials', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'mms', areaSure: true, d: 4, h: 7,
  pre: ['MEEN 344'],
  sum: 'Large-deformation behavior of soft materials such as elastomers, gels, polymers and biological tissue: hyperelasticity, viscoelasticity and applications.',
  why: 'Relevant to soft robotics, biomedical devices, seals and tires.',
  know: ['Solid mechanics', 'Linear algebra', 'Stress-strain behavior'],
  units: [
    ['Large deformation', 'deformation gradient; strain measures; stress measures', 'Work through simple stretch examples by hand.', 'Why does small-strain theory fail? | What is the deformation gradient?'],
    ['Hyperelasticity', 'strain energy functions; neo-Hookean and Mooney-Rivlin models', 'Fit a neo-Hookean model to rubber data.', 'What is a strain energy function? | Neo-Hookean parameters?'],
    ['Viscoelasticity', 'creep and relaxation; spring-dashpot models; time-temperature superposition', 'Simulate a Maxwell and Kelvin-Voigt model.', 'Creep vs relaxation? | What is a Prony series?'],
    ['Applications', 'seals; tires; soft robots; tissue', 'Pick one application for a project.', 'Why do seals relax over time? | How do soft actuators work?']
  ],
  top: ['Hyperelastic models', 'Viscoelasticity'],
  take: ['Soft materials need nonlinear and time-dependent models.'],
  real: ['Seals and gaskets', 'Tires', 'Medical devices', 'Soft robotics'],
  pit: [],
  res: [['book', 'Bower – Applied Mechanics of Solids (free online)', 'Bower Applied Mechanics of Solids']],
  fe: [], sw: ['Abaqus', 'Python']
},
{
  id: 'MEEN 454', title: 'Tribology – Mechanical Interface Design', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'mms', areaSure: true, d: 3, h: 6,
  pre: ['MEEN 344', 'MEEN 368'],
  sum: 'Friction, wear and lubrication: surface contact, hydrodynamic and elastohydrodynamic lubrication, bearing design and wear mechanisms.',
  why: 'Friction and wear limit the life of bearings, engines, drilling tools and many other machines.',
  know: ['Contact mechanics basics', 'Fluid viscosity', 'Materials'],
  units: [
    ['Surfaces and contact', 'surface roughness; Hertzian contact; real area of contact', 'Do Hertz contact problems for a ball on a flat.', 'Why is real contact area small? | Hertz max pressure?'],
    ['Friction', 'adhesion and plowing; friction laws; stick-slip', 'Relate friction to everyday squeaks and brakes.', 'Why is friction independent of apparent area? | What causes stick-slip?'],
    ['Wear', 'adhesive, abrasive, fatigue and corrosive wear; Archard\'s law', 'Estimate wear life with Archard\'s law.', 'What does Archard\'s law predict? | How do you reduce abrasive wear?'],
    ['Lubrication', 'Reynolds equation; journal bearings; Stribeck curve; EHL', 'Use the Stribeck curve to explain lubrication regimes.', 'What are the Stribeck regimes? | Why does EHL matter in gears?']
  ],
  top: ['Hertz contact', 'Stribeck curve', 'Wear mechanisms'],
  take: ['Lubrication and surface design control machine life.'],
  real: ['Bearings and gears', 'Engines', 'Drilling and downhole tools', 'Hard drives and MEMS'],
  pit: [],
  res: [['book', 'Hutchings – Tribology: Friction and Wear of Engineering Materials', 'Hutchings Tribology Friction and Wear']],
  fe: [], sw: []
},
{
  id: 'MEEN 455', title: 'Engineering with Plastics', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'mms', areaSure: true, d: 3, h: 6,
  pre: ['MEEN 360'],
  sum: 'Designing parts with plastics: polymer behavior, creep, processing (injection molding, extrusion, thermoforming) and plastic part design rules.',
  why: 'Plastics are in almost every consumer product, medical device and vehicle. Plastic part design is a common entry-level design skill.',
  know: ['Polymer basics', 'Material selection', 'CAD'],
  units: [
    ['Polymer behavior', 'molecular structure; Tg and Tm; time and temperature dependence', 'Compare data sheets for ABS, PC, nylon and PEEK.', 'Why is nylon sensitive to humidity? | Amorphous vs semicrystalline?'],
    ['Mechanical design with plastics', 'creep; stress relaxation; fatigue; impact', 'Use creep modulus, not short-term modulus, for long-term loads.', 'Why design with creep modulus? | Effect of temperature on stiffness?'],
    ['Processing', 'injection molding; extrusion; blow molding; thermoforming', 'Run a mold flow simulation if available.', 'What causes sink marks? | Where should a gate go?'],
    ['Part design rules', 'wall thickness; ribs; bosses; snap fits; draft', 'Redesign a metal part in plastic.', 'Rib thickness rule of thumb? | How do snap fits work?']
  ],
  top: ['Creep design', 'Injection molding', 'Plastic part design rules'],
  take: ['Plastic parts must be designed for the process and for time-dependent behavior.'],
  real: ['Consumer products', 'Medical devices', 'Automotive interiors and parts'],
  pit: [],
  res: [['book', 'Malloy – Plastic Part Design for Injection Molding', 'Malloy Plastic Part Design for Injection Molding'], ['tool', 'Protolabs design guidelines', 'Protolabs injection molding design guide']],
  fe: [], sw: ['SolidWorks Plastics', 'Moldflow']
},
{
  id: 'MEEN 471', title: 'Elements of Composite Materials', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'mms', areaSure: true, d: 4, h: 7,
  pre: ['MEEN 360', 'MEEN 361', 'MEEN 368'],
  sum: 'Fiber-reinforced composites: micromechanics, lamina and laminate analysis (classical lamination theory), failure criteria, and manufacturing.',
  why: 'Composites are central to aerospace, wind energy, automotive lightweighting and sporting goods.',
  know: ['Stress transformation', 'Linear algebra', 'Materials science'],
  units: [
    ['Materials and manufacturing', 'fibers and matrices; layup; autoclave; RTM; filament winding', 'Watch composite manufacturing videos for each process.', 'Why autoclave cure? | Thermoset vs thermoplastic matrices?'],
    ['Micromechanics', 'rule of mixtures; Halpin-Tsai', 'Compute lamina properties from fiber and matrix data.', 'Longitudinal vs transverse modulus? | Effect of fiber volume fraction?'],
    ['Lamina and laminate analysis', 'orthotropic stress-strain; transformations; classical lamination theory; ABD matrix', 'Code CLT in Python; it is a classic project.', 'What does the B matrix mean? | Why use symmetric laminates?'],
    ['Failure', 'Tsai-Wu and Tsai-Hill; first-ply failure; delamination', 'Compare failure criteria on the same laminate.', 'What is first-ply failure? | Why is delamination dangerous?']
  ],
  top: ['Classical lamination theory', 'Failure criteria'],
  take: ['Composites can be tailored by fiber direction, but analysis becomes anisotropic.'],
  real: ['Aircraft structures', 'Wind turbine blades', 'Pressure vessels', 'Race cars'],
  pit: ['Matrix algebra errors'],
  res: [['book', 'Jones – Mechanics of Composite Materials', 'Jones Mechanics of Composite Materials'], ['book', 'Daniel & Ishai – Engineering Mechanics of Composite Materials', 'Daniel Ishai Engineering Mechanics of Composite Materials']],
  fe: [], sw: ['Python', 'ANSYS Composite PrepPost']
},
{
  id: 'MEEN 485', title: 'Directed Studies', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: null, areaSure: true, d: 3, h: 9,
  pre: [],
  sum: 'Independent study with a faculty member on a topic not covered by regular courses. Approval and elective credit rules vary; check with advising.',
  why: 'A good way to get research experience and a strong recommendation letter for graduate school.',
  know: ['Initiative', 'Strong fundamentals in the chosen topic'],
  units: [
    ['Find a faculty mentor', 'research interests; lab websites; emailing faculty', 'Read two recent papers from a lab before emailing them.', 'Which three labs fit your interests? | What can you offer the lab?'],
    ['Define the project', 'scope; deliverables; schedule', 'Agree on written deliverables at the start.', 'What is your deliverable? | How will you be graded?'],
    ['Do the work and report', 'literature review; experiments or simulation; final report', 'Meet weekly and keep a lab notebook.', 'What did you learn this week? | What is blocking progress?']
  ],
  top: ['Research skills', 'Independent work'],
  take: ['Self-directed projects show employers and graduate schools that you can work independently.'],
  real: ['R&D and graduate school'],
  pit: ['Undefined scope'],
  res: [['tool', 'Texas A&M LAUNCH undergraduate research', 'Texas A&M LAUNCH undergraduate research']],
  fe: [], sw: []
},
{
  id: 'MEEN 489', title: 'Special Topics', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: null, areaSure: false, d: 3, h: 7,
  pre: [],
  sum: 'One-time or new courses on current topics such as additive manufacturing, energy storage, or advanced robotics. Topics change each semester; check Howdy and advising for which sections count toward each area.',
  why: 'Often where the newest topics show up first. Some sections are stacked with graduate courses.',
  know: ['Varies by topic'],
  units: [
    ['Check offerings', 'Howdy course search; department announcements; section topics', 'Look at the next semester\'s 489 sections as soon as the schedule posts.', 'Which 489 sections are offered next term? | Which area do they count for?']
  ],
  top: ['Varies'],
  take: ['Special topics let you specialize in emerging areas.'],
  real: ['Varies'],
  pit: ['Assuming a section counts for a specific area without checking'],
  res: [['tool', 'Howdy course schedule', 'Texas A&M Howdy class search']],
  fe: [], sw: []
}
);

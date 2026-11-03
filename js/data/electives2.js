/*
 * More MEEN electives from the department's current technical elective list
 * (engineering.tamu.edu, MEEN curriculum page). Titles, areas and
 * prerequisites are from that list. ft: true marks courses the list says may
 * be stacked with a graduate course for the Fast Track program.
 * Unit outlines are typical content for each course title; syllabi vary by
 * instructor and term.
 */
window.MEEN.courses.push(
/* ---- Mechanical & Manufacturing Systems ---- */
{
  id: 'MEEN 405', title: 'Engineering Vibrations', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'mms', areaSure: true, d: 4, h: 8,
  pre: ['MEEN 363'],
  sum: 'Vibration analysis beyond MEEN 363: multi-degree-of-freedom and continuous systems, modal analysis, rotating machinery, vibration isolation and absorbers, and measurement.',
  why: 'Vibration problems cause fatigue failures, noise and downtime in machines, vehicles and structures. Rotating-equipment and NVH roles look for this course.',
  know: ['Free and forced vibration (MEEN 363)', 'Eigenvalue problems', 'Python or MATLAB'],
  units: [
    ['Multi-DOF systems', 'mass and stiffness matrices; natural frequencies and mode shapes; orthogonality; modal coordinates', 'Solve 3-DOF problems with NumPy and plot each mode shape.', 'Why are mode shapes orthogonal? | What does modal decoupling buy you?'],
    ['Continuous systems', 'strings, bars, shafts and beams; boundary conditions; natural frequencies of beams', 'Memorize the first few beam frequency coefficients for common supports.', 'First natural frequency of a cantilever? | How do boundary conditions change modes?'],
    ['Isolation and absorbers', 'transmissibility; isolator design; tuned vibration absorbers; damping treatments', 'Design an isolator for a real machine speed.', 'When does a tuned absorber work best? | Why add damping to an absorber?'],
    ['Rotating machinery and testing', 'unbalance; critical speeds; balancing; modal testing; FFT analysis', 'Relate a measured spectrum peak to a physical cause (1x = unbalance).', 'What does a 1x peak suggest? | What is a critical speed?']
  ],
  top: ['Modal analysis', 'Beam vibration', 'Isolation and absorbers'],
  take: ['Every structure has natural frequencies; good design keeps operating speeds away from them or adds damping.'],
  real: ['Rotating machinery (pumps, compressors, turbines)', 'Automotive NVH', 'Aerospace structures'],
  pit: ['Weak linear algebra'],
  res: [['book', 'Rao – Mechanical Vibrations', 'Rao Mechanical Vibrations'], ['book', 'Inman – Engineering Vibration', 'Inman Engineering Vibration']],
  fe: [], sw: ['Python', 'MATLAB']
},
{
  id: 'MEEN 407', title: 'Intuitive and Counter-Intuitive Mechanisms', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'mms', areaSure: true, d: 3, h: 6,
  pre: [],
  note: 'Prerequisite on the department list: senior classification.',
  sum: 'Mechanism design: linkages, cams, gears and compliant mechanisms, including mechanisms that behave in surprising ways, with analysis and physical prototyping.',
  why: 'Mechanism design shows up in product design, robotics, aerospace deployables and consumer devices.',
  know: ['Rigid-body kinematics (MEEN 225)', 'CAD', 'Basic dynamics'],
  units: [
    ['Linkage kinematics', 'four-bar linkages; Grashof condition; position, velocity and acceleration analysis', 'Build linkages with cardboard or 3D printing and compare with analysis.', 'What does the Grashof condition tell you? | What is a toggle position?'],
    ['Synthesis', 'function, path and motion generation; graphical and analytical synthesis', 'Synthesize a four-bar for a real motion you want.', 'Path vs motion generation? | How many precision points can a four-bar match?'],
    ['Cams, gears and special mechanisms', 'cam profiles; gear trains; straight-line and snap-through mechanisms', 'Collect examples of surprising mechanisms from everyday products.', 'Why does a snap-through mechanism have two stable states? | Planetary gear ratio?'],
    ['Compliant mechanisms', 'flexure hinges; pseudo-rigid-body models; bistable designs', 'Prototype a compliant gripper.', 'Advantages of compliant mechanisms? | What limits their range of motion?']
  ],
  top: ['Four-bar analysis', 'Linkage synthesis', 'Compliant mechanisms'],
  take: ['Clever mechanisms can replace motors, sensors and parts.'],
  real: ['Consumer products', 'Robotics', 'Space deployables', 'Medical devices'],
  pit: [],
  res: [['book', 'Norton – Design of Machinery', 'Norton Design of Machinery'], ['book', 'Howell – Compliant Mechanisms', 'Howell Compliant Mechanisms']],
  fe: [], sw: ['SolidWorks Motion', 'Linkage simulators']
},
{
  id: 'MEEN 451', title: 'Viscoelastic Materials', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'mms', areaSure: true, d: 4, h: 7,
  pre: ['MEEN 368'],
  sum: 'Time-dependent behavior of polymers and other viscoelastic materials: creep, relaxation, spring-dashpot models, dynamic properties, and design with viscoelastic materials.',
  why: 'Polymers, elastomers, composites and biological tissue are all viscoelastic. Seals, dampers, and plastic parts fail if you ignore time dependence.',
  know: ['Solid mechanics', 'ODEs and Laplace transforms', 'Polymer basics'],
  units: [
    ['Phenomena', 'creep; stress relaxation; recovery; rate dependence', 'Look at real creep data for a plastic and fit a curve.', 'Creep vs relaxation? | Why does a plastic part sag over time?'],
    ['Mechanical models', 'Maxwell; Kelvin-Voigt; standard linear solid; Prony series', 'Derive each model\'s creep and relaxation response.', 'Which model shows creep with no recovery? | What is a Prony series?'],
    ['Dynamic behavior', 'storage and loss modulus; tan δ; DMA testing; damping', 'Connect tan δ to how much energy a material dissipates.', 'What does loss modulus measure? | Why are viscoelastic materials good dampers?'],
    ['Temperature and design', 'time-temperature superposition; WLF equation; design for long-term loads', 'Build a master curve from shifted data.', 'What does time-temperature superposition allow? | How do you design for 10-year loads?']
  ],
  top: ['Creep and relaxation', 'Spring-dashpot models', 'Storage and loss modulus'],
  take: ['Viscoelastic materials remember their loading history, so time and temperature matter in design.'],
  real: ['Seals and gaskets', 'Vibration damping', 'Plastic parts', 'Biomechanics'],
  pit: [],
  res: [['book', 'Lakes – Viscoelastic Materials', 'Lakes Viscoelastic Materials'], ['book', 'Brinson – Polymer Engineering Science and Viscoelasticity', 'Brinson Polymer Engineering Science and Viscoelasticity']],
  fe: [], sw: ['Python']
},
{
  id: 'MEEN 453', title: 'Additive & Subtractive Processes in Custom Manufacturing', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'mms', areaSure: true, d: 3, h: 7,
  pre: ['MEEN 360'],
  note: 'Prerequisite on the department list: MEEN 360 or MEEN 361, or equivalent.',
  sum: 'Making custom and low-volume parts with 3D printing and CNC machining: process planning, CAM, design for additive and subtractive processes, hybrid manufacturing, and quality.',
  why: 'Prototyping, tooling, aerospace and medical parts increasingly combine 3D printing with machining. Hands-on CAM and AM skills are directly employable.',
  know: ['Manufacturing processes (MEEN 360)', 'CAD and drawings', 'Tolerancing'],
  units: [
    ['Additive processes', 'FDM, SLA, SLS, metal powder bed fusion, binder jetting; build orientation; supports', 'Print the same part in different orientations and compare strength and finish.', 'Why are FDM parts weaker between layers? | When choose SLS over FDM?'],
    ['Subtractive processes and CAM', 'CNC milling and turning; toolpaths; feeds and speeds; fixturing', 'Program a simple part in CAM and simulate the toolpath.', 'How do you pick feeds and speeds? | Why does fixturing matter?'],
    ['Design for AM and machining', 'DfAM rules; lattices; machinability rules; tolerances', 'Redesign a machined bracket for AM and compare cost.', 'One DfAM rule? | What features are hard to machine?'],
    ['Hybrid manufacturing and quality', 'post-machining of printed parts; inspection; surface finish; cost', 'Measure printed and machined parts against the drawing.', 'Why machine critical surfaces after printing? | How do you inspect internal features?']
  ],
  top: ['Process selection', 'CAM toolpaths', 'DfAM'],
  take: ['Additive and subtractive processes work best together: print complex shapes, machine precise surfaces.'],
  real: ['Prototyping shops', 'Aerospace and medical parts', 'Tooling'],
  pit: [],
  res: [['book', 'Gibson, Rosen & Stucker – Additive Manufacturing Technologies', 'Gibson Rosen Stucker Additive Manufacturing Technologies'], ['tool', 'Fusion 360 CAM tutorials', 'Fusion 360 CAM tutorial']],
  fe: [], sw: ['Fusion 360 CAM', 'Slicer software']
},
{
  id: 'MEEN 458', title: 'Processing and Characterization of Polymers', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'mms', areaSure: true, d: 3, h: 6,
  pre: ['PHYS 206', 'CHEM 107'],
  note: 'Prerequisite on the department list: C or better in PHYS 206, CHEM 120, or CHEM 107.',
  sum: 'How polymers are processed (extrusion, molding, film forming) and how their structure and properties are measured (thermal analysis, rheology, mechanical testing, microscopy).',
  why: 'Useful for plastics, packaging, medical device and polymer-composite careers, and for the Polymer Specialty Certificate.',
  know: ['Chemistry basics', 'Materials science', 'Stress-strain behavior'],
  units: [
    ['Polymer structure', 'chains; molecular weight; crystallinity; Tg and Tm', 'Relate molecular weight to strength and processability.', 'Why does crystallinity raise stiffness? | What happens at Tg?'],
    ['Rheology and processing', 'viscosity of melts; shear thinning; extrusion; injection molding; film processes', 'Connect melt viscosity to process settings.', 'Why are polymer melts shear thinning? | What controls extrusion rate?'],
    ['Thermal characterization', 'DSC; TGA; DMA', 'Read a DSC curve and identify Tg, Tc and Tm.', 'What does DSC measure? | What does TGA show?'],
    ['Mechanical and structural characterization', 'tensile and impact testing; microscopy; spectroscopy basics', 'Compare tensile curves of brittle and ductile polymers.', 'Why does strain rate change polymer test results? | What does FTIR identify?']
  ],
  top: ['Tg and Tm', 'Melt rheology', 'DSC and DMA'],
  take: ['Processing history sets polymer structure, and structure sets properties.'],
  real: ['Plastics and packaging', 'Medical devices', 'Composites'],
  pit: [],
  res: [['book', 'Osswald – Materials Science of Polymers for Engineers', 'Osswald Materials Science of Polymers for Engineers']],
  fe: [], sw: []
},
{
  id: 'MEEN 459', title: 'Sound and Vibration Measurements', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'mms', areaSure: true, d: 3, h: 7,
  pre: ['MEEN 363', 'MATH 308'],
  sum: 'Measuring and analyzing noise and vibration: accelerometers, microphones, signal processing, FFT, frequency response functions, modal testing and acoustics basics.',
  why: 'NVH, test engineering, machinery condition monitoring and acoustics roles all rely on these measurement skills.',
  know: ['Vibrations (MEEN 363)', 'Sensors and DAQ (MEEN 260)', 'Fourier series'],
  units: [
    ['Transducers', 'accelerometers; microphones; force hammers; calibration; mounting effects', 'Know each sensor\'s frequency range and how mounting changes it.', 'Why does mounting stiffness matter? | How is a microphone calibrated?'],
    ['Signal processing', 'sampling; FFT; windowing; leakage; averaging', 'Demonstrate leakage and windowing in Python.', 'Why apply a Hann window? | What causes spectral leakage?'],
    ['Frequency response and modal testing', 'FRFs; coherence; impact testing; shaker testing; mode extraction', 'Do an impact test on a simple beam if you can.', 'What does coherence tell you? | How do you find damping from an FRF?'],
    ['Acoustics', 'sound pressure level; decibels; weighting; sound power; noise control', 'Practice adding decibel levels.', 'Two equal 80 dB sources give what total? | What is A-weighting for?']
  ],
  top: ['FFT and windowing', 'FRF measurement', 'Decibels'],
  take: ['Good measurements need the right sensor, sample rate and processing; otherwise the spectrum misleads you.'],
  real: ['Automotive NVH', 'Machinery condition monitoring', 'Aerospace testing', 'Consumer product acoustics'],
  pit: ['Leakage and aliasing errors'],
  res: [['book', 'Brandt – Noise and Vibration Analysis', 'Brandt Noise and Vibration Analysis signal analysis'], ['video', 'Siemens / NI vibration testing tutorials', 'modal impact testing tutorial']],
  fe: [], sw: ['Python', 'LabVIEW', 'MATLAB']
},
{
  id: 'MEEN 460', title: 'Corrosion Engineering', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'mms', areaSure: true, d: 3, h: 6,
  pre: ['MEEN 360', 'MEEN 361'],
  sum: 'Electrochemistry of corrosion, forms of corrosion, corrosion rates, and prevention through materials selection, coatings, inhibitors and cathodic protection.',
  why: 'Corrosion is a huge cost in oil and gas, pipelines, chemical plants, offshore and infrastructure, which are major Texas employers.',
  know: ['Electrochemistry basics (CHEM 107)', 'Materials science'],
  units: [
    ['Electrochemical basics', 'anodes and cathodes; electrode potentials; Pourbaix diagrams; corrosion rates', 'Use a Pourbaix diagram to predict corrosion of iron in water.', 'What does a Pourbaix diagram show? | How is corrosion rate measured?'],
    ['Forms of corrosion', 'uniform; galvanic; pitting; crevice; intergranular; stress corrosion cracking; erosion', 'Match each form to a real failure photo.', 'Why is pitting dangerous? | What causes stress corrosion cracking?'],
    ['Environments', 'aqueous, soil, atmospheric and high-temperature corrosion; H₂S and CO₂ in oil and gas', 'Study one oilfield corrosion case.', 'Why is sour service (H₂S) a problem? | What speeds atmospheric corrosion?'],
    ['Prevention', 'materials selection; coatings; inhibitors; cathodic protection; design rules', 'Design cathodic protection for a buried pipe segment.', 'Sacrificial anode vs impressed current? | Design rule to avoid crevices?']
  ],
  top: ['Galvanic series', 'Forms of corrosion', 'Cathodic protection'],
  take: ['Corrosion is predictable and preventable with the right material, coating and design.'],
  real: ['Pipelines and oilfield equipment', 'Chemical plants', 'Offshore structures', 'Infrastructure'],
  pit: [],
  res: [['book', 'Jones – Principles and Prevention of Corrosion', 'Jones Principles and Prevention of Corrosion'], ['tool', 'AMPP (formerly NACE) student resources', 'AMPP corrosion student']],
  fe: [], sw: []
},
{
  id: 'MEEN 475', title: 'Materials in Design', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'mms', areaSure: true, d: 3, h: 6,
  pre: ['MEEN 360', 'MEEN 361'],
  sum: 'Advanced materials selection for design: performance indices with multiple constraints, trade-offs, failure modes, sustainability and case studies.',
  why: 'Builds on MEEN 360 for product design, aerospace and automotive lightweighting, and failure prevention.',
  know: ['Ashby charts and material indices (MEEN 360)', 'Failure theories (MEEN 368)'],
  units: [
    ['Multiple constraints', 'coupled objectives; trade-off plots; penalty functions', 'Plot a trade-off curve for mass vs cost.', 'What is a Pareto front? | How do you handle two constraints?'],
    ['Shape and materials', 'shape factors; sections; hybrid materials and sandwich panels', 'Compare a solid beam vs a tube vs a sandwich for the same stiffness.', 'What does a shape factor capture? | Why use sandwich panels?'],
    ['Design against failure', 'fracture, fatigue, corrosion and wear in selection', 'Add a failure-mode screen to a selection problem.', 'Which index for fracture-limited design? | How does environment change selection?'],
    ['Sustainability and case studies', 'embodied energy; recyclability; life-cycle assessment', 'Do a quick eco-audit of a product you own.', 'What dominates the energy of a car over its life? | What is embodied energy?']
  ],
  top: ['Multi-objective selection', 'Shape factors', 'Eco-audits'],
  take: ['The best material depends on shape, failure modes, cost and environmental impact together.'],
  real: ['Product design', 'Aerospace and automotive lightweighting', 'Sustainability engineering'],
  pit: [],
  res: [['book', 'Ashby – Materials Selection in Mechanical Design', 'Ashby Materials Selection in Mechanical Design'], ['tool', 'Ansys Granta EduPack', 'Granta EduPack']],
  fe: [], sw: ['Granta EduPack']
},
{
  id: 'MEEN 488', title: 'Human Sensing Technologies', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'mms', areaSure: true, d: 3, h: 7,
  pre: ['MEEN 260', 'MEEN 357'],
  sum: 'Sensors and data methods for measuring human motion and physiology: wearables, motion capture, biosignals, signal processing and applications in health and human-machine interaction.',
  why: 'Wearables, medical devices, sports technology and human-robot interaction are growing fields that need engineers who understand both sensors and data.',
  know: ['Sensors and DAQ (MEEN 260)', 'Numerical methods and Python (MEEN 357)', 'Basic statistics'],
  units: [
    ['Human signals', 'motion; force; heart rate; EMG; temperature', 'List what each signal tells you and its typical frequency range.', 'What does EMG measure? | Typical frequency content of walking motion?'],
    ['Wearable and motion sensors', 'IMUs; pressure insoles; optical motion capture; flexible sensors', 'Collect IMU data from your phone while walking.', 'Why do IMUs drift? | Marker-based vs markerless capture?'],
    ['Signal processing', 'filtering; sensor fusion; feature extraction', 'Filter noisy data and compare raw and filtered plots.', 'What does a complementary filter do? | Why fuse sensors?'],
    ['Applications', 'activity recognition; health monitoring; human-robot interaction; privacy and ethics', 'Build a simple step counter or activity classifier.', 'How would you validate a step counter? | What privacy issues apply?']
  ],
  top: ['IMUs and sensor fusion', 'Biosignal filtering', 'Activity recognition'],
  take: ['Measuring people is noisy and varied; good processing and validation matter more than the sensor alone.'],
  real: ['Wearables', 'Medical devices', 'Sports technology', 'Human-robot interaction'],
  pit: [],
  res: [['video', 'Sensor fusion tutorials (MATLAB Tech Talks)', 'MATLAB Tech Talks sensor fusion']],
  fe: [], sw: ['Python', 'MATLAB', 'Arduino']
},

/* ---- Thermo-fluid and Energy Systems ---- */
{
  id: 'MEEN 406', title: 'Energy Management in Industry', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'thermo', areaSure: true, d: 3, h: 6,
  pre: ['MEEN 260', 'MEEN 315'],
  sum: 'Cutting energy use in industrial plants: energy audits, motors and drives, steam and compressed air systems, heat recovery, lighting, and project economics.',
  why: 'Energy engineers and plant engineers use these methods to save money and emissions. It leads well into energy-auditing and consulting jobs.',
  know: ['Thermodynamics', 'Engineering economics', 'Measurement basics'],
  units: [
    ['Energy audits', 'utility bills and rate structures; walk-through and detailed audits; metering', 'Analyze a year of utility bills for demand and usage patterns.', 'What is a demand charge? | What data does an audit need?'],
    ['Electrical systems', 'motors; variable-frequency drives; power factor; lighting', 'Estimate savings from putting a VFD on a fan.', 'Why do VFDs save so much on fans and pumps? | What is power factor correction?'],
    ['Thermal systems', 'boilers and steam systems; heat recovery; insulation; compressed air', 'Calculate savings from fixing a failed steam trap.', 'What is boiler efficiency? | Where is waste heat usually found?'],
    ['Project economics', 'simple payback; life-cycle cost; measurement and verification', 'Rank a list of measures by payback.', 'Payback vs NPV for ranking projects? | What is M&V?']
  ],
  top: ['Energy audits', 'VFD savings', 'Steam and heat recovery'],
  take: ['Most industrial savings come from motors, steam, compressed air and controls.'],
  real: ['Plant engineering', 'Energy consulting', 'Industrial Assessment Centers'],
  pit: [],
  res: [['book', 'Capehart, Turner & Kennedy – Guide to Energy Management', 'Capehart Guide to Energy Management'], ['tool', 'DOE Better Plants resources', 'DOE Better Plants industrial energy']],
  fe: [], sw: ['Excel']
},
{
  id: 'MEEN 416', title: 'Smart Building Technology', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'thermo', areaSure: true, d: 3, h: 6,
  pre: ['MEEN 315'],
  sum: 'Sensors, controls and data in modern buildings: building automation systems, HVAC controls, IoT, occupancy sensing, fault detection and grid-interactive buildings.',
  why: 'Building automation and controls is a growing HVAC career path, especially for data centers, campuses and hospitals.',
  know: ['Thermodynamics', 'Basic controls helpful', 'Programming helpful'],
  units: [
    ['Building systems', 'HVAC components; lighting; plug loads; building energy use', 'Map the systems in one campus building.', 'Where does most building energy go? | What does an AHU do?'],
    ['Building automation and controls', 'BAS architecture; sensors; control sequences; BACnet', 'Read a real control sequence of operations.', 'What is a control sequence? | What does BACnet do?'],
    ['Data and analytics', 'trend data; fault detection and diagnostics; occupancy sensing', 'Find a fault in sample trend data.', 'How would you spot a stuck damper in data? | Why use occupancy sensing?'],
    ['Grid-interactive buildings', 'demand response; thermal storage; on-site generation', 'Estimate savings from shifting cooling load to off-peak.', 'What is demand response? | How does thermal storage help the grid?']
  ],
  top: ['Control sequences', 'Fault detection', 'Demand response'],
  take: ['Many buildings waste energy through poor controls; data can find and fix it.'],
  real: ['Building automation companies', 'MEP consulting', 'Facilities engineering'],
  pit: [],
  res: [['tool', 'ASHRAE Guideline 36 overview', 'ASHRAE Guideline 36 high performance sequences']],
  fe: [], sw: ['Python', 'BAS software']
},
{
  id: 'MEEN 417', title: 'Basics of Plasma Engineering and Applications', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'thermo', areaSure: true, d: 4, h: 7,
  pre: ['PHYS 207'],
  note: 'Prerequisite on the department list: C or better in PHYS 207 or equivalent, and senior classification in NUEN, MEEN, AERO or PHYS.',
  sum: 'Introduction to plasmas and their engineering uses: plasma physics basics, discharges, diagnostics, and applications in materials processing, propulsion and semiconductor manufacturing.',
  why: 'Plasma processes are central to semiconductor fabrication, surface treatment and electric propulsion.',
  know: ['Electricity and magnetism (PHYS 207)', 'Thermodynamics basics'],
  units: [
    ['Plasma fundamentals', 'ionization; Debye length; plasma frequency; collisions', 'Compute Debye length for a few plasmas.', 'What makes a gas a plasma? | What is Debye shielding?'],
    ['Discharges', 'DC, RF and microwave discharges; breakdown; Paschen curve', 'Read a Paschen curve and explain its minimum.', 'Why does breakdown voltage have a minimum? | RF vs DC discharge?'],
    ['Diagnostics', 'Langmuir probes; optical emission spectroscopy', 'Interpret a probe I-V curve.', 'What does a Langmuir probe measure? | What can emission spectra tell you?'],
    ['Applications', 'plasma etching and deposition; surface treatment; electric propulsion; plasma medicine', 'Choose one application and explain how the plasma does the work.', 'Why do fabs use plasma etching? | How does a Hall thruster work?']
  ],
  top: ['Plasma parameters', 'Discharges', 'Applications'],
  take: ['Plasmas let engineers deliver energy and reactive species precisely, which is why fabs depend on them.'],
  real: ['Semiconductor equipment', 'Surface treatment', 'Space propulsion'],
  pit: [],
  res: [['book', 'Chen – Introduction to Plasma Physics and Controlled Fusion', 'Chen Introduction to Plasma Physics']],
  fe: [], sw: []
},
{
  id: 'MEEN 436', title: 'Principles of Heating, Ventilation and Air Conditioning', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'thermo', areaSure: true, d: 3, h: 7,
  pre: ['MEEN 344'],
  sum: 'HVAC fundamentals and design: psychrometrics, comfort, heating and cooling loads, air distribution and duct design, hydronic systems, and refrigeration equipment.',
  why: 'The core course for HVAC and MEP careers and a direct path toward the PE exam in HVAC and Refrigeration.',
  know: ['Thermodynamics', 'Fluid mechanics (pipe and duct flow)', 'Heat transfer helpful'],
  units: [
    ['Psychrometrics and comfort', 'moist air properties; psychrometric chart; comfort conditions; ventilation requirements', 'Do every process on a printed psychrometric chart.', 'What happens in a cooling coil? | How much outdoor air does a space need?'],
    ['Loads', 'heat transfer through envelopes; solar gains; internal gains; infiltration; load calculation methods', 'Calculate the cooling load of one room by hand.', 'Sensible vs latent load? | What drives peak cooling load in Texas?'],
    ['Air distribution', 'fans; duct sizing; pressure losses; diffusers', 'Size a small duct system with the equal-friction method.', 'What is the equal-friction method? | Fan law for pressure vs speed?'],
    ['Hydronics and equipment', 'chilled and hot water systems; pumps; chillers; boilers; heat pumps', 'Sketch a primary-secondary chilled water loop.', 'How does a chiller work? | Why use variable primary flow?']
  ],
  top: ['Psychrometrics', 'Load calculations', 'Duct and pipe sizing'],
  take: ['HVAC design balances comfort, air quality, energy use and cost.'],
  real: ['MEP consulting', 'HVAC manufacturers', 'Data centers and hospitals'],
  pit: ['Misreading the psychrometric chart'],
  res: [['book', 'McQuiston, Parker & Spitler – Heating, Ventilating and Air Conditioning', 'McQuiston Parker Spitler HVAC analysis and design'], ['tool', 'ASHRAE student membership', 'ASHRAE student membership']],
  fe: [], sw: ['Revit MEP', 'Trane TRACE or Carrier HAP']
},
{
  id: 'MEEN 439', title: 'Solar Energy Engineering', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'thermo', areaSure: true, d: 3, h: 6,
  pre: ['MEEN 315'],
  sum: 'Solar resource and geometry, photovoltaic systems, solar thermal collectors and concentrating solar power, system sizing, storage and economics.',
  why: 'Solar is one of the fastest-growing energy sources, and Texas is one of the largest solar markets in the US.',
  know: ['Thermodynamics', 'Heat transfer helpful', 'Engineering economics'],
  units: [
    ['Solar resource', 'sun position; irradiance; tilt and orientation; weather data', 'Use free irradiance data for College Station.', 'Best fixed tilt angle for a given latitude? | Direct vs diffuse irradiance?'],
    ['Photovoltaics', 'cell physics basics; I-V curves; temperature effects; inverters; system sizing', 'Size a rooftop PV system for a house.', 'Why does PV output drop when hot? | What does an MPPT do?'],
    ['Solar thermal', 'flat-plate and evacuated-tube collectors; collector efficiency; concentrating solar power', 'Compute a collector efficiency curve.', 'When is solar thermal better than PV? | How does CSP store energy?'],
    ['Storage and economics', 'batteries; thermal storage; LCOE; incentives', 'Calculate LCOE for a small system.', 'What is LCOE? | How does storage change project value?']
  ],
  top: ['Solar geometry', 'PV sizing', 'LCOE'],
  take: ['Solar design depends on the local resource, temperature, storage and economics.'],
  real: ['Solar developers and EPC firms', 'Utilities', 'Energy consulting'],
  pit: [],
  res: [['book', 'Duffie & Beckman – Solar Engineering of Thermal Processes', 'Duffie Beckman Solar Engineering of Thermal Processes'], ['tool', 'NREL PVWatts calculator', 'NREL PVWatts']],
  fe: [], sw: ['PVWatts', 'SAM (NREL)']
},
{
  id: 'MEEN 469', title: 'Alternative Energy Conservation', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'thermo', areaSure: true, d: 3, h: 6,
  pre: ['MEEN 315'],
  note: 'Title as shown on the department list. Content below covers alternative energy conversion technologies; check the syllabus.',
  sum: 'Alternative and renewable energy technologies: wind, solar, geothermal, hydro, biomass, fuel cells and hydrogen, energy storage, and how they compare on efficiency, cost and emissions.',
  why: 'A broad survey for students heading into energy careers, especially renewables and the energy transition.',
  know: ['Thermodynamics (cycles, efficiency)', 'Engineering economics'],
  units: [
    ['Energy landscape', 'energy demand; resources; emissions; capacity factor', 'Compare capacity factors of different power sources.', 'What is capacity factor? | Why does it matter for cost?'],
    ['Wind and hydro', 'Betz limit; turbine power curves; hydro power', 'Estimate annual energy from a wind turbine power curve.', 'What is the Betz limit? | Why does wind power scale with V³?'],
    ['Thermal and chemical conversion', 'geothermal; biomass; fuel cells; hydrogen', 'Compare fuel cell and engine efficiency.', 'How does a PEM fuel cell work? | Pros and cons of hydrogen?'],
    ['Storage and integration', 'batteries; pumped hydro; grid integration; economics', 'Compare storage options by cost per kWh and duration.', 'Why does the grid need storage? | Power vs energy capacity?']
  ],
  top: ['Capacity factor', 'Wind power', 'Fuel cells and hydrogen'],
  take: ['Every energy source has trade-offs in cost, reliability and emissions.'],
  real: ['Renewable developers', 'Utilities', 'Energy policy and consulting'],
  pit: [],
  res: [['book', 'MacKay – Sustainable Energy Without the Hot Air (free)', 'Sustainable Energy Without the Hot Air']],
  fe: [], sw: ['Excel']
},
{
  id: 'MEEN 477', title: 'Air Pollution Engineering', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'thermo', areaSure: true, d: 3, h: 6,
  pre: ['MEEN 344'],
  note: 'Prerequisite on the department list: C or better in BAEN 340, CVEN 311/EVEN 311, or MEEN 344.',
  sum: 'Sources and control of air pollution: combustion emissions, particulate and gas control devices, atmospheric dispersion, and regulations.',
  why: 'Environmental compliance work in refineries, power plants and manufacturing needs engineers who understand pollutant formation and control.',
  know: ['Fluid mechanics', 'Combustion stoichiometry', 'Thermodynamics'],
  units: [
    ['Pollutants and regulations', 'criteria pollutants; Clean Air Act; permits; emission factors', 'Estimate a plant\'s emissions from emission factors.', 'What are the criteria pollutants? | What is an emission factor?'],
    ['Formation', 'combustion; NOx, CO, SOx and particulate formation', 'Link each pollutant to the combustion condition that creates it.', 'Why does high flame temperature raise NOx? | Where does SOx come from?'],
    ['Control devices', 'cyclones; baghouses; electrostatic precipitators; scrubbers; SCR', 'Compare control devices by efficiency and cost.', 'How does an ESP work? | What does SCR remove?'],
    ['Dispersion', 'Gaussian plume model; stability classes; stack design', 'Run a simple plume calculation in Python.', 'What does atmospheric stability change? | Why build tall stacks?']
  ],
  top: ['Pollutant formation', 'Control devices', 'Dispersion modeling'],
  take: ['It is usually cheaper to prevent pollutant formation than to remove pollutants afterward.'],
  real: ['Environmental compliance', 'Refineries and power plants', 'Consulting'],
  pit: [],
  res: [['book', 'de Nevers – Air Pollution Control Engineering', 'de Nevers Air Pollution Control Engineering'], ['tool', 'EPA AP-42 emission factors', 'EPA AP-42 emission factors']],
  fe: [], sw: ['Python', 'Excel']
},
{
  id: 'MEEN 483', title: 'Optical Techniques for Engineers', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'thermo', areaSure: true, d: 3, h: 6,
  pre: ['PHYS 206'],
  note: 'Prerequisite on the department list: PHYS 206 and junior or senior classification.',
  sum: 'Optics for engineering measurement: geometric and wave optics, lasers, imaging, interferometry, and optical flow and temperature diagnostics such as PIV and infrared thermography.',
  why: 'Optical measurement is used in fluid and combustion research, manufacturing metrology and non-contact inspection.',
  know: ['Physics (waves helpful)', 'Measurement basics (MEEN 260)'],
  units: [
    ['Geometric optics', 'refraction; lenses; imaging; aberrations', 'Trace rays through a simple lens system.', 'Thin lens equation? | What causes chromatic aberration?'],
    ['Wave optics and lasers', 'interference; diffraction; coherence; laser basics', 'Relate fringe spacing to wavelength.', 'Why do lasers interfere cleanly? | What limits imaging resolution?'],
    ['Measurement techniques', 'interferometry; PIV; laser Doppler velocimetry; schlieren; thermography', 'Match each technique to what it measures.', 'What does PIV measure? | How does schlieren see density changes?'],
    ['Cameras and image processing', 'sensors; exposure; calibration; image processing', 'Process a PIV image pair or thermal image in Python.', 'How do you calibrate a camera? | What limits a thermal camera\'s accuracy?']
  ],
  top: ['Lenses and imaging', 'Interference', 'PIV and thermography'],
  take: ['Optical methods measure flows, temperatures and shapes without touching them.'],
  real: ['Fluid and combustion research', 'Metrology', 'Non-destructive inspection'],
  pit: [],
  res: [['book', 'Hecht – Optics', 'Hecht Optics textbook']],
  fe: [], sw: ['Python', 'ImageJ']
},
{
  id: 'MEEN 498', title: 'Computational Fluid Dynamics for Engineering and Biological Applications', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'thermo', areaSure: true, d: 4, h: 9,
  pre: ['MEEN 344', 'MEEN 357'],
  sum: 'Numerical solution of fluid flow: discretization (finite difference and finite volume), solving the Navier-Stokes equations, turbulence modeling, meshing, and verification and validation, with engineering and biological flow applications.',
  why: 'CFD is used in aerospace, automotive, energy, HVAC and biomedical design. Understanding the methods makes you a much better CFD user.',
  know: ['Fluid mechanics including Navier-Stokes (MEEN 344)', 'Numerical methods and Python (MEEN 357)', 'Heat transfer helpful'],
  units: [
    ['Discretization', 'finite difference and finite volume methods; truncation error; stability (CFL)', 'Write a 1D advection-diffusion solver and test the CFL limit.', 'What is the CFL condition? | Why use upwind differencing?'],
    ['Solving incompressible flow', 'pressure-velocity coupling; SIMPLE; boundary conditions', 'Solve lid-driven cavity flow and compare to published results.', 'Why is pressure coupling hard? | What boundary conditions does an inlet need?'],
    ['Turbulence and meshing', 'RANS models (k-ε, k-ω SST); y+; mesh quality; LES overview', 'Run the same case with two turbulence models.', 'What is y+? | When choose k-ω SST?'],
    ['Verification, validation and applications', 'grid convergence; validation against data; blood flow and other biological flows', 'Do a grid convergence study on every project.', 'Verification vs validation? | Why is blood flow non-Newtonian?']
  ],
  top: ['Finite volume method', 'Turbulence models', 'Grid convergence'],
  take: ['CFD results are only as good as the mesh, models and validation behind them.'],
  real: ['Aerospace and automotive aerodynamics', 'HVAC and data-center airflow', 'Biomedical devices'],
  pit: ['Trusting results without a grid study'],
  res: [['book', 'Versteeg & Malalasekera – Introduction to CFD', 'Versteeg Malalasekera Introduction to Computational Fluid Dynamics'], ['video', 'Lorena Barba – CFD Python (12 steps to Navier-Stokes)', 'CFD Python 12 steps to Navier-Stokes'], ['tool', 'OpenFOAM tutorials', 'OpenFOAM tutorial']],
  fe: [], sw: ['Python', 'ANSYS Fluent', 'OpenFOAM']
},

/* ---- General electives listed by the department (not technical electives) ---- */
{
  id: 'MEEN 473', title: 'Agile Technology Leadership', cr: 3, y: 4, s: 'Elective', kind: 'elective', area: 'general', areaSure: true, d: 2, h: 5,
  pre: ['ENGR 102'],
  note: 'Listed by the department as a general elective, not a technical elective. Prerequisite: C or better in ENGL 103 or 104, and ENGR 102.',
  sum: 'Leading technical teams and projects with agile methods: scrum, product ownership, team dynamics, communication and decision making.',
  why: 'Engineers who can lead teams and run projects move into lead and management roles faster.',
  know: ['Team project experience'],
  units: [
    ['Agile methods', 'scrum; sprints; backlogs; agile for hardware', 'Run your capstone or org project in two-week sprints.', 'What happens in a sprint review? | How does agile differ from waterfall?'],
    ['Leading teams', 'team roles; motivation; conflict; feedback', 'Practice giving specific, kind feedback.', 'How do you handle a teammate who misses deadlines? | What makes feedback useful?'],
    ['Communication and decisions', 'stakeholders; presenting; making decisions with incomplete data', 'Write a one-page decision memo.', 'What does a stakeholder need to hear? | How do you decide without full data?']
  ],
  top: ['Scrum', 'Team leadership', 'Communication'],
  take: ['Technical skill gets you hired; leading people gets you promoted.'],
  real: ['Project and engineering management'],
  pit: [],
  res: [['book', 'Sutherland – Scrum', 'Sutherland Scrum The Art of Doing Twice the Work']],
  fe: [], sw: ['Jira or Trello']
},
{
  id: 'MEEN 497', title: 'Innovation Mindset for Design and Research', cr: 3, y: 4, s: 'Elective', kind: 'elective', ft: true, area: 'general', areaSure: true, d: 2, h: 5,
  pre: [],
  note: 'Listed by the department as a general elective, not a technical elective. Check Howdy for prerequisites.',
  sum: 'Developing ideas into innovations: creativity methods, customer discovery, research questions, prototyping and pitching.',
  why: 'Good for students interested in startups, R&D, Aggies Invent or graduate research.',
  know: [],
  units: [
    ['Finding problems', 'customer discovery; interviews; needs statements', 'Interview five potential users before designing anything.', 'What makes a good interview question? | How do you write a needs statement?'],
    ['Generating and testing ideas', 'creativity methods; rapid prototyping; experiments', 'Build the cheapest test that could prove your idea wrong.', 'What is a minimum viable prototype? | How do you test an assumption?'],
    ['Communicating innovation', 'pitching; research proposals; intellectual property basics', 'Pitch your idea in two minutes.', 'What goes in a pitch? | When should you think about patents?']
  ],
  top: ['Customer discovery', 'Rapid prototyping', 'Pitching'],
  take: ['Start from a real problem, test cheaply, and iterate.'],
  real: ['Startups', 'R&D', 'Product development'],
  pit: [],
  res: [['book', 'Blank & Dorf – The Startup Owner\'s Manual', 'Startup Owner\'s Manual Blank Dorf']],
  fe: [], sw: []
}
);

/* Non-MEEN technical electives pre-approved by the department (max 3 hours),
   from the department curriculum page. Others need advising approval. */
window.MEEN.nonMeen = [
  ['Aerospace Engineering', 'AERO 303, 321'],
  ['Astronomy', 'ASTR 314'],
  ['Biological & Agricultural Engineering', 'BAEN 412, 422'],
  ['Biochemistry', 'BICH 410'],
  ['Biomedical Engineering', 'BMEN 448, 458'],
  ['Chemistry', 'CHEM 227, 228, 257, 258, 322, 422'],
  ['Chemical Engineering', 'CHEN 422, 430, 451'],
  ['Civil Engineering', 'CVEN 322'],
  ['Computer Science', 'CSCE 312, 313, 314'],
  ['Electrical Engineering', 'ECEN 314, 325, 441'],
  ['Electronic Systems Engineering Technology', 'ESET 369'],
  ['Geology', 'GEOL 404'],
  ['Industrial & Systems Engineering', 'ISEN 330, 440 (prerequisite MATH 304)'],
  ['Materials Science', 'MSEN 320, 325, 420, 458'],
  ['Mathematics', 'MATH 304, 311, 323, 401, 407, 409, 411, 412, 414, 425, 433, 470'],
  ['Nuclear Engineering', 'NUEN 301'],
  ['Physics', 'PHYS 222 (only if not taken for a physics minor)'],
  ['Petroleum Engineering', 'PETE 310, 311, 325, 353, 355'],
  ['Safety Engineering', 'SENG 310, 430, 455'],
  ['Statistics', 'STAT 414'],
  ['Minors and certificates', '300- or 400-level courses in the Engineering Project Management minor, Engineering Entrepreneurship minor, Polymer Specialty Certificate or Safety Engineering Specialty Certificate'],
  ['Co-op', 'ENGR 385 (1 hour per semester, 3 hours total)'],
  ['Research and directed study', 'MEEN 485 / 491 (up to 3 hours each, with a proposal approved by advising before the first week of class)']
];

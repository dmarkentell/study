/*
 * Industry and specialty tracks. Each lists the core courses to master
 * (not just pass), the electives that fit best, skills and software, and
 * example employers. Employers are examples of companies that hire MEs in
 * that field, not endorsements or guaranteed recruiters.
 */
window.MEEN.tracks = [
{
  id: 'aerospace', name: 'Aerospace & Space',
  blurb: 'Aircraft, rotorcraft, launch vehicles, satellites and defense systems. Strong presence in Texas (Fort Worth, Houston, the Gulf Coast).',
  master: ['MEEN 225', 'MEEN 305', 'MEEN 368', 'MEEN 344', 'MEEN 315', 'MEEN 364', 'MEEN 461'],
  electives: ['MEEN 472', 'MEEN 471', 'MEEN 444', 'MEEN 414', 'MEEN 431'],
  skills: ['Hand stress analysis', 'FEA', 'Composites', 'GD&T', 'Thermal analysis', 'Python/MATLAB'],
  software: ['NX or CATIA', 'ANSYS / Nastran / Abaqus', 'MATLAB/Simulink'],
  certs: ['FE exam', 'US citizenship is often required for defense work (ITAR)'],
  employers: ['Lockheed Martin', 'Bell Textron', 'NASA Johnson Space Center and contractors', 'SpaceX', 'Blue Origin', 'Boeing', 'Collins Aerospace', 'GE Aerospace'],
  projects: ['Sounding rocket or high-power rocketry team', 'Design, Build, Fly (AIAA)', 'CubeSat structure and thermal analysis'],
  note: 'Aerospace structures roles value MEEN 305/368 hand calculations very highly. Expect interview questions on beam bending, buckling and fatigue.'
},
{
  id: 'automotive', name: 'Automotive & Electric Vehicles',
  blurb: 'Vehicle design, powertrains, batteries, chassis, and manufacturing. Texas has large vehicle plants in Austin and San Antonio.',
  master: ['MEEN 363', 'MEEN 364', 'MEEN 368', 'MEEN 461', 'MEEN 360', 'MEEN 225'],
  electives: ['MEEN 432', 'MEEN 410', 'MEEN 433', 'MEEN 444', 'MEEN 441'],
  skills: ['Vehicle dynamics', 'Battery thermal management', 'DFM', 'Simulink modeling', 'Test and validation'],
  software: ['CATIA or NX', 'MATLAB/Simulink', 'ANSYS', 'Python'],
  certs: ['FE exam', 'Six Sigma Green Belt (useful in manufacturing roles)'],
  employers: ['Tesla', 'Toyota', 'General Motors', 'Ford', 'Rivian', 'Caterpillar', 'Cummins', 'Tier-1 suppliers (Bosch, Magna, BorgWarner)'],
  projects: ['Formula SAE', 'Baja SAE', 'Battery pack thermal model', 'Quarter-car suspension simulation'],
  note: 'Formula SAE or Baja experience is one of the strongest signals for automotive recruiters.'
},
{
  id: 'oilgas', name: 'Oil, Gas & Petrochemical',
  blurb: 'Drilling equipment, rotating machinery, pipelines, refineries and LNG plants. Houston is one of the world\'s largest energy-engineering hubs.',
  master: ['MEEN 344', 'MEEN 315', 'MEEN 461', 'MEEN 368', 'MEEN 363', 'MEEN 360'],
  electives: ['MEEN 414', 'MEEN 421', 'MEEN 463', 'MEEN 454', 'MEEN 441'],
  skills: ['Pump and compressor selection', 'Piping and pressure vessel codes (ASME B31.3, Section VIII)', 'Rotordynamics', 'Corrosion awareness', 'Reliability'],
  software: ['AutoCAD / Plant 3D', 'Aspen HYSYS (process)', 'CAESAR II (pipe stress)', 'ANSYS'],
  certs: ['FE exam, then PE', 'API certifications later in career'],
  employers: ['ExxonMobil', 'Chevron', 'Shell', 'SLB', 'Halliburton', 'Baker Hughes', 'NOV', 'Fluor', 'Kiewit', 'Bechtel'],
  projects: ['Pump system design study', 'Heat exchanger sizing tool', 'Texas A&M Turbomachinery & Pump Symposia (volunteer or attend)'],
  note: 'Rotating equipment roles value MEEN 363 and 414 strongly. Facilities and EPC roles value fluids, heat transfer and codes.'
},
{
  id: 'power', name: 'Power Generation & Renewables',
  blurb: 'Gas turbines, combined-cycle plants, wind, solar, nuclear, hydrogen and energy storage. Texas leads the US in wind power.',
  master: ['MEEN 315', 'MEEN 344', 'MEEN 461', 'MEEN 363', 'ISEN 302'],
  electives: ['MEEN 421', 'MEEN 463', 'MEEN 414', 'MEEN 471', 'MEEN 423'],
  skills: ['Cycle analysis', 'Heat exchangers', 'Techno-economic analysis', 'Data analysis'],
  software: ['EES', 'Python', 'ANSYS', 'Excel modeling'],
  certs: ['FE exam, then PE (Mechanical: Thermal & Fluid Systems)'],
  employers: ['GE Vernova', 'Siemens Energy', 'Mitsubishi Power', 'NextEra Energy', 'Vistra', 'Luminant', 'NRG', 'Burns & McDonnell'],
  projects: ['Combined-cycle model in EES/Python', 'Wind turbine blade composite analysis', 'Campus energy plant tour'],
  note: 'Engineering economics (ISEN 302) shows up in almost every energy project decision.'
},
{
  id: 'hvac', name: 'HVAC, Buildings & Data Centers',
  blurb: 'Mechanical systems for buildings, hospitals, labs and data centers. Stable demand and a well-defined path to a PE license.',
  master: ['MEEN 315', 'MEEN 344', 'MEEN 461', 'ISEN 302'],
  electives: ['MEEN 437', 'MEEN 421', 'MEEN 463', 'MEEN 423'],
  skills: ['Load calculations', 'Psychrometrics', 'Duct and pipe sizing', 'Energy codes (ASHRAE 90.1)', 'Controls'],
  software: ['Revit MEP', 'AutoCAD', 'Trane TRACE / Carrier HAP', 'EnergyPlus'],
  certs: ['FE exam, then PE (Mechanical: HVAC & Refrigeration)', 'LEED Green Associate', 'ASHRAE certifications later'],
  employers: ['Trane Technologies', 'Lennox', 'Johnson Controls', 'Carrier', 'MEP consulting firms', 'Data-center operators and builders'],
  projects: ['Load calculation for a real building', 'ASHRAE student branch design competition'],
  note: 'Data-center cooling is a fast-growing area that combines thermo-fluids with electronics thermal management.'
},
{
  id: 'robotics', name: 'Robotics, Mechatronics & Automation',
  blurb: 'Industrial robots, warehouse automation, autonomous vehicles, drones and consumer devices.',
  master: ['MEEN 364', 'MEEN 365', 'MEEN 363', 'MEEN 260', 'MEEN 357', 'ECEN 215'],
  electives: ['MEEN 408', 'MEEN 433', 'MEEN 431', 'MEEN 434', 'MEEN 423'],
  skills: ['Kinematics', 'Feedback control', 'Embedded programming', 'Sensors', 'Python and C++'],
  software: ['ROS', 'Python', 'C/C++', 'MATLAB/Simulink', 'SolidWorks'],
  certs: ['Usually a portfolio counts more than certifications here'],
  employers: ['Amazon Robotics', 'Boston Dynamics', 'Intuitive Surgical', 'ABB', 'FANUC', 'Rockwell Automation', 'Tesla (Optimus, factory automation)', 'Drone and autonomy startups'],
  projects: ['Robotics competitions', 'Build a 2-DOF arm with PID control', 'Self-balancing robot', 'Personal GitHub portfolio'],
  note: 'Hiring managers in robotics often look for a GitHub portfolio of working projects.'
},
{
  id: 'manufacturing', name: 'Manufacturing & Product Design',
  blurb: 'Designing products and the processes to make them: consumer goods, industrial equipment and factory engineering.',
  master: ['MEEN 210', 'MEEN 360', 'MEEN 361', 'MEEN 368', 'MEEN 401', 'MEEN 402', 'STAT 211'],
  electives: ['MEEN 441', 'MEEN 455', 'MEEN 442', 'MEEN 444', 'MEEN 412'],
  skills: ['CAD and drawings', 'GD&T', 'DFM/DFA', 'Tolerance stack-ups', 'Statistical process control', 'Lean manufacturing'],
  software: ['SolidWorks', 'Creo or NX', 'Minitab', 'CAM software'],
  certs: ['SolidWorks CSWA → CSWP', 'ASME GDTP', 'Six Sigma Green Belt'],
  employers: ['Texas Instruments', 'Caterpillar', 'John Deere', 'Dell', 'Apple', 'Whirlpool', 'Emerson'],
  projects: ['Design and machine a part in a student shop', 'Injection-molded part redesign', 'Tolerance stack-up study'],
  note: 'Being fast and accurate in CAD (MEEN 210) is a hiring advantage here. Get CSWA early, ideally sophomore year.'
},
{
  id: 'semiconductor', name: 'Semiconductors & Precision Equipment',
  blurb: 'Fab equipment, wafer handling, vacuum and thermal systems, and fab facilities. Large investments in Texas (Austin, Sherman, Taylor).',
  master: ['MEEN 368', 'MEEN 461', 'MEEN 344', 'MEEN 364', 'MEEN 260', 'MEEN 210'],
  electives: ['MEEN 412', 'MEEN 444', 'MEEN 433', 'MEEN 421', 'MEEN 423'],
  skills: ['Precision mechanics', 'Thermal management', 'Vacuum systems', 'Fluid and gas delivery', 'Statistical process control'],
  software: ['SolidWorks or NX', 'ANSYS', 'Python', 'JMP'],
  certs: ['FE exam'],
  employers: ['Texas Instruments', 'Samsung', 'Applied Materials', 'Lam Research', 'KLA', 'GlobalWafers', 'Micron'],
  projects: ['Flexure stage design', 'Thermal model of a heated chuck', 'Clean-room or nanofabrication lab experience'],
  note: 'Fab facilities roles lean on HVAC and fluids; equipment roles lean on precision design and controls.'
},
{
  id: 'biomedical', name: 'Biomedical Devices',
  blurb: 'Implants, surgical tools, prosthetics and diagnostic equipment. Large medical center in Houston.',
  master: ['MEEN 368', 'MEEN 360', 'MEEN 223', 'MEEN 364', 'MEEN 401', 'STAT 211'],
  electives: ['MEEN 440', 'MEEN 445', 'MEEN 455', 'MEEN 444', 'MEEN 433'],
  skills: ['Design controls (FDA 21 CFR 820 / ISO 13485)', 'Biomaterials', 'Plastic part design', 'Verification testing', 'Risk analysis (ISO 14971)'],
  software: ['SolidWorks', 'Abaqus or ANSYS', 'Minitab'],
  certs: ['FE exam (optional)', 'Regulatory training is learned on the job'],
  employers: ['Medtronic', 'Stryker', 'Abbott', 'Johnson & Johnson MedTech', 'Intuitive Surgical', 'Texas Medical Center startups'],
  projects: ['Prosthetic or assistive device design', 'Biomechanics research lab', 'Design verification test plan'],
  note: 'Consider a biomedical engineering minor or graduate degree if you want to work on implants or tissue mechanics.'
},
{
  id: 'simulation', name: 'Simulation, Data & Computational Engineering',
  blurb: 'FEA, CFD, digital twins and ML-driven engineering. Works across every industry above.',
  master: ['MEEN 357', 'MEEN 368', 'MEEN 344', 'MEEN 461', 'STAT 211', 'MATH 308'],
  electives: ['MEEN 444', 'MEEN 442', 'MEEN 423', 'MEEN 431', 'MEEN 434'],
  skills: ['Numerical methods', 'Verification and validation', 'Python', 'Linear algebra', 'Statistics and ML'],
  software: ['ANSYS', 'Abaqus', 'STAR-CCM+ or Fluent', 'OpenFOAM', 'Python'],
  certs: ['A portfolio of validated simulations counts most'],
  employers: ['Ansys (Synopsys)', 'Dassault Systèmes', 'Aerospace and automotive CAE groups', 'National labs (Sandia, Los Alamos)'],
  projects: ['Write your own FEA truss solver', 'Validate a CFD drag result against data', 'ML surrogate model for a design problem'],
  note: 'Analyst roles often prefer an MS degree. The Fast Track BS/MS program can help.'
},
{
  id: 'grad', name: 'Graduate School & Research',
  blurb: 'MS or PhD for R&D, faculty, national labs or advanced specialist roles.',
  master: ['MATH 308', 'MEEN 357', 'MEEN 363', 'MEEN 364', 'MEEN 368', 'MEEN 461'],
  electives: ['MEEN 485', 'MEEN 431', 'MEEN 444', 'MEEN 423', 'MEEN 472'],
  skills: ['Research methods', 'Technical writing', 'Advanced math (linear algebra, PDEs)', 'Programming'],
  software: ['Python', 'LaTeX', 'MATLAB', 'Field-specific tools'],
  certs: ['GPA and research letters matter most'],
  employers: ['Universities', 'National labs', 'Corporate R&D (GE Research, Sandia, NASA)'],
  projects: ['Undergraduate research (LAUNCH, directed studies)', 'Conference poster', 'Co-authored paper'],
  note: 'Start research by junior year. Ask about Fast Track to count some graduate courses toward both degrees.'
}
];

/* FE Mechanical exam knowledge areas (NCEES) and the courses that cover them. */
window.MEEN.fe = [
  'Mathematics', 'Probability and Statistics', 'Ethics and Professional Practice', 'Engineering Economics',
  'Electricity and Magnetism', 'Statics', 'Dynamics, Kinematics, and Vibrations', 'Mechanics of Materials',
  'Material Properties and Processing', 'Fluid Mechanics', 'Thermodynamics', 'Heat Transfer',
  'Measurements, Instrumentation, and Controls', 'Mechanical Design and Analysis', 'Computational Tools'
];

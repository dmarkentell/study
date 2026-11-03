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
  electives: ['MEEN 472', 'MEEN 471', 'MEEN 444', 'MEEN 467', 'MEEN 414', 'MEEN 431', 'MEEN 404'],
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
  electives: ['MEEN 432', 'MEEN 410', 'MEEN 433', 'MEEN 444', 'MEEN 441', 'MEEN 496', 'MEEN 404'],
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
  electives: ['MEEN 414', 'MEEN 421', 'MEEN 463', 'MEEN 454', 'MEEN 441', 'MEEN 467', 'MEEN 404'],
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
  electives: ['MEEN 421', 'MEEN 463', 'MEEN 414', 'MEEN 471', 'MEEN 423', 'MEEN 404'],
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
  electives: ['MEEN 437', 'MEEN 421', 'MEEN 463', 'MEEN 435', 'MEEN 423', 'MEEN 404', 'MEEN 441'],
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
  electives: ['MEEN 408', 'MEEN 433', 'MEEN 431', 'MEEN 434', 'MEEN 411', 'MEEN 423', 'MEEN 421'],
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
  electives: ['MEEN 441', 'MEEN 455', 'MEEN 442', 'MEEN 444', 'MEEN 412', 'MEEN 496', 'MEEN 435', 'MEEN 404'],
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
  electives: ['MEEN 412', 'MEEN 476', 'MEEN 444', 'MEEN 433', 'MEEN 421', 'MEEN 423'],
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
  electives: ['MEEN 440', 'MEEN 445', 'MEEN 455', 'MEEN 444', 'MEEN 433', 'MEEN 404', 'MEEN 437'],
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
  electives: ['MEEN 444', 'MEEN 442', 'MEEN 423', 'MEEN 404', 'MEEN 431', 'MEEN 434', 'MEEN 421'],
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
  electives: ['MEEN 485', 'MEEN 404', 'MEEN 431', 'MEEN 444', 'MEEN 423', 'MEEN 472'],
  skills: ['Research methods', 'Technical writing', 'Advanced math (linear algebra, PDEs)', 'Programming'],
  software: ['Python', 'LaTeX', 'MATLAB', 'Field-specific tools'],
  certs: ['GPA and research letters matter most'],
  employers: ['Universities', 'National labs', 'Corporate R&D (GE Research, Sandia, NASA)'],
  projects: ['Undergraduate research (LAUNCH, directed studies)', 'Conference poster', 'Co-authored paper'],
  note: 'Start research by junior year. Ask about Fast Track to count some graduate courses toward both degrees.'
}
];

/* FE Mechanical exam knowledge areas with the approximate number of questions
   in each (110 questions total). Check the current NCEES exam specification. */
window.MEEN.fe = [
  ['Mathematics', 6, 9], ['Probability and Statistics', 4, 6], ['Ethics and Professional Practice', 3, 5],
  ['Engineering Economics', 3, 5], ['Electricity and Magnetism', 5, 8], ['Statics', 9, 14],
  ['Dynamics, Kinematics, and Vibrations', 10, 15], ['Mechanics of Materials', 9, 14],
  ['Material Properties and Processing', 7, 11], ['Fluid Mechanics', 10, 15], ['Thermodynamics', 10, 15],
  ['Heat Transfer', 7, 11], ['Measurements, Instrumentation, and Controls', 5, 8],
  ['Mechanical Design and Analysis', 10, 15]
];

/* Internship and career timeline by semester. Career fair timing is typical
   for large engineering schools; check the Career Center calendar. */
window.MEEN.career = [
  { term: 'First year · Fall', focus: 'Get set up', items: [
    'Build a one-page résumé (education, projects, work, activities) and get it reviewed at the Career Center.',
    'Go to the fall career fair just to practice talking to recruiters. Some companies hire first-year interns.',
    'Join one engineering org (ASME, SAE, AIAA, SWE, SHPE, NSBE) and one project team.',
    'Keep your GPA high. Many internship screens use a 3.0 cutoff.'] },
  { term: 'First year · Spring', focus: 'First experience', items: [
    'Apply to first-year programs (explorer internships, research programs, campus jobs in labs or makerspaces).',
    'Make a LinkedIn profile and connect with recruiters you met.',
    'Start learning CAD on your own (SolidWorks or Fusion 360). It gives you projects for your résumé.'] },
  { term: 'First-year summer', focus: 'Build skills', items: [
    'Any job that shows responsibility counts. Add a personal project (3D-printed part, Arduino build).',
    'Get the SolidWorks CSWA certificate if you have time.'] },
  { term: 'Second year · Fall', focus: 'Main internship search starts', items: [
    'Apply in September and October. Many large companies fill summer internships by November.',
    'Go to the fall career fair with a target list of 15-20 companies.',
    'Practice behavioral interviews with STAR stories from your project team.',
    'Plan your MEEN 399 high impact experience for the coming summer.'] },
  { term: 'Second year · Spring', focus: 'Close the search', items: [
    'Spring career fair: smaller and mid-size companies hire later; keep applying.',
    'Ask professors about undergraduate research if you have no offer by March. Research counts for MEEN 399.',
    'Line up references (professors, supervisors).'] },
  { term: 'Second-year summer', focus: 'MEEN 399 experience', items: [
    'Internship, co-op, research or study abroad.',
    'Keep a weekly log of what you did, with numbers. Turn it into résumé bullets before you leave.',
    'Ask for a return offer conversation at the end.'] },
  { term: 'Third year · Fall', focus: 'Best internship cycle', items: [
    'Junior-year internships most often turn into full-time offers. Apply early (August-October).',
    'Pick a career track and choose electives to match.',
    'Consider a co-op semester if you want deeper experience (it may delay graduation).'] },
  { term: 'Third year · Spring', focus: 'Heaviest semester', items: [
    'Protect study time: this term (MEEN 360, 364, 368, 461 + labs) is the heaviest on the plan.',
    'Finish interviews early so they do not collide with exams.',
    'Ask about the Fast Track BS/MS program if you are thinking about graduate school.'] },
  { term: 'Third-year summer', focus: 'Convert to an offer', items: [
    'Treat the internship as a long interview. Deliver one clear project result.',
    'Many companies extend full-time offers at the end of this summer.'] },
  { term: 'Fourth year · Fall', focus: 'Full-time search', items: [
    'Apply for full-time roles in August-October; compare offers carefully (location, rotation programs, growth).',
    'Graduate school applications are usually due December-January.',
    'Plan your FE exam date (see the FE planner).'] },
  { term: 'Fourth year · Spring', focus: 'Finish strong', items: [
    'Use the capstone (MEEN 402) as your best interview story.',
    'Take the FE exam near graduation while material is fresh.',
    'Spring career fair for anyone still searching; many companies hire in spring too.'] }
];

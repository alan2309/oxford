import type { ExamData } from "./exam-data"

export interface Chapter {
  id: string
  title: string
  questionCount: number
}

export interface Book {
  title: string
  chapters: Chapter[]
}

export const books: Book[] = [
  {
    title: "A320 Tests",
    chapters: [
      { id: "finalexam1", title: "FINAL EXAM", questionCount: 100 },
      { id: "PerformanceLimitations", title: "Performance & Limitations Test", questionCount: 30 },
    ],
  },
  {
    title: "Principles of Flight",
    chapters: [
      { id: "Overview", title: "Overview", questionCount: 26 },
      { id: "atmosphere", title: "The Atmosphere", questionCount: 21 },
      { id: "aerodynamics", title: "Basic Aerodynamics", questionCount: 9 },
      { id: "subsonic", title: "Subsonic", questionCount: 20 },
      { id: "lift", title: "Lift", questionCount: 36 },
      { id: "drag", title: "Drag", questionCount: 32 },
      { id: "stalling", title: "Stalling", questionCount: 37 },
      { id: "highlift", title: "High Lift", questionCount: 14 },
      { id: "airframeContamination", title: "Airframe Contamination", questionCount: 7 },
      { id: "stability", title: "Stability and Control", questionCount: 37 },
      { id: "controls", title: "Controls", questionCount: 44 },
      { id: "flightMech", title: "Flight Mechanics", questionCount: 36 },
      { id: "highspeedflight", title: "High Speed Flight", questionCount: 27 },
      { id: "limitations", title: "Limitations", questionCount: 13 },
      { id: "windshear", title: "Windshear", questionCount: 17 },
      { id: "propellers", title: "Propellers and Gyroscopic Effects", questionCount: 17 },
      { id: "revision", title: "Revision", questionCount: 182 },
    ],
  },
  {
    title: "Airframes and Systems",
    chapters: [
      { id: "fuselageWings", title: "Fuselage, Wings and Stabilizing Surfaces", questionCount: 20 },
      { id: "basicHydraulics", title: "Basic Hydraulics", questionCount: 50 },
      { id: "landingGear", title: "Landing Gear", questionCount: 0 },
      { id: "aircraftWheels", title: "Aircraft Wheels", questionCount: 0 },
      { id: "aircraftTyres", title: "Aircraft Tyres", questionCount: 0 },
      { id: "aircraftBrakes", title: "Aircraft Brakes", questionCount: 24 },
      { id: "flightControlSystems", title: "Flight Control Systems", questionCount: 0 },
      { id: "flightControls", title: "Flight Controls", questionCount: 0 },
      { id: "poweredFlyingControls", title: "Powered Flying Controls", questionCount: 10 },
      { id: "aircraftPneumaticSystems", title: "Aircraft Pneumatic Systems", questionCount: 0 },
      { id: "pressurizationSystems", title: "Pressurization Systems", questionCount: 46 },
      { id: "iceRainProtection", title: "Ice and Rain Protection", questionCount: 0 },
      { id: "aircraftOxygenEquipment", title: "Aircraft Oxygen Equipment", questionCount: 26 },
      { id: "smokeDetection", title: "Smoke Detection", questionCount: 0 },
      { id: "fireDetectionProtection", title: "Fire Detection and Protection", questionCount: 0 },
      { id: "aircraftFuelSystems", title: "Aircraft Fuel Systems", questionCount: 34 },
    ],
  },
  {
    title: "Electrics and Electronics",
    chapters: [
      { id: "dcBasic", title: "DC Electrics - Basic Principles", questionCount: 0 },
      { id: "dcSwitches", title: "DC Electrics - Switches", questionCount: 0 },
      { id: "dcCircuitProtection", title: "DC Electrics - Circuit Protection and Capacitors", questionCount: 0 },
      { id: "dcBatteries", title: "DC Electrics - Batteries", questionCount: 0 },
      { id: "dcMagnetism", title: "DC Electrics - Magnetism", questionCount: 0 },
      { id: "dcGeneratorsAlternators", title: "DC Electrics - Generators and Alternators", questionCount: 0 },
      { id: "dcMotors", title: "DC Electrics - DC Motors", questionCount: 0 },
      { id: "dcAircraftPower", title: "DC Electrics - Aircraft Electrical Power Systems", questionCount: 0 },
      { id: "dcBondingScreening", title: "DC Electrics - Bonding and Screening", questionCount: 0 },
      { id: "dcSpecimenQuestions", title: "DC Electrics - Specimen Questions", questionCount: 0 },
      { id: "acIntro", title: "AC Electrics - Introduction to AC", questionCount: 0 },
      { id: "acAlternators", title: "AC Electrics - Alternators", questionCount: 0 },
      { id: "acPracticalSystems", title: "AC Electrics - Practical Aircraft Systems", questionCount: 0 },
      { id: "acTransformers", title: "AC Electrics - Transformers", questionCount: 0 },
      { id: "acMotors", title: "AC Electrics - AC Motors", questionCount: 0 },
      { id: "acSemiconductors", title: "AC Electrics - Semiconductors", questionCount: 0 },
      { id: "acLogicGates", title: "AC Electrics - Logic Gates", questionCount: 0 },
    ],
  },
  {
    title: "Powerplant",
    chapters: [
      { id: "pistonIntro", title: "Piston Engines - Introduction", questionCount: 0 },
      { id: "pistonGeneral", title: "Piston Engines - General", questionCount: 55 },
      { id: "pistonLubrication", title: "Piston Engines - Lubrication", questionCount: 10 },
      { id: "pistonCooling", title: "Piston Engines - Cooling", questionCount: 6 },
      { id: "pistonIgnition", title: "Piston Engines - Ignition", questionCount: 10 },
      { id: "pistonFuel", title: "Piston Engines - Fuel", questionCount: 16 },
      { id: "pistonMixture", title: "Piston Engines - Mixture", questionCount: 10 },
      { id: "pistonCarburettors", title: "Piston Engines - Carburettors", questionCount: 20 },
      { id: "pistonIcing", title: "Piston Engines - Icing", questionCount: 0 },
      { id: "pistonFuelInjection", title: "Piston Engines - Fuel Injection", questionCount: 11 },
      { id: "pistonPerformance", title: "Piston Engines - Performance and Power Augmentation", questionCount: 62 },
      { id: "pistonPropellers1", title: "Piston Engines - Propellers1", questionCount: 30 },
      { id: "pistonPropellers2", title: "Piston Engines - Propellers2", questionCount: 20 },
      { id: "gasTurbineIntro", title: "Gas Turbines - Introduction", questionCount: 18 },
      { id: "gasTurbineAirInlets", title: "Gas Turbines - Air Inlets", questionCount: 7 },
      { id: "gasTurbineCompressors", title: "Gas Turbines - Compressors", questionCount: 40 },
      { id: "gasTurbineCombustion", title: "Gas Turbines - Combustion Chambers", questionCount: 10 },
      { id: "gasTurbineAssembly", title: "Gas Turbines - The Turbine Assembly", questionCount: 10 },
      { id: "gasTurbineExhaust", title: "Gas Turbines - The Exhaust System", questionCount: 11 },
      { id: "gasTurbineLubrication", title: "Gas Turbines - Lubrication", questionCount: 17 },
      { id: "gasTurbineThrust", title: "Gas Turbines - Thrust", questionCount: 9 },
      { id: "gasTurbineReverseThrust", title: "Gas Turbines - Reverse Thrust", questionCount: 6 },
      { id: "gasTurbineGearboxes", title: "Gas Turbines - Gearboxes and Accessory Drives", questionCount: 2 },
      { id: "gasTurbineIgnition", title: "Gas Turbines - Ignition Systems", questionCount: 8 },
      { id: "gasTurbineAPU", title: "Gas Turbines - Auxiliary Power Units and Engine Starting", questionCount: 20 },
      { id: "gasTurbineFuels", title: "Gas Turbines - Fuels", questionCount: 3 },
      { id: "gasTurbineFuelSystems", title: "Gas Turbines - Fuel Systems", questionCount: 13 },
      { id: "gasTurbineBleedAir", title: "Gas Turbines - Bleed Air", questionCount: 9 },
      { id: "powerplantRevision", title: "Revision Questions", questionCount: 189 },
    ],
  },
]

// Function to get chapter data by ID
export async function getChapterData(chapterId: string): Promise<ExamData | null> {
  try {
    const mod = await import(`./books/chapters/${chapterId}`);
    return mod.examData;
  } catch (error) {
    console.error(`Failed to load chapter data for ${chapterId}:`, error);
    return null;
  }
}

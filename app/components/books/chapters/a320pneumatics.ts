import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - PNEUMATICS",
  questions: [
    {
      id: 1,
      question:
        "Following an ENGINE 1 BLEED FAULT, why can you only use one pack if Wing Anti Ice (WAI) is on?",
      options: [
        "Only one user can be supplied via the X BLEED duct",
        "If you use WAI, the X BLEED valve is automatically closed. Therefore, pack 1 will no longer be supplied",
        "One engine bleed system can either supply the packs or one pack plus WAI.",
      ],
      answer: 2,
    },
    {
      id: 2,
      question:
        "Temperature regulation is achieved by the precooler which regulates and limits the temperature at:",
      options: ["200°C", "150°C"],
      answer: 0,
    },
    {
      id: 3,
      question: "When does the engine bleed valve automatically close?",
      options: [
        "During engine start.",
        "When engine fire push button is pressed.",
        "When APU bleed valve is opened",
        "In all of the above",
      ],
      answer: 3,
    },
    {
      id: 4,
      question:
        "With cross bleed selector in AUTO, engine & APU bleeds selected ON and available the",
      options: [
        "Engine bleed valve open, cross bleed valve opens & APU bleed valve closes.",
        "Engine bleed valve close, cross bleed valve opens & APU bleed valve opens.",
        "Engine bleed valve open, cross bleed valve closes & APU bleed valve opens.",
        "Engine bleed valve close, cross bleed valve closes & APU bleed valve opens.",
      ],
      answer: 1,
    },
    {
      id: 5,
      question: "Failure of one BMC causes.",
      options: [
        "Associated bleed valve closure.",
        "Illumination of Master caution and single chime",
        "The other BMC to take over the monitoring of the bleed system.",
        "All of the above are correct.",
      ],
      answer: 2,
    },
    {
      id: 6,
      question: "Mark the correct statement.",
      options: [
        "Two packs using single engine bleed is not permitted.",
        "With one engine bleed one pack only if wing anti ice is ON",
        "With APU bleed only one pack is permitted.",
        "With one engine bleed fault, do not switch off the associated bleed push button it will open the cross bleed valve.",
      ],
      answer: 1,
    },
    {
      id: 7,
      question: "Each BMC is provided with",
      options: [
        "Bleed pressure, temperature and valves position information.",
        "Ambient pressure and temperature information.",
        "Ambient Temperature and pack valves position information.",
        "Only APU bleed valve position information",
      ],
      answer: 0,
    },
    {
      id: 8,
      question:
        "In case of pressure regulation failure, the over pressure valve (OPV) closed when pressure is :",
      options: [
        "Less than 8 psi",
        "Equal to 44 psi",
        "More than 75 psi",
        "More than 35 psi",
      ],
      answer: 2,
    },
    {
      id: 9,
      question:
        "Overheat of pre cooler outlet temperature is detected when temperature",
      options: [
        "Exceeds 160 Deg. C for more than 60 seconds.",
        "Exceeds 200 Deg. C for more than 55 seconds.",
        "Exceeds 200 Deg. C for more than 55 seconds.",
        "Exceeds 257 Deg. C for more than 55 seconds.",
      ],
      answer: 3,
    },
    {
      id: 10,
      question: "When does the BMC detect overpressure?",
      options: [
        "Above 57-60 psi",
        "Above 85-88 psi",
        "Above 44-47 psi",
        "Above 35-38 psi",
      ],
      answer: 0,
    },
    {
      id: 11,
      question:
        "In cross bleed valve, position disagrees with selected position, the warning are",
      options: [
        "Cross bleed fault light on the Overhead (OVHD panel",
        "Only Master Caution Light",
        "Only single chime",
        "Single chime, Master Caution and Bleed page.",
      ],
      answer: 3,
    },
    {
      id: 12,
      question:
        "With one BMC failure, if there is an over pressure on associated bleed systems, what will happen?",
      options: [
        "ENGINE BLEED FAULT ECAM warning is available.",
        "FAULT lights on the respective bleed switch will illuminate.",
        "Associated bleed valve will close automatically.",
        "All of the above are correct.",
      ],
      answer: 0,
    },
    {
      id: 13,
      question: "BLEED FAULT light comes on if",
      options: [
        "Engine bleed pb is selected to OFF",
        "Engine bleed valve is closed during engine start",
        "The HP valve is closed",
        "Over pressure occurs down a stream of the bleed valve.",
      ],
      answer: 3,
    },
    {
      id: 14,
      question: "The HP valve is automatically closed electrically when",
      options: [
        "In case of low upstream pressure.",
        "Wing anti ice is OFF and upstream HP valve pressure is > 110 psi, with two packs ON",
        "In case of excessive upstream pressure",
        "Intermediate pressure check valve opens.",
      ],
      answer: 1,
    },
    {
      id: 15,
      question:
        "If both detection loops are inoperative in one wing the warnings are",
      options: [
        "Master caution light, Single chime and BLEED page",
        "Master caution light and Single chime only",
        "Only BLEED page is called.",
        "Only MASTER CAUT light",
      ],
      answer: 2,
    },
    {
      id: 16,
      question:
        "Cross bleed selector in AUTO, engine and APU bleed switches are ON. What are the positions of different bleed valves?",
      options: [
        "Engine bleed valve open, cross bleed valve opens & APU bleed valve closes.",
        "Engine bleed valve close, cross bleed valve opens & APU bleed valve opens",
        "Engine bleed valve open, cross bleed valve closes & APU bleed valve opens.",
        "Engine bleed valve close, cross bleed valve closes & APU bleed valve opens",
      ],
      answer: 1,
    },
    {
      id: 17,
      question: "Engine bleed air temperature is controlled by:",
      options: [
        "Engine oil.",
        "A pre-cooler that uses fan air.",
        "Conditioned air from the mixing unit.",
      ],
      answer: 1,
    },
    {
      id: 18,
      question: "If BMC1 fails BMC2 takes over all monitoring functions except:",
      options: [
        "Engine 1 and APU leak detection.",
        "Overheat detection.",
        "Automatic cross-bleed valve control.",
      ],
      answer: 0,
    },
    {
      id: 19,
      question: "Bleed air normally comes from the _______ of the engine.",
      options: [
        "High pressure stage.",
        "Intermediate stage.",
        "Low pressure stage.",
      ],
      answer: 1,
    },
    {
      id: 20,
      question:
        "In flight if the air pressure is insufficient even with the HP valve open:",
      options: [
        "The engine spools up automatically.",
        "Engine power has to be increased by the pilot.",
        "Push the High Pressure P/B on the ovhd panel.",
      ],
      answer: 0,
    },
    {
      id: 21,
      question:
        "The pressure regulating and shutoff valve will close if _______ pressure is _______ or _______ airflow occurs",
      options: [
        "Downstream / low / reverse",
        "Downstream / High / reverse",
        "Upstream / low / reverse",
      ],
      answer: 2,
    },
    {
      id: 22,
      question:
        "The crossbleed valve has two electric motors; one for the automatic mode and one for the manual mode:",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 23,
      question: "The overheat detection system uses a single loop for:",
      options: [
        "The pylons and APU.",
        "The wings and pylons.",
        "The wings and fuselage.",
      ],
      answer: 0,
    },
    {
      id: 24,
      question: "The APU BLEED FAULT light illuminates amber for an APU:",
      options: ["Overheat.", "Malfunction.", "Bleed leak."],
      answer: 2,
    },
    {
      id: 25,
      question:
        "The AUTO position of the X BLEED selector opens the crossbleed if:",
      options: [
        "An engine bleed valve is open.",
        "The APU bleed valve is open.",
        "When engine start is selected.",
      ],
      answer: 1,
    },
    {
      id: 26,
      question:
        "Recirculation fans in the air conditioning system direct filtered cabin air to which area?",
      options: [
        "The pneumatic duct; upstream of the packs.",
        "The avionics compartment.",
        "The Mixing unit.",
      ],
      answer: 2,
    },
    {
      id: 27,
      question: "Temperature regulation for the A320 is controlled by:",
      options: [
        "One zone controller and two pack controllers.",
        "Two pack controllers and the BMC's.",
        "The BMC's",
      ],
      answer: 0,
    },
    {
      id: 28,
      question: "Should both channels fail in a zone controller:",
      options: [
        "Temperature optimization is still available for that zone from another controller.",
        "Temperature optimization and the backup mode are lost.",
        "The pack is not affected.",
      ],
      answer: 1,
    },
    {
      id: 29,
      question: "The lavatory/galley extract fan operates",
      options: [
        "Only on the ground.",
        "Only in flight.",
        "Continuously when electrical power is available.",
      ],
      answer: 2,
    },
    {
      id: 30,
      question:
        "If bleed air is being supplied by the APU or if one pack fails; pack flow will go to what rate?",
      options: ["Low.", "Medium.", "High."],
      answer: 2,
    },
    {
      id: 31,
      question:
        "What happens to the outflow valve when the RAM AIR switch is selected ON?",
      options: [
        "The outflow valve opens immediately.",
        "The outflow valve opens if cabin differential pressure is less than 1 psi.",
        "Normal outflow valve control is maintained.",
      ],
      answer: 1,
    },
    {
      id: 32,
      question:
        "When either the BLOWER or EXTRACT switches are in OVRD; air from the air conditioning system is added to ventilation air.",
      options: ["True.", "False"],
      answer: 0,
    },
    {
      id: 33,
      question: "How many motors are available for the outflow valve?",
      options: ["1", "2", "3"],
      answer: 2,
    },
    {
      id: 34,
      question: "Transfer between the two cabin pressure controllers is:",
      options: [
        "Accomplished with a switch overhead.",
        "Automatic after landing or in case the operating controller fails.",
        "Automatically at each takeoff.",
      ],
      answer: 1,
    },
    {
      id: 35,
      question: "The maximum cabin descent rate is limited in automatic to:",
      options: ["300 ft/min.", "750 ft/min.", "1000 ft/min."],
      answer: 1,
    },
    {
      id: 36,
      question:
        "The third motor (manual) in the pressurization system is activated:",
      options: [
        "Automatically if both automatic motors fail.",
        "In sequence after each landing.",
        "When the CABIN PRESS MODE SEL switch is positioned to MAN.",
      ],
      answer: 2,
    },
    {
      id: 37,
      question:
        "When the cabin vertical speed exceeds _______ fpm; the vertical speed display on ECAM _______.",
      options: ["800 / flashes green", "2800 / flashes green", "1800 / flashes green"],
      answer: 2,
    },
    {
      id: 38,
      question: ":The pneumatic system supplies high pressure air for:",
      options: [
        "Air Conditioning, water pressurization and engine starting",
        "Wing anti-icing.",
        "Hydraulic reservoir pressurization.",
        "All of the above.",
      ],
      answer: 3,
    },
    {
      id: 39,
      question: "High pressure air has ______ sources.",
      options: ["2", "3", "4", "5"],
      answer: 1,
    },
    {
      id: 40,
      question:
        "With both engines operating, an ENG BLEED pb FAULT light will illuminate when:",
      options: [
        "The valve position differs from that of the push button.",
        "The X BLEED selector is selected to SHUT.",
        "The X BLEED selector is selected to OPEN.",
        "The X BLEED selector is selected to OPEN or to SHUT.",
      ],
      answer: 0,
    },
    {
      id: 41,
      question: "Air bleed from the engines is:",
      options: [
        "Not cooled prior to being used by the systems.",
        "Cooled in a heat exchanger by cooling air bleed from Fan section.",
        "Cooled using ambient air.",
        "Only cooled in air conditioning part.",
      ],
      answer: 1,
    },
    {
      id: 42,
      question: "If a Bleed Monitoring Computer (BMC) fails:",
      options: [
        "All systems associated with the failed BMC also fail.",
        "The associated bleed valves close.",
        "The remaining BMC will automatically assume most of the failed BMC's functions.",
      ],
      answer: 2,
    },
    {
      id: 43,
      question:
        "A leak detection system detects any overheating in the vicinity of hot air ducts.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 44,
      question:
        "When engine and wing anti-ice are in use, and a BMC detects a bleed leak:",
      options: [
        "Only the engine anti-ice on the associated side will be lost.",
        "The wing and engine anti-ice on the associated side will be lost.",
        "The wing anti-ice on the associated side will be lost, and the engine anti-ice on the associated side will continue to function.",
      ],
      answer: 2,
    },
    {
      id: 45,
      question:
        "Each bleed valve is electrically operated and controlled pneumatically by its associated BMC.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 46,
      question: "If a BMC detects a bleed leak:",
      options: [
        "The crew must isolate the affected leak.",
        "All valves that could supply pneumatic air to the area of the bleed leak will automatically close.",
        "All pneumatic valves close automatically.",
      ],
      answer: 1,
    },
    {
      id: 47,
      question:
        "If one BMC fails, the adjacent BMC takes over the monitoring of the bleed system to issue the following ECAM warnings if necessary",
      options: [
        "Overpressure",
        "Overtemperature",
        "Wing leak",
        "All of the above.",
      ],
      answer: 3,
    },
    {
      id: 48,
      question:
        "Bleed leak protection for the APU pneumatic duct is provided by:",
      options: [
        "Detection loops associated with BMC #1.",
        "Detection loops associated with BMC #2.",
        "The APU BMC.",
        "All of the above.",
      ],
      answer: 0,
    },
    {
      id: 49,
      question:
        "With the loss of pneumatic system pressure, the engine bleed valve will:",
      options: [
        "Remain in its current position.",
        "Assume the mid position.",
        "Assume the open position.",
        "Assume the closed position.",
      ],
      answer: 3,
    },
    {
      id: 50,
      question: "Pneumatic system operation is controlled and monitored by:",
      options: [
        "One bleed monitoring computer.",
        "Two bleed valve computers.",
        "Two bleed monitoring computers.",
      ],
      answer: 2,
    },
    {
      id: 51,
      question: "ECAM BLEED page: when is the GND symbol displayed?",
      options: [
        "Whenever the aircraft is on the ground.",
        "All the time.",
        "Only when a ground air supply is connected.",
      ],
      answer: 0,
    },
    {
      id: 52,
      question:
        "In automatic mode, the crossbleed valve opens when the system is using APU bleed air. (airline exam question)",
      options: [
        "It closes if the system detects an air leak (except during engine start).",
        "It closes if the system detects an air leak (except in flight).",
        "It closes automatically if the system detects an air leak.",
      ],
      answer: 0,
    },
    {
      id: 53,
      question:
        "What happens when pressure and temperature are not sufficient to supply the corresponding engine bleed valve?",
      options: [
        "HP valve closes.",
        "HP valve opens, IP stage closed.",
        "HP valve opens, IP stage remains in the same configuration.",
      ],
      answer: 2,
    },
    {
      id: 54,
      question:
        "When additional pneumatic air is required for anti-ice, engine starting, or air conditioning:",
      options: [
        "Additional pneumatic air will be requested by the BMC to the FADECs or the APU.",
        "The crew must observe minimum N1 limits.",
        "Both are correct.",
      ],
      answer: 0,
    },
    {
      id: 55,
      question: "When selected, APU bleed air:",
      options: [
        "Will supply bleed air only if the ENG BLEED pb's are selected OFF.",
        "Has priority over engine bleed air.",
        "Will supply bleed air only if the X BLEED selector is selected OPEN.",
        "Does not have priority over engine bleed air.",
      ],
      answer: 1,
    },
    {
      id: 56,
      question:
        "With the APU running, the APU BLEED push button selected ON and the X BLEED selector to AUTO, the APU will:",
      options: [
        "Only supply bleed air to the left side.",
        "Supply pneumatic air to both sides of the aircraft because the pneumatic crossbleed valve automatically opens.",
        "Will supply bleed air only to the left side unless the X BLEED selector is selected OPEN.",
        "Only supply bleed air to the right side.",
      ],
      answer: 1,
    },
    {
      id: 57,
      question: ": Which source controls the crossbleed valve?",
      options: ["Pneumatic.", "Electric."],
      answer: 1,
    },
    {
      id: 58,
      question: "The crew may directly control the following bleed valves:",
      options: [
        "Engine, engine high pressure, APU.",
        "Engine, intermediate pressure, APU.",
        "Engine, APU, crossbleed.",
        "Crossbleed.",
      ],
      answer: 2,
    },
    {
      id: 59,
      question:
        "APU bleed air supplies the pneumatic system if the APU speed is above _____:",
      options: ["80%", "85%", "92%", "95%"],
      answer: 3,
    },
    {
      id: 60,
      question:
        "A check valve near the crossbleed duct protects the APU when bleed air comes from another source:",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 61,
      question:
        "Temperature regulation is achieved by the precooler which regulates and limits the temperature at:",
      options: ["150°C", "85°C", "60°C", "200°C"],
      answer: 3,
    },
    {
      id: 62,
      question: "High pressure air can be supplied by following sources",
      options: [
        "All are correct",
        "APU Bleed",
        "Engine Bleed",
        "External HP source on ground",
      ],
      answer: 0,
    },
    {
      id: 63,
      question: "In engine, Bleed air is extracted from",
      options: [
        "Both statements are correct",
        "7th stage when engine is at high power",
        "10th stage when engine is at low power",
      ],
      answer: 0,
    },
    {
      id: 64,
      question: "Mark the correct statements",
      options: [
        "All are correct",
        "As long as engine 1 starter valve is open, its bleed valve is closed",
        "As long as APU bleed valve is open, both engine bleed valves are closed",
        "Any time there is a leak detection,{except during engine start}, bleed valve will close on that side",
      ],
      answer: 0,
    },
    {
      id: 65,
      question:
        "A leak detection system detects any overheating in the vicinity of hot air ducts",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 66,
      question:
        "When engine and wing anti-ice are in use, and a BMC detects a bleed leak",
      options: [
        "The wing anti ice on the associated side will be lost",
        "Only the engine anti-ice on the associated side will be lost",
        "The wing anti-ice and the engine anti-ice on the associated side will be lost",
      ],
      answer: 0,
    },
    {
      id: 67,
      question: "If a BMC detects a bleed leak",
      options: [
        "All valves that could supply pneumatic air to the area of the bleed leak will automatically close",
        "The crew must isolate the affected leak.",
      ],
      answer: 0,
    },
    {
      id: 68,
      question: "Bleed leak protection for the APU pneumatic duct is provided by",
      options: [
        "Detection loops associated with BMC #1",
        "Detection loops associated with BMC #2",
        "The APU BMC",
        "All of the above",
      ],
      answer: 0,
    },
    {
      id: 69,
      question: "Pneumatic system operation is controlled and monitored by",
      options: [
        "Two bleed monitoring computers",
        "One bleed monitoring computer",
        "Two bleed valve computers",
      ],
      answer: 0,
    },
    {
      id: 70,
      question:
        "With one BMC failure, if there is an over pressure on associated bleed systems, what will happens ?",
      options: [
        "ENGINE BLEED FAULT ECAM warning is available",
        "FAULT lights on the respective bleed switch will illuminate",
        "Associated bleed valve will close automatically.",
        "All of the above are correct",
      ],
      answer: 0,
    },
    {
      id: 71,
      question:
        "ENG 1(2) bleed regulated pressure is abnormal. what indications will you get ?",
      options: [
        "Both (b) and (d) are correct",
        "Engine Bleed Fault light comes ON",
        "Engine Bleed Fault light does not come ON",
        "Single Chime, Master Caution light and BLEED page is called",
      ],
      answer: 0,
    },
    {
      id: 72,
      question: "Regarding bleed system which statement is correct?",
      options: [
        "APU bleed has priority over Engine 1 & 2",
        "Engine 1 bleed valve closes when BMC 1 fails",
        "Due to BMC 2 fault, Right wing bleed leakage detection is lost",
        "A & B are correct.",
      ],
      answer: 0,
    },
    {
      id: 73,
      question: "When does the APU Bleed FAULT light come ON",
      options: [
        "APU bleed FAULT",
        "APU bleed LEAK",
        "Left wing leak",
        "In all the above",
      ],
      answer: 1,
    },
    {
      id: 74,
      question: "What happens in case of BMC2 fault?",
      options: [
        "Engine 2 bleed leak warning is lost.",
        "RH wing bleed leakage detection is lost.",
        "Engine 2 bleed valve automatic closure is not available",
        "A and C are correct.",
      ],
      answer: 3,
    },
    {
      id: 75,
      question: "The pneumatic system supplies high pressure air for ?",
      options: [
        "Hydraulic reservoirs are also pressurized",
        "Air Conditioning, water pressurization and engine starting",
        "Wing anti-icing",
        "All of the above",
      ],
      answer: 3,
    },
  ],
};
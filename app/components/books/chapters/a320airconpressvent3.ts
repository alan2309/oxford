import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "REVISION TEST 1 AIRCON/PRES/VENT PNEUMATIC / APU",
  questions: [
    {
      id: 1,
      question: "Hot air fault light illuminates on the air conditioning panel,",
      options: [
        "The hot air press. reg. valve opens and the trim air valves close.",
        "The hot air press. reg. valve closes and the trim air valves open.",
        "The hot air press. reg. valve closes and the trim air valves close.",
        "The hot air press. reg. valve opens and the trim air valves open.",
      ],
      answer: 2,
    },
    {
      id: 2,
      question:
        "In normal flight in closed circuit configuration, the avionics ventilation system controls the temperature of the cooling air by:",
      options: [
        "Adding airconditioned air to the flow",
        "Extracting air overboard",
        "Adding avionics bay air",
        "Passing air through a skin heat exchanger",
      ],
      answer: 3,
    },
    {
      id: 3,
      question: "Pack controller, primary channel failure.",
      options: [
        "The secondary channel operates as a backup mode and regulation is not optimized",
        "The secondary computer takes over (all functions as normal)",
        "Pack is lost",
        "Pack outlet temperature is controlled at 15 deg C",
      ],
      answer: 0,
    },
    {
      id: 4,
      question: "Pack controller, primary and secondary channel failure",
      options: [
        "Pack outlet temperature is controlled to between 5 and 30 deg C by the anti-ice valve",
        "The pack is closed",
        "The packs deliver a fixed temperature of 20 deg C",
      ],
      answer: 0,
    },
    {
      id: 5,
      question: "Hot air pressure regulating valve:",
      options: [
        "Regulates the pressure of hot air tapped upstream of the packs",
        "Is spring loaded open in the absence of air",
        "Opens automatically in case of duct overheat",
        "Opens automatically if the cabin trim air valve fails",
      ],
      answer: 0,
    },
    {
      id: 6,
      question:
        "Engine flow demand, when the heating or cooling demand in one zone cannot be satisfied:",
      options: [
        "The minimum idle must be increased manually",
        "The minimum idle is increased automatically",
        "In any case, flight idle is sufficient",
        "The APU must be used to supply additional air.",
      ],
      answer: 1,
    },
    {
      id: 7,
      question:
        "Under what conditions should the pack flow controller be set to LO?",
      options: [
        "With a low passenger load (less than 141 ) to reduce bleed air demand and improve fuel efficiency.",
        "With a low passenger load to increase cabin temperature",
        "With a high passenger load to reduce cabin temperature",
        "In cold conditions to achieve a higher cabin temperature range",
      ],
      answer: 0,
    },
    {
      id: 8,
      question:
        "What computers control the cabin and cockpit conditioned air?",
      options: [
        "Two zone controllers that pass information and requests to two pack controllers.",
        "Two pack controllers that pass information and requests to three zone controllers.",
        "Three zone controllers that pass information and instructions to two pack controllers for three zones.",
        "One zone controller that passes information and instructions to two pack controllers for three zones.",
      ],
      answer: 3,
    },
    {
      id: 9,
      question:
        "Under what conditions should the pack flow controller be set to HI?",
      options: [
        "In cold conditions to achieve a higher cabin temperature range.",
        "With a low passenger load to increase cabin air flow.",
        "With a high passenger load in hot conditions in order to help reduce the cabin temperature.",
      ],
      answer: 2,
    },
    {
      id: 10,
      question:
        "With the pressurization system in the automatic mode, which valves are closed when the ditching push button is selected on?",
      options: [
        "All valves below the water line.",
        "APU inlet.",
        "The engine bleed valves.",
        "Only the avionics cooling valves.",
      ],
      answer: 0,
    },
    {
      id: 11,
      question: "The HOT AIR valve push button controls:",
      options: [
        "The trim air valve.",
        "The hot air manifold.",
        "The engine bleed valves.",
        "The pack flow control valves.",
      ],
      answer: 1,
    },
    {
      id: 12,
      question:
        "Avionics ventilation system indications may be found on which ECAM page(s)?",
      options: [
        "Only the BLEED page.",
        "Only the CAB PRESS page.",
        "The in-flight ECAM cruise page.",
        "The in-flight ECAM cruise page and the CAB PRESS pages.",
      ],
      answer: 1,
    },
    {
      id: 13,
      question:
        "When APU is supplying the packs, the pack controller sends a demand signal to increase airflow when a zone temperature cannot be satisfied. This signal is sent to the:",
      options: [
        "Pack Ram Air Inlet Flap.",
        "APU ECB.",
        "Pack Outflow Control Valve.",
        "Engine interface units EIU's",
      ],
      answer: 1,
    },
    {
      id: 14,
      question:
        "In case of zone controller primary and secondary channel failure, what temperatures are maintained by Packs 1 and 2?",
      options: [
        "15 deg C for both.",
        "25 deg C both.",
        "20 deg C for Pack one and 10 deg C for Pack two",
        "24 deg C for Pack one and 15 deg C for Pack two.",
      ],
      answer: 2,
    },
    {
      id: 15,
      question:
        "Placing the avionics ventilation system in the smoke configuration:",
      options: [
        "Opens the #1 GLC.",
        "Opens the cargo under-floor valve.",
        "Opens the #2 GLC.",
        "De-energizes the blower fan, extract fan runs, and opens the air conditioning extract valves.",
      ],
      answer: 3,
    },
    {
      id: 16,
      question: "How can you change controllers during flight?",
      options: [
        "Cycle the LDG ELEV AUTO knob out of the AUTO position then back to AUTO.",
        "Cycle the CABIN PRESS MODE SEL pushbutton to the MAN position then back to AUTO.",
        "Cycle the cabin pressurization MAN V/S CTL switch",
      ],
      answer: 1,
    },
    {
      id: 17,
      question: "Pressurization indications are found on which ECAM page(s)?",
      options: [
        "BLEED page.",
        "Only on the CAB PRESS page.",
        "The in-flight ECAM cruise page and the CAB PRESS page.",
        "On the CAB PRESS & BLEED pages.",
      ],
      answer: 2,
    },
    {
      id: 18,
      question: ":How many outflow valves are there?",
      options: [
        "One valve with one door",
        "One valve with two doors.",
        "Two valves with only one door visible.",
        "Two valves (one main + one back-up) with only two doors visible.",
      ],
      answer: 1,
    },
    {
      id: 19,
      question:
        "If you select a position other than the AUTO detent on the LDG ELEV AUTO selector, how can you see the actual landing elevation value?",
      options: [
        "On the ECAM CRUISE",
        "On the PRESS page",
        "On the ECAM CRUISE or the PRESS page.",
      ],
      answer: 2,
    },
    {
      id: 20,
      question: "The purpose of the safety valve is to avoid:",
      options: [
        "Excessive positive pressure differential.",
        "Excessive negative differential.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 21,
      question: "The mixing unit is connected to:",
      options: [
        "Packs, cabin air, emergency ram air inlet and LP ground connector",
        "Packs, emergency ram air inlet and LP ground connector",
        "Packs and cabin air",
        "Pack 1 and pack 2 only.",
      ],
      answer: 0,
    },
    {
      id: 22,
      question: "Cond. Zone regulator fault (primary channel failed):",
      options: [
        "Cabin zone is at fixed temperature",
        "Packs are at fixed temperature",
        "Secondary channel operates as back up and operation is as normal",
        "The packs deliver a fixed temperature. 20 deg C for pack one and 10 deg C for pack two",
      ],
      answer: 0,
    },
    {
      id: 23,
      question: "Temperature control is automatic and is regulated by:",
      options: [
        "Zone controllers",
        "Pack 1 and 2 controllers",
        "Zone controllers, pack 1 and 2 controllers",
        "The pack flow control valves only.",
      ],
      answer: 2,
    },
    {
      id: 24,
      question:
        "If a pack controller fails (primary and secondary channel failure), the pack outlet air temperature is controlled by:",
      options: [
        "Ram Air Valve",
        "Hot air pressure regulating valve",
        "Anti-ice valve",
        "Trim air valve.",
      ],
      answer: 2,
    },
    {
      id: 25,
      question:
        "On ECAM Cab. press page, the outflow valve indicator changes to amber if:",
      options: [
        "It is fully closed",
        "It is fully open on the ground",
        "It is fully open in flight",
        "It is not fully open on the ground",
      ],
      answer: 2,
    },
    {
      id: 26,
      question:
        "After the engine start, the Pack Flow Control Valves automatically open, however on the ground, reopening of the valves is delayed for _____ after the first engine start.",
      options: ["30 seconds", "45 seconds", "50 seconds", "60 seconds"],
      answer: 0,
    },
    {
      id: 27,
      question:
        "Position of TRIM Air valves and hot air pressure regulating valves are indicated in",
      options: [
        "COND page.",
        "Bleed page",
        "COND & BLEED page",
        "COND and CAB PRESS page",
      ],
      answer: 0,
    },
    {
      id: 28,
      question: "How are the Ram Air Inlet and outlets controlled.",
      options: [
        "Open during takeoff and landing.",
        "Closed during takeoff, open during landing till the speed reaches 70 kts",
        "Closed during takeoff and open when the speed reaches below 70 kts during landing",
        "Closed during landing when the speed is less than 70 kts.",
      ],
      answer: 2,
    },
    {
      id: 29,
      question:
        "Even when LO is selected on the PACK FLOW selector, the pack flow is automatically selected NORM in case of:",
      options: [
        "Single pack operation.",
        "APU supplying bleed air.",
        "Cooling demand not being met.",
        "All the above.",
      ],
      answer: 2,
    },
    {
      id: 30,
      question:
        "When LO is selected on the PACK FLOW selector, the pack flow is automatically selected HI in case of:",
      options: [
        "APU supplying bleed air.",
        "abnormally hot and humid conditions",
        "Number of passengers in the cabin higher than 115.",
        "Both, (A) and (B).",
      ],
      answer: 0,
    },
    {
      id: 31,
      question:
        "When only one pack is operating and Pack selector is at LO. What is the flow.",
      options: [
        "80% of normal flow.",
        "150% of normal flow.",
        "Normal flow",
        "120% of normal flow.",
      ],
      answer: 3,
    },
    {
      id: 32,
      question: "What happens when ditching push button is selected to ON?",
      options: [
        "A. Safety valves are driven to full OPEN.",
        "B. Pack flow control valves, out flow valve, skin air inlet an extract valves and Emer. Ram Air inlet valve close.",
        "C. Only pack flow control valve and Emer. Ram Air Inlet valve close.",
        "D. As in (B) but outflow valve will close only if press mode selector is in AUTO.",
      ],
      answer: 3,
    },
    {
      id: 33,
      question:
        "By increasing cabin altitude in flight, what happens to Cabin Diff Pressure?",
      options: [
        "It will increase.",
        "It will decrease.",
        "There will be no change.",
      ],
      answer: 1,
    },
    {
      id: 34,
      question:
        "When will Auto transfer from one CPC to another controller occurs.",
      options: [
        "A. At each landing initiated 70 sec after each landing.",
        "B. In case of failure of the operating system.",
        "C. If FMGS fails",
        "D. (A) and (B) are correct",
      ],
      answer: 3,
    },
    {
      id: 35,
      question:
        "In automatic pressure control mode what will be the cabin altitude.",
      options: [
        "Always 8000 feet.",
        "It is highest of the value of cabin altitude reached at aircraft level off and landing elevation",
        "Always the landing elevation.",
        "It is the cabin altitude reached at the time of aircraft level off.",
      ],
      answer: 1,
    },
    {
      id: 36,
      question: "What happens in Auto Pr. Control in the Abort mode.",
      options: [
        "Take off is Aborted pre-pressurization is aborted.",
        "If a/c returns to take off field before reaching a certain altitude, cabin altitude is controlled to T/O field.",
        "If a/c returns to take off field before reaching a certain altitude, cabin altitude is maintained constant.",
        "At touch down cabin altitude is same as a/c altitude.",
      ],
      answer: 1,
    },
    {
      id: 37,
      question:
        "In cruise, you find cabin V/S is fluctuating up and down and is uncomforting to you as well as to pax. You want to switchover the Cabin Pressure Controller and it is done by:",
      options: [
        "Selecting the Cabin Pressure MODE SEL p/b to MAN and then back to AUTO.",
        "As in (A) but the MODE SEL should be left in MAN for at least 10 sec",
        "The switch over may be carried out not more than twice in a flight.",
        "Both (A) and (C) are correct",
      ],
      answer: 1,
    },
    {
      id: 38,
      question:
        "If landing field elevation from FMGC is not available, you have to set manually by pulling the LDG ELEV Sel. The cabin altitude is …..",
      options: [
        "Only controllable manually through the MAN V/S CTL sw.",
        "Still controlled automatically through the out flow valve.",
        "Still controlled normally through the safety valve",
        "Only controllable manually through the LDG ELEV selector.",
      ],
      answer: 1,
    },
    {
      id: 39,
      question: "In manual pressure control mode",
      options: [
        "ECAM indications are not available",
        "Outflow valve position signal is transmitted via manual backup section of controller No.1",
        "Outflow valve position signal is transmitted via back up section of controller No. 2",
        "Outflow valve is set to full open always.",
      ],
      answer: 1,
    },
    {
      id: 40,
      question: "What happens when you press Extract P/B to OVRD when in heavy rain on ground?\n\n1. Extract fan stops.\n2. Extract fan keeps running.\n3. Air-conditioning air is added for ventilation.\n4. Avionics ventilation system goes into Closed Config.",
      options: ["1,3,4", "2,3,4", "2,4", "1,4"],
      answer: 1,
    },
    {
      id: 41,
      question:
        "For the aircraft to be in the normal operation, open circuit configuration ,what conditions must be satisfied ?",
      options: [
        "The aircraft must be on ground ,with the thrust lever not at T/O and skin temp. above a given threshold.",
        "The aircraft must be in the air ,with the thrust lever not at T/O and skin temp. below the given thresh hold.",
        "The aircraft must be on ground ,with the thrust lever at T/O and skin temp. above a given threshold.",
      ],
      answer: 0,
    },
    {
      id: 42,
      question:
        "If both blower and extract p/b switches are set to OVRD, during smoke drill, the avionic equipment air is ……",
      options: [
        "Taken from atmosphere and thrown overboard.",
        "Taken from atmosphere and circulated through skin heat exchanger.",
        "Taken from air conditioning bay and thrown overboard .",
        "Taken from air conditioning bay and circulated through skin heat exchanger.",
      ],
      answer: 2,
    },
    {
      id: 43,
      question:
        "On ground with engines stopped, when will an external horn be trigged.",
      options: [
        "If avionic ventilation blower pressure is low.",
        "If DUCT OVHT",
        "Extract fan extract pressure is low.",
        "In all the above cases.",
      ],
      answer: 3,
    },
    {
      id: 44,
      question: 'Hot air "FAULT" light illuminates on the air conditioning panel.',
      options: [
        "Duct over-pressure is detected.",
        "Duct overheat is detected.",
        "Any of the cabin trim air valve has failed, stuck in open",
        "All of the above conditions.",
      ],
      answer: 1,
    },
    {
      id: 45,
      question:
        "Which of the following is a guarded switch on the overhead air conditioning panel?",
      options: [
        "Engine 2 Bleed",
        "Engine 1 Bleed",
        "APU Bleed",
        "RAM air",
      ],
      answer: 3,
    },
    {
      id: 46,
      question: "How do you enter semi-automatic mode?",
      options: [
        "Can't be entered by pilot",
        "Change the CPC",
        "Change the mode selector",
        "Change the landing elevation",
      ],
      answer: 3,
    },
    {
      id: 47,
      question: "What is the maximum rate of descend that the CPC will maintain?",
      options: ["750", "650", "500", "850"],
      answer: 0,
    },
    {
      id: 48,
      question: "What happen if both lanes of the ACSC fail?",
      options: [
        "The related pack is lost, and the hot air pressure regulating valve and associated trim air valves close",
        ". No effect, the third lane takes over",
        "No effect, the second ACSC takes over",
        "It's impossible that both lanes fail",
      ],
      answer: 0,
    },
    {
      id: 49,
      question:
        "The cabin pressurization system has four general functions, which one is not true?",
      options: [
        "Ground function : Fully opens the outflow valve on ground",
        "Pre pressurization : During take-off, increases cabin pressure to avoid a surge in cabin pressure during rotation",
        "Pressurization in flight : Adjusts cabin altitude, and rate of change to provide passengers with a comfortable flight",
        "Depressurization : After touchdown, gradually releases residual cabin overpressure before the ground function fully opens the outflow valve",
        "Submersible : When ditching, maintain cabin pressure to sink easy",
      ],
      answer: 4,
    },
    {
      id: 50,
      question:
        "The ventilation system includes ventilation for 3 things, which one is not correct?",
      options: [
        "The avionics, controlled by the avionics equipment ventilation controller (AEVC)",
        "The battery",
        "The lavatories and galleys",
        "Cargo compartments",
      ],
      answer: 3,
    },
    {
      id: 51,
      question:
        "What happens when the ditching pb is pressed on the ground with doors closed, and LP ground cart connected?",
      options: [
        "ecam warning",
        "outflow valve open automatically",
        "differential pressure builds up",
        "external horn sounds",
      ],
      answer: 2,
    },
    {
      id: 52,
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
      id: 53,
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
      id: 54,
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
      id: 55,
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
      id: 56,
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
      id: 57,
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
      id: 58,
      question:
        "If BMC1 fails BMC2 takes over all monitoring functions except:",
      options: [
        "Engine 1 and APU leak detection.",
        "Overheat detection.",
        "Automatic cross-bleed valve control.",
      ],
      answer: 0,
    },
    {
      id: 59,
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
      id: 60,
      question: "The overheat detection system uses a single loop for:",
      options: [
        "The pylons and APU.",
        "The wings and pylons.",
        "The wings and fuselage.",
      ],
      answer: 0,
    },
    {
      id: 61,
      question: "The APU BLEED FAULT light illuminates amber for an APU:",
      options: ["Overheat.", "Malfunction.", "Bleed leak."],
      answer: 2,
    },
    {
      id: 62,
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
      id: 63,
      question: "The lavatory/galley extract fan operates",
      options: [
        "Only on the ground.",
        "Only in flight.",
        "Continuously when electrical power is available.",
      ],
      answer: 2,
    },
    {
      id: 64,
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
      id: 65,
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
      id: 66,
      question: "Bleed leak protection for the APU pneumatic duct is provided by:",
      options: [
        "Detection loops associated with BMC #1.",
        "Detection loops associated with BMC #2.",
        "The APU BMC.",
        "All of the above.",
      ],
      answer: 0,
    },
    {
      id: 67,
      question: "ECAM BLEED page: when is the GND symbol displayed?",
      options: [
        "Whenever the aircraft is on the ground.",
        "All the time.",
        "Only when a ground air supply is connected.",
      ],
      answer: 0,
    },
    {
      id: 68,
      question:
        "In automatic mode, the crossbleed valve opens when the system is using APU bleed air.",
      options: [
        "It closes if the system detects an air leak (except during engine start).",
        "It closes if the system detects an air leak (except in flight).",
        "It closes automatically if the system detects an air leak.",
      ],
      answer: 0,
    },
    {
      id: 69,
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
      id: 70,
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
      id: 71,
      question: "Regarding bleed system, which statement is correct?",
      options: [
        "APU bleed has priority over Engine 1 & 2",
        "Engine 1 bleed valve closes when BMC 1 fails",
        "Due to BMC 2 fault, Right wing bleed leakage detection is lost",
        "A & B are correct.",
      ],
      answer: 0,
    },
    {
      id: 72,
      question: "Which Computer is responsible for monitoring APU Bleed?",
      options: ["BMC 1", "BMC 2", "Both BMC 1 and 2", "ECB"],
      answer: 3,
    },
    {
      id: 73,
      question: "How is Manual mode of outflow valve controlled?",
      options: [
        "Via CPC 2",
        "Via back up section of CPC 1",
        "By operating CPC",
        "Via ACSC 1",
      ],
      answer: 1,
    },
    {
      id: 74,
      question:
        "When is Avionics Ventilation supplied by air from Air conditioning?",
      options: [
        "Open Configuration",
        "Intermediate configuration",
        "Smoke Congifuration",
        "As in (C) or in case of Blower Fault or Extract Fault",
      ],
      answer: 3,
    },
    {
      id: 75,
      question: "Which zone is not pressurised in Aircraft?",
      options: [
        "Cabin",
        "Avionics bay",
        "Radome",
        "As in (C) and Cargo Compartment",
      ],
      answer: 2,
    },
    {
      id: 76,
      question: "Which configuration is likely when Bleed Valve is Closed?",
      options: ["Hp valve closes", "Hp valve opens", "LP valve opens", "LP valve closes"],
      answer: 0,
    },
    {
      id: 77,
      question: "In which situation is open configuration possible?",
      options: [
        "Only on ground.",
        "Both In flight and on ground.",
        "Only in flight",
        "In Smoke Configuration",
      ],
      answer: 0,
    },
    {
      id: 78,
      question:
        "what is the effect on pressurization, If skin air inlet valve opens in flight ?",
      options: [
        "Loss of pressurization",
        "Blower and extract needs to be placed in override to close valve, to preventO Depressurisation",
        "Pressurisation is not lost and no action is required",
        "Both a and b",
      ],
      answer: 2,
    },
    {
      id: 79,
      question:
        "what happens to bleed pressure, after setting take off power and duringclimb phase ?",
      options: [
        "bleed pressure never fluctuates",
        "Bleed pressure fluctuates between 75 psi and 100 psi",
        "It fluctuates between 38 psi and 56 psi",
        "It never fluctuates upto FL 100 and thereafter it may fluctuate",
      ],
      answer: 2,
    },
    {
      id: 80,
      question: "How is Safety valve controlled?",
      options: [
        "Using Man toggle switch",
        "Using Ditching PB",
        "Using Landing Elevation Knob",
        "Its never controlled manually and is always automatic",
      ],
      answer: 3,
    },
    {
      id: 81,
      question: "When does Cabin pressurization indication on ECAM turn red ?",
      options: ["14000ft", "8000ft", "9550ft"],
      answer: 2,
    },
    {
      id: 82,
      question:
        "If both packs are off, can you provide conditioned air to aircraft?",
      options: [
        "Yes, using APU",
        "Yes, using Ram Air",
        "Yes, Using LP ground connection",
        "No, as Conditioned Air can only be provided using PACK air conditioning Kit",
      ],
      answer: 2,
    },
    {
      id: 83,
      question: "Can APU be started when the RAT is stalled?",
      options: [
        "Yes, via AC static inverter bus",
        "Yes, via AC essential bus",
        "Yes, via gravity fuel feeding",
        "No, as APU requires AC power to start.",
      ],
      answer: 0,
    },
    {
      id: 84,
      question: "What happens if APU Fire test is performed while APU is running?",
      options: [
        "APU performs a Auto Shutdown",
        "APU keeps operating normally",
        "APU does an Auto Shutdown and fire extinguishers are discharged",
        "None of the above",
      ],
      answer: 1,
    },
    {
      id: 85,
      question: "Below which altitude, can APU be started on batteries only?",
      options: ["41000 feet", "25000 feel", "22500 feet", "20000 feet"],
      answer: 1,
    },
    {
      id: 86,
      question: "Below what altitude can APU bleed be utilised?",
      options: ["41000 feet", "25000 feet", "22500 feet", "None of. the. above"],
      answer: 2,
    },
    {
      id: 87,
      question: "Normally, how is fuel to the APU supplied?",
      options: [
        "Right side of the A320 Fuel sytem",
        "APU has an independent fuel pump which supplies fuel normally",
        "Left side of the A320 fuel system",
        "Only Center Tanks supply fuel to APU",
      ],
      answer: 2,
    },
    {
      id: 88,
      question: "When is APU fuel pump operational",
      options: [
        "When fuel pressure from pumps is high.",
        "When fuel pressure from pumps is low",
        "When Aircraft is in Emer Elec Config",
        "Both A and C",
      ],
      answer: 1,
    },
    {
      id: 89,
      question: "When does APU bleed fault illuminate?",
      options: [
        "APU Bleed leak",
        "Engine 1 bleed leak",
        "Crossbleed Valve not open, when APU bleed is supplying",
        "All of the above",
      ],
      answer: 0,
    },
    {
      id: 90,
      question:
        "If Low oil level of APU is displayed on ECAM inflight, what action has to be performed?",
      options: [
        "Divert immediately",
        "Continue to destination",
        "APU Can be operated normally upto 10 hrs",
        "APU is unserviceable until Oil is replaced.",
      ],
      answer: 2,
    },
    {
      id: 91,
      question: "which computer monitors APU Bleed?",
      options: [
        "BMC2",
        "BMC1, if BMC2 is inoperative",
        "BMC1 only",
        "ECB",
      ],
      answer: 3,
    },
    {
      id: 92,
      question:
        "what are indications in the cockpit in case of APU Auto(emer) shutdown?",
      options: [
        "APU fault light in master switch",
        "APU fire PB lights up red",
        "Avail light extinguishes",
        "All of the above",
      ],
      answer: 3,
    },
    {
      id: 93,
      question:
        "What is APU fuel consumption with packs on and APU generator running?",
      options: ["50 Kg/ hour", "200 Kg/hour", "130 Kg/hour", "175 Kg/Hour"],
      answer: 2,
    },
    {
      id: 94,
      question:
        "What happens when APU is started with Batteries in off position andGround power connected?",
      options: [
        "ECB shuts down APU as DC BAT BUS is not powered",
        "APU starts normally but APU Bleed is not available",
        "APU starts normally and both Electrical and Bleed supply is available",
        "None of the Above",
      ],
      answer: 0,
    },
    {
      id: 95,
      question: "When does APU perform an emergency shutddown?",
      options: [
        "When APU fire is detected on Ground",
        "When Flight Crew presses the Red APU Fire Pushbutton",
        "When batteries are in off position, when only batteries are supplying power",
        "Both A and B",
      ],
      answer: 3,
    },
    {
      id: 96,
      question: "When the APU MASTER SW is selected ON:",
      options: [
        "The APU computer automatically completes a self-test, opens the air intake flap and supplies fuel pressure.",
        "The APU computer automatically starts the APU.",
        "Connects the APU generator to the aircraft electrical system.",
        "The APU door opens.",
      ],
      answer: 0,
    },
    {
      id: 97,
      question: "The APU MASTER SW FAULT light will illuminate:",
      options: [
        "When APU low oil pressure is detected.",
        "When an automatic shutdown of the APU occurs.",
        "For an APU overheat or APU fire.",
        "If the batteries are selected OFF while the APU is operating.",
      ],
      answer: 1,
    },
    {
      id: 98,
      question: "With battery power only, what would an APU fire test look like?",
      options: [
        "APU FIRE pb illuminated and SQUIB + DISCH lights illuminated",
        "APU FIRE pb illuminated",
        "SQUIB + DISCH lights illuminated",
      ],
      answer: 0,
    },
    {
      id: 99,
      question: "The APU system page will appear on the ECAM:",
      options: [
        "When selected by the crew.",
        "Automatically whenever the APU is started and AC power is available. removed 10sec after N reaches 95%",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 100,
      question:
        "If APU bleed was used, after a manual shut down sequence, the APU:",
      options: [
        "Stops immediately",
        "Keeps running for 60 to 120 s",
        "Keeps running for 2 minutes",
        "Keeps running for 30 seconds",
      ],
      answer: 1,
    },
  ],
};
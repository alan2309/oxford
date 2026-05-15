import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "AIRCON/PRESS/VENT -03",
  questions: [
    {
      id: 1,
      question: "01: Conditioned air is distributed to:",
      options: [
        "A: Cockpit, cargo bays and cabin",
        "B: Cockpit, fwd and aft cabins",
        "C: Cockpit, avionics bay and cabin",
        "D: Cockpit, cabin and holds 1 and 2 only",
      ],
      answer: 1,
    },
    {
      id: 2,
      question: "02: Hot air fault light illuminates on the air conditioning panel,",
      options: [
        "A: The hot air press. reg. valve opens and the trim air valves close.",
        "B: The hot air press. reg. valve closes and the trim air valves open.",
        "C: The hot air press. reg. valve closes and the trim air valves close.",
        "D: The hot air press. reg. valve opens and the trim air valves open.",
      ],
      answer: 2,
    },
    {
      id: 3,
      question:
        "03:Does the trim air provide the warm air or the cold air to the air conditioning system?",
      options: ["A: Cold air", "B: Warm air"],
      answer: 1,
    },
    {
      id: 4,
      question:
        "04: In case of zone controller primary and secondary channel failure, what temperatures are maintained by pack one and pack two?",
      options: [
        "A: 15 deg.C both",
        "B: 25 deg.C both",
        "C: 20 deg.C for pack one and 10 deg.C for pack two",
        "D: 24 deg.C for pack one and 15 deg.C for pack two",
      ],
      answer: 2,
    },
    {
      id: 5,
      question:
        "05: In normal flight in closed circuit configuration, the avionics ventilation system controls the temperature of the cooling air by:",
      options: [
        "A:'Adding air conditioned air to the flow",
        "B: Extracting air overboard",
        "C: Adding avionics bay air",
        "D: Passing air through a skin heat exchanger",
      ],
      answer: 3,
    },
    {
      id: 6,
      question:
        "To enable Ram air to the mixture unit, The Ram air switch should be used:",
      options: [
        "A: At any time",
        "B: Only when differential pressure is less than 1 psi.",
        "C: When pressure is greater than 1 psi diff.",
        "D: Only after outflow valve is fully opened",
      ],
      answer: 1,
    },
    {
      id: 7,
      question: "07: Pack controller, primary channel failure.",
      options: [
        "A: The secondary computer operates as a backup mode and regulation is not optimized",
        "B: The secondary computer takes over (all functions as normal)",
        "C: Pack is lost",
        "D: Pack outlet temperature is controlled at 15 deg.C",
      ],
      answer: 0,
    },
    {
      id: 8,
      question: "08: Pack controller, secondary channel failure",
      options: [
        "A:No effect on pack regulation backup mode is lost",
        "B: Pack is lost",
        "C: No effect (all modes still available)",
        "D: Pack outlet temperature is controlled at 15 deg.C'",
      ],
      answer: 0,
    },
    {
      id: 9,
      question: "009: Pack controller, primary and secondary channel failure",
      options: [
        "A: Pack outlet temperature is controlled to between 5 and 30 deg.C by the anti-ice valve",
        "B: The pack is closed",
        "C: The packs deliver a fixed temperature of 20 deg.C",
      ],
      answer: 0,
    },
    {
      id: 10,
      question: "10: Hot air press. reg. valve failed open:",
      options: [
        "A: Optimized regulation is lost",
        "B: The temperature stays at the value selected",
        "C: No effect",
        "D: Cabin temperature will be controlled at the upper limit 30 deg.C",
      ],
      answer: 2,
    },
    {
      id: 11,
      question:
        "11: Bleed air supplied from the APU (APU bleed valve open), the pack flow is automatically selected:",
      options: ["A: High", "B: Normal", "C: Low", "D: Econ. Flow"],
      answer: 0,
    },
    {
      id: 12,
      question: "12: Trim air valve, each one optimizes the temperature by:",
      options: [
        "A: Adding hot air",
        "B: Adding fresh air",
        "C: Modulating of pack flow",
        "D: Adding re-circulated air",
      ],
      answer: 0,
    },
    {
      id: 13,
      question: "13: Hot air pressure regulating valve:",
      options: [
        "A: Regulates the pressure of hot air tapped upstream of the packs",
        "B: Is spring loaded open in the absence of air",
        "C: Opens automatically in case of duct overheat",
        "D: Opens automatically if the cabin trim air valve fails",
      ],
      answer: 0,
    },
    {
      id: 14,
      question: "14: Pack flow control valve:",
      options: [
        "A: Is pneumatically operated and electrically controlled",
        "B: Electrically operated and pneumatically controlled",
        "C: Opens automatically during engine starting",
        "D: Is spring loaded to open.",
      ],
      answer: 0,
    },
    {
      id: 15,
      question:
        "15: Engine flow demand, when the heating or cooling demand in one zone cannot be satisfied:",
      options: [
        "A: The minimum idle must be increased manually",
        "B: The minimum idle is increased automatically",
        "C: In any case, flight idle is sufficient",
        "D: The APU must be used to supply additional air.",
      ],
      answer: 1,
    },
    {
      id: 16,
      question: "16: What is the Norm.Max. cabin altitude?",
      options: ["A: 8,000 ft", "B: 9,550 ft +/- 350 ft", "C: 14,000 ft", "D: 800 ft"],
      answer: 0,
    },
    {
      id: 17,
      question: "17: What is the Max. negative Diff. pressure for the cabin?",
      options: ["A: 0 psi.", "B: 1 psi.", "C: 2 psi.", "D: 8.6 psi."],
      answer: 1,
    },
    {
      id: 18,
      question:
        "18: It is permissible to use simultaneously packs and Lp ground unit during long stops in a hot airfield",
      options: [
        "A: Yes",
        "B: No",
        "C: Yes, if external temperature is greater than 50 deg.C",
        "D: Yes, provided the airflow supplied by the ground cart is less than 1.2 kg/s",
      ],
      answer: 1,
    },
    {
      id: 19,
      question:
        "19: What are the different sources of air for air conditioning and pressurization?",
      options: [
        "A: Engine bleed air and recirculated air (only on ground)",
        "B: Engine bleed air and recirculated air.",
        "C: Engine bleed air and recirculated air, or if selected, APU bleed air and recirculated air.",
        "D: Engine bleed air only.",
      ],
      answer: 2,
    },
    {
      id: 20,
      question:
        "20: During the exterior preflight on a warm day, in what position would you expect to find the avionics ventilation system INLET and EXTRACT valves to be in?",
      options: [
        "A: Closed.",
        "B: Open.",
        "C: Closed or open regarding of the APU bleed valve.",
        "D: Closed or open",
      ],
      answer: 1,
    },
    {
      id: 21,
      question: "21: What happens to the pack flow control valves during engine start?",
      options: [
        "A: They must be selected off.",
        "B: They must be selected off on cold days only.",
        "C: They must be selected off on hot days only.",
        "D: They automatically close.",
      ],
      answer: 3,
    },
    {
      id: 22,
      question: "22: The temperature of each aircraft zone is optimized by means of:",
      options: [
        "A: A HOT AIR valve.",
        "B: A ZONE control valve.",
        "C: A PACK FLOW VALVE.",
        "D: A TRIM AIR valve.",
      ],
      answer: 3,
    },
    {
      id: 23,
      question: "23: When does normal pressurization occur?",
      options: [
        "A: After second engine start.",
        "B: Pressurization occurs during taxi",
        "C: Pressurization occurs during the takeoff roll.",
        "D: After rotation.",
      ],
      answer: 2,
    },
    {
      id: 24,
      question: "24: When does normal depressurization occur?",
      options: [
        "A: 100 feet AGL above touchdown.",
        "B: It is complete 1 minute after touchdown.",
        "C: After flap retraction.",
        "D: On landing touchdown",
      ],
      answer: 1,
    },
    {
      id: 25,
      question:
        "26: Which statement is correct regarding illumination of the amber AFT ISOL VALVE fault light?",
      options: [
        "A: Automatically closes the aft cargo compartment isolation valves.",
        "B: Means that either the inlet or outlet isolation valve(s) disagrees with the switch position.",
        "C: Indicates that the extract fan has stopped.",
        "D: All of the above.",
      ],
      answer: 1,
    },
    {
      id: 26,
      question: "27: Pressurization controllers receive inputs from:",
      options: [
        "A:LGCIU, ADIRU, FMGS, and EIU.",
        "B: LGCIU's and the MCDU.",
        "C: LGCIU's and pitot static sources.",
        "D: MCDU and LGCIU's.",
      ],
      answer: 0,
    },
    {
      id: 27,
      question: "28: What computers control the cabin and cockpit conditioned air?",
      options: [
        "A: Two zone controllers that pass information and requests to two pack controllers.",
        "B: Two pack controllers that pass information and requests to three zone controllers.",
        "C: Three zone controllers that pass information and instructions to two pack controllers for three zones.",
        "D: One zone controller that passes information and instructions to two pack controllers for three zones.",
      ],
      answer: 3,
    },
    {
      id: 28,
      question: "29: When would you select RAM AIR ON?",
      options: [
        "A: If additional cooling is required on the ground.",
        "B: Dual pack failure or smoke removal.",
        "C: When pack temperatures are too high.",
        "D: When there is smoke in the cabin.",
      ],
      answer: 1,
    },
    {
      id: 29,
      question: "30: What happens when a temperature selector rotary knob is adjusted?",
      options: [
        "A: A signal is sent to the zone controller requesting a different temperature.",
        "B: Nothing as there is no relationship between a temperature selector knob and the trim air valve.",
        "C: The associated trim air valve immediately moves to a different position.",
      ],
      answer: 0,
    },
    {
      id: 30,
      question:
        "31: With APU BLEED ON and engine BLEED switches ON with engines running, what is the position of the engine bleed valves?",
      options: ["A: Closed", "B: Open", "C: Depends on the crossbleed selector"],
      answer: 0,
    },
    {
      id: 31,
      question:
        "32: Pressurization is normally automatic.  Can you interfere with it?",
      options: [
        "A: Yes, CABIN PRESS MODE SEL to OVERRIDE and MAN V/S CTL toggle switch.",
        "B: Yes, manually set landing elevation using the LND ELEV AUTO selector.",
        "C: Both are correct.",
      ],
      answer: 0,
    },
    {
      id: 32,
      question: "33: Under what conditions should the pack flow controller be set to HI?",
      options: [
        "A: In cold conditions to achieve a higher cabin temperature range.",
        "B: With a low passenger load to increase cabin air flow.",
        "C: With a high passenger load in hot conditions in order to help reduce the cabin temperature.",
      ],
      answer: 2,
    },
    {
      id: 33,
      question: "34: What is the function of the ram air valve?",
      options: [
        "A: 'Ventilation while on the ground.",
        "B: Emergency smoke removal and ventilation in the event of dual pack failure.",
        "C: Avionics cooling.",
        "D: Cargo ventilation & avionics cooling.",
      ],
      answer: 1,
    },
    {
      id: 34,
      question: "35: Placing the EXTRACT push button to override:",
      options: [
        "A: De-energizes the extract fan",
        "B: Places the avionics ventilation system in the closed configuration.",
        "C: Insures the extract fan will continue to be energized.",
        "D: Places the avionics ventilation system in the open configuration.",
      ],
      answer: 2,
    },
    {
      id: 35,
      question: "36: The Ram Air valve:",
      options: [
        "A: Should be opened for increased ventilation while on the ground.",
        "B: Will open automatically after engine start.",
        "C: Should be opened for increased ventilation while in flight.",
        "D: Must be manually activated.",
      ],
      answer: 3,
    },
    {
      id: 36,
      question: "37: What limitation is associated with the ram air valve?",
      options: [
        "A: Do not open if cabin pressure is greater than 1 psi.",
        "B: Only open while on the ground.",
        "C: Will not open if the DITCHING switch is off.",
        "D: Operation is automatic.",
      ],
      answer: 0,
    },
    {
      id: 37,
      question:
        "38: With the pressurization system in the automatic mode, which valves are closed when the ditching push button is selected on?",
      options: [
        "A: All valves below the water line.",
        "B: APU inlet.",
        "C: The engine bleed valves.",
        "D: Only the avionics cooling valves.",
      ],
      answer: 0,
    },
    {
      id: 38,
      question: "39: What is the maximum negative differential pressure for the cabin?",
      options: ["A:0 psi.", "B: 1 psi.", "C: 2 psi.", "D: 3 psi."],
      answer: 1,
    },
    {
      id: 39,
      question: "40: The HOT AIR valve push button controls:",
      options: [
        "A: The trim air valve.",
        "B: The hot air manifold.",
        "C: The engine bleed valves.",
        "D: The pack flow control valves.",
      ],
      answer: 1,
    },
    {
      id: 40,
      question:
        "41: Both pressurization auto controllers are set by the active flight plan loaded in the MCDU. The QNH entry on the MCDU Approach Performance page refines the depressurization schedule for the landing.",
      options: ["A: True.", "B: False."],
      answer: 0,
    },
    {
      id: 41,
      question: "42: Aft cargo indications may be found on which ECAM page(s)?",
      options: [
        "A: Only the CRUISE page.",
        "B: Only the BLEED page.",
        "C: Only the CAB PRESS page.",
        "D: The CRUISE page and the COND page.",
      ],
      answer: 3,
    },
    {
      id: 42,
      question:
        "43: Avionics ventilation system indications may be found on which ECAM page(s)?",
      options: [
        "A: Only the BLEED page.",
        "B: Only the CAB PRESS page.",
        "C: The in-flight ECAM cruise page.",
        "D: The in-flight ECAM cruise page and the CAB PRESS pages.",
      ],
      answer: 1,
    },
    {
      id: 43,
      question:
        "44: When APU is supplying the packs, the pack controller sends a demand signal to increase airflow when a zone temperature cannot be satisfied. This signal is sent to the:",
      options: [
        "A: Pack Ram Air Inlet Flap.",
        "B: APU ECB.",
        "C: Pack Outflow Control Valve.",
        "D: Engine interface units EIU's'",
      ],
      answer: 1,
    },
    {
      id: 44,
      question:
        "45: In case of zone controller primary and secondary channel failure, what temperatures are maintained by Packs 1 and 2?",
      options: [
        "A: 15 deg.C  for both.",
        "B: 25 deg.C both.",
        "C: 20 deg.C for Pack one and 10 deg.C for Pack two",
        "D: 24 deg.C for Pack one and 15 deg.c for Pack two.",
      ],
      answer: 2,
    },
    {
      id: 45,
      question:
        "46: The PACK FLOW controller is set to NORM and yet the ECAM display shows PACK FLOW to be high. How is this possible?",
      options: [
        "A: As the engines are not running the PACK FLOW indicators are at the position they were selected to at the last shut down.",
        "B: As no bleed air is flowing the PACK FLOW valves are spring loaded to the fully open position.",
        "C: HI flow is automatically selected regardless of PACK FLOW selector position because air is only being supplied by the APU.",
        "D: With cold outside air conditions the PACK FLOW is automatically increased to help increase the cabin temperature.",
      ],
      answer: 2,
    },
    {
      id: 46,
      question: "47: When would you select PACK FLOW to HI?",
      options: [
        "A: Smoke removal or hot/humid conditions.",
        "B: When passengers are complaining it is too cold.",
        "C: Above FL 350.",
        "D: Above FL 250",
      ],
      answer: 0,
    },
    {
      id: 47,
      question:
        "48: Which of the following statements is correct concerning conditioned air?",
      options: [
        "A: Conditioned air and trim air are mixed then distributed to each zone.",
        "B: Recirculated air, conditioned air and hot trim air are mixed then distributed to each zone.",
        "C: Hot trim air is added to the mixing unit before distribution to each zone.",
        "D: Recirculating fans draw cabin air to a mixing unit where conditioned air is added.",
      ],
      answer: 3,
    },
    {
      id: 48,
      question:
        "49: How many temperature selectors are there on the A320? How many temperature zones are there?",
      options: [
        "A: Three rotary temperature selectors and one zone.",
        "B: Three rotary temperature selectors, one each for the cockpit zone, the forward cabin zone, and the aft cabin zone.",
        "C: Two rotary temperature selectors, one for the cockpit and first class zone and one for the aft cabin zone.",
        "D: Four rotary temperature selectors and four zones.",
      ],
      answer: 1,
    },
    {
      id: 49,
      question: "50: The temperature selectors are located in:",
      options: [
        "A: The cockpit",
        "B: The cabin",
        "C: Both",
        "D: Only on the CIDS panel",
      ],
      answer: 0,
    },
    {
      id: 50,
      question:
        "51: During normal flight, the avionics ventilation system controls the temperature of the cooling air by:",
      options: [
        "A: Adding air conditioned air to the flow.",
        "B: Extracting air over board.",
        "C: Adding an avionics bay air.",
        "D: Passing air through a skin heat exchanger.",
      ],
      answer: 3,
    },
    {
      id: 51,
      question: "52: Placing the avionics ventilation system in the smoke configuration:",
      options: [
        "A: Opens the #1 GLC.",
        "B: Opens the cargo under-floor valve.",
        "C: Opens the #2 GLC.",
        "D: De-energizes the blower fan, extract fan runs, and opens the air conditioning extract valves.",
      ],
      answer: 3,
    },
    {
      id: 52,
      question: "53: How can you change controllers during flight?",
      options: [
        "A: Cycle the LDG ELEV AUTO knob out of the AUTO position then back to AUTO.",
        "B: Cycle the CABIN PRESS MODE SEL pushbutton to the MAN position then back to AUTO.",
        "C: Cycle the cabin pressurization MAN V/S CTL switch",
      ],
      answer: 1,
    },
    {
      id: 53,
      question: '54: Hot air "FAULT" light illuminates on the air conditioning panel.',
      options: [
        "A:The hot air press reg. valve opens and the trim air valves close.",
        "B: The hot air press reg. valve closes and the trim air valves open.",
        "C: The hot air press reg. valve closes and the trim air valves close.",
      ],
      answer: 2,
    },
    {
      id: 54,
      question: "55: How many trim air valves are there?",
      options: [
        "A: One trim air valve.",
        "B: Three: one each for the cockpit zone, the forward cabin zone, and the aft cabin zone.",
        "C: Two: one for the cockpit and first class zone, and one for the cabin zone.",
        "D: Four: one each for the cockpit zone, the first class zone, and two for the aft zone.",
      ],
      answer: 1,
    },
    {
      id: 55,
      question:
        "56: What position do the pack valves go to in the event of a loss of the bleed system pressure?",
      options: [
        "A: They remain in their last position.",
        "B: Full open.",
        "C: Mid position.",
        "D: Closed.",
      ],
      answer: 3,
    },
    {
      id: 56,
      question: "57: The RAM AIR switch should be used:",
      options: [
        "A: At any time.",
        "B: Only when differential pressure is less than 1 psi.",
        "C: When differential pressure is more than 1 psi.",
        "D: Only after outflow valve is fully opened.",
      ],
      answer: 1,
    },
    {
      id: 57,
      question: "58: What is the function of the Pack Flow selector?",
      options: [
        "A: Allows the pilot to increase pack flow but will not allow a manual decrease in flow if needed by the aircraft demands.",
        "B: Always allows high flow regardless of switch position when the APU is used for air conditioning.",
        "C: Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 58,
      question:
        "59: Which configuration is the avionics ventilation system in while airborne with no abnormals present?",
      options: ["A: Open.", "B: Smoke.", "C: Fire.", "D: Closed."],
      answer: 3,
    },
    {
      id: 59,
      question: "60: What is the maximum altitude associated with the pressurization system?",
      options: ["A: 39,800 feet", "B: 39,500 feet", "C: 41,000 feet", "D: 41,100 feet"],
      answer: 0,
    },
    {
      id: 60,
      question: "61: Trim air valves are controlled by:",
      options: [
        "A: The zone controller.",
        "B: Anti-ice valve.",
        "C: Hot air pressure regulating valve.",
        "D: The pack controller",
      ],
      answer: 0,
    },
    {
      id: 61,
      question:
        "62: Which statement is TRUE concerning the cargo compartment ventilation?",
      options: [
        "A: Both cargo compartments are pressurized and heated using both cabin air and hot trim air.",
        "B: Recirculated air, conditioned air, and hot trim air are mixed then distributed to each cargo compartment.",
        "C: Only the aft cargo compartment is heated and ventilated.  Cabin ambient air is mixed with hot trim air and drawn through isolation valves by extraction fans.",
      ],
      answer: 2,
    },
    {
      id: 62,
      question:
        "63: The APU BLEED FAULT indicates that the main APU controller is in fault.",
      options: [
        "A: True.",
        "B: False. (Note: It could mean - An APU leak is detected, Malfunction or overheat.",
      ],
      answer: 1,
    },
    {
      id: 63,
      question: "64: Aft cargo ventilation is controlled by:",
      options: [
        "A: The aft cargo rotary selector knob.",
        "B: The cargo ventilation controller.",
        "C: The zone controller and the SDCU.",
        "D: The cargo ventilation controller and the aft cargo rotary selector knob.",
      ],
      answer: 1,
    },
    {
      id: 64,
      question:
        "65: The vent fan runs any time there is a normal ships power and the isolation valves are open.",
      options: ["A: True.", "B: False."],
      answer: 0,
    },
    {
      id: 65,
      question:
        "66: The cabin zone temperature sensors are ventilated by the air extracted by the lavatory and galley fans.",
      options: ["A: True.", "B: False."],
      answer: 0,
    },
    {
      id: 66,
      question: "67: Placing the BLOWER push button to override:",
      options: [
        "A: Insures the blower fan will continue to run.",
        "B: Places the avionics ventilation system in the open configuration",
        "C: De-energizes the blower fan.",
        "D: Places the avionics ventilation system in the closed configuration.",
      ],
      answer: 2,
    },
    {
      id: 67,
      question: "68: Pressurization indications are found on which ECAM page(s)?",
      options: [
        "A: BLEED page.",
        "B: Only on the CAB PRESS page.",
        "C: The in-flight ECAM cruise page and the CAB PRESS page.",
        "D: On the CAB PRESS & BLEED pages.",
      ],
      answer: 2,
    },
    {
      id: 68,
      question: "69: How many outflow valves are there?",
      options: [
        "A: One valve with one door",
        "B: One valve with two doors.",
        "C: Two valves with only one door visible.",
        "D: Two valves (one main + one back-up) with only two doors visible.",
      ],
      answer: 1,
    },
    {
      id: 69,
      question: "70: At what cabin altitude do you get an ECAM warning?",
      options: ["A: 8,800 feet.", "B: 9,000 feet", "C: 9,550 feet", "D: 14,000 feet."],
      answer: 2,
    },
    {
      id: 70,
      question: "71: When the pack flow control knob is positioned to HI, air flow is:",
      options: [
        "A: 80% of normal rate.",
        "B: 100% of normal rate.",
        "C: 120% of normal rate.",
        "D: 150% of normal rate.",
      ],
      answer: 2,
    },
    {
      id: 71,
      question:
        "72: If you select a position other than the AUTO detent on the LDG ELEV AUTO selector, how can you see the actual landing elevation value?",
      options: [
        "A: On the ECAM CRUISE",
        "B: On the PRESS page",
        "C: On the ECAM CRUISE or the PRESS page.",
      ],
      answer: 2,
    },
    {
      id: 72,
      question: "74: What does the CARGO HEAT HOT AIR FAULT light indicate?",
      options: [
        "A: A duct overheat is detected.",
        "B: The Aft Cargo Pressure Regulating valve closes.",
        "C: The system will reset if the ISOL VALVE switch is ON.",
        "D: All of above.",
      ],
      answer: 3,
    },
    {
      id: 73,
      question: "75: During Ground function operation, the outflow valve is:",
      options: [
        "A: Fully open.",
        "B: Fully closed.",
        "C: Positioned according to FMGS demands.",
      ],
      answer: 0,
    },
    {
      id: 74,
      question: "76: The outflow valve is powered by:",
      options: [
        "A: One of two electric motors.",
        "B: One of three electric motors.",
        "C: Three mechanically linked electric motors.",
      ],
      answer: 1,
    },
    {
      id: 75,
      question: "77: The purpose of the safety valve is to avoid:",
      options: [
        "A: Excessive positive pressure differential.",
        "B: Excessive negative differential.",
        "C: Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 76,
      question:
        "78: When landing elevation is set to AUTO, the landing elevation is sent to the controller from:",
      options: ["A: FMGS.", "B: FCU.", "C: ADIRS.", "D: Captain baro ref."],
      answer: 0,
    },
    {
      id: 77,
      question: "79: The mixing unit is connected to:",
      options: [
        "A: Packs, cabin air, emergency ram air inlet and Lp ground connector",
        "B: Packs, emergency ram air inlet and Lp ground connector",
        "C: Packs and cabin air",
        "D: Pack 1 and pack 2 only.",
      ],
      answer: 0,
    },
    {
      id: 78,
      question: '80: Once set to "ON" the air conditioning packs operate:',
      options: [
        "A: Automatically and independently of each other",
        "B: Normally, but the output of one affects the other",
        "C: Automatically, pack one as a master, pack two as a slave",
        "D: Automatically, pack two as a master, pack one as a slave.",
      ],
      answer: 0,
    },
    {
      id: 79,
      question:
        '81: Emergency ram air inlet. When set to "ON" the ram air valve will open and supply airflow:',
      options: [
        "A: In any case",
        "B: Diff. press < 1 psi, and ditching not selected",
        "C: Provided ditching is not selected",
        "D: Provided ditching is selected.",
      ],
      answer: 1,
    },
    {
      id: 80,
      question: "82: Cond. Zone regulator fault (primary channel failed):",
      options: [
        "A: Cabin zone is at fixed temperature",
        "B: Packs are at fixed temperature",
        "C: Secondary channel operates as back up and operation is as normal",
        "D: The packs deliver a fixed temperature. 20 deg.C  for pack one and 10 deg.C for pack two",
      ],
      answer: 0,
    },
    {
      id: 81,
      question: "83: Temperature control is automatic and is regulated by:",
      options: [
        "A: Zone controllers",
        "B: Pack 1 and 2 controllers",
        "C: Zone controllers, pack 1 and 2 controllers",
        "D: The pack flow control valves only.",
      ],
      answer: 2,
    },
    {
      id: 82,
      question:
        "84: If a pack controller fails (primary and secondary channel failure), the pack outlet air temperature is controlled by:",
      options: [
        "A: Ram Air Valve",
        "B: Hot air pressure regulating valve",
        "C: Anti-ice valve",
        "D: Trim air valve.",
      ],
      answer: 2,
    },
    {
      id: 83,
      question: "85: The zone controller optimizes temperature by action on:",
      options: [
        "A: Pack anti-ice valve",
        "B: Trim air valve",
        "C: Pack flow control valve",
        "D: Hot air pressure regulating valve",
      ],
      answer: 1,
    },
    {
      id: 84,
      question:
        "86: When using APU bleed to supply the packs, with the pack flow selector at LO, the pack airflow is:",
      options: [
        "A: 80% of normal",
        "B: Normal",
        "C: 120% of normal",
        "D: 110% of normal (note: When APU bleed is used to supply the packs – the flow is high or 120% regardless of selection)",
      ],
      answer: 2,
    },
    {
      id: 85,
      question: "87: The pack flow control valve closed automatically in case of:",
      options: [
        "A: Pack overheat, engine starting, or operation of the fire or ditching push button",
        "B: Bleed valve failure, pack outlet pressure increase",
        "C: Trim air valve failure",
        "D: All of the above.",
      ],
      answer: 3,
    },
    {
      id: 86,
      question:
        "88: In case of trim air system fault (zone controller primary channel failure), the secondary channel of the zone controller regulated the zone temperature at:",
      options: ["A: 14 deg.C", "B: 24 deg.C", "C: 15 deg.C", "D: 10 deg.C"],
      answer: 1,
    },
    {
      id: 87,
      question: "89: In case of total zone controller failure:",
      options: [
        "A: Hot air and trim air valves open and packs deliver air at a fixed temperature (15 deg.C pack 1 and 10 deg.pack2)",
        "B: Hot air and trim air valves close and packs deliver air at a fixed temperature (15 deg.C pack 1 and 10 deg.pack2)",
        "C: Hot air and trim air valves close and packs deliver air at a fixed temperature (20 deg.C pack 1 and 10 deg.pack2)",
        "D: Hot air and trim air valves open and packs deliver air at a fixed temperature (20 deg.C pack 1 and 10 deg.pack2)",
      ],
      answer: 2,
    },
    {
      id: 88,
      question: "90: During landing run, Ram Air Inlet flaps open when speed is less than:",
      options: [
        "A: 77 kts (after 30 seconds delay",
        "B: 70 kts (after 1 minute delay)",
        "C: 70 kts (after 20 seconds delay)",
        "D: 85 kts (after 20 seconds delay)",
      ],
      answer: 2,
    },
    {
      id: 89,
      question: "91: The ditching switch when selected sends a closure signal to:",
      options: [
        "A: Outflow valve",
        "B:Ram air inlet and ventilation extract valves",
        "C: The pack flow control valves",
        "D: All of the above",
      ],
      answer: 3,
    },
    {
      id: 90,
      question: "92: In flight with pressure controller 1 in use, if it fails:",
      options: [
        "A: You have to use the manual control",
        "B: Transfers automatically to controller 2",
        "C: You have to select manually controller 2",
        "D: You have to set the landing elevation.",
      ],
      answer: 1,
    },
    {
      id: 91,
      question: "Q 93: In normal operation, pressurization is:",
      options: [
        "A: Fully automatic",
        "B: Manually controlled",
        "C: Automatic, but landing elevation must be manually set",
        "D: Remaining automatic only with CPC 1 is in use.",
      ],
      answer: 0,
    },
    {
      id: 92,
      question: "94: During ground function operation, the outflow valve is:",
      options: [
        "A: Fully open",
        "B: Fully closed",
        "C: Positioned accordingly to FMGS demands",
        "D: Operating in abort mode",
      ],
      answer: 0,
    },
    {
      id: 93,
      question: "95: To see the operation of the outflow valve, it is necessary to call ECAM:",
      options: ["A: Cond page", "B: Bleed page", "C: Press page", "D: Vent page"],
      answer: 2,
    },
    {
      id: 94,
      question:
        "96: Two identical, independent, automatic digital pressurization controllers are used for system control:",
      options: [
        "A: One controller active, one in standby",
        "B: Both controllers monitored by FMGC",
        "C: No controller for climb phase and No.2 controller in cruise and descent",
        "D: No.1 controller for climb and No.2 for descent",
      ],
      answer: 0,
    },
    {
      id: 95,
      question:
        "97: Which controller generates excess cabin altitude and pressure signals for ECAM indication in manual mode:",
      options: ["A: Both", "B: No.1", "C: No2", "D: Neither"],
      answer: 1,
    },
    {
      id: 96,
      question: "98: The safety valves are operated:",
      options: ["A: Electrically", "B: Hydraulically", "C: Pneumatically", "D: By the FMGC"],
      answer: 2,
    },
    {
      id: 97,
      question: "99: The purpose of the safety valves is to avoid:",
      options: [
        "A: Excessive positive differential pressure",
        "B: Excessive negative differential pressure",
        "C: All of the above",
      ],
      answer: 2,
    },
    {
      id: 98,
      question:
        "100: When mode selector is selected to manual, the outflow valve is controlled by signals sent via controller 1 or 2",
      options: ["A: True", "B: False"],
      answer: 1,
    },
    {
      id: 99,
      question:
        "101: On ECAM Cab. press page, the outflow valve indicator changes to amber if:",
      options: [
        "A: It is fully closed",
        "B: It is fully open on the ground",
        "C: It is fully open in flight",
        "D: It is not fully open on the ground",
      ],
      answer: 2,
    },
    {
      id: 100,
      question:
        "102: On ECAM Cab. press page, the safety valve indication changes to amber if:",
      options: [
        "A: Both safety valves are fully open",
        "B: Both safety valves do not open",
        "C: Both safety valves are fully closed",
        "D: One safety valve is open.",
      ],
      answer: 3,
    },
    {
      id: 101,
      question:
        "103: On ECAM Cab. press page, the cabin altitude indication changes to red when cabin altitude is:",
      options: [
        "A: > 14,000 ft",
        "B: > 12,500 ft",
        "C: > 10,000 ft",
        "D: >9,550 ft",
      ],
      answer: 3,
    },
    {
      id: 102,
      question: "104: Following a system 1 fault:",
      options: [
        "A: Master caution is activated and ECAM actions must be taken by the crew",
        "B: The crew manually operates the system",
        "C: System 2 must be selected by the crew",
        "D: System 2 takes over automatically without any crew action",
      ],
      answer: 3,
    },
    {
      id: 103,
      question: "105: The pressure safety valve opens at:",
      options: ["A: 8.06 psi", "B: 8.6 psi", "C: 9.0 psi", "D: 7.0 psi"],
      answer: 1,
    },
    {
      id: 104,
      question:
        "106: After the engine start, the Pack Flow Control Valves automatically open, however on the ground, reopening of the valves is delayed for _____ after the first engine start.",
      options: ["A: 30 seconds", "B: 45 seconds", "C: 50 seconds", "D: 60 seconds"],
      answer: 0,
    },
    {
      id: 105,
      question:
        "107: The Ram Air Inlet Flaps remain open during takeoff and landing to allow extra airflow during high power situations.",
      options: ["True", "B: False"],
      answer: 1,
    },
    {
      id: 106,
      question:
        "The temperature of the air that exits the compressor section is displayed above the Pack Flow. It normally displays green, but displays amber for temperatures over:",
      options: ["A: 180 deg.C", "B: 200 deg.C", "C: 230 deg.C", "D: 250 deg.C"],
      answer: 2,
    },
    {
      id: 107,
      question: "109: The trim air valves are _____ controlled by the zone controller",
      options: [
        "A: Electrically",
        "B: Pneumatically",
        "C: Hydraulically",
        "D: None of the above",
      ],
      answer: 0,
    },
    {
      id: 108,
      question:
        "110: The avionics ventilation system is not capable of using external air to provide cooling airflow",
      options: ["A: True", "B: False"],
      answer: 1,
    },
    {
      id: 109,
      question:
        "111: During flight below _____, the Ram Air Valve can provide an emergency source of conditioned air during non-pressurized flight.",
      options: ["A: 5,000 feet", "B: 8,000 feet", "C: 10,000 feet", "D: 12,500 feet"],
      answer: 2,
    },
  ],
};
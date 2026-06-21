import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "MOCK TEST 05",
  questions: [
    {
      id: 1,
      question: "If an amber box is around the V/S digital Value, what does this mean?",
      options: [
        "Abnormal V/S value",
        "The V/S value is inertial",
        "The V/S value is barometric",
        "The digital value is unreliable",
      ],
      answer: 2,
    },
    {
      id: 2,
      question: "A TEMPORARY FLT PLN is created when",
      options: [
        "A vertical revision is done",
        "DIR TO is performed",
        "The aircraft enters a hold",
        "A lateral revision is done",
      ],
      answer: 3,
    },
    {
      id: 3,
      question: "When will the APU fuel pump supplies fuel for APU startup?",
      options: [
        "If the fuel feed pressure is normal",
        "If the fuel feed pressure is high",
        "If the fuel feed pressure is low",
        "None of the above is correct",
      ],
      answer: 2,
    },
    {
      id: 4,
      question:
        "What happens to Ground spoilers, if it is armed and rejected take off is done at 70 kts ?",
      options: [
        "Ground spoilers are deployed fully",
        "Ground spoilers are deployed partially",
        "As in (a) auto brakes are applied to maximum",
        "Neither auto brake nor ground spoiler function available",
      ],
      answer: 3,
    },
    {
      id: 5,
      question: "When does the CHECK ALT flag appear on PFD?",
      options: [
        "If the disagreement between the altitude values displayed by the two PFDs is greater than 250 ft when the pilot selects a QNH different from STD",
        "As in ( a) and the flag also appear on NDs.",
        "As in (b) and is accompanied by an ECAM caution with Single Chime MASTER CAUT light.",
        "As in (a) and is accompanied by an ECAM caution with Single Chime and MASTER CAUT light.",
      ],
      answer: 3,
    },
    {
      id: 6,
      question: "If IR1 has failed which IR position will FMGC1 take?",
      options: [
        "MIX IRS position of IR2 and IR3",
        "IR2 Position",
        "IR2 Position after the ATT-HDG switch is move to F/O-3",
        "IR3 Position automatically",
      ],
      answer: 3,
    },
    {
      id: 7,
      question: "Due to FAC 1& FAC 2 fault, what happens to Roll & Pitch control law?",
      options: [
        "Pitch and Roll remain in Normal",
        "Pitch is alternate and Roll is normal law",
        "Pitch and Roll revert to direct law",
        "Pitch is alternate and Roll is direct law",
      ],
      answer: 3,
    },
    {
      id: 8,
      question: "With both engines OFF, how do you perform CVR TEST?",
      options: [
        "Press the RCDR GND CTL pb to ON and press the CVR TEST pb.",
        "Just press the CVR TEST pb.",
        "As in (a) and the parking brake must be ON to perform CVR test.",
        "Put the parking brake to ON and press the CVR TEST pb.",
      ],
      answer: 2,
    },
    {
      id: 9,
      question: "The active F-Plan is erased when",
      options: [
        "The pilot calls the aircraft status page.",
        "The wheels touch the runway at landing.",
        "The aircraft has been on ground for 30 seconds following the landing.",
        "One engine is shut down on the bay.",
      ],
      answer: 2,
    },
    {
      id: 10,
      question:
        "What happens when MAN V/S CTL toggle sw is selected to DN position?",
      options: [
        "Outflow valve moves towards open position and cabin altitude increases.",
        "Outflow valve moves towards closed position and cabin altitude increases.",
        "Outflow valve moves towards closed position and cabin altitude decreases.",
        "Outflow valve moves towards open position and cabin altitude increases",
      ],
      answer: 2,
    },
    {
      id: 11,
      question:
        "If either blower or extract pb is set to override, the air for avionic equipment cooling is taken from",
      options: [
        "Atmosphere and skin heat exchanger is used.",
        "Avionic bay and skin heat exchanger is used",
        "Either avionic bay or from atmosphere.",
        "Air from air conditioning system is added to ventilation air.",
      ],
      answer: 3,
    },
    {
      id: 12,
      question:
        "What indications are available in case of simultaneous input on both sidesticks ?",
      options: [
        "Both sidestick priority Green light (on the glareshield panel) Flashes",
        "Both sidestick priority Red arrow (on the glareshield panel) illuminate",
        '"DUAL INPUT" audio message is activated.',
        "Both (a) and (c) are correct.",
      ],
      answer: 3,
    },
    {
      id: 13,
      question: "When is smokehood used in aircraft?",
      options: [
        "During decompression",
        "During fire fighting",
        "During Chemical / biological weapons attack onboard",
        "Both (b) & ( c) are correct",
      ],
      answer: 3,
    },
    {
      id: 14,
      question: "What are the conditions required for PTU to operate on ground?",
      options: [
        "Differential pressure is more than 500psi between G & Y systems",
        "Both engine master switches in OFF positions",
        "As in (a ) and PTU pb switch in AUTO position",
        "All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 15,
      question: "How many portable fire extinguishers are there in A320 aircraft?",
      options: ["One", "Two", "Three", "Four"],
      answer: 3,
    },
    {
      id: 16,
      question:
        "Which one of the following is the correct combination of managed AP / FD vertical mode",
      options: ["CLB, DES", "OPCLB , OP DES", "V/S , FPA", "MCT, CLB"],
      answer: 0,
    },
    {
      id: 17,
      question:
        "How you are going to use Quick Donning Mask stowed in the cockpit?",
      options: [
        "Harness already kept inflated in the stowage.",
        "No inflatable harness is provided with Quick Donning Mask.",
        "Squeeze the red grips to unlock the two flap door and permits inflate and don it to get 100% oxygen on demand.",
        "Pull the QDM from stowage compartment and don it to use diluted oxygen Continuously.",
      ],
      answer: 2,
    },
    {
      id: 18,
      question:
        "What is the action required in the event of HYD G RSVR OVHT ECAM message without local Warnings on Hydraulic panel (No FAULT light ON PTU pb & G EDP pb.)?",
      options: [
        "Complete ECAM actions",
        "Consider alert as spurious",
        "As in ( b) no action required",
        "As in (b) and carry out ECAMactions.",
      ],
      answer: 2,
    },
    {
      id: 19,
      question:
        "What is the recommended speed to disengage auto brake & apply brakes manually?",
      options: [
        "Before reaching 20 Knots",
        "Less than 20 Knots",
        "Above 70 Knots",
        "None of the above is correct",
      ],
      answer: 0,
    },
    {
      id: 20,
      question: "What are the flight controls CONFIG warnings?",
      options: [
        "SLATS / FLAPS not in T.O CONFIG",
        "SPEED BRAKE NOT RETRACTED.",
        "PITCH TRIM NOT IN TAKE OFF RANGE.",
        "ALL The above are correct.",
      ],
      answer: 3,
    },
    {
      id: 21,
      question:
        "According to MEL. Which of the following computers if inoperative before the flight, aircraft cannot be dispatched?",
      options: [
        "ELAC 2",
        "ELAC 1",
        "As in (a) or LGCIU 1",
        "As in (b) or LGCIU 2",
      ],
      answer: 2,
    },
    {
      id: 22,
      question: "What will happen, if TR1 fails in a flight",
      options: [
        "DC BUS 1, DC BAT BUS,DC ESS busses are lost",
        "No buses will be lost since TR2 feeds all DC Busses",
        "TR2 will feed DC BUS 2, DC BAT BUS,DC BUS 1",
        "As in ( c) and ESS TR will feed DC ESS Busses",
      ],
      answer: 3,
    },
    {
      id: 23,
      question:
        "If difference in heading indications between the captain's and F/O's DUs is more the 5 deg, what are the indications?",
      options: [
        "CHECK HDG flags on both PFD , ND:ECAM caution",
        "CHECK HDG flags on faulty PFD , ND:ECAM caution",
        "CHECK HDG flags and HDG flags on both PFDs, NDs:",
        "As in (c) and also ECAM caution",
      ],
      answer: 0,
    },
    {
      id: 24,
      question: "When LDG ELEV FAULT warning comes on?",
      options: [
        "Landing field Elevation data from FMGC is not available",
        "Landing Elevation is automatically selected",
        "When landing is performed on QNH, set 0 FEET on LDG ELEV selector",
        "All the above are correct",
      ],
      answer: 0,
    },
    {
      id: 25,
      question:
        "When does F/CTL alternate law revert to direct law in case of all SEC failure?",
      options: [
        "After L/G extension",
        "After touchdown",
        "After selection of slats or flaps 2 or more",
        "None of the above in correct",
      ],
      answer: 2,
    },
    {
      id: 26,
      question:
        "FAULT amber light comes on in the Engine Bleed push button in case of",
      options: [
        "There is an over pressure downstream of the bleed valve",
        "There is a wing or engine leak on the related side",
        "The bleed valve is not closed with APU bleed ON",
        "In all the above cases",
      ],
      answer: 3,
    },
    {
      id: 27,
      question: "Which system will get affected in case of HYD BLUE RSVR LO LVL?",
      options: [
        "Emergency Generator",
        "Landing Gear",
        "NOSE WHEEL steering",
        "None of the above is correct",
      ],
      answer: 0,
    },
    {
      id: 28,
      question:
        "IN EMER CONFIG, emergency. Gen.is powering the DC & AC ESS buses. If a GEN reset is successful, what happens?",
      options: [
        "EMER GEN trips, DC & AC ESS Buses are reconnected AC BUS 1.",
        "DC & AC ESS BUSSES are still supplied by EMER GEN.",
        "DC & AC ESS busses will be supplied by the recovered generator after extending the landing gear.",
        "(B) and (c) together make the correct answer.",
      ],
      answer: 1,
    },
    {
      id: 29,
      question: "When do you use L/G gravity extension procedure in flight?",
      options: [
        "In case of Blue & Yellow system",
        "In case of LGCIU No.1 failure",
        "In case of ADR1 & ADR2 failure",
        "Both (a) & (c) are correct",
      ],
      answer: 0,
    },
    {
      id: 30,
      question: "What is gravity fuel feed ceiling altitude in A320 aircraft?",
      options: [
        "10,000 feet",
        "30,000 feet if the aircraft is above 30,000 feet for more than 30 minutes.",
        "30,000 feet if the aircraft is above 30,000 feet for less than 30 minutes.",
        "25,000 feet",
      ],
      answer: 2,
    },
    {
      id: 31,
      question: "When shall the LOW OIL LEVEL advisory appear?",
      options: [
        "On Ground ,APU is not running and if low oil level is detected",
        "Anytime low oil level condition is detected",
        "Before APU start in flight or on ground when low level is detected",
        "Only in flight, before APU start if low oil level is detected",
      ],
      answer: 0,
    },
    {
      id: 32,
      question:
        "During descent with IDLE /OPEN DES Mode towards FCU target altitude 10000' what mode reversion will occur if altitude counter is only rotated to a higher altitude than present aircraft altitude ?",
      options: [
        "CLB /OPEN CLB and aircraft starts climb",
        "SPD/VS and aircraft starts climb.",
        "SPD/VS and aircraft continue its descent.",
        "No mode reversion occurs.",
      ],
      answer: 2,
    },
    {
      id: 33,
      question: "The speed target during GO AROUND with SRS mode engaged is",
      options: ["V2", "The higher of VAPP or current speed", "V2 + 15", "Green dot speed"],
      answer: 1,
    },
    {
      id: 34,
      question: "When do you switch off TERR/Pb on the EGPWS panel?",
      options: [
        "When FAULT light appears on TERR/Pb i.e failure of enhance modes",
        "For operarions from/ to runways not incorporated in the data base of EGPWS.This TERR/Pb should be put to OFF when the aircraft position is less then 15 N/ Miles airfiled",
        "Both (a) and (b) are correct",
        "As in (c) AUTO TILT of weather radar is lost",
      ],
      answer: 2,
    },
    {
      id: 35,
      question:
        "Which are the operations available when hand pump is used to pressurize yellow hydraulic?",
      options: [
        "Cargo door operation and ENG. No 2 thrust reverser",
        "Cargo door only.",
        "As in ( a ) and alternate brakes also.",
        "Cargo door and the right ( RHS) elevator.",
      ],
      answer: 1,
    },
    {
      id: 36,
      question:
        "If F/O side stick is deadtivated by pressing the CAPT side priority T.O pb for more than 40 Sec, then how to re activate the F/O side stick?",
      options: [
        "Only, by momentarily pressing the CAPT priority T.O pb.",
        "Only, by momentarily pressing the F.O priority T.O pb",
        "By momentarily pressing the priority T.O pb on either side stick.",
        "All the above are correct.s",
      ],
      answer: 2,
    },
    {
      id: 37,
      question:
        "In normal electrical configution (GEN 1 ,GEN2,are ON) is there any Bus that is not energized.",
      options: [
        "Yes; AC STAT INV BUS",
        "Yes; AC STAT INV BUS, AC GND FLT BUS,DC GND FLT BUS",
        "Yes; AC STAT INV BUS,AC SHED BUS, DC SHED ESS BUS",
        "NO",
      ],
      answer: 1,
    },
    {
      id: 38,
      question: "GALLEY SHED message on Elect page indicates.",
      options: [
        "Main galley are shed",
        "Secondary galley are shed",
        "Forward galley power is shed.",
        "Aft galley power is shed",
      ],
      answer: 0,
    },
    {
      id: 39,
      question: "What does amber equal sign indicate on the speed scale ?",
      options: [
        "Aircraft is in over speed condition.",
        "VFE corresponding to the next flap lever position.",
        "VFE corresponding to the present flap lever position.",
        "Maximum speed of the aircraft for the present configuration.",
      ],
      answer: 1,
    },
    {
      id: 40,
      question: "When does 'USE MAN PITCH TRIM' PFD message appear?",
      options: [
        "Pitch alternate law with protection is active.",
        "Pitch alternate law without protection is active.",
        "Pitch mechanical back-up law is active.",
        "Pitch direct law is active.",
      ],
      answer: 3,
    },
    {
      id: 41,
      question: "How is the DFDR powered?",
      options: [
        "Automatically on ground after both engine s started",
        "In flight with either engine running only",
        "On ground during the first 5 minutes after electrical power ON",
        "As in ( c ) and after the first engine is started",
      ],
      answer: 3,
    },
    {
      id: 42,
      question: "CRS selection on the STBY /CRS window on RMP is Possible.",
      options: [
        "Once any NAV key is selected and manually setting the CRS with rotary knob.",
        "After NAV key selection then VOR or ILS selection and frequency set the frequency is transferred to active window.",
        "Only when the CRS setting is transferred to active window CRS selection will be effective.",
        "All the above are wrong.",
      ],
      answer: 1,
    },
    {
      id: 43,
      question: "How does Pilot alert the Cabin crew inn case of planned emergency?",
      options: [
        "Through Interphone",
        "By announcing 'PURSER TO COCKPIT PLEASE'",
        "By announcing 'ATTENTION CREW AT STATIONS'",
        "By announcing 'PREPARE CABIN'",
      ],
      answer: 1,
    },
    {
      id: 44,
      question: "Which statement is correct in case of cabin fixed oxygen system?",
      options: [
        "Oxygen masks are deployed automatically when cabin altitude exceeds 14000 feet",
        "Oxygen starts flowing immediately once they are dropped.",
        "As in (a) and if not deployed automatically press the OXY MAN ON pb sw in the cockpit.",
        "All above are correct.",
      ],
      answer: 2,
    },
    {
      id: 45,
      question: "What happens when Type- I door which is armed is opened from outside?",
      options: [
        "Door opens with pneumatic assistance but slide does not inflate",
        "Door will not open",
        "Door opens with pneumatic assistance and slide will inflate",
        "Door opens normally and slide will not deploy",
      ],
      answer: 3,
    },
    {
      id: 46,
      question:
        "What is the warm up time required before applying the takeoff power, after starting the engine?",
      options: ["More than 10 minutes", "2 Minutes", "Less than 3 minutes", "5 minutes"],
      answer: 1,
    },
    {
      id: 47,
      question: "What are the occasions FOB is half boxed AMBER on FUEL page?",
      options: [
        "When both pumps of inner cell fail",
        "When both central tank pumps have failed or both central tank pumps OFF",
        "As in (b), and if both the transfer valves in any one outer tank fails corresponding inner tank reaches low.",
        "All the above are correct",
      ],
      answer: 2,
    },
    {
      id: 48,
      question:
        "How many oxygen cylinders are stowed below the cockpit floor as a part of cockpit fixed oxygen system?",
      options: [
        "Two cylinders for both cockpit crew & observer seats",
        "One Cylinder for both cockpit crew & observer seats",
        "As in ( b) & check one 'Green' color discharge indicator during walk around",
        "As in (a) & check two 'Green' color discharge indicators during walk around",
      ],
      answer: 2,
    },
    {
      id: 49,
      question:
        "After T/O, what will happen If APU Bleed PB remains ON with APU running?",
      options: [
        "No effect",
        "Engine Bleed Valves will open automatically",
        "Engine Bleed Valves remain closed",
        "As in ( c) and it will affect cabin pressurizations",
      ],
      answer: 2,
    },
    {
      id: 50,
      question:
        "What is the indication if salt WTB'S are activated in flight due to slat symmetrical runaway condition?",
      options: ["No indication", "SLATS FAULT.", "SLATS LOCKED", "As in ( c ) and it will affect cabin pressurization"],
      answer: 2,
    },
    {
      id: 51,
      question: "During cross bleed start, what should be the bleed switches?",
      options: [
        "Both engines bleeds ON.",
        "Both engines bleeds OFF",
        "Receiving engine bleed OFF, Running engine bleed ON.",
        "Receiving engine bleed ON, running engine bleed OFF",
      ],
      answer: 2,
    },
    {
      id: 52,
      question: "What is the action required if there is residual brake pressure?",
      options: [
        "Put A/SKID & N/W STRG switch to OFF.",
        "Press brake pedal several times",
        "As in (b ) and is residual pressure remains, select AUTO BRAKE to MED ensuring A/SKID N/W STRG switch in ON position.",
        "Disregard residual brake pressure.",
      ],
      answer: 2,
    },
    {
      id: 53,
      question: "Electrical power of FMGS, 'PLEASE WAlT' appears. What is the meaning of this?",
      options: [
        "Ignore this message and start FMGS preparation",
        "Wait for one minute and carry out FMGS preparation",
        "Allow enough time (3 minutes) for various internal test completion",
        "As in ( C ) wait till the PLEASE WAIT message disappears",
      ],
      answer: 3,
    },
    {
      id: 54,
      question: "When cockpit crew has to select brake fan after touchdown?",
      options: [
        "5 minutes after touch down",
        "Approaching the gate",
        "Either (a) or (b) whichever is earlier",
        "As soon as cockpit crew vacate the runway",
      ],
      answer: 2,
    },
    {
      id: 55,
      question: "Which of these pressurization failure causes CRC and Master Warning?",
      options: [
        "System 1+2 fault",
        "Excess CAB ALT.",
        "OUT FLOW VALVE NOT OPEN",
        "BOTH ( a) and (b)",
      ],
      answer: 1,
    },
    {
      id: 56,
      question:
        "How do you deselect any NAV AID in case if same is not required?",
      options: [
        "Display DATA then POSITION MONITOR access SELECTED NAV AIDS page and deselect the required NAV AID",
        "This can be done directly on the RADIO NAV page",
        "Either through (A) or (B)",
        "This can be done directly on the FLIGHT PLAN A page",
      ],
      answer: 0,
    },
    {
      id: 57,
      question: "In case of LOSS OF BRAKING",
      options: [
        "Follow ECAM checklist",
        "Follow QRH checklist (memory item)",
        "Apply parking brake selector to \"ON' and stop the aircraft",
        "Use Max reverse Thrust to stop air nap",
      ],
      answer: 1,
    },
    {
      id: 58,
      question:
        "As per ECAM ADVISORY conditions, The recommended action for Cabin vertical speed (V/S) exceeding 1800 ft per minute:",
      options: [
        "CPC change over may be attempted",
        "Mode selector to MAN (MANUAL Pressure control)",
        "As per (a) and Mode sel to Man. Wait for 10 seconds, then Mode set to AUTO",
        "None of the above is correct",
      ],
      answer: 2,
    },
    {
      id: 59,
      question: "What are the situations under which ESS TR becomes active",
      options: [
        "Failure of either TR1 or TR2 or TR1 +TR2.",
        "In an electrical emergency configuration",
        "As in (a) and (b)",
        "As in ( c) and also for AC BUS 1 failure.",
      ],
      answer: 3,
    },
    {
      id: 60,
      question:
        "At electrical power of FMGS, 'PLEASW WAIT' appears. What is the meaning of this ?",
      options: [
        "Ignore this message and start FMGS preparation",
        "Wait for one minute and carry out FMGS preparation",
        "Allow enough time (3 minutes) for various internal test completion",
        "As in ( C ) wait till the PLEASE WAIT Message disappears",
      ],
      answer: 3,
    },
    {
      id: 61,
      question:
        "How do you deselect any NAVAID in case of same is not required ?",
      options: [
        "Display DATA then POSITION MONITOR access SELECTED NAV AIDS page and deselect the required NAV AID",
        "This can be done directly on the RADIO NAV page",
        "Either through (A) or (B)",
        "This can be done directly on the FLIGHT PLAN A page",
      ],
      answer: 0,
    },
    {
      id: 62,
      question: "What is the action required if there is residual brake pressure ?",
      options: [
        "Put A/SKID & N?W STRG swith to OFF",
        "Press brake pedal several times",
        "As in (b) and is residual pressure remains. select AUTO BRAKE to MED ensuring A/SKID & N/W STRG switch in ON position",
        "Disregard residual brake pressure.",
      ],
      answer: 2,
    },
    {
      id: 63,
      question:
        "As per ECAM ADVISORY conditions, the recommended action for Cabin vertical speed (V/S) exceeding 1800ft per minute:",
      options: [
        "CPC change over may be attempted",
        "Mode selector to MAN (Manul Pressure control)",
        "As per (a) and Mode sel to MAN. Wait for 10 Seconds, then Mode set to AUTO",
        "None of the above is correct",
      ],
      answer: 2,
    },
    {
      id: 64,
      question: "Which of the systems are lost in case of L/G LGCIU 1 +2 Fault ?",
      options: [
        "Normal L/G Extension",
        "Both thrust reverser",
        "Both Eng app idle",
        "Both (A) and (B) are correct",
      ],
      answer: 3,
    },
    {
      id: 65,
      question: "What are the indications of APU auto shutdown?",
      options: [
        "AVAIL light will extinguish",
        "FAULT light on APU MASTER SWITCH",
        "FIRE WARNING on over head APU FIRE PB",
        "none of the above",
      ],
      answer: 1,
    },
  ],
};
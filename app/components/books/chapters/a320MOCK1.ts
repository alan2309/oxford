import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "MOCK 01 - 2024",
  questions: [
    {
      id: 1,
      question: "What is the recommended method to disengage Autopilot?",
      options: [
        "a) Select autopilot Pb in FCU to 'OFF'",
        "b) Press autopilot instinctive disconnect button on any side stick",
        "c) Move the side-stick",
        "d) Both (a) and (b) are correct",
      ],
      answer: 1,
    },
    {
      id: 2,
      question: "What is the minimum Altitude or time to engage Auto pilot?",
      options: [
        "a) 400 ft or 10 sec after lift off",
        "b) 500 ft or 15 sec after lift off",
        "c) 50 ft or 10 sec after lift off",
        "d) 100 ft or 5 sec after lift off",
      ],
      answer: 3,
    },
    {
      id: 3,
      question: "What is the A/THR operating range if both Engine are running?",
      options: ["a) IDLE to TOGA", "b) IDLE to MCT", "c) IDLE to CLIMB"],
      answer: 2,
    },
    {
      id: 4,
      question: "When does single mode of FMGS operate?",
      options: [
        "a) If anyone MCDU fails",
        "b) If cross-talk fails between FMGC1 & FMGC2",
        "c) If FCU channel 1 fails",
        "d) If anyone FMGC fails",
      ],
      answer: 3,
    },
    {
      id: 5,
      question: "Flight director Indication 1FD- in both FMA Indicates",
      options: [
        "a) FD 2 is failed",
        "b) FD Pb in first officer EFIS panel is switched OFF",
        "c) FMGC 2 is failed",
        "d) all the above are correct",
      ],
      answer: 1,
    },
    {
      id: 6,
      question: "Which page MZFW. CG POSITION and block fuel is entered?",
      options: [
        "a) INIT 'A' Page",
        "b) INIT 'B' Page",
        "c) Take-off performance page",
        "d) PROG Page",
      ],
      answer: 1,
    },
    {
      id: 7,
      question: "What happens to auto thrust system if Engine No 1 EIU fails in flight?",
      options: [
        "a) auto thrust is available",
        "b) auto thrust is not available",
        "c) auto thrust is available for Engine 2 and use manual thrust for engine 1",
      ],
      answer: 1,
    },
    {
      id: 8,
      question: "When does PTU operate in flight?",
      options: [
        "a) Green and Yellow pressure difference in more than 500 PSI and PTU Pb is AUTO",
        "b) Green and Yellow pressure difference is more than 1000 PSI and anyone ENGINE Master Switch in 'ON'",
        "c) Green and Yellow pressure difference is more than 500 PSI and both Engine Master switches 'ON'",
        "d) Green and Yellow pressure difference is more than 1500 PSI",
      ],
      answer: 0,
    },
    {
      id: 9,
      question: "Green Reservoir overheat in indicated by:",
      options: [
        "a) Fault light in Green EDP Pb",
        "b) Fault light in Green EDP and PTU Pb switches",
        "c) Only ECAM message without Fault lights",
        "d) Fault Light flashes only in Green EDP Pb",
      ],
      answer: 1,
    },
    {
      id: 10,
      question: "When do you deploy RAT from hydraulic Panel?",
      options: [
        "a) If Only Blue system pressure is less than 1500 PSL",
        "b) If blue reservoirs low air pressure condition",
        "c) Any two Hydraulic system fail which includes blue pump low pressure condition",
        "d) Anyone system low pressure condition.",
      ],
      answer: 2,
    },
    {
      id: 11,
      question: "Landing gear safety valve closes:",
      options: ["a) Above 260 kts", "b) Above 280 kts", "c) Above 250 kts", "d) Above 220 kts"],
      answer: 0,
    },
    {
      id: 12,
      question: "Which Auto Brake mode to be selected prior to take off?",
      options: [
        "a) Either MED or MAX mode",
        "b) Either LO or MED mode",
        "c) Anyone Mode",
        "d) Only Max mode",
      ],
      answer: 3,
    },
    {
      id: 13,
      question: "Which Brakes are indicated in Triple Brake pressure Indicators?",
      options: [
        "a) Normal brakes only",
        "b) Alternate brakes and parking brakes",
        "c) Normal and alternate brakes",
        "d) Normal and parking brakes",
      ],
      answer: 1,
    },
    {
      id: 14,
      question: "What is the protection available in pitch direct law?",
      options: [
        "a) Low Speed stability",
        "b) High Speed stability",
        "c) No protection",
        "d) Both a & b are correct",
      ],
      answer: 2,
    },
    {
      id: 15,
      question: "During normal law flight what is the max bank angle can be achieved?",
      options: ["a) 67' Degree", "b) 45° Degree", "c) 40° Degree", "d) 33° Degree"],
      answer: 0,
    },
    {
      id: 16,
      question: "Which Hydraulic Pressure is used for slat operation?",
      options: [
        "a) Only Green",
        "b) Green and Blue System",
        "c) Green and Yellow System",
        "d) Yellow and Blue System",
      ],
      answer: 1,
    },
    {
      id: 17,
      question: "Which computer control pitch control in flight with all system are working in Normal law?",
      options: [
        "a) ELAC 1 or ELAC 2",
        "b) ELAC 2",
        "c) ELAC 1",
        "d) ELAC and SEC 1",
      ],
      answer: 1,
    },
    {
      id: 18,
      question: "What is the maximum Roll Rate allowed in Roll Normal Law?",
      options: [
        "a) 10 degree/Sec",
        "b) 25 degree/Sec",
        "c) 15 degree/Sec",
        "d) 30 degree or 25 degree depends on speed.",
      ],
      answer: 2,
    },
    {
      id: 19,
      question: "During approach with AP is OFF, Pitch trim freezes at a height of:",
      options: ["a) 250 ft", "b) 100 ft", "c) 50 ft", "d) 30 ft"],
      answer: 2,
    },
    {
      id: 20,
      question: "Center tank is refueled:",
      options: [
        "a) If FOB is more than 9000 kg",
        "b) If FOB is more than 12200 kg",
        "c) If FOB Is more than 11000 kg",
        "d) If FOB is more than 8000 kg",
      ],
      answer: 1,
    },
    {
      id: 21,
      question: "Which tank receives hot fuel from the engine.",
      options: [
        "a) Outer Tank",
        "b) Whichever tank fuel temp in lower",
        "c) Whichever tank is not full.",
      ],
      answer: 0,
    },
    {
      id: 22,
      question: "When does FADEC self-Powered?",
      options: [
        "a) N2 is more than 56%",
        "b) N2 is more than 43%",
        "c) N2 is more than 12%",
        "d) N2 is more than idle RPM.",
      ],
      answer: 1,
    },
    {
      id: 23,
      question: "Which Ignitors are used for auto start on ground?",
      options: [
        "a) Both Ignitors",
        "b) Either A or B",
        "c) Only Ignitor 'A'",
        "d) Only Ignitor 'B'",
      ],
      answer: 1,
    },
    {
      id: 24,
      question: "How are FWD or AFT cargo door's operated?",
      options: [
        "a) By Electrical motor",
        "b) By Hydraulic Power",
        "c) By Compressed air from a strong cylinder",
        "d) By Mechanically",
      ],
      answer: 1,
    },
    {
      id: 25,
      question: "Are the cargo compartment pressurized?",
      options: [
        "a) Yes",
        "b) No",
        "c) It depends on the modification status of the aircraft",
      ],
      answer: 0,
    },
    {
      id: 26,
      question: "What is the maximum altitude APU Bleed can be used for engine starting?",
      options: ["a) FL 390", "b) FL 100", "c) FL 300", "d) FL 200"],
      answer: 3,
    },
    {
      id: 27,
      question: "When dies Low OIL LEVEL advisory Message Appears in APU page?",
      options: [
        "a) On ground when APU is running with Low oil level.",
        "b) On ground when APU is not running with Low oil level",
        "c) Whenever APU Low oil level is reached irrespective of APU operation",
      ],
      answer: 1,
    },
    {
      id: 28,
      question: "What is the rating of Engine Generator?",
      options: [
        "a) 115V AC, Single phase, 400 Hz & 90 KVA",
        "b) 115V AC, 200Hz,3 phase & 90 KVA",
        "c) 115 V AC,400Hz, 3 phase & 90 KVA",
        "d) 200 VAC, 50 Hz, 3 phase & 20 KVA.",
      ],
      answer: 2,
    },
    {
      id: 29,
      question: "Which bus will power AC ESS Bus when both Engine Generator are working?",
      options: [
        "a) AC BUS 1",
        "b) AC BUS 2",
        "c) Generator 1 directly",
        "d) Either Generator directly",
      ],
      answer: 0,
    },
    {
      id: 30,
      question: "No failure in the Electrical system which buses are powered by TR 1",
      options: [
        "a) DC BUS 1, and DC BAT BUS only",
        "b) DC BUS 1, DC ESS BUS and DC ESS and DC ESS SHED BUS only",
        "c) DC BUS 1, DC BAT BUS, DC ESS BUS and DC ESS SHED BUS",
        "d) DC BUS 1, DC BAT BUS and DC BUS 2",
      ],
      answer: 2,
    },
    {
      id: 31,
      question: "Which buses are powered by RAT EMER Generator in flight (Speed > 140 kts) are inop ?",
      options: [
        "a) AC ESS BUS and DC ESS BUS",
        "b) AC ESS BUS, DC BAT BUS and DC ESS BUS",
        "c) AC ESS BUS, AC ESS SHED BUS and through ESS TR DC ESS BUS and DC BAT BUS",
        "d) AC ESS BUS, AC ESS SHED BUS , and through ESS TR DC ESS and DC ESS SHED BUS",
      ],
      answer: 3,
    },
    {
      id: 32,
      question: "What is the minimum Battery voltage during pre - flight check ?",
      options: ["a) Minimum 28 V", "b) Minimum 25.5 V", "c) Minimum 24 V", "d) Minimum 26.5 V"],
      answer: 1,
    },
    {
      id: 33,
      question: "What is the rating of Transformer Rectifier (TR) ?",
      options: [
        "a)28 V DC & 200 Amps",
        "b) 28 V DC & 100 Amps",
        "c) 28 V DC & 300 Amps",
        "d) 115 V & 200 Amps",
      ],
      answer: 0,
    },
    {
      id: 34,
      question: "Which bleed in given priority to supply to user system?",
      options: [
        "a) Engine Bleed over APU Bleed",
        "b) APU Bleed over Engine Bleed",
        "c) Whichever is selected first is given priority",
      ],
      answer: 1,
    },
    {
      id: 35,
      question: "During flight No 2 Engine pylon leak is detected.",
      options: [
        "a) No 2 Engine Bleed valve and cross Bleed valve will close",
        "b) Only the corresponding bleed valve close and it does not affect cross bleed valve.",
        "c) Both Engine Bleed valves will close.",
      ],
      answer: 0,
    },
    {
      id: 36,
      question: "What is the pre cooler outlet temperature?",
      options: ["a) 150° C", "b) 100° C", "c) 250° C", "d) 200° C"],
      answer: 3,
    },
    {
      id: 37,
      question: "What happens to pack valve if both channels of ACSC 1 fail.",
      options: [
        "a) Pack valve 1 will close.",
        "b) Pack valve will move to LO Flow automatically",
        "c) ACSC 2 will take over.",
        "d) Both \"a\" and \"c\" are correct.",
      ],
      answer: 3,
    },
    {
      id: 38,
      question: "How do you change over the CPC?",
      options: [
        "a) It can not be changed in flight",
        "b) It can be changed by selecting CPC Pb to OFF.",
        "c) It can be changed by selecting MODE switch to MAN and selecting to AUTO after 10 secs.",
      ],
      answer: 2,
    },
    {
      id: 39,
      question: "What is the indication if cabin Altitude is more than 10,000 ft?",
      options: [
        "a) ECAM advisory",
        "b) LEVEL 2 ECAM CAUTION",
        "c) LEVEL 3 ECAM RED WARNING.",
      ],
      answer: 2,
    },
    {
      id: 40,
      question: "What is the indication in the DU for the associated DMC failure?",
      options: [
        "a) Invalid Display unit message",
        "b) Invalid DATA message in the affected Display Units",
        "c) F indication in Amber.",
        "d) No indication in the DU except ECAM message on E/WD",
      ],
      answer: 1,
    },
    {
      id: 41,
      question: "Which computer provides RED warning?",
      options: [
        "a) DMC 1 or 3",
        "b) SDAC 1 or 2",
        "c) SDAC 1 and 2",
        "d) FWC 1 or FWC 2.",
      ],
      answer: 3,
    },
    {
      id: 42,
      question: "How are pilots seat moved?",
      options: [
        "a) Only by electrical power",
        "b) By mechanically only",
        "c) Both Electrical power and mechanically also",
      ],
      answer: 2,
    },
    {
      id: 43,
      question: "What happens to cockpit door locking system if there is loss of electricity?",
      options: [
        "a) Door remains locked",
        "b) Door is unlocked and remains in close position",
        "c) Door is unlocked and open automatically",
      ],
      answer: 1,
    },
    {
      id: 44,
      question: "During APU start with only batteries",
      options: [
        "a) APU page will not be displayed",
        "b) APU page is available is lower ECAM",
        "c) APU cannot be started",
      ],
      answer: 0,
    },
    {
      id: 45,
      question: "If APU overspeed occurs on ground while APU is running.",
      options: [
        "a) APU auto shut down takes place",
        "b) Only ECAM warning comes",
        "c) APU has to be shut down manually.",
      ],
      answer: 0,
    },
    {
      id: 46,
      question: "Which DMC'S are used during normal flight",
      options: ["a) DMC 1 & DMC 3", "b) DMC 1 and DMC 2", "c) DMC 2 and DMC 3"],
      answer: 1,
    },
    {
      id: 47,
      question: "How many TR's are available in Electrical system.",
      options: ["a) TR1, TR 2and TR 3", "b) TRI & TR 2 only", "c) TR 1,TR2 and ESS TR"],
      answer: 2,
    },
    {
      id: 48,
      question: "The PACK flow control valve close automatically in case of",
      options: [
        "A. Pack overheat",
        "B. Engine starting",
        "C. Operation of the Fire or Ditching pb",
        "D. All of the above",
      ],
      answer: 3,
    },
    {
      id: 49,
      question: "The basic navigation mode is",
      options: [
        "A. GPS Navigation",
        "B. Radio Navigation",
        "C. GPS/IRS Navigation",
        "D. GPS/Radio Navigation",
      ],
      answer: 2,
    },
    {
      id: 50,
      question:
        "After receiving a position from each of the 3 IRS, the FMGC calculates a mean weighted average called as",
      options: ["A.BIAS", "B. FM position", "C. MIX IRS position", "D. All the above"],
      answer: 2,
    },
    {
      id: 51,
      question:
        "If one of the GPS source is rejected by the ADIRU s, then",
      options: [
        "A. ADIRUs compute aircraft position without GPS",
        "B. ADIRUs compute aircraft position with radio position update",
        "C. All ADIRUs will select the remaining GPS source",
      ],
      answer: 2,
    },
    {
      id: 52,
      question: "The vector from MIX IRS position to Radio/GPS position is called",
      options: ["A. GPIRS", "B. MIX IRS/GPS", "C. BIAS", "D. None"],
      answer: 2,
    },
    {
      id: 53,
      question: "If both FMGCs or both MCDUs fail, then the radio tuning is done by ?",
      options: ["A. FMGC software", "B. MCDU RAD NAV page", "C. RMP"],
      answer: 2,
    },
    {
      id: 54,
      question:
        "The modes which steer the aircraft according to target values that the pilot selects and the FCU windows display",
      options: ["A. Managed Mode", "B. Selected Mode", "C. Either \"a\" or \"b\""],
      answer: 1,
    },
    {
      id: 55,
      question: "NAV is FMA in",
      options: ["A. Managed Mode", "B. Selected Mode", "C. Either \"a\" or \"b\""],
      answer: 0,
    },
    {
      id: 56,
      question: "CVR light is energized automatically",
      options: [
        "a. On the ground during the first 5 min after the aircraft electrical network is energized",
        "b. On the ground with one engine running",
        "C. In flight",
        "d. All are correct",
      ],
      answer: 3,
    },
    {
      id: 57,
      question: "If CVR Test push button is pressed and held it activates the test,",
      options: [
        "a. If the CVR is ON and/or the GND CTL pushbutton pressed",
        "b. During the first 5 min after energization of the aircraft electrical network",
        "c. The parking brake is ON",
        "d. All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 58,
      question: "The Aircraft Communication Addressing and Reporting System (ACARS)",
      options: [
        "a. Allows the direct exchange of data between aircraft and airline ground computers",
        "b. Uses VHF 3.",
        "C. Both \"a\" and \"b\" are correct",
      ],
      answer: 2,
    },
    {
      id: 59,
      question:
        "ACARS operation is performed through the already available cockpit equipment, namely",
      options: [
        "a. ECAM for operational indications",
        "b. MCDU for control of ACARS related functions",
        "C. PRINTER for hard-copies",
        "d. All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 60,
      question:
        'On ECAM Memo, a steady green "ACARS STBY" advisory is displayed,',
      options: [
        "a. In case of ACARS' communications linked between the aircraft and ground",
        "b. In case of ACARS' communications loss between the aircraft and ground",
        "c. Either \"a\" or \"b\"",
      ],
      answer: 1,
    },
    {
      id: 61,
      question:
        "The fuel flow to an engine can be stopped by its low pressure (LP) fuel valve, the closure of the LP fuel valve is by:",
      options: [
        "a. The engine master switch",
        "b. The Ditching push button",
        "c. The ENG FIRE PUSH pushbutton",
        "d. Both \"a\" and \"c\" are correct",
      ],
      answer: 3,
    },
    {
      id: 62,
      question: "Mark the correct statement",
      options: [
        "a. All wing tank pumps remain on throughout the flight",
        "b. A cross feed valve controlled by a double motor allows both engines to be fed one side or one engine to be fed from both sides",
        "C. Both \"a\" and \"b\" are correct",
      ],
      answer: 2,
    },
    {
      id: 63,
      question:
        "Each center tank pump stops, until approximately_______ kg of the fuel in its associated inner tank fuel has been used (when the fuel level reaches the under full sensors).",
      options: ["a. 500", "b. 750", "c.5000", "d.12000"],
      answer: 0,
    },
    {
      id: 64,
      question: "If APU Bleed is ON and the crossbleed valve is SHUT,",
      options: [
        "A. The Engine bleed valve 1, remains open",
        "B. The Engine bleed valve 2, remains open",
        "C. Both bleed valves 1 and 2 close",
      ],
      answer: 1,
    },
    {
      id: 65,
      question:
        "In case of Engine fire and overheat detection system, the fire warning appears in case of",
      options: [
        "A. A fire signal from both loop A and B",
        "B. A fire signal from one loop when the other is faulty",
        "C. Breaks in both loops occuring within 5 s of each other (flame effect)",
        "D. Any of the above is correct",
      ],
      answer: 3,
    },
    {
      id: 66,
      question: "The Weather radar display on ND",
      options: [
        "A. Can be seen in all modes of ND.",
        "B. Can be seen only in the PLAN mode of ND",
        "C. Can be seen on all modes of ND except PLAN",
      ],
      answer: 2,
    },
    {
      id: 67,
      question: "On ground the slide slip Indicator colour on PFD Is",
      options: [
        "A. Yellow and indicates vertical acceleration",
        "B. Yellow and indicates lateral acceleration",
        "C. Blue and indicates beta target",
        "D. Blue only",
      ],
      answer: 1,
    },
    {
      id: 68,
      question:
        "For APU, presence of a red disk, which is outside at the rear of the fuselage, signals that",
      options: [
        "A. The agent is discharged overboard due to bottle overpressure",
        "B. The agent is not discharged overboard due to bottle overpressure",
        "C. The bottle has been discharged due to APU fire on ground",
      ],
      answer: 1,
    },
    {
      id: 69,
      question: "CPCs receive signals from",
      options: [
        "A. The Air Data Inertial Reference System (ADIRS), theFlight Management and Guidance Computer (FMGC)",
        "B. The Engine Interface Unit (EIU)",
        "C. The Landing Gear Control Interface Unit (LGCIU)",
        "D. All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 70,
      question: "Hot-air pressure-regulating valve closes automatically, if",
      options: [
        "A. The duct overheats",
        "B. Both cabin trim air valves fail",
        "C. The cockpit trim air valve fails",
        "D. Any of the above is correct",
      ],
      answer: 3,
    },
    {
      id: 71,
      question:
        "If DMC 2 fails the switching action required to bring back the display of F/O PFD, ND and SD is",
      options: [
        "A. Switching the EIS DMC selector to F/O DMC 2",
        "B. Switching the EIS DMC selector to F/O DMC 3",
        "C. No switching is required. All relevant switchings happen automatically",
      ],
      answer: 1,
    },
    {
      id: 72,
      question: "The DMC 2 gives signal to",
      options: [
        "PFD 1 ND 1 and Lower ECAM",
        "PFD 1 ND 1, Upper ECAM",
        "PFD 1 ND 2 and Upper ECAM",
        "PFD 2, ND 2 and Lower ECAM",
      ],
      answer: 3,
    },
    {
      id: 73,
      question: "The level 2 warning",
      options: [
        "A Triggers a CRC and an amber caution",
        "B. Triggers a single chime and an amber caution",
        "C Triggers no chime and only an amber advisory message on upper ECAM appears",
      ],
      answer: 1,
    },
    {
      id: 74,
      question: "Secondary failures are indicated",
      options: [
        "A. On the right side of upper ECAM memo with a star mark",
        "B. Boxed in amber on the memo section of upper ECAM",
        "C. Underlined in amber on the left side of Upper ECAM memo",
      ],
      answer: 0,
    },
    {
      id: 75,
      question: "Trim Air Valve, each one optimizes the temperature by",
      options: ["a. Adding hot air", "b. Adding fresh air", "c. Modulation of pack flow"],
      answer: 0,
    },
    {
      id: 76,
      question: "The mixing unit is connected to:",
      options: [
        "a. Packs, cabin air, emergency ram air and LP ground connector",
        "b. Packs, Emergency Ram Air Inlet and LP ground connector",
        "c. Packs and cabin air",
      ],
      answer: 0,
    },
    {
      id: 77,
      question: "Mark the incorrect statement",
      options: [
        "a. On the ground the wing anti-icing control valves open for 30 s only (test sequence)",
        "b. When an engine anti-ice valve is open, the N1 or EPR limit is automatically reduced",
        "c. When an engine anti-ice valve is open, if necessary, the idle N1 or EPR is automatically reduced for both engines in order to provide the required pressure.",
      ],
      answer: 2,
    },
    {
      id: 78,
      question: "Pack operation is controlled by",
      options: [
        "a. Signals coming from the pack controller or the Controller (ACSC)Air Conditioning System",
        "b. Signals coming from the pressurization controller or the Cabin Pressure Controller (CPC)",
        "c. Signals coming from the bleed controller or the Bleed Monitoring Computer (BMC)",
      ],
      answer: 0,
    },
    {
      id: 79,
      question:
        'On the AGENT push button on the Engine fire panel "DISCH" lights up amber',
      options: [
        "a. When the Squib gets armed",
        "b. When the Fire push button is pressed and it pops out",
        "c. When the fire extinguisher bottle has lost pressure",
      ],
      answer: 2,
    },
    {
      id: 80,
      question:
        "When the RAM AIR pushbutton is ON, and Delta P is below 1 PSI the system",
      options: [
        "a. Drives the outflow valve about 50% open if it is under automatic control",
        "b. If the system is under manual control, the outflow valve does not automatically open, even if Delta P is below 1 PSI",
        "C. Both \"a\" and \"b\" above are correct",
      ],
      answer: 2,
    },
    {
      id: 81,
      question:
        "The light(s) which go off automatically when landing gear is retracted is/are",
      options: [
        "a. Taxi lights only",
        "b. Take off lights only",
        "c. Taxi and takeoff light only",
        "d. Taxi, takeoff and runway turn-off lights",
      ],
      answer: 3,
    },
    {
      id: 82,
      question:
        "Which key allows the flight crew to inhibit the audio navigation signals (VOR, ADF)",
      options: [
        "a. ON VOICE key on ACP",
        "b. RESET key on ACP",
        "c. As in \"a\" and pressing this key filters out IDENT signals and turns on the green ON light",
        "d. As in \"b\" and pressing this key filters out IDENT signals and turns on the green ON light",
      ],
      answer: 2,
    },
    {
      id: 83,
      question: "Mark the incorrect statement regarding SELCAL",
      options: [
        "a. Upon receiving a call code corresponding to that of the aircraft, the SELCAL system aurally and visually advises the flight crew that a ground station is calling the aircraft",
        "b. The aural warning is inhibited during takeoff and landing",
        "c. The aural warning is not inhibited during takeoff and landing",
      ],
      answer: 2,
    },
    {
      id: 84,
      question:
        "If RADIO is selected on the side stick when the INT/RAD switch is on INT on the ACP, which of the following is correct",
      options: [
        "a. The interphone function has priority over the radio function",
        "b. The radio function has priority over the interphone function",
        "c. The INT/RAD switch operation is inhibited if RADIO is selected on the ACP",
      ],
      answer: 1,
    },
    {
      id: 85,
      question:
        "Mark the correct statement w.r.t. manual mode of the pressurization system",
      options: [
        "a. There is slow operation of the outflow valves",
        "b. There is limited resolution of the outflow valves' position on the ECAM",
        "c. The visual ECAM indication of a change in the outflow valves position can take upto 5 sec",
        "d. All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 86,
      question:
        'The word "SAFETY" and the diagram on ECAM pressurization page appear in amber',
      options: [
        "a. When outflow valve 95% open",
        "b. When either safety valve is not closed",
        "c. When pre - pressurization does not take place properly during take-off",
      ],
      answer: 1,
    },
    {
      id: 87,
      question:
        "To prepare for ditching, the flight crew must press the DITCHING pushbutton on the CABIN PRESS control panel to close the",
      options: [
        "a. Outflow valve, the emergency ram air inlet",
        "b. The avionics ventilation inlet and extract valves",
        "c. The pack flow control valves, and the FWD cargo outlet isolation valve",
        "d. All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 88,
      question:
        "When the BLOWER pushbutton switch is set at OVRD",
      options: [
        "a. The blower and the extract fans are stopped",
        "b. The blower fan is stopped and the extract fan continues to run",
        "c. The extract fan is stopped",
      ],
      answer: 1,
    },
    {
      id: 89,
      question:
        "When the smoke detector detects smoke in the avionics ventilation air",
      options: [
        "a. The BLOWER FAULT light comes on",
        "b. The EXTRACT FAULT light comes on",
        "c. The BLOWER and the EXTRACT FAULT lights come on",
      ],
      answer: 2,
    },
    {
      id: 90,
      question:
        "There are ___ electrical transfer valves which are mounted in each wing to permit fuel to transfer from _____ tank to ____ ?",
      options: [
        "a. 2, inner, outer",
        "b. 2, outer, inner",
        "c. 4, inner, outer",
        "d. 4, outer, inner",
      ],
      answer: 1,
    },
    {
      id: 91,
      question:
        "When both the BLOWER and the EXTRACT pushbuttons are set to the OVRD position",
      options: [
        "a. The air conditioning system supplies cooling air, which is then exhausted overboard",
        "b. The blower fan stops",
        "c. As in \"a\" and the extract fan stops",
        "d. Both \"a\" and \"b\" are correct",
      ],
      answer: 3,
    },
    {
      id: 92,
      question:
        "When a crew member turns the LG emergency extension handle clock-wise, the first turn",
      options: [
        "a. Unlocks the landing gear doors and the main and nose main gear",
        "b. Allows gravity to drop the gear into the extended position",
        "c. Isolates the landing gear hydraulics from the green hydraulic system",
      ],
      answer: 2,
    },
    {
      id: 93,
      question:
        "Mark the correct statement regarding the AGENT push button on the Engine Fire panel:",
      options: [
        'a. "SQUIB" lights up white when the flight crew pops the ENG FIRE button for its engine to help the flight crew identify the AGENT pushbutton to be activated',
        'b. "SQUIB" lights up amber when the flight crew pops the ENG FIRE button for its engine to help the flight crew identify the AGENT pushbutton to be activated',
        "c. Both Squib and Disch light up amber",
      ],
      answer: 0,
    },
    {
      id: 94,
      question: "ALPHA FLOOR is a protection that commands",
      options: [
        "A. TOGA thrust, if thrust levers are at CL position.",
        "B. TOGA thrust, if thrust levers are at IDLE position.",
        "C. TOGA thrust, regardless of the thrust levers' positions.",
      ],
      answer: 2,
    },
    {
      id: 95,
      question:
        "On pressing the TEST push button switch on the APU maintenance panel which circuit(s) is/are tested",
      options: [
        "a. Fire warning circuit",
        "b. Auto extinguishing circuit",
        "c. Shutdown circuit",
        "d. All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 96,
      question:
        "In the avionics compartment, when smoke is detected for more than 5 secs, which of the following happen",
      options: [
        "a. A single chime sounds and The MASTER CAUTION lights, on the glareshield, light up.The ECAM displays a caution on the E/WD",
        "b . The SMOKE light, on the EMER ELEC PWR panel, lights up",
        "c. The BLOWER and EXTRACT FAULT, on the VENTILATION panel, light up",
        "d. All the above",
      ],
      answer: 3,
    },
    {
      id: 97,
      question: "The maximum speed for operation of the sliding window is",
      options: ["a. 200kts", "b. 230 kts", "c. 250kts", "d.280kts"],
      answer: 0,
    },
    {
      id: 98,
      question: "The 5th column of FMAs is for",
      options: [
        "a. Engagement status of AP, FD and A/THR.",
        "b. Lateral modes",
        "c. Vertical modes",
      ],
      answer: 0,
    },
    {
      id: 99,
      question: "The unpressurized area(s) is/are",
      options: [
        "a. Radome",
        "b. Air conditioning pack",
        "c. Main gear bay",
        "d. All are correct",
      ],
      answer: 3,
    },
    {
      id: 100,
      question: "Mark the correct statement regarding APU FIRE",
      options: [
        "a. The red APU FIRE light comes on and an external warning horn sounds when the system detects an APU fire",
        "b. The APU fire extinguisher discharges automatically 3 s after the appearance of the fire warning",
        "C. The APU FIRE light goes out when the fire has been extinguished",
        "d. All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 101,
      question: "The red warnings are triggered by",
      options: ["a. FWC", "b. SDAC", "c. Both 'a' & 'b' are correct"],
      answer: 0,
    },
    {
      id: 102,
      question: "Safety valves are located",
      options: [
        "a. on the rear pressure bulkhead, below the flotation line",
        "b. on the rear pressure bulkhead, above the flotation line",
        "c. on the front pressure bulkhead, above the flotation line",
      ],
      answer: 1,
    },
    {
      id: 103,
      question:
        "Mark the correct statement regarding Cargo Smoke panel DISCH light",
      options: [
        "a. Within 60 s after pressing the discharge pushbutton, the white DISCH light comes on",
        "b. As in \"a\" and this light indicates that the agent bottle has fully discharged",
        "c. Within 60 s after pressing the discharge pushbutton, the amber DISCH light comes on",
        "d. As in \"c\" and this light indicates that the agent bottle has fully discharged",
      ],
      answer: 3,
    },
    {
      id: 104,
      question: "The electrical heating in anti-icing system is used in",
      options: [
        "a. Flight compartment windows",
        "b. Sensors, pitot probes and static ports",
        "c. Waste-water drain mast",
        "d. All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 105,
      question: "Mark the correct statement",
      options: [
        "a. Windshield heating operates at low power on the ground and at normal power In flight",
        "b. Heating level changeover is automatic",
        "c. Only one heating level exists for the windows",
        "d. All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 106,
      question: "The probes are heated",
      options: [
        "a. Automatically when at least one engine is running, or when the aircraft is in flight",
        "b. Manually, when the flight crew switches ON the PROBE/WINDOW HEAT pb",
        "c. Both are correct",
      ],
      answer: 2,
    },
    {
      id: 107,
      question: "Mark the incorrect statement regarding rain repellent",
      options: [
        "a. In moderate to heavy rain, the flight crew can spray a rain repellent liquid on the windshield to improve visibility",
        "b. It takes 30 s approx. for the windows to be covered with spray",
        "c. Separate pushbuttons control rain repellent application on each side of the windshield",
        "d. None",
      ],
      answer: 3,
    },
    {
      id: 108,
      question:
        "Two dimmable dome lights provide lighting for the overall cockpit. When the batteries are supplying electrical power",
      options: [
        "a. Only the left-hand dome light is on line",
        "b. Only the right-hand dome light is on line",
        "c. None of the dome light is on line",
      ],
      answer: 1,
    },
    {
      id: 109,
      question: "DOME light switch has position(s)",
      options: ["a. 1", "b.2", "c. 3", "d. 4"],
      answer: 2,
    },
    {
      id: 110,
      question: "Mark the correct statement",
      options: [
        "a. Each of the 2 RAIN RPLNT pushbuttons control the application of rain repellent fluid to the corresponding side of the front windshield",
        "b. As in \"a\" and rain repellent function is inhibited when the aircraft is on the ground and the engines are stopped",
        "c. As in \"a\" and rain repellent function is inhibited when the aircraft is on the ground and the engines are running",
      ],
      answer: 1,
    },
    {
      id: 111,
      question: "Which of the following is correct regarding ACP?",
      options: [
        "a. The crew can switch to the third ACP if ACP1 or ACP2 fails",
        "b. When the crew does this, it takes away the third occupant's access to the acoustic equipment",
        "C. AUDIO 3 XFRD appears in green on the ECAM MEMO display",
        "all of the above",
      ],
      answer: 3,
    },
    {
      id: 112,
      question: "The Flight Management (FM) part controls the following functions:",
      options: [
        "a. Navigation and management of navigation radios, flight planning",
        "b. Prediction and optimization of performance",
        "c. Display management",
        "d. All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 113,
      question:
        "The WING ANTI ICE push button switch FAULT Light comes on amber, and caution appears on ECAM, if",
      options: [
        "a. The position of the anti-icing control valve is not the required position",
        "b. Low pressure is detected",
        "c. The amber FAULT light comes on briefly as the valves transit",
        "d. Any of the above is correct",
      ],
      answer: 3,
    },
    {
      id: 114,
      question: "In case of Engine anti-ice valve, if electrical power fails, the valves",
      options: ["a. Open", "b. Close", "c. Stay in the last position where the electrical power fails"],
      answer: 0,
    },
    {
      id: 115,
      question: "The hot air in anti-icing system is used to anti-ice",
      options: [
        "a. Three outboard leading-edge slats of each wing",
        "b. Engine air intakes",
        "c. Both \"a\" and \"b\"",
      ],
      answer: 2,
    },
    {
      id: 116,
      question: "Window heating comes on:",
      options: [
        "a. Automatically when at least one engine is running, or when the aircraft is in flight",
        "b. As in \"a\" and manually, before engine start, when the flight crew switches ON the PROBE/WINDOW HEAT pushbutton switch",
        "only in flight after application of take off thrust",
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/ebed3f1c-6707-40ba-9cd4-25fede05a62a.png",
    },
    {
      id: 117,
      question: "Approximate refueling time at nominal pressure is:",
      options: [
        "a. 10 min for wing tanks. 15 mins for all tanks",
        "b. 17 min for wing tanks. 20 min for all tanks",
        "c. 20 min for wing tanks. 25 min for all tanks",
        "d. 27 min for wing tanks. 30 min for all tanks",
      ],
      answer: 1,
    },
    {
      id: 118,
      question: "Mode select pb FAULT light amber light comes on, and ECAM caution comes on",
      options: [
        "a. When center tank has more than 250 kg of fuel and the left or right wing tank has less than 5 000 kg",
        "b. When center tank has more than 500 kg of fuel and the left or right wing tank has less than 5 000 kg",
        "c. When center tank has more than 750 kg of fuel and the left or right wing tank has less than 5 000 kg",
      ],
      answer: 0,
    },
    {
      id: 119,
      question: "When does FAULT light in amber come ON on MODE SEL pb on the FUEL panel in cockpit",
      options: [
        "a. When center tank has >50kg of fuel and the left or right wing tank has <5000kg",
        "b. When center tank has >150kg of fuel and the left or right wing tank has <5000kg",
        "c. When center tank has >250kg of fuel and the left or right wing tank has <5000kg",
      ],
      answer: 2,
    },
    {
      id: 120,
      question: "Mark the incorrect statement:",
      options: [
        "A. The fuel system supplies fuel to the combustion chamber at the required flow rate, pressure and temperature.",
        "B. The fuel flows from the tank, via the fuel/oil heat exchanger to LP fuel pump unit and then to the HMU and to the fuel nozzles.",
        "C. The fuel flows from the tank, via the LP fuel pump unit to the fuel/oil heat exchanger and then to the HMU and to the fuel nozzles.",
      ],
      answer: 1,
    },
    {
      id: 121,
      question: "The ignition cuts off automatically when",
      options: ["A. N1 reaches 43%", "B. N2 reaches 43%", "C. Both of the above are correct."],
      answer: 1,
    },
    {
      id: 122,
      question: "Mark the incorrect statement",
      options: [
        "A. The FADEC computes the thrust rating limit for each thrust lever position",
        "B. The FADEC computes the thrust rating limit for thrust lever position when it is kept only in the specified detents",
        "C. The thrust levers can only be moved - manually",
      ],
      answer: 1,
    },
    {
      id: 123,
      question: "The engines are said to be in the Manual mode when",
      options: [
        "A. A/THR is not armed",
        "B. A/THR is armed and not active",
        "C. Either of the above is correct",
      ],
      answer: 2,
    },
    {
      id: 124,
      question: "In case of manual start of engine on ground, the ignition takes place",
      options: [
        "A. When ENG MODE SEL is set to IGN/START position",
        "B. When ENG MASTER lever is set to ON",
        "C. Either of the above",
      ],
      answer: 1,
    },
    {
      id: 125,
      question: "When engine is running, continuous ignition is automatically selected in case:",
      options: [
        "A. ENG ANTI-ICE pb is ON",
        "B. MAX/FLX TO Thrust is selected",
        "C. Cycling of MASTER lever ON-OFF-ON",
        "D. All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 126,
      question: "What is ACP",
      options: [
        "A. ACARS control Panel",
        "B. Amplitude Control Panel",
        "C. Audio Control Panel",
      ],
      answer: 2,
    },
    {
      id: 127,
      question:
        "In the RMP, pressing_____ moves the active frequency to the standby window and the standby frequency to the active window",
      options: [
        "A. Radio Com keys",
        "B. Transfer Key",
        "C. AM pushbutton",
        "D. NAV pushbutton",
      ],
      answer: 1,
    },
    {
      id: 128,
      question: "CIDS is",
      options: [
        "A. Cabin Inter Display System",
        "B. Cabin Intercommunication Data System",
        "C. Cockpit Intercommunication Data System",
        "D. Cockpit Interphone Data System",
      ],
      answer: 1,
    },
    {
      id: 129,
      question: "The CVR records",
      options: [
        "A. Direct conversation between crew members in the cockpit",
        "B. All aural sounded in the cockpit",
        "C. Announcement transmitted over the PA system, if PA reception is selected on at least one panel",
        "D. All the above",
      ],
      answer: 3,
    },
    {
      id: 130,
      question:
        "The cabin crew can modify each cabin zone temperature that is selected from the cockpit, with a limited authority of",
      options: ["A. ±2°C", "B. ±15°C", "C. ±12°C", "D. ± 18 °C"],
      answer: 0,
    },
    {
      id: 131,
      question: "Mark the incorrect statement",
      options: [
        "A. Two main transformer rectifiers, TR 1 and TR 2, supply the aircraft's electrical system, with up to 200 A of DC current",
        "B. Two main batteries, each with a normal capacity of 23 Ah, are permanently connected to the two hot buses",
        "C. The aircraft has two types of C/Bs: Monitored (green) and Non-monitored (black)",
        "D. None",
      ],
      answer: 3,
    },
    {
      id: 132,
      question: "In the ground function of pressurization system",
      options: ["A. The pre pressurization takes place", "B. The outflow valve is fully open"],
      answer: 1,
    },
    {
      id: 133,
      question: "Alpha Floor Activation in Flight, A/THR Will Increase Power",
      options: [
        "a) Up to Climb Power",
        "b) Up to TOGA power",
        "c) Up to MCT power",
        "d) Till speed increases above VLS.",
      ],
      answer: 1,
    },
    {
      id: 134,
      question: "Engine fire Pb controls",
      options: [
        "a) LP fuel shut-off valve only",
        "b) HP fuel shut-off valve only",
        "c) Both (a) and (b) are correct",
      ],
      answer: 0,
    },
    {
      id: 135,
      question: "STROBE LIGHT switch is in Auto:",
      options: [
        "a) Strobe lights will flash after engine start",
        "b) Strobe lights will flash after aircraft Lift-off",
        "c) Strobe lights will flash after slat is retracted in flight",
      ],
      answer: 1,
    },
    {
      id: 136,
      question: "How are Pilots seats moved?",
      options: [
        "a) Only by electrical power",
        "b) By mechanically only",
        "c) Bath electrical power and mechanically also",
      ],
      answer: 2,
    },
    {
      id: 137,
      question: "IF APU overspeed occurs on ground while APU is running(on the ground) ?",
      options: [
        "a) APU auto shut down takes place",
        "b) only ECAM warning comes",
        "c) APU has to be shut down manually.",
      ],
      answer: 0,
    },
    {
      id: 138,
      question: "Which DMC'S are used during normal flight",
      options: ["a) DMC1 & DMC3", "B) DMC1 & DMC2", "C) DMC2 & DMC3"],
      answer: 1,
    },
    {
      id: 139,
      question: "What is the FMA indication if A/THR is ARMED",
      options: [
        "A) A/THR indication is BLUE",
        "B) A/THR Indication is GREEN",
        "C) A/THR indication is WHITE",
        "D) A/THR indication is magenta",
      ],
      answer: 0,
    },
    {
      id: 140,
      question: "What is the indication, if anyone side stick is de - activated",
      options: [
        "a) No indication",
        "b) red arrow light illuminates on the de- activated side",
        "c) Both red arrow light & green lights are ON, on the de-activated site",
      ],
      answer: 1,
    },
    {
      id: 141,
      question: "Which occasion both Auto Pilot can be engaged during the fight?",
      options: [
        "a) During turbulence in cruise fight",
        "b) During ILS approach, after selecting APPROACH Pb in FCU",
        "c) During expedite descent",
        "d) During managed mode",
      ],
      answer: 1,
    },
    {
      id: 142,
      question: "what is the indication in FCU for managed Speed?",
      options: [
        "a) Speed indication in IAS/MACH",
        "b) Speed indication in MACH with white dot",
        "c) Speed window shows dashes with white dot",
      ],
      answer: 2,
    },
    {
      id: 143,
      question: "GS mini function is available, if",
      options: [
        "a) Only managed speed mode is engaged",
        "b) Only selected speed mode is engaged",
        "c) Either managed speed mode or selected speed mode is engaged",
      ],
      answer: 0,
    },
    {
      id: 144,
      question: "What is the effect on Hydraulic system if No 2 Engine is shutdown in flight?",
      options: [
        "a) All the three systems continue to provide hydraulic pressure",
        "b) yellow system pressure is lost.",
        "c) Yellow system is powered by PTU",
        "d) Both (a) & (c) are correct.",
      ],
      answer: 3,
    },
    {
      id: 145,
      question: "Which Hydraulic system are fitted with fire shut off valves?",
      options: [
        "a) Only Blue System",
        "b) Both Green and Yellow system",
        "c) Both Green and Blue system",
        "d) Both Blue and yellow system",
      ],
      answer: 1,
    },
    {
      id: 146,
      question: "Which Hydraulic Pressure is used for parking brake?",
      options: [
        "a) Only yellow system pressure",
        "b) Only yellow brake accumulator pressure",
        "c) Either yellow system or brake accumulator pressure",
        "d) Either yellow accumulator of green system pressure",
      ],
      answer: 2,
    },
    {
      id: 147,
      question: "Below what speed Anti Skid is deactivated?",
      options: ["a) 20 Kts", "b) 30 Kts", "c) 40 kts", "d) 10 kts"],
      answer: 0,
    },
    {
      id: 148,
      question: "Which brake system is available if Anti skid system is lost?",
      options: [
        "a) Auto brakes only",
        "b) Normal brakes with green Hydraulic power",
        "c) Alternate brake without Anti skid",
        "d) Normal brakes and parking brakes",
      ],
      answer: 2,
    },
    {
      id: 149,
      question: 'When does "BRAKES HOT" ECAM caution come?',
      options: [
        "a) If brake temp is more than 100 C",
        "b) if brake temp is more than 150 C",
        "c) If brake temp is more than 200 C",
        "d) if brake temp is more than 300 C",
      ],
      answer: 3,
    },
    {
      id: 150,
      question: "Which LGCIU provides landing gear indication to main instrument panel indicator?",
      options: [
        "a) Only LGCIU 1",
        "b) Either LGCIU 1 or LGCUI 2",
        "c) Normally LGCIU 1 if it falls then LGCIU 2",
        "d) Always LGCIU 2",
      ],
      answer: 0,
    },
  ],
};  
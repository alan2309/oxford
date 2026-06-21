import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "MOCK TEST - 01",
  questions: [
    {
      id: 1,
      question: "How is starboard drift represented ?",
      options: [
        "Course + drift = track",
        "Track is greater than course",
        "Drift + track = course",
        "Both A and B",
      ],
      answer: 3,
    },
    {
      id: 2,
      question:
        "When an aircraft on a westerly heading on the northern hemisphere accelerates, the effect of the acceleration error causes the magnetic compass to:",
      options: [
        "indicate a turn towards the north",
        "lag behind the turning rate of the aircraft",
        "indicate a turn towards the south",
        "to turn faster than the actual turning rate of the aircraft",
      ],
      answer: 0,
    },
    {
      id: 3,
      question:
        "When accelerating on a westerly heading in the northern hemisphere, the compass card of a direct reading magnetic compass will turn:",
      options: [
        "anti-clockwise giving an apparent turn towards the north",
        "anti-clockwise giving an apparent turn towards the south",
        "clockwise giving an apparent turn towards the north",
        "clockwise giving an apparent turn towards the south",
      ],
      answer: 0,
    },
    {
      id: 4,
      question: "V2 cannot be less than",
      options: ["1.1 Vso", "1.05 vmcg", "1.1 VMCA", "1.15 VR"],
      answer: 2,
    },
    {
      id: 5,
      question: "The angle between True North and Magnetic North is called :",
      options: ["variation", "deviation", "compass error", "Drift"],
      answer: 0,
    },
    {
      id: 6,
      question: "How is Great Circle defined?",
      options: [
        "Shortest distance between 2 points",
        "plane passing through center of earth",
        "radio waves follow Great Circle Routes",
        "All of the above",
      ],
      answer: 3,
    },
    {
      id: 7,
      question: 'What is the meaning of the term ""standard time"" ?',
      options: [
        "It is the time set by the legal authorities for a country or part of a country",
        "It is the time zone system applicable only in the USA",
        "It is an expression for local mean time",
        "It is another term for UTC",
      ],
      answer: 0,
    },
    {
      id: 8,
      question:
        "The balanced field length for an aircraft is when, in the event of an engine failure during take-off:",
      options: [
        "the take-off run required is equal to the accelerate-stop-distance required",
        "the distance to accelerate is equal to the distance to stop",
        "the take-off distance required is equal to the accelerate-stop-distance required(TODR=ASDR)",
        "the take-off distance required is equal to the take-off run required",
      ],
      answer: 2,
    },
    {
      id: 9,
      question: "When do we perform a Flex takeoff?",
      options: [
        "Atow<Mtow (structural).",
        "Atow<Mtow (performance)",
        "For Low Visibility Takeoff (LVTO)",
        "Both (A) and (C)",
      ],
      answer: 1,
    },
    {
      id: 10,
      question:
        "What will be the effect on an aeroplanes performance if aerodrome pressure altitude is decreased?",
      options: [
        "It will increase the take-off ground run",
        "It will increase the accelerate stop distance",
        "It will increase the take-off distance required",
        "It will decrease the take-off distance required",
      ],
      answer: 3,
    },
    {
      id: 11,
      question: "How is Take off performance affected at high pressure altitude airports?",
      options: ["TODR increases", "TODR decreases", "TODA increases", "ASDA increases"],
      answer: 0,
    },
    {
      id: 12,
      question: "Clearway may not exceed:",
      options: ["150% ASDA", "50% TODA", "50% ASDA", "50% TORA"],
      answer: 3,
    },
    {
      id: 13,
      question: "Gross performance is used for?",
      options: ["Obstacle clearance", "Certification", "Airworthiness", "None of the above"],
      answer: 1,
    },
    {
      id: 14,
      question: "What happens when V1 increases and VR is kept constant?",
      options: [
        "Take Off Distance increases",
        "Accelerated Stop Distance Increases",
        "Take Off Run increases",
        "All of the above",
      ],
      answer: 1,
    },
    {
      id: 15,
      question: "When does PTU fault light come on?",
      options: [
        "PTU overheat",
        "Green or yellow Pump low pressure",
        "Green or yellow reservoir low fluid level",
        "Both A and C",
      ],
      answer: 2,
    },
    {
      id: 16,
      question: "When will Lever asymmetry flash?",
      options: [
        "when one thrust lever is in climb or FLX/MCT detent and other is not in this detent",
        "if asymmetry is present in both thrust levers",
        "when one thrust lever is in MCT and other in climb",
        "one thrust lever in MCT and the other thrust lever is in idle",
      ],
      answer: 0,
    },
    {
      id: 17,
      question:
        "Master caution along with single chime every 5 seconds, is visible inwhich of the following ?",
      options: ["TOGA LOCK", "Thrust lock", "Alpha Floor", "all of the above"],
      answer: 1,
    },
    {
      id: 18,
      question: "which LGCIU provides input to ECAM wheel page?",
      options: [
        "LGCIU 1",
        "LGCIU 2",
        "Both LGCIU 1 and 2",
        "Whichever LGCIU is currently operative",
      ],
      answer: 2,
    },
    {
      id: 19,
      question: "which computer monitors APU Bleed?",
      options: ["BMC2", "BMC1, if BMC2 is inoperative", "BMC1 only", "ECB"],
      answer: 3,
    },
    {
      id: 20,
      question: "Where can you see indications for RAT?",
      options: [
        "Hydraulics SD page",
        "electrical SD Page",
        "cabin pressurization SD page",
        "Both A and B",
      ],
      answer: 0,
    },
    {
      id: 21,
      question: "What functions does the FADEC perform?",
      options: [
        "Fuel metering",
        "Engine limiting",
        "Is responsible for both Automatic start and manual start",
        "All of above",
      ],
      answer: 3,
    },
    {
      id: 22,
      question:
        "What is electrical configuration of Aircraft, If TR 1 and TR 2 fails ?",
      options: [
        "all DC buses are lost and DC ess bus is also lost",
        "Charging for battery is lost, as DC bat bus is Lost",
        "Ess TR supplies all 4 DC Buses",
        "DC Bus 1 and DC Bus 2 are lost. However, DC Bat Bus is supplied by DC Ess BUS",
      ],
      answer: 1,
    },
    {
      id: 23,
      question:
        "Mark the correct answer - out of the given configurations below, which electrical configuration is possible?",
      options: [
        "DC essential provided by AC essential",
        "TR1 can supply all 4 DC buses",
        "TR1 can supply DC essential",
        "Both A and C",
      ],
      answer: 3,
    },
    {
      id: 24,
      question: "If failure of engine generator",
      options: [
        "Full galley is shed",
        "Partial galley is shed",
        'as in "B" and DC bus Ent automatically shed',
        'as in "A" and DC bus Ent can be shed by pressing Galley and Cabin Pushbutton',
      ],
      answer: 2,
    },
    {
      id: 25,
      question: 'On Display Unit - what does "INVALID DATA" message means?',
      options: ["DMC failure", "power failure", "Both A and B", "internal failure. of DU"],
      answer: 0,
    },
    {
      id: 26,
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
      id: 27,
      question: "what are indications in the cockpit in case of APU Auto shutdown?",
      options: [
        "APU fault light on the master switch pb",
        "APU fire PB lights up red",
        "Avail light extinguishes",
        "All of the above",
      ],
      answer: 0,
    },
    {
      id: 28,
      question: "Which tanks can provide gravity fuel feeding to engines?",
      options: ["Vent tank", "Inner wing tank", "Center tank", "All of the Above"],
      answer: 1,
    },
    {
      id: 29,
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
      id: 30,
      question:
        "What is course of action when FMGS information is not available for automatic pressurization?",
      options: [
        "Descend to 10,000ft",
        "Nothing as CPC2 will take over",
        "Select Manual Mode via Mode Selector Pushbutton to control outflow valve manually",
        "Use Landing Elevation Knob",
      ],
      answer: 3,
    },
    {
      id: 31,
      question:
        "How are the indications of Manual mode of outflow valve generated?",
      options: ["Via CPC 2", "Via back up section of CPC 1", "By operating CPC", "Via ACSC 1"],
      answer: 1,
    },
    {
      id: 32,
      question: "What protections are available in direct law?",
      options: [
        "Bank angle protection.",
        "High speed stability and stall warning, just as in normal law.",
        "Overspeed and stall warning , just as in alternate law",
        "Alpha Floor protection",
      ],
      answer: 2,
    },
    {
      id: 33,
      question:
        "In Alternate law without reduced protections, what protections are still available ?",
      options: [
        "Load factor and auto trim",
        "High speed and low speed stability",
        "Bank angle protection",
        "All of the above",
      ],
      answer: 0,
    },
    {
      id: 34,
      question:
        "If high speed protection is active, what is the maximum bank angle?",
      options: [
        "The bank angle is limited to 66'",
        'As in "A" and it will reduce to 40\' when side stick is released',
        "The bank angle is limited to 40'",
        'As in "C" and it will reduce to zero degrees when side stick is neutral.(spiral static stability at 0)',
      ],
      answer: 3,
    },
    {
      id: 35,
      question: "When is Ram air inlet flap normally open?",
      options: [
        "Differential pressure more than 1",
        "Differential pressure less than 1.",
        "20 Seconds after landing and when speed is below 70 kts",
        "Both (B) and (C)",
      ],
      answer: 2,
    },
    {
      id: 36,
      question:
        "What would be the consequence of pressing the ditching Pushbutton and connecting Low pressure ground cart simultaneously?",
      options: [
        "All valves below the flotation line will close.",
        "Differential pressure will build up",
        "Residual Pressure Control Unit opens safety Valves",
        "Safety Valves open due to rise of differential pressure",
      ],
      answer: 1,
    },
    {
      id: 37,
      question: "When does anti skid deactivate?",
      options: [
        "When aircraft decelerates below 50 knots",
        "At or below 10 knots",
        "At or below 20 knots",
        "it never deactivates if BSCU is active",
      ],
      answer: 2,
    },
    {
      id: 38,
      question: "When do Fuel transfer valves close automatically?",
      options: [
        "When fuel from outer tank has been completely transferred to the inner tank.",
        "When fuel from inner tank has been consumed completely.",
        "They will automatically close at the next refueling operation",
        "They have to be manually closed at the next refueling operation",
      ],
      answer: 2,
    },
    {
      id: 39,
      question: "When is Approach idle mode active?",
      options: [
        "It activates when flap setting is in a position other than zero",
        "Its regulated according to bleed system demand",
        "It's regulated according to ambient conditions",
        "BothBandC",
      ],
      answer: 0,
    },
    {
      id: 40,
      question:
        "If Engine 1 has failed and only Engine 2 is working, how is hydraulic reservoir pressurized ?",
      options: [
        "HP stage of engine 1",
        "by HP stage of engine 2",
        "IP stage of engine 1",
        "crossbleed duct",
      ],
      answer: 3,
    },
    {
      id: 41,
      question: "When does Landing gear safety valve open?",
      options: [">260kts", "<260 kts", "<250 kts", ">250kts"],
      answer: 1,
    },
    {
      id: 42,
      question:
        "what is the effect on pressurization, If skin air inlet valve opens in flight ?",
      options: [
        "Loss of pressurization",
        "Blower and extract needs to be placed in override to close valve, to preventO Depressurisation",
        "Pressurisation is not lost and no action is required",
        "Both a and b",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/3e499150-1905-46c4-b4ef-846539554365.jpg",
    },
    {
      id: 43,
      question: "What occurs when both lanes of ACSC fail?",
      options: [
        "associated pack failure",
        "As in (A) and Hot Air Regulating Valve also Closes",
        "As in (B) and forward and aft trim air valves also close",
        "As in (B) and associated Trim Air Valves Close",
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/ac3cebc3-8cd7-416c-afc0-f9b83562fdda.png",
    },
    {
      id: 44,
      question: "What is the function of Alpha-speed lock?",
      options: [
        "It inhibits flap retraction at high AOA and high speeds.",
        "It inhibits slat retraction at low AOA and high speeds",
        "It inhibits flap retraction at high AOA and low speeds.",
        "It inhibits slat retraction at high AOA and low speeds.",
      ],
      answer: 3,
    },
    {
      id: 45,
      question: "When is Avionics Ventilation supplied by air from Air conditioning?",
      options: [
        "Open Configuration",
        "Intermediate configuration",
        "Smoke Congifuration",
        "As in (C) or in case of Blower Fault or Extract Fault",
      ],
      answer: 3,
    },
    {
      id: 46,
      question: "When will Landing distance required by an aircraft decrease ?",
      options: [
        "Low weight",
        "high OAT temp",
        "low pressure altitude",
        "all of the above",
      ],
      answer: 2,
    },
    {
      id: 47,
      question:
        "What is the range of Transmitter, when Aircraft is at 42000 and station is at 400 feet AMSL ?",
      options: ["100 NM", "250 NM", "281 NM", "300 NM"],
      answer: 2,
    },
    {
      id: 48,
      question: "If the UPPER ECAM DU fails, what will be displayed on the lower unit?",
      options: [
        "Engines and Warning page (E/WD)",
        "System display page",
        "Status page",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/ac792297-fa53-4952-9dd6-14f6aacaf310.jpg",
    },
    {
      id: 49,
      question: "What does a black square in abnormal procedures indicate?",
      options: [
        "identify when an action depends on a precondition/flight phase/procedure.",
        "it identifies a precondition",
        "When several procedures appear under the same title, it marks the starting point of each procedure.",
        "none of the above",
      ],
      answer: 2,
    },
    {
      id: 50,
      question: "Layer 2 information in the FCOM ?",
      options: [
        "Nice to know",
        "presents information that is used as a reference, in order to fully understand the logic of the aircraft and pilot interfaces.",
        "both a & b",
        "Need to know",
      ],
      answer: 2,
    },
    {
      id: 51,
      question:
        "On the ECAM DOOR/OXY page, the SLIDE indication appears _____ when the slide is not disarmed.",
      options: ["White.", "Amber.", "Green.", "Red."],
      answer: 0,
    },
    {
      id: 52,
      question: "When should RAM air p/b switch be used ? What happens then ?",
      options: [
        "Only when differential pressure is less than 1 psi. it opens the EMER RAM AIR inlet and outflow valve open to 50 % position if CAB is AUTO.",
        "Whenever more ventilation is needed",
        "Only when differential pressure is less than 1 psi, it opens the EMER RAM AIR inlet and closes the packs",
        "When differential pressure is less than 1 psi, it opens the EMER RAM AIR inlet and closes the outflow valve.",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/376aa9b8-d85f-4e40-a828-a883555301ed.jpg",
    },
    {
      id: 53,
      question: "what does a green pulsing parameter on a SD page indicate?",
      options: [
        "when a parameter drifts out of its normal range",
        "as long as it is outside its limits",
        "both a & b",
        "it has exceeded the warning threshold",
      ],
      answer: 2,
      image: [
        "https://cms-cdn.classplus.co/parserImages/8ef4e9ec-2fc4-419e-b939-6fa3e7e9953b.png",
        "https://cms-cdn.classplus.co/parserImages/85fc3222-abec-4deb-932a-da1b9326d0bd.png",
      ],
    },
    {
      id: 54,
      question: "Auto brakes, if selected, will only be activated by:",
      options: [
        "The wheels spinning up.",
        "The struts being compressed.",
        "The brake pedals being depressed.",
        "The ground spoiler extension command.",
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/5ca236c2-ce7c-4527-9637-482ceda09570.jpg",
    },
    {
      id: 55,
      question: "A changeover between the two BSCU channels ?",
      options: [
        "each UP landing gear lever selection, or in case one channel fails.",
        "each DOWN landing gear lever selection, or in case one channel fails.",
        "each TOUCH DOWN, or in case one channel fails.",
        "20 SECONDS after take off",
      ],
      answer: 1,
    },
    {
      id: 56,
      question:
        "In THRUST mode, autothrust commands a specific thrust level how is the speed target maintained?",
      options: [
        "in conjunction with the AP/FD speed mode, by elevator control",
        "in conjunction with the AP/FD pitch mode, by thrust variation",
        "in conjunction with the AP/FD pitch mode, by elevator control",
        "in conjunction with the AP/FD speed mode, by thrust variation",
      ],
      answer: 2,
    },
    {
      id: 57,
      question: "max altitude for slat/flap extension?",
      options: ["15 000 ft", "25 000 ft", "20 000 ft", "22 500 ft"],
      answer: 2,
    },
    {
      id: 58,
      question:
        "IF BUSS is not available what should the flight crew use to fly the aircraft",
      options: [
        "AOA and THRUST table in qrh",
        "PITCH and THRUST table in qrh",
        "TRACK FPA and THRUST in qrh",
        "none of the above",
      ],
      answer: 1,
    },
    {
      id: 59,
      question: "In normal electrical configuration DC ESS is supplied by ?",
      options: ["TR2", "DC2", "TR1", "AC ESS"],
      answer: 2,
    },
    {
      id: 60,
      question: "How is the RAT deployed?",
      options: [
        "automatically if AC 1 & AC 2 FAIL and speed > 100 kts",
        "RAT man on pb on the HYD & EMER ELEC PANEL",
        "BOTH A & B",
        "GEN1 OR GEN 2 fault",
      ],
      answer: 2,
      image: [
        "https://cms-cdn.classplus.co/parserImages/0a2ed50a-1ac9-40e6-891d-450c0bf8866f.png",
        "https://cms-cdn.classplus.co/parserImages/fce213c8-0d1c-4781-ae3e-1056137fb9fc.png",
        "https://cms-cdn.classplus.co/parserImages/f52739ef-cc9c-4108-8ea2-001bb5895b24.png",
      ],
    },
    {
      id: 61,
      question:
        "If Atmospheric pressure increases, what happens to landing distance?",
      options: [
        "landing distance remains constant and initial climb performance increases",
        "landing distance increases and initial climb performance decreases",
        "landing distance decreases and initial climb pert increases",
        "landing distance increases and initial climb performance increases",
      ],
      answer: 2,
    },
    {
      id: 62,
      question: "If V1 increases and VR is kept constant- '`",
      options: [
        "ASDR increases and TODR reduces",
        "ASDR decreases and TODR increases",
        "ASDR increases and TODR increases",
        "ASDR decreases and TODR decreases",
      ],
      answer: 0,
    },
    {
      id: 63,
      question: "What happens when V1 increases and VR is kept constant? * 1",
      options: [
        "Take Off Distance increases",
        "Accelerated Stop Distance Increases",
        "Take Off Run increases",
        "All of the above",
      ],
      answer: 1,
    },
    {
      id: 64,
      question: "Aft CG results in ?",
      options: [
        "Higher range and controllability is Increased",
        "Higher range but Reduced controllability",
        "Reduced endurance and Reduced controllability",
        "No change in endurance or Controllability compared to a forward CG position",
      ],
      answer: 0,
    },
    {
      id: 65,
      question:
        "If CG is near aft limit of aircraft : what will happen to following?",
      options: [
        "increased range and decreased stall speed",
        "decreased range and increased stall speed",
        "increased range and increased stall speed",
        "decreased range and decreased stall speed",
      ],
      answer: 0,
    },
    {
      id: 66,
      question: "What does value of Cost index = 0 mean?",
      options: [
        "Minimum fuel consumption and maximum range",
        "Maximum fuel consumption and minimum range",
        "Minimum fuel consumption and minimum range",
        "Maximum fuel consumption and maximum range",
      ],
      answer: 0,
    },
    {
      id: 67,
      question: "Mark the correct statement",
      options: [
        "Clearway can be used for aborted take off",
        "Stopway is the portion of runway which can be utilised in case of aborted Takeoff",
        "Both Clearway and stopway form part of ASDA",
        "Stopway is utilised as part of TORA",
      ],
      answer: 1,
    },
    {
      id: 68,
      question:
        "What is mandated minimum Approach Climb gradient and minimum Landing climb gradient ?",
      options: ["2.1 % and 3.2%", "3.2 % and 2.1 %", "1.2% and 2.4%", "2.4 % and 1.2%"],
      answer: 0,
    },
  ],
};
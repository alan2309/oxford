import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "MOCK TEST - 02",
  questions: [
    {
      id: 1,
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
      id: 2,
      question:
        "If Bus Tie Contactor is pressed in flight, what happens to Electrical Configuration of the aircraft?",
      options: [
        "AC Bus 1 and AC Essential bus is supplied by AC bus 2",
        "AC Bus 2 supplies all DC buses",
        "Only AC essential will be supplied by AC bus 2",
        "There is no change to electrical configuration",
      ],
      answer: 3,
    },
    {
      id: 3,
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
      id: 4,
      question:
        "What is Screen height for wet runway Versus screen height for dry runway ?",
      options: ["15 feet ,35 feet", "35 feet,25 feet", "35 feet,15 feet", "15 feet,30 feet"],
      answer: 0,
    },
    {
      id: 5,
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
      id: 6,
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
      id: 7,
      question: "VR cannot be lower than:",
      options: ["V1 and 105 % of VMCA", "V2 and 1 1 VMCA", "V1 and 1.1 VMCA", "V1 and 1.1 VMCG"],
      answer: 0,
    },
    {
      id: 8,
      question: "When does PTU fault light come on?",
      options: [
        "Green or yellow reservoir overheat",
        "Green or yellow Pump low pressure",
        "Green or yellow reservoir low fluid level",
        "Both A and C",
      ],
      answer: 3,
    },
    {
      id: 9,
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
      id: 10,
      question: "In SD WHEEL page; What do two triangles indicate?",
      options: ["BSCU", "LGCIU 1", "LGCIU 2", "Both LGCIU"],
      answer: 3,
    },
    {
      id: 11,
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
      id: 12,
      question: "What is function of Safety valve?",
      options: [
        "It prevents excessive positive differential pressure",
        "It prevents excessive Negative differential pressure",
        "Its responsible for opening outflow Valve to relieve differential pressure",
        "both (A) and (B)",
      ],
      answer: 3,
    },
    {
      id: 13,
      question:
        "When does Amber light of Gen 1 line PB,on emer elec panel illuminate?",
      options: [
        "when fire is detected in avionics Bay",
        "when smoke is detected in Avionics ventilation duct",
        "When fault is detected in Generator 1",
        "none of the above",
      ],
      answer: 1,
    },
    {
      id: 14,
      question: "When does Cabin pressurization indication on ECAM turn red ?",
      options: ["14000ft", "8000ft", "9550ft"],
      answer: 2,
    },
    {
      id: 15,
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
      id: 16,
      question: 'On Display Unit - what does "INVALID DATA" message means?',
      options: ["DMC failure", "power failure", "Both A and B", "internal failure. of DU"],
      answer: 0,
    },
    {
      id: 17,
      question: "If upper ECAM falls, what would be displayed on ND 1?",
      options: [
        "EWD",
        "System page",
        "System page, if ECAM ND transfer switch is selected to captain",
        "EWD, if ECAM ND transfer switch is selected to captain",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/8e91cc5c-dce0-4e5d-a1c9-9fed32871587.png",
    },
    {
      id: 18,
      question: "What does 1 st column in FMA indicate?",
      options: [
        "Displays Thrust indication",
        "Displays Auto thrust mode of operation",
        "Displays Autothrust engagement status",
        "Both A and C",
      ],
      answer: 1,
    },
    {
      id: 19,
      question: "What does Blue colour on Overhead Pushbutton indicate",
      options: [
        "It indicates that system is fit to fly",
        "It indicates that a system is operating normally",
        "It indicates normal operation of a temporarily selected system",
        "it indicates abnormal position of a pushbutton switch",
      ],
      answer: 2,
    },
    {
      id: 20,
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
      id: 21,
      question: "When is FOB indication half boxed in amber?",
      options: [
        "The Fuel on board is completely unusable.",
        "The fuel on board indications are inaccurate",
        "The Fuel on board in any one cell is completely unusable.",
        "Center Tank pumps have failed.",
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/aa1ad57e-59c6-457f-b61e-094d22195b00.png",
    },
    {
      id: 22,
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
      id: 23,
      question: "When is Alpha floor active?",
      options: [
        "It is available from lift-off to 200 ft RA on approach.",
        "It is available from lift-off to 50 ft RA on approach.",
        "It is available from lift-off to 100 ft RA on approach",
        "It is available from lift-off to 150 ft RA on approach.",
      ],
      answer: 2,
    },
    {
      id: 24,
      question:
        "After failure of both FACs, when is full rudder travel authority restored?",
      options: [
        "When Flaps are retracted",
        "When Landing gear is extended",
        "When slats are extended",
        "When you either extend flaps or slats.",
      ],
      answer: 2,
    },
    {
      id: 25,
      question: "How does reverser protection activate?",
      options: [
        "Through alpha floor activation",
        "By locking of Reverser system",
        "Through Idle protection",
        "Through cutoff of Hydraulics to protect reverser system",
      ],
      answer: 2,
    },
    {
      id: 26,
      question:
        "If Accelerating on Western heading in northern hemisphere, the compass needle will turn",
      options: [
        "clockwise towards North",
        "anti clockwise towards North",
        "Clockwise towards South",
        "No change",
      ],
      answer: 0,
    },
    {
      id: 27,
      question:
        "What is the range of Transmitter, when Aircraft is at 42000 and station is at 400 feet AMSL ?",
      options: ["100 NM", "250 NM", "281 NM", "300 NM"],
      answer: 2,
    },
    {
      id: 28,
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
      id: 29,
      question: "What is the meaning of variation?",
      options: [
        "Diff between magnetic north and compass north",
        "Diff between magnetic north and true nortth",
        "Diff between compass north and true north",
        "None of the above",
      ],
      answer: 1,
    },
    {
      id: 30,
      question: "What is purpose of Decision Point procedure?",
      options: [
        "To carry minimum fuel",
        "To calculate contingency fuel",
        "Safe conduct of flight",
        "for reduced landing weight",
      ],
      answer: 1,
    },
    {
      id: 31,
      question: "What is Clearway ?",
      options: ["50% of TODA", "50% of TORA", "50% of ASDA", "150% of TODA"],
      answer: 1,
    },
    {
      id: 32,
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
      id: 33,
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
      id: 34,
      question:
        "what happens to bleed pressure, after setting take off power and duringclimb phase ?",
      options: [
        "bleed pressure never fluctuates",
        "Bleed pressure fluctuates between 75 psi and 100 psi",
        "It fluctuates between 38 psi and 56 psi upto FL 100",
        "It never fluctuates upto FL 100 and thereafter it may fluctuate",
      ],
      answer: 2,
    },
    {
      id: 35,
      question: "What is the max operating speed of the A320 ?",
      options: ["340 / .80", "350 / .82", "320 / .82", "350 / .80"],
      answer: 1,
    },
    {
      id: 36,
      question:
        "On the WHEEL SD page there are 2 green triangles. what do they represent?",
      options: [
        "ldg gear position detected by LGCIU 1",
        "ldg gear position detected by LGCIU 2",
        "ldg gear position detected by LGCIU 1 & 2",
        "none of the above",
      ],
      answer: 2,
    },
    {
      id: 37,
      question: "IRS IN ALIGN X MN This memo pulses in green?",
      options: [
        "when at least one active IRS is being aligned",
        "when at least one active IRS is being aligned and engine is running",
        "if the alignment of one IRS is faulty",
        "normal alignment process",
      ],
      answer: 2,
    },
    {
      id: 38,
      question: "IRS IN ALIGN X MN memo appears in amber?",
      options: [
        "normal IRS allignment with engine running",
        "When one engine is started during IRS alignment.",
        "As in (b) If the alignment of one IRS is faulty, this memo is replaced by the \"IR NOT ALIGNED\" ECAM caution.",
        "none of the above",
      ],
      answer: 2,
    },
    {
      id: 39,
      question: "In independent mode which FMGC is master?",
      options: [
        "FMGC 1",
        "FMGC 2",
        "Depends on the auto pilot being engaged",
        "depends on the A/THR",
      ],
      answer: 2,
    },
    {
      id: 40,
      question: "what is the RAT stalling speed?",
      options: ["140 kts", "125 kts", "130 kts", "100 kts"],
      answer: 1,
    },
    {
      id: 41,
      question:
        "Overpressure supply is automatically started, when cabin altitude exceeds 30 000 ft.",
      options: [
        "when the N/100% selector is set on the on the N position",
        "when the N/100% selector is set on the on the 100 % position",
        "both a & b",
        "irrespective of altitude over pressure is started during depressurization",
      ],
      answer: 1,
    },
    {
      id: 42,
      question: "in case of AC BUS 1 fault, how is AC ESS supplied?",
      options: [
        "AC ESS is lost",
        "automatically from AC BUS 2 via AC ESS FEED",
        "emergency generator",
        "BATT 1 via static invertor",
      ],
      answer: 1,
    },
    {
      id: 43,
      question:
        "If the takeoff run starts at an intersection, enter a takeoff shift ?",
      options: ["PERF TO page", "PROG PAGE", "PERF CRUISE page", "PERF INIT page"],
      answer: 0,
    },
    {
      id: 44,
      question: "max altitude for slat/flap opearation?",
      options: ["25 000 ft", "20 000 ft", "22 500 ft", "no altitude limitation"],
      answer: 1,
    },
    {
      id: 45,
      question:
        "When will the RAT & EMER GEN red fault light illuminate?",
      options: [
        "emergency generator is not supplying power when AC BUS 1 is not powered",
        "emergency generator is supplying power when AC BUS 1 and AC BUS 2 are not powered",
        "emergency generator is not supplying power when AC BUS 1 and AC BUS 2 are powered",
        "emergency generator is not supplying power when AC BUS 1 and AC BUS 2 are not powered",
      ],
      answer: 3,
    },
    {
      id: 46,
      question: "what protection is available for REVERSERS?",
      options: ["REV protection", "IDLE protection", "APPROACH protection", "MODULATED protection"],
      answer: 1,
    },
    {
      id: 47,
      question:
        "if the instinctive disconnect pb are pressed for more than 15 seconds?",
      options: [
        "ATHR is lost",
        "ALPHA FLOOR is lost",
        "both ATHR and ALPHA FLOOR are lost for the remainder of the flight, until the fmgc is reset on the ground",
        "none of the above",
      ],
      answer: 2,
    },
    {
      id: 48,
      question:
        "normal electrical power is supplied to the aircraft and MCDU is blank with out any other indications?",
      options: [
        "FMGC has no failure but not electrically supplied",
        "FMGC is failed but normal electrical supply, fmgc cb reset is required",
        "mcdu brightness is dimmed",
        "all are correct except (a)",
      ],
      answer: 2,
    },
    {
      id: 49,
      question:
        "On the DOOR/OXY page when the slides are disarmed. what are the indications?",
      options: [
        "SLIDE is displayed in white",
        "SLIDE is displayed in amber",
        "no indictions slides are disarmed",
        "Option 4",
      ],
      answer: 2,
    },
    {
      id: 50,
      question: "define VMCL",
      options: [
        "the minimum control speed (CAS) during approach and landing with all engines operating, it is possible to maintain control of the aeroplane with critical engine inoperative",
        "and maintain straight flight with an angle of bank of not more than 5º",
        "both a & b",
        'as in (a) and maintain climb with an angle of bank of not more than 5º',
      ],
      answer: 2,
    },
    {
      id: 51,
      question:
        "Considering TORA TODA ASDA requirements are met, how will the following effect take off performance?",
      options: [
        "increasing V1/Vr ratio will decrease MTOW",
        "increasing V1/Vr ratio will increase MTOW",
        "no effect on MTOW",
      ],
      answer: 1,
    },
    {
      id: 52,
      question: "What is electrical Priority order for A320?",
      options: [
        "External power has priority over Engine Generators",
        "APU has priority over Engine Generators",
        "APU has priority over External Power",
        "Onside Engine Generator has priority over External power",
      ],
      answer: 3,
    },
    {
      id: 53,
      question:
        "Considering TODA, TORA, ASDA requirements are met, which of the following are true?",
      options: [
        "Increasing ratio of V1/ VR will increase Maximum take off weight",
        "decreasing ratio of V1 / VR will increase Maximum take off weight",
        "Increasing ratio of V1 /VR will not create any change to Maximum take off Weight",
        "None of the above",
      ],
      answer: 0,
    },
    {
      id: 54,
      question: "When will Landing distance required by an aircraft decrease ?",
      options: ["Low weight", "high OAT temp", "low pressure altitude", "all of the above"],
      answer: 2,
    },
    {
      id: 55,
      question:
        "If atmospheric pressure is increased, what happens to take off performance?",
      options: [
        "Increased takeoff roll and decreased climb gradient",
        "Decreased takeoff roll and increased climb gradient",
        "Increased takeoff roll and increased climb gradient",
        "Decreased takeoff roll and decreased climb gradient",
      ],
      answer: 1,
    },
    {
      id: 56,
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
      id: 57,
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
      id: 58,
      question: "Aft CG results in",
      options: [
        "Higher range and controllability is Increased",
        "Higher range but Reduced controllability",
        "Reduced endurance and Reduced controllability",
        "No change in endurance or Controllability compared to a forward CG position",
      ],
      answer: 0,
    },
    {
      id: 59,
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
      id: 60,
      question: "Where is ILS antennae located on Runway?",
      options: [
        "Localizer antennae is located on runway center line on approach end of the runway",
        "Localizer antennae is located on center line of opposite end of runway from runway threshold",
        "As in (A) and Glidepath antennae is located at runway threshold",
        "As in (B) and Glidepath Antennae is located offset from runway centerline, about750 feet from runway threshold",
      ],
      answer: 3,
    },
    {
      id: 61,
      question:
        "What is mandated minimum Approach Climb gradient and minimum Landing climb gradient ?",
      options: ["2.1 % and 3.2%", "3.2 % and 2.1 %", "1.2% and 2.4%", "2.4 % and 1.2%"],
      answer: 0,
    },
    {
      id: 62,
      question: "When is gravity gear extension required?",
      options: [
        "Blue + Yellow Hydraulic Failure",
        "Green + Yellow Hydraulic Failure",
        "Both A and B",
        "Any Dual Hydraulic Failure",
      ],
      answer: 3,
    },
    {
      id: 63,
      question: "Landing gear is",
      options: [
        "mechanically controlled and hydraulic actuated",
        "electrically operated and electrically actuated",
        "Electrically Controlled and mechanically actuated",
        "electrically controlled and hydraulically actuated",
      ],
      answer: 3,
    },
    {
      id: 64,
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
      id: 65,
      question: "Which configuration is likely when Bleed Valve is Closed?",
      options: ["Hp valve closes", "Hp valve opens", "LP valve opens", "LP valve closes"],
      answer: 0,
    },
    {
      id: 66,
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
      id: 67,
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
      id: 68,
      question: "If both packs are off, can you provide conditioned air to aircraft?",
      options: [
        "Yes, using APU",
        "Yes, using Ram Air",
        "Yes, Using LP ground connection",
        "No, as Conditioned Air can only be provided using PACK air conditioning Kit",
      ],
      answer: 2,
    },
    {
      id: 69,
      question: "on the overhead panel, the two grey dots on push button indicates?",
      options: [
        "No alert or system status is required for the particular pushbutton",
        "To control selection of the system.",
        "To indicate the system status",
        "None of the above",
      ],
      answer: 0,
    },
    {
      id: 70,
      question: "What are indications for stall?",
      options: [
        "CRICKET + STALL MESSAGE",
        "CRICKET Sound along with Master Warning",
        "CONTINUOUS REPETITIVE CHIME along with Master Warning",
        "STALL Warming",
      ],
      answer: 0,
    },
    {
      id: 71,
      question: "Which of the following FMA indications flashes white?",
      options: ["Thrust lock", "A. FLOOR", "LVR CLB", "TOGA LOCK"],
      answer: 2,
    },
    {
      id: 72,
      question: "How is an ECAM advisory depicted?",
      options: [
        "The relevant system page automatically appears, when a parameter drifts out ofits normal range.",
        "The value (shown in green) pulses, as long as it is outside its limits",
        "Both A and B",
        "It flashes amber when a parameter is about to reach it'slimit.",
      ],
      answer: 2,
    },
    {
      id: 73,
      question: "Which ECAM failure is represented by a boxed title?",
      options: [
        "Primary failure",
        "Secondary failure",
        "Independent failure",
        "Integrated failure",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/2eecfbf3-0e92-4fc5-99e7-4aa98f8081b4.png",
    },
    {
      id: 74,
      question: "What does Amber message on ECAM indicate?",
      options: [
        "A failure which requires immediate corrective action",
        "Crew should be aware of of failure, but need not take immediate corrective action",
        "These are Titles and Remarks which guide the flight crew",
        "These are actions to be carried out or limitations",
      ],
      answer: 1,
    },
    {
      id: 75,
      question: "When is APU fuel pump operational",
      options: [
        "When fuel pressure from pumps is high.",
        "When fuel pressure from pumps is low",
        "When Aircraft is in EmerElecConfig",
        "Both A and C",
      ],
      answer: 1,
    },
    {
      id: 76,
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
      id: 77,
      question:
        "What is APU fuel consumption with packs on and APU generator running?",
      options: ["50 Kg/ hour", "200 Kg/hour", "130 Kg/hour", "175 Kg/Hour"],
      answer: 2,
    },
    {
      id: 78,
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
      id: 79,
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
      id: 80,
      question: "What is the purpose of Jet booster pumps?",
      options: [
        "they enable gravity fuel feeding from wing tanks",
        "They provide for transfer of fuel from Outer tanks to Inner Tanks",
        "They enable fuel to be transferred from Center Tanks to Inner Tanks via suction",
        "They provide for transfer of fuel from Inner wing tank to Outer Tank",
      ],
      answer: 2,
    },
    {
      id: 81,
      question: "When does the fuel used value reset?",
      options: [
        "Automatically when engines are shut down on ground.",
        "Automatically when ZFW is inserted on the INIT-B page of MCDU.",
        "Automatically when engines are started on ground.",
        "Automatically when refueling is complete",
      ],
      answer: 2,
    },
    {
      id: 82,
      question: "When is intertank fuel transfer valves shown in hollow amber?",
      options: [
        "When Valve is in transit",
        "When valves are open, when commanded closed",
        "During Transfer from Outer to Inner tank",
        "When Valve position information is not available",
      ],
      answer: 0,
    },
    {
      id: 83,
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
      id: 84,
      question: "What is High speed stability ?",
      options: [
        "In alternate law, A nose up demand is introduced to avoid an excessive increase in speed.",
        'As in "A" and can be overriden by pilot',
        "In Normal Law, A nose up demand is introduced to avoid an excessive increase in speed.",
        'As in "C" and cannot be overriden by pilot.',
      ],
      answer: 1,
    },
    {
      id: 85,
      question:
        "If high speed protection is active, what is the maximum bank angle?",
      options: [
        "The bank angle is limited to 66'",
        'As in "A" and it will reduce to 40\' when side stick is released',
        "The bank angle is limited to 40'",
        'As in "C" and it will reduce to zero degrees when side stick is neutral.',
      ],
      answer: 3,
    },
    {
      id: 86,
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
      id: 87,
      question: "When is Alpha floor protection not available?",
      options: [
        "SFCC 1 and FAC 2 Failure",
        "Both FCU channels or when both FMGS are lost",
        "In alternate law or direct law",
        "In Engine out, when slats/flaps are extended",
        "All of the above",
      ],
      answer: 4,
    },
    {
      id: 88,
      question:
        "On a dry runway the accelerate stop distance is decreased",
      options: [
        "by Uphill slope",
        "by headwind",
        "low OAT",
        "by a lower take-off mass because the aeroplane accelerates faster to V1",
      ],
      answer: 0,
    },
    {
      id: 89,
      question: "How is Take off performance affected at high pressure altitude airports?",
      options: ["TODR increases", "TODR decreases", "TODA increases", "ASDA increases"],
      answer: 0,
    },
    {
      id: 90,
      question: "When will Landing distance required by an aircraft decrease ?",
      options: ["Low weight", "high OAT temp", "low pressure altitude", "all of the above"],
      answer: 2,
    },
    {
      id: 91,
      question:
        "During cockpit prepearation (dark cockpit philosophy) with the external power connected or the apu on. the only amber lights on the over head panel?",
      options: [
        "Pack 1 & 2 FAULT lights",
        "GEN FAULT lights",
        "HYD PB FAULT LIGHTS",
        "no fault lights",
      ],
      answer: 1,
    },
  ],
};
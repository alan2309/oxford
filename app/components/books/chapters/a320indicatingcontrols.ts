import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "CONTROLS AND INDICATIONS / LIMITATIONS PHASE 4",
  questions: [
    {
      id: 1,
      question: "If no AP/FD is engaged ?",
      options: [
        "FMGC 1 is master",
        "FMGC 2 is master",
        "A/THR is controlled by FMGC1.",
        "none of the above",
      ],
      answer: 2,
    },
    {
      id: 2,
      question: "If two APs are engaged?",
      options: [
        "FMGC2 is master",
        "FMGC1 is master",
        "FMGC1 &2 both",
        "depends on which autpilot was engaged first",
      ],
      answer: 1,
    },
    {
      id: 3,
      question: "If no AP is engaged and both FD'S are on?",
      options: [
        "FMGC 1 is master",
        "FMGC 2 is master",
        "the pilot giving the input on the side stick",
        "none of the above",
      ],
      answer: 0,
    },
    {
      id: 4,
      question: "what are the indications of INDEPENDENT MODE of the FMGC?",
      options: [
        "\"INDEPENDENT OPERATION\" message is displayed on both MCDU scratchpads. IND annunciator light comes on the MCDU.",
        "Each MCDU transmits data it receives from its onside FMGC. It affects only the onside EFIS (Electronic Flight Instrument System) and RMP (Radio Management Panel).",
        "On the POS MONITOR page (and GPS MONITOR page), FMGS position (and GPS position ) from the opposite FMGC is not displayed.",
        "On the RAD NAV page (and PROG page, if the FMGS GPS is not installed), navaids tuned on the opposite MCDU are not displayed. Corresponding fields are blank.",
        "all of the above",
      ],
      answer: 4,
    },
    {
      id: 5,
      question: "What is true wrt INDEPENDENT MODE operations of FMGC?",
      options: [
        "Crossload function is available on ground only (in preflight or done phase), when an independent operation is detected.",
        "Airbus does not recommend pulling one FMGC circuit breaker to force the system to operate in SINGLE mode.",
        "IN FLIGHT DO NOT SWITCH the navigation databases. MAKE the same entries on both MCDUs to have both AP/FDs similar orders",
        "In the event of a go-around and when the second AP is disconnected: ENSURE that the FMGC in command has correct flight plan orders and an updated nav database",
        "ALL OF THE ABOVE",
      ],
      answer: 4,
    },
    {
      id: 6,
      question:
        "What are the indications of SINGLE MODE operation of the FMGC, on the MCDU ?",
      options: [
        "When this occurs, the failed FMGC displays \"OPP FMGC IN PROCESS\" in white on the MCDU scratchpad.",
        "FM 1 OR FM 2 (amber) light comes on mcdu , indicating The onside FM is failed",
        "both a & b",
        "the effected mcdu goes blank",
      ],
      answer: 2,
    },
    {
      id: 7,
      question: "what are the indications of SINGLE MODE OPERATIONS OF THE FMGC on the ND ?",
      options: [
        "If the NDs are not both in the same mode or range, the associated ND displays \"MAP NOT AVAIL\" and \"SET OFFSIDE RNG/MODE\".",
        "If the NDs are in the same mode and range, the associated ND displays the \"OFFSIDE FM CONTROL\" amber message.",
        "BOTH A & B",
      ],
      answer: 2,
    },
    {
      id: 8,
      question:
        "How does the flight crew selects BACK UP NAV when both FMGCs fail?",
      options: [
        "on the MCDU MENU page",
        "progress page",
        "position monitor page",
        "none of the above",
      ],
      answer: 0,
    },
    {
      id: 9,
      question: "BACK UP navigation provides the following functions?",
      options: [
        "Flight Planning, Aircraft position using onside IRS, IRS3, or GPIRS position",
        "F-PLN display on ND, No AP/FD NAV mode",
        "Limited lateral revision, F-PLN automatic sequencing",
        "ALL OF THE ABOVE",
      ],
      answer: 3,
    },
    {
      id: 10,
      question: "When the aircraft uses managed guidance?",
      options: [
        "the FCU windows display dashes and the white dots next to those windows light up (hdg speed and v/s)",
        "The altitude window always displays an altitude selected by the flight crew (never dashes)",
        "both a & b",
        "the FCU windows display the hdg being flown",
      ],
      answer: 2,
    },
    {
      id: 11,
      question: "choose the correct indications on the ND ?",
      options: [
        "Missed approach : Steady blue",
        "Offset flight plan : Steady green (Original flight plan: Dashed green)",
        "Temporary flight plan : Dashed yellow",
        "Engine-out SID (not inserted) : Steady yellow",
        "all are correct",
      ],
      answer: 4,
    },
    {
      id: 12,
      question: "Secondary flight plan is shown on the ND ?",
      options: [
        "dashed white",
        "dashed yellow",
        "Steady dimmed white",
        "dashed magenta",
      ],
      answer: 2,
    },
    {
      id: 13,
      question: "Temporary flight plan is shown as ?",
      options: ["Dashed white", "Dashed yellow", "Dashed blue", "Dashed green"],
      answer: 1,
    },
    {
      id: 14,
      question: "The decreasing order of priority for navigation is ?",
      options: [
        "IRS-GPS IRS-DME/DME IRS-VOR/DME IRS only",
        "IRS-GPS IRS-VOR/DME IRS-DME/DME IRS only",
        "IRS-GPS IRS-only IRS-VOR/DME IRS -DME/DME",
        "Radio position has priority over GPIRS position",
      ],
      answer: 0,
    },
    {
      id: 15,
      question:
        "If the takeoff run starts at an intersection, enter a takeoff shift ?",
      options: ["PERF TO page", "PROG PAGE", "PERF CRUISE page", "PERF INIT page"],
      answer: 0,
    },
    {
      id: 16,
      question: "A takeoff update requires that ?",
      options: [
        "NAV ACCURACY should be HIGH",
        "GPS should be available",
        "takeoff runway be part of the flight plan",
        "none of the above",
      ],
      answer: 2,
    },
    {
      id: 17,
      question: "The FM position update at takeoff is inhibited?",
      options: [
        "when NAV ACCURACY IS HIGH",
        "when a complete allignment has been performed",
        "when GPS PRIMARY is active",
        "none of the above",
      ],
      answer: 2,
    },
    {
      id: 18,
      question: "when is NAV ACCURACY HIGH ?",
      options: [
        "If the EPU does not exceed the RNP, accuracy is HIGH",
        "‐ If the EPU exceeds the RNP, accuracy is HIGH",
        "whenever in navaid coverage",
        "it is not dependent on epu",
      ],
      answer: 0,
    },
    {
      id: 19,
      question: "when is NAV ACCURACY LOW?",
      options: [
        "If the EPU does not exceed the RNP, accuracy is LOW",
        "If the EPU exceeds the RNP, accuracy is LOW",
        "When gps is available",
        "not related to epu",
      ],
      answer: 1,
    },
    {
      id: 20,
      question: "WRT GPS PRIMARY which statements are correct?",
      options: [
        "When GPS PRIMARY mode is lost, the flight crew must periodically check this position accuracy.",
        "In GPS PRIMARY mode, the position accuracy is always at HIGH",
        "both a & b",
        "When GPS PRIMARY mode is available, the flight crew must periodically check this position accuracy.",
      ],
      answer: 2,
    },
    {
      id: 21,
      question: "where do you enter the ZFW?",
      options: ["INIT A Page", "PERF Page", "INIT B Page", "PROG Page"],
      answer: 2,
    },
    {
      id: 22,
      question:
        "When the Thrust Lock function is active. what are the indications on the FMA?",
      options: [
        "\"THR LK\" flashes amber on the FMA",
        "\"THR LK\" flashes white on the FMA",
        "\"THR LK\" flashes green on the FMA",
        "\"THR LK\" steady amber on the FMA",
      ],
      answer: 0,
    },
    {
      id: 23,
      question: 'what are the ecam indications of "THR LK" ?',
      options: [
        'ECAM "ENG THRUST LOCKED" flashes every 5 s',
        'As in (a) ECAM displays "THR LEVERS......MOVE" ‐ A single chime sounds and the Master Caution light flashes every 5 s.',
        "THR LK is only indicated on the FMA",
        "none of the above",
      ],
      answer: 1,
    },
    {
      id: 24,
      question: "Undetermined thrust (neither CLB nor MCT thrust) ?",
      options: ["THR CLB", "THR MCT", "THR LVR", "THR IDLE"],
      answer: 2,
    },
    {
      id: 25,
      question: "ALPHA FLOOR calls up the following indications?",
      options: [
        '"A FLOOR" in green, surrounded by a flashing amber box on the FMA',
        '"A FLOOR" in amber, surrounded by a flashing green box on the FMA',
        'As in (a) , and in amber on the engine warning display, (as long as α-floor conditions are met)',
        'As in (b), and in green on the engine warning display, (as long as α-floor conditions are met)',
      ],
      answer: 2,
    },
    {
      id: 26,
      question: "when the aircraft leaves the α-floor conditions?",
      options: [
        '"TOGA LK" in amber, surrounded by a flashing white box on the FMA. TOGA thrust is frozen.',
        '"TOGA LK" in green, surrounded by a flashing amber box on the FMA. THR LK on the FMA.',
        '"TOGA LK" in green, surrounded by a flashing amber box on the FMA. LVR CLB on FMA',
        '"TOGA LK" in green, surrounded by a flashing amber box on the FMA. TOGA thrust is frozen.',
      ],
      answer: 3,
    },
    {
      id: 27,
      question: "To cancel ALPHA FLOOR or TOGA LK thrust, the flight crew must ?",
      options: [
        "move the thrust levers",
        "disconnect the autothrust",
        "reengage auto thrust",
        "bring thrust levers to idle",
      ],
      answer: 1,
    },
    {
      id: 28,
      question: "To cancel THR LK ?",
      options: [
        "disconnect the autothrust",
        "move the thrust levers",
        "engage auto thrust from the fcu",
        "disconnect the autothrust. using instinctive disconnect pb",
      ],
      answer: 1,
    },
    {
      id: 29,
      question: "ALPHA FLOOR is available from ?",
      options: [
        "lift-off to 50 ft RA on approach",
        "lift-off to 100 ft RA on approach",
        "lift-off to FLARE height",
        "lift-off to touch down",
      ],
      answer: 1,
    },
    {
      id: 30,
      question:
        "A/THR is active in thrust mode with both thrust levers below CL detent, or the thrust lever of the running engine below MCT. what indication will be there in the 1st row of A/THR column of fma?",
      options: ["THR IDLE", "THR MCT", "THR CLB", "THR LVR"],
      answer: 3,
    },
    {
      id: 31,
      question:
        "when one thrust lever is in CL or FLX/MCT detent and the other one is not in this detent.?",
      options: ["LVR MCT", "LVR CLB", "LVR ASYM", "none of the above"],
      answer: 2,
    },
    {
      id: 32,
      question:
        "What are the indications after A/THR disconnection (failure or action of the flight crew on FCU) ?",
      options: [
        "THR LK flashing amber on the FMA",
        "THR LK flashing white on the FMA",
        "As in (a) andThe MASTER CAUT light flashes and a single chime sounds every 5 s until the flight crew takes appropriate action",
        "As in (b) andThe MASTER CAUT light flashes and a single chime sounds every 5 s until the flight crew takes appropriate action",
      ],
      answer: 2,
    },
    {
      id: 33,
      question: "F/CTL are in direct law. ?",
      options: [
        "USE MAN PITCH TRIM in amber",
        "USE MAN PITCH TRIM in red",
        "MAN PITCH TRIM ONLY in amber",
        "MAN PITCH TRIM ONLY in red",
      ],
      answer: 0,
    },
    {
      id: 34,
      question: "MAN PITCH TRIM ONLY in red on the FMA ?",
      options: [
        "Displayed in case of loss of L + R elevators",
        "MECHANICAL BACK UP",
        "both a & b",
        "Direct law",
      ],
      answer: 2,
    },
    {
      id: 35,
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
      id: 36,
      question: "Which of the following FMA indications flashes white?",
      options: ["Thrust lock", "A. FLOOR", "LVR CLB", "TOGA LOCK"],
      answer: 2,
    },
    {
      id: 37,
      question: "When does amber box flash in FMA?",
      options: ["Thrust climb", "Thrust Lock", "TOGA Lock", "BothBandC"],
      answer: 2,
    },
    {
      id: 38,
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
      id: 39,
      question:
        "If flying at TOGA thrust, how can thrust he brought down to MCT ?",
      options: [
        "Set at least one lever to climb gate before setting MCT detent",
        "Bring both thrust levers to FLX MCT gate",
        "First bring both thrust levers to CLB gate and then set at FLX MCT gate",
        "Set one thrust lever to idle and other on TOGA",
      ],
      answer: 1,
    },
    {
      id: 40,
      question: "When is Approach Auto Thrust mode active?",
      options: [
        "It activates when flap setting is in a position other than zero, below 3200 ft RA",
        "Its regulated according to bleed system demand",
        "It's regulated according to ambient conditions",
        "Both B and C",
      ],
      answer: 0,
    },
    {
      id: 41,
      question:
        "You are just about to take off. You have not inserted a FLEX temperature. Can you still takeoff?",
      options: [
        "Yes, by setting the thrust levers to the CLIMB detent.",
        "Yes, by setting the thrust levers to the FLEX/MCT detent.",
        "Yes, but only using the TO/GA detent.",
        "Not until a FLEX temperature is inserted",
      ],
      answer: 2,
    },
    {
      id: 42,
      question: "Auto Pilot can be used ?",
      options: [
        "At takeoff 100 ft AGL and at least 3 s after liftoff",
        "At takeoff 50 ft AGL and at least 5 s after liftoff",
        "At takeoff 100 ft AGL and at least 5 s after liftoff",
        "At takeoff 100 ft AGL and at least 10 s after liftoff",
      ],
      answer: 2,
    },
    {
      id: 43,
      question: "Auto pilot can be used in approach when CAT1 is displayed on the FMA ?",
      options: ["200 ft AGL", "250 ft AGL", "100 ft AGL", "160 ft AGL"],
      answer: 3,
    },
    {
      id: 44,
      question: "what is the alert height for a320 ?",
      options: ["200 ft AGL", "150 FT AGL", "100 FT AGL", "50 FT AGL"],
      answer: 2,
    },
    {
      id: 45,
      question: "What is the glide slope angle for an auto land?",
      options: [
        "between -2.5 ° and -3.15",
        "between -2.5 ° and -3.50",
        "between -2.5 ° and -3.7",
        "between -3° and -3.5",
      ],
      answer: 0,
    },
    {
      id: 46,
      question: "PWS alerts are inhibited from ?",
      options: [
        "At takeoff, alerts are inhibited above 100 kt and up to 50 ft",
        "At takeoff, alerts are inhibited up to 50 ft",
        "as in (a) and . During landing, alerts are inhibited below 50 ft.",
        "At takeoff, alerts are inhibited above 100 kt and up to 100 ft",
      ],
      answer: 2,
    },
    {
      id: 47,
      question:
        "what information of the wx radar is given on the bottom right corner of the ND?",
      options: ["GAIN & TILT in degrees", "GAIN & RNG", "GAIN & RETURN", "RNG & TILT"],
      answer: 0,
    },
    {
      id: 48,
      question: "what is a PAC alert on the WX RDR ?",
      options: [
        "gain to CAL, and when the aircraft is within 80 NM of a storm cell, the Path Attenuation Compensation (PAC) alert is available",
        "The PAC alert displays a yellow arc on the outermost scale of the ND, when an intervening rainfall creates an attenuated area behind a storm cell",
        "(also called a radar shadow or attenuation effect).",
        "ALL OF THE ABOVE",
      ],
      answer: 3,
    },
    {
      id: 49,
      question: "GPWS SYS pushbutton OFF ?",
      options: [
        "EGPW ALERTS are inhibited",
        "GPWS FLAP MODE is inhibited",
        "All basic GPWS alerts (Mode 1 to 5) are inhibited",
        "none of the above",
      ],
      answer: 2,
    },
    {
      id: 50,
      question: "GPWS PANEL LDG FLAP 3 pushbutton ON?",
      options: [
        "Flap mode is inhibited when FLAPS CONF 3 is selected (to avoid nuisance warning in case of landing in CONF 3).",
        "In this case, LDG MEMO displays \"FLAPS ... 3\" instead of \"CONF ... FULL",
        "both a & b",
        "none of the above",
      ],
      answer: 2,
    },
    {
      id: 51,
      question:
        "If the predictive functions of the GPWS generate a caution or a warning ?",
      options: [
        "the terrain automatically appears on the NDs and the ON light of the TERR ON ND pb has to be manually switched on",
        "the terrain automatically appears on the NDs and the ON light of the TERR ON ND pb comes on.",
        "ON light of the TERR ON ND pb comes on.",
        "TERR ON ND pb needs to be pressed to display terrain information",
      ],
      answer: 1,
    },
    {
      id: 52,
      question: "Mode 1 of the GPWS ?",
      options: [
        "Excessive rate of descent",
        "Excessive terrain closure rate",
        "Altitude loss after takeoff or go-around",
        "Terrain clearance not sufficient, if not in landing configuration",
      ],
      answer: 0,
    },
    {
      id: 53,
      question: "Mode 3 of the GPWS?",
      options: [
        "Excessive rate of descent",
        "Altitude loss after takeoff or go-around",
        "Excessive terrain closure rate",
        "Terrain clearance not sufficient, if not in landing configuration",
      ],
      answer: 1,
    },
    {
      id: 54,
      question: "Mode 2 of GPWS?",
      options: [
        "Excessive descent below the glide slope",
        "Excessive rate of descent",
        "Excessive terrain closure rate",
        "Altitude loss after takeoff or go-around",
      ],
      answer: 2,
    },
    {
      id: 55,
      question: "MODE 4 of gpws?",
      options: [
        "Excessive rate of descent",
        "Altitude loss after takeoff or go-around",
        "Altitude loss after takeoff or go-around",
        "Terrain clearance not sufficient, if not in landing configuration",
      ],
      answer: 3,
    },
    {
      id: 56,
      question: "Which basic mode of gpws is inhibited when EGPWS is active?",
      options: ["Mode 1", "Mode 3", "Mode 2", "Mode 5"],
      answer: 2,
    },
    {
      id: 57,
      question: "TERR pushbutton OFF?",
      options: [
        "Inhibits the Terrain Awareness Display (TAD) and Terrain Clearance Floor (TCF) modes(EGPW MODES)",
        "AS IN (A) and does not affect the basic GPWS mode 1 to 5.",
        "ECAM caution NAV GPWS TERR DET FAULT is displayed",
        "ALL OF THE ABOVE",
      ],
      answer: 3,
    },
    {
      id: 58,
      question: "The displayed vertical speed information is based on?",
      options: [
        "inertial data",
        "barometric data",
        "both inertial and barometric data",
        "radio altimeter",
      ],
      answer: 2,
    },
    {
      id: 59,
      question: "if inertial data is not available, v/s information ?",
      options: [
        "automatically replaced by barometric information.",
        "as in (a) In this case, the numerical value is displayed inside a box",
        "none of the above",
      ],
      answer: 1,
    },
    {
      id: 60,
      question: "PWS alerts are inhibited ?",
      options: [
        "At takeoff, alerts are inhibited above 100 kt and up to 50 ft. During landing, alerts are inhibited below 50 ft.",
        "Are inhibited by reactive windshear detection and aural messages of stall warnings.",
        "both a & b",
      ],
      answer: 2,
    },
    {
      id: 61,
      question: "PAC alert is not available ?",
      options: ["wx", "wx + T", "wx + T + HZ", "TURB"],
      answer: 3,
    },
    {
      id: 62,
      question: "The PAC alert is only available?",
      options: [
        "Manual mode",
        "gain + 10",
        "MULTISCAN sw is in the AUTO position",
        "gain +4",
      ],
      answer: 2,
    },
  ],
};
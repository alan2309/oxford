import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "MOCK EXAM 6E-MARCH 24",
  questions: [
    {
      id: 1,
      question:
        "PM Callout in a stabilized approach when aircraft exceeds:\n\n1. Loc deviation more than 1 dot\n2. Vor more than 5 degrees\n3. Speed below -5 or +10 Kts\n4. Pitch attitude -2.5 and + 10 Degrees",
        options: ["1,2", "2,3,4", "2,3", "3,4"],
      answer: 3,
    },
    {
      id: 2,
      question: "Given a glide ratio 30:1. For 2000 ft descent, how much is horizontal distance?",
      options: ["1.5nm", "6nm", "8nm", "10nm"],
      answer: 3,
    },
    {
      id: 3,
      question: "During a manual start, what function does the FADEC perform?",
      options: [
        "Passive monitoring of the start sequence, to close the start valve and cut off the ignition on the ground.",
        "To control the start sequence and take corrective action in case of a failure or malfunction.",
        "The FADEC does not perform any function during a manual start and all actions have to be carried out by the pilots.",
      ],
      answer: 0,
    },
    {
      id: 4,
      question:
        "When the crew does not have time to evaluate the situation they must and things are not going as expected",
      options: [
        "take over and apply corrective measures immediately",
        "Wait and Watch",
        "Keep Automation running",
        "None of the above",
      ],
      answer: 0,
    },
    {
      id: 5,
      question:
        "What indication will you see on the overhead fuel panel if the center tank has more than 250 kilograms of fuel and the left wing tank has less than 5,000 Kgs.",
      options: [
        "Fuel imbalance.",
        "Mode select fault.",
        "Fuel – Auto feed fault.",
        "CTR TK- Pump FAULT",
      ],
      answer: 1,
    },
    {
      id: 6,
      question:
        "On the E/WD, you notice the NW STRG DISC memo. What does it mean?",
      options: [
        "The nose wheel steering has been disconnected by ground personnel.",
        "A failure in the nose wheel steering system has been detected.",
        "There is a discrepancy between the two nose wheel steering handwheel positions",
        "The nose wheel steering computer has finished its self test.",
      ],
      answer: 0,
    },
    {
      id: 7,
      question: "What does a pulsing green engine parameter indicate?",
      options: [
        "An ADVISORY, the parameter is about to reach the limit.",
        "An ADVISORY, the parameter is out of the limits",
        "A MEMO, the parameter has a faulty indication.",
        "A level 3 failure requiring immediate crew action.",
      ],
      answer: 0,
    },
    {
      id: 8,
      question: "what does a green pulsing parameter on a SD page indicate?",
      options: [
        "when a parameter drifts out of its normal range",
        "as long as it is outside its limits",
        "both a & b",
        "it has exceeded the warning threshold",
      ],
      answer: 2,
    },
    {
      id: 9,
      question: "How many AOA and Pitot probes are present?",
      options: ["3 AOA & 3 Pitot", "2 AOA & 3 Pitot", "3 AOA & 2 Pitot", "2 AOA & 2 Pitot"],
      answer: 0,
    },
    {
      id: 10,
      question: "When \"USE MAN PITCH TRIM \" in AMBER message is displayed on the PFD",
      options: [
        "If both L & R elevator fault is detected.",
        "If both G & Y system fail in flight",
        "Whenever pitch direct law is operative",
        "b & c are correct",
      ],
      answer: 3,
    },
    {
      id: 11,
      question: "The drive for emergency generator is",
      options: [
        "RAT operated hydraulic motor",
        "Blue system electrical pump.",
        "Ram Air Turbine",
        "None of the above.",
      ],
      answer: 0,
    },
    {
      id: 12,
      question: "What precautions are to be observed while disconnecting IDG?",
      options: [
        "Do not disconnect the IDG if engine is running.",
        "Do not disconnect the IDG if engine is not running or not wind milling.",
        "IDG pb switch should not be pressed for more than 3 seconds.",
        "Both (B) and (C) above are correct",
      ],
      answer: 3,
    },
    {
      id: 13,
      question:
        "Requirements for Ground speed mini:\n\n1. Managed Speed\n2. Slats extended\n3. Activated approach phase\n4. FD on\n5. Auto thrust on",
        options: ["1,2,3", "1,3", "1,2,3,4,5", "None of the above are correct"],
      answer: 0,
    },
    {
      id: 14,
      question:
        "The PTU fault on ground comes when the differential pressure between the GREEN and the YELLOW systems is greater than_____ psi and PTU doesnt run",
      options: ["300.", "500.", "650.", "750."],
      answer: 2,
    },
    {
      id: 15,
      question:
        "The green DECEL light on the autobrake pushbutton illuminates when the actual airplane deceleration corresponds to what percentage of the selected rate?",
      options: ["80%", "90%", "92%", "95%"],
      answer: 0,
    },
    {
      id: 16,
      question:
        "OVHT amber message on the ECAM HYD page near ELEC pump indication means",
      options: [
        "Overheat of the system fluid",
        "Overheat of the pump itself",
        "In case of yellow pump OVHT the PTU must also be switched OFF",
        "In case of blue pump OVHT, the RAT must be extended.",
      ],
      answer: 1,
    },
    {
      id: 17,
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
      id: 18,
      question: "what happens when WING ANTI ICE is used on the ground?",
      options: [
        "works normally",
        "is not available on the ground",
        "opens for 30 seconds and then closes (test sequence)",
        "none of the above",
      ],
      answer: 2,
    },
    {
      id: 19,
      question:
        "The FMGS updates the FM position via the use of GPS or radio navaids and it uses a priority rule for FM position update. What is the order of priority for determining FM position?",
      options: [
        "IRS-GPS, IRS-VOR/DME IRS-DME/DME, IRS only.",
        "IRS-GPS, IRS only, IRS-DME/DME, IRS-VOR/DME,",
        "IRS-GPS, IRS-DME/DME, IRS-VOR/DME, IRS only.",
      ],
      answer: 2,
    },
    {
      id: 20,
      question: "With the aircraft in Pitch Alternate Law, roll is in _____ Law.",
      options: ["Direct", "Normal", "Alternate"],
      answer: 0,
    },
    {
      id: 21,
      question: "Failure to retract the flaps after takeoff will:",
      options: [
        "Activate the wing tip brakes.",
        "Result in automatic flap and slat retraction at 210 kts.",
        "Result in automatic flap and slat retraction at 220 kts.",
        "Result in automatic flap retraction at 210 kts.",
      ],
      answer: 3,
    },
    {
      id: 22,
      question: "Cost Index = 0 (zero) corresponds to",
      options: [
        "Minimum fuel consumption (max range)",
        "Minimum time.",
        "Best ratio between the flight time cost and the fuel cost.",
        "LRC (Long Range Cruise).",
      ],
      answer: 0,
    },
    {
      id: 23,
      question: "Placing the avionics ventilation system in the smoke configuration:",
      options: [
        "Opens the #1 GLC.",
        "Opens the cargo under-floor valve.",
        "Opens the #2 GLC.",
        "De-energizes the blower fan, extract fan runs, and opens the air conditioning extract valves.",
      ],
      answer: 3,
    },
    {
      id: 24,
      question: "What happens when EXTRACT PB is set to OVRD?",
      options: [
        "open configuration",
        "closed config and extract fan stops",
        "closed config and blower fan stops",
        "closed config and both blower and extract fans keep running",
      ],
      answer: 3,
    },
    {
      id: 25,
      question:
        "What is the maximum altitude at which the APU may be started using the batteries only?",
      options: ["15, 000 ft", "20, 000 ft", "25, 000 ft", "39, 000 ft"],
      answer: 2,
    },
    {
      id: 26,
      question:
        "The FADEC has control during a manual engine start sequence except for:",
      options: [
        "The high pressure fuel valve.",
        "The start valve.",
        "An automatic abort.",
      ],
      answer: 2,
    },
    {
      id: 27,
      question:
        "Which steps of a manual start are being taken care of by the FADEC?",
      options: [
        "Starter valve closure and ignition cut off.",
        "Starter valve opening and ignition start.",
        "Starter valve closure and ignition start.",
        "Starter valve opening and ignition cut off.",
      ],
      answer: 0,
    },
    {
      id: 28,
      question:
        "After take off, the vertical guidance by SRS is disengaged",
      options: [
        "Automatically at FCU altitude",
        "By putting the speed knob",
        "Automatically at ACC ALT, does not disengage automatically in single engine",
        "All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 29,
      question: "SRS mode:",
      options: [
        "Disengages automatically, at the acceleration altitude for two engine operation. However, in engine out conditions, SRS does not disengage automatically at ACC ALT",
        "Disengages when crew engages another vertical mode",
        "During T/O, if altitude on FCU is set lower than current altitude, a/c will remain in SRS mode until pilot takes some corrective action.",
        "All of the above are correct",
      ],
      answer: 3,
    },
    {
      id: 30,
      question: "Normal mode of operation for FMGS is",
      options: ["Dual Mode", "Single Mode", "Independent Mode"],
      answer: 0,
    },
    {
      id: 31,
      question: "The ENG Pump Fault light after engine start can come when:",
      options: [
        "The reservoir has Lo Level or Low Air Pressure or overheat.",
        "The engine pump pressure is low.",
        "Both statements are correct",
      ],
      answer: 2,
    },
    {
      id: 32,
      question: "What is the speed limit for operating the windscreen wipers?",
      options: ["230 kt", "185 kt", "215 kt", "200 kt"],
      answer: 0,
    },
    {
      id: 33,
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
      id: 34,
      question: "RLD for dispatch purpose",
      options: [
        "RLD = ALD / 1.67",
        "RLD dry=ALD / 0.6",
        "RLD dry=115% of Calculated Landing Distance",
        "None of the above",
      ],
      answer: 1,
    },
    {
      id: 35,
      question:
        "What is the Maximum permissible Bank angle following an engine failure at take off?",
      options: ["10 DEG", "7 DEG", "15 DEG", "5 DEG"],
      answer: 2,
    },
    {
      id: 36,
      question:
        "Icing conditions exist when oat is at or less than - and visibility less than -",
      options: ["10 Deg C and 1600m", "0 Deg C and 1600m", "0 Deg C and 1000m", "10 Deg C and 1000m"],
      answer: 0,
    },
    {
      id: 37,
      question: "On Display Unit - what does \"INVALID DATA\" message means?",
      options: ["DMC failure", "power failure", "Both A and B", "internal failure. of DU"],
      answer: 0,
    },
    {
      id: 38,
      question: "The most dangerous symptoms of hypoxia at altitude are:",
      options: [
        "breathlessness and reduced night vision.",
        "sensation of heat and blurred vision.",
        "hyperventilation.",
        "euphoria and impairment of judgement.",
      ],
      answer: 3,
    },
    {
      id: 39,
      question:
        "Hydraulic reservoir pressurisation is provided for from which stage of engine ?",
      options: ["IP stage", "HP stage of engine 2", "HP stage of engine 1", "None of the above"],
      answer: 2,
    },
    {
      id: 40,
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
      id: 41,
      question: "Each FMGC receives a position from each of the three IRS ?",
      options: [
        "computes a mean-weighted average called the \"gpirs\" position",
        "computes a mean-weighted average called the \"MIX IRS\" position",
        "computes a mean-weighted average called the RADIO position",
      ],
      answer: 1,
    },
    {
      id: 42,
      question:
        "The message WING TIP BRK ON appears on the E/WD. What does it mean?",
      options: [
        "A hydraulic device locks the flaps in their present position.",
        "To reduce structural stress, the slats movement is being slowed down through the wing tip brakes.",
        "To avoid asymmetry, the outer slats are locked in their present position.",
        "Because of the locked flaps, the wing tip brakes also lock the slats.",
      ],
      answer: 0,
    },
    {
      id: 43,
      question: "What is the meaning of the abbreviation SCT?",
      options: ["A. 1 - 2 oktas.", "B. 3 - 4 oktas.", "C. 1 - 4 oktas.", "D. 5 - 7 oktas."],
      answer: 1,
    },
    {
      id: 44,
      question:
        "With a swept wing aircraft, with an increase in altitude, which of the following statements about lateral stability is correct?",
      options: [
        "A) Static lateral stability decreases, dynamic lateral stability increases.",
        "B) Static lateral stability remains the same, dynamic lateral stability decreases.",
        "C) Static lateral stability increases, dynamic lateral stability increases.",
        "D) Static lateral stability increases, dynamic lateral stability decreases.",
      ],
      answer: 1,
    },
    {
      id: 45,
      question: "Select the correct statements",
      options: [
        "Proximate intruder is indicated by a white filled diamond",
        "TA intruder are indicated by an amber circle and associated with the TRAFFIC-TRAFFIC aural message",
        "RA intruder is indicated by a red square and associated with vertical orders displayed on the PFD and aural messages",
        "All are correct",
      ],
      answer: 3,
    },
    {
      id: 46,
      question:
        "During climb with THR CLB/ CLB Mode towards FCU target 10000 what mode reversion will occur if altitude counter is only rotated to a lower altitude than present altitude ?",
      options: [
        "DES/OPEN DES and aircraft starts DESCENT",
        "SPD/VS and aircraft starts descent",
        "SPD/VS and aircraft continue its climb",
        "No mode reversion occurs",
      ],
      answer: 2,
    },
    {
      id: 47,
      question: "Which stall has a low angle of attack?",
      options: [
        "A) High speed stall (shock stall).",
        "B) Deep stall.",
        "C) Accelerated stall.",
        "D) Low speed stall.",
      ],
      answer: 0,
    },
    {
      id: 48,
      question: "With the loss of electrical power the wing anti-ice valves",
      options: [
        "Go to the closed position.",
        "Remain in their current position",
        "Go to the open position",
      ],
      answer: 0,
    },
    {
      id: 49,
      question:
        "If flex temperature set in fmgs is less than TAT, what Thrust will you get during takeoff ?",
      options: ["MCT", "TOGA", "CLB", "FLEX"],
      answer: 0,
    },
    {
      id: 50,
      question:
        "Which of the following statements, about a venturi in a sub-sonic airflow are correct? the dynamic pressure in the undisturbed flow and in the throat are equal. 2. the total pressure in the undisturbed flow and in the throat are equal.",
      options: [
        "A) 1 is correct and 2 is incorrect.",
        "B) 1 is incorrect and 2 is correct.",
        "C) 1 and 2 are correct.",
        "D) 1 and 2 are incorrect.",
      ],
      answer: 1,
    },
    {
      id: 51,
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
      id: 52,
      question: "Wet runway illusion would cause a pilot to :",
      options: [
        "Early Flare & Hard Landing",
        "Late Flare & Hard Landing",
        "Overshoot the runway",
        "None of the above",
      ],
      answer: 1,
    },
    {
      id: 53,
      question:
        "38. A DISTRESS message differs from an URGENCY message because:",
      options: [
        "a. there is grave and imminent danger which requires immediate assistance.",
        "b. the aeroplane has suffered damage that endangers the ability to fly.",
        "c. the aeroplane will not be able to reach a suitable aerodrome.",
        "d. the situation concerns the safety of passengers on board or withing sight.",
      ],
      answer: 0,
    },
    {
      id: 54,
      question:
        "The level of rescue and fire fighting RFF facilities is dependent upon the category of the aerodrome what factors determine this category?",
      options: [
        "Aeroplane reference filed length wing span and outer main gear wheel span of the largest aircraft using that aerodrome",
        "The length of the longest runway and the area to be covered",
        "The overall length and the fuselage width of the longest aircraft normally using that aerodrome",
        "The length of the longest runway and total area of hard standing including access roads",
      ],
      answer: 2,
    },
    {
      id: 55,
      question: "Tuck under is:",
      options: [
        "A) the tendency to nose down when speed is increased into the transonic flight regime above Critical Mach (MCrit)",
        "B) shaking of the control column at high Mach Number",
        "C) the tendency to nose down when the control column is pulled back.",
        "D) the tendency to nose up when speed is increased into the transonic flight regime below Critical Mach (MCrit)",
      ],
      answer: 0,
    },
    {
      id: 56,
      question: "During Parking flows what do you understand by fuel check?",
      options: [
        "Centre tank test",
        "FOB + F. Used = FOB At departure",
        "Switching off Fuel pumps",
        "All of the above",
      ],
      answer: 1,
    },
    {
      id: 57,
      question:
        "Point A 175W point B 175E at 60N latitude tas 400kts. Descending Fl 320 to FL 200. ROD 2000FT/MIN. At what distance from A will you begin descent to be FL 200 at pt B.",
      options: ["242", "245", "250", "258"],
      answer: 3,
    },
    {
      id: 58,
      question: "What is the relation between V2 and VS1G?",
      options: ["1.13", "1.3", "1.11", "1.23"],
      answer: 0,
    },
    {
      id: 59,
      question: "What does Cabotage refer to?",
      options: [
        "Domestic air services within a state.",
        "An international air carrier.",
        "A flight above territorial waters.",
        "Crop spraying.",
      ],
      answer: 0,
    },
    {
      id: 60,
      question: "What is the Full form of GBAS",
      options: [
        "Ground Based Automated System",
        "Ground Based Alerting System",
        "Ground Based Augmentation System",
        "Ground Based Autonomous System",
      ],
      answer: 2,
    },
  ],
};
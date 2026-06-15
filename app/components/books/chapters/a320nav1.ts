import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - NAVIGATION / SURV - 01",
  questions: [
    {
      id: 1,
      question: "What are the different types of flight guidance?",
      options: [
        "Slaved and managed.",
        "Automatic and manual.",
        "Managed and selected.",
        "Managed and manual",
      ],
      answer: 2,
    },
    {
      id: 2,
      question:
        "One A/P can be engaged on the ground if the engines are not running.",
      options: [
        "This A/P will disengage when both engines are started.",
        "This A/P will disengage when one engine is started.",
        "This A/P will disengage when speed is sensed at > 10 kts.",
      ],
      answer: 1,
    },
    {
      id: 3,
      question:
        "When the thrust levers are moved to the takeoff position, the FMGS updates its position at takeoff using:",
      options: [
        "IRS/DME/DME positioning.",
        "IRS/ILS/DME positioning.",
        "The navigation database and the takeoff runway entered into the MCDU by the pilot.",
        "The VOR/DME currently tuned.",
      ],
      answer: 2,
    },
    {
      id: 4,
      question: ": The takeoff bias is:",
      options: [
        "Replaced when a bias is computed based on radio position.",
        "Retained for the remainder of the flight.",
        "Blended out over the next 30 minutes.",
      ],
      answer: 0,
    },
    {
      id: 5,
      question:
        "With the DATA selector set to HDG, the time remaining until the completed IRS alignment is displayed on the control display. How long does it take normally?",
      options: [
        "Approximately 1 minute",
        "Approximately 3 minutes",
        "Approximately 7 minutes",
        "Approximately 10 minutes",
      ],
      answer: 3,
    },
    {
      id: 6,
      question:
        "When flying at cruise altitude, the aircraft navigates using radio navaids only.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 7,
      question:
        "The IR alignment count down stops one minute prior to accomplishment and the ALIGN lights are flashing. Why does it happen?",
      options: [
        "It is an indication that there is a disagreement between the IRs and the alignment must be restarted.",
        "It is an indication that the alignment is complete but must be acknowledged",
        "It is an indication that alignment has stopped as the present position data has not been entered from the FMGS.",
      ],
      answer: 2,
    },
    {
      id: 8,
      question: "What is managed climb speed below 10,000 feet?",
      options: ["Green dot.", "210 knots.", "250 knots.", "Best rate of climb speed."],
      answer: 2,
    },
    {
      id: 9,
      question:
        "The selected database date has expired. When must the active data base be changed?",
      options: [
        "Prior to entering the preflight data.",
        "Anytime prior to takeoff.",
        "The following calendar day.",
      ],
      answer: 0,
    },
    {
      id: 10,
      question: "Which of the following navaids can be autotuned?",
      options: [
        "ILS and ADF (for NDB data base approaches).",
        "VOR and DME.",
        "Both are correct",
      ],
      answer: 2,
    },
    {
      id: 11,
      question: "Cost Index = 0 (zero) corresponds to:",
      options: [
        "Minimum fuel consumption (max range)",
        "Minimum time.",
        "Best ratio between the flight time cost and the fuel cost.",
        "LRC (Long Range Cruise).",
      ],
      answer: 0,
    },
    {
      id: 12,
      question:
        "While taxiing on the ground, the FMGS displays the position of the aircraft using:",
      options: [
        "IRS and DME/DME.",
        "IRS only.",
        "IRS and VOR/DME.",
        "DME/DME and VOR/DME.",
      ],
      answer: 1,
    },
    {
      id: 13,
      question:
        "With the autopilot engaged, either sidestick can be moved freely.",
      options: [
        "True.",
        "False, moving either sidestick will cause the autopilot(s) to disengage",
        "False, only the PNF's sidestick will freely move.",
      ],
      answer: 1,
    },
    {
      id: 14,
      question:
        "When the aircraft is in the Managed Guidance mode, it is:",
      options: [
        "Guided by the pilot selecting the specific flight modes and parameter target values on the FCU.",
        "Responding to pilot inputs of speed, altitude, and heading selected on the FCU.",
        "Following lateral, vertical and speed profiles as determined by the IRS'S.",
        "Following lateral, vertical and speed profiles as determined by the FMGS.",
      ],
      answer: 3,
    },
    {
      id: 15,
      question: "What is managed climb speed above 10,000 feet?",
      options: ["Green dot.", "250 knots.", "280 knots.", "Econ climb speed."],
      answer: 3,
    },
    {
      id: 16,
      question: "An amber box on the MCDU screen indicates:",
      options: [
        "An optional data entry.",
        "A mandatory data entry.",
        "A compulsory reporting point.",
        "The waypoint indicated will be overflown",
      ],
      answer: 1,
    },
    {
      id: 17,
      question: "Managed guidance is engaged by:",
      options: [
        "Pulling on the desired FCU selector knob.",
        "Pushing on the desired FCU selector knob.",
        "Rotating 90° the desired FCU selector knob.",
      ],
      answer: 1,
    },
    {
      id: 18,
      question: "What speed will the FMGS use in an Expedite climb?",
      options: ["Green dot speed.", "ECON climb speed.", "250 knots below 10,000 feet.", "Amber dot speed."],
      answer: 0,
    },
    {
      id: 19,
      question: "The weather radar image can be displayed on which modes of the ND?",
      options: [
        "Rose NAV or VOR.",
        "Rose VOR or Rose ILS.",
        "Rose NAV or ARC.",
        "All modes except Plan.",
      ],
      answer: 3,
    },
    {
      id: 20,
      question:
        "You have been cleared to intercept the localizer. You have pushed the LOC push button on the FCU. If all necessary data has been entered in the MCDU, can you now engage both autopilots?",
      options: [
        "No, the LOC must capture before both autopilots will engage.",
        "Yes.",
        "No, the APPR pushbutton must be pushed",
      ],
      answer: 2,
    },
    {
      id: 21,
      question:
        "During a turnaround, you notice that there is a residual ground speed on both NDs. How do you correct this?",
      options: [
        "As the engines have been shut down, it is necessary to carry out a full re-alignment.",
        "There is no corrective action possible until the aircraft is completely electrically shut down.",
        "It is possible to carry out a rapid alignment by turning off all 3 ADIRS momentarily.",
      ],
      answer: 2,
    },
    {
      id: 22,
      question: "SRS will command:",
      options: [
        "V2 + 10 with both engines operating",
        "In the case of an engine failure V2 or current aircraft speed (whichever is higher) limited by V2 + 15",
        "Best rate of climb taking into account actual wind component.",
        "Both A & B",
      ],
      answer: 3,
    },
    {
      id: 23,
      question:
        ": In flight, either the AP/FD pitch control, or autothrust may acquire and hold a target speed or Mach number, depending on the engaged modes. Speed control is \"Managed\" when the target comes from the SPD/MACH FCU window.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 24,
      question: "The FMGS data base contains",
      options: [
        "Performance information, such as engine fuel flow, engine thrust, green dot data (L/D data), etc.",
        "Navigation information, such as navaids, waypoints, airways, airports, runways, etc.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 25,
      question:
        "If one GPS receiver fails, the three ADIRUs automatically select the only operative GPS receiver.",
      options: ["True.", "False"],
      answer: 0,
    },
    {
      id: 26,
      question:
        "FMGC 1 is not working. To enter data into the FMGC, which MCDU would you use?",
      options: [
        "MCDU 1 on the Captain's side.",
        "MCDU 2 on the First Officer's side.",
        "Either MCDU 1 or MCDU 2.",
      ],
      answer: 2,
    },
    {
      id: 27,
      question: "The pilot interfaces with the FMGS using the:",
      options: ["FCU.", "Thrust Levers.", "MCDU.", "All of the above."],
      answer: 3,
    },
    {
      id: 28,
      question: "When is the SRS active?",
      options: [
        "During a Go Around (after the thrust levers are placed in the TOGA position) up to the acceleration altitude.",
        "At T/O, when TOGA or FLX power is set, SRS is displayed on the FMA and provides guidance up to the acceleration altitude.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 29,
      question:
        "energy circle is a green arc, centered on the aircraft's position and oriented towards the current track line. It is displayed on the NDs during descent, when HDG or TRK mode is selected.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 30,
      question:
        "Can the crew depress the RMP ON NAV pushbutton and use the RMP for navigation simultaneously with FMGC autotuning?",
      options: [
        "Yes, because the opposite FMGC will continue to autotune navaids.",
        "No, RMP backup tuning supersedes the autotuning function of both FMGC's.",
      ],
      answer: 1,
    },
    {
      id: 31,
      question: "What do the white round lights on the FCU display mean?",
      options: [
        "Selected guidance has been engaged.",
        "Automatic guidance has been engaged.",
        "Managed guidance has been armed or engage",
      ],
      answer: 2,
    },
    {
      id: 32,
      question:
        "The Captain's FMA indicates - FD2 in column five, line two. What does this mean?",
      options: [
        "FMGC #1 has \"timed out\" and flight guidance is lost.",
        "The First Officer has pushed the priority takeover pushbutton.",
        "FMGC #1 has \"timed out\" and FMGC #2 is now providing flight guidance for both pilots",
        "The Captain's FD pushbutton. on the FCU has not been selected \"ON\" and FD2 has automatically crossed over.",
      ],
      answer: 3,
    },
    {
      id: 33,
      question:
        "During descent, if you push the Expedite (EXPED) push button, what speed will the aircraft try to maintain?",
      options: [
        "Green dot.",
        "340 knots",
        "3,000 fpm vertical speed.",
        "standard 3.0 degrees angle of descent.",
      ],
      answer: 1,
    },
    {
      id: 34,
      question: ": OPEN CLIMB (OP CLB) is a Managed mode.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 35,
      question:
        "If you have depressed the EXPED push button and want to cancel this function, how could this be accomplished?",
      options: [
        "Push the EXPED push button again.",
        "Pull the altitude, vertical speed, or speed knob.",
        "Retard the thrust levers to IDLE.",
        "A red \"WIND SHR\" light; an aural \"WINDSHEAR, WINDSHEAR, WINDSHEAR\"",
      ],
      answer: 1,
    },
    {
      id: 36,
      question: "The LOC mode disengages when:",
      options: [
        "Another lateral mode is engaged.",
        "The pilot presses the LOC pushbutton again (engaging the HDG/TRK mode on the current HDG/TRK).",
        "Both are correct",
      ],
      answer: 2,
    },
    {
      id: 37,
      question:
        "Will the aircraft capture and navigate via the ILS signals if the ILS push button on the FCU is not pushed?",
      options: ["Yes", "No."],
      answer: 0,
    },
    {
      id: 38,
      question:
        "The three Display Management Computers (DMCS) acquire and process all input from airplane sensors and computers to generate the display images",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 39,
      question:
        "The aircraft has _______ Air Data Inertial Reference Units (ADIRU's).",
      options: ["2", "3", "4"],
      answer: 1,
    },
    {
      id: 40,
      question: "GPWS aural and visual warnings cannot be inhibited.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      id: 41,
      question:
        "Selection of the correct takeoff runway on the FMGC prior to each flight is necessary because:",
      options: [
        "The FADEC needs it to know how much to reduce the thrust for takeoff.",
        "Selection of the correct runway insures proper pressurization.",
        "Selection of the correct runway permits the FMGC to update its position at takeoff.",
      ],
      answer: 2,
    },
    {
      id: 42,
      question: "The two basic modes of flight guidance are:",
      options: ["Slaved and coupled.", "Managed and selected.", "Manual and coupled."],
      answer: 1,
    },
    {
      id: 43,
      question:
        "Both autopilots can be engaged and active in any phase of flight.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      id: 44,
      question: "All navaids are normally autotuned by:",
      options: ["The FMGC", "MCDU", "ADIRU"],
      answer: 0,
    },
    {
      id: 45,
      question: "VOR data can be displayed on:",
      options: ["Both NDs", "The DDRMI", "First two statements are correct"],
      answer: 2,
    },
    {
      id: 46,
      question: "What is the preferred method of radio position updating for the FMGS?",
      options: ["VOR/DME", "ILS/DME", "DME/DME"],
      answer: 2,
    },
    {
      id: 47,
      question:
        "The windshear function of the FAC's is independent of the flight director on/off switch.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 48,
      question:
        "All PFD displays except attitude; speed; heading; altitude; and vertical speed are removed when pitch attitude exceeds 25 degrees nose up or 13 degrees nose down.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 49,
      question:
        "Sidestick position and max. sidestick deflection are displayed on the ground on the PFD:",
      options: [
        "Continuously after aircraft power is applied.",
        "After the first engine start.",
        "On takeoff roll when power is applied",
      ],
      answer: 1,
    },
    {
      id: 50,
      question: "The airspeed indication on the PFD starts at:",
      options: ["100 kts.", "80 kts", "50 kts.", "30 kts"],
      answer: 3,
    },
    {
      id: 51,
      question:
        "The speed trend arrow on the PFD airspeed scale indicates the speed value that will be attained in _____ seconds if the acceleration remains constant.",
      options: ["5", "8", "10", "15"],
      answer: 2,
    },
    {
      id: 52,
      question: "Radio Height is displayed on the PFD:",
      options: [
        "Below 2500 feet.",
        "When the LOC or APPR p/b is pressed.",
        "When a Decision Height is selected.",
      ],
      answer: 0,
    },
    {
      id: 53,
      question:
        "The Armed Vertical Modes are displayed on the Flight Mode Annunciator on the second line in:",
      options: ["Blue or magenta.", "Blue or green.", "White"],
      answer: 0,
    },
    {
      id: 54,
      question:
        "ILS 1 information is displayed on ______ when operating in the rose ILS mode:",
      options: ["PFD2&ND1", "PFD1&ND1", "PFD1&ND2"],
      answer: 2,
    },
    {
      id: 55,
      question:
        "When a double entry is needed on the MCDU (e.g. wind direction/speed: 270/110) the separating slash must be used. The trailing entry of a pair must be preceded by a slash if it is entered alone.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 56,
      question:
        "The Engaged Vertical Modes are displayed on the Flight Mode Annunciator on the first line in:",
      options: ["Green", "Green or Magenta", "Blue"],
      answer: 0,
    },
    {
      id: 57,
      question: "The ON BAT light on the ADIRS CDU illuminates:",
      options: [
        "Only when all IRU's are on battery power.",
        "When an IRU fault is detected.",
        "When one or more ADIRU's; are supplied by airplane battery only.",
      ],
      answer: 2,
    },
    {
      id: 58,
      question:
        "In the event of failure of the AIR DATA function of ADIRU 1 or 2; the affected displays can be manually selected over to ADR 3 by the:",
      options: [
        "ECAM/ND transfer selector.",
        "AIR DATA selector.",
        "ATT HDG selector.",
      ],
      answer: 1,
    },
    {
      id: 59,
      question: "Box prompts on the MCDU indicate data:",
      options: [
        "Entry is optional for FMGS operation.",
        "Entry is required for minimum FMGS operation.",
        "will be filled in by the FMGS.",
      ],
      answer: 1,
    },
    {
      id: 60,
      question: "An FMGS message which requires immediate attention is displayed in:",
      options: ["Red", "Amber", "Magenta"],
      answer: 1,
    },
    {
      id: 61,
      question:
        "If the FLEX TEMP is not entered on the Takeoff Page of the MCDU:",
      options: [
        "A FLX takeoff is still available; set power with the thrust levers.",
        "The FMGS will enter it for you based on TAT.",
        "A FLX takeoff is not available.",
      ],
      answer: 2,
    },
    {
      id: 62,
      question: "Zero Fuel Weight is entered on:",
      options: ["Init B page.", "Prog page.", "Perf page."],
      answer: 0,
    },
    {
      id: 63,
      question:
        "If the SPD/MACH knob on the FCU is not pulled within a predetermined time to engage selected speed:",
      options: [
        "The selection can be made at any time.",
        "The selection is lost and dashes are re-displayed.",
        "The selection is lost and the display goes blank.",
      ],
      answer: 1,
    },
    {
      id: 64,
      question: "When the altitude knob on the FCU is pulled:",
      options: [
        "The altitude is armed.",
        "The current altitude is canceled.",
        "OPEN CLIMB or OPEN DES engages.",
      ],
      answer: 2,
    },
    {
      id: 65,
      question:
        "The Standby Attitude indication will remain available for ______ minutes after total electrical failure.",
      options: ["5", "7", "10", "22"],
      answer: 0,
    },
  ],
};
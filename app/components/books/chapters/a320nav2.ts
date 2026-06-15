import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - NAVIGATION / SURV 02",
  questions: [
    {
      id: 1,
      question: "What information is supplied by the IR's?",
      options: [
        "Attitude, Flight Path Vector, Track, Heading, Accelerations, Angular Rates, Ground Speed & Aircraft Position",
        "Barometric Altitude, Airspeed, Mach, Angle Of Attack, Temperature and Over speed Warnings",
        "Attitude, Flight Path Vector, Track, Heading, Accelerations, Angular Rates & Aircraft Position",
        "Barometric Altitude, Airspeed, Mach, Angle Of Attack, Temperature, Ground Speed and Over speed Warnings",
      ],
      answer: 0,
    },
    {
      id: 2,
      question: "What information is supplied by the ADRs?",
      options: [
        "Barometric Altitude, Airspeed, Mach, Angle Of Attack, Temperature and Over speed Warnings",
        "Attitude, Flight Path Vector, Track, Heading, Accelerations, Angular Rates, Ground Speed & Aircraft Position",
        "Attitude, Flight Path Vector, Track, Heading, Accelerations, Angular Rates & Aircraft Position",
        "Barometric Altitude, Airspeed, Mach, Angle Of Attack, Temperature, Ground Speed and Over speed Warnings",
      ],
      answer: 0,
    },
    {
      id: 3,
      question:
        "With the DATA selector set to HDG, the time remaining until the completed IRS alignment is displayed on the control display.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 4,
      question: "The IR ALIGN light is extinguished. What does this mean?",
      options: [
        "Alignment has been completed",
        "Air data output has been disconnected",
        "The respective IR is operating normally",
      ],
      answer: 0,
    },
    {
      id: 5,
      question: "Steady ALIGN light indicates",
      options: [
        "Alignment is in progress",
        "Inertial function of IR is lost",
        "Alignment fault",
        "Complete failure of ADIRU",
      ],
      answer: 0,
    },
    {
      id: 6,
      question: "What does the flashing of an ALIGN light indicate ?",
      options: [
        "Present position is not entered and ten minutes has elapsed since the IR was selected ON",
        "Alignment is in progress",
        "Alignment is completed",
        "Fault in ADIRU",
      ],
      answer: 0,
    },
    {
      id: 7,
      question: "ALIGN light for IR 1 flashes on ADIRS CDU. What does it indicate ?",
      options: [
        "All are correct",
        "Alignment Fault",
        "PPOS is not entered for 10 minutes",
        "Entered PPOS is different from the earlier values by more than 1 degree",
      ],
      answer: 0,
    },
    {
      id: 8,
      question:
        "What does the illumination of ON BAT light {amber} on ADIRU CDU indicate ?",
      options: [
        "All are correct",
        "One or more ADIRU is supplied by aircraft battery only",
        "It will also be on for a few seconds iinitially while switching on an ADIRU in case of normal alignment",
        "It will not come on for fast realignment",
      ],
      answer: 0,
    },
    {
      id: 9,
      question:
        "What is the meaning of IR FAULT light steady on ADIRS CDU ?",
      options: [
        "NAV data of IRS is lost but the attitude and heading information may be recovered in ATT mode",
        "Complete failure of IRS",
        "NAV data of IRS is lost and ATT information cannot be recovered",
      ],
      answer: 2,
    },
    {
      id: 10,
      question:
        "If an ADIRU fails totally which checklist procedure should be carried out first ?",
      options: [
        "ADR FAULT procedure",
        "IR FAULT procedure",
        "Whichever checklist appears first",
        "There is no need for any priority in carrying out the checklist",
      ],
      answer: 0,
    },
    {
      id: 11,
      question:
        "In the event of failure of the AIR DATA function of ADIRU 1 or 2; the affected displays can be manually selected over to ADR 3 by the",
      options: ["AIR DATA selector", "IR FAULT procedure", "ATT HDG selector"],
      answer: 0,
    },
    {
      id: 12,
      question: "What action should be taken if ADR #1 is lost?",
      options: [
        "Move the AIR DATA knob on the switching panel to CAPT 3",
        "Nothing",
        "Move the ATT HDG knob on the switching panel to CAPT 3",
      ],
      answer: 0,
    },
    {
      id: 13,
      question: "If the IR mode rotary selector is selected OFF",
      options: [
        "ADIRU is de-energized and ADR & IR data are not available..",
        "AD information will be disconnected",
        "IR information will be disconnected",
        "The ADIRU is not energized: AD and IR information is lost",
      ],
      answer: 0,
    },
    {
      id: 14,
      question: "What will happen if you place one of the ADR push buttons OFF?",
      options: [
        "The OFF light will illuminate and air data output will disconnect",
        "The respective ADIRU will become de-energized",
        "Both AD and IR information will be disconnected",
        "All of the above",
      ],
      answer: 0,
    },
    {
      id: 15,
      question: "What happens if SYS selector knob is selected at '1'?",
      options: [
        "System 1 is selected for data display",
        "'H' key on keyboard of ADIRS Panel is used for entering",
        "Heading in ATT Mode",
        "Present Position",
      ],
      answer: 0,
    },
    {
      id: 16,
      question:
        "The ATT HDG and AIR DATA selectors on the switching panel in the NORM position indicate that:",
      options: [
        "ADIRU 1 is supplying information to PFD 1, ND 1 and the DDRMI; ADIRU 2 is supplying power to PFD 2 and ND 2",
        "ADIRU 1 is supplying information to PFD 1 and ND 2, and ADIRU 2 is supplying power to PFD 2 and ND 1",
        "ADIRU 1 is supplying information to PFD 1, ND 1; ADIRU 2 is supplying power to PFD 2 and ND 2 and the DDRMI",
        "In case of failure of ADIRU 1 or 2, ADR 3 or IR 3 can be used from ADIRU 3 with the help of switching selectors",
      ],
      answer: 0,
    },
    {
      id: 17,
      question: "The compass card of ADF RMI is driven by",
      options: [
        "ADIRU 1",
        "ADIRU 2",
        "ADIRU 3",
        "ADIRU 1 or By ADIRU 3 if captain is on ADIRU 3",
      ],
      answer: 0,
    },
    {
      id: 18,
      question: "What are the inputs for STBY Altimeter?",
      options: ["STBY STATIC", "STBY PITOT and STBY STATIC", "STBY PITOT"],
      answer: 0,
    },
    {
      id: 19,
      question: "What are the inputs for STBY Air speed indicator?",
      options: ["STBY PITOT and STBY STATIC", "STBY STATIC", "STBY PITOT"],
      answer: 0,
    },
    {
      id: 20,
      question: "On STBY altimeter, the altimeter baro reference",
      options: [
        "Hectopascal only",
        "Can be in inches of mercury or hectopascals",
        "Inches of mercury only",
        "Depends on the unit selected on PFD controller",
      ],
      answer: 1,
    },
    {
      id: 21,
      question: "Select the correct statements:",
      options: [
        "The aircraft has two VOR receivers",
        "The Navigation Displays (NDs) show VOR1 and VOR2 information, in accordance with the position of the ADF/VOR selectors on the EFIS control panel",
        "The DDRMI on the center panel also displays VOR1 and VOR2 bearings, if the heading signal is valid",
        "All are correct",
      ],
      answer: 3,
    },
    {
      id: 22,
      question: "Select the correct statements:",
      options: [
        "The aircraft has two ILS receivers",
        "Each ILS receiver is integrated in a modular avionics unit called MMR (Multi Mode Receiver) (ILS1 receiver in MMR1, ILS2 receiver in MMR2)",
        "PFD1 and ND2 display ILS1 information",
        "PFD2 and ND1 display ILS2 information",
        "The flight crew can put the same ILS information on each PFD by pressing the LS button on the EFIS control panel (the green bars come on).",
        "The NDs display ILS information, if the flight crew selects the ROSE LS mode on the EFIS control Panel",
        "All are correct",
      ],
      answer: 6,
    },
    {
      id: 23,
      question: "Mark the correct statement.",
      options: [
        "The NDs display ADF information, depending on the position of the ADF/VOR selectors on the EFIS control panel",
        "The DDRMI also displays ADF bearing, depending on the position of the ADF/VOR selector (on the DDRMI).",
        "The aircraft has 1 or 2 ADF system",
        "All are correct",
      ],
      answer: 3,
    },
    {
      id: 24,
      question: "Mark the correct statement",
      options: [
        "Both ILS/ DMEs can be controlled from RMP1, if RMP2 switch is OFF",
        "Both ILS/DMEs can be controlled from RMP2, if RMP1 switch is OFF",
        "Both a & b are correct provided STBY NAV is selected on RMP 1 & 2",
      ],
      answer: 2,
    },
    {
      id: 25,
      question: "CRS selection on the STBY/CRS window on RMP is possible",
      options: [
        "Once any NAV key is selected and manually setting the CRS with rotary knob",
        "After NAV key selection, and frequency set, the frequency is transferred to active window",
        "Only when the CRS setting is transferred to active windows CRS selection will be effective",
        "All the above are wrong",
      ],
      answer: 1,
    },
    {
      id: 26,
      question: "If RA No 1 fails what are the degradations",
      options: [
        "All the above",
        "RA flag on Capt. PFD",
        "FAULT light on GPWS SYS switch, CAt 3, GPWS IN OP SYS of STATUS page",
        "Loss of Radio Alt indication on Capt. PFD",
      ],
      answer: 2,
    },
    {
      id: 27,
      question: "If ATC mode selector is at AUTO",
      options: [
        "Both {B} & {C} are correct.",
        "Selected transponder operates only in flight",
        "Selected transponder operates in mode S on ground",
        "Selected transponder operates as soon as one engine is running.",
      ],
      answer: 0,
    },
    {
      id: 28,
      question: "On ATC Control Panel, the ATC FAIL light comes on if:",
      options: ["Selected Transponder fails", "Both Transponder fail"],
      answer: 0,
    },
    {
      id: 29,
      question:
        "The aircraft has two ATC transponders which are controlled by a dual control box on the overhead panel",
      options: ["False", "True"],
      answer: 0,
    },
    {
      id: 30,
      question: "With ATC transponder switch selected to 'ON' the transponder operates when",
      options: [
        "Aircraft is in flight or on ground",
        "Aircraft is in flight, not on ground",
        "Aircraft is on ground, not in flight",
        "Aircraft is on ground and ALT reporting switch is ON",
      ],
      answer: 0,
    },
    {
      id: 31,
      question:
        "The flight crew presses {…???..} button to send the aircraft identification signal",
      options: ["IDENT sw", "Mode selector On", "ALT RPTG to on"],
      answer: 0,
    },
    {
      id: 32,
      question: "Weather radar can be displayed in which of the modes on the ND?",
      options: [
        "All modes except PLAN.",
        "ARC and ROSE NAV modes only",
        "ROSE VOR and ROSE ILS modes",
        "Only in Plan Mode",
      ],
      answer: 0,
    },
    {
      id: 33,
      question: "The turbulence function on Wx Radar is available",
      options: ["Upto 40 nm", "Upto 160 nm", "Upto 80 nm", "Upto 320 nm"],
      answer: 0,
    },
    {
      id: 34,
      question: "If GAIN Knob is out of CAL position, which function of the radar is lost?",
      options: [
        "Path Attenuation Compensation",
        "Turbulence detection",
        "Ground Clutter Suppression",
        "Predictive Wind shear system",
      ],
      answer: 0,
    },
    {
      id: 35,
      question:
        "Is PAC function available when Mode selector is at TURB position on Wx Radar panel?",
      options: ["No", "Yes"],
      answer: 0,
    },
    {
      id: 36,
      question:
        "Can PAC Alert be indicated for cells in the range of 100-130 NM from a/c?",
      options: ["No", "Yes"],
      answer: 0,
    },
    {
      id: 37,
      question:
        "What should be the position of Mode selector on Wx Radar panel to receive PAC Alerts?",
      options: [
        "Both {B} and {C} are correct",
        "At Wx",
        "At Wx + T",
        "At any position of the selector",
      ],
      answer: 0,
    },
    {
      id: 38,
      question: "How is the predictive windshear system detecting windshear?",
      options: [
        "By analysing precipitation that the weather radar detects",
        "By detecting mountain wave and other clear air windshear encounters",
        "Both of the above answers are correct",
      ],
      answer: 0,
    },
    {
      id: 39,
      question: "The weather radars have a Predictive Windshear System (PWS) that operates when",
      options: [
        "The PWS switch is in the AUTO position (Even if the weather radar is OFF), and",
        "The aircraft is below 2 300 ft AGL, and",
        "The ATC is switched to the ON, or AUTO and",
        "Either engine is running",
        "all are correct",
      ],
      answer: 4,
    },
    {
      id: 40,
      question: "Select the correct statements about the Predictive Windshear System (PWS):",
      options: [
        "All are correct",
        "The system scans the airspace, within a range of 5 nm ahead of the aircraft, for windshear",
        "Below 1 500 ft, when the system detects windshear, depending on the range selected on the ND, a warning, caution, or advisory message appears on the ND",
        "Predictive windshear warnings and cautions are associated with an aural warning",
      ],
      answer: 0,
    },
    {
      id: 41,
      question: "Select the correct statements about the Predictive Windshear System (PWS)",
      options: [
        "All are correct",
        "The system scans the airspace, within a range of 5 nm ahead of the aircraft, for windshear",
        "Below 1 500 ft, when the system detects windshear, depending on the range selected on the ND, a warning, caution, or advisory message appears on the ND",
        "Predictive windshear warnings and cautions are associated with an aural warning",
      ],
      answer: 0,
    },
    {
      id: 42,
      question: "Select the correct statements about the Predictive Windshear System (PWS)",
      options: [
        "All are correct",
        "During the takeoff roll, up to 100 kt, both warnings and cautions are available within a range of 3 nm",
        "At takeoff, alerts are inhibited above 100 kt and up to 50 ft",
        "During landing, alerts are inhibited below 50 ft",
      ],
      answer: 0,
    },
    {
      id: 43,
      question: "What happens to PWS if ATC selector is at STBY?",
      options: [
        "Predictive wind shear function is not available",
        "PWS is available as ATC has nothing to do with it",
      ],
      answer: 0,
    },
    {
      id: 44,
      question:
        "Which statement is correct regarding the Predictive Windshear system aural alerts?",
      options: [
        "They have priority over TCAS, GPWS and other FWC aural alerts",
        "They are inhibited by windshear detected by FAC and stall warning aural messages",
        "They have priority over windshear detected by FAC and stall warning aural messages",
        "A & B are correct",
      ],
      answer: 3,
    },
    {
      id: 45,
      question:
        "What will be displayed on the ND when the weather radar is ON, and the TERR ON ND switch is also ON?",
      options: [
        "Terrain information will be displayed on the ND",
        "Weather Radar information will be displayed on the ND",
        "Both weather and terrain information will be superimposed on the ND",
      ],
      answer: 0,
    },
    {
      id: 46,
      question: "PWS Warning during Approach",
      options: [
        "Aural Warning of «GO AROUND WINDSHEAR AHEAD» + W/S AHEAD (red) on PFD + Windshear icon on ND",
        "Aural Warning of «WINDSHEAR AHEAD» (twice) + W/S AHEAD (red) on PFD + Windshear icon on ND",
        "Aural Warning of «MONITOR RADAR DISPLAY» + W/S AHEAD (red) on PFD + Windshear icon on ND",
        "No warning",
      ],
      answer: 0,
    },
    {
      id: 47,
      question: "PWS Warning during Take-off",
      options: [
        "Aural Warning of «WINDSHEAR AHEAD» (twice) + W/S AHEAD (red) on PFD + Windshear icon on ND",
        "Aural Warning of «GO AROUND WINDSHEAR AHEAD» + W/S AHEAD (red) on PFD + Windshear icon on ND",
        "Aural Warning of «MONITOR RADAR DISPLAY» + W/S AHEAD (red) on PFD + Windshear icon on ND",
        "No warning",
      ],
      answer: 0,
    },
    {
      id: 48,
      question: "Select the correct statements",
      options: [
        "A green \"PRED W/S OFF\" memo appears on E/WD, when PWS toggle switch is left to OFF on the weather radar panel in taxi-out",
        "It turns amber when the T.O. CONFIG p/b is pressed before T/O",
        "However in flight it appears amber if no PWS",
        "All are correct",
      ],
      answer: 3,
    },
    {
      id: 49,
      question: "The GPWS uses inputs from",
      options: [
        "The Radio Altimeter, the ADIRS 1, ILS 1 receiver, LGCIU 1 for the landing gear position and SFCC1 for the flap position",
        "The Radio Altimeter, the ADIRS 1, LGCIU 1 for the landing gear position and SFCC1 for the flap position",
        "The Radio Altimeter, ILS 1 receiver, LGCIU 1 for the landing gear position and SFCC1 for the flap position",
        "The Radio Altimeter, ILS 1 receiver",
      ],
      answer: 0,
    },
    {
      id: 50,
      question:
        "The Ground Proximity Warning System (GPWS) is a system working according to a height span ranging from",
      options: ["10 ft to 2 500 ft", "30 ft to 5 000 ft", "50 ft to 2 500 ft", "The ground to 1 000 ft"],
      answer: 0,
    },
    {
      id: 51,
      question: "GPWS Mode One gives warning of",
      options: [
        "Excessive terrain closure rate",
        "Unsafe terrain clearance when not in the landing configuration",
        "Excessive descent rate",
        "Height loss after T.O and Go Around",
      ],
      answer: 2,
    },
    {
      id: 52,
      question: "GPWS alerts for Mode 1 are",
      options: [
        "Both are correct",
        "A repeated \"SINK RATE\" aural alert and the GPWS light on when a/c in first boundary",
        "Penetration of the second boundary generates a repetitive \"PULL UP\" aural alert and causes both PULL UP lights to come on",
      ],
      answer: 0,
    },
    {
      id: 53,
      question: "The Ground Proximity Warning Systems (GWPS) Mode 2 is activated when",
      options: [
        "When the aircraft is significantly below the ILS glide path",
        "The aircraft is flying into rising terrain",
        "The barometric descent rate is excessive with respect to the aircraft height above the terrain",
        "An excessive height loss is experienced after take-off or during go-around",
      ],
      answer: 1,
    },
    {
      id: 54,
      question:
        "What is the GPWS Mode 3 audio alerts? { The GPWS generates the following sound signal or signals when the aircraft is sinking after a take-off or a go-around}",
      options: [
        "Aural alert of 'SINK RATE' and PULL UP'",
        "Aural alert of 'DON'T SINK, DON'T SINK' followed by 'PULL UP' if the sink rate exceeds a certain value",
        "Aural alert of 'DON'T SINK, DON'T SINK' continuously.",
        "Aural alert of 'DON'T SINK, DON'T SINK' followed immediately by 'PULL UP'",
      ],
      answer: 2,
    },
    {
      id: 55,
      question: "The Ground Proximity Warning Systems (GPWS) Mode 4 is activated when",
      options: [
        "When the aircraft is significantly below the ils glidepath.",
        "The aircraft is flying into rising terrain",
        "An excessive height loss is experienced after take-off or during go-around",
        "An unsafe terrain clearance situation is experienced, with the aircraft not in the landing configuration",
      ],
      answer: 3,
    },
    {
      id: 56,
      question: "The Ground Proximity Warning Systems (GPWS) Mode 5 is activated when",
      options: [
        "The aircraft is flying into rising terrain.",
        "The aircraft is significantly below the ILS glide path",
        "An unsafe terrain clearance situation is experienced, with the aircraft not in the landing configuration",
        "An excessive height loss is experienced after take-off or during go-around",
      ],
      answer: 1,
    },
    {
      id: 57,
      question:
        "If an aircraft is flying (with flaps and landing gear retracted) in proximity to terrain and its GPWS (Ground Proximity Warning System) get activated, because it is detecting that the aeroplane has an excessive rate of descent, the system provides the following aural warning signals",
      options: [
        "... DON'T SINK, DON'T SINK ..",
        "... TERRAIN, TERRAIN ... followed by ... PULL UP ...",
        "....SINK RATE, SINK RATE ... followed by ... PULL UP ...",
        "... TOO LOW, TERRAIN ... (twice) followed by ... TOO LOW GEAR ... (twice).",
      ],
      answer: 2,
    },
    {
      id: 58,
      question:
        "\"GLIDE SLOPE\" aural alert and both GPWS lights can be cancelled when Mode 5 is activated?",
      options: [
        "Yes, but only GPWS lights can be cancelled by pressing any one of the GPWS lights.",
        "No. you can not",
        "Yes, but only aural warnings are cancelled by pressing any one of the GPWS lights",
        "Yes, by pressing any one of the GPWS lights both aural and visual warnings are cancelled temporarily",
      ],
      answer: 3,
    },
    {
      id: 59,
      question:
        "On GPWS control panel, LDG FLAP 3 switch is selected ON. What are the significances ?",
      options: [
        "GPWS warnings for \"Flaps not in Landing Configuration \" are triggered {Mode 4}only if flaps are selected to less than 3 for landing.",
        "GPWS warning are triggered if landing is made with flaps 3",
        "As in (b) and on LDG memo, FLAP… CONFIG 3 will be displayed",
        "As in (a) and on LDG memo, FLAP…. CONFIG 3 will be displayed",
      ],
      answer: 3,
    },
    {
      id: 60,
      question:
        "On GPWS control panel, \"LDG FLAP 3 ON\" is selected, What will be the last line on LDG memo?",
      options: [
        "FLAPS CONF 3",
        "GPWS FLAP 3",
        "FLAP FULL or CONFIG 3",
        "FLAP CONFIG 2",
      ],
      answer: 0,
    },
    {
      id: 61,
      question:
        "With the failure in ILS1, which of the basic modes of GPWS are lost / inhibited?",
      options: ["Mode 2", "Mode 1", "Mode 5", "Mode 4"],
      answer: 2,
    },
    {
      id: 62,
      question:
        "Which of the GPWS modes are inhibited when predictive GPWS functions are operative?",
      options: ["Mode 1", "Mode 3", "Mode 2", "Mode 5"],
      answer: 2,
    },
    {
      id: 63,
      question: "In the PREDICTIVE GPWS FUNCTIONS The GPWS system",
      options: [
        "Compares the current aircraft position to the terrain {and airport} from the database.",
        "Displays the terrain along the projected flight path ahead of the aircraft from the database",
        "Computes a caution and a warning envelope ahead of the aircraft",
        "This includes the determination of the climb prediction envelope for terrain avoidance, using the modelized climb capability of the aircraft",
        "All are correct",
      ],
      answer: 4,
    },
    {
      id: 64,
      question: "In case of GPWS / EGPWS ALERTS",
      options: [
        "Apply the procedure immediately during the night or IMC Conditions",
        "During daylight VMC conditions, these alerts may be considered cautionary if terrains and obstacles clearly in sight",
        "Both of the above are correct",
      ],
      answer: 2,
    },
    {
      id: 65,
      question:
        "TCAS traffic is displayed on the navigation display in all ROSE modes and ARC mode. Only the 8 most threatening intruders are displayed",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 66,
      question: "In which ND modes are TCAS targets displayed?",
      options: [
        "All ROSE modes and ARC mode",
        "All modes",
        "Only in PLAN Mode",
      ],
      answer: 0,
    },
    {
      id: 67,
      question: "TAU is different for RA at different altitudes",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 68,
      question: "Select the correct statements",
      options: [
        "Proximate intruder is indicated by a white filled diamond",
        "TA intruder are indicated by an amber circle and associated with the TRAFFIC-TRAFFIC aural message",
        "RA intruder is indicated by a red square and associated with vertical orders displayed on the PFD and aural messages",
        "All are correct",
      ],
      answer: 3,
    },
  ],
};
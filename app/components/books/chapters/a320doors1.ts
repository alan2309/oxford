import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - DOORS/OXYGEN",
  questions: [
    {
      id: 1,
      question:
        "How is it determined that the cockpit sliding window is closed and locked?",
      options: [
        "The pin is engaged.",
        "The red ring below the release button should not be in view.",
        "The locking pin was placed in the forward position when the window was closed.",
        "The red ring below the release button should be in view.",
      ],
      answer: 3,
    },
    {
      id: 2,
      question:
        "Opening a passenger door from the outside disarms the door and the escape slide.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 3,
      question:
        "What does illumination of the red cabin pressure light represent on the main cabin door?",
      options: [
        "This indicates that the evacuation slide is armed.",
        "This indicates that the aircraft cabin is still pressurized and the cabin door should not be opened.",
        "Both are correct",
      ],
      answer: 1,
    },
    {
      id: 4,
      question: "The cargo doors are powered by:",
      options: [
        "The blue electric pump.",
        "The yellow hydraulic system before engine start and the green hydraulic system after engine start.",
        "The yellow hydraulic system.",
        "The blue hydraulic system before engine start and the green hydraulic system after engine start.",
      ],
      answer: 2,
    },
    {
      id: 5,
      question: "The forward and aft cargo doors can be opened from:",
      options: ["The inside and the outside.", "The outside only"],
      answer: 1,
    },
    {
      id: 6,
      question:
        "On the ECAM DOOR/OXY page, the SLIDE indication appears _____ when the slide is not disarmed.",
      options: ["White.", "Amber.", "Green.", "Red."],
      answer: 0,
    },
    {
      id: 7,
      question:
        "Each passenger door has one CABIN PRESSURE warning light that:",
      options: [
        "Warns of residual pressure in the cabin.",
        "Shows a possible unlocked door",
        "Both are correct.",
      ],
      answer: 0,
    },
    {
      id: 8,
      question:
        "Where does the Door and Slide Control System (DSCS) generate warnings?",
      options: ["On ECAM.", "On the doors.", "Both are correct."],
      answer: 2,
    },
    {
      id: 9,
      question: "What happens to the cockpit door with electrical power failure?",
      options: [
        "It operates normally on HOT BAT bus.",
        "It automatically unlocks.",
        "It automatically locks from outside but stays unlock from inside.",
      ],
      answer: 1,
    },
    {
      id: 10,
      question:
        "The cockpit windows can be opened both from inside and outside.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 11,
      question:
        "What does illumination of the white slide armed light represent on the main cabin door?",
      options: [
        "This indicates that the slide has properly inflated and is safe for use.",
        "This indicates that the slide is armed and the slide will inflate if the door is opened from inside the aircraft.",
        "This indicates that the main cabin door has not been properly closed.",
        "This indicates that the main cabin door has not been properly closed but the slide is properly armed.",
      ],
      answer: 1,
    },
    {
      id: 12,
      question:
        "Can the flight compartment sliding windows be used as emergency exits?",
      options: [
        "Yes, in the cockpit coat closet is a rope ladder that can be used in such an event.",
        "Yes, there are escape ropes mounted above each window behind an access panel.",
        "No. They are not approved emergency exits.",
        "No, they are too small.",
      ],
      answer: 1,
    },
    {
      id: 13,
      question:
        "When the electric pump is operating the FWD or AFT cargo doors, the only other yellow system devices that can operate are braking and engine 2 reverse.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 14,
      question:
        "When the slide arming lever, on the emergency opening system, is in the ARMED position, where is the slide connected?",
      options: [
        "To the brackets on the underside of the fuselage.",
        "To the brackets above the door.",
        "To the floor brackets on both sides of the door.",
        "All of the above",
      ],
      answer: 2,
    },
    {
      id: 15,
      question:
        "When the Cargo door switch for the yellow hydraulic pump is in use, the flight controls are:",
      options: [
        "Fully operational",
        "Inhibited",
        "Hydraulically locked by pressure from the electric pump",
        "Only operated by the green system.",
      ],
      answer: 1,
    },
    {
      id: 16,
      question:
        "When opened in an emergency, the passenger entry doors:",
      options: [
        "Pneumatically assisted into the open position",
        "Will need two cabin crew to push them open",
        "Are assisted to the open position by slide inflation",
        "Are electrically assisted into the open position.",
      ],
      answer: 0,
    },
    {
      id: 17,
      question:
        "If door handle is lifted and the white indicator illuminates, what does this mean?",
      options: [
        "The escape slide is armed and if you go on lifting the handle, door opens and slide will deploy.",
        "Pneumatic assistance of the door has failed",
        "The escape slide is in disarmed configuration",
        "The cabin is still pressurized",
      ],
      answer: 0,
    },
    {
      id: 18,
      question:
        "How is it determined that the cockpit sliding window is closed and locked?",
      options: [
        "The pin is engaged.",
        "The red ring below the release button should not be in view.",
        "The locking pin was placed in the forward position when the window was closed.",
        "The red ring below the release button should be in view.",
      ],
      answer: 3,
    },
    {
      id: 19,
      question:
        "Opening a passenger door from the outside disarms the door and the escape slide.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 20,
      question:
        "What does illumination of the red cabin pressure light represent on the main cabin door?",
      options: [
        "This indicates that the evacuation slide is armed.",
        "This indicates that the aircraft cabin is still pressurized and the cabin door should not be opened.",
        "Both are correct",
      ],
      answer: 1,
    },
    {
      id: 21,
      question: "The cargo doors are powered by:",
      options: [
        "The blue electric pump.",
        "The yellow hydraulic system before engine start and the green hydraulic system after engine start.",
        "The yellow hydraulic system.",
        "The blue hydraulic system before engine start and the green hydraulic system after engine start.",
      ],
      answer: 2,
    },
    {
      id: 22,
      question: "The forward and aft cargo doors can be opened from:",
      options: ["The inside and the outside.", "The outside only"],
      answer: 1,
    },
    {
      id: 23,
      question:
        "On the ECAM DOOR/OXY page, the SLIDE indication appears _____ when the slide is not disarmed.",
      options: ["White.", "Amber.", "Green.", "Red."],
      answer: 0,
    },
    {
      id: 24,
      question:
        "Each passenger door has one CABIN PRESSURE warning light that:",
      options: [
        "Warns of residual pressure in the cabin.",
        "Shows a possible unlocked door",
        "Both are correct.",
      ],
      answer: 0,
    },
    {
      id: 25,
      question:
        "Where does the Door and Slide Control System (DSCS) generate warnings?",
      options: ["On ECAM.", "On the doors.", "Both are correct."],
      answer: 2,
    },
    {
      id: 26,
      question: "What happens to the cockpit door with electrical power failure?",
      options: [
        "It operates normally on HOT BAT bus.",
        "It automatically unlocks.",
        "It automatically locks from outside but stays unlock from inside.",
      ],
      answer: 1,
    },
    {
      id: 27,
      question:
        "The cockpit windows can be opened both from inside and outside.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 28,
      question:
        "What does illumination of the white slide armed light represent on the main cabin door?",
      options: [
        "This indicates that the slide has properly inflated and is safe for use.",
        "This indicates that the slide is armed and the slide will inflate if the door is opened from inside the aircraft.",
        "This indicates that the main cabin door has not been properly closed.",
        "This indicates that the main cabin door has not been properly closed but the slide is properly armed.",
      ],
      answer: 1,
    },
    {
      id: 29,
      question:
        "Can the flight compartment sliding windows be used as emergency exits?",
      options: [
        "Yes, in the cockpit coat closet is a rope ladder that can be used in such an event.",
        "Yes, there are escape ropes mounted above each window behind an access panel.",
        "No. They are not approved emergency exits.",
        "No, they are too small.",
      ],
      answer: 1,
    },
    {
      id: 30,
      question:
        "When the electric pump is operating the FWD or AFT cargo doors, the only other yellow system devices that can operate are braking and engine 2 reverse.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 31,
      question:
        "When the slide arming lever, on the emergency opening system, is in the ARMED position, where is the slide connected?",
      options: [
        "To the brackets on the underside of the fuselage.",
        "To the brackets above the door.",
        "To the floor brackets on both sides of the door.",
        "All of the above",
      ],
      answer: 2,
    },
    {
      id: 32,
      question:
        "When the Cargo door switch for the yellow hydraulic pump is in use, the flight controls are:",
      options: [
        "Fully operational",
        "Inhibited",
        "Hydraulically locked by pressure from the electric pump",
        "Only operated by the green system.",
      ],
      answer: 1,
    },
    {
      id: 33,
      question:
        "When opened in an emergency, the passenger entry doors:",
      options: [
        "Pneumatically assisted into the open position",
        "Will need two cabin crew to push them open",
        "Are assisted to the open position by slide inflation",
        "Are electrically assisted into the open position.",
      ],
      answer: 0,
    },
    {
      id: 34,
      question:
        "If door handle is lifted and the white indicator illuminates, what does this mean?",
      options: [
        "The escape slide is armed and if you go on lifting the handle, door opens and slide will deploy.",
        "Pneumatic assistance of the door has failed",
        "The escape slide is in disarmed configuration",
        "The cabin is still pressurized",
      ],
      answer: 0,
    },
    {
      id: 35,
      question:
        "On which ECAM page could the flight crew check the exact pressure of the oxygen cylinder?",
      options: [
        "The PRESS page.",
        "The DOORS page.",
        "The COND page.",
        "The STATUS page.",
      ],
      answer: 1,
    },
    {
      id: 36,
      question:
        "What is indicated by a missing green thermal plug during an exterior preflight?",
      options: [
        "An oxygen system overpressure or thermal discharge.",
        "This is normal indication, the green thermal plug only appears if the oxygen cylinder is low.",
        "The crew oxygen bottle is empty.",
        "An external fire discharge has been activated.",
      ],
      answer: 0,
    },
    {
      id: 37,
      question:
        "What is the main difference between the crew and the passenger oxygen system?",
      options: [
        "There is no difference: both are served by oxygen cylinders.",
        "Crew is supplied from an oxygen cylinder; passengers are supplied by chemical oxygen generators .",
        "Both the crew and passengers are supplied with oxygen from chemical oxygen generators.",
        "The crew has an oxygen bottle for an emergency back-up supply.",
      ],
      answer: 1,
    },
    {
      id: 38,
      question: "What is the purpose of the CREW SUPPLY push button?",
      options: [
        "When selected to ON, it supplies oxygen to the Captain & F/O only (jumpseats are not supplied)",
        "When selected to ON, it allows the flow of low pressure oxygen to the crew's masks.",
        "In case of low cylinder pressure it allows the crew to tap into the passenger oxygen system.",
      ],
      answer: 1,
    },
    {
      id: 39,
      question:
        "What happens when the mask is used with the selection at 100% position?",
      options: [
        "Mask is supplied with diluted oxygen on demand.",
        "Mask is supplied with undiluted oxygen on demand.",
        "Mask is supplied with undiluted oxygen continuous flow.",
        "Mask is supplied with diluted oxygen on demand.",
      ],
      answer: 1,
    },
    {
      id: 40,
      question:
        "At approximately what cabin altitude should the passenger oxygen masks drop?",
      options: [
        "10,000 feet (+100, - 500 ft)",
        "12,500 feet (+ or - 500 ft)",
        "14,000 feet (+0, - 500 ft)",
        "15,000 feet.",
      ],
      answer: 2,
    },
    {
      id: 41,
      question: "What does an amber OXY on the ECAM Doors mean?",
      options: [
        "The crew supply switch is turned off and/or oxygen pressure is less than 400 psi",
        "The crew supply switch is turned off",
        "Oxygen pressure is less than 650 psi.",
        "Oxygen pressure is less than 300 psi.",
      ],
      answer: 0,
    },
    {
      id: 42,
      question: "Illumination of the SYS ON light is an indication that:",
      options: [
        "The crew must depress the MASK MAN ON pb in order to deploy the masks.",
        "Electrical power has been sent to deploy the masks, either manually or automatically.",
        "The crew oxygen cylinder is empty.",
        "All of the passenger masks have deployed.",
      ],
      answer: 1,
    },
    {
      id: 43,
      question:
        "What will depressing the guarded MASK MAN ON pb accomplish?",
      options: [
        "A signal is sent to the chemical oxygen generators to start the flow of oxygen to the masks.",
        "It manually sends a signal to open the oxygen mask doors.",
        "Both are correct.",
      ],
      answer: 1,
    },
    {
      id: 44,
      question: "When does passenger oxygen flow start?",
      options: [
        "When the mask is pulled toward the seat.",
        "When the oxygen doors open.",
        "When the oxygen button is pushed.",
        "When cabin altitude exceeds 14,000 ft",
      ],
      answer: 0,
    },
    {
      id: 45,
      question:
        "After using a quick donning mask, the mask is stowed back but OXY ON flag is visible. Is it possible to have communication via boom MIC",
      options: [
        "No",
        "Yes",
        "Yes, only if INT / RED switch is in INT (only interphone is possible )",
        "Yes, only if INT / RED switch is held in RAD (only RT is possible )",
      ],
      answer: 0,
    },
    {
      id: 46,
      question:
        "What are the possible flows of oxygen through the individual quick doning full face mask in the cockpit ?",
      options: [
        "Diluted Oxygen on demand, 100% Oxygen on demand or continuously.",
        "Diluted Oxygen on demand or continuously, 100% Oxygen on demand only",
        "Diluted Oxygen on demand or continuously, 100% continuously",
        "Only two flows 100% Oxygen continuously, Diluted Oxygen on demand",
      ],
      answer: 0,
    },
    {
      id: 47,
      question:
        "Which is the suitable statement for Pax fixed Oxygen system",
      options: [
        "Pax Oxygen system once activated (Automatically or Manually) cannot be reset",
        "Pax Oxygen can be activated but only reset from cockpit",
        "Pax Oxygen can be activated and reset from cockpit",
        "Pax Oxygen system activates automatically in case of decompression but can be reset only from cockpit",
      ],
      answer: 0,
    },
    {
      id: 48,
      question:
        "On which ECAM page will you check the exact pressure of the oxygen cylinder?",
      options: [
        "The DOORS / OXY page",
        "The PRESS page",
        "The COND page",
        "The STATUS page",
      ],
      answer: 0,
    },
    {
      id: 49,
      question:
        "What is indicated by a missing green thermal plug in nose gear area during an exterior preflight?",
      options: [
        "An oxygen system overpressure or thermal discharge",
        "This is normal indication, the green thermal plug only appears if the oxygen cylinder is low",
        "The crew oxygen bottle is empty",
        "An external fire discharge has been activated",
      ],
      answer: 0,
    },
    {
      id: 50,
      question:
        "Approximately how long are the passenger oxygen generators able to produce oxygen?",
      options: ["15 minutes", "20 minutes", "25 minutes", "30 minutes"],
      answer: 0,
    },
    {
      id: 51,
      question: "What is the purpose of the CREW SUPPLY push button?",
      options: [
        "When selected to ON, it allows the flow of low pressure oxygen to the crew's masks",
        "When selected to ON, it supplies oxygen to the Captain & F/O only (jumpseats are not supplied)",
        "In case of low cylinder pressure it allows the crew to tap into the passenger oxygen system",
      ],
      answer: 0,
    },
    {
      id: 52,
      question:
        "What happens when the mask is used with the selection at 100% position?",
      options: [
        "Mask is supplied with undiluted oxygen on demand",
        "Mask is supplied with diluted oxygen on demand",
        "Mask is supplied with undiluted oxygen continuous flow",
        "Mask is supplied with diluted oxygen on demand.",
      ],
      answer: 0,
    },
    {
      id: 53,
      question:
        "A Thermal discharge of the cockpit crew fixed Oxygen bottle is indicated by",
      options: [
        "Thermal discharge message on ECAM",
        "Green Blow out disc missing",
        "Red blow out disc missing",
        "No indication of Thermal Discharge is provided",
      ],
      answer: 1,
    },
    {
      id: 54,
      question:
        "How many emergency exits are there in the cabin and what is escape device provided for each ?",
      options: [
        "4 main doors each with a single lane slide / raft; 4 over wing exits with a double lane slide for 2 over wing exits on the same side.",
        "4 main doors each with a single lane slide; 4 over wing exits with a double lane slide / raft for 2 over wing exits on the same side.",
        "4 main doors each with a single lane slide/ raft ; 4 over wing exits with each with a single lane slide / raft",
        "4 main doors each with a single lane slide / raft; 4 over wing exits with a single lane slide for 2 exits on the same wing.",
      ],
      answer: 0,
    },
    {
      id: 55,
      question: "What does an amber OXY on the ECAM Doors mean?",
      options: [
        "The crew supply switch is turned off and/or oxygen pressure is less than 400 psi",
        "The crew supply switch is turned off",
        "Oxygen pressure is less than 650 psi",
        "oxygen pressure is less than 300 psi",
      ],
      answer: 0,
    },
    {
      id: 56,
      question:
        "How many emergency exits are there in the cockpit and what is the escape device provided for each.",
      options: [
        "Two windows with one rope",
        "Two windows with two nylon knotted ropes",
        "Three windows with two ropes",
        "Only one window with two ropes",
      ],
      answer: 1,
    },
    {
      id: 57,
      question: "How to know from cockpit that a slide is armed ?",
      options: [
        "Call Cabin Attendant and confirm only from the cabin attendant.",
        "On DOOR Page SLIDE appears white near exit symbol",
        "On DOOR Page the exit symbol changes to GREEN",
        "On DOOR Page the exit indication remains amber when slide is not armed",
      ],
      answer: 1,
    },
    {
      id: 58,
      question: "What happens when you press the guarded MASK MAN ON p/b?",
      options: [
        "It manually sends a signal to open the oxygen mask doors",
        "A signal is sent to the chemical oxygen generators to start the flow of oxygen to the masks",
        "Both are correct",
      ],
      answer: 0,
    },
    {
      id: 59,
      question: "Red light on the door.",
      options: [
        "Illuminates if the door handle is moved towards open when door is armed.",
        "Flashes if the door handle is moved towards open when door is armed",
        "Flashes if the door is opened with engine running",
        "Flashes if the door is disarmed cabin pressure is 2.5 hpa higher than outside pressure and one or both engine shut down.",
      ],
      answer: 3,
    },
    {
      id: 60,
      question:
        "When will REGUL LO PR INDICATION appear on the DOOR sd page?",
      options: ["LP <100 psi", "LP<40 psi", "LP<50 psi", "LP<30 psi"],
      answer: 2,
    },
    {
      id: 61,
      question:
        "The maximum wind for FWD and AFT cargo door operation is ?",
      options: [
        "60 kts",
        "55 kts",
        "35 kts",
        "40 kt (or 50 kt, if the aircraft nose is into the wind, or if the FWD and AFT cargo doors are on the leeward side)",
      ],
      answer: 3,
    },
    {
      id: 62,
      question:
        "The FWD and AFT cargo doors must be closed before the wind speed exceeds ?",
      options: ["100 kts", "50 kts", "40 kts", "65 kts"],
      answer: 3,
    },
  ],
};
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - AUTOFLIGHT - 01",
  questions: [
    {
      id: 1,
      question:
        "The Flight Management part of the FMGC includes the following elements:",
      options: [
        "Navigation, flight planning and A/THR commands.",
        "Performance optimization, A/THR and AP commands",
        "Navigation, flight planning, performance optimization and flight predictions",
        "AP and FD commands and flight envelope computation.",
      ],
      answer: 2,
    },
    {
      id: 2,
      question: "How can the present position of the aircraft be initialized?",
      options: [
        "Present position can be entered through the ADIRS CDU.",
        "Present position can be entered on the INIT page of the MCDU.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 3,
      question: "What are the correct positions for the PFD and ND?",
      options: [
        "The PFD should be outboard and the ND should be inboard.",
        "The PFD should be inboard and the ND should be outboard.",
        "The PFD should be to the left of the ND for both seat positions.",
        "The PFD should be inboard and the ND should be inboard.",
      ],
      answer: 0,
    },
    {
      id: 4,
      question:
        "What information is supplied by the IR's and displayed on the PFD?",
      options: [
        "Heading, attitude, and vertical speed.",
        "Heading, altitude, and vertical speed",
        "Airspeed, altitude, and backup vertical speed.",
        "Heading, attitude, and altitude.",
      ],
      answer: 0,
    },
    {
      id: 5,
      question: "How long does a normal IR alignment take?",
      options: [
        "Approximately 3 minutes.",
        "Approximately 6 minutes.",
        "Approximately 10 minutes.",
        "Approximately 13 minutes.",
      ],
      answer: 2,
    },
    {
      id: 6,
      question: "The IR ALIGN light is extinguished. What does this mean?",
      options: [
        "Alignment has been completed.",
        "Air data output has been disconnected.",
        "The respective IR is operating normally.",
      ],
      answer: 0,
    },
    {
      id: 7,
      question: "An amber flashing IR FAULT light indicates that:",
      options: [
        "Present position needs to be reentered.",
        "Attitude and heading information may be recovered in ATT mode.",
        "A complete failure of the respective IR has occurred.",
      ],
      answer: 1,
    },
    {
      id: 8,
      question: "What action should be taken if IR #2 is lost:",
      options: [
        "Move the EIS DMC rotary selector knob to F/O 3.",
        "Move the ATT HDG rotary selector knob to CAPT 3.",
        "Move the ATT HDG rotary selector knob to F/O 3.",
        "Move the ATT HDG rotary selector knob to F/O 1.",
      ],
      answer: 2,
    },
    {
      id: 9,
      question: "A/THR in white means that A/THR is:",
      options: ["Disconnected.", "Armed.", "Active"],
      answer: 2,
    },
    {
      id: 10,
      question: "The white IR ALIGN light is flashing. What does this mean?",
      options: [
        "No present position has been entered and ten minutes has elapsed since the IR was selected ON.",
        "No present position has been entered and ten minutes has elapsed since the IR was selected ON. An alignment fault may exist.",
        "Attitude and heading information have been lost. An alignment fault may exist.",
      ],
      answer: 1,
    },
    {
      id: 11,
      question:
        "What message is displayed if the database effective date does not match the clock date?",
      options: [
        "Check Data Base Cycle.",
        "Check Data Base Date.",
        "Check Effective Date.",
        "Check the changeover date.",
      ],
      answer: 0,
    },
    {
      id: 12,
      question: "Placing one of the ADR push buttons OFF will accomplish what?",
      options: [
        "The OFF light will illuminate and air data output will disconnect.",
        "The respective ADIRU will become deenergized.",
        "Both AD and IR information will be disconnected.",
        "All of the above.",
      ],
      answer: 0,
    },
    {
      id: 13,
      question:
        "While in-flight, operating in Normal law, in the Alpha Prot range:",
      options: [
        "The flight controls revert to direct law.",
        "The flight controls remain in the load factor demand law.",
        "The sidestick controller and flight controls revert to the AOA mode, and side stick deflection is proportional to AOA.",
      ],
      answer: 2,
    },
    {
      id: 14,
      question: "What is the difference between -FD2 and 2FD- on the FMA?",
      options: [
        "1 inop, 2 engaged. 2 engaged, 1 off.",
        "1 off, 2 engaged. 2 engaged, 1 inop",
      ],
      answer: 1,
    },
    {
      id: 15,
      question: "What does the LOW ACCURACY message mean?",
      options: [
        "FMGC 1 & 2 position difference exceeds limits.",
        "FMGC position & actual radio position difference exceeds limits.",
        "FMCG position & IR position difference exceeds limits.",
      ],
      answer: 1,
    },
    {
      id: 16,
      question:
        "The thrust delivered by A/THR is already at MAX CLB thrust. Is it possible to obtain some additional thrust?",
      options: [
        "Yes, by setting a higher speed target.",
        "Yes, by moving the thrust levers forward from the CL detent.",
        "No, because the A/THR already delivers the maximum available thrust.",
      ],
      answer: 1,
    },
    {
      id: 17,
      question:
        "What information is supplied by the Air Data Modules (ADMs) and displayed on the PFD's?",
      options: [
        "Heading, attitude, and vertical speed.",
        "Airspeed, altitude, and backup vertical speed.",
        "Airspeed, vertical speed, and altitude.",
        "Airspeed, attitude, altitude, and vertical speed.",
      ],
      answer: 1,
    },
    {
      id: 18,
      question:
        "Can the autopilot be used for a single engine approach and autoland?",
      options: ["Yes.", "No."],
      answer: 0,
    },
    {
      id: 19,
      question: "During the takeoff phase:",
      options: [
        "SRS mode will provide guidance to maintain V2+10 kts (minimum) as a speed reference",
        "SRS mode is available up to 1500 ft.",
        "SRS mode will not engage if TOGA is selected.",
      ],
      answer: 0,
    },
    {
      id: 20,
      question: "If the IR mode rotary selector is selected OFF",
      options: [
        "AD and IR information will be disconnected.",
        "AD information will be disconnected.",
        "IR information will be disconnected.",
        "The ADIRU is not energized: AD and IR information is lost.",
      ],
      answer: 3,
    },
    {
      id: 21,
      question:
        "Which of the following statements is always true when operating in alternate law?",
      options: [
        "Extending the landing gear will place the aircraft in Direct law.",
        "Extending the landing gear will place the aircraft in Mechanical backup law.",
        "Extending the landing gear will place the aircraft in Mechanical backup law.",
      ],
      answer: 0,
    },
    {
      id: 22,
      question: "Which protection is not available below 100 feet AGL?",
      options: [
        "Pitch attitude.",
        "VLS.",
        "ALPHA SPD (alpha speed)",
        "Alpha floor.",
      ],
      answer: 3,
    },
    {
      id: 23,
      question: "What does amber SPEED BRAKES mean on lower ECAM?",
      options: [
        "Speed brakes have a fault.",
        "Speed brakes are extended and flap handle is not at 0.",
        "Speed brakes are extended and engines are not at idle.",
        "All of the above.",
      ],
      answer: 2,
    },
    {
      id: 24,
      question:
        "If LOW ACCURACY message is displayed, are there any approach restrictions?",
      options: [
        "No",
        "Yes, ILS approach only.",
        "Yes, both LNAV and VNAV approaches are forbidden.",
      ],
      answer: 2,
    },
    {
      id: 25,
      question: "The DDRMI provides the pilot with:",
      options: [
        "Bearing only for VOR 1.",
        "Bearing and DME information for VOR 1 and ADF 1.",
        "Bearing and DME information for VOR 2 and ADF 2.",
        "Both b & c (ADF 2 if installed)",
      ],
      answer: 3,
    },
    {
      id: 26,
      question: "The ON BAT light will illuminate amber:",
      options: [
        "When one or more IR's are operating on aircraft battery power.",
        "For a few seconds at the beginning of the alignment process.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 27,
      question: "If both ELACs fail, what controls the elevator and stabilizer?",
      options: [
        "FACs.",
        "SECs.",
        "Elevator and stabilizer revert to mechanical backup.",
        "Backup mode of ELAC's",
      ],
      answer: 1,
    },
    {
      id: 28,
      question:
        "Where is the information displayed by DMC #1 and DMC #2?",
      options: [
        "DMC #1 supplies data to PFD #2, ND #2 and LOWER ECAM. DMC #2 supplies data for PFD #1, ND #1, and UPPER ECAM.",
        "ADMC #1 supplies data to PFD #1, ND #1 and LOWER ECAM. DMC #2 supplies data for PFD #2, ND #2, and UPPER ECAM.",
        "DMC #1 supplies data to PFD #1, ND #1, and UPPER ECAM. DMC #2 supplies data for PFD #2, ND #2, and LOWER ECAM.",
        "DMC #1 supplies data to PFD #1, ND #1 and LOWER ECAM. DMC #2 supplies data for PFD #2, ND #2, and LOWER ECAM.",
      ],
      answer: 2,
    },
    {
      id: 29,
      question:
        "While in flight operating in Normal law, movement of the sidestick and subsequent return to neutral will command:",
      options: [
        "A load factor proportional to stick deflection, then maintain one G flight corrected for pitch attitude.",
        "Control surface movements proportional to stick deflection, then return the aircraft to straight and level flight.",
        "Control surface movements proportional to stick deflection, disconnect auto trim, and maintain its current attitude.",
      ],
      answer: 0,
    },
    {
      id: 30,
      question:
        "In normal law all protections are active, which of the following lists is the most complete list?",
      options: [
        "Protections, Load Factor, Pitch attitude, High AOA, and High speed.",
        "Protections, Load Factor, Pitch attitude, High AOA, Alpha floor, angle of bank, and High speed.",
        "Protections, Load Factor, Pitch attitude, High AOA, VLS, Alpha floor, and High speed.",
        "Protections, Load Factor and Pitch attitude.",
      ],
      answer: 1,
    },
    {
      id: 31,
      question:
        "When in alternate law, all protections except _______ protection will be lost.",
      options: ["Roll attitude.", "Pitch attitude.", "Bank angle.", "Load factor."],
      answer: 3,
    },
    {
      id: 32,
      question: "When does the sideslip indicator change to a blue Beta target?",
      options: [
        "Flaps configuration 1.",
        "Any EPR exceeds 1.25, and EPR's differ by more than 0.30",
        "Heading differs from track by 20 deg or more",
        "Flaps configuration 1, 2.",
      ],
      answer: 1,
    },
    {
      id: 33,
      question:
        "High and low speed stabilities may be available in alternate law, stabilities:",
      options: [
        "Will not allow the pilot to stall the aircraft.",
        "Prohibit steep bank angles.",
        "Prohibit steep climb angles and bank angles.",
        "Can be overridden by the pilot, and it is possible to exceed Vmo, Mmo and stall the aircraft.",
      ],
      answer: 3,
    },
    {
      id: 34,
      question: "What is the function of the FACs?",
      options: [
        "Rudder and Yaw damping inputs, Flight envelope and speed computations",
        "Rudder and Yaw damping inputs",
        "Rudder and Yaw damping inputs and windshear protection",
        "Rudder and Yaw damping inputs, Flight envelope and speed computations, and windshear protection",
      ],
      answer: 3,
    },
    {
      id: 35,
      question:
        "What causes a DU to display a black screen with a white diagonal line?",
      options: [
        "The circuit breaker for that particular DU has popped.",
        "DMC failure.",
        "No power.",
      ],
      answer: 1,
    },
    {
      id: 36,
      question: "Can the aircraft be controlled with a loss of all electrics?",
      options: ["Yes.", "No."],
      answer: 0,
    },
    {
      id: 37,
      question:
        "The ATT HDG and AIR DATA selectors on the switching panel in the NORM position indicate that:",
      options: [
        "ADIRU 1 is supplying information to PFD 1 and ND 2, and ADIRU 2 is supplying power to PFD 2 and ND 1.",
        "ADIRU 1 is supplying information to PFD 1, ND 1 and the DDRMI; ADIRU 2 is supplying power to PFD 2 and ND 2.",
      ],
      answer: 1,
    },
    {
      id: 38,
      question: "What action should be taken if ADR #1 is lost?",
      options: [
        "Nothing.",
        "Move the ATT HDG knob on the switching panel to CAPT 3.",
        "Move the AIR DATA knob on the switching panel to CAPT 3.",
      ],
      answer: 2,
    },
    {
      id: 39,
      question:
        "How many Air Data/Inertial Reference Units (ADIRU's) are installed?",
      options: ["One", "Two", "Three", "Four"],
      answer: 2,
    },
    {
      id: 40,
      question:
        "On an autoland approach, with both autopilots on, which FMGC is master?",
      options: ["FMGC 1", "FMGC 2", "Both"],
      answer: 0,
    },
    {
      id: 41,
      question:
        "After a single DMC failure, how could a crewmember recover the display units?",
      options: [
        "Once a DMC has failed the information is unrecoverable",
        "No action is needed as recovery is automatic.",
        "Rotate the EIS DMC switch on the switching panel to replace the failed DMC with DMC #3.",
      ],
      answer: 2,
    },
  ],
};
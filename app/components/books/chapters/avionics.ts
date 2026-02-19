import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Avionics",
    questions: [
        {
            "id": 1,
            "question": "Placing one of the ADR push buttons OFF will accomplish what?",
            "options": [
                "All of the above.",
                "The OFF light will illuminate and air data output will disconnect.",
                "The respective ADIRU will become deenergized.",
                "Both AD and IR information will be disconnected."
            ],
            "answer": 1
        },
        {
            "id": 2,
            "question": "If you depress the guarded NAV button, the MCDU RAD NAV pages are inhibited and the RMP controls navaid tuning.",
            "options": [
                "True.",
                "False."
            ],
            "answer": 0
        },
        {
            "id": 3,
            "question": "A/THR in white means that A/THR is:",
            "options": [
                "Disconnected.",
                "Active",
                "Armed."
            ],
            "answer": 1
        },
        {
            "id": 4,
            "question": "How can you get the mechanics attention when he is outside the aircraft?",
            "options": [
                "Hold the PA button",
                "Select the MECH transmission key on the ACP and hold the pushbutton for 2 seconds.",
                "Use the MECH pushbutton on the CALLS panel which sounds an external horn.",
                "Select the MECH transmission key on the ACP"
            ],
            "answer": 2
        },
        {
            "id": 5,
            "question": "The DDRMI provides the pilot with:",
            "options": [
                "Bearing only for VOR 1.",
                "Bearing and DME information for VOR 2 and ADF 2.",
                "Bearing and DME information for VOR 1 and ADF 1.",
                "Bearing only for VOR 1 and VOR 2."
            ],
            "answer": 3
        },
        {
            "id": 6,
            "question": "When the ON voice key on an Audio Control Panel is pushed in; ADF and VOR ident signals are inhibited.",
            "options": [
                "True",
                "False"
            ],
            "answer": 0
        },
        {
            "id": 7,
            "question": "The thrust delivered by A/THR is already at MAX CLB thrust. Is it possible to obtain some additional thrust?",
            "options": [
                "Yes, by setting a higher speed target.",
                "No, because the A/THR already delivers the maximum available thrust.",
                "Yes, by moving the thrust levers forward from the CL detent."
            ],
            "answer": 2
        },
        {
            "id": 8,
            "question": "In case of RMP 2 failure, VHF 2 is lost.",
            "options": [
                "True.",
                "False."
            ],
            "answer": 1
        },
        {
            "id": 9,
            "question": "If an RMP fails:",
            "options": [
                "All of the above",
                "The frequency displays disappear",
                "The green VHF or HF lights go out",
                "The selected receiver is no longer controlled by this RMP"
            ],
            "answer": 0
        },
        {
            "id": 10,
            "question": "What is the function of the Guarded EMER push button on the overhead panel?",
            "options": [
                "To alert all flight attendants of a pending urgent need to speak to them.",
                "To alert ATC of an in-flight emergency.",
                "To alert the aft flight attendants of a routine need to speak to them."
            ],
            "answer": 0
        },
        {
            "id": 11,
            "question": "On the ground, CVR is stopped automatically after the last engine shutdown.",
            "options": [
                "5 minutes.",
                "1 minute",
                "Immediately",
                "3 minutes"
            ],
            "answer": 0
        },
        {
            "id": 12,
            "question": "If the IR mode rotary selector is selected OFF:",
            "options": [
                "AD information will be disconnected.",
                "The ADIRU is not energized: AD and IR information is lost.",
                "IR information will be disconnected.",
                "AD and IR information will be disconnected."
            ],
            "answer": 1
        },
        {
            "id": 13,
            "question": "What information is supplied by the Air Data Modules (ADMs) and displayed on the PFDs?",
            "options": [
                "Airspeed, altitude, and vertical speed.",
                "Heading, attitude, and vertical speed.",
                "Airspeed, attitude, altitude, and vertical speed.",
                "Airspeed, vertical speed, and attitude."
            ],
            "answer": 0
        },
        {
            "id": 14,
            "question": "After a single DMC failure, how could a crewmember recover the display units?",
            "options": [
                "Rotate the EIS DMC switch on the switching panel to replace the failed DMC with DMC 3.",
                "No action is needed as recovery is automatic.",
                "Once a DMC has failed the information is unrecoverable"
            ],
            "answer": 0
        },
        {
            "id": 15,
            "question": "What information is supplied by the IR's and displayed on the PFD?",
            "options": [
                "Heading, attitude, and flight path vector.",
                "Heading, attitude, and altitude.",
                "Heading, altitude, and vertical speed",
                "Airspeed, altitude, and backup vertical speed."
            ],
            "answer": 0
        },
        {
            "id": 16,
            "question": "How many Air Data/Inertial Reference Units (ADIRU's) are installed?",
            "options": [
                "Three",
                "Four",
                "Two",
                "One"
            ],
            "answer": 0
        },
        {
            "id": 17,
            "question": "What causes a DU to display a black screen with a white diagonal line?",
            "options": [
                "DMC failure.",
                "No power.",
                "The circuit breaker for that particular DU has popped."
            ],
            "answer": 0
        },
        {
            "id": 18,
            "question": "The white IR ALIGN light is flashing. What does this mean?",
            "options": [
                "No present position has been entered and ten minutes has elapsed since the IR was selected ON.",
                "Attitude and heading information have been lost. An alignment fault may exist.",
                "No present position has been entered and ten minutes has elapsed since the IR was selected ON. An alignment fault may exist."
            ],
            "answer": 2
        },
        {
            "id": 19,
            "question": "If LOW ACCURACY message is displayed, are there any approach restrictions?",
            "options": [
                "No",
                "Yes, ILS approach only.",
                "Yes, both LNAV and VNAV approaches are forbidden."
            ],
            "answer": 2
        },
        {
            "id": 20,
            "question": "The Flight Management part of the FMGC includes the following elements:",
            "options": [
                "Navigation, flight planning and A/THR commands.",
                "AP and FD commands and flight envelope computation.",
                "Navigation, flight planning, performance optimization and flight predictions",
                "Performance optimization, A/THR and AP commands"
            ],
            "answer": 2
        },
        {
            "id": 21,
            "question": "You receive a SELCAL on VHF 2, what happens on your ACP?",
            "options": [
                "Amber sign call flashes on VHF 2 key.",
                "All of the above.",
                "Three green bars come on.",
                "White SELCAL appears on VHF 2 pushbutton and VHF 2 reception selector illuminates white."
            ],
            "answer": 0
        },
        {
            "id": 22,
            "question": "How can a navaid tuned through the STBY NAV on RMP 1 or 2 be identified?",
            "options": [
                "By pressing out the corresponding reception knob on the ACP",
                "The ident appears on the ND",
                "All of the above"
            ],
            "answer": 2
        },
        {
            "id": 23,
            "question": "On RMP, the ON/OFF switch controls:",
            "options": [
                "Only the STBY NAV function of the RMP.",
                "Only the COM function of the RMP.",
                "The power supply to the RMP."
            ],
            "answer": 2
        },
        {
            "id": 24,
            "question": "The audio management system allows the flight crew to use:",
            "options": [
                "The call systems and Passenger Address (PA) system.",
                "All of the above.",
                "The interphone system."
            ],
            "answer": 1
        },
        {
            "id": 25,
            "question": "Normally how should you call a Flight Attendant?",
            "options": [
                "By his or her first name.",
                "Selecting the ATTND ADV pushbutton on.",
                "Using the ACP CAB pb.",
                "Using an overhead FWD or AFT call pushbutton."
            ],
            "answer": 3
        },
        {
            "id": 26,
            "question": "When would a green AM light illuminate on RMP 1?",
            "options": [
                "Would not illuminate",
                "If crew has selected HF1 and single side band mode",
                "If AM mode is required and crew has selected HF1 and AM",
                "If AM mode is required and crew has selected HF 2 and AM"
            ],
            "answer": 2
        },
        {
            "id": 27,
            "question": "If an RMP fails, the selected receiver is no longer controlled by this RMP and frequencies and bars disappear from this RMP.",
            "options": [
                "False.",
                "True."
            ],
            "answer": 1
        },
        {
            "id": 28,
            "question": "What are the correct positions for the PFD and ND?",
            "options": [
                "The PFD should be inboard and the ND should be inboard.",
                "The PFD should be outboard and the ND should be inboard.",
                "The PFD should be to the left of the ND for both seat positions.",
                "The PFD should be inboard and the ND should be outboard."
            ],
            "answer": 1
        },
        {
            "id": 29,
            "question": "Is it possible to tune a navaid with the STBY NAV function on RMP 3?",
            "options": [
                "Yes but only on the ground",
                "No. STBY NAV function is not available on RMP 3",
                "Yes",
                "No. RMP 3 is not available for crew use"
            ],
            "answer": 1
        },
        {
            "id": 30,
            "question": "RMP #1 is dedicated to which VHF radios?",
            "options": [
                "VHF 1 and 3.",
                "VHF 1 and 2.",
                "All radios.",
                "VHF 2 and 3."
            ],
            "answer": 0
        },
        {
            "id": 31,
            "question": "The AUDIO SWITCHING rotary selector allows replacement of a failed #1 or #2 ACP with ACP #3.",
            "options": [
                "True",
                "False."
            ],
            "answer": 0
        },
        {
            "id": 32,
            "question": "What action should be taken if ADR #1 is lost?",
            "options": [
                "Nothing.",
                "Move the AIR DATA knob on the switching panel to CAPT 3.",
                "Move the ATT HDG knob on the switching panel to CAPT 3."
            ],
            "answer": 1
        },
        {
            "id": 33,
            "question": "In normal law all protections are active, which of the following lists is the most complete list?",
            "options": [
                "Protections, Load Factor, Pitch attitude, High AOA, VLS, Alpha floor, and High speed.",
                "Protections, Load Factor, Pitch attitude, High AOA, Alpha floor, angle of bank, and High speed.",
                "Protections, Load Factor, Pitch attitude, High AOA, and High speed.",
                "Protections, Load Factor and Pitch attitude."
            ],
            "answer": 1
        },
        {
            "id": 34,
            "question": "What message is displayed if the database effective date does not match the clock date?",
            "options": [
                "Check Effective Date.",
                "Check Data Base Date.",
                "Check the changeover date.",
                "Check Data Base Cycle."
            ],
            "answer": 3
        },
        {
            "id": 35,
            "question": "The service interphone has interphone jacks and an OVRD switch located on the overhead panel.",
            "options": [
                "Eight",
                "Seven",
                "Five",
                "Ten"
            ],
            "answer": 1
        }
    ]
};

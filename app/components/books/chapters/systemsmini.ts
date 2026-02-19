import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "System Test",
    questions: [
        {
            "id": 1,
            "question": "Each engine nacelle and pylon area is equipped with:",
            "options": [
                "Two fire detection loops.",
                "Two smoke detectors and two fire detection loops.",
                "A single fire detection loop and a single smoke detector loop.",
                "A single fire detection loop."
            ],
            "answer": 0
        },
        {
            "id": 2,
            "question": "What is the Maximum tire speed?",
            "options": [
                "230 Kts",
                "215 Kts",
                "195 Kts",
                "200 Kts"
            ],
            "answer": 2
        },
        {
            "id": 3,
            "question": "Can the autopilot be used for a single engine approach and Autoland?",
            "options": [
                "No",
                "Yes"
            ],
            "answer": 1
        },
        {
            "id": 4,
            "question": "FAC generated slat and flap extension, retraction, and limiting speeds are visually displayed on which of displays/page?",
            "options": [
                "All of the above are correct.",
                "Both pilot's PFD airspeed displays.",
                "The lower ECAM F/CTL page.",
                "The MCDU RADNAV page."
            ],
            "answer": 1
        },
        {
            "id": 5,
            "question": "In normal law, MMO and VMO limits are depicted on each PFD as:",
            "options": [
                "Green ='s",
                "Red x's",
                "Green x's",
                "Amber x's"
            ],
            "answer": 0
        },
        {
            "id": 6,
            "question": "Pressurization indications are found on which ECAM page(s)?",
            "options": [
                "On the CAB PRESS & BLEED pages.",
                "BLEED page.",
                "Only on the CAB PRESS page.",
                "The in-flight ECAM cruise page and the CAB PRESS page."
            ],
            "answer": 3
        },
        {
            "id": 7,
            "question": "Each engine nacelle and pylon area is equipped with:",
            "options": [
                "A single fire detection loop and a single smoke detector.",
                "A single fire detection loop.",
                "Two fire detection loops.",
                "Two smoke detectors and two fire detection loops."
            ],
            "answer": 2
        },
        {
            "id": 8,
            "question": "In Normal Law, what are the limits of Pitch Attitude protections with flaps Full.",
            "options": [
                "There is no limit.",
                "25° nose up, progressively reduced to 20° at low speed.",
                "35° nose up progressively reduced to 20°",
                "30° nose up."
            ],
            "answer": 1
        },
        {
            "id": 9,
            "question": "What is the maximum aircraft ceiling (environmental envelope) ?",
            "options": [
                "+ 37 100 ft",
                "+ 39 800 ft",
                "+ 42 300 ft",
                "+ 41 100 ft"
            ],
            "answer": 1
        },
        {
            "id": 10,
            "question": "The pneumatic system supplies high-pressure air for:\n\nHigh-pressure air takes its sources from:\n{\n~Engine bleed systems.\n~APU load compressor.\n~HP ground connection.\n=All of the answers are correct.\n}",
            "options": [
                "All of the answers are correct.",
                "FWD and AFT cargo heating.",
                "Hydraulic reservoir pressurization.",
                "Water pressurization."
            ],
            "answer": 0
        },
        {
            "id": 11,
            "question": "As far as FMA annunciations are concerned, what would indicate that the A/THR system is active?",
            "options": [
                "\"SPEED\" appears in amber in column one, line one.",
                "\"A/THR\" changes from blue to white as shown in column five, line three.",
                "\"SPEED\" appears in green in column one, line one.",
                "\"A/THR\" changes from white to blue in column five, line one."
            ],
            "answer": 1
        },
        {
            "id": 12,
            "question": "What is true of the Load Factor Factor protection for the A320?",
            "options": [
                "Limits are +2.0 g to 0 g for other configuration.",
                "All of the answers are correct.",
                "It is also available in Alternate Law.",
                "Limits are +2.5 g to -1 g for clean configuration."
            ],
            "answer": 1
        },
        {
            "id": 13,
            "question": "Which of the following controls and monitors flaps and slats?",
            "options": [
                "Flap Augmentation Computer (FAC)",
                "Elevator Aileron Computer (ELAC)",
                "Slat Flap Control Computers (SFCC)",
                "Wing Tip Brakes (WTB)"
            ],
            "answer": 2
        },
        {
            "id": 14,
            "question": "What happens when the APU Fire pb is pressed?",
            "options": [
                "All of the answers are correct.",
                "Closes the low-pressure fuel valve.",
                "Arms the squib on the APU fire extinguisher.",
                "Shuts off the APU fuel pump."
            ],
            "answer": 0
        },
        {
            "id": 15,
            "question": "What are the correct positions for the PFD and ND?",
            "options": [
                "The PFD should be in-board and the ND should be inboard.",
                "The PFD should be to the left of the ND for both seat positions.",
                "The PFD should be out-board and the ND should be inboard.",
                "The PFD should be in-board and the ND should be outboard."
            ],
            "answer": 2
        },
        {
            "id": 16,
            "question": "(What are the condition/s for arming the autobrake?",
            "options": [
                "All the answers are correct.",
                "Anti-skid electrically-powered",
                "No failure in the braking system",
                "Green pressure available"
            ],
            "answer": 0
        },
        {
            "id": 17,
            "question": "The ADR (Air Data Reference) supplies which data to the PFD?",
            "options": [
                "All of the answers are correct.",
                "Airspeed",
                "Angle of attack",
                "Barometric altitude"
            ],
            "answer": 0
        },
        {
            "id": 18,
            "question": "What is required for the FADEC to compute a reduced thrust setting?",
            "options": [
                "Nothing, it is an automatic function of the FADEC.",
                "A FLEX temperature must be entered on the INIT page of the MCDU.",
                "A FLEX temperature must be entered on the TAKE OFF PERF page of the MCDU."
            ],
            "answer": 2
        },
        {
            "id": 19,
            "question": "GPWS aural and visual warnings cannot be inhibited.",
            "options": [
                "True",
                "False"
            ],
            "answer": 1
        },
        {
            "id": 20,
            "question": "Cost Index = 0 (zero) corresponds to:",
            "options": [
                "Best ratio between the flight time cost and the fuel cost.",
                "Minimum fuel consumption (max range)",
                "Minimum time.",
                "LRC (Long Range Cruise)."
            ],
            "answer": 1
        },
        {
            "id": 21,
            "question": "What happens when you see a DU failure ?",
            "options": [
                "All of the answers are correct.",
                "A blank screen with the “INVALID DISPLAY UNIT” message in amber.",
                "A blank screen with an “F” letter in amber.",
                "A distorted display."
            ],
            "answer": 0
        },
        {
            "id": 22,
            "question": "Weather radar can be displayed in which modes on the ND?",
            "options": [
                "ROSE NAV mode only.",
                "All modes except plan.",
                "ROSE VOR and ROSE ILS modes.",
                "ARC and ROSE NAV modes only."
            ],
            "answer": 1
        },
        {
            "id": 23,
            "question": "What is true of the Auxilliary Power Unit (APU) ?\n(i) It can be used for Engine Starting and Pressurisation.\n(ii) Its bleed air can be extracted for Wing Anti-Ice.",
            "options": [
                "(i) only",
                "None of the answers are correct.",
                "(ii) only",
                "(i) and (ii) are correct."
            ],
            "answer": 0
        },
        {
            "id": 24,
            "question": "The Armed Vertical Modes are displayed on the Flight Mode Annunciator on the second line in:",
            "options": [
                "Blue or magenta.",
                "Blue or green.",
                "White"
            ],
            "answer": 0
        },
        {
            "id": 25,
            "question": "What is the difference between [-FD2]and[2FD-]on the Flight Mode Annunciator(FMA) ?",
            "options": [
                "Both mean the same.",
                "[-FD2] means 1 stdby, 2 engaged [2FD-] means 2 engaged, 1 stdby.",
                "[-FD2] means 1 inop, 2 engaged. [2FD-] means 2 engaged, 1 off.",
                "[-FD2] means 1 off, 2 engaged. [2FD-] means 2 engaged, 1 inop."
            ],
            "answer": 3
        },
        {
            "id": 26,
            "question": "In conjunction with illumination of the GEN 1 LINE SMOKE light and MASTER CAUT light:",
            "options": [
                "Only the BLOWER FAULT light will be illuminated.",
                "Only the EXTRACT FAULT light will be illuminated.",
                "The BLOWER and EXTRACT push button FAULT lights will be illuminated."
            ],
            "answer": 2
        },
        {
            "id": 27,
            "question": "What is the Maximum speed at which the landing gear may be extended?",
            "options": [
                "280 kt / M 0.67",
                "250 kt / M 0.60",
                "220 kt / M 0.54",
                "350 kt / M 0.82"
            ],
            "answer": 1
        },
        {
            "id": 28,
            "question": "What are the different types of flight guidance?",
            "options": [
                "Slaved and Master modes",
                "Automatic and Manual modes",
                "Managed and Manual modes",
                "Managed and Selected modes"
            ],
            "answer": 3
        },
        {
            "id": 29,
            "question": "In the event an AFT cargo compartment smoke detector is activated and fire is suspected:",
            "options": [
                "The crew must press the appropriate agent DISCH switch.",
                "No action is required smoke detected could be spurious and fire has not been confirmed.",
                "Extinguishing is automatic.",
                "Extinguishing is automatic only while on the ground."
            ],
            "answer": 0
        },
        {
            "id": 30,
            "question": "At which speed does Alpha Floor activate?",
            "options": [
                "At VLS.",
                "At V Alpha Max.",
                "Between V Alpha Protection and V Alpha Max.",
                "Between VLS and V Alpha Protection."
            ],
            "answer": 2
        },
        {
            "id": 31,
            "question": "What is the Bank Angle Limit of the flight control system under normal law when Angle Of Attack protection is active?",
            "options": [
                "40 deg",
                "67 deg",
                "45 deg",
                "30 deg"
            ],
            "answer": 2
        },
        {
            "id": 32,
            "question": "The Captain's FMA indicates - FD2 in column five, line two. What does this mean?",
            "options": [
                "FMGC",
                "The First Officer has pushed the priority takeover pushbutton.",
                "The Captain's FD pushbutton. on the FCU has not been selected ON and FD2 has automatically crossed over.",
                "FMGC"
            ],
            "answer": 0
        },
        {
            "id": 33,
            "question": "What are the various braking modes available on the A320?",
            "options": [
                "Normal braking.",
                "Alternate braking with and without antiskids.",
                "All of the answers are correct.",
                "Park brakes."
            ],
            "answer": 2
        },
        {
            "id": 34,
            "question": "Engine heat sensing are located in pylon nacelle, engine core and fan section.",
            "options": [
                "False.",
                "True."
            ],
            "answer": 1
        },
        {
            "id": 35,
            "question": "OPEN CLIMB (OP CLB) is a Managed mode.",
            "options": [
                "False.",
                "True."
            ],
            "answer": 0
        },
        {
            "id": 36,
            "question": "The electric windshield wipers are controlled:",
            "options": [
                "By two individual pushbuttons",
                "By one rotary selector for both windshields",
                "By two individual rotary selectors",
                "Automatically when in heavy rain"
            ],
            "answer": 1
        },
        {
            "id": 37,
            "question": "If one GPS receiver fails, the three ADIRUs automatically select the only operative GPS receiver.",
            "options": [
                "False.",
                "True."
            ],
            "answer": 1
        },
        {
            "id": 38,
            "question": "Which of the following controls and monitors flaps and slats?",
            "options": [
                "One slat flap control computer (SFCC).",
                "Two ELACs.",
                "Two slat flap control computers (SFCCs).",
                "Wing tip brakes."
            ],
            "answer": 2
        },
        {
            "id": 39,
            "question": "What is true of the Traffic Collisoin Avoidance System(TCAS)?\n(i) Its range is 30 Nm on either side and 30-80 Nm longitudinally.\n(ii) The maximum altitude range is 2 700 ft above and below.",
            "options": [
                "None of the answers are correct.",
                "(i) and (ii)",
                "(ii) only",
                "(i) only"
            ],
            "answer": 3
        },
        {
            "id": 40,
            "question": "The purpose of the safety valve is to avoid:",
            "options": [
                "Excessive negative differential.",
                "Excessive positive pressure differential.",
                "Both are correct."
            ],
            "answer": 2
        },
        {
            "id": 41,
            "question": "Failure to retract the flaps after takeoff will:",
            "options": [
                "Result in automatic flap and slat retraction at 210 kts.",
                "Result in automatic flap retraction ONLY at 210 kts.",
                "Activate the speedbrakes.",
                "Result in automatic flap and slat retraction at 220 kts."
            ],
            "answer": 1
        },
        {
            "id": 42,
            "question": "What are the sources of electrical power for the A320 which can supply the entire aircraft electrical network?",
            "options": [
                "Integrated Drive Generators (IDG)",
                "Ground Power Unit (GPU)",
                "Auxilliary Power Unit (APU)",
                "All of the answers are correct."
            ],
            "answer": 3
        },
        {
            "id": 43,
            "question": "What happens in case of total loss of main generators?",
            "options": [
                "The RAT has to be manually extended.",
                "The RAT is extended and mechanically connected to the emergency generator.",
                "The RAT is automatically extended and powers the blue system which drives the emergency generator.",
                "The RAT is automatically extended and powers the yellow system which drives the emergency generator."
            ],
            "answer": 2
        },
        {
            "id": 44,
            "question": "What is true of a low speed rejected takeoff(less than 72 kts)?\ni) Ground Spoilers will deploy.\nii) Autobrakes will be activated.",
            "options": [
                "Only (ii) is correct",
                "Only (i) is correct",
                "Both (i) and (ii) are correct.",
                "Both (i) and (ii) are wrong."
            ],
            "answer": 3
        },
        {
            "id": 45,
            "question": "When does oil quantity indication begin to pulse?",
            "options": [
                "Oil quantity detector or pressure fault.",
                "Decreasing below 5 qts.",
                "During engine start."
            ],
            "answer": 1
        },
        {
            "id": 46,
            "question": "Nose wheel steering is controlled by:",
            "options": [
                "LGCIU 1 or 2",
                "LGCIU 1",
                "BSCU",
                "LGCIU 2"
            ],
            "answer": 2
        },
        {
            "id": 47,
            "question": "What condition will cause auto flap retraction?",
            "options": [
                "Exceed 210 kts at Flaps 1",
                "Exceed 190 kt with Flaps 1 while extending the speedbrake lever.",
                "Exceed 195 kt at Flaps 1",
                "Exceed 190 kt at Flaps 1."
            ],
            "answer": 0
        },
        {
            "id": 48,
            "question": "What are the features and functions of the Flight Control Unit ?",
            "options": [
                "Autopilots and autothrust functions may be engaged or disengaged.",
                "Different guidance modes can be selected to change various targets",
                "Used to select any flight parameters or modify those selected in the MCDU",
                "All of the answers are correct."
            ],
            "answer": 3
        },
        {
            "id": 49,
            "question": "What is the Max. negative Diff. pressure for the cabin?",
            "options": [
                "0  psi.",
                "1.0 psi.",
                "2.0 psi.",
                "8.6 psi."
            ],
            "answer": 1
        },
        {
            "id": 50,
            "question": "If an engine fire is detected, when will the guarded red ENG FIRE push button light extinguish?",
            "options": [
                "Only after the fire warning no longer exists.",
                "When the crew pushes the red MASTER WARN pushbutton.",
                "When the crew pushes and releases the guarded red ENGINE FIRE pushbutton.",
                "When the crew pushes the red MASTER WARN pushbutton and then releases the guarded ENGINE FIRE pushbutton."
            ],
            "answer": 0
        },
        {
            "id": 51,
            "question": "Speedbrake extension is inhibited,if:",
            "options": [
                "Thrust levers above MCT position.",
                "All of the answers are correct.",
                "Angle-of-attack protection is active.",
                "Flaps are in configuration FULL."
            ],
            "answer": 1
        },
        {
            "id": 52,
            "question": "At what altitude can you use the APU Bleed for airconditioning and pressurisation (Two Packs)?",
            "options": [
                "22 500 ft",
                "17 500 ft",
                "15 000 ft",
                "20 000 ft"
            ],
            "answer": 2
        },
        {
            "id": 53,
            "question": "What is the function of the Pack Flow selector?",
            "options": [
                "Always allows high flow regardless of switch position when the APU is used for air conditioning.",
                "Allows the pilot to increase pack flow but will not allow a manual decrease in flow if needed by the aircraft demands.",
                "Both are correct."
            ],
            "answer": 2
        },
        {
            "id": 54,
            "question": "What is true of the Overspeed warning feature of the A320?",
            "options": [
                "Activates at MMO + 0.006.",
                "Activates at VMO + 4.",
                "All of the answers are correct.",
                "ECAM will show an \"O/SPEED\" warning."
            ],
            "answer": 2
        },
        {
            "id": 55,
            "question": "Which of the following is true of the A320 Flight Augmentation System (FAC) yaw function ?\n(i) At 160 kts the maximum rudder defelction is 25.0 deg.\n(ii) At 380 kts the minimum rudder deflection is 7.5 deg.",
            "options": [
                "(i) and (ii) are correct",
                "None of the answers are correct.",
                "(i) only",
                "(ii) only"
            ],
            "answer": 2
        },
        {
            "id": 56,
            "question": "What is the difference between A/THR in THRUST mode and SPEED/MACH mode?",
            "options": [
                "In thrust mode, AP/FD pitch mode maintains a vertical path but in speed/mach mode AP/FD controls maintains the speed.",
                "In thrust mode, AP/FD pitch mode maintains the speed but in speed/mach mode AP/FD controls a vertical path."
            ],
            "answer": 1
        },
        {
            "id": 57,
            "question": "What do the white dashes on the Flight Control Unit (FCU) represent ?",
            "options": [
                "Autothrust is disengaged.",
                "Autothrust is engaged.",
                "Target value is determined from the FMGS (managed guidance)",
                "Target value is determined from the pilot (selected guidance)"
            ],
            "answer": 2
        },
        {
            "id": 58,
            "question": "Normally how should you call a Flight Attendant ?",
            "options": [
                "Using the Audio Control Panel (ACP) CAB push button.",
                "Using an overhead FWD or AFT call push button.",
                "Use the mobile phone as the reception is clearer.",
                "Use the Public Address (PA) microphone so everyone can hear."
            ],
            "answer": 1
        },
        {
            "id": 59,
            "question": "While on the ground in Roll Normal Law there is a direct relationship between sidestick deflection and the corresponding aileron and spoiler deflection.",
            "options": [
                "False",
                "True"
            ],
            "answer": 1
        },
        {
            "id": 60,
            "question": "What information does the Primary Flight Display (PFD) show ?\n(i) Flight Director (FD) attitude guidance targets\n(ii) Armed and engaged modes\n(iii) Navigation and instrument approach information\n(iv) Altimeter setting\n(v) Barometric altitude\n(vi) System messages",
            "options": [
                "(iii), (iv) and (vi)only",
                "All of the items above are shown on the PFD.",
                "(i), (iv) and (v) only",
                "(i), (ii) and (iii) only"
            ],
            "answer": 1
        },
        {
            "id": 61,
            "question": "APU fire detection is accomplished by:",
            "options": [
                "One fire detection loop.",
                "Two parallel fire detection loops.",
                "A three channel SDCU located in the APU compartment.",
                "A two channel SDCU located in the APU compartment."
            ],
            "answer": 1
        },
        {
            "id": 62,
            "question": "What is true of the Power Transfer Unit(PTU)?",
            "options": [
                "A bidirectional power transfer unit enables the yellow system to pressurize the green system and vice versa.",
                "All of the answers are correct.",
                "The power transfer unit operates automatically when the differential pressure between the green and the yellow systems is >500 PSI.",
                "The PTU therefore allows the green system to be pressurized on the ground when the engines are stopped."
            ],
            "answer": 1
        },
        {
            "id": 63,
            "question": "Fuel can be transferred from tank to tank:",
            "options": [
                "Fuel can never be transferred.",
                "In flight if the fuel X FEED push button is selected OPEN and center tank MODE SEL push button is selected to MAN.",
                "In flight if the fuel X FEED push button is selected OPEN.",
                "Only on the ground."
            ],
            "answer": 3
        },
        {
            "id": 64,
            "question": "The FAC's primarily control which control surface?",
            "options": [
                "Aileron.",
                "Elevator.",
                "Rudder.",
                "Elevator and aileron."
            ],
            "answer": 2
        },
        {
            "id": 65,
            "question": "What happens to the heat at the drain masts when the aircraft is on the ground?",
            "options": [
                "Some of them are automatically switched off (pitot, AOA).",
                "Nothing.",
                "The heat is reduced to prevent injury to ground personnel."
            ],
            "answer": 2
        }
    ]
};
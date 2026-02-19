import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Final Exam 1",
    questions: [
        {
            "id": 1,
            "question": "What is the max speed, when windshield wipers can be used?",
            "options": [
                "245 kt.",
                "230 kt.",
                "210 kt.",
                "260 kt."
            ],
            "answer": 1
        },
        {
            "id": 2,
            "question": "How many outflow valves are there?",
            "options": [
                "Two valves with only one door visible.",
                "One valve with two doors.",
                "Two valves (one main + one back-up) with only two doors visible.",
                "One valve with one door."
            ],
            "answer": 1
        },
        {
            "id": 3,
            "question": "The electric windshield wipers are controlled:",
            "options": [
                "By one rotary selector for both windshields",
                "Automatically when in heavy rain",
                "By two individual pushbuttons",
                "By two individual rotary selectors"
            ],
            "answer": 3
        },
        {
            "id": 4,
            "question": "The Captain's FMA indicates - FD2 in column five, line two. What does this mean?",
            "options": [
                "FMGC 1 has timed out and FMGC 2 is now providing flight guidance for both pilots",
                "FMGC 1 has timed out and flight guidance is lost",
                "The First Officer has pushed the priority takeover pushbutton.",
                "The Captain's FD pushbutton on the FCU has not been selected ON and FD2 has automatically crossed over."
            ],
            "answer": 0
        },
        {
            "id": 5,
            "question": "The air extraction duct of the avionics ventilation system has one smoke detector and when smoke is detected for more than 5s:",
            "options": [
                "The ECAM AVIONICS SMOKE alert triggers.",
                "On the EMER ELEC PWR panel, the SMOKE light of the GEN 1 LINE pb-sw comes on.",
                "All of the answers are correct.",
                "On the VENTILATION panel, the FAULT lights of the BLOWER pb-sw and the EXTRACT pb-sw come on."
            ],
            "answer": 2
        },
        {
            "id": 6,
            "question": "The IR alignment count down stops one minute prior to accomplishment and the ALIGN lights are flashing. Why does it happen?",
            "options": [
                "It is an indication that alignment has stopped as the present position data has not been entered from the FMGS.",
                "It is an indication that the alignment is complete but must be acknowledged.",
                "It is an indication that there is a disagreement between the IRs and the alignment must be restarted."
            ],
            "answer": 0
        },
        {
            "id": 7,
            "question": "What is true of the Traffic Collision Avoidance System (TCAS)?",
            "options": [
                "Detects and displays surrounding aircraft that have a transponder.",
                "All of the answers are correct.",
                "Calculates and display possible collision threats.",
                "Triggers vertical speed orders, in order to avoid collisions."
            ],
            "answer": 1
        },
        {
            "id": 8,
            "question": "What is the maximum altitude that flaps can be extended?",
            "options": [
                "22 000 ft.",
                "20 000 ft.",
                "15 000 ft.",
                "25 000 ft."
            ],
            "answer": 1
        },
        {
            "id": 9,
            "question": "After a single DMC failure, how could a crewmember recover the display units?",
            "options": [
                "Rotate the EIS DMC switch on the switching panel to replace the failed DMC with DMC 3.",
                "None of the answers are correct.",
                "No action is needed as recovery is automatic.",
                "Once a DMC has failed the information is unrecoverable."
            ],
            "answer": 0
        },
        {
            "id": 10,
            "question": "What happens in case of total loss of main generators?",
            "options": [
                "The RAT is automatically extended and powers the blue system which drives the emergency generator.",
                "The RAT is automatically extended and powers the yellow system which drives the emergency generator.",
                "The RAT has to be manually extended.",
                "The RAT is extended and mechanically connected to the emergency generator."
            ],
            "answer": 0
        },
        {
            "id": 11,
            "question": "Name the minimum engine oil temperature prior starting?",
            "options": [
                "-40 \u00b0C",
                "-55 \u00b0C",
                "-25 \u00b0C",
                "-10 \u00b0C"
            ],
            "answer": 0
        },
        {
            "id": 12,
            "question": "In conjunction with illumination of the GEN 1 LINE SMOKE light and MASTER CAUT light:",
            "options": [
                "The BLOWER and EXTRACT push button FAULT lights will be illuminated.",
                "Only the BLOWER FAULT light will be illuminated.",
                "Only the EXTRACT FAULT light will be illuminated."
            ],
            "answer": 0
        },
        {
            "id": 13,
            "question": "Engine heat sensing are located in pylon nacelle, engine core and fan section.",
            "options": [
                "False.",
                "True."
            ],
            "answer": 1
        },
        {
            "id": 14,
            "question": "At what altitude can you use the APU Bleed to assist an engine start?",
            "options": [
                "27 500 ft",
                "20 000 ft",
                "22 500 ft",
                "25 000 ft"
            ],
            "answer": 1
        },
        {
            "id": 15,
            "question": "What is the maximum number of passenger seats on A320?",
            "options": [
                "204",
                "195",
                "180",
                "169"
            ],
            "answer": 2
        },
        {
            "id": 16,
            "question": "At what altitude can you use the APU Bleed for airconditioning and pressurisation (One Pack)?",
            "options": [
                "27 500 ft",
                "25 000 ft",
                "22 500 ft",
                "30 000 ft."
            ],
            "answer": 2
        },
        {
            "id": 17,
            "question": "What is the normal hydraulic operating pressure?",
            "options": [
                "3000 +/- 75",
                "2950 +/- 100",
                "3000 +/- 200"
            ],
            "answer": 2
        },
        {
            "id": 18,
            "question": "What is the difference between [-FD2] and [2FD-] on the Flight Mode Annunciator (FMA)?",
            "options": [
                "[-FD2] means 1 inop, 2 engaged. [2FD-] means 2 engaged, 1 off.",
                "[-FD2] means 1 off, 2 engaged. [2FD-] means 2 engaged, 1 inop.",
                "[-FD2] means 1 stdby, 2 engaged [2FD-] means 2 engaged, 1 stdby.",
                "Both mean the same."
            ],
            "answer": 1
        },
        {
            "id": 19,
            "question": "The RAT has been deployed and the aircraft has a dual engine flameout. Which of the following is TRUE?",
            "options": [
                "The aircraft will be in the Emergency Electrical Configuration.",
                "Both the squibs from Engines 1 and 2 have to be armed and fire extingushing agents discharged.",
                "The RAT will be able to supply electrcial and hydraulic power even at speeds lower than 140 kts.",
                "The APU fire bottle automatically discharges."
            ],
            "answer": 0
        },
        {
            "id": 20,
            "question": "When does oil quantity indication begin to pulse?",
            "options": [
                "Oil quantity detector or pressure fault.",
                "Decreasing below 5 qts.",
                "During engine start."
            ],
            "answer": 1
        },
        {
            "id": 21,
            "question": "Can normal landing gear operation be restored after a gravity extension if green hydraulic pressure is available?",
            "options": [
                "It may be possible if the gravity extension was not caused by a failure of the landing gear mechanism.",
                "None of the above answers is correct.",
                "No, only maintenance can restore normal operation.",
                "Restoration is always possible."
            ],
            "answer": 0
        },
        {
            "id": 22,
            "question": "Sidesticks provide electrical signals to the flight control computers; if both sidesticks are operated:",
            "options": [
                "Both inputs are algebraically added.",
                "The F/O input is overridden by the CAP input.",
                "The inputs cancel each other."
            ],
            "answer": 0
        },
        {
            "id": 23,
            "question": "Failure to retract the flaps after takeoff will:",
            "options": [
                "Activate the speedbrakes.",
                "Result in automatic flap and slat retraction at 220 kts.",
                "Result in automatic flap retraction ONLY at 210 kts.",
                "Result in automatic flap and slat retraction at 210 kts."
            ],
            "answer": 2
        },
        {
            "id": 24,
            "question": "With flaps 2, what is the limiting speed?",
            "options": [
                "185kts",
                "177kts",
                "215kts",
                "200kts"
            ],
            "answer": 3
        },
        {
            "id": 25,
            "question": "If both ELACs fail, what controls the elevator and stabilizer?",
            "options": [
                "SECs",
                "FACS",
                "SFCC",
                "LGCIU"
            ],
            "answer": 0
        },
        {
            "id": 26,
            "question": "When the aircraft is in the Emergency Electrical Configuration ______ .",
            "options": [
                "RMP 1 and ACP 1 are operative.",
                "RMP 1 and ACP's 1 and 2 are operative.",
                "RMP's 1 and 2, and ACP's 1 and 2 are both operative.",
                "RMP 2 and ACP's 1 and 2 are operative."
            ],
            "answer": 1
        },
        {
            "id": 27,
            "question": "The ADR part (Air Data Reference) supplies which data to the PFD?",
            "options": [
                "All of the answers are correct.",
                "Temperature",
                "Overspeed warnings",
                "Mach"
            ],
            "answer": 0
        },
        {
            "id": 28,
            "question": "When ground spoilers deploy ______ .",
            "options": [
                "One spoiler panel on each wing deploy.",
                "Four spoiler panels on each wing deploy.",
                "Five spoiler panels (all) on each wing deploy.",
                "Two spolier panels on each wing deploy"
            ],
            "answer": 2
        },
        {
            "id": 29,
            "question": "Mechanically backed-up control surfaces:\n(i) Are mechanically connected to the cockpit controls.\n(ii) Require hydraulic power for actuation.",
            "options": [
                "Only (ii) is correct.",
                "Both (i) and (ii) are correct.",
                "Both (i) and (ii) are wrong.",
                "Only (i) is correct."
            ],
            "answer": 1
        },
        {
            "id": 30,
            "question": "Each engine nacelle and pylon area is equipped with:",
            "options": [
                "A single fire detection loop.",
                "A single fire detection loop and a single smoke detector.",
                "Two fire detection loops.",
                "Two smoke detectors and two fire detection loops."
            ],
            "answer": 2
        },
        {
            "id": 31,
            "question": "Maximum taxi speed straight line?",
            "options": [
                "15kts",
                "20kts",
                "30kts",
                "10kts"
            ],
            "answer": 2
        },
        {
            "id": 32,
            "question": "If the LOWER ECAM DU fails, is there a way to retrieve that information?\n(i) Pressing and holding the related systems page pb on the ECAM control panel; the page will be displayed on the UPPER ECAM.\n(ii) Rotating the ECAM/ND XFER switch, the LOWER ECAM page will be transferred to either the Captain or First officers ND.",
            "options": [
                "(i) only",
                "None of the answers are correct.",
                "(i) and (ii) are correct.",
                "(ii) only"
            ],
            "answer": 2
        },
        {
            "id": 33,
            "question": "You are just about to take off. You have not inserted a FLEX temperature. Can you still takeoff?",
            "options": [
                "Yes, by setting the thrust levers to the FLEX/MCT detent.",
                "Not until a FLEX temperature is inserted.",
                "Yes, but only using the TO/GA detent.",
                "Yes, by setting the thrust levers to the CLIMB detent."
            ],
            "answer": 2
        },
        {
            "id": 34,
            "question": "What happens when the A320 goes into Emergency Electrical Configuration?\n(i) The RAT supplies only 5 KvA of electricity to the aircraft electrical network.\n(ii) The RAT deploys and powers up the hydraulic circuit which provides electrical and hydraulic power to the aircraft system.",
            "options": [
                "(i) only",
                "None of the answers are correct.",
                "(i) and (ii) are correct.",
                "(ii) only"
            ],
            "answer": 2
        },
        {
            "id": 35,
            "question": "How many temperature selectors are there on the A320? How many temperature zones are there?",
            "options": [
                "Three rotary temperature selectors and one zone.",
                "Two rotary temperature selectors, one for the cockpit and first class zone and one for the aft cabin zone.",
                "Three rotary temperature selectors, one each for the cockpit zone, the forward cabin zone, and the aft cabin zone.",
                "Four rotary temperature selectors and four zones."
            ],
            "answer": 2
        },
        {
            "id": 36,
            "question": "What is the Maximum speed with the landing gear extended (VLE)?",
            "options": [
                "280 kt / M 0.67",
                "350 kt / M 0.82",
                "220 kt / M 0.54",
                "250 kt / M 0.60"
            ],
            "answer": 0
        },
        {
            "id": 37,
            "question": "Cost Index = 0 (zero) corresponds to:",
            "options": [
                "LRC (Long Range Cruise).",
                "Minimum time.",
                "Best ratio between the flight time cost and the fuel cost.",
                "Minimum fuel consumption (max range)"
            ],
            "answer": 3
        },
        {
            "id": 38,
            "question": "What do the white dashes on the Flight Control Unit (FCU) represent?",
            "options": [
                "Target value is determined from the FMGS (managed guidance)",
                "Target value is determined from the pilot (selected guidance)",
                "Autothrust is engaged.",
                "Autothrust is disengaged."
            ],
            "answer": 0
        },
        {
            "id": 39,
            "question": "In normal law, MMO and VMO limits are depicted on each PFD as:",
            "options": [
                "Green x's",
                "Red x's",
                "Green's",
                "Amber x's"
            ],
            "answer": 2
        },
        {
            "id": 40,
            "question": "What are the maximum speeds for flap extension from Flaps 1 all the way to Flaps FULL?",
            "options": [
                "240 kt. / 220 kt. / 200 kt. / 185 kt. / 170 kt.",
                "230 kt. / 215 kt. / 200 kt. / 185 kt. / 177 kt.",
                "230 kt. / 200 kt. / 190 kt. / 180 kt. / 167 kt."
            ],
            "answer": 1
        },
        {
            "id": 41,
            "question": "How has the fuel been transferred from the outer to the inner tanks?",
            "options": [
                "The transfer valve has been opened automatically by the low level sensor in the inner tank.",
                "By setting the MODE SEL pushbutton to MAN.",
                "The transfer valve has been opened automatically by the low lever sensor in the center tanks.",
                "By setting the MODE SEL PB to AUTO."
            ],
            "answer": 0
        },
        {
            "id": 42,
            "question": "The autopilot will disconnect if the side stick takeover push button is depressed.",
            "options": [
                "True.",
                "False."
            ],
            "answer": 0
        },
        {
            "id": 43,
            "question": "What happens when you see a DU failure?",
            "options": [
                "A distorted display.",
                "A blank screen with the \"INVALID DISPLAY UNIT\" message in amber.",
                "A blank screen with an \"F\" letter in amber.",
                "All of the answers are correct."
            ],
            "answer": 3
        },
        {
            "id": 44,
            "question": "How long will the red APU FIRE pb on the overhead be illuminated?",
            "options": [
                "Until the crew pushes the red MASTER WARN push button.",
                "For as long as the fire warning is present.",
                "Until the crew pushes and releases the guarded red APU FIRE push button."
            ],
            "answer": 1
        },
        {
            "id": 45,
            "question": "With reference to cargo compartment fire extinguishing, which statement is true?",
            "options": [
                "There are two fire bottles, when the DISCH pushbutton is pressed, they are both discharged into the appropriate compartment.",
                "There is only one fire bottle, when it is discharged both amber DISCH lights come on.",
                "There is only one fire bottle, pressing either DISCH pushbutton discharges it into both compartments.",
                "There are two fire bottles, one for the FWD compartment and one for the AFT."
            ],
            "answer": 1
        },
        {
            "id": 46,
            "question": "What is the Max. negative Diff. pressure for the cabin?",
            "options": [
                "8.6 psi.",
                "1.0 psi.",
                "2.0 psi.",
                "0 psi."
            ],
            "answer": 1
        },
        {
            "id": 47,
            "question": "What are the various braking modes available on the A320?",
            "options": [
                "Alternate braking with and without antiskids.",
                "Park brakes.",
                "Normal braking.",
                "All of the answers are correct."
            ],
            "answer": 3
        },
        {
            "id": 48,
            "question": "What is true of the Auxilliary Power Unit (APU)?\n(i) It can be used for Engine Starting and Pressurisation.\n(ii) Its bleed air can be extracted for Wing Anti-Ice.",
            "options": [
                "(ii) only",
                "None of the answers are correct.",
                "(i) and (ii) are correct.",
                "(i) only"
            ],
            "answer": 3
        },
        {
            "id": 49,
            "question": "What is the difference between the engine and wing anti-ice fault lights?",
            "options": [
                "Both indicate low pressure, or valve position disagrees with selected position. Wing light might indicate valve in transit.",
                "Both indicate valve in transit, or overheat.",
                "Both indicate valve in transit, or valve position disagrees with selected position. Wing light also could indicate low pressure.",
                "Both indicate valve in transit, or low pressure. Wing light also could indicate valve position disagrees with selected position."
            ],
            "answer": 2
        },
        {
            "id": 50,
            "question": "The IR ALIGN light is extinguished. What does this mean?",
            "options": [
                "None of the above is correct.",
                "Alignment has been completed.",
                "The respective IR is operating normally.",
                "Air data output has been disconnected."
            ],
            "answer": 1
        },
        {
            "id": 51,
            "question": "What functions of the Flight Management Guidance Computer (FMGC) does the Flight Guidance (FG) part perform?",
            "options": [
                "Autopilot (AP) command",
                "Flight Director (FD) command",
                "All of the answers are correct.",
                "Autothrust (A/THR) command."
            ],
            "answer": 2
        },
        {
            "id": 52,
            "question": "What is the maximum wind for cargo door operation if an aircraft is parked into wind?",
            "options": [
                "35kts",
                "40kts",
                "50kts",
                "60kts"
            ],
            "answer": 2
        },
        {
            "id": 53,
            "question": "Which ACP transmission key will illuminate if the flight attendants are calling?",
            "options": [
                "VHF3",
                "CAB",
                "PA",
                "ALERT"
            ],
            "answer": 1
        },
        {
            "id": 54,
            "question": "Pressurization controllers receive inputs from:",
            "options": [
                "LGCIU's and the MCDU.",
                "LGCIU, ADIRU, FMGS, and EIU.",
                "LGCIU's and pitot static sources.",
                "MCDU and LGCIU's."
            ],
            "answer": 1
        },
        {
            "id": 55,
            "question": "At what speed will flaps auto-retract?",
            "options": [
                "200kts",
                "210kts",
                "230kts",
                "215kts"
            ],
            "answer": 1
        },
        {
            "id": 56,
            "question": "What are the flight maneuvering load acceleration limits?",
            "options": [
                "Clean configuration: -1G/+ 2,5G Slats and Flaps extended: -0,5G/+ 0,5G",
                "Clean configuration: -1G/+ 2,5G Slats and Flaps extended: 0G/+ 2G",
                "Clean configuration: -1,5G/+ 3G Slats and Flaps extended: 0G/+ 2,5G",
                "Clean configuration: -1G/+ 2,5G Slats and Flaps extended: -1G/+ 2G"
            ],
            "answer": 1
        },
        {
            "id": 57,
            "question": "What are the features and functions of the Flight Control Unit?",
            "options": [
                "All of the answers are correct.",
                "Autopilots and autothrust functions may be engaged or disengaged.",
                "Used to select any flight parameters or modify those selected in the MCDU",
                "Different guidance modes can be selected to change various targets"
            ],
            "answer": 0
        },
        {
            "id": 58,
            "question": "What are the correct positions for the PFD and ND?",
            "options": [
                "The PFD should be to the left of the ND for both seat positions.",
                "The PFD should be in-board and the ND should be inboard.",
                "The PFD should be in-board and the ND should be outboard.",
                "The PFD should be out-board and the ND should be inboard."
            ],
            "answer": 3
        },
        {
            "id": 59,
            "question": "While on the ground in Roll Normal Law there is a direct relationship between sidestick deflection and the corresponding aileron and spoiler deflection.",
            "options": [
                "True",
                "False"
            ],
            "answer": 0
        },
        {
            "id": 60,
            "question": "How does the APU fire test on battery power differ from the APU fire test with all busses powered?",
            "options": [
                "It is not possible to test the APU fire protection while on battery power.",
                "While on battery power, only the red APU FIRE and AGENT/DISCH push button will illuminate.",
                "There is no difference."
            ],
            "answer": 1
        },
        {
            "id": 61,
            "question": "Which altitude limitation is associated with high lift devices?",
            "options": [
                "Max altitude for extension is 25, 000 ft",
                "Max altitude for extension is 20, 000 ft.",
                "Max altitude for extension is 22, 000 ft.",
                "Max altitude for extension is 27, 000 ft."
            ],
            "answer": 1
        },
        {
            "id": 62,
            "question": "When either engine anti-ice valve is open:",
            "options": [
                "Minimum idle rpm is reduced.",
                "Maximum N1 is increased.",
                "Minimum idle rpm is increased."
            ],
            "answer": 2
        },
        {
            "id": 63,
            "question": "The aircraft rudder can be manually trimmed with the autopilot engaged.",
            "options": [
                "False",
                "True"
            ],
            "answer": 0
        },
        {
            "id": 64,
            "question": "Speedbrake extension is inhibited, if:",
            "options": [
                "Flaps are in configuration FULL.",
                "Thrust levers above MCT position.",
                "All of the answers are correct.",
                "Angle-of-attack protection is active."
            ],
            "answer": 2
        },
        {
            "id": 65,
            "question": "Where does the SFCCs obtain AOA and air data information from?",
            "options": [
                "SEC",
                "ADIRU",
                "ADC",
                "ELAC"
            ],
            "answer": 1
        },
        {
            "id": 66,
            "question": "What is the Maximum demonstrated crosswind for takeoff and landing?",
            "options": [
                "38 kt",
                "40 kt",
                "35 kt",
                "42 kt"
            ],
            "answer": 0
        },
        {
            "id": 67,
            "question": "What is the maximum Brakes temperature for take-off without brake FAN?",
            "options": [
                "270 \u00b0C",
                "300 \u00b0C",
                "330 \u00b0C",
                "350 \u00b0C"
            ],
            "answer": 1
        },
        {
            "id": 68,
            "question": "Which of the following statements is always TRUE when operating in Alternate law?",
            "options": [
                "Extending the landing gear will place the aircraft in Direct law most of the time.",
                "Extending the landing gear will place the aircraft in Mechanical backup law.",
                "Flight Envelope protections are just like in Normal Law.",
                "None of the answers are correct."
            ],
            "answer": 0
        },
        {
            "id": 69,
            "question": "What is the maximum operating speed VMO/MMO?",
            "options": [
                "350 kt. / 0,82 M",
                "343 kt. / 0,80 M",
                "330 kt. / 0,77 M"
            ],
            "answer": 0
        },
        {
            "id": 70,
            "question": "A Bleed Monitoring Computer (BMC) controls and monitors each system to ensure:",
            "options": [
                "regulate the bleed air temperature.",
                "All of the answers are correct.",
                "correct selection of the compressor stage to use as a source of air.",
                "regulate the bleed air pressure."
            ],
            "answer": 1
        },
        {
            "id": 71,
            "question": "The FAC's primarily control which control surface?",
            "options": [
                "Aileron.",
                "Rudder.",
                "Elevator.",
                "Elevator and aileron."
            ],
            "answer": 1
        },
        {
            "id": 72,
            "question": "What is the maximum speed when the gear is already extended?",
            "options": [
                "280 kt.",
                "260 kt.",
                "250 kt.",
                "270 kt."
            ],
            "answer": 0
        },
        {
            "id": 73,
            "question": "What happens when the APU Fire pb is pressed?",
            "options": [
                "Closes the low-pressure fuel valve.",
                "Shuts off the APU fuel pump.",
                "All of the answers are correct.",
                "Arms the squib on the APU fire extinguisher."
            ],
            "answer": 2
        },
        {
            "id": 74,
            "question": "If an engine fire is detected, when will the guarded red ENG FIRE push button light extinguish?",
            "options": [
                "Only after the fire warning no longer exists.",
                "When the crew pushes the red MASTER WARN pushbutton and then releases the guarded ENGINE FIRE pushbutton.",
                "When the crew pushes the red MASTER WARN pushbutton.",
                "When the crew pushes and releases the guarded red ENGINE FIRE pushbutton."
            ],
            "answer": 0
        },
        {
            "id": 75,
            "question": "The message CTR TK FEEDG appears in the MEMO. What does this mean?",
            "options": [
                "At least one center tank pump is energized.",
                "The center tank fuel mode selector is OFF.",
                "A reminder to switch the center tank pumps OFF.",
                "The center tank pumps are OFF."
            ],
            "answer": 0
        },
        {
            "id": 76,
            "question": "In normal law all protections are active, which of the following lists is the most complete list?",
            "options": [
                "Load Factor, Pitch attitude, High AOA, Alpha Floor, Angle of Bank, and High Speed Protection.",
                "Load Factor, Pitch attitude, High AOA and High speed Protection.",
                "Load Factor, Pitch attitude, High AOA, Low Speed and High Speed Stability.",
                "Load Factor Only"
            ],
            "answer": 0
        },
        {
            "id": 77,
            "question": "How many trim air valves are there?",
            "options": [
                "Three: one each for the cockpit zone, the forward cabin zone, and the aft cabin zone.",
                "One trim air valve.",
                "Two: one for the cockpit and first class zone, and one for the cabin zone.",
                "Four: one each for the cockpit zone, the first class zone, and two for the aft zone."
            ],
            "answer": 0
        },
        {
            "id": 78,
            "question": "What is true of the Overspeed warning feature of the A320?",
            "options": [
                "Activates at VMO + 4.",
                "Activates at MMO + 0.006.",
                "ECAM will show an \"O/SPEED\" warning.",
                "All of the answers are correct."
            ],
            "answer": 3
        },
        {
            "id": 79,
            "question": "The Standby Attitude indication will remain available for ______ minutes after total electrical failure.",
            "options": [
                "10",
                "22",
                "5",
                "7"
            ],
            "answer": 2
        },
        {
            "id": 80,
            "question": "What is the Maximum speed at which the landing gear may be extended?",
            "options": [
                "220 kt / M 0.54",
                "250 kt / M 0.60",
                "280 kt / M 0.67",
                "350 kt / M 0.82"
            ],
            "answer": 1
        },
        {
            "id": 81,
            "question": "Each engine nacelle and pylon area is equipped with:",
            "options": [
                "A single fire detection loop and a single smoke detector loop.",
                "Two fire detection loops.",
                "Two smoke detectors and two fire detection loops.",
                "A single fire detection loop."
            ],
            "answer": 1
        },
        {
            "id": 82,
            "question": "What is the Maximum positive and negative differential pressure?",
            "options": [
                "+9.0/-1 psi",
                "+7.5/-0.0 psi",
                "+8.1/-0.5 psi"
            ],
            "answer": 0
        },
        {
            "id": 83,
            "question": "The Airbus A320 pressurisation system has:",
            "options": [
                "Two safety valves.",
                "One outflow valve, with an actuator that incorporates three motors.",
                "2 Cabin Pressurisation Controllers (CPC).",
                "All of the answers are correct."
            ],
            "answer": 3
        },
        {
            "id": 84,
            "question": "The pneumatic system supplies high-pressure air for:",
            "options": [
                "Air conditioning.",
                "Engine starting.",
                "Wing anti-icing.",
                "All of the answers are correct."
            ],
            "answer": 3
        },
        {
            "id": 85,
            "question": "Maximum speed at which the landing gear may be extended (VLO extension)?",
            "options": [
                "250kts",
                "280kts",
                "260kts",
                "220kts"
            ],
            "answer": 0
        },
        {
            "id": 86,
            "question": "What is the minimum decision height (DH) for an ILS CAT II Approach with at least one autopilot engaged?",
            "options": [
                "100 ft",
                "250 ft",
                "500 ft"
            ],
            "answer": 0
        },
        {
            "id": 87,
            "question": "When the altitude knob on the FCU is pulled:",
            "options": [
                "The current altitude is canceled.",
                "OPEN CLIMB or DESCENT engages.",
                "The altitude is armed."
            ],
            "answer": 1
        },
        {
            "id": 88,
            "question": "What is the maximum A320 taxi speed in a turn at maximum all up weight (MAUW)?",
            "options": [
                "25 kts or less",
                "20 kts or less",
                "35 kts or less",
                "30 kts or less"
            ],
            "answer": 1
        },
        {
            "id": 89,
            "question": "In Normal Law, what are the limits of Pitch Attitude protections with flaps Full.",
            "options": [
                "35\u00b0 nose up progressively reduced to 20\u00b0",
                "25\u00b0 nose up, progressively reduced to 20\u00b0 at low speed.",
                "30\u00b0 nose up.",
                "There is no limit."
            ],
            "answer": 1
        },
        {
            "id": 90,
            "question": "What information is supplied by the IR's and displayed on the PFD?",
            "options": [
                "Attitude",
                "Flight path vector",
                "All of the answers are correct.",
                "Track"
            ],
            "answer": 2
        },
        {
            "id": 91,
            "question": "Which of the following controls and monitors flaps and slats?",
            "options": [
                "Wing Tip Brakes (WTB)",
                "Flap Augmentation Computer (FAC)",
                "Slat Flap Control Computers (SFCC)",
                "Elevator Aileron Computer (ELAC)"
            ],
            "answer": 2
        },
        {
            "id": 92,
            "question": "How many Basic Modes are there on the A320 Ground Proximity Warning System (GPWS)?",
            "options": [
                "4",
                "5",
                "2",
                "3"
            ],
            "answer": 1
        },
        {
            "id": 93,
            "question": "Where is the thrust reduction altitude found and is the number always the same?",
            "options": [
                "PROG page of the MCDU. It can be modified in order to meet constraints.",
                "TAKE OFF PERF page of the MCDU (it can be modified).",
                "TAKE OFF PERF page of the MCDU. It cannot be modified.",
                "Column four, row three of the FMA. It will always be 1500 ft. AGL."
            ],
            "answer": 1
        },
        {
            "id": 94,
            "question": "Once the crewmember has completed viewing a specific system, what is the correct procedure for clearing the screen and returning it to a normal presentation?",
            "options": [
                "None of the answers are correct.",
                "It goes away by itself.",
                "Press the respective system push button again.",
                "Press CLR on the ECAM control panel."
            ],
            "answer": 2
        },
        {
            "id": 95,
            "question": "What is the maximum Zero fuel weight on A320?",
            "options": [
                "64 000 kg.",
                "61 000 kg.",
                "61 900 kg.",
                "59 500 kg."
            ],
            "answer": 1
        },
        {
            "id": 96,
            "question": "The pneumatic system supplies high-pressure air for: High-pressure air takes its sources from:",
            "options": [
                "All of the answers are correct.",
                "FWD and AFT cargo heating.",
                "Hydraulic reservoir pressurization.",
                "Water pressurization."
            ],
            "answer": 0
        },
        {
            "id": 97,
            "question": "What is true of the Load Factor protection for the A320?",
            "options": [
                "It is also available in Alternate Law.",
                "Limits are +2.5 g to -1 g for clean configuration.",
                "All of the answers are correct.",
                "Limits are +2.0 g to 0 g for other configuration."
            ],
            "answer": 2
        },
        {
            "id": 98,
            "question": "What is the maximum tire speed on the ground?",
            "options": [
                "215 kt.",
                "170 kt.",
                "210 kt.",
                "195 kt."
            ],
            "answer": 3
        },
        {
            "id": 99,
            "question": "Can the autopilot be used for a single engine approach and Autoland?",
            "options": [
                "Yes",
                "No"
            ],
            "answer": 0
        },
        {
            "id": 100,
            "question": "With flaps full, what is the limiting speed?",
            "options": [
                "215kts",
                "177kts",
                "200kts",
                "185kts"
            ],
            "answer": 1
        }
    ]
};

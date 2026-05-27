import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - LANDING GEAR - 02",
  questions: [
    {
      id: 1,
      question: "Maximum altitude at which the landing gear may be extended",
      options: ["25 000 ft", "20 000 ft", "16 000 ft", "There is no such limitation"],
      answer: 3,
    },
    {
      id: 2,
      question: "Maximum speed for landing gear retraction is",
      options: ["220 kts", "200 kts", "235 kts", "250 kts"],
      answer: 0,
    },
    {
      id: 3,
      question:
        "Maximum speed at which the landing gear may be extended (VLO extension)",
      options: ["250 kt", "220 kts", "260 kts"],
      answer: 0,
    },
    {
      id: 4,
      question:
        "If you have to keep the gears down due Brakes HOT after airborne, the maximum speed with landing gear extended (VLE) is",
      options: ["280 kts / M.67", "260 kts / M.65", "300 kts / M.70", "320 kts / M.72"],
      answer: 0,
    },
    {
      id: 5,
      question: "What is the maximum tyre ground speed",
      options: ["195 kts", "185 kts", "205 kts", "225 kts"],
      answer: 0,
    },
    {
      id: 6,
      question:
        "Which hydraulic system(s) are required to operate the landing gear system?",
      options: ["Green", "Blue", "Yellow and Blue", "Green and Yellow"],
      answer: 0,
    },
    {
      id: 7,
      question: "Landing gear operation is inhibited at speeds",
      options: [
        "Above 260 knots",
        "Below 100 knots",
        "below 100 knots",
        "Above 250 knots",
      ],
      answer: 0,
    },
    {
      id: 8,
      question:
        "Which ADIRS close the safety valve of the green hydraulic supply when speed is > 260 kts.",
      options: ["ADIRS 1 or 3", "ADIRS 1 & 2", "ADIRS 2 & 3", "ADDIRS 2 or 3"],
      answer: 0,
    },
    {
      id: 9,
      question: "How do you manually extend the landing gear?",
      options: [
        "Lift the red handle and turn clockwise 3 turns",
        "Lift the red handle and turn anticlockwise 4 turns",
        "Lift the red handle and turn anticlockwise a minimum of 2 turns",
        "Lift the red handle and turn clockwise a minimum of 4 turns",
      ],
      answer: 0,
    },
    {
      id: 10,
      question:
        "What other systems will be become inoperative, if the Landing Gear was gravity extended using the hand crank on the center pedestal",
      options: ["Nothing", "Nose wheel steering and auto braking", "Anti-skid and auto braking", "Nose wheel steering and auto braking"],
      answer: 0,
    },
    {
      id: 11,
      question: "When landing gear is extended with gravity",
      options: [
        "All of the above are correct",
        "There is no effect on the Anti-skid system",
        "There is no effect on the Nose-wheel Steering System",
        "L/G doors remain open",
      ],
      answer: 0,
    },
    {
      id: 12,
      question: "The gear doors remain open after a manual extension",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 13,
      question: "Main and nose wheel bays are:",
      options: ["Unpressurised", "Pressurised", "Conditioned", "Different, with the mains being unpressurised and the nose pressurised"],
      answer: 0,
    },
    {
      id: 14,
      question:
        "How is the undercarriage normally locked down on a down selection?",
      options: [
        "By a mechanical lock and overcenter lock",
        "By a mechanical loch and hydraulic pressure",
        "By a mechanical lock and locking pins with flags",
        "By a hydraulic lock with a mechanical locking pin",
      ],
      answer: 0,
    },
    {
      id: 15,
      question:
        "After the failure of both the LGCIUs, when the L/G has been extended by gravity",
      options: [
        "L/G position indications are available on the LDG control panel provided the LGCIU 1 is electrically supplied",
        "L/G position indications are lost",
        "L/G position indications are lost only on the LDG control panel",
        "L/G position indications are available on the ECAM WHEEL Page",
      ],
      answer: 0,
    },
    {
      id: 16,
      question: "Landing gear indicator panel UNLK light illuminates red if",
      options: [
        "Gear is not locked in selected position",
        "Gear is extended by gravity and doors are not closed",
        "Gear is extended normally and doors are not closed",
        "Gear is not selected down by 1,000 ft RA",
      ],
      answer: 0,
    },
    {
      id: 17,
      question:
        "After selecting the gears down, if one UNLK indication remains on, the landing gear position can be confirmed using the WHEEL SD page (information from LGCIU 1 & 2). Only one green triangle on each landing gear is sufficient to confirm that the landing gear is down locked",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 18,
      question:
        "During the approach you get master warning and ECAM “L/G GEAR NOT DOWNLOCKED”.",
      options: [
        "All are correct",
        "This indicates that one gear is not down locked when L/Gear selected down",
        "This is associated with “UNLK light” on Gear Indication panel",
        "WHEEL Page will also appear on S/D",
      ],
      answer: 0,
    },
    {
      id: 19,
      question:
        "During the approach if you get master warning and ECAM “L/G GEAR NOT DOWNLOCKED”, this indicates that one gear is not down locked when L/Gear selected down.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 20,
      question: "The landing gear indicator panel receives the electrical signal from",
      options: ["LGCIU 1", "BSCU", "LGCIU 2", "LGCIU1or LGCIU 2"],
      answer: 0,
    },
    {
      id: 21,
      question: "If the gears are up , the warning given to the pilot will be a",
      options: ["Horn", "Continuous Bell", "Buzzer", "Stick Shaker"],
      answer: 0,
    },
    {
      id: 22,
      question: "The red arrow, near the landing gear lever illuminates when",
      options: [
        "Landing gear is not down locked in approach configuration",
        "Landing gear is not up locked after retraction",
        "Landing gear is in abnormal position",
        "Landing gear is in transit",
      ],
      answer: 0,
    },
    {
      id: 23,
      question:
        "During the approach you get master warning and ECAM “L/G GEAR NOT DOWN” along with RED ARROW on L/Gear selector lever",
      options: [
        "All statements are correct",
        "This is a spurious if at least one green triangle is displayed on ECAM WHEEL PAGE.",
        "This is spurious if LDG GEAR DN green appears on Landing Memo.",
        "To cancel this warning, you have to press EMER CANC p/b",
      ],
      answer: 0,
    },
    {
      id: 24,
      question:
        "Which LGCIU supplies signal to L/G indication panel, if it is electrically supplied?",
      options: [
        "Only LGCIU No.1",
        "Only LGCIU No.2",
        "The operating LGCIU",
        "Normally LGCIU 1, but if No. 1 fails then LGCIU 2",
      ],
      answer: 0,
    },
    {
      id: 25,
      question: "When does the LGCIU computer change-over take place?",
      options: [
        "Both (B) and (C) are correct",
        "If operating LGCIU fails, the other LGCIU takes over",
        "Automatically, on completion of the each retraction cycle",
        "Automatically, on completion of each extension cycle",
      ],
      answer: 0,
    },
    {
      id: 26,
      question:
        "On the ECAM WHEEL Page, there are two triangles for each landing gear. What do they represent?",
      options: [
        "Each triangle represents the position of L/G, detected by one of the two LGCIU systems",
        "Each triangle represents one wheel on the gear.",
        "Each triangle represents one of the braking systems available for that gear",
        "The front triangle indicates the position of that gear and the back triangle indicates the status of the brakes for that gear",
      ],
      answer: 0,
    },
    {
      id: 27,
      question:
        "On ECAM WHEEL page, a green triangle means LGCIU detects L/Gear is down locked.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 28,
      question: "On ECAM WHEEL page, a Red triangle means",
      options: [
        "One LGCIU has detected that L/Gear is in transit",
        "One LGCIU has detected that L/Gear not down locked",
        "One LGCIU has failed",
      ],
      answer: 0,
    },
    {
      id: 29,
      question:
        "On ECAM WHEEL page, an amber cross in place of a triangle means:",
      options: [
        "The affected LGCIU has failed",
        "The affected LGCIU has detected L/Gear not down locked.",
        "The affected LGCIU has detected L/Gear in transit",
        "There will never be amber cross on ECAM WHEEL page",
      ],
      answer: 0,
    },
    {
      id: 30,
      question:
        "The maximum degrees of nosewheel steering available when using the handwheel is:",
      options: ["+/- 75", "+/- 60", "+/- 95", "+/- 105"],
      answer: 0,
    },
    {
      id: 31,
      question: "Nose wheel steering by rudder pedals is limited to",
      options: [
        "Maximum +/- 6 degrees depending on aircraft speed",
        "+/- 6 degrees under all conditions",
        "+/- 75 degrees",
        "+/- 90 degrees",
      ],
      answer: 0,
    },
    {
      id: 32,
      question:
        "On the E/WD, you notice the NW STRG DISC memo. What does it mean?",
      options: [
        "The nose wheel steering has been disconnected by ground personnel",
        "A failure in the nose wheel steering system has been detected",
        "There is a discrepancy between the two nose wheel steering handwheel positions",
        "The nose wheel steering computer has finished its self test",
      ],
      answer: 0,
    },
    {
      id: 33,
      question:
        "During pushback, you start engine #2. You observe the NW STRG DISC memo has changed to amber. Why?",
      options: [
        "The memo has become amber because one engine is running",
        "The NW STRG disconnect mechanism has failed",
        "The yellow hydraulic system is now pressurized and the amber caption is a warning not to move the handwheel",
        "The nose wheel steering is being reconnected by ground personnel. It is amber because the pin is removed",
      ],
      answer: 0,
    },
    {
      id: 34,
      question: "Which hydraulic system supplies pressure to the nose wheel steering?",
      options: ["Yellow", "Green", "Blue", "Green and Blue"],
      answer: 0,
    },
    {
      id: 35,
      question: "Nose wheel steering is controlled by",
      options: ["BSCU", "LGCIU 1", "LGCIU 2", "LGCIU 1 or 2"],
      answer: 0,
    },
    {
      id: 36,
      question: "In case of WHEEL N/W STRG FAULT when in flight",
      options: [
        "All are correct",
        "If this is associated with L/G SHOCK ABSORBER FAULT, nose wheel may be at max deflection and delay touchdown as long as possible",
        "Automatic roll out is not permitted",
        "You will see N/W STEERING label on ECAM WHEEL page",
      ],
      answer: 0,
    },
    {
      id: 37,
      question: "In case of WHEEL N/W STRG FAULT on ground",
      options: [
        "Both {C} & {D} are correct",
        "If you get this, once taxied out, you have to do BSCU RESET procedure & if reset is successful, you can continue the flight",
        "If you get this, once taxied out, you have to do BSCU RESET procedure & if reset is successful, you have to still go back to the gate for troubleshooting",
        "Before departure it is NO DISPATCH as per MEL",
      ],
      answer: 0,
    },
    {
      id: 38,
      question: "Hand wheel and pedals are operated simultaneously",
      options: [
        "BSCU transforms these orders into nose wheel steering angle (signals are mathematically added)",
        "Hand wheel has priority",
        "Pedals have priority (depending on speed)",
        "Hand wheel input will not be affected by pedals.",
      ],
      answer: 0,
    },
    {
      id: 39,
      question: "When both hand wheels are operated simultaneously, the signals",
      options: [
        "Are algebraically added",
        "From the first pilot acting on his hand wheel have priority",
        "Coming from the captain have priority",
        "From the F/O have priority",
      ],
      answer: 0,
    },
    {
      id: 40,
      question:
        "What happens to steering if Captain side rudder pedal DISC p/b is pressed",
      options: [
        "Nose wheel steering by rudder pedal is lost on both sides",
        "Nose wheel steering by rudder pedal on Captain side is lost",
        "Nose wheel steering by rudder pedal on F/O side is lost",
        "Nose wheel steering and rudder pedal steering are both lost",
      ],
      answer: 0,
    },
    {
      id: 41,
      question:
        "The operating principle of an anti-skid system is such that the Brake Release signals are given and brake pressure will be",
      options: [
        "Decreased on the slower turning wheels",
        "Decreased on the faster turning wheels",
        "Increased on the slower turning wheels",
        "Increased on the faster turning wheels",
      ],
      answer: 0,
    },
    {
      id: 42,
      question: "The anti-skid system is used",
      options: [
        "For both Take Off and Landing runs",
        "For Take Off on icy runways",
        "On Landing runs only",
        "On Take Off runs only",
      ],
      answer: 0,
    },
    {
      id: 43,
      question: "The antiskid deactivates when ground speed is less than",
      options: ["20 kts", "10 kts", "25 kts", "30 kts"],
      answer: 0,
    },
    {
      id: 44,
      question:
        "From which device does the BSCU get the information to regulate the brake pressure?",
      options: [
        "Both C and D",
        "From a hydraulic pressure sensor",
        "From the ADIRU, corrected to ground speed",
        "From a wheel speed sensor, called as Tachometer",
      ],
      answer: 0,
    },
    {
      id: 45,
      question: "A wheel brake anti-skid unit is sensitive to",
      options: [
        "Angular deceleration",
        "Hydraulic system fluid pressure",
        "Aircraft speed",
        "Hydraulic system fluid pressure, and temperature",
      ],
      answer: 0,
    },
    {
      id: 46,
      question: "The antiskid system gets its reference speed from",
      options: ["The ADIRS", "A wheel tachometer", "The LGCIU's", "The BSCU's"],
      answer: 0,
    },
    {
      id: 47,
      question: "The principle of the anti-skid is",
      options: [
        "Comparing wheel speeds with aircraft reference speed",
        "Comparing the speed difference between the four wheels",
        "Comparing wheel speeds between left and right landing gear",
        "Comparing left and right wheel speeds on the same landing gear",
      ],
      answer: 0,
    },
    {
      id: 48,
      question: "With the failure of all 3 ADIRS, is antiskid available",
      options: ["Yes", "No"],
      answer: 0,
    },
    {
      id: 49,
      question: "Each main wheel has an antiskid brake.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 50,
      question: "What is required to arm the auto brakes?",
      options: [
        "Green hydraulic pressure available, anti-skid available, no failures in the braking system and at least one ADIRS is functioning",
        "Landing gear lever selected down and selection of an auto braking rate",
        "Both are correct",
      ],
      answer: 0,
    },
    {
      id: 51,
      question: "Auto brake may be armed with the parking brake on",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 52,
      question: "Auto brakes, if selected, will only be activated by",
      options: [
        "The ground spoiler extension command",
        "The wheels spinning up.",
        "The struts being compressed",
        "The brake pedals being depressed",
      ],
      answer: 0,
    },
    {
      id: 53,
      question:
        "The autobrake system modulates hydraulic pressure to the brakes to obtain...",
      options: [
        "A constant deceleration during the landing roll",
        "A decreasing deceleration during the landing roll",
        "A constant acceleration during the take=off roll",
        "An increasing deceleration during the landing roll",
      ],
      answer: 0,
    },
    {
      id: 54,
      question:
        "The green DECEL light on the Autobrake switch illuminates when the actual airplane deceleration corresponds to % of the selected rate",
      options: ["80%", "90%", "92%", "95%"],
      answer: 0,
    },
    {
      id: 55,
      question: "What is indicated by the auto-brake DECEL lights?",
      options: [
        "Airplane deceleration is 80% of selected rate",
        "Airplane deceleration is 25% of selected rate",
        "Airplane deceleration is 50% of selected rate",
        "Airplane deceleration is 100% of selected rate",
      ],
      answer: 0,
    },
    {
      id: 56,
      question: "Autobraking is initiated by",
      options: [
        "Ground spoilers extension",
        "Reverse thrust selection",
        "Nose gear oleo compression",
        "Main gear oleo compression",
      ],
      answer: 0,
    },
    {
      id: 57,
      question:
        "Max braking has been selected. Takeoff being aborted, engines in reverse, you have forgotten to arm the ground spoilers. Is autobrake activated?",
      options: [
        "Yes, provided rejection is performed if a/c speed was above 72 kts",
        "No because spoilers will not deploy if not armed",
        "Yes, but only if Yellow hydraulic pressure is available",
        "Yes, because spoilers will still deploy",
      ],
      answer: 0,
    },
    {
      id: 58,
      question:
        "Rejecting the take-off at 65 kts, which facilities are not available",
      options: [
        "Ground spoilers and auto brakes",
        "Auto brakes and manual brakes",
        "Manual brakes and thrust reversers",
        "Thrust reversers only",
      ],
      answer: 0,
    },
    {
      id: 59,
      question: "How can the brake accumulator be re-pressurized?",
      options: [
        "With the yellow electric hydraulic pump",
        "With the blue electric hydraulic pump",
        "Both are correct",
      ],
      answer: 0,
    },
    {
      id: 60,
      question:
        "You are ready to taxi. You apply the toe brakes on the rudder pedals and release the PARK BRK. The BRAKES pressure falls to zero. What should you do?",
      options: [
        "Nothing as this is normal. The BRAKES pressure indicator only indicates alternate (yellow) brake pressure",
        "This should not happen and you must assume that the BRAKES pressure indicator has failed",
        "You must re-apply the PARK BRK and call for maintenance personnel as the main system pressure has failed",
        "The indication is normal because once the AUTO BRK is set to MAX the BRAKES indicator is by- passed.",
      ],
      answer: 0,
    },
    {
      id: 61,
      question:
        "What system pressure does the ACCU PRESS and BRAKES pressure indicator indicate?",
      options: [
        "Yellow brake accumulator and yellow brake system pressure to the left and right brakes",
        "Yellow brake accumulator and green brake system pressure to the left and right brakes",
        "Yellow brake accumulator and green or yellow brake system pressure to the left and right brakes",
        "Blue brake accumulator and green brake system pressure to the left and right brakes",
      ],
      answer: 0,
    },
    {
      id: 62,
      question:
        "After taxi out, when you do the brake check, you see full deflection on the triple pressure indicator",
      options: [
        "It means Normal brakes are lost and requires maintenance action",
        "It is normal. TRIPPLE PRESS INDICATOR must show full scale deflection to show that brakes are ok.",
      ],
      answer: 0,
    },
    {
      id: 63,
      question:
        "The normal brake system uses hydraulic pressure and the alternate brake system uses hydraulic pressure backed up by the hydraulic brake accumulator",
      options: ["Green – Yellow", "Green – Blue", "Yellow – Blue", "Yellow - Green"],
      answer: 0,
    },
    {
      id: 64,
      question:
        "The reason for fitting thermal plugs to aircraft wheels is that they",
      options: [
        "Release air from the tyre in case of overheating.",
        "Release air from the tyre in case of overpressure.",
        "Prevent the brakes from overheating",
        "Prevent heat transfer from the brake disks to the tyres",
      ],
      answer: 0,
    },
  ],
};
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - LANDING GEAR - 01",
  questions: [
    {
      id: 1,
      question: "Which hydraulic system(s) supply pressure to the landing gear system?",
      options: ["Green", "Blue", "Yellow and Blue", "Green and Blue."],
      answer: 0,
    },
    {
      id: 2,
      question: "The braking modes are:",
      options: [
        "Green with anti-skid, Yellow without anti-skid, Parking brake.",
        "Green or Yellow with anti-skid, Yellow without anti-skid, parking brake",
        "Green with or without anti-skid, Blue without anti-skid",
      ],
      answer: 1,
    },
    {
      id: 3,
      question:
        "If the brake system automatically transitions to alternate brakes with the A/SKID & N/W STRG switch in the ON position, which of the following will be available?",
      options: [
        "Auto brakes and anti-skid.",
        "Only auto brakes.",
        "Brakes, auto brakes, anti-skid.",
        "Anti-skid.",
      ],
      answer: 3,
    },
    {
      id: 4,
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
      id: 5,
      question: "Landing Gear position is indicated by:",
      options: [
        "One panel on center instrument panel, one panel on overhead panel",
        "ECAM only",
        "One panel on center instrument panel and ECAM",
        "One panel on center instrument panel, ECAM, visual means on the wing.",
      ],
      answer: 2,
    },
    {
      id: 6,
      question:
        "If the landing gear was gravity extended using the hand crank on the center pedestal, landing gear position must be verified through:",
      options: [
        "The landing gear viewers.",
        "The landing gear indications depicted on the ECAM and, if available, the center panel LDG GEAR indicator panel lights.",
        "Both are correct.",
      ],
      answer: 1,
    },
    {
      id: 7,
      question: "Landing gear operation is inhibited at speeds:",
      options: [
        "Below 100 knots.",
        "Above 260 knots +/- 5 knots.",
        "below 100 knots and above 260 knots.",
        "Above 250 knots.",
      ],
      answer: 1,
    },
    {
      id: 8,
      question: "Can the gear be extended above 260 kts if necessary?",
      options: [
        "Never.",
        "Yes, but only manually( L/G GRAVITY EXT)",
        "Yes, but the ultimate limit is 285 kt CAS",
      ],
      answer: 1,
    },
    {
      id: 9,
      question: "How can the brake accumulator be re-pressurized?",
      options: [
        "With the yellow electric hydraulic pump.",
        "With the blue electric hydraulic pump.",
        "Both are correct.",
      ],
      answer: 0,
    },
    {
      id: 10,
      question:
        "You are ready to taxi. You apply the toe brakes on the rudder pedals and release the PARK BRK. The BRAKES pressure falls to zero. What should you do?",
      options: [
        "This should not happen and you must assume that the BRAKES pressure indicator has failed.",
        "Nothing as this is normal. The BRAKES pressure indicator only indicates alternate (yellow) brake pressure.",
        "You must re-apply the PARK BRK and call for maintenance personnel as the main system pressure has failed.",
        "The indication is normal because once the AUTO BRK is set to MAX the BRAKES indicator is by-passed.",
      ],
      answer: 1,
    },
    {
      id: 11,
      question:
        "The antiskid deactivates when ground speed is less than ______.",
      options: ["10 kts.", "20 kts.", "25 kts.", "30 kts."],
      answer: 1,
    },
    {
      id: 12,
      question:
        "If the BSCU detects a brake system malfunction in flight with the A/SKID & N/W STRG switch in the ON position:",
      options: [
        "The crew will be notified with an ECAM message after touchdown if the brake system does malfunction.",
        "The crew will be notified with an ECAM message.",
        "The crew must manually select alternate brakes.",
        "All of the above.",
      ],
      answer: 1,
    },
    {
      id: 13,
      question: "What is required to arm the auto brakes?",
      options: [
        "Green hydraulic pressure available, anti-skid, no failures in the braking system.",
        "Landing gear lever selected down and selection of an autobraking rate.",
        "Both are correct.",
      ],
      answer: 0,
    },
    {
      id: 14,
      question: "What does each turn of the gravity gear extension handle do?",
      options: [
        "Open gear doors, unlock gear, drop gear.",
        "Open gear doors, drop gear, shut doors.",
        "Shutoff hydraulic pressure, open doors, unlock gear.",
        "Open gear doors, shutoffs hydraulics, unlock gear, drop gear.",
      ],
      answer: 2,
    },
    {
      id: 15,
      question: "How do you manually extend the landing gear?",
      options: [
        "Lift the red handle and turn anticlockwise 4 turns.",
        "Lift the red handle and turn anticlockwise a minimum of 2 turns.",
        "Lift the red handle and turn clockwise a minimum of 4 turns.",
        "Lift the red handle and turn clockwise by 3 turns.",
      ],
      answer: 3,
    },
    {
      id: 16,
      question: "Auto brake may be armed with the parking brake on.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 17,
      question:
        "Can normal landing gear operation be restored after a gravity extension if green hydraulic pressure is available?",
      options: [
        "Restoration is always possible.",
        "It may be possible if the gravity extension was not caused by a failure of the landing gear mechanism.",
        "No, only maintenance can restore normal operation.",
      ],
      answer: 1,
    },
    {
      id: 18,
      question:
        "Auto brakes, if selected, will only be activated by:",
      options: [
        "The wheels spinning up.",
        "The struts being compressed.",
        "The brake pedals being depressed.",
        "The ground spoiler extension command.",
      ],
      answer: 3,
    },
    {
      id: 19,
      question:
        "There are two triangles for each gear on the ECAM WHEEL page. What do they represent?",
      options: [
        "Each triangle represents one wheel on the gear.",
        "Each triangle represents the position detected by one of the two computers systems.",
        "Each triangle represents one of the braking systems available for that gear.",
        "The front triangle indicates the position of that gear and the back triangle indicates the status of the brakes for that gear.",
      ],
      answer: 1,
    },
    {
      id: 20,
      question:
        "What system pressure does the ACCU PRESS and BRAKES pressure indicator indicate?",
      options: [
        "Yellow brake accumulator and yellow brake system pressure to the left and right brakes.",
        "Yellow brake accumulator and green brake system pressure to the left and right brakes.",
        "Yellow brake accumulator and green or yellow brake system pressure to the left and right brakes.",
        "Blue brake accumulator and green brake system pressure to the left and right brakes.",
      ],
      answer: 0,
    },
    {
      id: 21,
      question:
        "The normal brake system uses _____ hydraulic pressure and the alternate brake system uses _____ hydraulic pressure backed up by the hydraulic brake accumulator",
      options: ["Green – Blue", "Yellow – Blue", "Yellow – Green", "Green - Yellow."],
      answer: 3,
    },
    {
      id: 22,
      question:
        "Wheel page of ECAM: if you see a green arc shown over a wheel indication:",
      options: [
        "It marks the hottest brake with a temperature of more than 100°C.",
        "It indicates an abnormal high temperature.",
        "The A/SKID system is automatically releasing the pressure of that brake.",
        "The L/G control system has detected a low tire profile.",
      ],
      answer: 0,
    },
    {
      id: 23,
      question:
        "Nose wheels and main wheels have fusible plugs that prevent the tires from bursting if they overheat.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 24,
      question:
        "With the A/SKID & N/W STRG switch in the ON position, if the BSCU detects a brake system malfunction and/or normal braking is not available",
      options: [
        "The crew will be notified with an ECAM message only if after touchdown the brake system does actually malfunction.",
        "Transition to the alternate brake system is automatic.",
      ],
      answer: 1,
    },
    {
      id: 25,
      question:
        "You have just set the parking brake handle to ON. Is it still possible to check the main brake system using the toe brakes?",
      options: [
        "Yes. As soon as you press the brake pedals the BRAKES indicator will read main system pressure.",
        "No. It is not possible to press hard enough to obtain an accurate reading.",
        "No. When the PARK BRK is set, the other braking modes are deactivated.",
      ],
      answer: 2,
    },
    {
      id: 26,
      question:
        "If the accumulator on the alternate brake system is your only source pressure, which of the following will be available?",
      options: [
        "Auto brakes and antiskid.",
        "Antiskid.",
        "Seven applications of the brake pedals.",
        "Three applications of the brake pedals",
      ],
      answer: 2,
    },
    {
      id: 27,
      question: "The gear doors remain open after a manual extension.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 28,
      question:
        "The steering handwheels, which are interconnected, can steer the nose wheel up to _____ in either direction.",
      options: ["55°.", "65°", "75°", "90°"],
      answer: 2,
    },
    {
      id: 29,
      question:
        "The green DECEL light on the autobrake pushbutton illuminates when the actual airplane deceleration corresponds to what percentage of the selected rate?",
      options: ["80%", "90%", "92%", "95%"],
      answer: 0,
    },
    {
      id: 30,
      question: "Each main wheel has an antiskid brake.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 31,
      question:
        "The parking brake accumulator is designed to maintain the parking pressure for at least ______.",
      options: ["6 hours.", "12 hours.", "18 hours.", "24 hours."],
      answer: 1,
    },
    {
      id: 32,
      question: "The autobrake will arm if at least one ADIRS is functioning",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 33,
      question: "What happens to the other brake modes when parking brakes are applied?",
      options: [
        "There is no change.",
        "All other braking modes and antiskid are deactivated.",
        "Antiskid mode only is deactivated.",
      ],
      answer: 1,
    },
    {
      id: 34,
      question: "Maximum speed for landing gear retraction is (VLO retraction):",
      options: ["220 kts / M 0.60", "220 kts / M 0.54", "235 kts / M0.54", "250 kts / M 0.60"],
      answer: 1,
    },
    {
      id: 35,
      question: "Nose wheel steering is controlled by:",
      options: ["LGCIU 1.", "BSCU", "LGCIU 2", "LGCIU 1 or 2"],
      answer: 1,
    },
    {
      id: 36,
      question: "When is pressure in the nose wheel steering system shut off?",
      options: [
        "With towing lever in towing position or both engines are shut down or the A/SKID & N/W STRG switch is OFF",
        "During ground towing with one engine shut down or when aircraft speed is >60 kts",
        "When the aircraft is on the ground with speed above 100 kts",
      ],
      answer: 0,
    },
    {
      id: 37,
      question: "Hand wheel and pedals are operated simultaneously:",
      options: [
        "Hand wheel has priority",
        "Pedals have priority (depending on speed)",
        "BSCU transforms these orders into nose wheel steering angle (signals are mathematically added)",
        "Hand wheel input will not be affected by pedals",
      ],
      answer: 2,
    },
    {
      id: 38,
      question: ": Nose wheel steering by rudder pedals is limited to:",
      options: [
        "+/- 6 degrees under all conditions",
        "+/- 75 degrees",
        "+/- 90 degrees",
        "Maximum +/- 6 degrees depending on aircraft speed",
      ],
      answer: 3,
    },
    {
      id: 39,
      question: ": When both hand wheels are operated simultaneously, the signals:",
      options: [
        "From the first pilot acting on his hand wheel have priority",
        "Coming from the captain have priority",
        "Are algebraically added",
        "From the F/O have priority",
      ],
      answer: 2,
    },
    {
      id: 40,
      question: "Nose wheel steering is available:",
      options: [
        "Aircraft speed below 70 kts, both engines (required to be) running, Towing lever in normal position, aircraft on ground.",
        "Aircraft speed below 70 kts, both engines (required to be) running, Towing lever in normal position, aircraft on ground or in the air",
        "Aircraft speed below 70 kts, one engine (required to be) running, Towing lever in normal position, aircraft on ground.",
        "Aircraft speed below 70 kts, both engines (required to be) running), Towing lever in standby position, aircraft on ground.",
      ],
      answer: 2,
    },
    {
      id: 41,
      question:
        "After T/O the left main landing gear shock absorber is stuck in the compressed position.",
      options: [
        "The gear can be retracted under all circumstances",
        "The gear cab be retracted provided the nose gear is centered",
        "The gear cannot be retracted; gear lever is blocked (interlock mechanism)",
        "The gear can be retracted once the nose wheel steering is centered",
      ],
      answer: 2,
    },
    {
      id: 42,
      question:
        "Is it possible (system wise) to lower the gear by gravity above 260 kts?",
      options: [
        "Yes",
        "No",
        "Yes, but only if green hydraulics available",
        "Yes, but only if yellow hydraulic available",
      ],
      answer: 0,
    },
    {
      id: 43,
      question:
        "System page “Wheel”. L/G position indicators (triangles), first line shows green triangles, second line behind shows amber crosses. Is the landing gear down?",
      options: [
        "Yes",
        "No",
        "Right hand gear only is down",
        "Left hand gear only is down.",
      ],
      answer: 0,
    },
    {
      id: 44,
      question:
        "During the approach you get master warning and ECAM “Gear Not Down”. The reason is:",
      options: [
        "Landing gear is not down locked and flaps 3 or full and both radio altimeters failed",
        "Landing gear is not down locked, flaps at 3 and radio height lower than 750 ft",
        "All of the above",
      ],
      answer: 2,
    },
    {
      id: 45,
      question: "The alternate brake system uses:",
      options: [
        "The Yellow hydraulic system",
        "The hydraulic accumulator",
        "The Yellow hydraulic system backed up by the hydraulic accumulator",
        "The Blue electric pump.",
      ],
      answer: 2,
    },
    {
      id: 46,
      question: "The antiskid system gets its reference speed from:",
      options: ["The ADIRS", "A wheel tachometer", "The LGCIU's", "The BSCU's"],
      answer: 0,
    },
    {
      id: 47,
      question: "The principle of the anti-skid is:",
      options: [
        "Comparing the speed difference between the four wheels",
        "Comparing wheel speeds with aircraft reference speed",
        "Comparing wheel speeds between left and right landing gear",
        "Comparing left and right wheel speeds on the same landing gear.",
      ],
      answer: 1,
    },
    {
      id: 48,
      question: "Following failure of all 3 ADIRS, is antiskid available?",
      options: ["Yes", "No", "Only with Yellow hydraulics", "Only with Green hydraulics"],
      answer: 0,
    },
    {
      id: 49,
      question: "Alternate braking using the Yellow system. Autobrake is:",
      options: [
        "Lost",
        "Still available with anti-skid",
        "Still available without anti-skid",
        "Still available provided Yellow system hydraulic pressure is available.",
      ],
      answer: 0,
    },
    {
      id: 50,
      question: "Autobraking is initiated by:",
      options: [
        "Reverse thrust selection",
        "Nose gear oleo compression",
        "Main gear oleo compression",
        "Ground spoilers extension",
      ],
      answer: 3,
    },
    {
      id: 51,
      question:
        ": The brake & Accumulator pressure gauge shows pressure from:",
      options: [
        "The Yellow hydraulic system",
        "The Accumulator only",
        "The Green hydraulic system",
        "Both Yellow brake system and the Brake Accumulator",
      ],
      answer: 3,
    },
    {
      id: 52,
      question:
        "The Hot light on the brake fan pushbutton illuminates when brake temperature reaches:",
      options: ["250 deg C", "300 deg C", "350 deg C", "400 deg C"],
      answer: 1,
    },
    {
      id: 53,
      question:
        "Max braking has been selected. Takeoff being aborted, engines in reverse, you have forgotten to arm the ground spoilers. Is autobrake activated?",
      options: [
        "No because spoilers will not deploy if not armed",
        "Yes, provided speed is less than 72 knots",
        "Yes, but only if Yellow hydraulic pressure is available",
        "Yes, because spoilers will still deploy",
      ],
      answer: 3,
    },
    {
      id: 54,
      question:
        "On wheel page of ECAM, Autobrake is flashing green. What does it mean?",
      options: [
        "Autobrake is disengaged",
        "Autobrake failure",
        "Anti-skid failure",
        "Autobrake in operation",
      ],
      answer: 0,
    },
    {
      id: 55,
      question:
        "On the ramp with APU running, park brake is set on, message on ECAM memo shows Park Brake.",
      options: ["In Green", "In Yellow", "In White", "In White or Yellow"],
      answer: 0,
    },
    {
      id: 56,
      question:
        "The landing gear indicator panel receives the information from micro switches and proximity detectors connected to:",
      options: ["BSCU", "LGCIU 2", "LGCIU 1", "BSCU and LGCIU 2"],
      answer: 2,
    },
    {
      id: 57,
      question:
        "The red arrow, near the landing gear lever illuminates when:",
      options: [
        "Landing gear is not up locked after retraction",
        "Landing gear is in abnormal position",
        "Landing gear is in transit",
        "Landing gear is not down locked in landing configuration",
      ],
      answer: 3,
    },
    {
      id: 58,
      question: "Landing gear indicator panel UNLK light illuminates red if",
      options: [
        "Gear is extended by gravity and doors are not closed",
        "Gear is extended normally and doors are not closed",
        "Gear is not locked in selected position",
        "Gear is not selected down by 1,000 ft RA.",
      ],
      answer: 2,
    },
    {
      id: 59,
      question: "The maximum speed with landing gear extended (VLE) is:",
      options: ["260 kts / M.65", "280 kts / M.67", "300 kts / M.70", "320 kts / M.72"],
      answer: 1,
    },
    {
      id: 60,
      question:
        "Which ADIRS close the safety valve of the green hydraulic supply when speed is > 260 kts.",
      options: ["ADIRS 1 & 2", "ADIRS 1 & 3", "ADIRS 2 & 3", "ADDIRS 2 or 3"],
      answer: 1,
    },
    {
      id: 61,
      question: "What is the maximum tyre speed?",
      options: ["185 kts", "195 kts", "205 kts", "225 kts"],
      answer: 1,
    },
    {
      id: 62,
      question:
        ": As long as the landing gear lever is up a hydraulic safety valve closes to cut off the hydraulic supply to the gear when the airspeed is:",
      options: [
        "Greater than 260 KIAS.",
        "Greater than 230 KIAS.",
        "Less than 260 KIAS.",
        "Less than 230 KIAS",
      ],
      answer: 0,
    },
    {
      id: 63,
      question: "Autobraking is initiated by:",
      options: [
        "Strut compression.",
        "Reverser action.",
        "Ground spoiler extension command.",
      ],
      answer: 2,
    },
    {
      id: 64,
      question:
        "When using the alternate brake system on accumulator pressure only; the accumulator supplies:",
      options: [
        "Partial brakes.",
        "At least seven full brake applications.",
        "Alternate brakes with antiskid.",
      ],
      answer: 1,
    },
    {
      id: 65,
      question:
        "The maximum degrees of nosewheel steering available when using the handwheel is ______.",
      options: ["+/- 60", "+/- 75", "+/- 95", "+/- 105"],
      answer: 1,
    },
    {
      id: 66,
      question:
        "The green DECEL light on the Autobrake switch illuminates when the actual airplane deceleration corresponds to ______ % of the selected rate.",
      options: ["80", "95", "100", "110"],
      answer: 0,
    },
    {
      id: 67,
      question:
        "To extend the landing gear with the Gravity Extension Handcrank requires _______ turns of the handle.",
      options: ["3 counter-clockwise", "2 counter-clockwise", "3 clockwise"],
      answer: 2,
    },
  ],
};
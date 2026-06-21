import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "REVISION TEST 3 (LDG GEAR/ FLIGHT CONTROLS / IND & REC)",
  questions: [
    {
      id: 1,
      question: "On the E/WD, you notice the NW STRG DISC memo. What does it mean?",
      options: [
        "The nose wheel steering has been disconnected by ground personnel.",
        "A failure in the nose wheel steering system has been detected.",
        "There is a discrepancy between the two nose wheel steering handwheel positions",
        "The nose wheel steering computer has finished its self test.",
      ],
      answer: 0,
    },
    {
      id: 2,
      question:
        "If the landing gear was gravity extended using the hand crank on the center pedestal, landing gear position must be verified through:",
      options: [
        "The landing gear viewers.",
        "The landing gear indications depicted on the ECAM and, if available, the center panel LDG GEAR indicator panel lights.",
        "Both are correct.",
      ],
      answer: 1,
      image: [
        "https://cms-cdn.classplus.co/parserImages/e53d351a-8f75-4d08-8a85-a354da4906a1.jpg",
        "https://cms-cdn.classplus.co/parserImages/cb0c2c5f-8860-49d0-affc-903cbb79e1b5.jpg",
      ],
    },
    {
      id: 3,
      question: "How can the brake accumulator be re-pressurized?",
      options: [
        "With the yellow electric hydraulic pump.",
        "With the blue electric hydraulic pump.",
        "Both are correct.",
      ],
      answer: 0,
    },
    {
      id: 4,
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
      id: 5,
      question: "The antiskid deactivates when ground speed is less than ______.",
      options: ["10 kts.", "20 kts.", "25 kts.", "30 kts."],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/a0077952-c3cc-4c59-a5b6-abd8a8873a0f.jpg",
    },
    {
      id: 6,
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
      id: 7,
      question: "What is required to arm the auto brakes?",
      options: [
        "Green hydraulic pressure available, anti-skid, no failures in the braking system.",
        "Landing gear lever selected down and selection of an autobraking rate.",
        "Both are correct.",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/4e027810-be1b-4f85-a1df-f939d960535c.jpg",
    },
    {
      id: 8,
      question: "What does each turn of the gravity gear extension handle do?",
      options: [
        "Open gear doors, unlock gear, drop gear.",
        "Open gear doors, drop gear, shut doors.",
        "Shutoff hydraulic pressure, open doors, unlock gear.",
        "Open gear doors, shutoffs hydraulics, unlock gear, drop gear.",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/a10fbe48-046a-4328-a060-cd5f18ecac16.jpg",
    },
    {
      id: 9,
      question:
        "There are two triangles for each gear on the ECAM WHEEL page. What do they represent?",
      options: [
        "Each triangle represents one wheel on the gear.",
        "Each triangle represents the position detected by one of the two computers systems.",
        "Each triangle represents one of the braking systems available for that gear.",
        "The front triangle indicates the position of that gear and the back triangle indicates the status of the brakes for that gear.",
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/5ddb317d-bccc-4eed-8039-d81ed426926d.jpg",
    },
    {
      id: 10,
      question:
        "Wheel page of ECAM: if you see a green arc shown over a wheel indication:",
      options: [
        "It marks the hottest brake with a temperature of more than 100°C.",
        "It indicates an abnormal high temperature.",
        "The A/SKID system is automatically releasing the pressure of that brake.",
        "The L/G control system has detected a low tire profile.",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/cbc8cfd6-5e18-4183-9daf-4ee9ea9bb292.jpg",
    },
    {
      id: 11,
      question:
        "The steering handwheels, which are interconnected, can steer the nose wheel up to _____ in either direction.",
      options: ["55°.", "65°", "75°", "90°"],
      answer: 2,
    },
    {
      id: 12,
      question:
        "The green DECEL light on the autobrake pushbutton illuminates when the actual airplane deceleration corresponds to what percentage of the selected rate?",
      options: ["80%", "90%", "92%", "95%"],
      answer: 0,
    },
    {
      id: 13,
      question: "What happens to the other brake modes when parking brakes are applied?",
      options: [
        "There is no change.",
        "All other braking modes and antiskid are deactivated.",
        "Antiskid mode only is deactivated.",
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/acb8f779-1c8e-47f2-aca7-ff899469171a.jpg",
    },
    {
      id: 14,
      question: "Hand wheel and pedals are operated simultaneously:",
      options: [
        "Hand wheel has priority",
        "Pedals have priority (depending on speed)",
        "BSCU transforms these orders into nose wheel steering angle (signals are mathematically added)",
        "Hand wheel input will not be affected by pedals",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/b5095ef4-d785-4245-86b5-a366d2ebb16b.jpg",
    },
    {
      id: 15,
      question: ": When both hand wheels are operated simultaneously, the signals:",
      options: [
        "From the first pilot acting on his hand wheel have priority",
        "Coming from the captain have priority",
        "Are algebraically added",
        "From the F/O have priority",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/b0ef3829-6a3e-4794-94c3-551528842f6d.jpg",
    },
    {
      id: 16,
      question: "Nose wheel steering is available:",
      options: [
        "Aircraft speed below 70 kts, both engines (required to be) running, Towing lever in normal position, aircraft on ground.",
        "Aircraft speed below 70 kts, both engines (required to be) running, Towing lever in normal position, aircraft on ground or in the air",
        "Aircraft speed below 70 kts, one engine (required to be) running, Towing lever in normal position, aircraft on ground.",
        "Aircraft speed below 70 kts, both engines (required to be) running), Towing lever in standby position, aircraft on ground.",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/f6e0fe0f-d101-4073-9afd-3163e187d572.jpg",
    },
    {
      id: 17,
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
      id: 18,
      question: "The antiskid system gets its reference speed from:",
      options: ["The ADIRS", "A wheel tachometer", "The LGCIU's", "The BSCU's"],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/4e5e5492-8991-4f07-b4c8-34e0949c8d03.jpg",
    },
    {
      id: 19,
      question: "The Hot light on the brake fan pushbutton illuminates when brake temperature reaches:",
      options: ["250 deg C", "300 deg C", "350 deg C", "400 deg C"],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/07e2238b-75b2-462b-b1bb-21d3d1935b42.jpg",
    },
    {
      id: 20,
      question: "The red arrow, near the landing gear lever illuminates when:",
      options: [
        "Landing gear is not up locked after retraction",
        "Landing gear is in abnormal position",
        "Landing gear is in transit",
        "Landing gear is not down locked in landing configuration",
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/0f685b79-edb4-48df-82f1-5db67233c94a.jpg",
    },
    {
      id: 21,
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
      id: 22,
      question:
        "Which ADIRS close the safety valve of the green hydraulic supply when speed is > 260 kts.",
      options: ["ADIRS 1 & 2", "ADIRS 1 & 3", "ADIRS 2 & 3", "ADDIRS 2 or 3"],
      answer: 1,
    },
    {
      id: 23,
      question: "Main and nose wheel bays are:",
      options: [
        "Unpressurised",
        "Pressurised",
        "Conditioned",
        "Different, with the mains being unpressurised and the nose pressurised",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/8b00de21-d48e-4974-befb-1c2693d6bd98.jpg",
    },
    {
      id: 24,
      question:
        "After the failure of both the LGCIUs, when the L/G has been extended by gravity",
      options: [
        "L/G position indications are available on the LDG control panel provided the LGCIU 1 is electrically supplied",
        "L/G position indications are lost",
        "L/G position indications are lost only on the LDG control panel",
        "L/G position indications are available on the ECAM WHEEL Page",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/b3d3f1c4-444d-4ad1-9aa3-c4823afd7296.jpg",
    },
    {
      id: 25,
      question:
        "During the approach you get master warning and ECAM \"L/G GEAR NOT DOWN\" along with RED ARROW on L/Gear selector lever",
      options: [
        "All statements are correct",
        "This is a spurious if at least one green triangle is displayed on ECAM WHEEL PAGE.",
        "This is spurious if LDG GEAR DN green appears on Landing Memo.",
        "To cancel this warning, you have to press EMER CANC p/b",
      ],
      answer: 0,
      image: [
        "https://cms-cdn.classplus.co/parserImages/b8c02a17-2397-4329-b647-ae1100f24769.jpg",
        "https://cms-cdn.classplus.co/parserImages/09a01a2f-4e6e-4e25-a7f4-ec14ec6dafab.jpg",
        "https://cms-cdn.classplus.co/parserImages/efd5ff77-5c8e-4395-a1f7-3fe75ed0c326.jpg",
      ],
    },
    {
      id: 26,
      question: "When does the LGCIU computer change-over take place?",
      options: [
        "Both (B) and (C) are correct",
        "If operating LGCIU fails, the other LGCIU takes over",
        "Automatically, on completion of the each retraction cycle",
        "Automatically, on completion of each extension cycle",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/14577737-d4e7-42ca-8d86-553eeb483f0f.jpg",
    },
    {
      id: 27,
      question:
        "On the ECAM WHEEL Page, there are two triangles for each landing gear. What do they represent?",
      options: [
        "Each triangle represents the position of L/G, detected by one of the two LGCIU systems",
        "Each triangle represents one wheel on the gear.",
        "Each triangle represents one of the braking systems available for that gear",
        "The front triangle indicates the position of that gear and the back triangle indicates the status of the brakes for that gear",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/3bf44b35-3643-48ec-9325-1d8daf14f1ff.jpg",
    },
    {
      id: 28,
      question: "On ECAM WHEEL page, an amber cross in place of a triangle means:",
      options: [
        "The affected LGCIU has failed.",
        "The affected LGCIU has detected L/Gear not down locked.",
        "The affected LGCIU has detected L/Gear in transit",
        "There will never be amber cross on ECAM WHEEL page",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/d76bd5f3-2556-445c-a756-caa8be7a52c3.jpg",
    },
    {
      id: 29,
      question:
        "During pushback, you start engine #2. You observe the NW STRG DISC memo has changed to amber. Why?",
      options: [
        "The memo has become amber because one engine is running",
        "The NW STRG disconnect mechanism has failed",
        "The yellow hydraulic system is now pressurized and the amber caption is a warning not to move the handwheel",
        "The nose wheel steering is being reconnected by ground personnel. It is amber because the pin is removed",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/59a624c2-0637-4482-8ab7-d33a01bc7921.jpg",
    },
    {
      id: 30,
      question: "When both hand wheels are operated simultaneously, the signals",
      options: [
        "Are algebraically added",
        "From the first pilot acting on his hand wheel have priority",
        "Coming from the captain have priority",
        "From the F/O have priority",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/74b3ec37-006a-4aff-87da-ea5b2dd00e30.jpg",
    },
    {
      id: 31,
      question:
        "What happens to steering if Captain side rudder pedal DISC p/b is pressed",
      options: [
        "Nose wheel steering by rudder pedal is lost on both sides",
        "Nose wheel steering by rudder pedal on Captain side is lost",
        "Nose wheel steering by rudder pedal on F/O side is lost",
        "Nose wheel steering and rudder pedal steering are both lost",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/8e24bf33-3cf4-418a-a8e2-1a0603c579d1.jpg",
    },
    {
      id: 32,
      question:
        "The operating principle of an anti-skid system is such that the Brake Release signals are given and brake pressure will be",
      options: [
        "Decreased on the slower turning wheels",
        "Decreased on the faster turning wheels",
        "Increased on the slower turning wheels",
        "Increased on the faster turning wheels",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/f715fb77-32c1-49ee-9849-3e0a019b6822.jpg",
    },
    {
      id: 33,
      question:
        "From which device does the BSCU get the information to regulate the brake pressure?",
      options: [
        "Both C and D",
        "From a hydraulic pressure sensor",
        "From the ADIRU, corrected to ground speed",
        "From a wheel speed sensor, called as Tachometer",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/a4228caf-76cb-4359-84a1-fea7643244de.jpg",
    },
    {
      id: 34,
      question: "The reason for fitting thermal plugs to aircraft wheels is that they",
      options: [
        "Release air from the tyre in case of overheating.",
        "Release air from the tyre in case of overpressure.",
        "Prevent the brakes from overheating",
        "Prevent heat transfer from the brake disks to the tyres",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/81caac33-9de8-4b69-8e73-e20177ae04b7.jpg",
    },
    {
      id: 35,
      question: "When the flaps are extended, the ailerons:",
      options: [
        "Go to the centering mode.",
        "Pitch up 5 degrees.",
        "Droop 5 degrees.",
      ],
      answer: 2,
    },
    {
      id: 36,
      question: "Aileron droop may best be confirmed by checking which of the following?",
      options: [
        "The position of the ailerons on the exterior preflight inspection",
        "The lower ECAMFLT/CTL page.",
        "The position of the flap handle",
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/e5d0b0f5-cae0-456a-ae05-4386889eccd8.jpg",
    },
    {
      id: 37,
      question:
        "Which computer normally commands the operation of the No.2 spoiler surface?",
      options: ["SEC 2", "SEC3", "SEC 1 + 2", "SEC 1 + 3"],
      answer: 1,
      image: [
        "https://cms-cdn.classplus.co/parserImages/148d4734-8f4a-4ee5-af0f-f15c8b903578.jpg",
        "https://cms-cdn.classplus.co/parserImages/fec3178d-58ad-4534-8962-9f5c03ce83d2.jpg",
      ],
    },
    {
      id: 38,
      question:
        "Which computers normally command the operation of the elevators and horizontal stabilizer?",
      options: ["SEC 1", "FAC 1", "ELAC 2"],
      answer: 2,
      image: [
        "https://cms-cdn.classplus.co/parserImages/c80ae903-8682-41d1-a877-40b745818e59.jpg",
        "https://cms-cdn.classplus.co/parserImages/9fdace90-73fb-49e7-a2d0-c611eb705828.jpg",
      ],
    },
    {
      id: 39,
      question:
        "If all the SEC {i.e. SEC 1 +2 +3} computers fail, which of the flt control surfaces lost completely?",
      options: [
        "Spoilers",
        "Ailerons",
        "Elevators",
        "Nothing is lost as A320 is a fly by wire a/c.",
      ],
      answer: 0,
      image: [
        "https://cms-cdn.classplus.co/parserImages/0b458041-6bae-4565-a8a8-93fcce7e01a0.jpg",
        "https://cms-cdn.classplus.co/parserImages/f2b707b0-7a1c-4aec-8f52-d669f42396fb.jpg",
      ],
    },
    {
      id: 40,
      question:
        "If all the ELACs {i.e. ELAC 1 +2} computers fail, which of the flt control surfaces are lost completely?",
      options: ["Elevators", "THS", "Spoilers", "Ailerons"],
      answer: 3,
      image: [
        "https://cms-cdn.classplus.co/parserImages/d7b3240b-1e76-453b-bdaa-74441e206b79.jpg",
        "https://cms-cdn.classplus.co/parserImages/395da174-0dce-4432-aa66-6018bf657fed.jpg",
      ],
    },
    {
      id: 41,
      question: "Mark the correct statement",
      options: [
        "In Normal operation, ELAC 2 controls the elevators. However, in case of a failure in ELAC 2, elevators are controlled by ELAC 1.",
        "In Normal Operation, ELAC 1 controls the elevators. However in case of a failure in ELAC 1, elevators are controlled by ELAC 2.",
      ],
      answer: 0,
      image: [
        "https://cms-cdn.classplus.co/parserImages/610d88e4-f810-4bb6-80c0-4a0af338f879.jpg",
        "https://cms-cdn.classplus.co/parserImages/1a833734-3805-48eb-a5f8-9038874538a6.jpg",
      ],
    },
    {
      id: 42,
      question:
        "If angle of attack protection is active or flaps are in the configuration Full:",
      options: [
        "Speed brake extension is inhibited.",
        "Aileron travelis reduced..",
        "Speed brake extension travel is reduced.",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/56afc0e8-abc9-4bd9-bef4-3df3b0ef3c17.jpg",
    },
    {
      id: 43,
      question: "What does amber SPEED BRAKES mean on lower ECAM?",
      options: [
        "Speed brakes have a fault.",
        "Speed brakes are extended and flap handle is not at 0.",
        "Speed brakes are extended and engines are not at idle.",
        "All of the above",
      ],
      answer: 2,
    },
    {
      id: 44,
      question: "When should the speed brake not be used ?",
      options: [
        "A.If any one spoiler is inoperative",
        "B.If both elevators are faulty",
        "C.As in (b) or if SEC 1 computer fails",
        "D.All the above are correct.",
      ],
      answer: 2,
      image: [
        "https://cms-cdn.classplus.co/parserImages/6ab0111c-7fe4-4ec6-b04d-7b9cb05020e1.jpg",
        "https://cms-cdn.classplus.co/parserImages/d6631a41-65db-40e8-8e0b-87be328a801b.jpg",
        "https://cms-cdn.classplus.co/parserImages/131b27e9-6b29-4c2f-9768-66f3a03dd972.jpg",
      ],
    },
    {
      id: 45,
      question: "If both FAC's fail, what happens to the rudder limiter?",
      options: [
        "It immediately assumes the low speed position.",
        "It freezes at its present position and assumes the low speed position when flaps 1 are selected.",
        "Maximum rudder deflection can be obtained after slats extended.",
        "Maximum rudder deflection can be obtained after flaps extended",
      ],
      answer: 1,
      image: [
        "https://cms-cdn.classplus.co/parserImages/dc76d5dd-e88a-4c72-bc9f-6d660e0d1cbb.jpg",
        "https://cms-cdn.classplus.co/parserImages/f3a978ba-ac0c-47e7-a976-7f60c4ae09a0.png",
      ],
    },
    {
      id: 46,
      question: "FAC generated data are visually displayed on which of the following?",
      options: [
        "The MCDU Perf page.",
        "The lower ECAM F/CTL page.",
        "Both pilot's PFD airspeed displays.",
        "All of the above",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/19f3249e-c412-4c9a-a5b7-1a1cff497cf7.jpg",
    },
    {
      id: 47,
      question: "What is the function of the FACs?",
      options: [
        "Rudder and Yaw damping inputs, Flight envelope and speed computations",
        "Rudder and Yaw damping inputs",
        "Rudder and Yaw damping inputs and windshear protection",
        "Rudder and Yaw damping inputs, Flight envelope and speed computations, and windshear protection",
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/3d5965b5-2536-4b96-9203-de0bcbce667c.jpg",
    },
    {
      id: 48,
      question: "When is the Flight Mode active?",
      options: [
        "From takeoff until landing.",
        "From liftoff until landing",
        "From liftoff until flare mode engages at 50 ft RA",
        "From takeoff until passing 50 kts on landing (main shock absorbers depressed)",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/f0141556-3019-4e37-a811-714f3d9c9659.jpg",
    },
    {
      id: 49,
      question:
        "In normal law all protections are active, which of the following lists is the most complete list?",
      options: [
        "Load Factor, Pitch attitude, High AOA, and High speed.",
        "Load Factor, Pitch attitude, High AOA, angle of bank, and High speed",
        "Load Factor, Pitch attitude, High AOA, Vls, Alpha floor, and High speed.",
        "Load Factor and Pitch attitude.",
      ],
      answer: 1,
    },
    {
      id: 50,
      question: "Are there any control surfaces with a mechanical backup?",
      options: [
        "Yes, the airlerons.",
        "Yes, the spoilers",
        "Yes, the THS and the rudder.",
        "No, there aren't any control surfaces with mechanical backup",
      ],
      answer: 2,
    },
    {
      id: 51,
      question: "Roll control in NORMAL LAW is achieved with:",
      options: [
        "Ailerons and spoilers",
        "Ailerons, spoilers and rudder.",
        "Ailerons, spoilers 2-5 and rudder.",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/f91bb66d-dcb8-43ea-aa14-765ba5e75b14.png",
    },
    {
      id: 52,
      question:
        "In Normal Law, what are the limits of Pitch Attitude protections with flaps Full",
      options: [
        "30° nose up.",
        "35° nose up progressively reduced to 20°",
        "25° nose up, progressively reduced to 20° at low speed..",
        "There is no llimit.",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/100a529e-e94c-4e9a-91e7-95fbceb4dc3d.jpg",
    },
    {
      id: 53,
      question:
        "While in-flight, operating in Normal law, in the Alpha prot range:",
      options: [
        "The flight controls revert to direct law",
        "The flight controls remain in the load factor demand law.",
        "The sidestick controller and flight controls revert to the AOA mode, and side stick deflection is proportional to AOA.",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/797e65b2-bd4f-41b9-82a1-ca03151b5705.jpg",
    },
    {
      id: 54,
      question: "Which dual hydraulic failures do not affect the flight control laws ?",
      options: [
        "Blue and Green system",
        "Blue and Yellow system",
        "Green and Yellow system.",
        "Both (b) and (c) are correct",
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/382407d0-ed5f-4163-bea5-6bd2bc176b56.jpg",
    },
    {
      id: 55,
      question:
        "What is the bank angle after which positive spiral stability is introduced ?",
      options: [
        "33 degrees",
        "45 degrees",
        "40 degrees",
        "As in (a) spiral stability starts from 0 deg if high speed protection is active.",
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/aab186d0-23da-4b63-ba86-60591d6015e5.jpg",
    },
    {
      id: 56,
      question: "What happens to bank angle protection if high speed is operative ?",
      options: [
        "Bank angle is limited to 45 deg and spiral stability is lost.",
        "Bank angle is limited to 40 deg and spiral stability is introduced from 0 deg",
        "Bank angle is limited to 33 deg and spiral stability is introduced from 0 deg",
        "Bank angle protection is lost",
      ],
      answer: 1,
    },
    {
      id: 57,
      question:
        "On PFD speed scale, black and red barber pole appears below stall warning speed",
      options: [
        "A.In normal law when angle of attack protection (Alpha prot) is active.",
        "B.In alternate law",
        "C.In direct law",
        "D.Both (b) and (c) are correct",
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/12bb4d13-fcd8-4658-838f-99b15c446db8.jpg",
    },
    {
      id: 58,
      question:
        "What are the protections lost in \"Pitch Alternate Law without protections\" as compared to \"Pitch Alt Law with protection\" ?",
      options: [
        "Low speed stability and High speed stability are lost..",
        "Pitch attitude protection is lost.",
        "All the above are correct.",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/2737759e-1cee-40e3-8444-4e80dd54c5c1.png",
    },
    {
      id: 59,
      question: "When do you get FLARE Mode in Alternate Law?",
      options: [
        "Never. It goes directly from Alternate Law to Direct Law when the gear is selected down.",
        "When selecting Flaps 1",
        "At glide slope interception",
      ],
      answer: 0,
    },
    {
      id: 60,
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
      id: 61,
      question:
        "In the event of a complete loss of electrical flight control signals, the airplane reverts to a mode.",
      options: ["Mechanical Back-up", "Alternate Law", "Abnormal Attitude law"],
      answer: 0,
    },
    {
      id: 62,
      question: "When Auto trim is frozen during flight in pitch normal law?",
      options: [
        "Whenever manual trim is operated",
        "As in (a) or whenever load factor is less than 0.5",
        "Whenever bank angle is more than 45 deg.",
        "All the above are correct",
      ],
      answer: 1,
      image: [
        "https://cms-cdn.classplus.co/parserImages/eba2a12a-3e85-42ae-b088-6641975cd754.jpg",
        "https://cms-cdn.classplus.co/parserImages/6836d132-ce27-47b9-b1f9-b497335a9568.jpg",
      ],
    },
    {
      id: 63,
      question:
        "What are the occasions in which rudder trim switch does not control rudder",
      options: [
        "When you fly with Autopilot engaged",
        "When both FAC 1 and FAC 2 fail",
        "When both Green and Yellow Hydraulic pressures are lost",
        "Both (a) and (b) are correct.",
      ],
      answer: 3,
    },
    {
      id: 64,
      question:
        "Which actions from the cockpit cause the side stick priority RED ARROW light illumination in F/O side and CAPT green light",
      options: [
        "When F/O's side take over pb is pressed",
        "When CAPT's side take over pb is pressed.",
        "As in (a) and Capt's side stick is not in neutral",
        "As in (b) and F/O's side stick is not in neutral.",
      ],
      answer: 3,
      image: [
        "https://cms-cdn.classplus.co/parserImages/22ea2ecb-e0a5-4b15-8ea4-09c4891434ad.jpg",
        "https://cms-cdn.classplus.co/parserImages/c9bb57d6-f182-4dff-b8e6-a90b8c51bf73.jpg",
      ],
    },
    {
      id: 65,
      question:
        "Side sticks provide electrical signals to the flight control computers and computers {based on the flt control laws} give signals to deflect the surfaces. If both side sticks are operated simultaneously:",
      options: [
        "Their inputs cancel each other.",
        "Both inputs are algebraically added.",
        "The F/O input is overridden by the CAPT input.",
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/462c2924-8f56-4ebc-90bc-858dc5e02684.jpg",
    },
    {
      id: 66,
      question:
        "What happens to Slat / Flaps if aircraft speed is less than 210 kts and flap is retracted from 2 to 1.",
      options: [
        "Flaps will retract to 0.",
        "Flaps retract to 1+ F CONFIG",
        "As in (b) and V max warning is triggered",
        "Slats and Flaps will retract to 0",
      ],
      answer: 1,
    },
    {
      id: 67,
      question: "The wing tip brakes are:",
      options: [
        "Pneumatically actuated.",
        "Electric brakers",
        "Hydraulically actuated",
        "Mechanically controlled, hydraulically actuated.",
      ],
      answer: 2,
    },
    {
      id: 68,
      question:
        "Selection of flaps 1 in flight will select which of the following configurations?",
      options: [
        "Slats 1 and flaps 1 (1+F).",
        "Slats 0 and flaps 1 (0+F). s",
        "Slats 1 and flaps 0 (1).",
        "Slats 1 and flaps 5 (1+F).",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/2a908830-5131-4fbf-8a2d-a5a3d1c7ed66.jpg",
    },
    {
      id: 69,
      question: "Which altitude limitation is associated with high lift devices?",
      options: [
        "Max altitude for extension is 20, 000 ft.",
        "Max altitude for extension is 22, 000 ft.",
        "Max altitude for extension is 25, 000 ft",
        "Max altitude for extension is 27.000 ft.",
      ],
      answer: 0,
    },
    {
      id: 70,
      question: "What is the indication when speed lock function of slats is active?",
      options: [
        "A − LOCK indication pulses cyan/green on upper ECAM below slat / flap position indicator",
        "SPD LOCK indication pulses cyan on upper ECAM below slat / flap position indication",
        "SPD LOCK indication pulses cyan on lower ECAM F/CTL page",
        "A − LOCK indication pulses cyan on lower ECAM F/CTL page.",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/408bdf40-185b-49d5-ad04-574acbef5415.jpg",
    },
    {
      id: 71,
      question:
        "Automatic rudder trim is provided at the rate of _____ while the manual rudder trim rate is ______ up to a maximum of ______.",
      options: [
        "5 deg/sec - 2 deg/sec - 20 degs",
        "5 deg/sec - 1 deg/sec - 20 degs",
        "8 deg/sec - 2 deg/sec - 10 degs",
        "8 deg/sec - 5 deg/sec - 10 degs",
      ],
      answer: 1,
    },
    {
      id: 72,
      question:
        "Four hydraulically-operated wing tip brakes are installed to lock the flaps or slats in case of:",
      options: [
        "Asymmetry and overspeed only",
        "Asymmetry, overspeed and slow movement",
        "Asymmetry, overspeed, symmetrical runaway and uncommanded movement",
        "All of the above",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/72c79cad-78d4-47bd-ad5a-60362510948e.jpg",
    },
    {
      id: 73,
      question: "The purpose of the Load Alleviation Function is to:",
      options: [
        "Relieve wing structure loads by moving the ailerons.",
        "Relieve wing structure loads by extending spoilers 4 and 5.",
        "Help slow the airplane down.",
        "First two statements are correct",
      ],
      answer: 3,
    },
    {
      id: 74,
      question:
        "How many actuators are provided to control the ailerons and how many hydraulic sources supply these actuators?",
      options: [
        "2 hydraulic sources with 2 actuators.",
        "1 hydraulic source with 2 actuators.",
        "4 hydraulic sources with 4 actuators.",
        "3 hydraulic sources with 4 actuators",
      ],
      answer: 0,
      image: [
        "https://cms-cdn.classplus.co/parserImages/bb80a91f-7e07-467b-9719-6e7eab325e90.jpg",
        "https://cms-cdn.classplus.co/parserImages/dedfc93c-55f3-4821-908e-78faeda424ed.jpg",
      ],
    },
    {
      id: 75,
      question: "What happens in the side stick-neutral high speed protection mode?",
      options: [
        "The autopilot disengages, bank angle limit is 30° and the aircraft is 25° roll limited.",
        "The autopilot disengages, bank angle limit is 45° and the aircraft is 25° roll limited.",
        "The autopilot disengages, bank angle limit is 40° and the aircraft rolls wings level and pitches up to slow down to VMO/MMO.",
        "The autopilot disengages, bank angle limit is 35° and the aircraft rolls wings level and pitches to 10° to slow down to VMO/MMO - 20 kt.",
      ],
      answer: 2,
      image: [
        "https://cms-cdn.classplus.co/parserImages/162a5979-0210-4d47-bf1f-1b0ce43a30ef.jpg",
        "https://cms-cdn.classplus.co/parserImages/c9bd6c9a-1f22-4845-9e98-36ec9c0567ac.jpg",
      ],
    },
    {
      id: 76,
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
      id: 77,
      question: "When is alpha floor not available?",
      options: [
        "Out of normal law.",
        "Below 100 feet RA in landing configuration.",
        "If the A/THR is deactivated or unavailable.",
        "All of the above.",
      ],
      answer: 3,
    },
    {
      id: 78,
      question: "What happens to high speed (VMO/MMO) when you are in Alternate Law?",
      options: [
        "VMO is reduced to 320 kt and MMO minus 10 kt.",
        "VMO is reduced to 330 kt and MMO minus 10 kt",
        "VMO is reduced to 320 kt and MMO does not change.",
        "There is no change.",
      ],
      answer: 2,
    },
    {
      id: 79,
      question: "In case of Dual FWC Fault",
      options: [
        "Both are correct",
        "ECAM Cautions & Warnings, Master Caution & Warning lights are lost",
        "ECAM System pages are still available",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/8df73278-b6a8-41a2-ad76-72b254730ad5.jpg",
    },
    {
      id: 80,
      question: "Mark the correct option :",
      options: [
        "In case of Dual FWC failures, all MC / MW / ECAM warnings and Cautions are lost.",
        "In case of Dual SDAC, only amber cautions are lost",
        "Both are correct",
      ],
      answer: 2,
      image: [
        "https://cms-cdn.classplus.co/parserImages/923ce2a8-7d46-4dd4-8337-e3579de1567f.jpg",
        "https://cms-cdn.classplus.co/parserImages/deb1f84e-905f-4d91-b1fa-ffe163072d60.png",
      ],
    },
    {
      id: 81,
      question: "Aural alerts and voice messages are transmitted:",
      options: [
        "Through the loudspeakers even if the speakers are switched off.",
        "Only through the pilot's headsets",
        "Through the loudspeakers only if the speakers are switched on",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/10e5b50e-47ce-431d-85b9-9c4c3e2cfd38.jpg",
    },
    {
      id: 82,
      question: "What is the basic role of the DMCs",
      options: [
        "They compute and elaborate displays {drive displays}",
        "Generation of audio warnings",
        "Generation of amber warnings",
        "Generation of synthetic voice messages",
      ],
      answer: 0,
    },
    {
      id: 83,
      question: "If DMC1 fails",
      options: [
        "INVALID DATA message is displayed on Capt PFD, ND",
        "DMC3 starts supplying the data and failure is restored automatically",
        "Both are correct",
      ],
      answer: 0,
    },
    {
      id: 84,
      question: "If the UPPER ECAM DU fails, what will be displayed on the lower unit?",
      options: [
        "Engines and Warning page (E/WD)",
        "System display page",
        "Status page",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/ac792297-fa53-4952-9dd6-14f6aacaf310.jpg",
    },
    {
      id: 85,
      question: "If the lower ECAM DU fails, is there a way to retrieve that information?",
      options: [
        "Both are correct",
        "By pressing and holding the related systems page push button on the ECAM control panel, the page will be displayed on the UPPER ECAM",
        "By rotating the ECAM/ND XFR switch on the switching panel, the lower ECAM page will be transferred to either the Captain or FO's ND",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/60455a26-ffb2-4bd9-8010-ec57de3bf5c3.jpg",
    },
    {
      id: 86,
      question:
        "The upper ECAM Display Unit (DU) has failed. You want to see the ELECT page. How can you see it?",
      options: [
        "You have to press & hold ELECT P/B on ECP and E/WD will show ELECT page for a maximum of 3 min",
        "You have to press and hold the DOOR key on the ECP.",
        "You have to switch the EIS DMC to CAPT3",
        "You have to press and hold the RCL key on the ECP",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/60d140ec-231d-4b8c-acec-6fdc2a9d9364.jpg",
    },
    {
      id: 87,
      question:
        "What happens, when a discrepancy between the signal obtained by DMC (and sent to the DU) and the operational parameter displayed on the DU (in the form of feedback signal) is detected?",
      options: [
        "A feedback Message in the form of 'CHECK CAPT PFD /ND or CHECK F/O PFD ND or CHECK E/WD' message appears on the relevant DU.",
        "ECAM operation is not affected because there are 3 identical DMCs",
        "Both are correct",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/26c1bbfc-128a-4c85-a31b-f04bf2062b47.png",
    },
    {
      id: 88,
      question:
        "There are three types of failures: Independent, Primary and Secondary. What is an Independent failure?",
      options: [
        "A failure that affects an isolated system or item of equipment without degrading the performance of others in the aircraft",
        "A failure of a system or an item of equipment that costs the aircraft the use of other systems or items of equipment",
        "The loss of a system or item of equipment resulting from a Primary failure",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/2a1d53e5-4d78-4bb1-8388-774c02ffd4ee.jpg",
    },
    {
      id: 89,
      question: "What is a Primary Failure?",
      options: [
        "A failure of a system or an item of equipment that costs the aircraft the use of other systems or items of equipment",
        "The loss of a system or item of equipment resulting from a Primary failure.",
        "A failure that affects an isolated system or item of equipment without degrading the performance of others in the aircraft.",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/2007fba2-6833-484a-a629-fde3b2c50bed.jpg",
    },
    {
      id: 90,
      question: "What is a Secondary Failure?",
      options: [
        "A failure that affects an isolated system or item of equipment without degrading the performance of others in the aircraft",
        "A failure of a system or an item of equipment that costs the aircraft the use of other systems or items of equipment",
        "The loss of a system or item of equipment resulting from a Primary failure.",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/c0173356-ad1e-4b87-bd63-d47fe7c3bbf6.jpg",
    },
    {
      id: 91,
      question: "When is T.O. INHIBIT active?",
      options: [
        "From 80 kts till 1500 feet AGL",
        "From 80 kts till gear up",
        "From T/O POWER application till 1500 ft AGL.",
        "From Lift-off till 1500 feet AGL",
      ],
      answer: 2,
      image: [
        "https://cms-cdn.classplus.co/parserImages/e9c60cf2-0f92-4963-81b5-f7347f3c8e87.jpg",
        "https://cms-cdn.classplus.co/parserImages/c5cbef35-b3fc-4b15-be08-55a07b9b7725.jpg",
      ],
    },
    {
      id: 92,
      question: "Even if a failure message is inhibited, pilot can recall it by pressing",
      options: ["RCL", "CLR", "ALL"],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/f9fcc4b2-fb39-4924-9602-7e74d393ddc4.jpg",
    },
    {
      id: 93,
      question:
        "The speed trend arrow on the PFD airspeed scale indicates the speed value that will be attained in seconds if the acceleration remains constant",
      options: ["10", "5", "8", "15"],
      answer: 0,
    },
    {
      id: 94,
      question:
        "The lower end of a red and black strip along the speed scale defines the VMAX speed and",
      options: [
        "It is the lowest of the following VMO (or MMO), VLE, VFE",
        "It is the speed corresponding to the stall warning (VSW)",
        "It represents the speed corresponding to the angle of attack at which alpha protection becomes active.",
      ],
      answer: 0,
      image: [
        "https://cms-cdn.classplus.co/parserImages/5593a926-c729-48c4-8e5e-a7b7e5f8c91f.jpg",
        "https://cms-cdn.classplus.co/parserImages/ac95b16a-d608-4be8-ae04-1bcff52f1adf.jpg",
      ],
    },
    {
      id: 95,
      question: "When is the 'Green Dot' displayed?",
      options: [
        "Only when flap handle is in the zero position",
        "Only when flap handle is in the zero position, above FL80",
        "Only when flap handle is in the zero position, below FL80",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/0672db1b-2ab7-4b81-a0cf-108fdaad1d37.jpg",
    },
    {
      id: 96,
      question: "What does Green Dot represent?",
      options: [
        "Maneuvering speed in clean configuration when speed is managed and it shows the speed corresponding to the best lift-to-drag ratio",
        "The next flap extend (VFE) max speed",
        "Maneuvering speed in clean configuration",
      ],
      answer: 0,
    },
    {
      id: 97,
      question:
        "You are climbing and you observe that the window around the numerical value of V/S has turned suddenly amber. What do you think?",
      options: [
        "Inertial data is not available and information is from baro info",
        "A/C climb rate is high and that is why the window has turned amber.",
        "Both are correct",
      ],
      answer: 0,
    },
    {
      id: 98,
      question: "Tail strike pitch limiter indicator",
      options: [
        "During landing, this indication disappears when there is no longer a risk of tailstrike",
        "It is visible during take-off and landing and indicates the max pitch attitude to avoid the tailstrike risk",
        "Both of the above are correct",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/891e364c-955c-4822-9b30-b759e4b38140.jpg",
    },
    {
      id: 99,
      question: "When does ILS APP message appear {in green} at the top of ND?",
      options: [
        "Both of the above",
        "When you select ILS approach on MCDU and when phase of flight is DES, APP or GA.",
        "Even if phase of flight is CRZ, if you select ILS App on MCDU, this message will appear on ND provided distance to destination is <250 NM along track",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/3e7de49f-0e55-4284-8150-e02e89db5d35.jpg",
    },
    {
      id: 100,
      question: "Estimated time of arrival shown on the ND at TO WAYPOINT is based on",
      options: ["Current Ground Speed", "Current IAS", "Avg value of both the above"],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/5f9a7db6-22d9-4c3f-8a0c-a1f3460862a2.jpg",
    },
    {
      id: 101,
      question: "When a/c overflies Outer Marker, the station symbol {diamond} flashes",
      options: ["Blue", "Amber", "White"],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/f8a13ea5-f829-4ea2-820b-516cde673673.jpg",
    },
    {
      id: 102,
      question: "PAC Alert on ND for Wx radar is not available",
      options: [
        "Both are correct",
        "If Gain Selector is not at CAL position",
        "ND is displaying MAN GAIN at bottom right cornor",
        "Both are wrong",
      ],
      answer: 0,
    },
    {
      id: 103,
      question: "F-PLAN display is available on ND",
      options: [
        "All the ROSE modes",
        "ROSE NAV mode only",
        "PLAN mode only",
        "ROSE NAV, ARC & PLAN mode",
      ],
      answer: 3,
    },
    {
      id: 104,
      question: "The T/O MEMO appears automatically",
      options: [
        "2 minutes after first engine start.",
        "immediately after second engine start.",
        "2 minutes after second engine start",
        "2 minutes after electrical power ON",
      ],
      answer: 2,
    },
    {
      id: 105,
      question: "VFE parallel amber lines on the SPD scale",
      options: [
        "Indicates the speed for S/F retraction during take off.",
        "Indicates the speed for next flap extension during approach.",
        "Indicates the speed at which flaps full is to be selected.",
        "Displayed the speed at which over speed protection become active.",
      ],
      answer: 1,
    },
    {
      id: 106,
      question: "DH amber above radio altitude indication on PFD indicates",
      options: [
        "DH information failure",
        "DH not entered on MCDU",
        "Aircraft has reached DH which was inserted on MCDU",
        "Aircraft is above DH as selected on MCDU",
      ],
      answer: 2,
    },
    {
      id: 107,
      question:
        "When does the last line of the LDG memo reads FLAPS …. CONF 3",
      options: [
        "When on GPWS panel, LDG FLAP 3 pb sw is ON",
        "When landing with flaps 3 is planned on MCDU",
        "LDG memo always shows flaps …. Config 3",
        "Both (b) and (c) are correct.",
      ],
      answer: 0,
    },
    {
      id: 108,
      question: "If DMC 2 fails",
      options: [
        "DMC 3 will automatically take over",
        "There will be diagonal lines on PFD2, ND2 and DMC 3 has to be switched to FO3 manually.",
        "DMC3 has to be switched manually to FO3",
        "It is only crew awareness.",
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/08177bb7-fac0-40ba-a583-5d2673162749.png",
    },
    {
      id: 109,
      question: "The actual track symbol",
      options: [
        "Appears on both PFD & ND in the form of a green diamond",
        "Appears on PFD in blue coloured diamond if selected from FCU",
        "Appears on PFD & ND is magenta coloured diamond if given by the FMGC",
      ],
      answer: 0,
    },
    {
      id: 110,
      question: "The Electromechanical Vibrator of STBY altimeters operates",
      options: ["In flight", "On ground", "On ground or in flight", "When vibrator switch is selected ON"],
      answer: 0,
    },
    {
      id: 111,
      question: "Steady ALIGN flight indicates",
      options: [
        "Alignment is in progress",
        "Inertial function of IR is lost",
        "Alignment fault",
        "Complete failure of ADIRU",
      ],
      answer: 0,
    },
    {
      id: 112,
      question: "CRS selection on the STBY / CRS window on RMP is possible",
      options: [
        "Once any NAV key is selected and manually setting the CRS with rotary knob",
        "After NAV key selection and frequency set, the frequency is transferred to active window",
        "Only when the CRS coding is transferred to active window CRS selection will be effective.",
        "All the above are wrong.",
      ],
      answer: 1,
    },
    {
      id: 113,
      question: "RMP is used for",
      options: [
        "Communication only",
        "Radio navigation when used as back up mode for Radio Navigation receivers but not for communication.",
        "Communication as well as back mode for radio navigation receivers tuning.",
        "Always used for communication as well as for automatic tuning for FMGC",
      ],
      answer: 2,
    },
    {
      id: 114,
      question: "SEL light on RMP 3 illuminates when",
      options: [
        "HF 1 is selected on RMP 3",
        "HF 2 is selected on RMP 3",
        "HF 1 is selected on RMP 1",
        "VHF is selected on RMP 1.",
      ],
      answer: 2,
    },
    {
      id: 115,
      question: "The turbulence function on Wx Radar is available",
      options: ["Upto 160 nm", "Upto 80 nm", "Upto 40 nm", "Upto 320 nm"],
      answer: 2,
    },
    {
      id: 116,
      question: "In case of Radio Altimeter 1 fault",
      options: [
        "GPWS is lost",
        "GPWS is taken over by RA2",
        "Barometric altimeter keeps supplying the GPWS",
        "None of the above is correct",
      ],
      answer: 0,
    },
    {
      id: 117,
      question: "What does the illumination of ON BAT light on ADIRU CDU indicate",
      options: [
        "One ore more ADIRU is supplied by aircraft battery only",
        "As in (a) and it will also be on for a few seconds at the beginning of alignment",
        "As in (b) and it will come on during fast realignment also",
        "Atleast one ADIRU is not fully serviceable.",
      ],
      answer: 1,
    },
    {
      id: 118,
      question: "When is the fast realignment to be used.",
      options: [
        "During every transit stop",
        "If the IR mode rotary selector is kept in OFF for more than 5 seconds",
        "With the aircraft stationary, if residual ground speed value of greater than 5 kts is observed on ADIRU, CDU or ND",
        "If the normal alignment fails or ALIGN light flashes.",
      ],
      answer: 2,
    },
    {
      id: 119,
      question: "What happens to amber caution when EMERG CANC pb is pressed",
      options: [
        "MASTER CAUTION lights go off, ECAM caution also goes off.",
        "STATUS page is called, name of caution is given under CANCELLED CAUTION",
        "Both (a) and (b)",
        "As in (b) MASTER CAUTON lights go off, but ECAM caution stays ON.",
      ],
      answer: 2,
    },
    {
      id: 120,
      question: "Vertical speed information display on PFD is normally.",
      options: [
        "Inertial information",
        "Baron Information",
        "Inertial information, but if it fails, baro information is displayed",
        "Baro information, but if it fails, inertial information is displayed.",
      ],
      answer: 2,
    },
    {
      id: 121,
      question: "What do the LOC and / or GS red flag denote",
      options: [
        "LOC and / or GS transmitter have failed",
        "LOC and / or GS receivers have failed",
        "LOC and / or GS deviations are excessive",
        "All the above.",
      ],
      answer: 1,
    },
    {
      id: 122,
      question:
        "During cruise, on SD the CRUISE page disappears, a system page appears and a parameter is found flashing. What does it mean ?",
      options: [
        "It is advisory condition",
        "It is level 1 caution",
        "It is level 2 caution",
        "It is level 3 caution",
      ],
      answer: 0,
    },
    {
      id: 123,
      question: "The DFDR is automatically de-energised.",
      options: [
        "On ground after both engines running",
        "In flight with either engine running",
        "On ground during the first 5 minutes after electrical power ON",
        "On ground after 5 minutes of last engine shut down.",
      ],
      answer: 3,
    },
    {
      id: 124,
      question: "RMP 1 and RMP 2 are dedicated to",
      options: [
        "VHF 1 & HF2 respectively",
        "HF 1 & HF2 respectively",
        "HF 1 & VHF2 respectively",
        "VHF1 & VHF2 respectively.",
      ],
      answer: 3,
    },
    {
      id: 125,
      question: "With aircraft on ground if take off CONFIG pb switch is depressed, CONFIG warning will be triggered provided.",
      options: [
        "Slats and Flaps are not in Take off configuration.",
        "As in (a) or if pitch trim is not in take off range.",
        "Parking brake ON",
        "All the above are correct",
      ],
      answer: 1,
    },
    {
      id: 126,
      question: "The top end of the black / red Barber pole on Lower right side of speed scale indicates",
      options: ["V ∝prot", "V ∝ max", "V ∝ floor", "Vsw"],
      answer: 3,
    },
    {
      id: 127,
      question:
        "If the aircraft deviates from the selected FCU altitude. Altitude window will",
      options: [
        "Pulse with continuous 'C' chord",
        "Flash amber with continuous 'C' chord",
        "Flash yellow with 'C' chord for 1.5 sec",
        "Flash yellow with continuous 'C' chord",
      ],
      answer: 1,
    },
    {
      id: 128,
      question: "With low ECAM DU failed, if Advisory is triggered.",
      options: [
        "The system page will be displayed on EW/D automatically",
        "ADV message is displayed on EW/D",
        "Associated key on ECAM CTL panel will flash",
        "Both (b) and (c) are correct.",
      ],
      answer: 3,
    },
    {
      id: 129,
      question: "The Altitude Alert is inhibited",
      options: [
        "AWhen the slats are out with L/G selected down",
        "In approach after Capture of G/S",
        "When L/G is down locked",
        "All the above are correct.",
      ],
      answer: 3,
    },
    {
      id: 130,
      question: "L/G CTL indication on lower ECAM will appear in amber",
      options: [
        "When L/G lever is not agreement in with L/G position.",
        "When L/G lever is not extended at Radio altitude of 750 feet",
        "When L/G lever is not retracted after 80 seconds of take off .",
        "When L/G doors are not closed with L/G retracted.",
      ],
      answer: 0,
    },
    {
      id: 131,
      question: "which LGCIU provides input to ECAM wheel page?",
      options: [
        "LGCIU 1",
        "LGCIU 2",
        "Both LGCIU 1 and 2",
        "Whichever LGCIU is currently operative",
      ],
      answer: 2,
    },
    {
      id: 132,
      question: "When does Landing gear safety valve open?",
      options: [">260kts", "<260 ktS", "<250 ktS", ">250kts"],
      answer: 1,
    },
    {
      id: 133,
      question: "When does BSCU change channel?",
      options: [
        "each LG retraction cycle",
        "each LG extension cycle",
        "In case of Fusible plugs fault",
        "When electric supply is cut off to BSCU",
      ],
      answer: 1,
    },
    {
      id: 134,
      question: "If upper ECAM falls, what would be displayed on ND 1?",
      options: [
        "EWD",
        "System page",
        "System page, if ECAM ND transfer switch is selected to captain",
        "EWD, if ECAM ND transfer switch is selected to captain",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/8e91cc5c-dce0-4e5d-a1c9-9fed32871587.png",
    },
    {
      id: 135,
      question: "Which ECAM failure is represented by a boxed title?",
      options: [
        "Primary failure",
        "Secondary failure",
        "Independent failure",
        "Integrated failure",
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/2eecfbf3-0e92-4fc5-99e7-4aa98f8081b4.png",
    },
    {
      id: 136,
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
      id: 137,
      question: "What does Amber message on ECAM indicate?",
      options: [
        "A failure which requires immediate corrective action",
        "Crew should be aware of of failure, but need not take immediate corrective action",
        "These are Titles and Remarks which guide the flight crew",
        "These are actions to be carried out or limitations",
      ],
      answer: 1,
    },
    {
      id: 138,
      question: "Which computer controls Elevators? (With ELAC2 failed and blue hydraulic failure)",
      options: ["ELAC1", "SEC 2", "SEC 1", "None of the above."],
      answer: 1,
    },
    {
      id: 139,
      question: "When is \"A-speed lock\" function inhibited?",
      options: [
        "When the aircraft is on ground and its speed is less than 60 kt, then the function will not activate.",
        "When the aircraft is in flight and its speed is more than 60 kt, then the function will not activate.",
        "When the aircraft is on ground and its speed is less than 210 kt, then the function will not activate",
        "When the aircraft is in flight and its speed is more than 210 kt, then the function will not activate.",
      ],
      answer: 0,
    },
    {
      id: 140,
      question: "When does \"Man Pitch Trim only\" appear in red?",
      options: [
        "In Alternate Law",
        "In Direct Law",
        "In Mechanical Backup",
        "Loss of (L) + (R) Elevators",
        "Both ( C ) and (D)",
      ],
      answer: 4,
    },
    {
      id: 141,
      question: "What is the function of Alpha-speed lock?",
      options: [
        "It inhibits flap retraction at high AOA and high speeds.",
        "It inhibits slat retraction at low AOA and high speeds",
        "It inhibits flap retraction at high AOA and low speeds.",
        "It inhibits slat retraction at high AOA and low speeds.",
      ],
      answer: 3,
    },
    {
      id: 142,
      question: "What is High speed stability ?",
      options: [
        "In alternate law, A nose up demand is introduced to avoid an excessive increase in speed.",
        "As in \"A\" and can be overriden by pilot",
        "In Normal Law, A nose up demand is introduced to avoid an excessive increase in speed.",
        "As in \"C\" and cannot be overriden by pilot.",
      ],
      answer: 1,
    },
    {
      id: 143,
      question: "When is Alpha floor protection not available?",
      options: [
        "SFCC 1 and FAC 2 Failure",
        "Both FCU channels or when both FMGS are lost",
        "In alternate law or direct law",
        "In Engine out, when slats/flaps are extended",
        "All of the above",
      ],
      answer: 4,
    },
  ],
};
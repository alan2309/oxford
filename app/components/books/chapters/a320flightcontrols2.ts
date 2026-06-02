import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - FLIGHT CONTROLS - 02",
  questions: [
    {
      id: 1,
      question: "Can the aircraft be controlled with the loss of all electrics?",
      options: ["Yes", "No"],
      answer: 0,
    },
    {
      id: 2,
      question: "Can the aircraft be controlled with the loss of all hydraulics?",
      options: ["Yes", "No"],
      answer: 1,
    },
    {
      id: 3,
      question: "When the flaps are extended, the ailerons:",
      options: ["Go to the centering mode.", "Pitch up 5 degrees.", "Droop 5 degrees."],
      answer: 2,
    },
    {
      id: 4,
      question:
        "Aileron droop may best be confirmed by checking which of the following?",
      options: [
        "The position of the ailerons on the exterior preflight inspection",
        "The lower ECAMFLT/CTL page.",
        "The position of the flap handle",
      ],
      answer: 1,
    },
    {
      id: 5,
      question: "Which of the spoiler surfaces are called as \"Speed Brakes\"?",
      options: ["2,3,4", "2,3,4,5", "1,2,3,4,5"],
      answer: 0,
    },
    {
      id: 6,
      question: "Which of the spoiler surfaces are called as \"ground Spoilers\"?",
      options: ["2,3,4", "2,3,4,5", "1,2,3,4,5"],
      answer: 2,
    },
    {
      id: 7,
      question:
        "Which computer normally commands the operation of the No.2 spoiler surface?",
      options: ["SEC 2", "SEC3", "SEC 1 + 2", "SEC 1 + 3"],
      answer: 1,
    },
    {
      id: 8,
      question:
        "Which computers normally command the operation of the elevators and horizontal stabilizer?",
      options: ["SEC 1", "FAC 1", "ELAC 2"],
      answer: 2,
    },
    {
      id: 9,
      question:
        "If all the SEC {i.e. SEC 1 +2 +3} computers fail, which of the flt control surfaces lost completely?",
      options: [
        "Spoilers",
        "Ailerons",
        "Elevators",
        "Nothing is lost as A320 is a fly by wire a/c.",
      ],
      answer: 0,
    },
    {
      id: 10,
      question:
        "If all the ELACs {i.e. ELAC 1 +2} computers fail, which of the flt control surfaces are lost completely?",
      options: ["Elevators", "THS", "Spoilers", "Ailerons"],
      answer: 3,
    },
    {
      id: 11,
      question: "Mark the correct statement",
      options: [
        "In Normal operation, ELAC 2 controls the elevators. However, in case of a failure in ELAC 2, elevators are controlled by ELAC 1.",
        "In Normal Operation, ELAC 1 controls the elevators. However in case of a failure in ELAC 1, elevators are controlled by ELAC 2.",
      ],
      answer: 0,
    },
    {
      id: 12,
      question:
        "When ELAC 1+2 both fail, a/c reverts to ALTN Law:",
      options: [
        "Both ailerons are lost.",
        "Both ailerons and all spoilers on each wing are lost.",
        "In this failure, ailerons continue to operate normally but Elevator control is shifted to SECs.",
      ],
      answer: 0,
    },
    {
      id: 13,
      question: "Should the active elevator actuator fail, elevator control is:",
      options: ["Lost", "Maintained by the other actuator.", "Reduced"],
      answer: 1,
    },
    {
      id: 14,
      question: "To select speed brakes inflight:",
      options: [
        "Push down on the speed brake handle and move it forward.",
        "Push down on the speed brake handle and move it aft.",
        "Pull up on the speed brake handle and move it aft",
      ],
      answer: 1,
    },
    {
      id: 15,
      question:
        "If angle of attack protection is active or flaps are in the configuration Full:",
      options: [
        "Speed brake extension is inhibited.",
        "Aileron travelis reduced..",
        "Speed brake extension travel is reduced.",
      ],
      answer: 0,
    },
    {
      id: 16,
      question: "Mark the correct statement:",
      options: [
        "When a speed brake surface on one wing fails, the symmetric one on the other wing is inhibited..",
        "When a speed brake surface on one wing fails, all of the speed brake surface on the other wing is inhibited.",
        "When a speed brake surface on one wing fails, nothing happens on the other wing.",
      ],
      answer: 0,
    },
    {
      id: 17,
      question:
        "Speed brake deflection is different when you are hand flying than when flight is on auto-pilot",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 18,
      question:
        "The spoiler panels are the only flight control surfaces with no redundant control.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 19,
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
      id: 20,
      question:
        "How do you retract ground spoilers if ground spoilers are deployed automatically ?",
      options: [
        "A.Moving anyone thrust lever forward.",
        "B.As in (a) or by pushing down the speed brake control lever.",
        "C.Only by moving both thrust levers forward",
        "D.Both (b) and (c) are correct.",
      ],
      answer: 1,
    },
    {
      id: 21,
      question: "When speed brakes retract automatically ?",
      options: [
        "If speed is less than 180 kts.",
        "If angle of attack protection is active or in Config FULL..",
        "If RA is less than 1000 feet",
        "All the above are correct.",
      ],
      answer: 1,
    },
    {
      id: 22,
      question: "When should the speed brake not be used ?",
      options: [
        "A.If any one spoiler is inoperative",
        "B.If both elevators are faulty",
        "C.As in (b) or if SEC 1 computer fails",
        "D.All the above are correct.",
      ],
      answer: 2,
    },
    {
      id: 23,
      question:
        "What is the maximum flap setting for in-flight use of the spoilers?",
      options: [
        "Flaps FULL",
        "Flaps 3",
        "Spoilers are not approved for in-flight use.",
        "Flaps 10",
      ],
      answer: 1,
    },
    {
      id: 24,
      question:
        "If both FAC's fail, what happens to the rudder limiter?",
      options: [
        "It immediately assumes the low speed position.",
        "It freezes at its present position and assumes the low speed position when flaps 1 are selected.",
        "Maximum rudder deflection can be obtained after slats extended.",
        "Maximum rudder deflection can be obtained after flaps extended",
      ],
      answer: 1,
    },
    {
      id: 25,
      question: "The FAC's primarily control which control surface?",
      options: ["Elevator", "Rudder", "Aileron", "Elevator and aileron."],
      answer: 1,
    },
    {
      id: 26,
      question:
        "FAC generated data are visually displayed on which of the following?",
      options: [
        "The MCDU Perf page.",
        "The lower ECAM F/CTL page.",
        "Both pilot's PFD airspeed displays.",
        "All of the above",
      ],
      answer: 2,
    },
    {
      id: 27,
      question:
        "Can the rudders be moved with both FAC's inoperative?",
      options: [
        "Yes, if both FACs fail, maximum rudder deflection can be obtained when the slats are extended",
        "Yes, if both FACs fail, maximum rudder deflection can be obtained",
        "Yes, if both FACs fail, maximum rudder deflection can be obtained when the gear is extended or flaps extended at 1 minimum",
        "No",
      ],
      answer: 0,
    },
    {
      id: 28,
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
      id: 29,
      question:
        "Should both FACs fail, maximum rudder deflection can be obtained after the_________are extended.",
      options: ["Flaps", "Slats", "Gear"],
      answer: 1,
    },
    {
      id: 30,
      question: "In Pitch Normal Law Flight Mode; pitch trim is:",
      options: [
        "Manual without the autopilot engaged",
        "Automatic as long as the autopilot is engaged.",
        "Automatic with or without the autopilot engaged.",
      ],
      answer: 2,
    },
    {
      id: 31,
      question: "When is the Flight Mode active?",
      options: [
        "From takeoff until landing.",
        "From liftoff until landing",
        "From liftoff until flare mode engages at 50 ft RA",
        "From takeoff until passing 50 kts on landing (main shock absorbers depressed)",
      ],
      answer: 2,
    },
    {
      id: 32,
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
      id: 33,
      question:
        "In pitch normal law, the elevator control changes from the normal mode to a protection mode when the angle of attack is greater than:",
      options: ["Alpha Max", "Alpha Prot", "Alpha Floor"],
      answer: 1,
    },
    {
      id: 34,
      question:
        "In normal law, if one stick is rapidly pulled fully back, can the aircraft's maximum allowable \"G\" load be exceeded?",
      options: [
        "Yes. Rapid side stick deflection must never be made.",
        "Yes, until maximum pitch attitude is reached.",
        "No. At Maximum \"G\" load, the side sticks are de-activated for 5 seconds.",
        "No. The load factor limitation overrides side stick commands to avoid excessive \"G\" loads.",
      ],
      answer: 3,
    },
    {
      id: 35,
      question:
        "TOGA thrust is provided regardless of throttle position when engages the autothrottle system.",
      options: ["Alpha Max", "Alpha Prot.", "Alpha Floor"],
      answer: 2,
    },
    {
      id: 36,
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
      id: 37,
      question:
        "While on the ground in Roll Normal Law there is a direct relationship between sidestick deflection and the corresponding aileron and spoiler deflection.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 38,
      question: "Roll control in NORMAL LAW is achieved with:",
      options: [
        "Ailerons and spoilers",
        "Ailerons, spoilers and rudder.",
        "Ailerons, spoilers 2-5 and rudder.",
      ],
      answer: 2,
    },
    {
      id: 39,
      question:
        "Can the crew make a flight control input that will over-stress the airplane in direct law?",
      options: [
        "No. The system is designed to avoid such an attempt.",
        "Yes, there are no protections provided in direct law.",
      ],
      answer: 1,
    },
    {
      id: 40,
      question:
        "In normal law, what is the maximum bank angle you can reach with the side stick fully deflected?",
      options: ["33°", "49°", "67°", "70°"],
      answer: 2,
    },
    {
      id: 41,
      question: "What happens if you release the stick at 40 degrees of bank?",
      options: [
        "The bank stays at 40°",
        "The aircraft rolls back to 25°",
        "The aircraft rolls back to 33° and resumes flight path stability.",
        "The aircraft rolls back to a bank angle less than 29°",
      ],
      answer: 2,
    },
    {
      id: 42,
      question:
        "In Normal Law, what are the limits of Pitch Attitude protections with flaps Full",
      options: [
        "30° nose up.",
        "35° nose up progressively reduced to 20°",
        "25° nose up, progressively reduced to 20° at low speed..",
        "There is no llimit.",
      ],
      answer: 2,
    },
    {
      id: 43,
      question:
        "Is there any rudder pedal feedback for the yaw damping and turn coordination functions?",
      options: ["Yes", "No"],
      answer: 1,
    },
    {
      id: 44,
      question:
        "While in-flight, operating in Normal law, in the Alpha prot range:",
      options: [
        "The flight controls revert to direct law",
        "The flight controls remain in the load factor demand law.",
        "The sidestick controller and flight controls revert to the AOA mode, and side stick deflection is proportional to AOA.",
      ],
      answer: 2,
    },
    {
      id: 45,
      question:
        "While in flight operating in Normal law, movement of the sidestick and subsequent return to neutral will command",
      options: [
        "A load factor proportional to stick deflection, then maintain one G flight corrected for pitch attitude.",
        "control surface movements proportional to stick deflection, then return the aircraft to straight and level flight.",
        "Control surface movements proportional to stick deflection, disconnect auto trim, and maintain its current attitude.",
      ],
      answer: 0,
    },
    {
      id: 46,
      question:
        "Which dual hydraulic failures do not affect the flight control laws ?",
      options: [
        "Blue and Green system",
        "Blue and Yellow system",
        "Green and Yellow system.",
        "Both (b) and (c) are correct",
      ],
      answer: 1,
    },
    {
      id: 47,
      question: "In pitch NORMAL law the aircraft goes into flare mode",
      options: [
        "When flaps are extended",
        "When passing through 50 feet RA",
        "When passing through 30 feet",
        "When landing gear is extended.",
      ],
      answer: 1,
    },
    {
      id: 48,
      question:
        "What is the bank angle after which positive spiral stability is introduced ?",
      options: [
        "33 degrees",
        "45 degrees",
        "40 degrees",
        "As in (a) spiral stability starts from 0 deg if high speed protection is active.",
      ],
      answer: 3,
    },
    {
      id: 49,
      question: "Select correct statements about Bank Angle Protection:",
      options: [
        "When bank angle protection is active, auto trim is inoperative.",
        "If the bank angle exceeds 45 °, the autopilot disconnects and the FD bars disappear.",
        "The FD bars return when the bank angle decreases to less than 40 °.",
        "All are correct .",
      ],
      answer: 3,
    },
    {
      id: 50,
      question:
        "Under Bank angle protection in case of Normal Law:\n\n1. If the pilot holds full lateral side stick deflection, the bank angle goes to 67° (indicated by a pair of green bar lines \"=\" on the PFD) and no further.\n2. If the pilot releases the side stick at a bank angle greater than 33°, the bank angle automatically reduces to 33°.\n3. Up to 33°, the system holds the roll attitude constant when the side stick is at neutral.\n4. Inside the normal flight envelope, the system introduces and maintains positive spiral static stability for bank angles > 33°.\n5. Inside the normal flight envelope, the system introduces and maintains positive spiral static stability for bank angles less than 33°.",
        options: ["1,3,5", "1,2,3,4", "1,2,3,4,5"],
      answer: 1,
    },
    {
      id: 51,
      question:
        "In Bank angle protection:\n\n1. If Angle of protection is active, the bank angle will not go beyond 45° whatever may be pilot inputs.\n2. If High Speed Protection is active, the bank angle will not go beyond 40°.\n3. If high speed protection is operative, the system maintains positive spiral static stability from a bank angle of 0°, so that with the side stick released, the aircraft always returns to a bank angle of 0°.\n4. If Angle of protection is active, the bank angle will not go beyond 67° whatever may be pilot inputs.\n5. If High Speed Protection is active, the bank angle will not go beyond 67°.",
        options: ["1,2,3", "3, 4, 5", "1,3, 5", "2,3,4"],
      answer: 0,
    },
    {
      id: 52,
      question:
        "What happens to bank angle protection if high speed is operative ?",
      options: [
        "Bank angle is limited to 45 deg and spiral stability is lost.",
        "Bank angle is limited to 40 deg and spiral stability is introduced from 0 deg",
        "Bank angle is limited to 33 deg and spiral stability is introduced from 0 deg",
        "Bank angle protection is lost",
      ],
      answer: 1,
    },
    {
      id: 53,
      question:
        "On PFD speed scale, black and red barber pole appears below stall warning speed",
      options: [
        "A.In normal law when angle of attack protection (Alpha prot) is active.",
        "B.In alternate law",
        "C.In direct law",
        "D.Both (b) and (c) are correct",
      ],
      answer: 3,
    },
    {
      id: 54,
      question:
        "What is the bank angle after which positive spiral stability is introduced?",
      options: [
        "33 degrees.",
        "45 degrees",
        "40 degrees",
        "As in (a) spiral stability starts from 0 deg if high speed protection is active.",
      ],
      answer: 3,
    },
    {
      id: 55,
      question: "When the landing gear is extended, pitch alternate law:",
      options: [
        "Remains the same.",
        "Degrades to pitch direct law",
        "Degrades to pitch backup law.",
      ],
      answer: 1,
    },
    {
      id: 56,
      question:
        "What kind of protections are provided if the aircraft is in Alternate Law?",
      options: [
        "G-load protection with a reduced factor.",
        "Speed Stability",
        "Full G load protection and high speed stability and low speed stability",
        "G-load protection and speed stability if the ADIRS and elevators are working.",
      ],
      answer: 3,
    },
    {
      id: 57,
      question: "What are the functions available in Yaw alternate law",
      options: [
        "Only Yaw damping function.",
        "Yaw damping and turn coordination",
        "Turn coordination function only",
        "Rudder limiter system only",
      ],
      answer: 0,
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
    },
    {
      id: 59,
      question:
        "When in alternate law, all protections except protection will be lost.",
      options: ["Roll attitude", "Pitch altitude.", "Bank angle", "Load factor"],
      answer: 3,
    },
    {
      id: 60,
      question:
        "High and low speed stabilities may be available in alternate law, stabilities:",
      options: [
        "Will not allow the pilot to stall the aircraft.",
        "Prohibit steep bank angles",
        "Prohibit steep climb angles and bank angles.",
        "Can be overridden by the pilot, and it is possible to exceed Vmo, Mmo and stall the aircraft",
      ],
      answer: 3,
    },
    {
      id: 61,
      question:
        "Which of the following statements is always true when operating in alternate law?",
      options: [
        "Extending the landing gear will place the aircraft in Direct law.",
        "Extending the landing gear will place the aircraft in Mechanical backup law",
        "Extending the landing gear will place the aircraft in Mechanical backup law.",
      ],
      answer: 0,
    },
    {
      id: 62,
      question: "Turn coordination is available in Alternate Law.",
      options: ["Yes", "No, You get yaw damping only."],
      answer: 1,
    },
    {
      id: 63,
      question: "When do you get FLARE Mode in Alternate Law?",
      options: [
        "Never. It goes directly from Alternate Law to Direct Law when the gear is selected down.",
        "When selecting Flaps 1",
        "At glide slope interception",
      ],
      answer: 0,
    },
    {
      id: 64,
      question:
        "In Pitch Alternate Law; the low Speed stability (nose down command) can be overridden by the sidestick.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 65,
      question: "With the aircraft in Pitch Alternate Law, roll is in Law.",
      options: ["Direct", "Normal", "Alternate"],
      answer: 0,
    },
    {
      id: 66,
      question:
        "With the aircraft in Direct Law:\n\n1. Speed is limited to 320/.77, due to the loss of high-speed protection.\n2. PFD displays \"USE MAN PITCH TRIM\" in amber as Automatic trim is inoperative in direct law.\n3. In case of GPWS or EGPWS alerts, respect stall warning when applying the GPWS or EGPWS procedure since protections are lost.\n4. Landing distance required will be more than while landing in Normal Law.",
        options: ["2", "1,2", "1,2,3,4", "2,4"],
      answer: 2,
    },
    {
      id: 67,
      question: "What are the protections available in pitch direct law?",
      options: [
        "Only LOAD FACTOR protection is available",
        "Load factor protection, low speed stability and HI speed stability are available",
        "No protection is available",
        "Only angle of attack protection is available.",
      ],
      answer: 2,
    },
    {
      id: 68,
      question:
        "When \"USE MAN PITCH TRIM \" in AMBER message is displayed on the PFD",
      options: [
        "If both L & R elevator fault is detected.",
        "If both G & Y system fail in flight",
        "Whenever pitch direct law is operative",
        "b & c are correct",
      ],
      answer: 3,
    },
    {
      id: 69,
      question: "How do you know that pitch direct law is active in flight",
      options: [
        "In bank angle protection green dash symbols turn to amber crosses and no PFD message.",
        "In bank angle protection green dash symbols turn to amber crosses and USE MAN PITCH TRIM amber message on FMA",
        "If bank angle protection green dash symbols turn to amber crosses and MAN PITCH TRIM ONLY red message on FMA",
        "Use MAN PITCH TRIM message and green dashes in bank angle protection. .",
      ],
      answer: 1,
    },
    {
      id: 70,
      question:
        "You can degrade directly from Normal Law to Direct Law with gear down and a dual radio altimeter fault.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 71,
      question: "Mechanically backed-up control surfaces:",
      options: [
        "Require hydraulic power for actuation",
        "Are mechanically connected to the cockpit controls",
        "Both are correct",
      ],
      answer: 2,
    },
    {
      id: 72,
      question:
        "In the event of a complete loss of electrical flight control signals, the airplane reverts to a mode.",
      options: ["Mechanical Back-up", "Alternate Law", "Abnormal Attitude law"],
      answer: 0,
    },
    {
      id: 73,
      question: "Is automatic pitch trim available in alternate law?",
      options: ["Yes", "No"],
      answer: 0,
    },
    {
      id: 74,
      question:
        "When Auto trim is frozen during flight in pitch normal law?",
      options: [
        "Whenever manual trim is operated",
        "As in (a) or whenever load factor is less than 0.5",
        "Whenever bank angle is more than 45 deg.",
        "All the above are correct",
      ],
      answer: 1,
    },
    {
      id: 75,
      question:
        "Which dual Hydraulic system failure makes THS inoperative ?",
      options: [
        "Blue and Green system",
        "Blue and Yellow system",
        "Green and Yellow system",
        "Both (a) and (b) are effected",
      ],
      answer: 2,
    },
    {
      id: 76,
      question:
        "Automatic pitch trim is provided both on ground and in flight.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      id: 77,
      question:
        "Which of the following will automatically reset after landing?",
      options: ["THS", "Rudder trim.", "Both are correct."],
      answer: 0,
    },
    {
      id: 78,
      question: "Mark the correct statement.",
      options: [
        "After touch down pitch trim is automatically reset to zero provided green and yellow system is pressurized.",
        "Automatic pitch trim is available in direct law.",
        "ELAC control remain synchronized with manually selected pitch trim positions.",
        "It is not possible to control THS manually when auto trim function is available.",
      ],
      answer: 0,
    },
    {
      id: 79,
      question:
        "When \"USE MAN PITCH TRIM \" in AMBER message is displayed on the PFD",
      options: [
        "If both L & R elevator fault is detected",
        "If both G & Y system fail in flight",
        "Whenever pitch direct law is operative",
        "b & c are correct",
      ],
      answer: 3,
    },
    {
      id: 80,
      question:
        "During flight what happens to RUD TRIM selector and RESET pb, if AP is engaged.",
      options: [
        "RUD TRIM selector is inoperative and RESET pb is operative.",
        "RUD TRIM selector and RESET pb are inoperative",
        "RUD TRIM selector is operative and RESET pb is inoperative.",
        "As in (a) and AP trim order is faster than RUD TRIM selector",
      ],
      answer: 1,
    },
    {
      id: 81,
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
      id: 82,
      question:
        "What happens to rudder limiter system if both FAC fail in flight ?",
      options: [
        "Rudder limiter system goes to low speed configuration if flap is extended",
        "Rudder limiter system goes to low speed configuration if slats are extended",
        "Rudder limiter system goes to low speed configuration when speed is less than 250 kts and L/G down.",
        "Rudder limiter system remains in HI speed configuration",
      ],
      answer: 1,
    },
    {
      id: 83,
      question:
        "The aircraft rudder can be manually trimmed with the autopilot engaged.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      id: 84,
      question:
        "If both the RUDDER TRAVEL LIMITATION functions fail in flight",
      options: [
        "Full rudder travel is available irrespective of the speed.",
        "Rudder travel is limited to the value corresponding to the speed at which the failure has taken place for the rest of the flight",
        "Rudder travel is limited to the value corresponding to the speed at which the failure has taken place till the slats are extended and thereafter full authority is available.",
        "This has no effect whatsoever.",
      ],
      answer: 2,
    },
    {
      id: 85,
      question:
        "Which actions from the cockpit cause the side stick priority RED ARROW light illumination in F/O side and CAPT green light",
      options: [
        "When F/O's side take over pb is pressed",
        "When CAPT's side take over pb is pressed.",
        "As in (a) and Capt's side stick is not in neutral",
        "As in (b) and F/O's side stick is not in neutral.",
      ],
      answer: 3,
    },
    {
      id: 86,
      question:
        "To disable a side-stick, you have to depress the red take-over button on the active stick. Holding the button down for 40 seconds will electrically lock the other stick out until its own red take- over button is pushed again.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 87,
      question:
        "Let's assume the F/O presses his takeover pushbutton and releases it after more than 40 seconds.",
      options: [
        "The Captain's side stick is de-activated unless he presses his takeover pushbutton.",
        "The Captain is unable to re-activate his side-stick for the rest of the flight",
        "Both sticks are active",
        "The Captain's side stick is active as long as the F/O's side stick is in neutral position.",
      ],
      answer: 0,
    },
    {
      id: 88,
      question:
        "Side sticks provide electrical signals to the flight control computers and computers {based on the flt control laws} give signals to deflect the surfaces. If both side sticks are operated simultaneously:",
      options: [
        "Their inputs cancel each other.",
        "Both inputs are algebraically added.",
        "The F/O input is overridden by the CAPT input.",
      ],
      answer: 1,
    },
    {
      id: 89,
      question: "If both Pilots deflect their side sticks fully back……..",
      options: [
        "The \"pitch up\" order is 1.5 times higher than with only one stick deflected",
        "No inputs are sent to the flight control computers unless one pilot presses the takeover pb on his stick.",
        "The \"pitch up\" order is twice as high as with only one stick deflected",
        "The \"pitch up\" order is equal to a single stick deflection",
      ],
      answer: 3,
    },
    {
      id: 90,
      question:
        "If both Pilots deflect their side sticks fully back, the indications of dual input will be:",
      options: [
        "SIDE STICK PRIORITY lights on glare shield will come {Red Arrows and Green CAPT, F/O lights on both sides}.",
        "SIDE STICK PRIORITY lights on glare shield will come {Green CAPT, F/O lights on both sides} and \"DUAL INPUT\" voice message is activated.",
        "Only \"DUAL INPUT\" voice message is activated.",
      ],
      answer: 1,
    },
    {
      id: 91,
      question:
        "Select correct statements:\n\n1. If both side sticks are operated simultaneously, the aircraft will respond to only the side stick with the greatest deflection.\n2. If the captain elects to reject the takeoff below 72 knots, ground spoilers will not deflect and auto brakes activation will not occur. Manual braking must be used.\n3. With Flaps configuration 1+ F, as the aircraft accelerates after take−off, the flaps will automatically retract at 200 kts.",
         options: ["1", "1,2", "1,2,3", "2"],
      answer: 3,
    },
    {
      id: 92,
      question:
        "What is the indication, if wing tip brakes are applied in the flap system",
      options: [
        "F/CTL FLAPS LOCKED ECAM warning and flaps do not move.",
        "FLAPS FAULT ECAM warning and flaps do not move",
        "FLAPS FAULT ECAM warning both flaps and slats will move",
        "FLAPS FAULT ECAM warning both flaps and slats will not move.",
      ],
      answer: 0,
    },
    {
      id: 93,
      question:
        "What is the effect of slats ALPHA / SPEED lock function.",
      options: [
        "It inhibits slats retraction at high angle of attack and / or low speed.",
        "Flap operations is not affected by Alpha Speed lock function",
        "Slats extension is still possible",
        "All the above are correct.",
      ],
      answer: 3,
    },
    {
      id: 94,
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
      id: 95,
      question: "After take off with flap lever is '1' position",
      options: [
        "Flaps automatically retract at 265 kts",
        "Flaps and slats automatically retract at 210 kts",
        "Slats automatically retract at 210 kts.",
        "Flaps automatically retract at 210 kts.",
      ],
      answer: 3,
    },
    {
      id: 96,
      question: "What is ALPHA / SPEED LOCK FUNCTION in slat / flap system",
      options: [
        "This function inhibits slats retraction at high angle of attack or low speed.",
        "This function inhibits flaps retraction at high angle of attack or low speed.",
        "As in (b) the lever cannot be moved to '0' position",
        "As in (b) the lever cannot be moved to'0' position at low speed..",
      ],
      answer: 0,
    },
    {
      id: 97,
      question:
        "The FLAP lever sends signal to Slat Flap Control Computer (SFCC) to command movement",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 98,
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
      id: 99,
      question:
        "Selection of flaps 1 in flight will select which of the following configurations?",
      options: [
        "Slats 1 and flaps 1 (1+F).",
        "Slats 0 and flaps 1 (0+F). s",
        "Slats 1 and flaps 0 (1).",
        "Slats 1 and flaps 5 (1+F).",
      ],
      answer: 2,
    },
    {
      id: 100,
      question:
        "The message WING TIP BRK ON appears on the E/WD. What does it mean ?",
      options: [
        "A hydraulic device locks the flaps in their present position",
        "To reduce structural stress, the slats movement is being slowed down through the wing tip brakes.",
        "To avoid asymmetry, the outer slats are locked in their present position.",
        "Because of the locked flaps, the wing tip brakes also lock the slats",
      ],
      answer: 0,
    },
    {
      id: 101,
      question:
        "Which altitude limitation is associated with high lift devices?",
      options: [
        "Max altitude for extension is 20, 000 ft.",
        "Max altitude for extension is 22, 000 ft.",
        "Max altitude for extension is 25, 000 ft",
        "Max altitude for extension is 27.000 ft.",
      ],
      answer: 0,
    },
    {
      id: 102,
      question:
        "Selection of flaps one prior to takeoff will select which of the following?",
      options: [
        "Slats 1 and flaps 1 (1+F).",
        "Slats 0 and flaps 1 (0+F).",
        "Slats 1 and flaps 0 (1).",
        "Slats 1 and flaps 5 (1). .",
      ],
      answer: 0,
    },
    {
      id: 103,
      question: "The wing tip brakes, once activated:",
      options: [
        "Lock both the slats and flaps in their current position",
        "Lock only the flaps in their current position",
        "Lock only the slats in their current position.",
        "Lock only the affected high lift system surfaces in their current position",
      ],
      answer: 3,
    },
    {
      id: 104,
      question: "Which of the following controls and monitors flaps and slats?",
      options: [
        "Two ELAC's.",
        "Wing tip brakes.",
        "One slat flap control computer (SFCC).",
        "Two slat flap control computers (SFCC'S)",
      ],
      answer: 3,
    },
    {
      id: 105,
      question:
        "What is the indication when speed lock function of slats is active?",
      options: [
        "A − LOCK indication pulses cyan/green on upper ECAM below slat / flap position indicator",
        "SPD LOCK indication pulses cyan on upper ECAM below slat / flap position indication",
        "SPD LOCK indication pulses cyan on lower ECAM F/CTL page",
        "A − LOCK indication pulses cyan on lower ECAM F/CTL page.",
      ],
      answer: 0,
    },
    {
      id: 106,
      question:
        "Mark the correct statements of ECAMs for SLATS:\n\n1. F/CTL SLAT SYS 1(2) FAULT means that Slat channel in one SFCC has failed. Its effect will be that Slats will move at half speed.\n2. F/CTL SLATS FAULT or F/CTL SLATS LOCKED are two different ECAMs.\n3. F/CTL SLATS FAULT means that both Slat channels are failed in two SFCCs.\n4. F/CTL SLATS LOCKED means that Slats' wing tip brakes are applied.\n5. You have to refer to QRH Procedure of F/CTL FLAPS/SLATS FAULT/LOCKED to apply corrections for speeds and landing distance.",
        options: ["1,3,4,5", "1,2,3,4,5."],
      answer: 1,
    },
    {
      id: 107,
      question: "Mark the correct Statements:",
      options: [
        "If one SFCC is inoperative, slats and flaps both operate at half speed.",
        "If one hydraulic system is inoperative, the corresponding surfaces (slats or flaps) operate at half speed.",
        "Both are correct",
      ],
      answer: 2,
    },
    {
      id: 108,
      question: "Mark the correct Statements:",
      options: [
        "In flight if speed brakes are extended, flight control page is displayed on SD automatically.",
        "Mechanical control of the THS is available from the pitch trim wheel at any time, if either of green or yellow hydraulic system is functioning.",
        "When a spoiler surface on one wing fails, the symmetric one on the other wing is available and is not inhibited.",
        "With the autopilot ON, the rudder-trim rotary switch and the rudder trim reset pushbutton remain active.",
      ],
      answer: 1,
    },
    {
      id: 109,
      question:
        "FAULT light in ELAC p/b comes on amber along with an ECAM caution:",
      options: [
        "When a failure is detected",
        "During ELAC power-up test",
        "For both of the above",
      ],
      answer: 2,
    },
    {
      id: 110,
      question:
        "FAULT light in SEC p/b comes on amber along with an ECAM caution",
      options: [
        "When a failure is detected",
        "During SEC power-up test",
        "For both of the above",
      ],
      answer: 0,
    },
    {
      id: 111,
      question:
        "FAULT light in FAC p/b comes on amber along with an ECAM caution:",
      options: [
        "When a failure is detected",
        "During FAC power-up test",
        "For both of the above",
      ],
      answer: 0,
    },
  ],
};
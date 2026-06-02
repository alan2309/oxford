import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - FLIGHT CONTROLS - 01",
  questions: [
    {
      id: 1,
      question: "The flight control surfaces are _______ controlled and _______ actuated.",
      options: [
        "Electrically / hydraulically",
        "Mechanically / hydraulically",
        "Electrically / electrically",
      ],
      answer: 0,
    },
    {
      id: 2,
      question:
        "What computer normally commands the operation of the elevators and horizontal stabilizer?",
      options: ["SEC 1", "FAC 1", "ELAC 2"],
      answer: 2,
    },
    {
      id: 3,
      question:
        "Sidesticks provide electrical signals to the flight control computers; if both sidesticks are operated:",
      options: [
        "The inputs cancel each other.",
        "Both inputs are algebraically added.",
        "The F/O input is overridden by the CAP input.",
      ],
      answer: 1,
    },
    {
      id: 4,
      question: "Roll control is achieved by:",
      options: [
        "Ailerons",
        "Ailerons and rudder.",
        "One aileron and four spoilers on each wing.",
        "Ailerons, rudder and spoilers",
      ],
      answer: 2,
    },
    {
      id: 5,
      question: "When the flaps are extended, the ailerons:",
      options: [
        "Go to the centering mode.",
        "Pitch up 5 degrees.",
        "Droop 5 degrees.",
      ],
      answer: 2,
    },
    {
      id: 6,
      question: "If electrical power to a SEC fails:",
      options: [
        "The affected spoilers automatically retract.",
        "All spoilers automatically retract.",
        "The affected spoilers remains in the last commanded position.",
      ],
      answer: 0,
    },
    {
      id: 7,
      question:
        "If angle of attack protection is active or flaps are in the configuration Full:",
      options: [
        "Speed brake extension is inhibited.",
        "Aileron travel is reduced.",
        "Speed brake extension travel is reduced.",
      ],
      answer: 0,
    },
    {
      id: 8,
      question: "Should the active elevator actuator fail, elevator control is:",
      options: ["Lost.", "Maintained by the other actuator.", "Reduced."],
      answer: 1,
    },
    {
      id: 9,
      question: "Two control surfaces that have mechanical backup are:",
      options: [
        "Elevator and rudder.",
        "Horizontal stabilizer and rudder.",
        "Speed brakes and rudder.",
      ],
      answer: 1,
    },
    {
      id: 10,
      question:
        "Horizontal stabilizer trim automatically resets to zero degrees after landing.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 11,
      question:
        "Should both FACs fail, maximum rudder deflection can be obtained after the ______ are extended.",
      options: ["Flaps", "Slats", "Gear"],
      answer: 1,
    },
    {
      id: 12,
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
      id: 13,
      question:
        "Four hydraulically-operated wing tip brakes are installed to lock the flaps or slats in case of:",
      options: [
        "Asymmetry and overspeed only",
        "Asymmetry, overspeed and slow movement",
        "Asymmetry, overspeed, symmetrical runaway and uncommanded movement",
        "All of the above",
      ],
      answer: 2,
    },
    {
      id: 14,
      question:
        "While on the ground in Roll Normal Law there is a direct relationship between sidestick deflection and the corresponding aileron and spoiler deflection.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 15,
      question: "In Pitch Normal Law Flight Mode; pitch trim is:",
      options: [
        "Manual without the autopilot engaged.",
        "Automatic as long as the autopilot is engaged.",
        "Automatic with or without the autopilot engaged.",
      ],
      answer: 2,
    },
    {
      id: 16,
      question:
        "In pitch normal law, the elevator control changes from the normal mode to a protection mode when the angle of attack is greater than:",
      options: ["Alpha Max", "Alpha Prot", "Alpha Floor"],
      answer: 1,
    },
    {
      id: 17,
      question: "Automatic pitch trim is inhibited when:",
      options: [
        "Radio altitude is below 50 feet (100 feet with autopilot coupled).",
        "Bank angle is greater than 33 degrees.",
        "Load factor is less than 1G.",
        "First two statements are correct",
      ],
      answer: 3,
    },
    {
      id: 18,
      question:
        "TOGA thrust is provided regardless of thrust lever position when _______ engages the autothrust system.",
      options: ["Alpha Max", "Alpha Prot", "Alpha Floor"],
      answer: 2,
    },
    {
      id: 19,
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
      id: 20,
      question:
        "With the aircraft in Pitch Alternate Law, roll is in _____ Law.",
      options: ["Direct", "Normal", "Alternate"],
      answer: 0,
    },
    {
      id: 21,
      question:
        "In Pitch Alternate Law; the low Speed stability (nose down command) can be overridden by the sidestick.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 22,
      question:
        "When the landing gear is extended, pitch alternate law:",
      options: [
        "Remains the same.",
        "Degrades to pitch direct law.",
        "Degrades to pitch backup law.",
      ],
      answer: 1,
    },
    {
      id: 23,
      question:
        "In the event of a complete loss of electrical flight control signals, the airplane reverts to _______ mode.",
      options: [
        "Mechanical Back-Up",
        "Alternate Law",
        "Alternate law",
        "Abnormal Attitude law",
      ],
      answer: 0,
    },
    {
      id: 24,
      question: "To select speed brakes inflight:",
      options: [
        "Push down on the speed brake handle and move it forward.",
        "Push down on the speed brake handle and move it aft.",
        "Pull up on the speed brake handle and move it aft.",
      ],
      answer: 1,
    },
    {
      id: 25,
      question:
        "Which of the following statements is correct concerning the spoiler elevator computers (SEC's)?",
      options: [
        "Two computers which achieve spoiler control and standby elevator and THS control.",
        "Three computers which achieve spoiler control and normal elevator and THS control.",
        "Three computers which achieve spoiler control and standby elevator and THS control.",
      ],
      answer: 2,
    },
    {
      id: 26,
      question:
        "The autopilot will disconnect if the side stick takeover push button is depressed.",
      options: ["True.", "False"],
      answer: 0,
    },
    {
      id: 27,
      question:
        "Which of the following statements are correct concerning the side stick takeover push button?",
      options: [
        "The last pilot to depress the push button has priority.",
        "If the takeover push button is depressed for more than 40 seconds, the onside system will retain priority after the push button is released.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 28,
      question: "What control surfaces do the FACs control?",
      options: [
        "The elevators.",
        "The spoilers.",
        "The rudder.",
        "All of the above.",
      ],
      answer: 2,
    },
    {
      id: 29,
      question:
        "Which of the following will automatically reset after landing?",
      options: ["THS.", "Rudder trim.", "Both are correct."],
      answer: 0,
    },
    {
      id: 30,
      question: "What happens in the event of a single ELAC failure?",
      options: [
        "ELAC functions are transferred the SEC's.",
        "ELAC functions are transferred to FAC's.",
        "SEC functions are transferred the ELAC's.",
        "The functions of the failed ELAC will be assumed by the remaining ELAC.",
      ],
      answer: 3,
    },
    {
      id: 31,
      question: "The alpha speed lock function:",
      options: [
        "Will inhibit flap retraction during an inadvertent movement of the flap selector at high AOA or low speeds.",
        "Will inhibit slat retraction during an inadvertent movement of the flap selector at high AOA or low speeds.",
        "Automatically raises the flaps if retraction has not been accomplished by 210kts.",
      ],
      answer: 1,
    },
    {
      id: 32,
      question:
        "In normal law, if one stick is rapidly pulled fully back, can the aircraft's maximum allowable \"G\" load be exceeded?",
      options: [
        "'Yes. Rapid side stick deflection must never be made.",
        "Yes, until maximum pitch attitude is reached.",
        "No. At Maximum \"G\" load, the side sticks are de-activated for 5 seconds",
        "No. The load factor limitation overrides side stick commands to avoid excessive \"G\" loads",
      ],
      answer: 3,
    },
    {
      id: 33,
      question: "Which controls are used for the mechanical backup?",
      options: [
        "Ailerons and rudder.",
        "THS and rudder.",
        "Elevators and ailerons.",
        "THS and elevator.",
      ],
      answer: 1,
    },
    {
      id: 34,
      question: "Mechanically backed-up control surfaces:",
      options: [
        "Require hydraulic power for actuation",
        "Are mechanically connected to the cockpit controls.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 35,
      question:
        "Selection of flaps one prior to takeoff will select which of the following?",
      options: [
        "Slats 1 and flaps 1 (1+F).",
        "Slats 0 and flaps 1 (0+F).",
        "Slats 1 and flaps 0 (1).",
        "Slats 1 and flaps 5 (1).",
      ],
      answer: 0,
    },
    {
      id: 36,
      question:
        "Which of the following statements best describes the Load Alleviation function (LAF)?",
      options: [
        "Helps the pilot control the airplane.",
        "Relieves wing structure loads by deflecting the ailerons and spoilers.",
        "Relieve wing structure loads by deflecting only the spoilers.",
        "Relieves wing structure loads by deflecting the ailerons.",
      ],
      answer: 1,
    },
    {
      id: 37,
      question: "When ground spoilers deploy automatically:",
      options: [
        "All ten spoiler panels fully deploy.",
        "Four spoiler panels on each wing deploy.",
        "All ten spoiler panels deploy half way.",
        "Six spoiler panels on each wing deploy.",
      ],
      answer: 0,
    },
    {
      id: 38,
      question:
        "The FAC's primarily control which control surface?",
      options: ["Elevator.", "Rudder.", "Aileron.", "Elevator and aileron."],
      answer: 1,
    },
    {
      id: 39,
      question:
        "Which altitude limitation is associated with high lift devices?",
      options: [
        "Max altitude for extension is 20, 000 ft.",
        "Max altitude for extension is 22, 000 ft.",
        "Max altitude for extension is 25, 000 ft",
        "Max altitude for extension is 27, 000 ft.",
      ],
      answer: 0,
    },
    {
      id: 40,
      question:
        "The message WING TIP BRK ON appears on the E/WD. What does it mean?",
      options: [
        "A hydraulic device locks the flaps in their present position.",
        "To reduce structural stress, the slats movement is being slowed down through the wing tip brakes.",
        "To avoid asymmetry, the outer slats are locked in their present position.",
        "Because of the locked flaps, the wing tip brakes also lock the slats.",
      ],
      answer: 0,
    },
    {
      id: 41,
      question:
        "Where does the SFCCs obtain AOA and air data information from?",
      options: ["SEC", "ELAC", "ADIRU", "ADC"],
      answer: 2,
    },
    {
      id: 42,
      question:
        "How many actuators are provided to control the ailerons and how many hydraulic sources supply these actuators?",
      options: [
        "2 hydraulic sources with 2 actuators.",
        "1 hydraulic source with 2 actuators.",
        "4 hydraulic sources with 4 actuators.",
        "3 hydraulic sources with 4 actuators",
      ],
      answer: 0,
    },
    {
      id: 43,
      question:
        "If both FAC's fail, what happens to the rudder limiter?",
      options: [
        "It immediately assumes the low speed position.",
        "It freezes at its present position and assumes the low speed position when flaps 1 are selected",
        "Maximum rudder deflection can be obtained after slats extended.",
        "Maximum rudder deflection can be obtained after flaps extended.",
      ],
      answer: 1,
    },
    {
      id: 44,
      question:
        "Which of the following statements is correct concerning the elevator aileron computers (ELAC's):",
      options: [
        "Three computers which achieve normal elevator, stabilizer, and aileron control.",
        "Two computers which achieve normal and standby control of the elevators, ailerons, and trimmable horizontal stabilizer.",
        "Three computers which achieve normal and standby control of the elevators, ailerons, and THS.",
        "Two computers which achieve normal elevator, stabilizer, and aileron control.",
      ],
      answer: 3,
    },
    {
      id: 45,
      question: "The wing tip brakes, once activated:",
      options: [
        "Lock both the slats and flaps in their current position",
        "Lock only the flaps in their current position.",
        "Lock only the slats in their current position.",
        "Lock only the affected high lift system surfaces in their current position",
      ],
      answer: 3,
    },
    {
      id: 46,
      question:
        "Which of the following controls and monitors flaps and slats?",
      options: [
        "Two ELAC's.",
        "Wing tip brakes.",
        "One slat flap control computer (SFCC).",
        "Two slat flap control computers (SFCC's)",
      ],
      answer: 3,
    },
    {
      id: 47,
      question:
        "The spoiler panels are the only flight control surfaces with no redundant control.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 48,
      question:
        "What happens in the side stick-neutral high speed protection mode?",
      options: [
        "The autopilot disengages, bank angle limit is 30° and the aircraft is 25° roll limited.",
        "The autopilot disengages, bank angle limit is 45° and the aircraft is 25° roll limited.",
        "The autopilot disengages, bank angle limit is 40° and the aircraft rolls wings level and pitches up to slow down to VMO/MMO.",
        "The autopilot disengages, bank angle limit is 35° and the aircraft rolls wings level and pitches to 10° to slow down to VMO/MMO - 20 kt.",
      ],
      answer: 2,
    },
    {
      id: 49,
      question:
        "What is the maximum flap setting for in-flight use of the spoilers?",
      options: [
        "Flaps FULL.",
        "Flaps 3.",
        "Spoilers are not approved for in-flight use.",
        "Flaps 10.",
      ],
      answer: 1,
    },
    {
      id: 50,
      question: "What are the rudder trim rates?",
      options: [
        "A/P on - 5 deg/sec, A/P off - 1 deg/sec.",
        "A/P on - 2 1/5 deg/sec, A/P off - 5 deg/sec.",
        "A/P on - 3 deg/sec, A/P off - 6 deg/sec.",
        "A/P on - 5 deg/sec, A/P off - 6 deg/sec.",
      ],
      answer: 0,
    },
    {
      id: 51,
      question:
        "Can the crew make a flight control input that will over-stress the airplane in direct law?",
      options: [
        "No. The system is designed to avoid such an attempt.",
        "Yes, there are no protections provided in direct law.",
      ],
      answer: 1,
    },
    {
      id: 52,
      question:
        "Can you manually trim the rudder with the autopilot engaged?",
      options: ["Yes.", "No"],
      answer: 1,
    },
    {
      id: 53,
      question: "When is the Flight Mode active?",
      options: [
        "From takeoff until landing.",
        "From liftoff until landing",
        "From liftoff until flare mode engages at 50 ft RA.",
        "From takeoff until passing 50 kts on landing (main shock absorbers depressed)",
      ],
      answer: 2,
    },
    {
      id: 54,
      question:
        "Automatic pitch trim is provided both on ground and in flight.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 55,
      question: "The Ground Mode is different in Alternate Law.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 56,
      question:
        "In normal law, what is the maximum bank angle you can reach with the side stick fully deflected?",
      options: ["33°", "49°", "67°", "70°"],
      answer: 2,
    },
    {
      id: 57,
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
      id: 58,
      question:
        "FAC generated slat and flap extension, retraction, and limiting speeds are visually displayed on which of the following?",
      options: [
        "The MCDU perf page.",
        "The lower ECAM F/CTL page.",
        "Both pilot's PFD airspeed displays.",
        "All of the above.",
      ],
      answer: 2,
    },
    {
      id: 59,
      question:
        "Aileron droop may best be confirmed by checking which of the following?",
      options: [
        "The position of the ailerons on the exterior preflight inspection.",
        "The lower ECAM FLT/CTL page.",
        "The position of the flap handle.",
      ],
      answer: 1,
    },
    {
      id: 60,
      question: "The wing tip brakes are:",
      options: [
        "Pneumatically actuated.",
        "Electric brakes.",
        "Hydraulically actuated.",
        "Mechanically controlled, hydraulically actuated.",
      ],
      answer: 2,
    },
    {
      id: 61,
      question:
        "Selection of flaps 1 in flight will select which of the following configurations?",
      options: [
        "Slats 1 and flaps 1 (1+F).",
        "Slats 0 and flaps 1 (0+F).",
        "Slats 1 and flaps 0",
        "Slats 1 and flaps 5 (1+F).",
      ],
      answer: 2,
    },
    {
      id: 62,
      question:
        "The aircraft rudder can be manually trimmed with the autopilot engaged.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 63,
      question:
        "What happens if you release the stick at 40 degrees of bank?",
      options: [
        "The bank stays at 40°",
        "The aircraft rolls back to 25°",
        "The aircraft rolls back to 33° and resumes flight path stability.",
        "The aircraft rolls back to a bank angle less than 29",
      ],
      answer: 2,
    },
    {
      id: 64,
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
      id: 65,
      question:
        "What kind of protections are provided if the aircraft is in Alternate Law?",
      options: [
        "G-load protection with a reduced factor.",
        "Speed Stability",
        "Full G load protection and speed stability",
        "G-load protection and speed stability if the ADIRS and elevators are working.",
      ],
      answer: 3,
    },
    {
      id: 66,
      question:
        "In Normal Law, what are the limits of Pitch Attitude protections with flaps Full",
      options: [
        "30° nose up.",
        "35° nose up progressively reduced to 20°",
        "25° nose up, progressively reduced to 20° at low speed.",
        "There is no limit.",
      ],
      answer: 2,
    },
    {
      id: 67,
      question:
        "You can degrade directly from Normal Law to Direct Law with gear down and a dual radio altimeter fault.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 68,
      question: "Turn coordination is available in Alternate Law.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 69,
      question:
        "If both pilots deflect their side sticks fully back:",
      options: [
        "The \"pitch up\" order is twice as high as with only one stick deflected.",
        "The \"pitch up\" order is 1.5 times higher as high as with only one stick deflected.",
        "No inputs are sent to the flight control computers unless one pilot presses the takeover pushbutton on his stick.",
        "The \"pitch up\" order is equal to a single stick deflection",
      ],
      answer: 3,
    },
    {
      id: 70,
      question:
        "To disable a side-stick, you have to depress the red take-over button on the active stick. Holding the button down for 40 seconds will electrically lock the other stick out until its own red take-over button is pushed again.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 71,
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
      id: 72,
      question: "What condition will cause auto flap retraction?",
      options: [
        "Exceed 210 kts at Flaps 1",
        "Exceed 190 kt at Flaps 1.",
        "Exceed 195 kt at Flaps 1",
        "Exceed 190 kt with Flaps 1 while extending the speedbrake lever.",
      ],
      answer: 0,
    },
    {
      id: 73,
      question:
        "What happens to the rudder limits if both FAC's fault?",
      options: [
        "The limit freezes at the fault condition until Flaps 1 is selected.",
        "The limit freezes at the fault condition until Flaps 5 is selected.",
        "The limit freezes at the fault condition until Flaps 1 is selected. Then it resets to the low speed limits for increased control.",
      ],
      answer: 2,
    },
    {
      id: 74,
      question:
        "What happens to high speed (VMO/MMO) when you are in Alternate Law?",
      options: [
        "VMO is reduced to 320 kt and MMO minus 10 kt.",
        "VMO is reduced to 330 kt and MMO minus 10 kt",
        "VMO is reduced to 320 kt and MMO does not change.",
        "There is no change.",
      ],
      answer: 2,
    },
    {
      id: 75,
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
      id: 76,
      question:
        "The FLAP lever sends signal to Slat Flap Control Computer (SFCC) to command movement.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 77,
      question:
        "Is there any rudder pedal feedback for the yaw damping and turn coordination functions?",
      options: ["Yes.", "No"],
      answer: 1,
    },
    {
      id: 78,
      question: "Are there any control surfaces with a mechanical backup?",
      options: [
        "Yes, the ailerons.",
        "Yes, the spoilers",
        "Yes, the THS and the rudder.",
        "No, there aren't any control surfaces with mechanical backup",
      ],
      answer: 2,
    },
  ],
};
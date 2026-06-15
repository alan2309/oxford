import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - ICE & RAIN - 01",
  questions: [
    {
      id: 1,
      question:
        "The ______ on each wing are anti-iced with pneumatic bleed air.",
      options: ["Slats", "Flaps", "Three outboard slats"],
      answer: 2,
    },
    {
      id: 2,
      question: "Electrical heating is provided for the protection of:",
      options: [
        "Pitots and Angle Of Attack (AOA) probes",
        "Pitots, static ports and TAT probes",
        "Pitots, static ports, AOA probes, and TAT probes.",
        "Pitots and static ports",
      ],
      answer: 2,
    },
    {
      id: 3,
      question:
        "When a pneumatic leak is detected, the wing anti-ice valves:",
      options: ["Close automatically.", "Open automatically.", "Remain in position."],
      answer: 0,
    },
    {
      id: 4,
      question: "When either engine anti-ice valve is open:",
      options: [
        "Maximum N1 is increased.",
        "Minimum idle rpm is increased.",
        "Minimum idle rpm is reduced.",
      ],
      answer: 1,
    },
    {
      id: 5,
      question: "Window heat operates at what power level in flight?",
      options: [
        "Low",
        "High",
        "Only one heating level exists for window heat.",
      ],
      answer: 2,
    },
    {
      id: 6,
      question: "On the ground the wing anti-ice valves will:",
      options: [
        "Open during a test sequence (30 seconds); provided pneumatic supply is available.",
        "Not open at anytime.",
        "Open any time the switch is pushed \"ON\".",
      ],
      answer: 0,
    },
    {
      id: 7,
      question: "Probe heat comes on automatically when",
      options: [
        "The AC ESS bus is powered.",
        "Electrical power is applied to the aircraft.",
        "When at least one engine is running",
      ],
      answer: 2,
    },
    {
      id: 8,
      question:
        "With reference to the PROBE/WINDOW HEAT pushbutton, which of the following is true?",
      options: [
        "The system should only be selected ON in icing conditions.",
        "When in AUTO mode, the windows are heated only when necessary.",
        "The system should only be selected ON after first engine start.",
        "Window heating comes on automatically after first engine start .",
      ],
      answer: 3,
    },
    {
      id: 9,
      question: "The drain masts are heated after first engine start.",
      options: ["True.", "False"],
      answer: 1,
    },
    {
      id: 10,
      question:
        "Where do the wing anti-ice indications appear on ECAM?",
      options: [
        "There is no indication on ECAM bleed page for wing anti-ice",
        "An amber triangle appears on the ECAM bleed page",
        "WING A.ICE appears on ECAM status page.",
        "ANTI-ICE appears in white on the ECAM bleed page and W A.ICE appears in green on the ECAM memo when the wing P/B is pressed",
      ],
      answer: 3,
    },
    {
      id: 11,
      question:
        "The Fault light on the engine anti-ice switches indicates the valve:",
      options: [
        "Is closed.",
        "Position disagrees with switch position.",
        "Is open.",
      ],
      answer: 1,
    },
    {
      id: 12,
      question:
        "What is the difference between the engine and wing anti-ice fault lights?",
      options: [
        "Both indicate valve in transit, or valve position disagrees with selected position. Wing light also could indicate low pressure.",
        "Both indicate low pressure, or valve position disagrees with selected position. Wing light might indicate valve in transit.",
        "Both indicate valve in transit, or low pressure. Wing light also could indicate valve position disagrees with selected position.",
        "Both indicate valve in transit, or overheat",
      ],
      answer: 0,
    },
    {
      id: 13,
      question:
        "If one engine anti-ice system fails, the second one takes over and provides anti-icing for both engines.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 14,
      question: "What happens when either engine anti-ice is open?",
      options: [
        "Maximum N1 is limited, continuous ignition is provided, maximum idle RPM is increased.",
        "Maximum N1 is limited, continuous ignition is provided, minimum RPM is increased.",
        "Maximum N1 is limited, continuous ignition is provided, minimum idle RPM is increased",
      ],
      answer: 2,
    },
    {
      id: 15,
      question:
        ": In the event of loss of electrical supply the engine anti-ice valve:",
      options: [
        "Opens when the engine is shut down.",
        "Closes when the engine is running.",
        "Opens when the engine is running.",
        "Open when the OAT is < 10 deg.C with the engine running",
      ],
      answer: 2,
    },
    {
      id: 16,
      question:
        "With the loss of electrical power the wing anti-ice valves:",
      options: [
        "Fail in their current position.",
        "Fail to the open position.",
        "Fail to the closed position.",
      ],
      answer: 2,
    },
    {
      id: 17,
      question:
        "What is the speed limit to operate the windscreen wipers?",
      options: ["185 kts.", "200 kts.", "230 kts.", "250 kts."],
      answer: 2,
    },
    {
      id: 18,
      question:
        "In the event of an electrical power loss:",
      options: [
        "The engine anti-ice valves will open automatically, anti-icing is ensured.",
        "The engine anti-ice valves will close automatically, anti-icing is lost.",
        "The engine anti-ice valves will be controlled by the wing anti-ice controls.",
        "The engine anti-ice valves remain in the position they were before.",
      ],
      answer: 0,
    },
    {
      id: 19,
      question:
        "At what power level does window heat operate while airborne?",
      options: [
        "High power while airborne.",
        "Window heat operates at only one level.",
        "Low power above 18,000 ft.",
        "Low power above 25,000 ft.",
      ],
      answer: 1,
    },
    {
      id: 20,
      question:
        "What happens to engine RPM when either engine anti-ice valve is open?",
      options: [
        "There is a fixed RPM increase.",
        "The N1 limit for that engine is automatically increased.",
        "The N1 limit for that engine is automatically reduced",
        "There is a fixed RPM increase (3% of nominal N1)",
      ],
      answer: 2,
    },
    {
      id: 21,
      question: "Window heat operation begins:",
      options: [
        "Automatically after the first engine start.",
        "if the PROBE/WINDOW HEAT push button is selected ON by the crew prior to engine start.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 22,
      question: "Rain protection is provided by:",
      options: [
        "Warm bleed air blowing across the windshield.",
        "Rain repellent and Windshield wipers.",
        "Both are correct.",
      ],
      answer: 1,
    },
    {
      id: 23,
      question: "Can the wing anti-ice be tested on the ground?",
      options: [
        "Yes, with valves only open for 30 seconds.",
        "Yes. Valves stay open till selected off.",
        "No.",
      ],
      answer: 0,
    },
    {
      id: 24,
      question: "Anti-ice and de-icing protection is provided for:",
      options: [
        "The engine nacelle's and three outboard wing slats.",
        "The engine nacelle's, the horizontal stabilizer, and three outboard wing slats.",
        "The engine nacelle's, the horizontal stabilizer, the vertical stabilizer and three outboard wing slats.",
      ],
      answer: 0,
    },
    {
      id: 25,
      question:
        "The probe heaters can be activated manually prior to engine start by placing the PROBE/WINDOW HEAT pushbutton.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 26,
      question:
        "What happens to the heat at the drain masts when the aircraft is on the ground?",
      options: [
        "Nothing.",
        "The heat is reduced to prevent injury to ground personnel.",
        "Some of them are automatically switched off (pitot, AOA).",
      ],
      answer: 1,
    },
    {
      id: 27,
      question:
        "The RAIN RPLNT (rain repellent) pushbutton is inhibited on the ground when the engines stopped.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 28,
      question: "TAT probes are heated on the ground.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 29,
      question: "The ON light illuminates on the wing anti-ice P/B:",
      options: [
        "When the anti-ice valves open",
        "When the P/B is set to ON",
        "When the fault light goes out",
        "When the anti-ice valves open and the fault light goes out.",
      ],
      answer: 1,
    },
    {
      id: 30,
      question: "How is window heating regulated?",
      options: [
        "Manually by flight crew",
        "Window heat is not regulated!",
        "One Window Heat Computer (WHC) as master, the other as slave",
        "By two independent Window Heat Computers (WHC), one for each side",
      ],
      answer: 3,
    },
    {
      id: 31,
      question:
        ": The Window Heat Computer provides two power levels for the windshield:",
      options: [
        "High power when above 20,000 ft, low power when below 20,000 ft",
        "High power when OAT < 10 deg.C, low power when OAT> 10 deg.C",
        "Normal power in flight, low power on the ground",
        "High power in icing conditions (flight only), low power in other conditions.",
      ],
      answer: 2,
    },
    {
      id: 32,
      question: "The engine nacelle is anti-iced by:",
      options: [
        "Air bleed from the high pressure compressor",
        "Air bleed from low pressure compressor",
        "AC system and air bleed from low pressure compressor",
        "DC system and air bleed from low pressure compressor.",
      ],
      answer: 0,
    },
    {
      id: 33,
      question: "In the event of a low air pressure:",
      options: [
        "The engine anti-ice valve opens automatically",
        "There is no effect on the anti-ice valve position",
        "The engine anti-ice valve must be manually closed",
        "The engine anti-ice valve closes automatically",
      ],
      answer: 3,
    },
    {
      id: 34,
      question:
        "How can you check that engine anti-ice has been selected on?",
      options: [
        "You can observe the ON light on the associated engine anti-ice P/B and the ENGINE ANTI-ICE message on the ECAM engine page",
        "You can observe the amber warning on the ECAM memo display and the amber anti-ice light on the overhead panel",
        "You can observe the ENGINE ANTI-ICE message on the ECAM STATUS page",
        "You can observe the blue ON light on the associated engine anti-ice P/B and the ENGINE ANTI-ICE memo on the E/WD",
      ],
      answer: 3,
    },
    {
      id: 35,
      question: "The electric windshield wipers are controlled:",
      options: [
        "Automatically when in heavy rain",
        "By two individual pushbuttons",
        "By one rotary selector for both windshields",
        "By two individual rotary selectors",
      ],
      answer: 3,
    },
    {
      id: 36,
      question: "The wipers can operate at different speeds:",
      options: [
        "Low speed and high speed",
        "Speed 1 and speed 2",
        "Low, medium and high speed.",
        "Speed is automatically adjusted depending on rain intensity.",
      ],
      answer: 0,
    },
    {
      id: 37,
      question: "When the wiper is turned off:",
      options: [
        "The PARK position must be selected to stow the wiper",
        "It continues to run for approximately 6 seconds",
        "The wiper may stop in the pilots view",
        "The wiper stops out of view",
      ],
      answer: 3,
    },
    {
      id: 38,
      question: "When an engine anti-ice valve is open",
      options: [
        "EPR limit is automatically reduced and the idle EPR is automatically increased",
        "N1 of the associated engine is automatically decreased",
        "N1 limit is automatically reduced and N2 limit is automatically increased",
        "There is no change in the EPR limits",
      ],
      answer: 0,
    },
    {
      id: 39,
      question:
        "In the event of a low air pressure {if air is unavailable, engine not running}:",
      options: [
        "The engine anti-ice valve closes automatically",
        "The engine anti-ice valve opens automatically",
        "There is no effect on the anti-ice valve position",
        "The engine anti-ice valve must be manually closed",
      ],
      answer: 0,
    },
    {
      id: 40,
      question:
        "The Fault light on the engine anti-ice switches indicates the valve",
      options: ["Is closed", "Is open", "position disagrees with switch position."],
      answer: 2,
    },
    {
      id: 41,
      question:
        "In the event of an electrical power loss:",
      options: [
        "The engine anti-ice valves will open automatically, anti-icing is ensured",
        "The engine anti-ice valves will close automatically, anti-icing is lost.",
        "The engine anti-ice valves will be controlled by the wing anti-ice controls",
        "The engine anti-ice valves remain in the position they were before.",
      ],
      answer: 0,
    },
    {
      id: 42,
      question: "Mark the correct statements",
      options: [
        "E/WD will show \"ENG A.ICE\" memo in green when one or both ENG A. ICE pushbuttons are ON",
        "The amber FAULT light comes ON briefly as valve transits",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 43,
      question: "When engine anti ice selected under icing conditions",
      options: [
        "Nacelle anti ice valve will open provided engine is running",
        "Engine anti ice selected is indicated on the ECAM bleed page",
        "The amber FAULT light comes ON briefly as valve transits",
        "both a & c are correct.",
      ],
      answer: 3,
    },
    {
      id: 44,
      question: "Hot air anti icing is done for",
      options: [
        "Engine air in take and three outboard leading edge slats of each wing",
        "Waste water drain mast",
        "Sensors, pilot probes and static ports",
        "Flight compartment windows",
      ],
      answer: 0,
    },
    {
      id: 45,
      question:
        "With engine anti ice selected ON, what is the position of engine anti ice valve",
      options: [
        "Nacelle anti ice valve will open provided engine is running",
        "Engine anti ice selected is indicated on the ECAM bleed page",
        "In case of electrical failure engine anti ice valve go to close position",
        "All the above are correct",
      ],
      answer: 0,
    },
    {
      id: 46,
      question:
        "The___on each wing are anti-iced with pneumatic bleed air",
      options: [
        "Three outboard slats",
        "All surfaces of Slats",
        "All surfaces of Flaps",
      ],
      answer: 0,
    },
    {
      id: 47,
      question:
        "When a pneumatic leak is detected, the wing anti-ice valves",
      options: ["Close automatically", "Open automatically", "Remain in position"],
      answer: 0,
    },
    {
      id: 48,
      question:
        "With the loss of electrical power the wing anti-ice valves",
      options: [
        "Go to the closed position.",
        "Remain in their current position",
        "Go to the open position",
      ],
      answer: 0,
    },
    {
      id: 49,
      question: "By pushing the wing anti-ice P/B ON",
      options: [
        "All are correct",
        "A blue light comes ON",
        "Both Wing A/Ice Valves open if a pneumatic supply is available",
        "WING A. ICE memo will appear on E/WD",
      ],
      answer: 0,
    },
    {
      id: 50,
      question:
        "During Taxi out, you decide to switch on WAI. WAI valves should open for 30 secs and then close. But due to some failure, WAI remain open on left wing. This will cause ECAM of",
      options: [
        "WING ANTI ICE OPEN ON GND",
        "WING A. ICE L VALVE OPEN",
        "None of the above.",
      ],
      answer: 1,
    },
    {
      id: 51,
      question:
        "Where do you see the wing anti-ice indications on ECAM?",
      options: [
        "ANTI-ICE appears in white on the ECAM Bleed page and W A.ICE appears in green on the ECAM memo when the wing P/B is pressed",
        "There is no indication on ECAM for wing anti-ice",
        "An amber triangle appears on the ECAM Bleed page",
        "WING A.ICE appears on ECAM Status page",
      ],
      answer: 0,
    },
    {
      id: 52,
      question: "Mark the correct statements",
      options: [
        "Both are correct.",
        "Windshield heating operates at low power on ground and at normal power in flight.",
        "Only one heating level exists for windows",
      ],
      answer: 0,
    },
    {
      id: 53,
      question: "Window Heat comes on automatically when",
      options: [
        "When at least one engine is running",
        "The AC ESS bus is powered",
        "Electrical power is applied to the aircraft",
      ],
      answer: 0,
    },
    {
      id: 54,
      question: "Probe heat comes on automatically when",
      options: [
        "When at least one engine is running",
        "The AC ESS bus is powered",
        "Electrical power is applied to the aircraft",
      ],
      answer: 0,
    },
    {
      id: 55,
      question:
        "With reference to the PROBE/WINDOW HEAT pushbutton, which of the following is true?",
      options: [
        "Window heating comes on automatically after first engine start",
        "The system should only be selected ON in icing conditions.",
        "When in AUTO mode, the windows are heated only when necessary",
        "The system should only be selected ON after first engine start",
      ],
      answer: 0,
    },
    {
      id: 56,
      question: "Electrical heating is provided for the protection of",
      options: [
        "Pitots, static ports, AOA probes, and TAT probes",
        "Pitots and Angle Of Attack (AOA) probes",
        "Pitots, static ports and TAT probes",
        "Pitots and static ports",
      ],
      answer: 0,
    },
    {
      id: 57,
      question: "Window heat operation begins",
      options: [
        "Both are correct",
        "Automatically after the first engine start",
        "if the PROBE/WINDOW HEAT push button is selected ON by the crew prior to engine start",
      ],
      answer: 0,
    },
    {
      id: 58,
      question:
        "The probe heaters can be activated manually prior to engine start by placing the PROBE/WINDOW HEAT pushbutton",
      options: ["True.", "False"],
      answer: 0,
    },
    {
      id: 59,
      question: "TAT probes are heated on the ground",
      options: ["False", "True"],
      answer: 0,
    },
    {
      id: 60,
      question: "How is window heating regulated?",
      options: [
        "By two independent Window Heat Computers (WHC), one for each side",
        "Manually by flight crew",
        "Window heat is not regulated",
        "One Window Heat Computer (WHC) as master, the other as slave",
      ],
      answer: 0,
    },
    {
      id: 61,
      question:
        "The Window Heat Computer provides two power levels for the windshield",
      options: [
        "Normal power in flight, low power on the ground",
        "High power when above 20,000 ft, low power when below 20,000 ft",
        "High power when OAT < 10 deg.C, low power when OAT > 10 deg.C",
        "High power in icing conditions (flight only), low power in other conditions",
      ],
      answer: 0,
    },
    {
      id: 62,
      question: "Rain protection is provided by",
      options: [
        "Rain repellent and Windshield wipers.",
        "Warm bleed air blowing across the windshield.",
        "Both are correct",
      ],
      answer: 0,
    },
    {
      id: 63,
      question:
        "The RAIN RPLNT (rain repellent) pushbutton is inhibited on the ground when the engines stopped",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 64,
      question: "The electric windshield wipers are controlled",
      options: [
        "By two individual rotary selectors",
        "Automatically when in heavy rain",
        "By two individual pushbuttons",
        "By one rotary selector for both windshields",
      ],
      answer: 0,
    },
    {
      id: 65,
      question: "The wipers can operate at different speeds",
      options: [
        "Low speed and high speed",
        "Speed 1 and speed 2",
        "Low, medium and high speed",
        "Speed is automatically adjusted depending on rain intensity",
      ],
      answer: 0,
    },
    {
      id: 66,
      question: "When the wiper is turned off:",
      options: [
        "The wiper stops out of view",
        "The PARK position must be selected to stow the wiper",
        "It continues to run for approximately 6 seconds",
        "The wiper may stop in the pilots view",
      ],
      answer: 0,
    },
    {
      id: 67,
      question: "Probe / Window heat switch is in the Auto position",
      options: [
        "As in (b) and pitot probe heating is at low level on ground and at normal level in flight",
        "Probe heating will start only after any one engine is started",
        "As in (a) and TAT probe is heated at low level on ground and at normal level in flight",
        "As in (a) and AOA probe heating is at low level on ground and at normal level in flight",
      ],
      answer: 0,
    },
    {
      id: 68,
      question:
        "Which page is called in case of wind shield heating failure",
      options: ["NIL", "BLEED PAGE", "COND PAGE", "ANTI ICE PAGE"],
      answer: 0,
    },
    {
      id: 69,
      question:
        "With Wing Anti Ice selected and valves do not open, what page is called",
      options: ["BLEED PAGE", "ANTI ICE PAGE", "COND PAGE", "NIL"],
      answer: 0,
    },
    {
      id: 70,
      question: "What is correct for window heating",
      options: [
        "As in (B) and wind shields are heated at low level on ground and at normal in flight",
        "Window heating starts on ground only after any one engine is started with control switch at AUTO",
        "Sliding windows are not heated",
        "Window heat is available in flight only if control switch is selected to ON",
      ],
      answer: 0,
    },
    {
      id: 71,
      question:
        "With ref. to PROBE / WINDOW HEAT pb , which of the following statements is true ?",
      options: [
        "Window heating comes ON with the first engine start",
        "System should only be selected ON in icing conditions",
        "When in AUTO mode, windows are heated only when necessary",
        "The system should only be selected ON after the first engine start",
      ],
      answer: 0,
    },
    {
      id: 72,
      question:
        "7. On ground, if WAI is selected ON, if valves remain open for more than 35 seconds.",
      options: [
        "a. Wing 'FAULT' Iight comes ON",
        "b) Single chime, Master caution and bleed page",
        "b) Single chime, Master caution and bleed page",
        "d. Both (a) and (b)",
      ],
      answer: 1,
    },
    {
      id: 73,
      question: "What is correct for window heating.",
      options: [
        "Window heating starts on ground only after any one engine is started with control switch at AUTO",
        "Sliding windows are not heated.",
        "Window heat is available in flight only if control switch is selected to ON.",
      ],
      answer: 0,
    },
  ],
};
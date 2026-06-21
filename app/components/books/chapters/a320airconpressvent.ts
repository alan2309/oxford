import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "Air Conditioning/Pressurization/Vent-01",
  questions: [
    {
      id: 1,
      question: "Conditioned air is distributed to:",
      options: [
        "Cockpit, cargo bays and cabin",
        "Cockpit, fwd and aft cabins",
        "Cockpit, avionics bay and cabin",
        "Cockpit, cabin and holds 1 and 2 only"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Hot air fault light illuminates on the air conditioning panel,",
      options: [
        "The hot air press. reg. valve opens and the trim air valves close.",
        "The hot air press. reg. valve closes and the trim air valves open.",
        "The hot air press. reg. valve closes and the trim air valves close.",
        "The hot air press. reg. valve opens and the trim air valves open."
      ],
      answer: 2
    },
    {
      id: 3,
      question: "Does the trim air provide the warm air or the cold air to the air conditioning system?",
      options: [
        "Cold air",
        "Warm air"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "In case of zone controller primary and secondary channel failure, what temperatures are maintained by pack one and pack two?",
      options: [
        "15 deg C both",
        "25 deg C both",
        "20 deg C for pack one and 10 deg C for pack two",
        "24 deg C for pack one and 15 deg C for pack two"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "In normal flight in closed circuit configuration, the avionics ventilation system controls the temperature of the cooling air by:",
      options: [
        "Adding airconditioned air to the flow",
        "Extracting air overboard",
        "Adding avionics bay air",
        "Passing air through a skin heat exchanger"
      ],
      answer: 3
    },
    {
      id: 6,
      question: "To enable Ram air to the mixture unit, The Ram air switch should be used:",
      options: [
        "At any time",
        "Only when differential pressure is less than 1 psi.",
        "When pressure is greater than 1 psi diff.",
        "Only after outflow valve is fully opened"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Pack controller, primary channel failure.",
      options: [
        "The secondary channel operates as a backup mode and regulation is not optimized",
        "The secondary computer takes over (all functions as normal)",
        "Pack is lost",
        "Pack outlet temperature is controlled at 15 deg C"
      ],
      answer: 0
    },
    {
      id: 8,
      question: "Pack controller, secondary channel failure",
      options: [
        "No effect on pack regulation backup mode is lost",
        "Pack is lost",
        "No effect (all modes still available)",
        "Pack outlet temperature is controlled at 15 deg C"
      ],
      answer: 0
    },
    {
      id: 9,
      question: "Pack controller, primary and secondary channel failure",
      options: [
        "Pack outlet temperature is controlled to between 5 and 30 deg C by the anti-ice valve",
        "The pack is closed",
        "The packs deliver a fixed temperature of 20 deg C"
      ],
      answer: 0
    },
    {
      id: 10,
      question: "Hot air pressure reg. valve failed open:",
      options: [
        "Optimized regulation is lost",
        "The temperature stays at the value selected",
        "No effect",
        "Cabin temperature will be controlled at the upper limit 30 deg C"
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/d09c6618-b8cf-436f-bd0a-f028f9984211.jpg"
    },
    {
      id: 11,
      question: "Bleed air supplied from the APU (APU bleed valve open), the pack flow is automatically selected:",
      options: [
        "High",
        "Normal",
        "Low",
        "Econ. Flow"
      ],
      answer: 0
    },
    {
      id: 12,
      question: "Trim air valve, each one optimizes the temperature by:",
      options: [
        "Adding hot air",
        "Adding fresh air",
        "Modulating of pack flow",
        "Adding re-circulated air"
      ],
      answer: 0
    },
    {
      id: 13,
      question: "Hot air pressure regulating valve:",
      options: [
        "Regulates the pressure of hot air tapped upstream of the packs",
        "Is spring loaded open in the absence of air",
        "Opens automatically in case of duct overheat",
        "Opens automatically if the cabin trim air valve fails"
      ],
      answer: 0,
      image: [
        "https://cms-cdn.classplus.co/parserImages/81a3b302-4cca-4047-a4e4-19d4f71ffc2b.jpg",
        "https://cms-cdn.classplus.co/parserImages/76a94f04-2923-4095-b38a-637b11032e48.png"
      ]
    },
    {
      id: 14,
      question: "Pack flow control valve:",
      options: [
        "Is pneumatically operated and electrically controlled",
        "Electrically operated and pneumatically controlled",
        "Opens automatically during engine starting",
        "Is spring loaded to open."
      ],
      answer: 0
    },
    {
      id: 15,
      question: "Engine flow demand, when the heating or cooling demand in one zone cannot be satisfied:",
      options: [
        "The minimum idle must be increased manually",
        "The minimum idle is increased automatically",
        "In any case, flight idle is sufficient",
        "The APU must be used to supply additional air."
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/d75113aa-9d5e-4083-a74c-ee62d35da5ea.jpg"
    },
    {
      id: 16,
      question: "What is the normal maximum cabin altitude?",
      options: [
        "8,000 ft",
        "9,550 ft +/- 350 ft",
        "14,000 ft",
        "800 ft"
      ],
      answer: 0
    },
    {
      id: 17,
      question: "What is the Max. negative Diff. pressure for the cabin?",
      options: [
        "0 psi.",
        "1 psi.",
        "2 psi.",
        "8.6 psi."
      ],
      answer: 1
    },
    {
      id: 18,
      question: "It is permissible to use simultaneously packs and LP ground unit during long stops in a hot airfield",
      options: [
        "Yes",
        "No",
        "Yes, if external temperature is greater than 50 deg C",
        "Yes, provided the airflow supplied by the ground cart is less than 1.2 kg/s"
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/d9d3e915-6d2b-4fd3-9494-2775771184bf.jpg"
    },
    {
      id: 19,
      question: "What are the different sources of air for air conditioning and pressurization?",
      options: [
        "Engine bleed air and recirculated air (only on ground)",
        "Engine bleed air and recirculated air.",
        "Engine bleed air and recirculated air, or if selected, APU bleed air and recirculated air.",
        "Engine bleed air only."
      ],
      answer: 2
    },
    {
      id: 20,
      question: "During the exterior preflight on a warm day, in what position would you expect to find the avionics ventilation system INLET and EXTRACT valves to be in?",
      options: [
        "Closed.",
        "Open.",
        "Closed or open regarding of the APU bleed valve.",
        "Closed or open"
      ],
      answer: 1
    },
    {
      id: 21,
      question: "What happens to the pack flow control valves during engine start?",
      options: [
        "They must be selected off.",
        "They must be selected off on cold days only.",
        "They must be selected off on hot days only.",
        "They automatically close."
      ],
      answer: 3
    },
    {
      id: 22,
      question: "The temperature of each aircraft zone is optimized by means of:",
      options: [
        "A HOT AIR valve.",
        "A ZONE control valve.",
        "A PACK FLOW VALVE.",
        "A TRIM AIR valve."
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/21095753-033c-4f39-8f11-44fc66ada921.jpg"
    },
    {
      id: 23,
      question: "When does normal pressurization occur?",
      options: [
        "After second engine start.",
        "Pressurization occurs during taxi",
        "Pressurization occurs during the takeoff roll.",
        "After rotation."
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/d4013ea2-4f80-444e-b90f-fbb54581ff03.jpg"
    },
    {
      id: 24,
      question: "When does normal depressurization occur?",
      options: [
        "100 feet AGL above touchdown.",
        "It is complete 1 minute after touchdown.",
        "After flap retraction.",
        "On landing touchdown"
      ],
      answer: 1
    },
    {
      id: 25,
      question: "Under what conditions should the pack flow controller be set to LO?",
      options: [
        "With a low passenger load (less than 141 ) to reduce bleed air demand and improve fuel efficiency.",
        "With a low passenger load to increase cabin temperature",
        "With a high passenger load to reduce cabin temperature",
        "In cold conditions to achieve a higher cabin temperature range"
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/eb2ba43d-b739-4c08-ab2f-d63897f9b60d.jpg"
    },
    {
      id: 26,
      question: "Which statement is correct regarding illumination of the amber AFT ISOL VALVE fault light?",
      options: [
        "Automatically closes the aft cargo compartment isolation valves.",
        "Means that either the inlet or outlet isolation valve(s) disagrees with the switch position.",
        "Indicates that the extract fan has stopped.",
        "All of the above."
      ],
      answer: 1
    },
    {
      id: 27,
      question: "Pressurization controllers receive inputs from:",
      options: [
        "LGCIU, ADIRU, FMGS, and EIU.",
        "LGCIU's and the MCDU.",
        "LGCIU's and pitot static sources.",
        "MCDU and LGCIU's."
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/707c2869-cdad-409d-a954-ecb22067a139.jpg"
    },
    {
      id: 28,
      question: "What computers control the cabin and cockpit conditioned air?",
      options: [
        "Two zone controllers that pass information and requests to two pack controllers.",
        "Two pack controllers that pass information and requests to three zone controllers.",
        "Three zone controllers that pass information and instructions to two pack controllers for three zones.",
        "Two zone controllers that passes information and instructions to two pack controllers for three zones, or the ACSC"
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/0c24cb89-90df-4d7e-bc55-ea5ffad51888.jpg"
    },
    {
      id: 29,
      question: ": When would you select RAM AIR ON?",
      options: [
        "If additional cooling is required on the ground.",
        "Dual pack failure or smoke removal.",
        "When pack temperatures are too high.",
        "When there is smoke in the cabin."
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/eb4ef9a5-4ebd-498f-9dc8-4ce9b4bf3216.jpg"
    },
    {
      id: 30,
      question: "What happens when a temperature selector rotary knob is adjusted?",
      options: [
        "A signal is sent to the zone controller requesting a different temperature.",
        "Nothing as there is no relationship between a temperature selector knob and the trim air valve.",
        "The associated trim air valve immediately moves to a different position."
      ],
      answer: 0
    },
    {
      id: 31,
      question: "With APU BLEED ON and engine BLEED switches ON with engines running, what is the position of the engine bleed valves?",
      options: [
        "Closed",
        "Open",
        "Depends on the cross-bleed selector"
      ],
      answer: 0
    },
    {
      id: 32,
      question: "Pressurization is normally automatic. Can you interfere with it?",
      options: [
        "Yes, CABIN PRESS MODE SEL to MAN and MAN V/S CTL toggle switch.",
        "Yes, manually set landing elevation using the LND ELEV AUTO selector",
        "Both are correct."
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/1e80c8ca-3a77-4846-b1f4-9fcea72cfe63.png"
    },
    {
      id: 33,
      question: "Under what conditions should the pack flow controller be set to HI?",
      options: [
        "In cold conditions to achieve a higher cabin temperature range.",
        "With a low passenger load to increase cabin air flow.",
        "With a high passenger load in hot conditions in order to help reduce the cabin temperature."
      ],
      answer: 2
    },
    {
      id: 34,
      question: "What is the function of the ram air valve?",
      options: [
        "Ventilation while on the ground..",
        "Emergency smoke removal and ventilation in the event of dual pack failure.",
        "Avionics cooling.",
        "Cargo ventilation & avionics cooling."
      ],
      answer: 1
    },
    {
      id: 35,
      question: "The Ram Air valve:",
      options: [
        "Should be opened for increased ventilation while on the ground.",
        "Will open automatically after engine start.",
        "Should be opened for increased ventilation while in flight.",
        "Must be manually activated."
      ],
      answer: 3
    },
    {
      id: 36,
      question: "Both pressurization auto controllers are set by the active flight plan loaded in the MCDU. The QNH entry on the MCDU Approach Performance page refines the depressurization schedule for the landing.",
      options: [
        "True.",
        "False."
      ],
      answer: 0
    },
    {
      id: 37,
      question: "During flight below _____, Ram Air Valve can provide an emergency source of conditioned air during non- pressurized flight.",
      options: [
        "5,000 feet",
        "8,000 feet",
        "10,000 feet",
        "12,500 feet"
      ],
      answer: 2
    },
    {
      id: 38,
      question: "What limitation is associated with the ram air valve?",
      options: [
        "Do not open if cabin pressure is greater than 1 psi.",
        "Only open while on the ground.",
        "Will not open if the DITCHING switch is off.",
        "Operation is automatic."
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/f748e3da-779a-4f9b-9fe4-7a35061f2667.jpg"
    },
    {
      id: 39,
      question: "With the pressurization system in the automatic mode, which valves are closed when the ditching push button is selected on?",
      options: [
        "All valves below the water line.",
        "APU inlet.",
        "The engine bleed valves.",
        "Only the avionics cooling valves."
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/0b0a1550-728e-4736-855c-a44f81c60fb2.jpg"
    },
    {
      id: 40,
      question: "What is the maximum negative differential pressure for the cabin?",
      options: [
        "0 psi.",
        "1 psi.",
        "2 psi.",
        "3 psi."
      ],
      answer: 1
    },
    {
      id: 41,
      question: "The HOT AIR valve push button controls:",
      options: [
        "The trim air valve.",
        "The hot air manifold.",
        "The engine bleed valves.",
        "The pack flow control valves."
      ],
      answer: 1
    },
    {
      id: 42,
      question: "Aft cargo indications may be found on which ECAM page(s)?",
      options: [
        "Only the CRUISE page.",
        "Only the BLEED page.",
        "Only the CAB PRESS page.",
        "The CRUISE page and the COND page."
      ],
      answer: 3
    },
    {
      id: 43,
      question: "Avionics ventilation system indications may be found on which ECAM page(s)?",
      options: [
        "Only the BLEED page.",
        "Only the CAB PRESS page.",
        "The in-flight ECAM cruise page.",
        "The in-flight ECAM cruise page and the CAB PRESS pages."
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/f7643484-fa05-4b4b-a409-05055f65d0d4.jpg"
    },
    {
      id: 44,
      question: "When APU is supplying the packs, the pack controller sends a demand signal to increase airflow when a zone temperature cannot be satisfied. This signal is sent to the:",
      options: [
        "Pack Ram Air Inlet Flap.",
        "APU ECB.",
        "Pack Outflow Control Valve.",
        "Engine interface units EIU's"
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/32bd38aa-baad-404e-9137-98f2a9780c61.jpg"
    },
    {
      id: 45,
      question: "In case of zone controller primary and secondary channel failure, what temperatures are maintained by Packs 1 and 2?",
      options: [
        "15 deg C for both.",
        "25 deg C both.",
        "20 deg C for Pack one and 10 deg C for Pack two",
        "24 deg C for Pack one and 15 deg C for Pack two."
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/e8179ae5-5a02-4742-a001-87b7ef80de13.jpg"
    },
    {
      id: 46,
      question: "The PACK FLOW controller is set to NORM and yet the ECAM display shows PACK FLOW to be high. How is this possible?",
      options: [
        "As the engines are not running the PACK FLOW indicators are at the position they were selected to at the last shut down.",
        "As no bleed air is flowing the PACK FLOW valves are spring loaded to the fully open position.",
        "HI flow is automatically selected regardless of PACK FLOW selector position because air is only being supplied by the APU.",
        "With cold outside air conditions the PACK FLOW is automatically increased to help increase the cabin temperature."
      ],
      answer: 2
    },
    {
      id: 47,
      question: "When would you select PACK FLOW to HI?",
      options: [
        "Smoke removal or hot/humid conditions.",
        "When passengers are complaining it is too cold.",
        "Above FL 350.",
        "Above FL 250"
      ],
      answer: 0
    },
    {
      id: 48,
      question: "Which of the following statements is correct concerning conditioned air?",
      options: [
        "Conditioned air and trim air are mixed then distributed to each zone.",
        "Recirculated air, conditioned air and hot trim air are mixed then distributed to each zone.",
        "Hot trim air is added to the mixing unit before distribution to each zone.",
        "Recirculating fans draw cabin air to a mixing unit where conditioned air is added."
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/1e2b2ce8-f064-4c27-a7c3-65587ad3302f.jpg"
    },
    {
      id: 49,
      question: "How many temperature selectors are there on the A320? How many temperature zones are there?",
      options: [
        "Three rotary temperature selectors and one zone.",
        "Three rotary temperature selectors, one each for the cockpit zone, the forward cabin zone, and the aft cabin zone.",
        "Two rotary temperature selectors, one for the cockpit and first class zone and one for the aft cabin zone.",
        "Four rotary temperature selectors and four zones."
      ],
      answer: 1
    },
    {
      id: 50,
      question: "The temperature selectors are located in:",
      options: [
        "The cockpit",
        "The cabin",
        "Both",
        "Only on the CIDS panel"
      ],
      answer: 0
    },
    {
      id: 51,
      question: "During normal flight, the avionics ventilation system controls the temperature of the cooling air by:",
      options: [
        "Adding air-conditioned air to the flow.",
        "Extracting air over board.",
        "Adding an avionics bay air.",
        "Passing air through a skin heat exchanger."
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/281540b1-6510-4f49-a0b4-c4a3d871801f.jpg"
    },
    {
      id: 52,
      question: "Placing the avionics ventilation system in the smoke configuration:",
      options: [
        "Opens the #1 GLC.",
        "Opens the cargo under-floor valve.",
        "Opens the #2 GLC.",
        "De-energizes the blower fan, extract fan runs, and opens the air conditioning extract valves."
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/b610d86f-015d-408c-2867-07d3a9e34e38.jpg"
    },
    {
      id: 53,
      question: "How can you change controllers during flight?",
      options: [
        "Cycle the LDG ELEV AUTO knob out of the AUTO position then back to AUTO.",
        "Cycle the CABIN PRESS MODE SEL pushbutton to the MAN position then back to AUTO.",
        "Cycle the cabin pressurization MAN V/S CTL switch"
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/d6785980-0637-48d0-abdc-c6e31012fc01.jpg"
    },
    {
      id: 54,
      question: "Hot air \"FAULT\" light illuminates on the air conditioning panel.",
      options: [
        "The hot air press reg. valve opens and the trim air valves close.",
        "The hot air press reg. valve closes and the trim air valves open.",
        "The hot air press reg. valve closes and the trim air valves close."
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/75ae10f2-2e26-4807-9fe4-e47fc20a3068.jpg"
    },
    {
      id: 55,
      question: "How many trim air valves are there?",
      options: [
        "One trim air valve.",
        "Three: one each for the cockpit zone, the forward cabin zone, and the aft cabin zone.",
        "Two: one for the cockpit and first-class zone, and one for the cabin zone.",
        "Four: one each for the cockpit zone, the first-class zone, and two for the aft zone."
      ],
      answer: 1
    },
    {
      id: 56,
      question: "What position do the pack valves go to in the event of a loss of the bleed system pressure?",
      options: [
        "They remain in their last position.",
        "Full open.",
        "Mid position.",
        "Closed."
      ],
      answer: 3
    },
    {
      id: 57,
      question: "The RAM AIR switch should be used:",
      options: [
        "At any time.",
        "Only when differential pressure is less than 1 psi.",
        "When differential pressure is more than 1 psi.",
        "Only after outflow valve is fully opened."
      ],
      answer: 1
    },
    {
      id: 58,
      question: "What is the function of the Pack Flow selector?",
      options: [
        "Allows the pilot to increase pack flow but will not allow a manual decrease in flow if needed by the aircraft demands.",
        "Always allows high flow regardless of switch position when the APU is used for air conditioning.",
        "Both are correct."
      ],
      answer: 2
    },
    {
      id: 59,
      question: "Which configuration is the avionics ventilation system in while airborne with no abnormals present?",
      options: [
        "Open.",
        "Smoke.",
        "Fire.",
        "Closed."
      ],
      answer: 3
    },
    {
      id: 60,
      question: "What is the maximum altitude associated with the pressurization system?",
      options: [
        "39,800 feet",
        "39,500 feet",
        "41,000 feet",
        "41,100 feet"
      ],
      answer: 0
    },
    {
      id: 61,
      question: "Trim air valves are controlled by:",
      options: [
        "The zone controller.",
        "Anti-ice valve.",
        "Hot air pressure regulating valve.",
        "The pack controller"
      ],
      answer: 0
    },
    {
      id: 62,
      question: "Which statement is TRUE concerning the cargo compartment ventilation?",
      options: [
        "Both cargo compartments are pressurized and heated using both cabin air and hot trim air.",
        "Recirculated air, conditioned air, and hot trim air are mixed then distributed to each cargo compartment.",
        "Only the aft cargo compartment is heated and ventilated. Cabin ambient air is mixed with hot trim air and drawn through isolation valves by extraction fans."
      ],
      answer: 2
    },
    {
      id: 63,
      question: "The AIR APU BLEED FAULT indicates that the APU is running and the position of the APU bleed valve disagrees with the selected position of the APU BLEED pushbutton.",
      options: [
        "True.",
        "False."
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/49957974-f43e-44a8-85d3-77484a6fea13.png"
    },
    {
      id: 64,
      question: "Aft cargo ventilation is controlled by:",
      options: [
        "The aft cargo rotary selector knob.",
        "The cargo ventilation controller.",
        "The zone controller and the SDCU.",
        "The cargo ventilation controller and the aft cargo rotary selector knob."
      ],
      answer: 1
    },
    {
      id: 65,
      question: "The vent fan runs any time there is a normal ships power and the isolation valves are open.",
      options: [
        "True.",
        "False."
      ],
      answer: 0
    },
    {
      id: 66,
      question: "The cabin zone temperature sensors are ventilated by the air extracted by the lavatory and galley fans.",
      options: [
        "True.",
        "False."
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/5213e97d-e754-4573-9825-10f02102da6d.png"
    },
    {
      id: 67,
      question: "Pressurization indications are found on which ECAM page(s)?",
      options: [
        "BLEED page.",
        "Only on the CAB PRESS page.",
        "The in-flight ECAM cruise page and the CAB PRESS page.",
        "On the CAB PRESS & BLEED pages."
      ],
      answer: 2
    },
    {
      id: 68,
      question: ":How many outflow valves are there?",
      options: [
        "One valve with one door",
        "One valve with two doors.",
        "Two valves with only one door visible.",
        "Two valves (one main + one back-up) with only two doors visible."
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/1861f7ea-e49f-4ac6-b266-60141a0464a4.png"
    },
    {
      id: 69,
      question: "At what cabin altitude do you get an ECAM warning?",
      options: [
        "8,800 feet.",
        "9,000 feet",
        "9,550 feet",
        "14,000 feet."
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/91901f5c-2d0c-4d5a-916d-8ee53df711b5.png"
    },
    {
      id: 70,
      question: "When the pack flow control knob is positioned to HI, air flow is:",
      options: [
        "80% of normal rate.",
        "100% of normal rate.",
        "120% of normal rate.",
        "150% of normal rate."
      ],
      answer: 2
    },
    {
      id: 71,
      question: "If you select a position other than the AUTO detent on the LDG ELEV AUTO selector, how can you see the actual landing elevation value?",
      options: [
        "On the ECAM CRUISE",
        "On the PRESS page",
        "On the ECAM CRUISE or the PRESS page."
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/fce14a03-72fa-48c9-b2cd-46ab01d7d2a0.png"
    },
    {
      id: 72,
      question: "What will cause the ENG BLEED fault light to come on?",
      options: [
        "Overpressure (downstream of bleed valve)",
        "Bleed overheat",
        "Wing or engine leak on associated side.",
        "All of the above"
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/45c6e93d-23f9-4b09-a96e-e8641f296e42.png"
    },
    {
      id: 73,
      question: "What does the CARGO HEAT HOT AIR FAULT light indicate?",
      options: [
        "A duct overheat is detected.",
        "The Aft Cargo Pressure Regulating valve closes.",
        "The system will reset if the ISOL VALVE switch is ON.",
        "All of above."
      ],
      answer: 3
    },
    {
      id: 74,
      question: "During Ground function operation, the outflow valve is:",
      options: [
        "Fully open.",
        "Fully closed.",
        "Positioned according to FMGS demands."
      ],
      answer: 0
    },
    {
      id: 75,
      question: "The outflow valve is powered by:",
      options: [
        "One of two electric motors.",
        "One of three electric motors.",
        "Three mechanically linked electric motors."
      ],
      answer: 1
    },
    {
      id: 76,
      question: "The purpose of the safety valve is to avoid:",
      options: [
        "Excessive positive pressure differential.",
        "Excessive negative differential.",
        "Both are correct."
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/464ede41-798a-4e29-8f1b-9f4ee24b96db.jpg"
    },
    {
      id: 77,
      question: "When landing elevation is set to AUTO, the landing elevation is sent to the controller from:",
      options: [
        "FMGS.",
        "FCU.",
        "ADIRS.",
        "Captain baro ref."
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/1a60ed00-763a-4b56-8058-4c6a34ac2854.jpg"
    },
    {
      id: 78,
      question: "The mixing unit is connected to:",
      options: [
        "Packs, cabin air, emergency ram air inlet and LP ground connector",
        "Packs, emergency ram air inlet and LP ground connector",
        "Packs and cabin air",
        "Pack 1 and pack 2 only."
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/8c490890-6650-46c7-94c7-f8e8aff3bfba.jpg"
    },
    {
      id: 79,
      question: "Once set to \"ON\" the air conditioning packs operate:",
      options: [
        "Automatically and independently of each other",
        "Normally, but the output of one affects the other",
        "Automatically, pack one as a master, pack two as a slave",
        "Automatically, pack two as a master, pack one as a slave."
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/3d27674a-0ffe-4238-92d6-f71ebd244dde.jpg"
    },
    {
      id: 80,
      question: "Emergency ram air inlet. When set to \"ON\" the ram air valve will open and supply airflow:",
      options: [
        "In any case",
        "Diff. press < 1 psi, and ditching not selected",
        "Provided ditching is not selected",
        "Provided ditching is selected."
      ],
      answer: 1
    },
    {
      id: 81,
      question: "Cond. Zone regulator fault (primary channel failed):",
      options: [
        "Cabin zone is at fixed temperature",
        "Packs are at fixed temperature",
        "Secondary channel operates as back up and operation is as normal",
        "The packs deliver a fixed temperature. 20 deg C for pack one and 10 deg C for pack two"
      ],
      answer: 0,
      image: "https://cms-cdn.classplus.co/parserImages/5ed9fe59-662a-48f3-9e5a-930828c56c56.png"
    },
    {
      id: 82,
      question: "Temperature control is automatic and is regulated by:",
      options: [
        "Zone controllers",
        "Pack 1 and 2 controllers",
        "Zone controllers, pack 1 and 2 controllers",
        "The pack flow control valves only."
      ],
      answer: 2
    },
    {
      id: 83,
      question: "If a pack controller fails (primary and secondary channel failure), the pack outlet air temperature is controlled by:",
      options: [
        "Ram Air Valve",
        "Hot air pressure regulating valve",
        "Anti-ice valve",
        "Trim air valve."
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/b0f83598-e8e3-4605-b546-0f0c56850561.png"
    },
    {
      id: 84,
      question: "The zone controller optimizes temperature by action on:",
      options: [
        "Pack anti-ice valve",
        "Trim air valve",
        "Pack flow control valve",
        "Hot air pressure regulating valve"
      ],
      answer: 1
    },
    {
      id: 85,
      question: "When using APU bleed to supply the packs, with the pack flow selector at LO, the pack airflow is:",
      options: [
        "80% of normal",
        "Normal",
        "120% of normal",
        "110% of normal"
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/0e3c4666-a865-44a2-9800-e0b3b0db7245.png"
    },
    {
      id: 86,
      question: "In case of trim air system fault (zone controller primary channel failure), the secondary channel of the zone controller regulated the zone temperature at:",
      options: [
        "14 deg.C",
        "24 deg C",
        "15 deg.C",
        "10 deg.C"
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/07d4e8f4-25b2-4c08-9f1c-1bae02c6ca4e.jpg"
    },
    {
      id: 87,
      question: "In case of total zone controller failure:",
      options: [
        "Hot air and trim air valves open and packs deliver air at a fixed temperature (15 deg.C pack 1 and 10 deg.pack2)",
        "Hot air and trim air valves close and packs deliver air at a fixed temperature (15 deg.C pack 1 and 10 deg.pack2)",
        "Hot air and trim air valves close and packs deliver air at a fixed temperature (20 deg.C pack 1 and 10 deg.pack2)",
        "Hot air and trim air valves open and packs deliver air at a fixed temperature (20 deg.C pack 1 and 10 deg.pack2)"
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/01cee8bb-1b91-4a42-a6cc-36905511c89a.jpg"
    },
    {
      id: 88,
      question: "During landing run, Ram Air Inlet flaps open when speed is less than:",
      options: [
        "77 kts (after 30 seconds delay",
        "70 kts (after 1 minute delay)",
        "70 kts (after 20 seconds delay)",
        "85 kts (after 20 seconds delay)"
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/51b96423-e2b7-44b9-a243-0ac061941227.jpg"
    },
    {
      id: 89,
      question: "The ditching switch when selected sends a closure signal to:",
      options: [
        "Outflow valve",
        "Ram air inlet and ventilation extract valves",
        "The pack flow control valves",
        "All of the above"
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/76fe7899-abf0-4b6a-bdb6-d20ce03e0962.jpg"
    },
    {
      id: 90,
      question: "In flight with pressure controller 1 in use, if it fails:",
      options: [
        "You have to use the manual control",
        "Transfers automatically to controller 2",
        "You have to select manually controller 2",
        "You have to set the landing elevation."
      ],
      answer: 1
    },
    {
      id: 91,
      question: ": In normal operation, pressurization is:",
      options: [
        "Fully automatic",
        "Manually controlled",
        "Automatic, but landing elevation must be manually set",
        "Remaining automatic only with CPC 1 is in use."
      ],
      answer: 0
    },
    {
      id: 92,
      question: "During ground function operation, the outflow valve is:",
      options: [
        "Fully open",
        "Fully closed",
        "Positioned accordingly to FMGS demands",
        "Operating in abort mode"
      ],
      answer: 0
    },
    {
      id: 93,
      question: "To see the operation of the outflow valve, it is necessary to call ECAM:",
      options: [
        "Cond page",
        "Bleed page",
        "Press page",
        "Vent page"
      ],
      answer: 2
    },
    {
      id: 94,
      question: "Two identical, independent, automatic digital pressurization controllers are used for system control:",
      options: [
        "One controller active, one in standby",
        "Both controllers monitored by FMGC",
        "No controller for climb phase and No.2 controller in cruise and descent",
        "No.1 controller for climb and No.2 for descent"
      ],
      answer: 0
    },
    {
      id: 95,
      question: "Which controller generates excess cabin altitude and pressure signals for ECAM indication in manual mode:",
      options: [
        "Both",
        "No.1",
        "No2",
        "Neither"
      ],
      answer: 1,
      image: "https://cms-cdn.classplus.co/parserImages/a998063e-7ec6-42d3-a57c-8e5f132045e8.jpg"
    },
    {
      id: 96,
      question: ": The safety valves are operated:",
      options: [
        "Electrically",
        "Hydraulically",
        "Pneumatically",
        "By the FMGC"
      ],
      answer: 2
    },
    {
      id: 97,
      question: "The purpose of the safety valves is to avoid:",
      options: [
        "Excessive positive differential pressure",
        "Excessive negative differential pressure",
        "All of the above"
      ],
      answer: 2
    },
    {
      id: 98,
      question: "When mode selector is selected to manual, the outflow valve is controlled by signals sent via controller 1 or 2",
      options: [
        "True",
        "False"
      ],
      answer: 1
    },
    {
      id: 99,
      question: "On ECAM Cab. press page, the outflow valve indicator changes to amber if:",
      options: [
        "It is fully closed",
        "It is fully open on the ground",
        "It is fully open in flight",
        "It is not fully open on the ground"
      ],
      answer: 2
    },
    {
      id: 100,
      question: "On ECAM Cab. press page, the safety valve indication changes to amber if:",
      options: [
        "Both safety valves are fully open",
        "Both safety valves do not open",
        "Both safety valves are fully closed",
        "One safety valve is open."
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/f0633456-bf0b-4917-84ae-307a70ac5368.png"
    },
    {
      id: 101,
      question: "On ECAM Cab. press page, the cabin altitude indication changes to red when cabin altitude is:",
      options: [
        "> 14,000 ft",
        "> 12,500 ft",
        "> 10,000 ft",
        "> 9,550 ft"
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/96e8de8c-3616-4b15-be4c-8fe56e69bb21.png"
    },
    {
      id: 102,
      question: "Following a system 1 fault:",
      options: [
        "Master caution is activated and ECAM actions must be taken by the crew",
        "The crew manually operates the system",
        "System 2 must be selected by the crew",
        "System 2 takes over automatically without any crew action"
      ],
      answer: 3
    },
    {
      id: 103,
      question: "The pressure safety valve opens at:",
      options: [
        "8.06 psi",
        "8.6 psi",
        "9.0 psi",
        "7.0 psi"
      ],
      answer: 1
    },
    {
      id: 104,
      question: "After the engine start, the Pack Flow Control Valves automatically open, however on the ground, reopening of the valves is delayed for _____ after the first engine start.",
      options: [
        "30 seconds",
        "45 seconds",
        "50 seconds",
        "60 seconds"
      ],
      answer: 0
    },
    {
      id: 105,
      question: "The Ram Air Inlet Flaps remain open during takeoff and landing to allow extra airflow during high power situations.",
      options: [
        "True",
        "False"
      ],
      answer: 1
    },
    {
      id: 106,
      question: "The temperature of the air that exits the compressor section is displayed above the Pack Flow. It normally displays green, but displays amber for temperatures over:",
      options: [
        "180 deg.C",
        "200 deg.C",
        "260 deg.C",
        "250 deg.C"
      ],
      answer: 2
    },
    {
      id: 107,
      question: "The trim air valves are _____ controlled by the zone controller",
      options: [
        "Electrically",
        "Pneumatically",
        "Hydraulically",
        "None of the above"
      ],
      answer: 0
    },
    {
      id: 108,
      question: "The avionics ventilation system is not capable of using external air to provide cooling airflow",
      options: [
        "True",
        "False"
      ],
      answer: 1
    }
  ]
};
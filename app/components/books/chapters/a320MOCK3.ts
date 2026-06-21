import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "MOCK TEST - 03",
  questions: [
    {
      id: 1,
      question: "Which Circuit Breakers should not be pulled out in Flight?",
      options: ["A Green CB", "B Black CB", "C. Red capped CB", "Yellow CB"],
      answer: 2,
    },
    {
      id: 2,
      question:
        "Mark the correct answer - out of the given configurations below, which electrical configuration is possible?",
      options: [
        "DC essential provided by AC essential",
        "TR1 can supply all 4 DC buses",
        "TR1 can supply DC essential",
        "Both A and C",
      ],
      answer: 3,
    },
    {
      id: 3,
      question: "If gen 1 is inoperative then",
      options: [
        "all Galley shed",
        "Part of galley shed",
        'as in "B" IFE is also shed',
        'as in "A" IFS is also shed',
      ],
      answer: 2,
    },
    {
      id: 4,
      question:
        "If Bus Tie Contactor is pressed in flight, what happens to Electrical Configuration of the aircraft?",
      options: [
        "AC Bus 1 and AC Essential bus is supplied by AC bus 2",
        "AC Bus 2 supplies all DC buses",
        "Only AC essential will be supplied by AC bus 2",
        "There is no change to electrical configuration",
      ],
      answer: 3,
    },
    {
      id: 5,
      question: "What is Balanced field length?",
      options: ["TODR =ASDR", "TODA = ASDA", "TODR = TODA", "None of the above"],
      answer: 0,
    },
    {
      id: 6,
      question: "V2 cannot be less than",
      options: ["1.1 Vso", "1.05 vmcg", "1.1 VMCA", "1.15 VR"],
      answer: 2,
    },
    {
      id: 7,
      question:
        "Considering TODA, TORA, ASDA requirements are met, which of the following are true?",
      options: [
        "Increasing ratio of V1/ VR will increase Maximum take off weight",
        "decreasing ratio of V1 / VR will increase Maximum take off weight",
        "Increasing ratio of V1 /VR will not create any change to Maximum take off Weight",
        "None of the above",
      ],
      answer: 0,
    },
    {
      id: 8,
      question: "How is Take off performance affected at high pressure altitude airports?",
      options: ["TODR increases", "TODR decreases", "TODA increases", "ASDA increases"],
      answer: 0,
    },
    {
      id: 9,
      question:
      "Given Data:\n\n1. Trip fuel: 63 gallons\n2. Contingency: 5% of trip (3.15 gallons)\n3. Alternate + Final reserve fuel: 17 gallons\n4. Usable fuel at Take Off: 93 gallons\n\nBy halfway point, you have burnt off 40 gallons of fuel. At the time of reaching destination, would you have utilised your Fuel Reserve?",
      options: [
        "Yes, some amount of fuel would be utilised from Fuel reserve",
        "No, as 30 gallons would still be left in tanks after landing.",
        "No, as 28 Tonnes of reserve fuel is available at takeoff",
        "None of the above",
      ],
      answer: 0,
    },
    {
      id: 10,
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
      id: 11,
      question: "Which LGCIU supplies landing gear indicator panel?",
      options: [
        "LGCIU 2",
        "LGCIU 1",
        "Both LGCIU",
        "as in (b) as long as LGCIU 1 is electrically supplied",
      ],
      answer: 3,
    },
    {
      id: 12,
      question: "When does Landing gear safety valve open?",
      options: [">260kts", "<260 ktS", "<250 ktS", ">250kts"],
      answer: 1,
    },
    {
      id: 13,
      question: "When does BSCU change channel?",
      options: [
        "each LG retraction cycle",
        "each LG extension cycle",
        "after landing speed below 70 kts",
        "When electric supply is cut off to BSCU",
      ],
      answer: 1,
    },
    {
      id: 14,
      question:
        "If Engine 1 has failed and only Engine 2 is working, how is hydraulic reservoir pressurized ?",
      options: [
        "HP stage of engine 1",
        "by HP stage of engine 2",
        "IP stage of engine 1",
        "crossbleed duct",
      ],
      answer: 3,
    },
    {
      id: 15,
      question: "How is Manual mode of outflow valve controlled?",
      options: ["Via CPC 2", "Via back up section of CPC 1", "By operating CPC", "Via ACSC 1"],
      answer: 1,
    },
    {
      id: 16,
      question: "When does pack flow go to High Flow automatically?",
      options: [
        "Single pack operation.",
        "When Pack flow Low is selected and temperature demand cannot be satisfied.",
        "When passenger load is high and to provide adequate cooling.",
        "As in (a) or if APU is supplying bleed.",
      ],
      answer: 3,
    },
    {
      id: 17,
      question:
        "What would be the consequence of pressing the Ditching Pushbutton and connecting Low pressure ground cart simultaneously?",
      options: [
        "All valves below the flotation line will close.",
        "Differential pressure will build up",
        "Residual Pressure Control Unit opens safety Valves",
        "Safety Valves open due to rise of differential pressure",
      ],
      answer: 1,
    },
    {
      id: 18,
      question: "When is Avionics Ventilation supplied by air from Air conditioning?",
      options: [
        "Open Configuration",
        "Intermediate configuration",
        "Smoke Congifuration",
        "As in (C) or in case of Blower Fault or Extract Fault",
      ],
      answer: 3,
    },
    {
      id: 19,
      question:
        "What is course of action when FMGS information is not available forautomatic pressurization?",
      options: [
        "Descend to 10,000ft",
        "Nothing as CPC2 will take over",
        "Select Manual Mode via Mode Selector Pushbutton to control outflow valve manually",
        "Use Landing Elevation Knob",
      ],
      answer: 3,
    },
    {
      id: 20,
      question: "Which configuration is likely when Bleed Valve is Closed?",
      options: ["Hp valve closes", "Hp valve opens", "LP valve opens", "LP valve closes"],
      answer: 0,
    },
    {
      id: 21,
      question: "When is Ram air inlet flap normally open?",
      options: [
        "Differential pressure more than 1",
        "Differential pressure less than 1.",
        "20 Seconds after landing and when speed is below 70 kts",
        "Both (B) and (C)",
      ],
      answer: 2,
    },
    {
      id: 22,
      question:
        "When does Amber light of Gen 1 line PB,on EMER ELEC PANEL illuminate?",
      options: [
        "when fire is detected in avionics Bay",
        "when smoke is detected in Avionics ventilation duct",
        "When fault is detected in Generator 1",
        "none of the above",
      ],
      answer: 1,
    },
    {
      id: 23,
      question: "Which DMC is supplied by ADIRU 3?",
      options: ["DMC 1 and 2", "DMC 2 and 3", "DMC 1 and 3", "All 3 DMC"],
      answer: 3,
    },
    {
      id: 24,
      question: "When will Lever asymmetry flash?",
      options: [
        "when one thrust lever is in climb or FLX/MCT detent and other is not in this detent",
        "if asymmetry is present in both thrust levers",
        "when one thrust lever is in MCT and other in climb",
        "one thrust lever in MCT and the other thrust lever is in idle",
      ],
      answer: 0,
    },
    {
      id: 25,
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
      id: 26,
      question: "What happens if APU Fire test is performed while APU is running?",
      options: [
        "APU performs a Auto Shutdown",
        "APU keeps operating normally",
        "APU does an Auto Shutdown and fire extinguishers are discharged",
        "None of the above",
      ],
      answer: 1,
    },
    {
      id: 27,
      question: "Below which altitude, can APU be started on batteries only?",
      options: ["41000 feet", "25000 feel", "22500 feet", "20000 feet"],
      answer: 1,
    },
    {
      id: 28,
      question: "Normally, how is fuel to the APU supplied?",
      options: [
        "Right side of the A320 Fuel sytem",
        "APU has an independent fuel pump which supplies fuel normally",
        "Left fuel feed line",
        "Only Center Tanks supply fuel to APU",
      ],
      answer: 2,
    },
    {
      id: 29,
      question: "which computer monitors APU Bleed?",
      options: ["BMC2", "BMC1, if BMC2 is inoperative", "BMC1 only", "ECB"],
      answer: 3,
    },
    {
      id: 30,
      question: "Which tanks can provide gravity fuel feeding to engines?",
      options: ["Vent tank", "Inner wing tank", "Center tank", "All of the Above"],
      answer: 1,
    },
    {
      id: 31,
      question:
        "What happens to center tank pump when wing tank pumps reach underfull sensor ?",
      options: [
        "They stop running, as long as slats are retracted",
        "They start running, as long as slats are retracted",
        "They run only when 750kgs of inner wing tank fuel is remaining.",
        "They stop running only when 750kgs of inner wing tank fuel is remaining.",
      ],
      answer: 1,
    },
    {
      id: 32,
      question:
        "Which computer controls Elevators? (With ELAC2 failed and blue hydraulic failure)",
      options: ["ELAC1", "SEC 2", "SEC 1", "None of the above."],
      answer: 1,
    },
    {
      id: 33,
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
      id: 34,
      question: "What occurs when ENG master Switch turned off?",
      options: [
        "HP valve and LP Valve both closes",
        "Ignitor is no longer energized",
        "Eng start valve closes",
        "All of the above",
      ],
      answer: 3,
    },
    {
      id: 35,
      question:
        "If flying at TOGA thrust, how can thrust he brought down to MCT ?",
      options: [
        "Set at least one lever to climb gate before setting MCT detent",
        "Bring both thrust levers to FLX MCT gate",
        "First bring both thrust levers to CLB gate and then set at FLX MCT gate",
        "Set one thrust lever to idle and other on TOGA",
      ],
      answer: 1,
    },
    {
      id: 36,
      question: "When is Approach idle mode active?",
      options: [
        "It activates when flap setting is in a position other than zero",
        "Its regulated according to bleed system demand",
        "It's regulated according to ambient conditions",
        "Both b and c",
      ],
      answer: 0,
    },
    {
      id: 37,
      question:
        "If Accelerating on Western heading in northern hemisphere, the compass needle will turn",
      options: [
        "clockwise towards North",
        "anti clockwise towards North",
        "Clockwise towards South",
        "No change",
      ],
      answer: 0,
    },
    {
      id: 38,
      question:
        "Aircraft is on a airway and 100 NM away from a VOR station. The edge of the airway would be indicated by how many dots deviation on CDI? ( consider one dot as 2 degrees and a standard airway width of 10 nm)",
      options: ["2 dot", "1 dot", "3 dot", "1.5 dot"],
      answer: 3,
    },
    {
      id: 39,
      question: "What do you mean by standard time?",
      options: ["UTC", "local mean time", "set by official authorities of country", "one or more"],
      answer: 2,
    },
    {
      id: 40,
      question: "What is purpose of Decision Point procedure?",
      options: [
        "To carry minimum fuel",
        "To calculate contingency fuel",
        "Safe conduct of flight",
        "for reduced landing weight",
      ],
      answer: 1,
    },
    {
      id: 41,
      question: "What is TODA ?",
      options: [
        "TORA + clearway",
        "TORA + stopway",
        "TORA + stowaway + clearway",
        "TORA + ASDR",
      ],
      answer: 0,
    },
    {
      id: 42,
      question: "Gross performance is used for?",
      options: ["Obstacle clearance", "certification", "Airworthiness", "None of the above"],
      answer: 1,
    },
    {
      id: 43,
      question: "On a dry runway the accelerate stop distance is decreased",
      options: [
        "by Uphill slope",
        "by headwind",
        "low OAT",
        "by a lower take-off mass because the aeroplane accelerates faster to V1",
      ],
      answer: 0,
    },
    {
      id: 44,
      question: "High Ambient Temperature (OAT) will ?",
      options: [
        "increase the field limited take of mass (TOM)",
        "decrease the TODR",
        "increase the climb limited take of mass(TOM)",
        "decrease the brake enrgy limited take off mass(TOM)",
      ],
      answer: 3,
    },
    {
      id: 45,
      question: "when ASDA is restricting ?",
      options: [
        "V1/Vr increasing, TOW increases",
        "V1/Vr increasing, TOW decreases",
        "no effect on TOW",
        "none of the above",
      ],
      answer: 1,
    },
    {
      id: 46,
      question: "when is LOW ACCURACY displayed?",
      options: [
        "EPU is greater than required nav accuracy",
        "FM postion and RADIO position difference exceeds limits",
        "both a & b",
        "none of the above",
      ],
      answer: 2,
    },
    {
      id: 47,
      question: "ENG ANTI ICE indications are displayed on which SD PAGE?",
      options: [
        "BLEED SD",
        "PRESS SD",
        "COND SD",
        "not displayed on any SD page",
      ],
      answer: 3,
    },
    {
      id: 48,
      question: "what happens when WING ANTI ICE is used on the ground?",
      options: [
        "works normally",
        "is not available on the ground",
        "opens for 30 seconds and then closes (test sequence)",
        "none of the above",
      ],
      answer: 2,
    },
    {
      id: 49,
      question: "flight control surfaces are ?",
      options: [
        "electrically controlled and mechanically actuatated",
        "mechanically controlled and hydraulically actuatated",
        "electrically controlled and hydraulically actuatated",
        "hydraulically controlled and mechanically actuatated",
      ],
      answer: 2,
    },
    {
      id: 50,
      question:
        "Can a fuel imbalance check list be used when a fuel leak is suspected?",
      options: [
        "yes, a fuel imbalance check list can be used after fuel leak is confirmed",
        "no, a fuel imbalance procedure can not be used if a fuel leak is suspected",
        "yes, incase of a fuel leak you can use fuel imbalance check list to balance the tanks",
        "there is no reason to suspect a fuel leak in case there is an imbalance",
      ],
      answer: 1,
    },
    {
      id: 51,
      question: "how much time does a fast allignment of the IRS take?",
      options: ["2 minutes", "10 minutes", "1 minute", "30 seconds"],
      answer: 3,
    },
    {
      id: 52,
      question: "when should a fast allignment be done ?",
      options: [
        "A fast IRS alignment must be performed if a complete IRS alignment is not necessary",
        "and the difference between the IRS position and the FMGC position is at or above 5 NM (see MCDU POSITION MONITOR page).",
        "both a & b",
        "when ever the time is less, to expedite departure as per company policy",
      ],
      answer: 2,
    },
    {
      id: 53,
      question: "how do you engage MCT ?",
      options: [
        "by moving thrust levers to MCT detent",
        "From FLX to MCT by moving the thrust lever to TOGA or CL, then back to MCT",
        "both a & b",
        "by disengaging auto thrust",
      ],
      answer: 2,
    },
    {
      id: 54,
      question: "when is ALPHA SPEED LOCK function inhibited?",
      options: [
        "it cant be inhibited as it is a protection against stall",
        "on ground when speed is less than 60 kts",
        "it is inhibited if thrust levers are at toga",
        "can be inhibited using the instinctive disconnect pb",
      ],
      answer: 1,
    },
    {
      id: 55,
      question: "Upper ecam DU fails, what will the lower DU display",
      options: [
        "SD",
        "EWD will automatically be displayed",
        "EWD but it will have to be manually selected",
        "EWD can only be displayed using the switching panel",
      ],
      answer: 1,
    },
    {
      id: 56,
      question: "max altitude for engine relight using apu bleed",
      options: ["15 000 ft", "20 000 ft", "25 000 ft", "no limitation"],
      answer: 1,
    },
    {
      id: 57,
      question: "when does the APU bleed valve close automatically?",
      options: ["eng 1 start", "left wing leak", "pylon 2 leak", "all of the above"],
      answer: 1,
    },
    {
      id: 58,
      question: "VMO/MMO ?",
      options: ["340 / .82", "350 / .82", "320 / .80", "300 / .78"],
      answer: 1,
    },
    {
      id: 59,
      question: "when u set the ENG MASTERS to off ?",
      options: [
        "Closes the LP and the HP fuel shutoff valves",
        "Stops to energize the ignitor",
        "Closes the engine start valve",
        "all of the above",
      ],
      answer: 3,
    },
    {
      id: 60,
      question: "GPWS SYS PB off?",
      options: [
        "EGPWS system is switched off",
        "basic modes of gpws sys are off",
        "only mode 5 is lost",
        "none of the above",
      ],
      answer: 1,
    },
  ],
};
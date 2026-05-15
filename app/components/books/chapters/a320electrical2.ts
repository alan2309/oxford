import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - ELECTRICAL - 02",
  questions: [
    {
      id: 1,
      question: "The engine generators and APU generator are rated at.......... KVA.",
      options: ["50", "70", "90", "110"],
      answer: 2
    },
    {
      id: 2,
      question: "What is the rating of EMER GEN?",
      options: ["90 kva", "5 kva", "1 kva"],
      answer: 1
    },
    {
      id: 3,
      question: "The AC Bus 1 channel normally supplies power to:",
      options: ["TR2 / AC ESS", "TR1 / AC ESS / DC ESS", "TR1 / AC ESS"],
      answer: 2
    },
    {
      id: 4,
      question: "The DC BAT BUS is normally powered by:",
      options: ["DC BUS 2", "DC BUS 1 and DC BUS 2", "DC BUS 1"],
      answer: 2
    },
    {
      id: 5,
      question: "The A-320 has………batteries in its main electrical system.",
      options: ["1", "2", "3", "3 (4 when ETOPS capable)"],
      answer: 1
    },
    {
      id: 6,
      question: "Is it possible to determine the source of power for aircraft busses?",
      options: [
        "It is indicated on the electrical schematic overhead.",
        "No it is not possible.",
        "Yes, press the ECAM ELEC push button and view the electrical schematic on the ECAM",
        "Only when operating in the Emergency Electrical Configuration."
      ],
      answer: 2
    },
    {
      id: 7,
      question: "You enter a dark cockpit, what action is necessary before checking the battery voltages?",
      options: [
        "You have to check that the external power is on.",
        "You have to ensure that at least one battery is on.",
        "You have to ensure that both batteries are on",
        "You have to verify that both batteries are off."
      ],
      answer: 3
    },
    {
      id: 8,
      question: "After starting the APU, how can you get the APU generator to power the electrical system?",
      options: [
        "By switching the APU generator on.",
        "By pushing the EXT PWR pushbutton thus disconnecting the external power, if it was ON.",
        "By pushing the BUS TIE pushbutton."
      ],
      answer: 1
    },
    {
      id: 9,
      question: "What is the meaning of the green AVAIL light in EXT PWR p/b?",
      options: [
        "External power is plugged in and parameters are normal. You must push the EXT PWR p/b to connect it.",
        "External power is available to the batteries only",
        "The external power panel door has been opened",
        "External power is supplying the aircraft systems"
      ],
      answer: 0
    },
    {
      id: 10,
      question: "What does the blue EXT PWR ON light mean?",
      options: [
        "External power is plugged in and parameters are normal",
        "External power is supplying the aircraft's electrical system.{AVAIL light will go off when you press EXT PWR to on when AVAIL green light was on}",
        "There is a fault with the external power."
      ],
      answer: 1
    },
    {
      id: 11,
      question: "You have started both engines with the help of EXT PWR",
      options: [
        "Blue ON light stays ON even when engine generators supply a/c.",
        "Due to priority logic, when both engine generators are supplying, EXT PWR ON Blue light goes off."
      ],
      answer: 0
    },
    {
      id: 12,
      question: "APU generator is powering the electrical network. Now AVAIL light comes on in Cockpit as EXT PWR is connected to a/c. What changes will take place ?",
      options: [
        "No change",
        "APU Generator will go off line and EXT PWR will feed all busses since EXT PWR has priority over APU generator.",
        "Both APU generator and EXT PWR will feed all busses.",
        "APU generator will feed AC BUS 1 and EXT PWR will feed AC BUS 2."
      ],
      answer: 0
    },
    {
      id: 13,
      question: "Ground power is connected to all busses. After engine 1 is started (GEN 1 is switched on). What changes will takes place on electrical network?",
      options: [
        "No change",
        "GEN 1 feeds AC BUS 1, EXT PWR continues to feed AC BUS 2",
        "GEN 1 feeds AC BUS 1, and AC BUS 2.",
        "GEN 1 feeds AC BUS 1, AC BUS 2 is not powered."
      ],
      answer: 1
    },
    {
      id: 14,
      question: "The APU is supplying the electrical system. After ENG 2 start, what is supplying AC BUS1 and AC BUS 2?",
      options: [
        "Engine 2 to AC BUS 1 & APU to AC BUS 2",
        "APU to AC BUS 1 & Engine 2 to AC BUS 2.",
        "Engine 2 will supply both buses.",
        "APU will supply both buses"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "What is the function of APU GEN push button located on the overhead electrical panel?",
      options: [
        "Push this button to automatically start the APU.",
        "When selected to OFF the APU generator field is de-energized",
        "Both are correct."
      ],
      answer: 1
    },
    {
      id: 16,
      question: "During a routine flight, which of the following would result after the loss of Gen #2 and the subsequent start of the APU?",
      options: [
        "The APU would now power both sides of the electrical system",
        "All systems return to normal and the RAT must be restowed",
        "Eng gen #1 continues to power AC bus #1 and downstream systems. The APU powers AC bus #2 and downstream systems."
      ],
      answer: 2
    },
    {
      id: 17,
      question: "Engine #1 has just been started and the APU is inoperative. The EXT PWR push button blue ON light is illuminated. Which of the statements below is correct?",
      options: [
        "External power is supplying all electrical needs.",
        "Engine Gen #1 is supplying AC bus #1 and the downstream systems, and AC bus #2 through the bus tie contactors.",
        "Gen #1 supplies AC bus #1 and the downstream systems; Ext power supplies AC bus #2"
      ],
      answer: 2
    },
    {
      id: 18,
      question: "In a flight, where APU is not working what happens when GEN 1 falls.?",
      options: [
        "Most of the busses are lost; only NO. 2 busses are available.",
        "GEN 2 feed all busses.",
        "As in (b) but main galley is shed automatically.",
        "ESS TR will come on line.."
      ],
      answer: 2
    },
    {
      id: 19,
      question: "What is lost in a flight if both engine generators are powering the system, and one subsequently fails?",
      options: [
        "Only the AC ESS SHED Bus.",
        "Main galley is shed.",
        "Those buses which are associated with the failed generator."
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Which of the following is NOT possible ?",
      options: [
        "APU GEN powering AC BUS 1 and the same time EXT PWR powering AC BUS 1.",
        "GEN 1 powering both AC BUS 1 and AC BUS 2.",
        "GEN 1 powering AC BUS 1 and APU GEN powering AC BUS 2.",
        "EXT PWR powering AC BUS 1 and GEN 2 powering AC BUS 2."
      ],
      answer: 0
    },
    {
      id: 21,
      question: "In the normal electrical configuration, if AC BUS 1 is lost for any reason, what will happen to AC ESS BUS and also to AC ESS SHED BUS.",
      options: [
        "They are lost and can be regained only by Emer generator",
        "They are lost but can be regained from AC BUS 2 pressing AC ESS FEED pb switch to ALTN",
        "As in (b) and AC BUS 2 will then feed DC ESS BUS and DC ESS SHED BUS also through AC ESS BUS and ESS TR"
      ],
      answer: 2
    },
    {
      id: 22,
      question: "In normal electrical configuration (GEN 1, GEN 2 are ON) is there any of bus that is not energized.",
      options: [
        "Yes; AC STAT INV BUS",
        "Yes; AC STAT INV BUS, AC GND FLT BUS, DC GND FLT BUS",
        "Yes; AC STAT INV BUS, AC S",
        "No"
      ],
      answer: 1
    },
    {
      id: 23,
      question: "Mark the correct statement ?",
      options: [
        "AC/DC ESS SHED BUS are powered whenever AC/DC ESS BUS are powered.",
        "When EMER GEN is running, after loss of normal generators, AC/DC ESS SHED busses are powered"
      ],
      answer: 1
    },
    {
      id: 24,
      question: "In a stationary aircraft with no AC source available. Which AC buses are available.",
      options: [
        "AC STAT INV BUS, if both batt. Switches are at AUTO",
        "AC STAT INV, AC ESS BUS if both battery switches are at AUTO",
        "AC STAT INV even if battery switches are off.",
        "AC STAT INV, if BATT 1 switch is at AUTO."
      ],
      answer: 0
    },
    {
      id: 25,
      question: "When does the RAT automatically deploy?",
      options: [
        "With the loss of G + Y dual Hydraulic systems",
        "Electrical power to both AC BUS #1 & #2 is lost and the aircraft speed is above 100 knots.",
        "Both are correct."
      ],
      answer: 1
    },
    {
      id: 26,
      question: "When both generators fail and the aircraft goes into ELEC EMER CONFIG:",
      options: [
        "AC ESS BUS is fed from BAT 1 through STAT INV till RAT extends",
        "AC ESS BUS is fed from Emergency generator after the RAT extends.",
        "AC ESS BUS is not powered below 50 kt speed.",
        "All the above are correct."
      ],
      answer: 3
    },
    {
      id: 27,
      question: "In cruise, you have suddenly a Master Warning and caution comes on with ELEC EMER CONFIG and AP OFF. You notice a red FAULT light on the RAT & EMER GEN pushbutton. What do you think of this indication?",
      options: [
        "The EMER GEN is not yet supplying the system",
        "The RAT has failed. You will have to turn the batteries to OFF.",
        "The FAULT light is always on when are in ELEC EMER CONFIG",
        "The RAT has failed, you have to try to reconnect both IDG's."
      ],
      answer: 0
    },
    {
      id: 28,
      question: "When will the RAT & EMER GEN red FAULT light illuminate?",
      options: [
        "When the EMER GEN is not supplying electrical power, AC busses #1 & #2 are unpowered",
        "When the RAT is deployed using hydraulic RAT MAN ON push button.",
        "Both are correct.",
        "ESS DC, ESS DC SHED, ESS AC and ESS AC SHED."
      ],
      answer: 0
    },
    {
      id: 29,
      question: "What is the electrical configuration during the initial 8 seconds when RAT is extending and until EMER GEN comes on line:",
      options: [
        "The BATTERIES power BAT HOT buses, DC ESS SHED, and AC ESS SHED through the STATIC INVERTER.",
        "The BATTERIES power BAT HOT buses, DC ESS, and AC ESS through the STATIC INVERTER",
        "The STATIC INVERTER powers BAT HOT busses, DC ESS, and AC ESS through the AC ESS SHED buses.",
        "The BATTERIES power both BAT HOT buses."
      ],
      answer: 1
    },
    {
      id: 30,
      question: "Which buses will be powered after the RAT is extended and the EMER GEN begins producing power?",
      options: [
        "BAT HOT buses, DC ESS, DC ESS SHED, AC ESS and AC ESS SHED.",
        "The STATIC INVERTER would power both HOT BAT buses, ESS DC and ESS AC through the ESS AC SHED buses.",
        "The BATTERIES would power both HOT BAT buses, ESS DC and ESS AC through the STATIC INVERTER."
      ],
      answer: 0
    },
    {
      id: 31,
      question: "Which of the following AC buses are powered by the emergency generator?",
      options: ["AC bus 1", "AC bus 2", "AC ESS bus"],
      answer: 2
    },
    {
      id: 32,
      question: "The emergency generator supplies power as long as:",
      options: [
        "The landing gear is down.",
        "The RAT is deployed and not stalled.",
        "The RAT is deployed and the landing gear is down.",
        "The landing gear is up."
      ],
      answer: 1
    },
    {
      id: 33,
      question: "The RAT is connected directly (mechanically) to the Emergency Generator",
      options: ["True", "False"],
      answer: 1
    },
    {
      id: 34,
      question: "The drive for emergency generator is",
      options: [
        "RAT operated hydraulic motor",
        "Blue system electrical pump.",
        "Ram Air Turbine",
        "None of the above."
      ],
      answer: 0
    },
    {
      id: 35,
      question: "While operating on Emergency Electrical Power (EMER GEN powering the system) how is it possible to properly complete the ECAM checklist with only an upper display?",
      options: [
        "Depress and hold the specific ECAM page push button on the ECAM control panel to a max of 3 min.",
        "Transfer occurs automatically.",
        "This is not possible. Use the cockpit operating manual."
      ],
      answer: 0
    },
    {
      id: 36,
      question: "While operating on Emergency Electrical Power (EMER GEN powering the system) what should the crew accomplish during approach?",
      options: [
        "Check to see that the FMGC has auto tuned the appropriate NAV facility for the approach to be accomplished.",
        "Depress the guarded RMP NAV push button and tune the appropriate NAV facility and course for the approach to be accomplished.",
        "Both are correct."
      ],
      answer: 1
    },
    {
      id: 37,
      question: "What is the function of the GEN 1 LINE push button?",
      options: [
        "When selected OFF the avionics compartment isolation valves close.",
        "When selected OFF the #1 generator powers all AC busses.",
        "When selected OFF generator # 1 is removed from all busses but continues to power one fuel pump in each wing."
      ],
      answer: 2
    },
    {
      id: 38,
      question: "What are the actions to be carried out to SET EMER ELEC CONFIG in smoke?",
      options: [
        "Press Gen 1 LINE switch to OFF, guarded switch MAN ON. APU GEN to OFF and then GEN 2 Switch to OFF.",
        "Press GEN 1 Line switch to OFF; guarded switch MAN ON; Press BUS TIE switch to OFF and then APU GEN and GEN 2 Switch to OFF."
      ],
      answer: 0
    },
    {
      id: 39,
      question: "When a/c is in ELEC EMER CONFIG with EMER GEN in line,",
      options: [
        "Engines loose EPR Mode and go to Un Rated N1 Mode.",
        "After landing, Thr Rev 1+2 along with Anti −Skid and Nose Wheel Steering are not available.",
        "FMGC1 is lost but can be regained.",
        "All are correct."
      ],
      answer: 3
    },
    {
      id: 40,
      question: "If emergency generator does not come into operation in case of loss of main generators, the following warnings are triggered.",
      options: [
        "EMER CONFIG + MW + CRC + ELEC page is called.",
        "RAT EMER GEN FAULT light comes on RED",
        "ESS busses on BAT + MC + SC + ELEC page is called.",
        "Both (a) and (b) are correct."
      ],
      answer: 3
    },
    {
      id: 41,
      question: "Do not depress the lDG DISCONNECT switch for more than _??_ to prevent damage to the disconnect mechanism.",
      options: ["3 seconds", "7 seconds", "10 seconds", "15 seconds"],
      answer: 0
    },
    {
      id: 42,
      question: "The IDG FAULT light indicates:",
      options: [
        "An IDG oil overheat",
        "IDG low oil pressure",
        "IDG low oil pressure or IDG oil overheat",
        "IDG has been disconnected"
      ],
      answer: 2
    },
    {
      id: 43,
      question: "What precautions are to be observed while disconnecting IDG?",
      options: [
        "Do not disconnect the IDG if engine is running.",
        "Do not disconnect the IDG if engine is not running or not wind milling.",
        "IDG pb switch should not be pressed for more than 3 seconds.",
        "Both (B) and (C) above are correct"
      ],
      answer: 3
    },
    {
      id: 44,
      question: "Can you reconnect an IDG in flight?",
      options: [
        "Yes, but only after contacting maintenance control.",
        "Yes, push and hold the IDG pb until the GEN fault light is goes out.",
        "No, it is not possible."
      ],
      answer: 2
    },
    {
      id: 45,
      "question": "How will you know that IDG is disconnected?\n\n1. If FAULT light was on before disconnection, it extinguishes when the IDG is disconnected.\n2. Related GEN FAULT light will come.\n3. The DISC legend appears in amber, when the IDG is disconnected on ELEC ECAM Page.\n4. The IDG legend is normally white, but becomes amber on ELEC ECAM Page.",
      options: ["1,3,4", "1,2,4", "1,2,3,4"],
      answer: 2
    },
    {
      id: 46,
      question: "After IDG disconnection why do you get a GALLEY SHED indication on the SD?",
      options: [
        "It is a reminder to push the GALLEY pushbutton to manually shed the main galley",
        "It is a reminder to get the flight attendants to switch off galley equipment to decrease the load on the remaining generator.",
        "It is a reminder that the main galley has been shed automatically following the loss of one generator."
      ],
      answer: 2
    },
    {
      id: 47,
      "question": "When IDG oil outlet temperature exceeds its normal limit of 147 °C…\n\n1. It is an advisory.\n2. The ELEC page is automatically called on the SD, and temperature indication pulses green.\n3. The respective IDG must be disconnected.\n4. The pilot may select the GALY & CAB p/b. to OFF.",
      options: ["1,2,3", "1,2,4"],
      answer: 1
    },
    {
      id: 48,
      question: "What would cause the GALLEY FAULT light to illuminate with ECAM caution?",
      options: [
        "The flight attendants have all the coffee makers and ovens on at once.",
        "The Main Galley has shed",
        "The load on any generator is above 100% of it's rated output.",
        "The Aft Galley has shed."
      ],
      answer: 2
    },
    {
      id: 49,
      question: "GALLEY SHED message on Elect page indicates",
      options: [
        "Main GALLEY are SHED",
        "secondary Galley are shed",
        "FWD Galley power are shed.",
        "Aft Galley power are shed"
      ],
      answer: 0
    },
    {
      id: 50,
      "question": "GALLEY SHED indicator on electrical page appears when:\n\n1. GALLEY Push Button switch is OFF.\n2. Load on any generator is more than 100% of rated output.\n3. The main galleys are shed.",
      options: ["1,2,3", "2,3", "1,3"],
      answer: 2
    },
    {
      id: 51,
      question: "What happens to DC busses when TR 1 fails ?",
      options: [
        "All busses are available by auto reconfiguration by using TR 2 and ESS TR",
        "DC BUS 1 DC BAT BUS are lost",
        "DC BUS 1 is lost.",
        "DC BAT BUS is lost till 100 KTS"
      ],
      answer: 0
    },
    {
      id: 52,
      question: "What happens when TR 1 fails.",
      options: [
        "DC BUS 1 power is lost.",
        "DC BUS 1 and BAT BUS are lost.",
        "DC BUS 2 gives power to DC ESS BUS",
        "ESS TR operated from AC ESS BUS"
      ],
      answer: 3
    },
    {
      id: 53,
      question: "Which busses are lost if TR 1, TR 2 had failed?",
      options: [
        "No bus is lost",
        "DC BUS 1, DC BUS 2",
        "DC BUS 1, DC BAT BUS, DC BUS 2",
        "DC BAT BUS after landing gear extension."
      ],
      answer: 2
    },
    {
      id: 54,
      question: "ESS TR parameters on ECAM ELEC page.",
      options: [
        "Are always displayed",
        "Are displayed only when ESS TR is in operation",
        "Are displayed only when ESS TR parameters exceed the limitations.",
        "None of the above is correct."
      ],
      answer: 1
    },
    {
      id: 55,
      question: "For normal electrical power operation which of the following are not in operation.",
      options: [
        "AC ESS BUS , DC ESS BUS and AC STAT INV BUS",
        "ESS TR, EMER GEN, STAT INV and STAT INV AC BUS",
        "ESS TR, EMER GEN, AC ESS BUS",
        "ESS TR, AC ESS BUS, DC ESS BUS"
      ],
      answer: 1
    },
    {
      id: 56,
      question: "What is the advisory message in Electrical system.",
      options: ["IDG LO PR", "IDG Temp > 147 Deg.", "ESS TR, EMER GEN, AC ESS BUS", "IDG DISC"],
      answer: 1
    },
    {
      id: 57,
      question: "On ECAM ELEC page % load on the source is indicated for",
      options: [
        "APU, GEN 1, GEN 2, and EXT PWR",
        "GEN 1, GEN 2 and APU GEN",
        "GEN 1, GEN 2 & STAT INV",
        "APU GEN 1, GEN 2 & EMER GEN"
      ],
      answer: 1
    },
    {
      id: 58,
      question: "GEN 1 OFF white lt illuminates on O/H panel. What does it mean?",
      options: [
        "GEN 1 has failed and will trigger the level 3 warning.",
        "This is in normal position",
        "That switch is in OFF position."
      ],
      answer: 2
    },
    {
      id: 59,
      question: "On the ECAM ELEC page shed appears amber if",
      options: [
        "AC ESS BUS is shed",
        "DC ESS BUS is shed",
        "AC and DC ESS SHED buses are shed",
        "AC and DC ESS SHED busses are powered."
      ],
      answer: 2
    },
    {
      id: 60,
      question: "The BAT FAULT light will illuminate when:",
      options: [
        "Battery voltage is low",
        "Charging current increases at an abnormal rate",
        "Charging current decreases at an abnormal rate."
      ],
      answer: 1
    },
    {
      id: 61,
      question: "Which voltage requires recharging the batteries?",
      options: ["20 volts or less", "24 volts or less", "24 volts or less.", "25.5 volts or less."],
      answer: 3
    },
    {
      id: 62,
      question: "If batteries are the only source of power in flight, how long will battery power be available?",
      options: [
        "Between 22 and 30 minutes depending on equipment in use.",
        "Until the APU is started",
        "Two hours and 30 minutes dependent on equipment in use.",
        "45 minutes dependent on equipment is use."
      ],
      answer: 0
    },
    {
      id: 63,
      question: "Both batteries are charged by the external power unit. Approximately how long does the charging process take?",
      options: ["10 minutes.", "20 minutes.", "30 minutes.", "Between 30 & 45 minutes."],
      answer: 1
    },
    {
      id: 64,
      question: "When are the Essential Shed buses powered by the battery?",
      options: [
        "Never. The purpose of the shed buses is to reduce the load on the batteries.",
        "In case of double generator failure.",
        "After every IDG connection"
      ],
      answer: 0
    },
    {
      id: 65,
      question: "What will happen to batteries during APU start (Battery switches are in AUTO)",
      options: [
        "Both batteries are connected to DC BAT BUS till APU rpm reaches 95%",
        "As in (a) and it is restrictedto only 3 minutes when EMER GEN is running.",
        "As in (a) and it is restricted to only 3 minutes when electrical busses are powered by any generator.",
        "As in (b) but battery contactors will open when APU reaches 50% i.e. when APU starter motor is disengaged."
      ],
      answer: 1
    },
    {
      id: 66,
      question: "The purpose of the BUS TIE in AUTO is to allow either GEN to automatically power both main AC buses in the event of a generator loss until either ground power or the APU generator is activated.",
      options: ["True", "False"],
      answer: 0
    },
    {
      id: 67,
      question: "If during a normal flight the BUS TIE push button is depressed to `OFF', what effect would this have on power to the buses?",
      options: [
        "None.",
        "All power would be lost and the aircraft would be powered by the batteries until the RAT deploys.",
        "The AC ESS Bus will be supplied by AC Bus 2.",
        "This is not possible as the bus tie contactors are locked out during flight."
      ],
      answer: 0
    },
    {
      id: 68,
      question: "BUS TIE p/b switch is OFF and only GEN 1 is available. Which buses are not powered.",
      options: [
        "AC BUS 2, DC BUS 2",
        "All busses are powered",
        "AC BUS 2",
        "AC BUS 2, DC ESS BUS, DC ESS SHED BUS."
      ],
      answer: 2
    },
    {
      id: 69,
      question: "When you press AC ESS FEED switch (located on the overhead panel), the AC ESS bus is supplied from:",
      options: ["AC bus 2", "AC bus 1", "AC ESS Bus is isolated from the circuit."],
      answer: 0
    },
    {
      id: 70,
      question: "What is the significance of the green collared circuit breakers?",
      options: [
        "Green collared circuit breakers are pulled when flying on battery power only.",
        "Green collared circuit breakers are monitored by the ECAM.",
        "Green collared circuit breakers are not to be reset.",
        "Green collared circuit breakers are AC powered"
      ],
      answer: 1
    },
    {
      id: 71,
      "question": "About CIRCUIT BREAKERS, select the correct statements:\n\n1. Green CBs are monitored and when out for more than 1 min, the C/B TRIPPED is triggered on the ECAM.\n2. If you clear the ECAM C/B TRIPPED caution by pressing CLR p/b and if the C/B remains pulled, any additional tripped circuit breakers on the same panel will not be detected, and the ECAM will not trigger the caution.\n3. If you clear the ECAM C/B TRIPPED caution by pressing EMER CANC p/b, it clears and inhibits the ECAM C/B TRIPPED caution for the remainder of the flight.",
      options: ["1,2", "1,3", "1,2,3"],
      answer: 2
    },
    {
      id: 72,
      "question": "About C/B REENGAGEMENT:\n\n1. On ground, do not reengage the C/B of the fuel pump(s) of any tank.\n2. Do not pull the circuit breakers for SFCC (could lead to SLATS/FLAPS locked) or for EEC and EIU.\n3. Do not pull the circuit breakers for BSCU (Brake Steering Control Unit) if the aircraft is not stopped.",
      options: ["1,2,3", "1,2", "3"],
      answer: 0
    },
    {
      id: 73,
      question: "The engine generators and APU generator are rated at KVA.",
      options: ["50", "70", "90", "110"],
      answer: 2
    },
    {
      id: 74,
      question: "What is the rating of EMER GEN?",
      options: ["90kva", "5kva", "1kva"],
      answer: 1
    },
    {
      id: 75,
      question: "The AC Bus 1 channel normally supplies power to:",
      options: ["TR2 / AC ESS", "TR1 / AC ESS / DC ESS", "TR1 / AC ESS"],
      answer: 2
    },
    {
      id: 76,
      question: "The DC BAT BUS is normally powered by:",
      options: ["DC BUS 2", "DC BUS 1 and DC BUS 2", "DC BUS 1/TR1"],
      answer: 2
    },
    {
      id: 77,
      question: "The A-320 has batteries in its main electrical system.",
      options: ["1", "2", "3", "3 (4 when ETOPS capable)"],
      answer: 1
    },
    {
      id: 78,
      question: "Is it possible to determine the source of power for aircraft busses?",
      options: [
        "It is indicated on the electrical schematic overhead.",
        "No it is not possible.",
        "Yes, press the ECAM ELEC push button and view the electrical schematic on the ECAM",
        "Only when operating in the Emergency Electrical Configuration."
      ],
      answer: 2
    }
  ]
};
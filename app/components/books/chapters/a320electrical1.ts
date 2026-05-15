import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - ELECTRICAL - 01",
  questions: [
    {
      id: 1,
      question: "The number 1 AC bus channel normally supplies power to _____ and to the _____ bus which supplies power to the ______ bus.",
      options: [
        "TR2 / AC ESS SHED / DC ESS SHED",
        "TR1 / AC ESS SHED / DC ESS",
        "TR1 / AC ESS / AC ESS SHED",
        "TR1 / AC ESS / DC ESS SHED"
      ],
      answer: 2
    },
    {
      id: 2,
      question: "The normal priority for supplying electrical power to the AC busses is:",
      options: [
        "External power, engine generators then APU",
        "External power, APU, then engine generators",
        "APU, external power then engine generators",
        "Engine generators, external power then APU"
      ],
      answer: 3
    },
    {
      id: 3,
      question: "The BATTERY BUS is normally powered by:",
      options: [
        "DC BUS 2",
        "DC BUS 1 and DC BUS 2",
        "DC bus 1 through a DC tie control relay.",
        "DC bus 2 through a DC tie control relay."
      ],
      answer: 2
    },
    {
      id: 4,
      question: "When no other power is available in flight, the static inverter converts _____ power to AC power for the ______ bus; and ____ powers the _______ bus.",
      options: [
        "BAT1 DC / AC ESS bus / BAT2 / DC ESS",
        "BAT1 DC / AC ESS SHED / BAT2 / DC ESS SHED",
        "BAT1 DC / AC ESS bus / BAT2 / DC ESS SHED",
        "BAT1 DC / AC ESS bus / DC ESS"
      ],
      answer: 0
    },
    {
      id: 5,
      question: "An AC ESS FEED switch located on the overhead panel shifts the power source for the AC ESS bus from:",
      options: [
        "AC bus1 to AC bus 2",
        "AC bus 1 to AC Grnd/Flt bus",
        "AC bus 2 to AC bus 1"
      ],
      answer: 0
    },
    {
      id: 6,
      question: "Which of the following AC busses can be powered by the emergency generator?",
      options: [
        "AC bus 1",
        "AC bus 2",
        "AC ESS bus / AC ESS SHED bus"
      ],
      answer: 2
    },
    {
      id: 7,
      question: "The RAT is connected directly (mechanically) to the Emergency Generator",
      options: ["True", "False"],
      answer: 1
    },
    {
      id: 8,
      question: "After landing, in the emergency electrical configuration: the batteries automatically connect to the DC BAT bus when speed decreases below _______ knots.",
      options: ["50", "70", "90", "100"],
      answer: 3
    },
    {
      id: 9,
      question: "The BAT FAULT light will illuminate when:",
      options: [
        "Battery voltage is low",
        "Charging current increases at an abnormal rate",
        "Charging current decreases at an abnormal rate."
      ],
      answer: 1
    },
    {
      id: 10,
      question: "The IDG Fault light indicates:",
      options: [
        "An IDG oil overheat",
        "IDG low oil pressure.",
        "IDG low oil pressure or IDG oil overheat",
        "IDG has been disconnected"
      ],
      answer: 2
    },
    {
      id: 11,
      question: "If normal electrical power is lost; essential cockpit lighting is maintained for the:",
      options: [
        "Captain's instrument panel.",
        "Standby compass",
        "Right dome light (provided the dome selector is not off).",
        "All of the above."
      ],
      answer: 3
    },
    {
      id: 12,
      question: "You enter a dark cockpit, what action is necessary before checking the battery voltages?",
      options: [
        "You have to check that the external power is on.",
        "You have to ensure that at least one battery is on.",
        "You have to ensure that both batteries are on.",
        "You have to verify that both batteries are off."
      ],
      answer: 3
    },
    {
      id: 13,
      question: "Having started the APU, how can you get the APU generator to power the electrical system?",
      options: [
        "The APU generator must be switch on.",
        "By pushing the EXT PWR pushbutton thus disconnecting the external power.",
        "By pushing the BUS TIE pushbutton.",
        "You are unable to as the APU power output is outside normal parameters."
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Are there any limitations associated with disconnecting an IDG?",
      options: [
        "Never disconnect an IDG in flight, or push the IDG disconnect push button for more than 30 seconds.",
        "There is no limitation",
        "Never disconnect an IDG in flight, or push the IDG disconnect push button for more than 5 seconds.",
        "Never disconnect an IDG unless the engine is running, nor push the IDG disconnect push button for more than 3 seconds."
      ],
      answer: 3
    },
    {
      id: 15,
      question: "Which voltage requires recharging or replacing the batteries?",
      options: [
        "20 volts or less.",
        "24 volts or less.",
        "25.5 volts or less.",
        "26 volts or less."
      ],
      answer: 2
    },
    {
      id: 16,
      question: "The APU is supplying the electrical system. What is the order of priority for the different generators?",
      options: [
        "Engines, external power, APU.",
        "APU, engines, external power.",
        "External power, engines, APU.",
        "APU, external power, engines."
      ],
      answer: 0
    },
    {
      id: 17,
      question: "What is the significance of the green collared circuit breakers?",
      options: [
        "Green collared circuit breakers are pulled when flying on battery power only.",
        "Green collared circuit breakers are monitored by the ECAM.",
        "Green collared circuit breakers are not to be reset.",
        "Green collared circuit breakers are AC powered."
      ],
      answer: 1
    },
    {
      id: 18,
      question: "If batteries are the only source of power in flight, how long will battery power be available?",
      options: [
        "Between 22 and 30 minutes depending on equipment in use.",
        "Until the APU is started.",
        "Two hours and 30 minutes dependent on equipment in use.",
        "45 minutes dependent on equipment in use."
      ],
      answer: 0
    },
    {
      id: 19,
      question: "What is the minimum voltage when conducting a BATTERY CHECK?",
      options: [
        "28 volts.",
        "Less than 60 amps in 10 seconds.",
        "Greater than 24 volts.",
        "Greater than 25.5 volts."
      ],
      answer: 3
    },
    {
      id: 20,
      question: "Which flight control computer will be inoperative with gear extension while in the Emergency Electrical Configuration?",
      options: [
        "FAC 1 and ELAC 1.",
        "SEC 1",
        "SEC 1 and ELAC 1",
        "FAC 1"
      ],
      answer: 3
    },
    {
      id: 21,
      question: "If the battery voltages are below the minimum, how do you charge them?",
      options: [
        "You have to call a mechanic because the batteries can only be charged by maintenance.",
        "I have to check that the BAT pushbuttons are on and switch the external power on.",
        "I have to switch the external power to ON and switch the batteries off.",
        "I have to start the APU as the batteries can only be charged by the APU generator."
      ],
      answer: 1
    },
    {
      id: 22,
      question: "What is the function of APU GEN push button located on the overhead electrical panel?",
      options: [
        "Push this button to automatically start the APU.",
        "When selected to OFF the APU generator field is de-energized.",
        "Both are correct."
      ],
      answer: 1
    },
    {
      id: 23,
      question: "Is it possible to parallel generators?",
      options: [
        "Of course yes.",
        "Only with the RAT deployed.",
        "The electrical system will not allow \"paralleling\" of generators.",
        "Only one engine generator may be paralleled with the APU."
      ],
      answer: 2
    },
    {
      id: 24,
      question: "While operating on Emergency Electrical Power with the landing gear lowered which of the following control laws is in effect?",
      options: [
        "Backup.",
        "Direct.",
        "Alternate.",
        "Backup or alternate"
      ],
      answer: 1
    },
    {
      id: 25,
      question: "What cockpit lighting is available during an emergency electrical situation?",
      options: [
        "Emergency path lighting only.",
        "Right side Dome light, main panel flood lights (left two columns only), and the standby compass light.",
        "Located on normal circuit breaker panels.",
        "Right side dome light, main panel flood lights, and the standby compass light."
      ],
      answer: 1
    },
    {
      id: 26,
      question: "What is the function of the GEN 1 LINE push button?",
      options: [
        "When selected OFF the avionics compartment isolation valves close.",
        "When selected OFF the #1 generator powers all AC busses.",
        "When selected OFF generator # 1 is removed from all busses but continues to power one fuel pump in each wing."
      ],
      answer: 2
    },
    {
      id: 27,
      question: "During a routine flight, which of the following would result after the loss of Gen #2 and the subsequent start of the APU?",
      options: [
        "The APU would now power both sides of the electrical system.",
        "All systems return to normal and the RAT must be restowed.",
        "Eng gen #1 continues to power AC bus #1 and downstream systems. The APU powers AC bus #2 and downstream systems."
      ],
      answer: 2
    },
    {
      id: 28,
      question: "When does the RAT automatically deploy?",
      options: [
        "The APU would now power both sides of the electrical system.",
        "All systems return to normal and the RAT must be restowed.",
        "Eng gen #1 continues to power AC bus #1 and downstream systems. The APU powers AC bus #2 and downstream systems.",
        "AC BUS 1 AND AC BUS 2 HAVE FAILED, AIRCRAFT SPEED >100KTS"
      ],
      answer: 3
    },
    {
      id: 29,
      question: "During the eight seconds it takes for the RAT to extend:",
      options: [
        "The BATTERIES power both BATT HOT busses, ESS DC SHED, and ESS AC SHED through the STATIC INVERTER.",
        "The BATTERIES power both BATT HOT busses, ESS DC, and ESS AC through the STATIC INVERTER.",
        "The STATIC INVERTER powers both BATT HOT busses, ESS DC, and ESS AC through the ESS AC SHED busses.",
        "The BATTERIES power both BATT HOT busses."
      ],
      answer: 1
    },
    {
      id: 30,
      question: "The purpose of the AUTO BUS TIE is to allow either engine-driven IDG to automatically power both main AC buses in the event of a generator loss until either ground power or the APU generator is activated",
      options: ["True.", "False."],
      answer: 0
    },
    {
      id: 31,
      question: "When will the RAT & EMER GEN red FAULT light illuminate?",
      options: [
        "When the EMER GEN is not supplying electrical power, AC busses #1 & #2 are unpowered and the nose gear is up.",
        "When the RAT is deployed using hydraulic RAT MAN ON push button.",
        "Both are correct."
      ],
      answer: 0
    },
    {
      id: 32,
      question: "What is the significance of the circuit breakers on the overhead panel?",
      options: [
        "They are not monitored by ECAM.",
        "Cannot be reset.",
        "They may be operational in the Emergency Electrical Configuration.",
        "They are mainly AC powered."
      ],
      answer: 2
    },
    {
      id: 33,
      question: "If both engine generators are powering the system, and one subsequently fails, are any busses unpowered?",
      options: [
        "Only the AC ESS shed bus.",
        "No, but some loads are shed in both main galleys.",
        "Yes, those associated with the failed generator."
      ],
      answer: 1
    },
    {
      id: 34,
      question: "How many times can you reset a circuit breaker?",
      options: [
        "Once.",
        "Once, if authorized by the procedures.",
        "Twice.",
        "Twice, if authorized by the procedures"
      ],
      answer: 1
    },
    {
      id: 35,
      question: "On the cockpit overhead panel, there is a three position EMERGENCY EXIT Light switch. What lights are associated with this switch?",
      options: [
        "Exit signs, emergency lights, and escape path lighting.",
        "Exit signs, emergency lights, main panel flood lights, and escape path lighting.",
        "Exit signs, emergency lights, dome lights, main panel flood lights, and the standby compass light."
      ],
      answer: 0
    },
    {
      id: 36,
      question: "Which flight control computers are operational in the Emergency Electrical Power configuration (gear down and batteries powering the system)?",
      options: [
        "All are operational.",
        "ELAC 1, SEC 1, and FAC 1.",
        "ELAC 1 and 2, SEC 1 and 2, FAC 1.",
        "ELAC 1 and SEC 1."
      ],
      answer: 3
    },
    {
      id: 37,
      question: "The emergency generator supplies power as long as:",
      options: [
        "The landing gear is down.",
        "The RAT is deployed and not stalled",
        "The RAT is deployed and the landing gear is down",
        "The landing gear is up"
      ],
      answer: 1
    },
    {
      id: 38,
      question: "While operating on Emergency Electrical Power with the landing gear lowered which of the following statements is correct?",
      options: [
        "If the APU is not operating it should be started at this time.",
        "The APU will not start until the aircraft has come to a complete stop and all power has been removed for 15 seconds.",
        "On the ground at 100 knots, the DC BATTERY BUS automatically reconnects to the batteries allowing APU start.",
        "At 70 knots ESS AC is disconnected from the batteries."
      ],
      answer: 2
    },
    {
      id: 39,
      question: "If during a normal flight the BUS TIE push button is depressed to \"OFF\", what effect would this have on power to the busses?",
      options: [
        "None.",
        "All power would be lost and the aircraft would be powered by the batteries until the RAT was up to speed.",
        "The power transfer would switch to the opposite bus.",
        "This is not possible as the bus tie contactors are locked out during flight."
      ],
      answer: 0
    },
    {
      id: 40,
      question: "While operating on Emergency Electrical Power (EMER GEN powering the system, FAC #1 reset) which of the following control laws are in effect?",
      options: [
        "Manual",
        "Alternate.",
        "Backup",
        "Manual and backup"
      ],
      answer: 1
    },
    {
      id: 41,
      question: "Can you reconnect an IDG in flight?",
      options: [
        "Yes, but only after contacting maintenance control.",
        "Yes, push and hold the IDG pb until the GEN fault light is no longer illuminated.",
        "No, it is not possible."
      ],
      answer: 2
    },
    {
      id: 42,
      question: "Which communication and navigation radios are operational in the Emergency Electrical Configuration with the EMER GEN powering the system?",
      options: [
        "ACP 1 and 2, VHF 1, HF, RMP 1, VOR 1, and ILS 1.",
        "VHF 1, RMP 1, VOR 1.",
        "RMP #1 & #2, VHF #1, HF (if equipped), ACP #1, VOR #1 and ILS #1.",
        "All radios are lost."
      ],
      answer: 0
    },
    {
      id: 43,
      question: "What is the meaning of the green AVAIL light?",
      options: [
        "External power is plugged in and parameters are normal. You must push the external power to connect it",
        "External power is available to the batteries only.",
        "The external power panel door has been opened",
        "External power is supplying the aircraft systems"
      ],
      answer: 0
    },
    {
      id: 44,
      question: "What does the blue EXT PWR ON light mean?",
      options: [
        "External power is plugged in and parameters are normal",
        "External power is supplying the aircraft's electrical system.",
        "There is a fault with the external power."
      ],
      answer: 1
    },
    {
      id: 45,
      question: "If EXTERNAL power is available and within limits:",
      options: [
        "It will automatically close the bus tie contactors when connected by the ground crew.",
        "The green AVAIL light will illuminate on the EXT PWR push button.",
        "The BUS TIE push button illuminates."
      ],
      answer: 1
    },
    {
      id: 46,
      question: "Is it possible to determine the source of power for aircraft busses",
      options: [
        "It is indicated on the electrical schematic overhead.",
        "No it is not possible.",
        "Yes, press the ECAM ELEC push button and view the electrical schematic on the ECAM",
        "Only when operating in the Emergency Electrical Configuration."
      ],
      answer: 2
    },
    {
      id: 47,
      question: "Both batteries are charged by the external power unit. Approximately how long does the charging process take?",
      options: [
        "10 minutes.",
        "20 minutes.",
        "30 minutes.",
        "Between 30 and 45 minutes."
      ],
      answer: 1
    },
    {
      id: 48,
      question: "The GALLEY FAULT light illuminates when any generator is exceeding 80% of its rated output.",
      options: ["True.", "False."],
      answer: 1
    },
    {
      id: 49,
      question: "While operating on Emergency Electrical Power (EMER GEN powering the system) what should the crew accomplish prior to lowering the landing gear?",
      options: [
        "Check to see that the FMGC has auto tuned the appropriate NAV facility for the approach to be accomplished.",
        "Depress the guarded RMP NAV push button and tune the appropriate NAV facility and course for the approach to be accomplished .",
        "Both are correct."
      ],
      answer: 1
    },
    {
      id: 50,
      question: "What would cause the GALLEY fault light to illuminate?",
      options: [
        "The flight attendants have all the coffee makers and ovens on at once.",
        "The Main Galley has shed.",
        "The load on any generator is above 100% of its rated output.",
        "The Aft Galley has shed."
      ],
      answer: 2
    },
    {
      id: 51,
      question: "While operating on Emergency Electrical Power (EMER GEN powering the system) how is it possible to properly complete the ECAM checklist with only an upper display?",
      options: [
        "Depress and hold the specific ECAM page push button on the ECAM control panel.",
        "Transfer occurs automatically.",
        "This is not possible. Use the cockpit operating manual."
      ],
      answer: 0
    },
    {
      id: 52,
      question: "Which busses will be powered after the RAT is extended and the EMER GEN begins producing power?",
      options: [
        "BATT HOT busses, ESS DC, ESS DC SHED, ESS AC and ESS AC SHED.",
        "The STATIC INVERTER would power both HOT BATT busses, ESS DC and ESS AC through the ESS AC SHED busses.",
        "The BATTERIES would power both HOT BATT busses, ESS DC and ESS AC through the STATIC INVERTER.",
        "ESS DC, ESS DC SHED, ESS AC and ESS AC SHED."
      ],
      answer: 0
    },
    {
      id: 53,
      question: "Engine #1 has just been started and the APU is inoperative. The EXT PWR push button blue ON light is illuminated. Which of the statements below is correct?",
      options: [
        "External power is supplying all electrical needs.",
        "Engine Gen #1 is supplying AC bus #1 and the downstream systems, and AC bus #2 through the bus tie contactors.",
        "Gen #1 supplies AC bus #1 and (generally) the downstream systems; Ext power supplies AC bus #2."
      ],
      answer: 2
    },
    {
      id: 54,
      question: "When are the Essential Shed buses powered by the battery?",
      options: [
        "Never. The purpose of the shed buses is to reduce the load on the batteries.",
        "In case of double generator failure.",
        "After every IDG connection"
      ],
      answer: 0
    },
    {
      id: 55,
      question: "The AC Essential bus is powered by the battery at speed above 50 kt.",
      options: ["True.", "False."],
      answer: 0
    },
    {
      id: 56,
      question: "In normal electrical configuration, how is DC ESS bus supplied:",
      options: [
        "From TR 1 via DC Bus 1 and DC Bat Bus",
        "From ESS TR",
        "From TR 2",
        "From Bat 2"
      ],
      answer: 0
    },
    {
      id: 57,
      question: "What happens in case of total loss of main generators?",
      options: [
        "The RAT is automatically extended and powers the yellow system which drives the emergency generator",
        "The RAT is automatically extended and powers the blue system which drives the emergency generator",
        "The RAT has to be manually extended",
        "The RAT is extended and mechanically connected to the emergency generator."
      ],
      answer: 1
    },
    {
      id: 58,
      question: "DC Bat Bus can be supplied by:",
      options: [
        "DC Bus 1 or batteries",
        "DC Bus 1, DC Bus 2 or batteries",
        "DC Bus 2 or batteries",
        "DC Bus 1 only"
      ],
      answer: 1
    },
    {
      id: 59,
      question: "Normal minimum battery voltage before APU start is:",
      options: [
        "No minimum",
        "27.5 Volts",
        "25.5 Volts",
        "22.5 Volts"
      ],
      answer: 2
    },
    {
      id: 60,
      question: "When disconnecting the IDG the button should be pressed:",
      options: [
        "For no more than 5 seconds",
        "Until the fault light goes out",
        "For longer than 3 seconds",
        "For no more than 3 seconds"
      ],
      answer: 3
    },
    {
      id: 61,
      question: "Where can the battery voltage be checked?",
      options: [
        "On the ECAM elec. Page only",
        "On the elec. overhead panel and ECAM E/WD",
        "On the elec. overhead panel only",
        "On the elec. overhead panel and ECAM elec. Page"
      ],
      answer: 3
    },
    {
      id: 62,
      question: "In flight on batteries only, the AC ESS Shed bus and DC ESS Shed bus are lost.",
      options: [
        "Yes",
        "No",
        "Only A/C ESS Shed Bus is lost",
        "Only D/C ESS Shed Bus is lost"
      ],
      answer: 0
    },
    {
      id: 63,
      question: "The static inverter works:",
      options: [
        "Always",
        "When aircraft speed is > 50 kt and on batteries only",
        "When one main generator fails",
        "Only when generator 2 fails"
      ],
      answer: 1
    },
    {
      id: 64,
      question: "If a TR fails:",
      options: [
        "The other TR automatically replaces the faulty one and the ESS TR supplies the DC Ess Bus",
        "The static inverter replaces the faulty TR",
        "The DC Bus on the faulty side is lost",
        "The Emergency generator supplies DC power on the faulty side."
      ],
      answer: 0
    },
    {
      id: 65,
      question: "In flight in case of loss of all main generators, emergency generator not running, the DC ESS Bus is supplied by:",
      options: [
        "Hot bus 2",
        "ESS TR",
        "Hot Bus and ESS TR",
        "Hot Bus 1"
      ],
      answer: 0
    },
    {
      id: 66,
      question: "If AC Bus 1 fails the AC ESS bus is supplied by:",
      options: [
        "Emer Gen.",
        "The RAT",
        "Static Inverter",
        "AC Bus 2"
      ],
      answer: 3
    }
  ]
};
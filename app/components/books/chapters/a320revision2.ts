import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "REVISION TEST 2 (ELEC/HYD/FUEL)",
  questions: [
    {
      id: 1,
      question: "What does green coloured CB mean?",
      options: [
        "Non monitored CB, but will generate ECAM when pulled",
        "Non monitored CB and will not generate ECAM when pulled",
        "Monitored CB and will generate ECAM when pulled.",
        "\"CB's which can only be pulled on ground",
        "Others",
      ],
      answer: 2,
    },
    {
      id: 2,
      question: "Which Circuit Breakers should not be pulled out in Flight?",
      options: ["Green CB", "Black CB", "Red capped CB", "Yellow CB"],
      answer: 2,
    },
    {
      id: 3,
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
      id: 4,
      question: "Where can you see indications for RAT?",
      options: [
        "Hydraulics SD page",
        "electrical SD Page",
        "cabin pressurization SD page",
        "Both A and B",
      ],
      answer: 0,
    },
    {
      id: 5,
      question: "If gen 1 is inoperative then",
      options: [
        "all Galley shed",
        "Part of galley shed",
        "as in \"B\" IFE is also shed",
        "as in \"A\" IFS is also shed",
      ],
      answer: 2,
    },
    {
      id: 6,
      question: "If failure of engine generator",
      options: [
        "Full galley is shed",
        "Partial galley is shed",
        "as in \"B\" and DC bus Ent automatically shed",
        "as in \"A\" and DC bus Ent can be shed by pressing Galley and Cabin Pushbutton",
      ],
      answer: 2,
    },
    {
      id: 7,
      question:
        "What is electrical configuration of Aircraft, If TR 1 and TR 2 fails ?",
      options: [
        "all DC buses are lost and DC ess bus is also lost",
        "Charging for battery is lost, as DC bat bus is Lost",
        "Ess TR supplies all 4 DC Buses",
        "DC Bus 1 and DC Bus 2 are lost. However, DC Bat Bus is supplied by DC Ess BUS",
      ],
      answer: 1,
    },
    {
      id: 8,
      question:
        "What happens after Pressing Bus tie contactor switch in Flight?",
      options: [
        "Left side of electrical systems supplies opposite side",
        "Gen 1 continues supplying AC Bus 1 , and Gen 2 continues supplying AC Bus 2(no change)",
        "AC bus 1 and 2 fail and Aircraft go into emerelecconfig",
        "BTC is inhibited in flight",
      ],
      answer: 1,
    },
    {
      id: 9,
      question: "When does PTU fault light come on?",
      options: [
        "Green or yellow reservoir overheats",
        "Green or yellow Pump low pressure/ptu over heat.",
        "Green or yellow reservoir low fluid level",
        "Both A and C",
      ],
      answer: 3,
    },
    {
      id: 10,
      question:
        "Hydraulic reservoir pressurisation is provided for from which stage of engine ?",
      options: ["IP stage", "HP stage of engine 2", "HP stage of engine 1", "None of the above"],
      answer: 2,
    },
    {
      id: 11,
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
      id: 12,
      question:
        "When does Amber light of Gen 1 line PB,on emer elec pane lilluminate?",
      options: [
        "when fire is detected in avionics Bay",
        "when smoke is detected in Avionics ventilation duct",
        "When fault is detected in Generator 1",
        "none of the above",
      ],
      answer: 1,
    },
    {
      id: 13,
      question: "What is the purpose of Jet booster pumps?",
      options: [
        "they enable gravity fuel feeding from wing tanks",
        "They provide for transfer of fuel from Outer tanks to Inner Tanks",
        "They enable fuel to be transferred from Center Tanks to Inner Tanks via suction",
        "They provide for transfer of fuel from Inner wing tank to Outer Tank",
      ],
      answer: 2,
    },
    {
      id: 14,
      question: "When do the Center tank pumps start running?",
      options: [
        "When the fuel reaches the underfull sensors of inner tank",
        "When the fuel reaches the underfull sensors of center tank",
        "As in \"B\" and when slats are extended",
        "As in \"A\" and when slats are retracted",
      ],
      answer: 3,
    },
    {
      id: 15,
      question: "Which tanks can provide gravity fuel feeding to engines?",
      options: ["Vent tank", "Inner wing tank", "Center tank", "All of the Above"],
      answer: 1,
    },
    {
      id: 16,
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
      id: 17,
      question: "When does the fuel used value reset?",
      options: [
        "Automatically when engines are shut down on ground.",
        "Automatically when ZFW is inserted on the INIT-B page of MCDU.",
        "Automatically when engines are started on ground.",
        "Automatically when refueling is complete",
      ],
      answer: 2,
    },
    {
      id: 18,
      question:
        "When is intertank fuel transfer valves shown in amber(hollow)?",
      options: [
        "When Valve is in transit",
        "When valves are open, when commanded closed",
        "During Transfer from Outer to Inner tank",
        "When Valve position information is not available",
      ],
      answer: 0,
    },
    {
      id: 19,
      question: "When is FOB indication half boxed in amber?",
      options: [
        "The Fuel on board is completely usable.",
        "The fuel on board indications are inaccurate",
        "The Fuel on board in one tank is completely unusable.",
        "Center Tank Transfer valves have failed in closed position",
      ],
      answer: 2,
    },
    {
      id: 20,
      question:
        "The Eng Pump Fault light extinguishes when the engine pump switch is selected to off except for:",
      options: ["Reservoir low level.", "Pump low pressure.", "An overheat."],
      answer: 2,
    },
    {
      id: 21,
      question:
        "With the airplane on the ground and the blue electric pump switch in AUTO; the blue pump will be energized when:",
      options: [
        "One engine is running.",
        "The BLUE PUMP OVRD switch has been pressed.",
        "First two statements are correct.",
      ],
      answer: 2,
    },
    {
      id: 22,
      question: "The PTU Fault light illuminates when the:",
      options: [
        "PTU is inoperative.",
        "Green or yellow reservoir has low air pressure.",
        "PTU pump has overheated.",
      ],
      answer: 1,
    },
    {
      id: 23,
      question:
        "The PUMP identification number on the ECAM HYD page becomes amber when:",
      options: [
        "System pressure is below 1450 psi.",
        "N2 is below idle.",
        "The reservoir level is low.",
      ],
      answer: 1,
    },
    {
      id: 24,
      question:
        "After extending the RAT, is it possible to check its position and status?",
      options: [
        "Check to see if the blue system ELEC PUMP FAULT light is not illuminated.",
        "Yes, select the ECAM ELEC page.",
        "Yes, select the ECAM HYD page.",
        "No. It is not possible.",
      ],
      answer: 2,
    },
    {
      id: 25,
      question:
        "For hydraulic system malfunctions, when will the RAT deploy?",
      options: [
        "Automatically with the failure of both the green and blue hydraulic systems.",
        "Automatically with the failure of both the green and yellow hydraulic systems.",
        "Only when the guarded RAT MAN ON push button is selected by the crew.",
        "When airspeed drops below 100 knots with the gear up.",
      ],
      answer: 2,
    },
    {
      id: 26,
      question:
        "On the hydraulic quantity indicator what does the amber level indicate?",
      options: [
        "The warning level.",
        "The reservoir contents",
        "The normal filling level",
        "The temperature of the hydraulic fluid.",
      ],
      answer: 0,
    },
    {
      id: 27,
      question:
        "The PTU Fault light extinguishes when the PTU p/b switch is selected to off except for:",
      options: ["Reservoir low level.", "Pump low pressure", "An overheat"],
      answer: 2,
    },
    {
      id: 28,
      question:
        "What is the signification of an amber RAT indication (on ECAM HYD page)?",
      options: [
        "The RAT is not stowed",
        "Pressure for stowing the RAT has been applied, or the RAT pump is not available & You get ECAM of HYD RAT FAULT",
        "All of the above",
      ],
      answer: 1,
    },
    {
      id: 29,
      question: "In case of Dual G + B Hyd. SYS LO PR",
      options: [
        "RAT will have to be deployed manually using RAT MAN ON p/b from Hyd. panel.",
        "L/Gear will have to be extended using GRAVITY EXTENSION procedure.",
        "Both are correct",
      ],
      answer: 2,
    },
    {
      id: 30,
      question: "The hand pump supplies yellow pressure to the:",
      options: [
        "Normal brakes",
        "Alternate brakes",
        "Passenger doors",
        "Cargo doors.",
      ],
      answer: 3,
    },
    {
      id: 31,
      question:
        "How are the hydraulic reservoir pressurized pneumatically ?",
      options: [
        "By APU bleed directly.",
        "By engine 2 bleed directly.",
        "By engine 1 bleed directly or cross bleed duct",
        "By engine 2 bleed directly or cross bleed duct.",
      ],
      answer: 2,
    },
    {
      id: 32,
      question:
        "How will you recover the yellow system if it is lose due to LO LVL ?",
      options: [
        "Yellow system can be recovered in approach only by electric pump",
        "Yellow system can be recovered in approach only by PTU",
        "Yellow system cannot be recovered.",
        "Both (a) and (b) are correct.",
      ],
      answer: 2,
    },
    {
      id: 33,
      question: "When does GREEN EDP fault light illuminate ?",
      options: [
        "On ground Green EDP pump pressure is less with engine running.",
        "As in (a) or green reservoir is over heated",
        "As green reservoir has low quantity or low air pressure",
        "All the above are correct.",
      ],
      answer: 3,
    },
    {
      id: 34,
      question:
        "OVHT amber message on the ECAM HYD page near ELEC pump indication means",
      options: [
        "Overheat of the system fluid",
        "Overheat of the pump itself",
        "In case of yellow pump OVHT the PTU must also be switched OFF",
        "In case of blue pump OVHT, the RAT must be extended.",
      ],
      answer: 1,
    },
    {
      id: 35,
      question:
        "What happens to PTU with PTU push button at AUTO when aircraft makes a single engine landing with No1 engine shut down?",
      options: [
        "PTU runs in flight and stops as soon as both main landing gears are compressed",
        "PTU runs in flight and continues to run even after landing but PTU will stop if you apply parking brake.",
        "PTU runs only after landing and pressurize Green hydraulic system by using Yellow Hyd. Pressure.",
      ],
      answer: 1,
    },
    {
      id: 36,
      question:
        "The normal priority for supplying electrical power to the AC busses is:",
      options: [
        "External power, engine generators then APU",
        "External power, APU, then engine generators",
        "APU, external power then engine generators",
        "Engine generators, external power then APU",
      ],
      answer: 3,
    },
    {
      id: 37,
      question: "The BATTERY BUS is normally powered by:",
      options: [
        "DC BUS 2",
        "DC BUS 1 and DC BUS 2",
        "DC bus 1 through a DC tie control relay.",
        "DC bus 2 through a DC tie control relay.",
      ],
      answer: 2,
    },
    {
      id: 38,
      question:
        "When no other power is available in flight, the static inverter converts _____ power to AC power for the ______ bus; and ____ powers the _______ bus.",
      options: [
        "BAT1 DC / AC ESS bus / BAT2 / DC ESS",
        "BAT1 DC / AC ESS SHED / BAT2 / DC ESS SHED",
        "BAT1 DC / AC ESS bus / BAT2 / DC ESS SHED",
        "BAT1 DC / AC ESS bus / DC ESS",
      ],
      answer: 0,
    },
    {
      id: 39,
      question:
        "An AC ESS FEED switch located on the overhead panel shifts the power source for the AC ESS bus from:",
      options: [
        "AC bus1 to AC bus 2",
        "AC bus 1 to AC Grnd/Flt bus",
        "AC bus 2 to AC bus 1",
      ],
      answer: 0,
    },
    {
      id: 40,
      question:
        "Which of the following AC busses can be powered by the emergency generator?",
      options: ["AC bus 1", "AC bus 2", "AC ESS bus / AC ESS SHED bus"],
      answer: 2,
    },
    {
      id: 41,
      question:
        "After landing, in the emergency electrical configuration: the batteries automatically connect to the DC BAT bus when speed decreases below _______ knots.",
      options: ["50", "70", "90", "100"],
      answer: 3,
    },
    {
      id: 42,
      question: "The BAT FAULT light will illuminate when:",
      options: [
        "Battery voltage is low",
        "Charging current increases at an abnormal rate",
        "Charging current decreases at an abnormal rate.",
      ],
      answer: 1,
    },
    {
      id: 43,
      question: "The IDG Fault light indicates:",
      options: [
        "An IDG oil overheat",
        "IDG low oil pressure.",
        "IDG low oil pressure or IDG oil overheat",
        "IDG has been disconnected",
      ],
      answer: 2,
    },
    {
      id: 44,
      question:
        "If normal electrical power is lost; essential cockpit lighting is maintained for the:",
      options: [
        "Captain's instrument panel.",
        "Standby compass",
        "Right dome light (provided the dome selector is not off).",
        "All of the above.",
      ],
      answer: 3,
    },
    {
      id: 45,
      question:
        "Having started the APU, how can you get the APU generator to power the electrical system?",
      options: [
        "The APU generator must be switch on.",
        "By pushing the EXT PWR pushbutton thus disconnecting the external power.",
        "By pushing the BUS TIE pushbutton.",
        "You are unable to as the APU power output is outside normal parameters.",
      ],
      answer: 1,
    },
    {
      id: 46,
      question:
        "Are there any limitations associated with disconnecting an IDG?",
      options: [
        "Never disconnect an IDG in flight, or push the IDG disconnect push button for more than 30 seconds.",
        "There is no limitation",
        "Never disconnect an IDG in flight, or push the IDG disconnect push button for more than 5 seconds.",
        "Never disconnect an IDG unless the engine is running, nor push the IDG disconnect push button for more than 3 seconds.",
      ],
      answer: 3,
    },
    {
      id: 47,
      question:
        "If batteries are the only source of power in flight, how long will battery power be available?",
      options: [
        "Between 22 and 30 minutes depending on equipment in use.",
        "Until the APU is started.",
        "Two hours and 30 minutes dependent on equipment in use.",
        "45 minutes dependent on equipment in use.",
      ],
      answer: 0,
    },
    {
      id: 48,
      question:
        "Which flight control computer will be inoperative with gear extension while in the Emergency Electrical Configuration?",
      options: [
        "FAC 1 and ELAC 1.",
        "SEC 1",
        "SEC 1 and ELAC 1",
        "FAC 1",
      ],
      answer: 3,
    },
    {
      id: 49,
      question: "Is it possible to parallel generators?",
      options: [
        "Of course yes.",
        "Only with the RAT deployed.",
        "The electrical system will not allow \"paralleling\" of generators.",
        "Only one engine generator may be paralleled with the APU.",
      ],
      answer: 2,
    },
    {
      id: 50,
      question: "What is the function of the GEN 1 LINE push button?",
      options: [
        "When selected OFF the avionics compartment isolation valves close.",
        "When selected OFF the #1 generator powers all AC busses.",
        "When selected OFF generator # 1 is removed from all busses but continues to power one fuel pump in each wing.",
      ],
      answer: 2,
    },
    {
      id: 51,
      question: "When does the RAT automatically deploy?",
      options: [
        "The APU would now power both sides of the electrical system.",
        "All systems return to normal and the RAT must be restowed.",
        "Eng gen #1 continues to power AC bus #1 and downstream systems. The APU powers AC bus #2 and downstream systems.",
        "AC BUS 1 AND AC BUS 2 HAVE FAILED, AIRCRACT SPEED >100KTS",
      ],
      answer: 3,
    },
    {
      id: 52,
      question: "During the eight seconds it takes for the RAT to extend:",
      options: [
        "The BATTERIES power both BATT HOT busses, ESS DC SHED, and ESS AC SHED through the STATIC INVERTER.",
        "The BATTERIES power both BATT HOT busses, ESS DC, and ESS AC through the STATIC INVERTER.",
        "The STATIC INVERTER powers both BATT HOT busses, ESS DC, and ESS AC through the ESS AC SHED busses.",
        "The BATTERIES power both BATT HOT busses.",
      ],
      answer: 1,
    },
    {
      id: 53,
      question: "When will the RAT & EMER GEN red FAULT light illuminate?",
      options: [
        "When the EMER GEN is not supplying electrical power, AC busses #1 & #2 are unpowered and the nose gear is up.",
        "When the RAT is deployed using hydraulic RAT MAN ON push button.",
        "Both are correct.",
      ],
      answer: 0,
    },
    {
      id: 54,
      question:
        "What is the significance of the circuit breakers on the overhead panel?",
      options: [
        "They are not monitored by ECAM.",
        "Cannot be reset.",
        "They may be operational in the Emergency Electrical Configuration.",
        "They are mainly AC powered.",
      ],
      answer: 2,
    },
    {
      id: 55,
      question: "How many times can you reset a circuit breaker?",
      options: [
        "Once.",
        "Once, if authorized by the procedures.",
        "Twice.",
        "Twice, if authorized by the procedures",
      ],
      answer: 1,
    },
    {
      id: 56,
      question:
        "While operating on Emergency Electrical Power with the landing gear lowered which of the following statements is correct?",
      options: [
        "If the APU is not operating it should be started at this time.",
        "The APU will not start until the aircraft has come to a complete stop and all power has been removed for 15 seconds.",
        "On the ground at 100 knots, the DC BATTERY BUS automatically reconnects to the batteries allowing APU start.",
        "At 70 knots ESS AC is disconnected from the batteries.",
      ],
      answer: 2,
    },
    {
      id: 57,
      question:
        "Which communication and navigation radios are operational in the Emergency Electrical Configuration with the EMER GEN powering the system?",
      options: [
        "ACP 1 and 2, VHF 1, HF, RMP 1, VOR 1, and ILS 1.",
        "VHF 1, RMP 1, VOR 1.",
        "RMP #1 & #2, VHF #1, HF (if equipped), ACP #1, VOR #1 and ILS #1.",
        "All radios are lost.",
      ],
      answer: 0,
    },
    {
      id: 58,
      question: "What is the meaning of the green AVAIL light?",
      options: [
        "External power is plugged in and parameters are normal. You must push the external power to connect it",
        "External power is available to the batteries only.",
        "The external power panel door has been opened",
        "External power is supplying the aircraft systems",
      ],
      answer: 0,
    },
    {
      id: 59,
      question: "What does the blue EXT PWR ON light mean?",
      options: [
        "External power is plugged in and parameters are normal",
        "External power is supplying the aircraft's electrical system.",
        "There is a fault with the external power.",
      ],
      answer: 1,
    },
    {
      id: 60,
      question: "Is it possible to determine the source of power for aircraft busses",
      options: [
        "It is indicated on the electrical schematic overhead.",
        "No it is not possible.",
        "Yes, press the ECAM ELEC push button and view the electrical schematic on the ECAM",
        "Only when operating in the Emergency Electrical Configuration.",
      ],
      answer: 2,
    },
    {
      id: 61,
      question:
        "Both batteries are charged by the external power unit. Approximately how long does the charging process take?",
      options: ["10 minutes.", "20 minutes.", "30 minutes.", "Between 30 and 45 minutes."],
      answer: 1,
    },
    {
      id: 62,
      question:
        "While operating on Emergency Electrical Power (EMER GEN powering the system) what should the crew accomplish prior to lowering the landing gear?",
      options: [
        "Check to see that the FMGC has auto tuned the appropriate NAV facility for the approach to be accomplished.",
        "Depress the guarded RMP NAV push button and tune the appropriate NAV facility and course for the approach to be accomplished .",
        "Both are correct.",
      ],
      answer: 1,
    },
    {
      id: 63,
      question: "What would cause the GALLEY fault light to illuminate?",
      options: [
        "The flight attendants have all the coffee makers and ovens on at once.",
        "The Main Galley has shed.",
        "The load on any generator is above 100% of its rated output.",
        "The Aft Galley has shed.",
      ],
      answer: 2,
    },
    {
      id: 64,
      question:
        "Which busses will be powered after the RAT is extended and the EMER GEN begins producing power?",
      options: [
        "BATT HOT busses, ESS DC, ESS DC SHED, ESS AC and ESS AC SHED.",
        "The STATIC INVERTER would power both HOT BATT busses, ESS DC and ESS AC through the ESS AC SHED busses.",
        "The BATTERIES would power both HOT BATT busses, ESS DC and ESS AC through the STATIC INVERTER.",
        "ESS DC, ESS DC SHED, ESS AC and ESS AC SHED.",
      ],
      answer: 0,
    },
    {
      id: 65,
      question:
        "Engine #1 has just been started and the APU is inoperative. The EXT PWR push button blue ON light is illuminated. Which of the statements below is correct?",
      options: [
        "External power is supplying all electrical needs.",
        "Engine Gen #1 is supplying AC bus #1 and the downstream systems, and AC bus #2 through the bus tie contactors.",
        "Gen #1 supplies AC bus #1 and (generally) the downstream systems; Ext power supplies AC bus #2.",
      ],
      answer: 2,
    },
    {
      id: 66,
      question: "When are the Essential Shed buses powered by the battery?",
      options: [
        "Never. The purpose of the shed buses is to reduce the load on the batteries.",
        "In case of double generator failure.",
        "After every IDG connection",
      ],
      answer: 0,
    },
    {
      id: 67,
      question: "In normal electrical configuration, how is DC ESS bus supplied:",
      options: [
        "From TR 1 via DC Bus 1 and DC Bat Bus",
        "From ESS TR",
        "From TR 2",
        "From Bat 2",
      ],
      answer: 0,
    },
    {
      id: 68,
      question: "DC Bat Bus can be supplied by:",
      options: [
        "DC Bus 1 or batteries",
        "DC Bus 1, DC Bus 2 or batteries",
        "DC Bus 2 or batteries",
        "DC Bus 1 only",
      ],
      answer: 1,
    },
    {
      id: 69,
      question: ": If a TR fails:",
      options: [
        "The other TR automatically replaces the faulty one and the ESS TR supplies the DC Ess Bus",
        "The static inverter replaces the faulty TR",
        "The DC Bus on the faulty side is lost",
        "The Emergency generator supplies DC power on the faulty side.",
      ],
      answer: 0,
    },
    {
      id: 70,
      question: "The DC BAT BUS is normally powered by:",
      options: ["DC BUS 2", "DC BUS 1 and DC BUS 2", "DC BUS 1"],
      answer: 2,
    },
    {
      id: 71,
      question:
        "You enter a dark cockpit, what action is necessary before checking the battery voltages?",
      options: [
        "You have to check that the external power is on.",
        "You have to ensure that at least one battery is on.",
        "You have to ensure that both batteries are on",
        "You have to verify that both batteries are off.",
      ],
      answer: 3,
    },
    {
      id: 72,
      question:
        "In a flight, where APU is not working what happens when GEN 1 falls.?",
      options: [
        "Most of the busses are lost; only NO. 2 busses are available.",
        "GEN 2 feed all busses.",
        "As in (b) but main galley is shed automatically.",
        "ESS TR will come on line..",
      ],
      answer: 2,
    },
    {
      id: 73,
      question:
        "In the normal electrical configuration, if AC BUS 1 is lost for any reason, what will happen to AC ESS BUS and also to AC ESS SHED BUS.",
      options: [
        "They are lost and can be regained only by Emer generator",
        "They are lost but can be regained from AC BUS 2 pressing AC ESS FEED pb switch to ALTN",
        "As in (b) and AC BUS 2 will then feed DC ESS BUS and DC ESS SHED BUS also through AC ESS BUS and ESS TR",
      ],
      answer: 2,
    },
    {
      id: 74,
      question:
        "In normal electrical configuration (GEN 1, GEN 2 are ON) is there any of bus that is not energized.",
      options: [
        "Yes; AC STAT INV BUS",
        "Yes; AC STAT INV BUS, AC GND FLT BUS, DC GND FLT BUS",
        "Yes; AC STAT INV BUS, AC S",
        "No",
      ],
      answer: 1,
    },
    {
      id: 75,
      question:
        "In cruise, you have suddenly a Master Warning and caution comes on with ELEC EMER CONFIG and AP OFF. You notice a red FAULT light on the RAT & EMER GEN pushbutton. What do you think of this indication?",
      options: [
        "The EMER GEN is not yet supplying the system",
        "The RAT has failed. You will have to turn the batteries to OFF.",
        "The FAULT light is always on when are in ELEC EMER CONFIG",
        "The RAT has failed, you have to try to reconnect both IDG's.",
      ],
      answer: 0,
    },
    {
      id: 76,
      question:
        "Which of the following AC buses are powered by the emergency generator?",
      options: ["AC bus 1", "AC bus 2", "AC ESS bus"],
      answer: 2,
    },
    {
      id: 77,
      question: "The drive for emergency generator is",
      options: [
        "RAT operated hydraulic motor",
        "Blue system electrical pump.",
        "Ram Air Turbine",
        "None of the above.",
      ],
      answer: 0,
    },
    {
      id: 78,
      question:
        "What are the actions to be carried out to SET EMER ELEC CONFIG in smoke?",
      options: [
        "Press Gen 1 LINE switch to OFF, guarded switch MAN ON. APU GEN to OFF and then GEN 2 Switch to OFF.",
        "Press GEN 1 Line switch to OFF; guarded switch MAN ON; Press BUS TIE switch to OFF and then APU GEN and GEN 2 Switch to OFF.",
      ],
      answer: 0,
    },
    {
      id: 79,
      question:
        "After IDG disconnection why do you get a GALLEY SHED indication on the SD?",
      options: [
        "It is a reminder to push the GALLEY pushbutton to manually shed the main galley",
        "It is a reminder to get the flight attendants to switch off galley equipment to decrease the load on the remaining generator.",
        "It is a reminder that the main galley has been shed automatically following the loss of one generator.",
      ],
      answer: 2,
    },
    {
      id: 80,
      question: "When IDG oil outlet temperature exceeds its normal limit of 147 °C…\n\n1. It is an advisory.\n2. The ELEC page is automatically called on the SD, and temperature indication pulses green.\n3. The respective IDG must be disconnected.\n4. The pilot may select the GALY & CAB p/b. to OFF.",
      options: ["1,2,3", "1,2,4"],
      answer: 1,
    },
    {
      id: 81,
      question:
        "What would cause the GALLEY FAULT light to illuminate with ECAM caution?",
      options: [
        "The flight attendants have all the coffee makers and ovens on at once.",
        "The Main Galley has shed",
        "The load on any generator is above 100% of it's rated output.",
        "The Aft Galley has shed.",
      ],
      answer: 2,
    },
    {
      id: 82,
      question: "Which busses are lost if TR 1, TR 2 had failed?",
      options: [
        "No bus is lost",
        "DC BUS 1, DC BUS 2",
        "DC BUS 1, DC BAT BUS, DC BUS 2",
        "DC BAT BUS after landing gear extension.",
      ],
      answer: 2,
    },
    {
      id: 83,
      question: "ESS TR parameters on ECAM ELEC page.",
      options: [
        "Are always displayed",
        "Are displayed only when ESS TR is in operation",
        "Are displayed only when ESS TR parameters exceed the limitations.",
        "None of the above is correct.",
      ],
      answer: 1,
    },
    {
      id: 84,
      question: "What is the advisory message in Electrical system.",
      options: [
        "IDG LO PR",
        "IDG Temp > 147 Deg.",
        "ESS TR, EMER GEN, AC ESS BUS",
        "IDG DISC",
      ],
      answer: 1,
    },
    {
      id: 85,
      question: "On the ECAM ELEC page shed appears amber if",
      options: [
        "AC ESS BUS is shed",
        "DC ESS BUS is shed",
        "AC and DC ESS SHED buses are shed",
        "AC and DC ESS SHED busses are powered.",
      ],
      answer: 2,
    },
    {
      id: 86,
      question:
        "What will happen to batteries during APU start (Battery switches are in AUTO)",
      options: [
        "Both batteries are connected to DC BAT BUS till APU rpm reaches 95%",
        "As in (a) and it is restrictedto only 3 minutes when EMER GEN is running.",
        "As in (a) and it is restricted to only 3 minutes when electrical busses are powered by any generator.",
        "As in (b) but battery contactors will open when APU reaches 50% i.e. when APU starter motor is disengaged.",
      ],
      answer: 1,
    },
    {
      id: 87,
      question:
        "BUS TIE p/b switch is OFF and only GEN 1 is available. Which buses are not powered.",
      options: [
        "AC BUS 2, DC BUS 2",
        "All busses are powered",
        "AC BUS 2",
        "AC BUS 2, DC ESS BUS, DC ESS SHED BUS.",
      ],
      answer: 2,
    },
    {
      id: 88,
     question: "About CIRCUIT BREAKERS, select the correct statements:\n\n1. Green CBs are monitored and when out for more than 1 min, the C/B TRIPPED is triggered on the ECAM.\n2. If you clear the ECAM C/B TRIPPED caution by pressing CLR p/b and if the C/B remains pulled, any additional tripped circuit breakers on the same panel will not be detected, and the ECAM will not trigger the caution.\n3. If you clear the ECAM C/B TRIPPED caution by pressing EMER CANC p/b, it clears and inhibits the ECAM C/B TRIPPED caution for the remainder of the flight.",
     options: ["1,2", "1,3", "1,2,3"],
      answer: 2,
    },
    {
      id: 89,
      question:
        "The message CTR TK FEEDG appears in the MEMO. What does this mean?",
      options: [
        "The center tank fuel mode selector is OFF.",
        "The center tank pumps are OFF.",
        "At least one center tank pump is energized..",
        "A reminder to switch the center tank pumps OFF.",
      ],
      answer: 2,
    },
    {
      id: 90,
      question:
        "Which of the following would cause the FAULT light to illuminate on the MODE SEL push button?",
      options: [
        "Fuel is being burned out of sequence.",
        "Crossfeed push button is ON",
        "Center tank pumps do not stop after slat extension..",
        "Center tank pumps do not stop 5 min after center tank low level reached",
      ],
      answer: 0,
    },
    {
      id: 91,
      question:
        "With fuel in the center tank, the CTR TK MODE SEL push button selected to AUTO and CTR TK PUMP push buttons ON (lights out), which of the following conditions cause the center tank fuel pumps to stop?",
      options: [
        "Extension of the slats (after completion of the short test cycle).",
        "Anytime the slats are extended or an overfill condition is detected in either wing inner cell",
        "For a short test period after the first Engine Master Switch is selected \"ON\" when the slats are extended..",
      ],
      answer: 1,
    },
    {
      id: 92,
      question:
        "Why do the center tank pumps stop automatically when then slats are extended for takeoff?",
      options: [
        "To keep the center of gravity as low as possible.",
        "During takeoff, the center tank fuel is pumped to the rear to trim aircraft.",
        "To ensure that the engines are fed from the wing tanks for takeoff (feeding segregation)",
        "During takeoff, the center tank fuel is gravity fed only.",
      ],
      answer: 2,
    },
    {
      id: 93,
      question:
        "After the slat extension of the centre tank pumps do not stop what is the ECAM caution",
      options: [
        "Auto feed fault",
        "Centre tank pumps LO PRESSURE",
        "CENTRE TANK PUMP NOT FEEDING memo display",
        "Centre tank pumps OFF",
      ],
      answer: 0,
    },
    {
      id: 94,
      question: "When will the FUEL AUTO FEED FAULT Message appear?",
      options: [
        "If centre tank quantity is more than 250 KG & Wing tanks is less than 5000 KG",
        "Centre tank booster pumps running even after slat extension",
        "Centre tank booster pumps are running after centre tank reaches Low level",
        "All are correct.",
      ],
      answer: 3,
    },
    {
      id: 95,
      question: "The wing fuel transfer valves are:",
      options: [
        "Manually controlled and open when the MODE SEL push button is selected to MAN.",
        "Are electrically held closed.",
        "Automatically open if a low level is sensed in either main wing tank, they automatically close at the next fueling.",
        "Both B & C are correct",
      ],
      answer: 3,
    },
    {
      id: 96,
      question: "Fuel can be transferred from tank to tank:",
      options: [
        "Only on the ground.",
        "In flight if the fuel X FEED push button is selected OPEN.",
        "By setting the MODE SEL PB to AUTO",
        "In flight if the fuel X FEED push button is selected OPEN and center tank MODE SEL push button is selected to MAN.",
      ],
      answer: 0,
    },
    {
      id: 97,
      question: "When do the transfer valves close ?",
      options: [
        "Once the out cell is full",
        "On ground, during refueling operation when the refueling mode selector is put to REFUEL positions",
        "On ground during refueling operation, after the inner cell becomes full",
        "On ground during refueling operation, if the inner cell fuel is more than 750 kgs (Low level)",
      ],
      answer: 1,
    },
    {
      id: 98,
      question:
        "Fuel transfer from the outer tank to the inner tank of the wing tanks occurs when the inner tank quantity decreases to:",
      options: ["250 Kgs.", "450 Kgs.", "750 Kgs.", "5000 Kgs."],
      answer: 2,
    },
    {
      id: 99,
      question: "In case of Gravity Fuel feeding QRH procedure, .",
      options: [
        "Avoid negative G factor",
        "There are flight altitude limitations while applying this procedure.",
        "Both of the above are correct",
      ],
      answer: 2,
    },
    {
      id: 100,
      question: "From which tanks will fuel gravity feed?",
      options: [
        "Outer cell of the wing tanks, inner cell of the wing tanks, and/or center tank.",
        "Inner cell of the wing tanks, and center tank.",
        "Outer cell of the wing tanks, and inner cell of the wing tanks.",
        "The center tank only.",
      ],
      answer: 2,
    },
    {
      id: 101,
      question: "How will you detect a fuel leak?",
      options: [
        "There will be an ECAM caution of FUEL LEAK along with Master Caution.",
        "It is a case of leak if the sum of FOB and Fuel Used is significantly less than FOB at engine start",
        "Both of the above are correct",
      ],
      answer: 1,
    },
    {
      id: 102,
      question: "If you get an ECAM FUEL L OUTER TK HI TEMP.",
      options: [
        "Apply ECAM procedure once you are out of critical phase of the flight.",
        "If ECAM does not disappear after two min, follow the procedure.",
        "This caution never comes.",
      ],
      answer: 1,
    },
    {
      id: 103,
      question: "The Fuel Used indication on ECAM is reset:",
      options: [
        "Manually by the pilot",
        "Automatically at engine start on the ground {MASTER Switch ON}.",
        "Automatically at electric power up of the aircraft..",
      ],
      answer: 1,
    },
    {
      id: 104,
      question:
        "The fuel quantity indication on ECAM for the outer cell is boxed amber if:",
      options: [
        "One transfer valve fails to open.",
        "Outer cell fuel temperature is high",
        "Both transfer valves fail to open when inner cell is at low level.",
      ],
      answer: 2,
    },
    {
      id: 105,
      question:
        "An amber line appears across the last two digits of the ECAM FOB indication when:",
      options: [
        "Fuel quantity is unreliable.",
        "The center tank pumps are switched off.",
        "The center tank pumps have failed.",
      ],
      answer: 0,
    },
    {
      id: 106,
      question:
        "What do you do if inner or outer cell High Fuel Temp warning comes ?",
      options: [
        "No action",
        "Switch off the generator and delay the take off on ground",
        "Switch off generator increase fuel flow if temp still high IDG OFF in flight",
        "Both (b) and (c) are correct.",
      ],
      answer: 3,
    },
    {
      id: 107,
      question: "What are the uses of sequence valves in the fuel system ?",
      options: [
        "To control the booster pump operation",
        "To consume centre tank fuel first, then wing tank fuel",
        "To operate the transfer valves in the desired time",
        "To control fuel temperature within limit",
      ],
      answer: 1,
    },
    {
      id: 108,
      question: "The APU fuel system:",
      options: [
        "Uses its own dedicated DC powered fuel pump.",
        "Obtains fuel from either center tank pump.",
        "Obtains fuel from the left fuel manifold via the left side fuel pumps or if needed, the APU fuel pump",
        "Obtains fuel from the left fuel manifold via the right side fuel pumps",
      ],
      answer: 2,
    },
    {
      id: 109,
      question:
        "What type of the Fuel is commonly used for our aircraft operation?",
      options: ["Jet A", "Jet A - 1", "Jet B", "JP 4"],
      answer: 1,
    },
    {
      id: 110,
      question:
        "The message OUTER TK FUEL XFRD appears in the MEMO. What does it mean?",
      options: [
        "It is a reminder to show that at least one transfer valve is open in one wing tank.",
        "Fuel is transferring from the center tank to the inner tank.",
        "It is a reminder to open the outer tank transfer valve.",
        "Fuel is transferring from inner tank to outer tank",
      ],
      answer: 0,
    },
    {
      id: 111,
      question:
        "What indication will you see on the overhead fuel panel if the center tank has more than 250 kilograms of fuel and the left or right wing tank have less than 5,000 kilograms.",
      options: [
        "Fuel Fault",
        "Fuel imbalance.",
        "FAULT light on MODE SEL PB/SW",
        "Fuel - Auto feed fault.",
      ],
      answer: 2,
    },
    {
      id: 112,
      question:
        "The AC powered auxiliary fuel boost pump for the APU operates whenever the APU is operating and no other pump is on. it has an alternate power source on the AC Static Inverter bus for battery-only starts. (airline exam question)",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 113,
      question: "The wing fuel transfer valves are:",
      options: [
        "Manually controlled and open when the MODE SEL push button is selected to MAN.",
        "Are electrically held closed.",
        "Open automatically at the start of refueling.",
        "Automatically close if a low level is sensed in either main wing tank, they automatically close at the next fueling.",
      ],
      answer: 1,
    },
    {
      id: 114,
      question:
        "Refueling time at normal pump pressure is _____ minutes for the wing tanks and _____ minutes for all tanks.",
      options: ["15 & 25.", "17 & 20.", "15 & 20.", "25 & 35."],
      answer: 1,
    },
    {
      id: 115,
      question: "what are the reasons for FOB to be boxed amber on the fuel page?",
      options: [
        "When both center tank pumps have failed.",
        "If both the transfer valves have failed to open when inner tank reaches low level(750 kgs)",
        "when both pumps of inner cell fail.",
        "Either of the conditions of (a) and (b) are satisfied",
      ],
      answer: 3,
    },
    {
      id: 116,
      question:
        "The AC powered auxiliary fuel boost pump for the APU operates whenever the APU is operating and no other pump is on. it has an alternate power source on the AC Static Inverter bus for battery-only starts.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 117,
      question:
        "During cockpit preparation you observe that the Fuel on Board quantity indication is displayed in a partial amber box. What would this indicate?",
      options: [
        "Fuel quantity indication (FQI) for at least one fuel tank is in degraded mode.",
        "The available fuel in one of the tank is completely unusable",
        "Both {A} and {B} are correct",
      ],
      answer: 1,
    },
  ],
};
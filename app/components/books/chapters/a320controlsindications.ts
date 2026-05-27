import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "CONTROLS AND INDICATIONS / LIMITATIONSPHASE 2",
  questions: [
    // ELECTRICAL (Questions 1-19)
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
      options: ["A Green CB", "B Black CB", "C. Red capped CB", "Yellow CB"],
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
      id: 5,
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
      id: 6,
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
        "Gen 1 continues supplying AC Bus 1 , and Gen 2 continues supplying AC Bus 2",
        "AC bus 1 and 2 fail and Aircraft go into emerelecconfig",
        "BTC is inhibited in flight",
      ],
      answer: 1,
    },
    {
      id: 9,
      question: "What is electrical Priority order for A320?",
      options: [
        "External power has priority over Engine Generators",
        "APU has priority over Engine Generators",
        "APU has priority over External Power",
        "Onside Engine Generator has priority over External power",
      ],
      answer: 3,
    },
    {
      id: 10,
      question:
        "When does Amber light of Gen 1 line PB,on emer elec panel illuminate?",
      options: [
        "when fire is detected in avionics Bay",
        "when smoke is detected in Avionics ventilation duct",
        "When fault is detected in Generator 1",
        "none of the above",
      ],
      answer: 1,
    },
    {
      id: 11,
      question: "Can APU be started when the RAT is stalled?",
      options: [
        "Yes, via AC static inverter bus",
        "Yes, via AC essential bus",
        "Yes, via gravity fuel feeding",
        "No, as APU requires AC power to start.",
      ],
      answer: 0,
    },
    {
      id: 12,
      question:
        "During prelim cockpit preperation if the APU is started on batteries only?",
      options: [
        "it should be started within 30 min after the selection of batteries to AUTO.",
        "35 min after battery selection to AUTO, the battery charge is less than 25 % of maximum capacity.",
        "apu cannot be started on batteries only",
        "both a & b",
      ],
      answer: 3,
    },
    {
      id: 13,
      question: "W.R.T the IDG DISC GRDED PB SW ?",
      options: [
        "Maintaining the IDG pb-sw during more than 3 s may damage the IDG disconnection mechanism",
        "Disconnect the IDG only when the engine is running or windmilling. If not, the IDG will be damaged when starting the engine.",
        "The IDG switches are normally springloaded out. Pressing this switch disconnects the IDG from its driveshaft: only maintenance personnel can reconnect it.",
        "all of the above.",
      ],
      answer: 3,
    },
    {
      id: 14,
      question:
        "On the EMER ELEC PANEL RAT & EMER GEN PB SW fault light illumiates ?",
      options: [
        "TR 1 and TR 2 fault",
        "This light comes on red if the emergency generator is not supplying power when AC BUS 1 and AC BUS 2 are not powered.",
        "Gen 1 and TR 2 Fault",
        "Gen 1 and DC BUS 2 fault",
      ],
      answer: 1,
    },
    {
      id: 15,
      question: "SHED appears in amber on the ecam ELEC page ?",
      options: [
        "main galley is shed",
        "part of the main galley is shed",
        "SHED appears when AC or DC SHED ESS BUS is shed",
        "AC ESSENTIAL bus is shed.",
      ],
      answer: 2,
    },
    {
      id: 16,
      question:
        "IDG legend indication on the ecam ELEC SD page turns amber when ?",
      options: [
        "IDG oil outlet temperature overheat (above 180 °C) IDG oil pressure gets too low, or ‐ IDG disconnection.",
        "IDG oil pressure gets too low IDG disconnection.",
        "IDG disconnection",
        "all of the above",
      ],
      answer: 3,
    },
    {
      id: 17,
      question: "On the ECAM ELEC SD page DISC appears in amber ?",
      options: [
        "current is discharging at an abnormal rate",
        "The IDG is disconnected",
        "GEN 1 or GEN 2 are disconected",
        "BATT 1 and BATT 2 are disconnected",
      ],
      answer: 1,
    },
    {
      id: 18,
      question: "On the ELEC SD page LO PR appears in amber when?",
      options: [
        "RAT is deployed but supplying low pressure",
        "IDG low pressure is detected and the associated engine is running",
        "IDG low pressure is detected and the associated engine is not running",
        "all of the above",
      ],
      answer: 1,
    },
    {
      id: 19,
      question: "GALLEY SHED legend appears in white on the ELEC SD page?",
      options: [
        "The GALLEY pb-sw is OFF",
        "The main gelleys are shed",
        "both a and b",
      ],
      answer: 2,
    },

    // HYDRAULIC (Questions 20-34)
    {
      id: 20,
      question: "PTU is inhibited when ?",
      options: [
        "PTU is inhibited for 40 sec after cargo door operations.",
        "The PTU is inhibited during the first engine start and automatically tested during the second engine start.",
        "both a & b",
        "PTU is inhibited on the ground.",
      ],
      answer: 2,
    },
    {
      id: 21,
      question: "Reservoir quantity on HYD SD page turns amber when ?",
      options: [
        "the fluid level goes below the warning level, in which case it becomes amber.",
        "the fluid returning to the reservoir is above a certain temperature",
        "when a LO pressure is detected",
        "all of the above",
      ],
      answer: 0,
    },
    {
      id: 22,
      question: "ON the HYD Pg the indication of the RAT ▸ Amber when",
      options: [
        "Uncommanded deployment of the RAT",
        "Pressure for stowing the RAT has been applied. the RAT pump is not available.",
        "the RAT pump is not available",
        "both b & c",
      ],
      answer: 3,
    },
    {
      id: 23,
      question: "PTU indication on the HYD SD page turns amber ?",
      options: [
        "PTU Over heat",
        "PTU LO PR",
        "PTU LOW LVL",
        "PTU pb sw is OFF",
      ],
      answer: 3,
    },
    {
      id: 24,
      question:
        "On HYD SD pg System pressure legend is normally green becomes amber ?",
      options: [
        "when system pressure is below 1 750 PSI",
        "when system pressure is below 1 450 PSI",
        "when system pressure is below 1 850 PSI",
        "when system pressure is below 1 250 PSI",
      ],
      answer: 1,
    },
    {
      id: 25,
      question:
        "On HYD SD pg System Label legend is normally white becomes amber?",
      options: [
        "when system pressure is below 1 450 PSI",
        "when system pressure is below 1 650 PSI",
        "when system pressure is below 1 750 PSI",
      ],
      answer: 0,
    },
    {
      id: 26,
      question:
        "Normal HYD system operating pressure is 3 000 PSI. How much is it with the RAT deployed?",
      options: [
        "3 000 PSI when powered by the RAT",
        "2 000 PSI when powered by the RAT",
        "2 500 PSI when powered by the RAT",
      ],
      answer: 2,
    },
    {
      id: 27,
      question:
        "During Cargo Door operation the yellow electric pump automatically switches on. which of the below statement is correct?",
      options: [
        "Energizes the green hyd via the ptu",
        "Gives full functionality of yellow hyd",
        "This inhibits the operation of other yellow system functions (except alternate braking and engine 2 reverse)",
        "only the cargo door is hydraulically supplied",
      ],
      answer: 2,
    },
    {
      id: 28,
      question: "RAT OUT MEMO DISPLAY ?",
      options: [
        "This memo appears in amber, if the Ram Air Turbine is not fully stowed",
        "This memo appears in green, if the Ram Air Turbine is fully stowed",
        "This memo appears in green, if the Ram Air Turbine is not fully stowed",
        "This memo appears in green, if the Ram Air Turbine is fully operational",
      ],
      answer: 2,
    },
    {
      id: 29,
      question: "hydraulic reservoirs pressurization?",
      options: [
        "Normally, HP bleed air from engine 1 pressurizes the hydraulic reservoirs automatically.",
        "If the bleed air pressure is too low, the system takes bleed air pressure from the crossbleed duct.",
        "both a & b",
        "Normally, HP bleed air from engine 2 pressurizes the hydraulic reservoirs automatically.",
      ],
      answer: 2,
    },
    {
      id: 30,
      question: "Priority valves in the HYD system are used for ?",
      options: [
        "cut off hydraulic power to heavy load users if hydraulic pressure in a system gets low",
        "supply hydraulic power to heavy load users if hydraulic pressure in a system gets low",
        "cut off hydraulic power to light load users if hydraulic pressure in a system gets low",
        "cut off hydraulic power to all the load user if hydraulic pressure in a system gets low",
      ],
      answer: 0,
    },
    {
      id: 31,
      question: "Where can you see indications for RAT? *",
      options: [
        "Hydraulics SD page",
        "electrical SD Page",
        "cabin pressurization SD page",
        "Both A and B",
      ],
      answer: 0,
    },
    {
      id: 32,
      question:
        "Hydraulic reservoir pressurisation is provided for from which stage of engine ?",
      options: ["IP stage", "HP stage of engine 2", "HP stage of engine 1", "None of the above"],
      answer: 2,
    },
    {
      id: 33,
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
      id: 34,
      question:
        "Reservoir quantity on the HYD SD pg is in green it turns amber when ?",
      options: [
        "the fluid level goes below the warning level, in which case it becomes amber",
        "the fluid level goes below the caution level, in which case it becomes amber",
        "the fluid level goes below the warning level, in which case it becomes red",
        "the fluid level goes below the warning level, in which case an adv is generated",
      ],
      answer: 0,
    },

    // FUEL (Questions 35-53)
    {
      id: 35,
      question:
        "What is APU fuel consumption with packs on and APU generator running?",
      options: ["50 Kg/ hour", "200 Kg/hour", "130 Kg/hour", "175 Kg/Hour"],
      answer: 2,
    },
    {
      id: 36,
      question: "When do Fuel transfer valves close automatically?",
      options: [
        "When fuel from outer tank has been completely transferred to the inner tank.",
        "When fuel from inner tank has been consumed completely.",
        "They will automatically close at the next refueling operation",
        "They have to be manually closed at the next refueling operation",
      ],
      answer: 2,
    },
    {
      id: 37,
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
      id: 38,
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
      id: 39,
      question: "Which tanks can provide gravity fuel feeding to engines?",
      options: ["Vent tank", "Inner wing tank", "Center tank", "All of the Above"],
      answer: 1,
    },
    {
      id: 40,
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
      id: 41,
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
      id: 42,
      question:
        "When is intertank fuel transfer valves shown in hollow amber?",
      options: [
        "When Valve is in transit",
        "When valves are open, when commanded closed",
        "During Transfer from Outer to Inner tank",
        "When Valve position information is not available",
      ],
      answer: 0,
    },
    {
      id: 43,
      question: "When is FOB indication half boxed in amber?",
      options: [
        "The Fuel on board is completely usable.",
        "The fuel on board indications are inaccurate",
        "when the displayed quantity is not all usable (intercell transfer valve failure or loss of center tank pumps).",
        "Center Tank Transfer valves have failed in closed position",
      ],
      answer: 2,
    },
    {
      id: 44,
      question: "When is the transfer valve indication solid amber?",
      options: [
        "when the valves are open, while commanded closed",
        "when the valves are closed, while commanded closed",
        "none of the above",
      ],
      answer: 0,
    },
    {
      id: 45,
      question: "During automatic refueling?",
      options: [
        "fuel goes into the ACTs, the center tank and the outer cell of the wing tanks simultaneously.",
        "When the outer cell of the wing tank is full, fuel overflows into the inner cell",
        "both a & b",
        "the wing tanks first then the center tank",
      ],
      answer: 2,
    },
    {
      id: 46,
      question: "Approximate refueling time at nominal pressure is?",
      options: [
        "17 min for wing tanks",
        "20 min for all tanks (without ACT )",
        "both a & b",
      ],
      answer: 2,
    },
    {
      id: 47,
      question:
        "A special fuel pump supplies fuel for APU startup when fuel feed pressure is low (due to loss of tank pumps or loss of normal AC electrical supply). This pump normally runs off which electrical bus?",
      options: [
        "AC ESS SHED",
        "runs off the AC STAT INV BUS if the AC ESS SHED fails.",
        "both a & B",
        "DC ESS BUS",
      ],
      answer: 2,
    },
    {
      id: 48,
      question: "An advisory appears when the fuel temperature is?",
      options: [
        "Above 45 °C for the inner cell, or 55 °C for the outer cell.",
        "Below -40 °C",
        "It becomes amber, and the ECAM displays a caution, if the temperature goes above the high limit or below the low limit",
        "All of the above",
      ],
      answer: 3,
    },
    {
      id: 49,
      question:
        "The fuel quantity indication on the FUEL sd page is boxed amber when ?",
      options: [
        "The outer indication is boxed amber, if both transfer valves fail to open when the inner is at low level.",
        "The center tank indication is boxed amber, if both center tank pumps are failed, or are switched OFF.",
        "both a & b",
        "none of the above",
      ],
      answer: 2,
    },
    {
      id: 50,
      question: "OUTR TK FUEL XFRD memo ?",
      options: [
        "appears in green, if at least one transfer valve is open in one wing tank",
        "appears in amber, if at least one transfer valve is open in one wing tank",
        "appears in green, if no transfer valve is open in one wing tank",
        "appears in green, if at least one transfer valve is open in each wing tank",
      ],
      answer: 0,
    },
    {
      id: 51,
      question: "REFUELG memo appears in green, when ?",
      options: [
        "The door of the refuel control panel, on the fuselage or on the wing is open.",
        "The PWR pb-sw of the refuel control panel, in the cockpit is ON",
        "both a & b",
        "when refueling is in progress",
      ],
      answer: 2,
    },
    {
      id: 52,
      question: "FUEL L (R) WING TK LO LVL ecam alert?",
      options: [
        "This alert triggers when left or right wing tanks quantity is below 750 kg (1 650 lb).",
        "This alert is triggered by sensors getting dry and is independent from the fuel quantity indications",
        "This alert is generated by the FLSCU( Fuel Level Sensing Control Unit)",
        "all of the above",
      ],
      answer: 3,
    },
    {
      id: 53,
      question: "Minimum fuel quantity for takeoff?",
      options: ["1 500 kg", "1 700 kg", "1 800 kg", "1500 lbs"],
      answer: 0,
    },
  ],
};
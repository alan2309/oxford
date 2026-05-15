import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "Air Conditioning/Pressurization/Vent-02",
  questions: [
    {
      id: 1,
      question:
        "Temperature regulation of the Packs is automatic, and controlled by ….",
      options: [
        "Associated Pack controller.",
        "Associated Zone controller.",
        "Both, the associated Pack controller and the Zone controller.",
        "The associated Air conditioning system controller as there are no Pack Controllers or Zone Controllers on new A320 aircrafts.",
      ],
      answer: 3,
    },
    {
      id: 2,
      question:
        "The temperature in each aircraft zone is controlled by the Air Conditioning System Controllers, and optimized by regulating",
      options: [
        "A HOT AIR PRESSURE regulating valve.",
        "A ZONE TRIM AIR valve.",
        "A PACK FLOW CONTROL valve",
      ],
      answer: 1,
    },
    {
      id: 3,
      question:
        "How many temperature selectors are there on the A320? How many temperature zones are there?",
      options: [
        "Three rotary temperature selectors and one zone.",
        "Three rotary temperature selectors, one each for the cockpit zone, the forward cabin zone, and the aft cabin zone.",
        "Two rotary temperature selectors, one for the cockpit and first class zone and one for the aft cabin zone.",
        "Four rotary temperature selectors and four zones.",
      ],
      answer: 1,
    },
    {
      id: 4,
      question:
        "There are three Trim Air valves, one for Cockpit zone and one each for FWD and AFT cabin zones. Trim air valves optimize the temperature by:",
      options: [
        "Adding hot air",
        "Adding FRESH air",
        "Modulating the pack flow",
        "Adding re-circulated CABIN air",
      ],
      answer: 0,
    },
    {
      id: 5,
      question:
        "The temperature of each aircraft zone is optimized by means of:",
      options: [
        "A HOT AIR valve.",
        "A ZONE control valve.",
        "A PACK FLOW VALVE.",
        "A TRIM AIR valve.",
      ],
      answer: 3,
    },
    {
      id: 6,
      question:
        "Position of TRIM Air valves and hot air pressure regulating valves are indicated in",
      options: [
        "COND page.",
        "Bleed page",
        "COND & BLEED page",
        "COND and CAB PRESS page",
      ],
      answer: 0,
    },
    {
      id: 7,
      question:
        "FWD cabin temp selector is set to 12 O clock position",
      options: [
        "FWD cabin temperature is controlled to 18 deg. c",
        "FWD cabin is controlled to a temp of 24 deg c.",
        "AFT cabin is controlled to a temp of 24 deg c.",
        "FWD and AFT cabin temp is controlled to 18 deg. c",
      ],
      answer: 1,
    },
    {
      id: 8,
      question: "How are the Ram Air Inlet and outlets controlled.",
      options: [
        "Open during takeoff and landing.",
        "Closed during takeoff, open during landing till the speed reaches 70 kts",
        "Closed during takeoff and open when the speed reaches below 70 kts during landing",
        "Closed during landing when the speed is less than 70 kts.",
      ],
      answer: 2,
    },
    {
      id: 9,
      question:
        "Even when LO is selected on the PACK FLOW selector, the pack flow is automatically selected NORM in case of:",
      options: [
        "Single pack operation.",
        "APU supplying bleed air.",
        "Cooling demand not being met.",
        "All the above.",
      ],
      answer: 2,
    },
    {
      id: 10,
      question:
        "When LO is selected on the PACK FLOW selector, the pack flow is automatically selected HI in case of:",
      options: [
        "APU supplying bleed air.",
        "abnormally hot and humid conditions",
        "Number of passengers in the cabin higher than 115.",
        "Both, (A) and (B).",
      ],
      answer: 0,
    },
    {
      id: 11,
      question:
        "When only one pack is operating and Pack selector is at LO. What is the flow.",
      options: [
        "80% of normal flow.",
        "150% of normal flow.",
        "Normal flow",
        "120% of normal flow.",
      ],
      answer: 3,
    },
    {
      id: 12,
      question:
        "What is the effect of selecting the Hot Air p/b switch to OFF.",
      options: [
        "The closure of hot air pressure regulating valve only.",
        "The opening of trim air valves.",
        "The closure of hot air pressure regulating valve and all the trim air valve.",
        "Closing of hot air pressure valve and opening of trim air valves.",
      ],
      answer: 2,
    },
    {
      id: 13,
      question:
        "What happens when the hot air pressure regulating valve has failed in open position.",
      options: [
        "No effect on temp regulation",
        "Pack 1 controls the cockpit, pack 2 controls the cabin temp to the mean value of the selected temp.",
        "Trim air valves go to closed position to optimize the temperatures as hot air keeps supplied by Hot Air Valve.",
        "No effect on the cockpit. Cabin temp are controlled to a fixed temp of 15 Deg.c",
      ],
      answer: 0,
    },
    {
      id: 14,
      question:
        "What are the indications if a Pack p/b switch are selected OFF before take-off?",
      options: [
        "Pack \"OFF\" light only.",
        "Pack FAULT LT without any MC or SC",
      ],
      answer: 0,
    },
    {
      id: 15,
      question:
        "After switching packs on after T/O, FAULT light comes on amber in the PACK 1 p/b with associated ECAM. what do you understand by this?",
      options: [
        "The pack flow control valve position disagrees with selected position, or",
        "There could be Compressor outlet overheat, or",
        "There could be Pack outlet overheat",
        "All are correct",
      ],
      answer: 3,
    },
    {
      id: 16,
      question:
        "When should RAM air p/b switch be used ? What happens then ?",
      options: [
        "Only when differential pressure is less than 1 psi. it opens the EMER RAM AIR inlet and outflow valve open to 50 % position if CAB is AUTO.",
        "Whenever more ventilation is needed",
        "Only when differential pressure is less than 1 psi, it opens the EMER RAM AIR inlet and closes the packs",
        "When differential pressure is less than 1 psi, it opens the EMER RAM AIR inlet and closes the outflow valve.",
      ],
      answer: 0,
    },
    {
      id: 17,
      question: "When do we use RAM AIR p/b",
      options: [
        "AT any time.",
        "Only when differential pressure is less than 1 psi",
        "Only when differential pressure is more than 1 psi",
        "Only after the outflow valve is fully open and closes the outflow valve.",
      ],
      answer: 1,
    },
    {
      id: 18,
      question: "Pack valve automatically closes due to",
      options: [
        "Pack outlet pressure being very high",
        "Pack overheat or corresponding fire p/b is pressed or ditching p/b is pressured or during any engine start.",
        "Leakage detected in the air cycle machine.",
        "Pack flow selector at LO position.",
      ],
      answer: 1,
    },
    {
      id: 19,
      question:
        "What happens when ditching push button is selected to ON?",
      options: [
        "A. Safety valves are driven to full OPEN.",
        "B. Pack flow control valves, out flow valve, skin air inlet an extract valves and Emer. Ram Air inlet valve close.",
        "C. Only pack flow control valve and Emer. Ram Air Inlet valve close.",
        "D. As in (B) but outflow valve will close only if press mode selector is in AUTO.",
      ],
      answer: 3,
    },
    {
      id: 20,
      question:
        "By increasing cabin altitude in flight, what happens to Cabin Diff Pressure?",
      options: [
        "It will increase.",
        "It will decrease.",
        "There will be no change.",
      ],
      answer: 1,
    },
    {
      id: 21,
      question:
        "When will Auto transfer from one CPC to another controller occurs.",
      options: [
        "A. At each landing initiated 70 sec after each landing.",
        "B. In case of failure of the operating system.",
        "C. If FMGS fails",
        "D. (A) and (B) are correct",
      ],
      answer: 3,
    },
    {
      id: 22,
      question:
        "In automatic pressure control mode what will be the cabin altitude.",
      options: [
        "Always 8000 feet.",
        "It is highest of the value of cabin altitude reached at aircraft level off and landing elevation",
        "Always the landing elevation.",
        "It is the cabin altitude reached at the time of aircraft level off.",
      ],
      answer: 1,
    },
    {
      id: 23,
      question:
        "What will be differential pressure for different flights.",
      options: [
        "Always 8.00 psi",
        "Always 8.60 psi",
        "Differential pressure valve depends upon flight altitude.",
        "As in (C) and the normal maximum value of 8.06 psi is reached when flight altitude is 39000 ft.",
      ],
      answer: 3,
    },
    {
      id: 24,
      question:
        "What happens in Auto Pr. Control in the Abort mode.",
      options: [
        "Take off is Aborted pre-pressurization is aborted.",
        "If a/c returns to take off field before reaching a certain altitude, cabin altitude is controlled to T/O field.",
        "If a/c returns to take off field before reaching a certain altitude, cabin altitude is maintained constant.",
        "At touch down cabin altitude is same as a/c altitude.",
      ],
      answer: 1,
    },
    {
      id: 25,
      question:
        "Which are the correct statement regarding CAB PRESS mode selector p/b?",
      options: [
        "With both the CPC failure, mode selector FAULT light comes on.",
        "With single CPC failure, mode selector FAULT light comes on",
        "As in (A) and when the mode selector p/b is selected to MAN, MAN illuminates white and FAULT extinguishes.",
        "As in (A) and when the mode selector p/b is selected to MAN, MAN illuminates white and FAULT remains illuminated.",
      ],
      answer: 3,
    },
    {
      id: 26,
      question:
        "In cruise, you find cabin V/S is fluctuating up and down and is uncomforting to you as well as to pax. You want to switchover the Cabin Pressure Controller and it is done by:",
      options: [
        "Selecting the Cabin Pressure MODE SEL p/b to MAN and then back to AUTO.",
        "As in (A) but the MODE SEL should be left in MAN for at least 10 sec",
        "The switch over may be carried out not more than twice in a flight.",
        "Both (A) and (C) are correct",
      ],
      answer: 1,
    },
    {
      id: 27,
      question:
        "The MODE SEL p/b in MAN mode, allows you to use the MAN V/S CTL sw in order to",
      options: [
        "Manually alter the air inlet valve setting.",
        "Manually adjust the pack flow valve.",
        "Manually adjust the outflow valve.",
        "Manually alter the pack outflow valve setting.",
      ],
      answer: 2,
    },
    {
      id: 28,
      question:
        "If landing field elevation from FMGC is not available, you have to set manually by pulling the LDG ELEV Sel. The cabin altitude is …..",
      options: [
        "Only controllable manually through the MAN V/S CTL sw.",
        "Still controlled automatically through the out flow valve.",
        "Still controlled normally through the safety valve",
        "Only controllable manually through the LDG ELEV selector.",
      ],
      answer: 1,
    },
    {
      id: 29,
      question:
        "What happens when landing elevation selector is not in auto position.",
      options: [
        "With FMGS available, landing elevation data is coming from FGMS for pressurization in controller, selected landing elevation is ignored.",
        "With the FMGS not available landing elevation selected is taken as reference.",
        "Landing elevation selected is taken as reference even if FMGS is available.",
        "Both (A) and (B) are correct.",
      ],
      answer: 2,
    },
    {
      id: 30,
      question:
        "When OFV gets opened during a flight, what immediate action is required.",
      options: [
        "Ditching p/b _ ON",
        "Mode selector to MAN & V/S CTL Sw_Down",
        "Emer RAS p/b _OFF",
        "Blower and Extract p/bs _ OFF",
      ],
      answer: 1,
    },
    {
      id: 31,
      question: "How is the MAN V/S CTL switch toggle used.",
      options: [
        "The switch actuation is very fast.",
        "As in (A) and switch should not be maintained in up or down position.",
        "As in (B) and if it is maintained in up outflow valve will open in 10 seconds.",
        "Due to slow outflow valve position, toggle switch must be maintained in up and down position until target V/S is reached.",
      ],
      answer: 3,
    },
    {
      id: 32,
      question:
        "CABIN PRESS mode selector is in MAN. If ditching p/b is selected ON, the",
      options: [
        "Outflow valve will not close automatically.",
        "OFV will close automatically",
        "Ram Air inlet valve open",
        "Engine bleed valve opens",
      ],
      answer: 0,
    },
    {
      id: 33,
      question: "In manual pressure control mode",
      options: [
        "ECAM indications are not available",
        "Outflow valve position signal is transmitted via manual backup section of controller No.1",
        "Outflow valve position signal is transmitted via back up section of controller No. 2",
        "Outflow valve is set to full open always.",
      ],
      answer: 1,
    },
    {
      id: 34,
      question: "Two safety valves are provided such that",
      options: [
        "Each safety valve avoids excessive positive and negative differential pressure.",
        "One safety valve avoids excessive positive differential pressure and another safety valve avoids excessive negative differential pressure.",
        "Both safety valves avoid excessive positive differential pressure only.",
        "Both safety valves avoid excessive negative differential pressure only.",
      ],
      answer: 0,
    },
    {
      id: 35,
      question: "Mark the correct statement:",
      options: [
        "When you set Blower pb / sw to Override, Blower stops, air-conditioning air is added for ventilation and avionics ventilation sys goes into Closed Config.",
        "When you set Extract pb / sw to Override, extract fan keeps running, air-conditioning air is added for ventilation and avionics ventilation sys goes into Closed Config.",
        "If both Blower and Extract pb / sw are set to override, Blower fan stops, Extract keeps running, air conditioning air is added for avionics ventilation and configuration is akin to Intermediate Config.{Smoke drill Action}",
        "All are correct.",
      ],
      answer: 3,
    },
    {
      id: 36,
      question:
        "For the aircraft to be in normal operation , intermediate configuration ,what conditions must be satisfied ?",
      options: [
        "Aircraft must be on ground with the thrust levers not at T/O and the skin temp. above a given threshold.",
        "Aircraft must be in the air with the thrust levers at T/O and skin temp. below a given threshold.",
        "Aircraft must be in the air or on the ground, with the thrust levers at T/O and skin temp. above a given threshold.",
        "The skin temp. must be below a given threshold.",
      ],
      answer: 2,
    },
    {
      id: 37,
      question: "What happens when you press Extract P/B to OVRD when in heavy rain on ground?\n\n1. Extract fan stops.\n2. Extract fan keeps running.\n3. Air-conditioning air is added for ventilation.\n4. Avionics ventilation system goes into Closed Config.",
      options: [
        "A) 1,3,4",
        "B) 2,3,4",
        "C) 2,4",
        "D) 1,4",
      ],
      answer: 1,
    },
    {
      id: 38,
      question:
        "For the aircraft to be in the normal operation, open circuit configuration ,what conditions must be satisfied ?",
      options: [
        "The aircraft must be on ground ,with the thrust lever not at T/O and skin temp. above a given threshold.",
        "The aircraft must be in the air ,with the thrust lever not at T/O and skin temp. below the given thresh hold.",
        "The aircraft must be on ground ,with the thrust lever at T/O and skin temp. above a given threshold.",
      ],
      answer: 0,
    },
    {
      id: 39,
      question:
        "If both blower and extract p/b switches are set to OVRD, during smoke drill, the avionic equipment air is ……",
      options: [
        "Taken from atmosphere and thrown overboard.",
        "Taken from atmosphere and circulated through skin heat exchanger.",
        "Taken from air conditioning bay and thrown overboard .",
        "Taken from air conditioning bay and circulated through skin heat exchanger.",
      ],
      answer: 2,
    },
    {
      id: 40,
      question:
        "What happens during smoke drill when both the blower and the extract p/b switches are set to override.",
      options: [
        "Only the extract fan will stop",
        "Both the blower and the extract fan will stop working",
        "The Blower fan stops and the extract fan remains energized.",
        "Both the blower and the extract fan remain energized.",
      ],
      answer: 2,
    },
    {
      id: 41,
      question:
        "On ground with engines stopped, when will an external horn be trigged.",
      options: [
        "If avionic ventilation blower pressure is low.",
        "If DUCT OVHT",
        "Extract fan extract pressure is low.",
        "In all the above cases.",
      ],
      answer: 3,
    },
    {
      id: 42,
      question:
        "In case of heavy rain which p/bs are to be pressed for landing.",
      options: [
        "Extract to OVRD",
        "Blower to OVRD",
        "Blower and Extract to OVRD",
        "Ditching p/b.",
      ],
      answer: 0,
    },
    {
      id: 43,
      question:
        "There is abnormal residual pressure in the cabin on touch-down when pressurization had been controlled manually in flight. The aircraft will be automatically de-pressurized by opening the outflow valve, as soon as …",
      options: [
        "All ADIRS indicate an airspeed below 100 kts, or when all engines are shutdown",
        "Parking brakes are applied, and any-one aircraft door is opened.",
        "As in (B), and CABIN PRESSURE red light on the cabin doors, flashes.",
        "None of the above is correct.",
      ],
      answer: 0,
    },
    {
      id: 44,
      question:
        "You have taxied out when OAT is + 14°C. What is the configuration of avionics ventilation?",
      options: [
        "Open configuration",
        "Closed configuration",
        "Intermediate configuration.",
      ],
      answer: 0,
    },
    {
      id: 45,
      question:
        "Q 51.&nbsp;&nbsp;&nbsp;&nbsp;You have taxied out when OAT is + 40°C. What is the configuration of avionics ventilation?",
      options: [
        "Open configuration",
        "Closed configuration",
        "Intermediate configuration.",
      ],
      answer: 0,
    },
    {
      id: 46,
      question:
        "Q 51.&nbsp;&nbsp;&nbsp;&nbsp;You have taxied out when OAT is + 40°C. What is the configuration of avionics ventilation?",
      options: [
        "Open configuration",
        "Closed configuration",
        "Intermediate configuration.",
      ],
      answer: 0,
    },
    {
      id: 47,
      question:
        "You have set the Thrust Levers to FLX/MCT for take-off and OAT is +40°C. What is the configuration of avionics ventilation?",
      options: [
        "Open configuration",
        "Closed configuration",
        "Intermediate configuration.",
      ],
      answer: 2,
    },
    {
      id: 48,
      question: "Mark the correct statement:",
      options: [
        "LDG ELEV AUTO appears in green when LDG ELEV selector is in AUTO.",
        "LDG ELEV MAN appears in green if LDG ELEV Selector is not in AUTO.",
        "If ECAM has CAB PR LDG ELEV FAULT, landing field elevation from FMGC is not available. Landing elevation must be manually selected with LDG ELEV selector. For this S/D CRUISE or CAB PRESS pages can be referred.",
        "All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 49,
      question:
        "What is the meaning of CAB PR LDG ELEV FAULT?",
      options: [
        "Wrong selection of LDG ELEV is made.",
        "LDG ELEV selector is moved out of auto without requirement",
        "LDG ELEV data from FMGC is not available.",
        "All the above are correct.",
      ],
      answer: 2,
    },
    {
      id: 50,
      question:
        "With Pack 1 and 2 Fault, the recommended max FL is",
      options: [
        "100 / MEA {whichever is higher}",
        "140 / MEA {whichever is higher}",
        "150 / MEA {whichever is higher}",
        "250 / MEA {whichever is higher}",
      ],
      answer: 0,
    },
    {
      id: 51,
      question:
        "Hot air \"FAULT\" light illuminates on the air conditioning panel.",
      options: [
        "Duct over-pressure is detected.",
        "Duct overheat is detected.",
        "Any of the cabin trim air valve has failed, stuck in open",
        "All of the above conditions.",
      ],
      answer: 1,
    },
  ],
};
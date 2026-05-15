import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "CONTROLS AND INDICATIONS / LIMITATIONS (PHASE 1)",
  questions: [
    // PNEUMATICS (Questions 1-14)
    {
      id: 1,
      question: "APU BLEED valve opens ?",
      options: [
        "when the apu start pb is on",
        "when engine bleed is not sufficient.",
        "APU BLEED PB IS ON and N > 95 % and there is no leak in the APU or in the left side bleed. (If there is a leak on the right side, the x-bleed valve closes.)",
      ],
      answer: 2,
    },
    {
      id: 2,
      question: "X BLEED SELECTOR SW IN AUTO. XBLEED WILL CLOSE WHEN ?",
      options: [
        "The crossbleed valve is closed if the APU bleed valve is closed.",
        "in case of a wing, pylon leak.",
        "APU leak (except during engine start).",
        "all of the above.",
      ],
      answer: 3,
    },
    {
      id: 3,
      question: "Pre Cooler Inlet pressure becomes amber when?",
      options: [
        "if under 4 PSI.",
        "if overpressure is detected by the BMC (threshold between 57 and 60 PSI)",
        "both a and b",
      ],
      answer: 2,
    },
    {
      id: 4,
      question: "APU bleed valve indication becomes amber ?",
      options: [
        "The APU valve is fully closed and, the APU master switch is ON.",
        "and the APU bleed switch is ON for more than 10 s.",
        "Both a and b are correct",
      ],
      answer: 2,
    },
    {
      id: 5,
      question: "GND HP CONNECTION indication?",
      options: [
        "appears on the ground only.",
        "Indicates that it is possible to connect the HP ground air supply",
        "both a & b",
        "indicated gnd hp connection is connected and supplying the required pressure",
      ],
      answer: 2,
    },
    {
      id: 6,
      question: "ANTI ICE ind in white appears on the bleed sd page?",
      options: [
        "engine anti ice is running",
        "wing anti ice is running",
        "when anti ice should be switched on.",
        "when engine anti ice should be switched on.",
      ],
      answer: 1,
    },
    {
      id: 7,
      question:
        "The green arrow depicting wing anti ice function on bleed sd page becomes amber when?",
      options: [
        "Valve is open and air pressure is low or high.",
        "Valve is open on ground for more than 10 s",
        "both a & b",
        "there is no indication of wing anti ice on bleed sd page only a memo is displayed.",
      ],
      answer: 2,
    },
    {
      id: 8,
      question: "Engine Identification 1 on bleed SD page turns amber when ?",
      options: [
        "when N 1 is below idle",
        "when N2 is below idle.",
        "when there is a hyd res ovr heat",
        "when there is an IDG disconnection",
      ],
      answer: 1,
    },
    {
      id: 9,
      question: "APU BLEED MEMO appears when?",
      options: [
        "apu is avail with N>95%",
        "apu is supplying AC1 and AC2",
        "If the APU is available and the APU BLEED pb-sw is ON",
      ],
      answer: 2,
    },
    {
      id: 10,
      question: "Does the bleed pressure fluctuate during take off and climb?",
      options: [
        "NO. bleed pressure is maintained by the IP and HP valve.",
        "Bleed pressure may fluctuate between 38 and 56 PSI (with a maximum peak to peak pressure of 16 PSI) particularly at high engine power (takeoff or climb) up to FL 100.",
        "Bleed Valves maintains delivery pressure at 45 ± 5 PSI.",
        "PACKS are off no bleed fluctuation takes place.",
      ],
      answer: 1,
    },
    {
      id: 11,
      question: "If APU Bleed is ON?",
      options: [
        "If the crossbleed valve is SHUT, the Engine bleed valve 2, remains open",
        "engines have priority over apu bleed",
        "apu will supply bleed to both packs irrespective of x bleed position",
      ],
      answer: 0,
    },
    {
      id: 12,
      question:
        "The flight crew must not use bleed air from the APU BLEED and ?",
      options: [
        "from the LP Air Start Unit at the same time, to prevent any adverse effect on the Bleed Air System",
        "from engine bleed",
        "from the HP Air Start Unit at the same time, to prevent any adverse effect on the Bleed Air System",
      ],
      answer: 2,
    },
    {
      id: 13,
      question:
        "The flight crew must not use conditioned air from the packs and ?",
      options: [
        "from the LP Air Conditioning Unit at the same time, to prevent any adverse effect on the Air Conditioning system",
        "from the HP Air Conditioning Unit at the same time, to prevent any adverse effect on the Air Conditioning system",
        "From engine bleed",
      ],
      answer: 0,
    },
    {
      id: 14,
      question:
        "Before switching on APU BLEED to determine if an HP ground air unit is connected?",
      options: [
        "confirm with ground personnel",
        "the flight crew should also check on the BLEED SD page, if there is pressure in the bleed air system",
        "both a & B",
      ],
      answer: 2,
    },

    // APU (Questions 15-53)
    {
      id: 15,
      question:
        "The APU may run without cockpit crew supervision when the aircraft is on the ground. In case of fire in the APU compartment?",
      options: [
        "APU fire warnings operate in the cockpit. A horn in the nose gear bay sounds.",
        "The AVAIL light goes out. The FAULT light in the MASTER SW lights up.",
        "The APU fire extinguisher discharges.",
        "all of the above",
      ],
      answer: 3,
    },
    {
      id: 16,
      question:
        "If the aircraft was using APU bleed air and a manual shut down sequence is initiated?",
      options: [
        "shuts down immediately",
        "the APU keeps running for a cooling period of 60 to 120 s.",
        "At 7 % the air inlet flap closes.",
        "both b & C",
      ],
      answer: 3,
    },
    {
      id: 17,
      question: "what does the blue ON light on APU master switch indicate?",
      options: [
        "The APU is in operation.",
        "The APU is in starting sequence",
        "both a & b",
      ],
      answer: 2,
    },
    {
      id: 18,
      question: "SWITCHING ON THE APU MASTER SW PB ?",
      options: [
        "Electric power goes to the APU system; the ECB performs a power-up test",
        "The APU air intake flap opens, The APU fuel isolation valve opens If no fuel tank pump is running, the APU fuel pump operates",
        "If the aircraft has ground power or main generator power, the APU page appears on the ECAM display.",
        "ALL OF THE ABOVE",
      ],
      answer: 3,
    },
    {
      id: 19,
      question: "THE BLUE ON LIGHT ON THE APU START PB SWITCH INDICATES?",
      options: [
        "APU has started successfuly",
        "APU start sequence is in progress.",
        "APU is available .",
      ],
      answer: 1,
    },
    {
      id: 20,
      question: "The APU page is automatically removed from the lower ecam ?",
      options: [
        "25 seconds after apu is avail",
        "apu page has to be manually cleared",
        "10 seconds after N reaches 95 %, or when N is above 99.5 %,",
        "15 seconds after APU is avail.",
      ],
      answer: 2,
    },
    {
      id: 21,
      question: "The GREEN AVAIL LIGHT on the APU START PB SWITCH ?",
      options: [
        "when N is above 99.5 %",
        "2 s after N reaches 95 %",
        "both a & b",
      ],
      answer: 2,
    },
    {
      id: 22,
      question:
        "The APU BLEED AIR PRESSURE indications on the ecam sd page displays amber xx's when?",
      options: [
        "the ADIRS1 or the ADIRS2 is not available or selected OFF",
        "the data from the ECB are invalid or not transmitted.",
        "both a & b",
      ],
      answer: 2,
    },
    {
      id: 23,
      question: "The APU FLAP OPEN ind becomes an ADV when ?",
      options: [
        "there is no adv for flap open",
        "there is a master warning.",
        "If the flap is not fully closed 3 min after the MASTER sw has been turned OFF",
      ],
      answer: 2,
    },
    {
      id: 24,
      question: "When does the APU EGT ind on apu sd page become amber or red",
      options: [
        "Becomes amber when EGT ≥ EGT MAX -33 °C.",
        "Becomes red when EGT ≥ EGT MAX (automatic shutdown begins)",
        "both a & B",
      ],
      answer: 2,
    },
    {
      id: 25,
      question: "When is the LOW OIL LEVEL ADV displayed on the APU SD page?",
      options: [
        "Displayed if the ECB detects a low APU oil level.",
        "When the aircraft is on the ground.",
        "The APU is not running.",
        "All of the above",
      ],
      answer: 3,
    },
    {
      id: 26,
      question: "During APU start max EGT is a function of?",
      options: [
        "The max temp threshold of the combustion chamber",
        "the fuel air mixture",
        "It is a function of N during start, and a function of ambient temperature when the APU is running",
        "Option 4",
      ],
      answer: 2,
    },
    {
      id: 27,
      question: "For the APU EGT MAX is calculated by?",
      options: [
        "BMC 1",
        "IF BMC 1 FAILS BMC 2",
        "IF BOTH BMC FAIL APU SHUTS DOWN",
        "ECB",
      ],
      answer: 3,
    },
    {
      id: 28,
      question: "MAX APU EGT WITH APU BLEED RUNNING?",
      options: ["725 celcius", "650 celcius", "1080 celcius", "675 celcius"],
      answer: 3,
    },
    {
      id: 29,
      question:
        "APU bleed air supplies the pneumatic system if the APU speed is above _____?",
      options: ["80%", "85%", "92%", "95%"],
      answer: 3,
    },
    {
      id: 30,
      question:
        "What is the maximum altitude at which the APU may be started using the batteries only?",
      options: ["15, 000 ft", "20, 000 ft", "25, 000 ft", "39, 000 ft"],
      answer: 2,
    },
    {
      id: 31,
      question: "Maximum altitude for APU bleed operation (SINGLE PACK) is:",
      options: ["15, 000 ft", "18, 000 ft", "22, 500 ft", "22, 000 ft"],
      answer: 2,
    },
    {
      id: 32,
      question: "What is the maximum operating altitude of the APU?",
      options: ["25,000 feet", "30,000 feet", "35,000 feet", "39,000 feet"],
      answer: 3,
    },
    {
      id: 33,
      question: "what is the apu fuel consumpiton?",
      options: ["200kg/hour", "100kg/hr", "50kg/hr", "120kg/hr"],
      answer: 3,
    },
    {
      id: 34,
      question: "APU generator load can be used upto",
      options: ["39,000 feet", "20,000 feet", "25,000 feet", "31,000 feet"],
      answer: 0,
    },
    {
      id: 35,
      question:
        "What are the maximum altitudes up to which pneumatic and electrical power are used from APU",
      options: [
        "20000, 39800 feet respectively",
        "39000 feet for both loads",
        "25,000, 30,000 feet respectively",
        "25000 feet for both loads",
      ],
      answer: 0,
    },
    {
      id: 36,
      question: "For starting APU",
      options: [
        "Minimum batteries voltage required is 25.5 volts",
        "For starting APU, there are no minimum BAT voltage requirements.",
      ],
      answer: 0,
    },
    {
      id: 37,
      question: "APU BLEED Max altitude to assist engine start?",
      options: ["20 000 ft", "22 500 ft", "15 000 ft", "39 000 ft"],
      answer: 0,
    },
    {
      id: 38,
      question:
        "Max altitude for air conditioning and pressurization (dual pack operation) using APU Bleed ?",
      options: ["15 500 ft", "20 000 ft", "15 000 ft", "39 000 ft"],
      answer: 2,
    },
    {
      id: 39,
      question: "After three consecutive APU start attempts?",
      options: [
        "the flight crew must wait 30 min before a new start attempt.",
        "no limitation",
        "the flight crew must wait 60 min before a new start attempt.",
        "three consecutive start attempts are not allowed.",
      ],
      answer: 2,
    },
    {
      id: 40,
      question: "During refuel/defuel procedures ?",
      options: [
        "APU starts or shutdown are permitted",
        "If a fuel spill occurs, perform a normal APU shutdown",
        "If the APU failed to start or following an automatic APU shutdown, do not start the APU",
        "all of the above",
      ],
      answer: 3,
    },
    {
      id: 41,
      question: "Maximum N speed (Rotor speed) ?",
      options: ["100 %", "107 %", "99 %", "102 %"],
      answer: 1,
    },
    {
      id: 42,
      question: "Use of APU bleed air ?",
      options: [
        "On ground only",
        "In air only",
        "for wing anti-ice is not permitted",
      ],
      answer: 2,
    },
    {
      id: 43,
      question: "When does the APU BLEED VALVE close automatically?",
      options: [
        "if the APU bleed valve is open and if the leak concerns the left wing (except during engine start)",
        "if the APU bleed valve is open and if the leak concerns the pylon 1 (except during engine start)",
        "An APU leak signal causes the APU bleed valve to close automatically (except during engine start)",
        "engine 1 start",
        "A,B,C are correct",
      ],
      answer: 4,
    },
    {
      id: 44,
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
      id: 45,
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
      id: 46,
      question: "Below which altitude, can APU be started on batteries only?",
      options: ["41000 feet", "25000 feel", "22500 feet", "20000 feet"],
      answer: 1,
    },
    {
      id: 47,
      question: "Below what altitude can APU bleed can be utilised?",
      options: ["41000 feet", "25000 feet", "22500 feet", "None of. the. above"],
      answer: 2,
    },
    {
      id: 48,
      question: "Normally, how is fuel to the APU supplied?",
      options: [
        "Right side of the A320 Fuel sytem",
        "APU has an independent fuel pump which supplies fuel normally",
        "Left side of the A320 fuel system",
        "Only Center Tanks supply fuel to APU",
      ],
      answer: 2,
    },
    {
      id: 49,
      question: "When is APU fuel pump operational",
      options: [
        "When fuel pressure from pumps is high.",
        "When fuel pressure from pumps is low",
        "When Aircraft is in EmerElecConfig",
        "Both A and C",
      ],
      answer: 1,
    },
    {
      id: 50,
      question:
        "If Low oil level of APU is displayed on ECAM inflight, what action has to be performed?",
      options: [
        "Divert immediately",
        "Continue to destination",
        "APU Can be operated normally upto 10 hrs",
        "APU is unserviceable until Oil is replaced.",
      ],
      answer: 2,
    },
    {
      id: 51,
      question:
        "What is APU fuel consumption with packs on and APU generator running?",
      options: ["50 Kg/ hour", "200 Kg/hour", "130 Kg/hour", "175 Kg/Hour"],
      answer: 2,
    },
    {
      id: 52,
      question:
        "What happens when APU is started with Batteries in off position andGround power connected?",
      options: [
        "ECB shuts down APU as DC BAT BUS is not powered",
        "APU starts normally but APU Bleed is not available",
        "APU starts normally and both Electrical and Bleed supply is available",
        "None of the Above",
      ],
      answer: 0,
    },
    {
      id: 53,
      question: "When does APU perform an emergency shutddown?",
      options: [
        "When APU fire is detected on Ground",
        "When Flight Crew presses the Red APU Fire Pushbutton",
        "When batteries are in off position, when only batteries are supplying power",
        "Both A and B",
      ],
      answer: 3,
    },

    // AIRCON / PRES / VENT (Questions 54-106)
    {
      id: 54,
      question: "ZONE TEMP SELECTOR postion?",
      options: [
        "12 o'clock position: 24 °C (76 °F)",
        "COLD position: 18 °C (64 °F)",
        "HOT position: 30 °C (86 °F).",
        "all of the above.",
      ],
      answer: 3,
    },
    {
      id: 55,
      question: "When does pack flow automatically go to HIGH FLOW?",
      options: [
        "Hot and Humid conditions",
        "Passenger load higher than 161",
        "single pack operation, or with APU bleed supply",
        "cooling demand cannot be satisfied.",
      ],
      answer: 2,
    },
    {
      id: 56,
      question:
        "when does the pack flow go automatically from LO to NORMAL(100%)?",
      options: [
        "when apu bleed is supplying",
        "abnormally hot and humid conditions",
        "single pack operations.",
        "the pack flow can be automatically selected up to 100 % when the cooling demand cannot be satisfied.",
      ],
      answer: 3,
    },
    {
      id: 57,
      question: "When does the pilot manually select pack flow to HIGH?",
      options: [
        "pax load higher than 161",
        "Single pack operations",
        "For abnormally hot and humid conditions",
        "APU bleed supplying",
      ],
      answer: 2,
    },
    {
      id: 58,
      question: "When does the pilot manually select pack flow to LO?",
      options: [
        "If the number of occupants is below 141.",
        "For abnormally hot and humid conditions.",
        "If the APU is supplying, pack controllers select HI flow automatically",
        "Single pack operations",
      ],
      answer: 0,
    },
    {
      id: 59,
      question: "HOT AIR PB SW FAULT LIGHT ?",
      options: [
        "The FAULT light comes on amber, along with an associated ECAM caution.",
        "The fault circuit detects an overheat when the duct temperature reaches 88 °C (190 °F) once.",
        "The valve and trim air valves close automatically.",
        "All of the above",
      ],
      answer: 3,
    },
    {
      id: 60,
      question: "The HOT AIR PB SW FAULT light goes off when ?",
      options: [
        "The FAULT light goes off when the temperature drops below 70 °C (158 °F)",
        "As in (a) and, the flight crew selects OFF",
        "none of the above",
      ],
      answer: 1,
    },
    {
      id: 61,
      question:
        "On ground, reopening of the pack valves is delayed for 30 s?",
      options: [
        "To avoid EGT OVER LIMIT.",
        "To avoid a supplementary pack closure cycle during second engine start.",
        "To allow for thermal equalization",
        "To let the APU supply.",
      ],
      answer: 1,
    },
    {
      id: 62,
      question: "If the crossbleed valve is open at engine start ?",
      options: [
        "engine start is not possible",
        "bleed demand will not be met will lead to a HUNG START",
        "STARTER VALVE will not open",
        "both pack flow control valves close.",
      ],
      answer: 3,
    },
    {
      id: 63,
      question:
        "PACK PB SWITCH FAULT LIGHT and MASTER CAUTION comes on when ?",
      options: [
        "if the pack flow control valve position disagrees with the selected position.",
        "in the case of compressor outlet overheat",
        "pack outlet overheat.",
        "All of the above.",
      ],
      answer: 3,
    },
    {
      id: 64,
      question:
        "EMERGENCY RAM AIR PB SW ON, choose the correct statement?",
      options: [
        "If Δp < 1 PSI: The outflow valve opens to about 50 % when under automatic control. It does not automatically open when it is under manual control.",
        "Emergency ram airflow is directly supplied to the mixer unit",
        "DITCHING pb, on the CABIN PRESS panel has to be in the normal position.",
        "All of the above.",
      ],
      answer: 3,
    },
    {
      id: 65,
      question: "HOT AIR PRESSURE REGULATING VALVE, FAILED CLOSED ?",
      options: [
        "Optimized regulation is lost. Trim air valves are driven to the fully closed position.",
        ". Pack 1 controls the cockpit temperature to the selected value",
        "pack 2 controls the cabin temperature (FWD and AFT) to the mean value of the selected temperatures.",
        "All of the above",
      ],
      answer: 3,
    },
    {
      id: 66,
      question: "PACK OUTLET TEMP becomes amber when ?",
      options: [
        "if the temperature is higher than 70 °C",
        "if the temperature is higher than 85 °C",
        "if the temperature is higher than 80 °C",
        "if the temperature is higher than 90 °C",
      ],
      answer: 3,
    },
    {
      id: 67,
      question: "PACK COMPRESSOR OUTLET TEMP becomes amber when?",
      options: [
        "if the temperature is higher than 240 °C",
        "if the temperature is higher than 230 °C",
        "if the temperature is higher than 260 °C",
        "if the temperature is higher than 250 °C",
      ],
      answer: 1,
    },
    {
      id: 68,
      question:
        "USER INDICATION on ECAM BLEED PAGE becomes amber in flight ?",
      options: [
        "It appears in green. It becomes amber, in flight, when RAM AIR flap is not fully open, and both pack flow control valves are closed .",
        "It appears in green. It becomes amber, in flight, when RAM AIR flap is not fully open, and both pack flow control valves are open.",
        "It appears in green. It becomes amber, in flight, when RAM AIR flap is fully open, and both pack flow control valves are closed .",
        "It appears in green. It becomes amber, in flight, when RAM AIR flap is not fully open, and one pack flow control valve is closed .",
      ],
      answer: 0,
    },
    {
      id: 69,
      question: "Zone duct temperature on the COND SD PAGE ?",
      options: [
        "It appears in green, and becomes amber at 80 °C (176 °F).",
        "Zone duct temperature It appears in green, and becomes amber at 70 °C (176 °F).",
        "It appears in green, and becomes amber at 85 °C (176 °F).",
        "It appears in green, and becomes amber at 60 °C (176 °F).",
      ],
      answer: 0,
    },
    {
      id: 70,
      question:
        "Zone trim air valve position on the COND SD PAGE shows a failure ?",
      options: [
        "The arrow is green. It turns amber if the valve fails.",
        "The arrow is green. It is replaced by amber crosses (“XX”) if the valve fails.",
        "The arrow is green. It goes to the fully closed position if the valve fails",
        "The arrow is green. It turns amber if the temperature exceeds 100 degrees.",
      ],
      answer: 1,
    },
    {
      id: 71,
      question: "PACK indication on the CAB PRESS SD PAGE ?",
      options: [
        "Triangle normally green, PACK 1(2) indication normally white. Both become amber when pack flow control valve is closed with associated engine switched off.",
        "Triangle normally green, PACK 1(2) indication normally green. Both become amber when pack flow control valve is closed with associated engine running.",
        "Triangle normally white, PACK 1(2) indication normally white. Both become amber when pack flow control valve is open with associated engine running",
        "Triangle normally green, PACK 1(2) indication normally white. Both become amber when pack flow control valve is closed with associated engine running",
      ],
      answer: 3,
    },
    {
      id: 72,
      question: "If the aircraft does not climb after takeoff?",
      options: [
        "the abort mode prevents the cabin altitude from climbing. Cabin pressure is set back to the takeoff altitude +0.1 PSI.",
        "the abort mode prevents the cabin altitude from climbing. Cabin pressure is set back to the takeoff altitude +1 PSI.",
        "the aircraft maintains the cabin altitude, to the takeoff altitude + 500 ft",
        "the aircraft maintains the cabin altitude, to the takeoff altitude",
      ],
      answer: 0,
    },
    {
      id: 73,
      question: "The DITCHING pb on the CABIN PRESS control panel closes?",
      options: [
        "the outflow valve, the emergency ram air inlet, the avionics ventilation inlet and extract valves.",
        "the pack flow control valves, and the FWD cargo outlet isolation valve",
        "both a & B",
        "only the out flow valve and the pack flow control valve",
      ],
      answer: 2,
    },
    {
      id: 74,
      question: "CPC MANUAL change over in flight ?",
      options: [
        "Switching the MODE SEL pb to MAN, for at least 10 s, then returning it to AUTO will select the other system",
        "Switching the MODE SEL pb to MAN, for at least 15 s, then returning it to AUTO will select the other system",
        "Switching the MODE SEL pb to MAN, will change the active CPC",
        "Switching the BLOWER & EXTRACT to OVERIDE WILL change the active CPC",
      ],
      answer: 0,
    },
    {
      id: 75,
      question: "LDG ELEV MAN appears on the CAB PRESS SD PAGE?",
      options: [
        "in amber when the LDG ELEV selector is not in AUTO",
        "in green when the LDG ELEV selector is not in AUTO",
        "in green when the LDG ELEV selector is in AUTO",
        "in amber when the LDG ELEV selector is in AUTO",
      ],
      answer: 1,
    },
    {
      id: 76,
      question:
        "Which statement is correct regarding LDG ELEV AUTO/MAN indication?",
      options: [
        "Does not appear when the MODE SEL pushbutton switch is in MAN",
        "Does not appear when the MODE SEL pushbutton switch is in AUTO",
        "Both are correct if indications from SDAC are not valid",
      ],
      answer: 2,
    },
    {
      id: 77,
      question: "CABIN VERTICAL SPEED indication ?",
      options: [
        "It flashes when the cabin vertical speed reaches 1 750 ft/min",
        "stop flashing when returning below 1 650 ft/min.",
        "both a & b",
        "It flashes when the cabin vertical speed reaches 1000 ft/min and stop flashing when returning below 800 ft/min.",
      ],
      answer: 2,
    },
    {
      id: 78,
      question: "Delta P indication flashes green ?",
      options: [
        "It flashes if ΔP is greater than 1.5 PSI and stop flashing when returning at 1 PSI during flight phase 7",
        "It flashes if ΔP is greater than 1.5 PSI and stop flashing when returning at 1 PSI during flight phase 5",
        "It flashes if ΔP is greater than 1.5 PSI and stop flashing when returning at 1 PSI during flight phase 4",
        "It flashes if ΔP is greater than 1.5 PSI and stop flashing when returning at 1 PSI during flight phase 6",
      ],
      answer: 0,
    },
    {
      id: 79,
      question: "CABIN ALTITUDE PULSES/FLASHES green ?",
      options: [
        "It flashes when the cabin altitude reaches 8 000 ft and stop flashing when returning below 7 600 ft",
        "It flashes when the cabin altitude reaches 9 800 ft and stop flashing when returning below 9 600 ft",
        "It flashes when the cabin altitude reaches 8 800 ft and stop flashing when returning below 8 600 ft",
        "It flashes when the cabin altitude reaches 8 500 ft and stop flashing when returning below 8 000 ft",
      ],
      answer: 2,
    },
    {
      id: 80,
      question: "CABIN ALT IND turns red ?",
      options: [
        "Cabin altitude is at or above 9 550 ft",
        "Cabin altitude is at or above 9 000 ft",
        "Cabin altitude is at or above 10 000 ft",
      ],
      answer: 0,
    },
    {
      id: 81,
      question: "SAFETY VALVE IND turns amber when?",
      options: [
        "safet valve have failed",
        "safety valve position disagrees with commanded postition",
        "Either safety valve is open",
        "Both safety valves are open",
      ],
      answer: 2,
    },
    {
      id: 82,
      question: "OUTFLOW VALVE IND turns amber when?",
      options: [
        "The valve opens more than 95 % during flight.",
        "The valve opens more than 50 % during flight.",
        "The valve opens more than 85 % during flight.",
        "The valve opens more than 75 % during flight.",
      ],
      answer: 0,
    },
    {
      id: 83,
      question: "Delta pressure ind turns amber when?",
      options: [
        "ΔP is out of normal range (≤ -0.4 PSI or ≥ 8.5 PSI).",
        "ΔP is out of normal range (≤ -0.5 PSI or ≥ 8.6 PSI).",
        "ΔP is out of normal range (≤ -0.2 PSI or ≥ 8.3 PSI).",
      ],
      answer: 0,
    },
    {
      id: 84,
      question: "MAN LDG ELEV memo appears in green on the EWD ?",
      options: [
        "This memo appears in amber, if the LDG ELEV knob is not in the AUTO position",
        "This memo appears in green, if the LDG ELEV knob is not in the AUTO position",
        "This memo appears in white, if the LDG ELEV knob is not in the AUTO position",
      ],
      answer: 1,
    },
    {
      id: 85,
      question: "The measuring range of the skin temperature sensed is between ?",
      options: ["-40 °C and 80 °C", "-50 °C and 70 °C", "-50 °C and 80 °C", "-50 °C and 60 °C"],
      answer: 2,
    },
    {
      id: 86,
      question:
        "The measuring range of the skin temperature sensed is between -50 °C and 80 °C. Outside of this range, the AEVC sets the avionics ventilation configuration?",
      options: [
        "Closed configuration until the temperature is within the operation range again",
        "Open configuration until the temperature is within the operation range again",
        "to the intermediate configuration (partially open) until the temperature is within the operation range again",
        "Smoke cofiguration until the temperature is within the operation range again",
      ],
      answer: 2,
    },
    {
      id: 87,
      question:
        "The controller failure configuration in VENTILATION is the same as ?",
      options: [
        "the CLOSED configuration concerning the blower fan, the skin exchange inlet bypass valve and the skin air outlet valve.",
        "the OPEN configuration concerning the blower fan, the skin exchange inlet bypass valve and the skin air outlet valve.",
        "the INTERMEDIATE configuration concerning the blower fan, the skin exchange inlet bypass valve and the skin air outlet valve.",
        "the SMOKE configuration concerning the blower fan, the skin exchange inlet bypass valve and the skin air outlet valve.",
      ],
      answer: 3,
    },
    {
      id: 88,
      question: "How are the Batteries ventilated?",
      options: [
        "air conditioning air is circulated around the batteries.",
        "A venturi in the skin of the aircraft draws air from the space around the batteries and vents it overboard. The resulting airflow ventilates the batteries.",
        "A fan in the skin of the aircraft draws air from the space around the batteries and vents it overboard. The resulting airflow ventilates the batteries.",
      ],
      answer: 1,
    },
    {
      id: 89,
      question:
        "If BLOWER OR EXTRACT FAULT light due low pressure on the ground with engines stopped?",
      options: [
        "consider spurious",
        "due high ambient temperature",
        "external horn sounds",
      ],
      answer: 2,
    },
    {
      id: 90,
      question:
        "VENT message on CAB PRESS page normally appears in white. It becomes amber?",
      options: [
        "if there is a BLOWER FAULT",
        "if there is a EXTRACT FAULT,",
        "if there is AVNCS SYS FAULT",
        "all are correct",
      ],
      answer: 3,
    },
    {
      id: 91,
      question:
        "With passengers on board, it is not recommended to exceed?",
      options: [
        "30 min without air conditioning supply. The lack of fresh air supply will significantly reduce the cabin's air quality.",
        "15 min without air conditioning supply. The lack of fresh air supply will significantly reduce the cabin's air quality.",
        "25 min without air conditioning supply. The lack of fresh air supply will significantly reduce the cabin's air quality.",
        "20 min without air conditioning supply. The lack of fresh air supply will significantly reduce the cabin's air quality.",
      ],
      answer: 3,
    },
    {
      id: 92,
      question:
        "If the ditching pb is set to ON, with the low pressure ground cart connected and all doors closed?",
      options: [
        "a differential pressure will build up.",
        "ditching pb cannot be used on the ground",
        "outflow valve will automatically open",
      ],
      answer: 0,
    },
    {
      id: 93,
      question: "If both lanes of an ACSC fail?",
      options: [
        "related pack will be lost",
        "HOT AIR PRESSURE REGULATING VALVE will close",
        "all the trim air valves will close",
        "all of the above.",
      ],
      answer: 3,
    },
    {
      id: 94,
      question:
        "When is Avionics Ventilation supplied by air from Air conditioning?",
      options: [
        "Open Configuration",
        "Intermediate configuration",
        "Smoke Congifuration",
        "As in (C) or in case of Blower Fault or Extract Fault",
      ],
      answer: 3,
    },
    {
      id: 95,
      question: "Which zone is not pressurised in Aircraft?",
      options: [
        "Cabin",
        "Avionics bay",
        "Radome",
        "As in (C) and Cargo Compartment",
      ],
      answer: 2,
    },
    {
      id: 96,
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
      id: 97,
      question: "Which configuration is likely when Bleed Valve is Closed?",
      options: ["Hp valve closes", "Hp valve opens", "LP valve opens", "LP valve closes"],
      answer: 0,
    },
    {
      id: 98,
      question: "What occurs when both lanes of ACSC fail?",
      options: [
        "associated pack failure",
        "As in (A) and Hot Air Regulating Valve also Closes",
        "As in (B) and forward and aft trim air valves also close",
        "As in (B) and associated Trim Air Valves Close",
      ],
      answer: 3,
    },
    {
      id: 99,
      question: "In which situation is open configuration possible?",
      options: [
        "Only on ground.",
        "Both In flight and on ground.",
        "Only in flight",
        "In Smoke Configuration",
      ],
      answer: 0,
    },
    {
      id: 100,
      question:
        "what is the effect on pressurization, If skin air inlet valve opens in flight ?",
      options: [
        "Loss of pressurization",
        "Blower and extract needs to be placed in override to close valve, to preventO Depressurisation",
        "Pressurisation is not lost and no action is required",
        "Both a and b",
      ],
      answer: 2,
    },
    {
      id: 101,
      question: "When In manual mode, where does CPC get input from?",
      options: [
        "Via. Backup Section of Controller 1",
        "Via Backup Section of Controller 2",
        "Both. A and B",
        "None of the above",
      ],
      answer: 0,
    },
    {
      id: 102,
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
      id: 103,
      question:
        "what happens to bleed pressure, after setting take off power and duringclimb phase ?",
      options: [
        "bleed pressure never fluctuates",
        "Bleed pressure fluctuates between 75 psi and 100 psi",
        "It fluctuates between 38 psi and 56 psi",
        "It never fluctuates upto FL 100 and thereafter it may fluctuate",
      ],
      answer: 2,
    },
    {
      id: 104,
      question: "How is Safety valve controlled?",
      options: [
        "Using Man toggle switch",
        "Using Ditching PB",
        "Using Landing Elevation Knob",
        "Its never controlled manually and is always automatic",
      ],
      answer: 3,
    },
    {
      id: 105,
      question: "What is function of Safety valve?",
      options: [
        "It prevents excessive positive differential pressure",
        "It prevents excessive Negative differential pressure",
        "Its responsible for opening outflow Valve to relieve differential pressure",
        "both (A) and (B)",
      ],
      answer: 3,
    },
    {
      id: 106,
      question:
        "If both packs are off, can you provide conditioned air to aircraft?",
      options: [
        "Yes, using APU",
        "Yes, using Ram Air",
        "Yes, Using LP ground connection",
        "No, as Conditioned Air can only be provided using PACK air conditioning Kit",
      ],
      answer: 2,
    },
  ],
};
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - APU",
  questions: [
    {
      id: 1,
      question: "To start the APU the:",
      options: [
        "BAT 1 and 2 push buttons must be selected to ON",
        "BAT 1 and 2 push buttons do not need to be selected ON if external power is available.",
        "Both are correct.",
      ],
      answer: 0,
    },
    {
      id: 2,
      question:
        "The Electronic Control Box (ECB) is primarily a full authority digital electronic controller that performs the APU system logic for all modes of APU operation such as:",
      options: [
        "Sequence and monitoring of start.",
        "Speed and temperature monitoring.",
        "Monitoring of bleed air and shut down.",
        "All of the above.",
      ],
      answer: 3,
    },
    {
      id: 3,
      question:
        "When the APU Master Switch is released, a normal APU shutdown occurs:",
      options: [
        "Without delay in all cases.",
        "With a delay, in all cases.",
        "With a delay if the bleed air was in use.",
      ],
      answer: 2,
    },
    {
      id: 4,
      question:
        "When selected on, the APU START push button, will:",
      options: [
        "Connect the APU generator to the aircraft electrical system.",
        "Start the APU if the APU MASTER SW was previously selected ON.",
        "Open the air intake flap and supply fuel pressure.",
      ],
      answer: 1,
    },
    {
      id: 5,
      question:
        "The APU has an integral independent lubrication system for lubrication and cooling.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 6,
      question:
        "The ECB (Electronic Control Box) controls the fuel flow.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 7,
      question: "When the APU MASTER SW is selected ON:",
      options: [
        "The APU computer automatically completes a self-test, opens the air intake flap and supplies fuel pressure.",
        "The APU computer automatically starts the APU.",
        "Connects the APU generator to the aircraft electrical system.",
        "The APU door opens.",
      ],
      answer: 0,
    },
    {
      id: 8,
      question: "The APU MASTER SW FAULT light will illuminate:",
      options: [
        "When APU low oil pressure is detected.",
        "When an automatic shutdown of the APU occurs.",
        "For an APU overheat or APU fire.",
        "If the batteries are selected OFF while the APU is operating.",
      ],
      answer: 1,
    },
    {
      id: 9,
      question:
        "Will the APU bleed valve close automatically during climb? Will it reopen during descent?",
      options: ["Yes", "No"],
      answer: 1,
    },
    {
      id: 10,
      question:
        "The APU system page will appear on the ECAM:",
      options: [
        "When selected by the crew.",
        "Automatically whenever the APU is started and AC power is available.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 11,
      question:
        "If APU bleed was used, after a manual shut down sequence, the APU:",
      options: [
        "Stops immediately",
        "Keeps running for 60 to 120 s",
        "Keeps running for 2 minutes",
        "Keeps running for 30 seconds",
      ],
      answer: 1,
    },
    {
      id: 12,
      question:
        "With the engines off, if the AVAIL light is illuminated on both the APU START push button and the EXT PWR push button, what is the source of electrical power for the aircraft busses?",
      options: [
        "It is not possible to determine without checking the ECAM.",
        "The aircraft batteries",
        "The APU.",
        "External power",
      ],
      answer: 2,
    },
    {
      id: 13,
      question:
        "BAT 1 and 2 push buttons do not need to be selected ON if external power is available.",
      options: [
        "It is normally left in the lights out position.",
        "When selected OFF, the APU generator is de-energized.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 14,
      question:
        "What is the maximum altitude at which the APU may be started using the batteries only?",
      options: ["15, 000 ft", "20, 000 ft", "25, 000 ft", "39, 000 ft"],
      answer: 2,
    },
    {
      id: 15,
      question:
        "When the APU is running, the APU fuel pump:",
      options: [
        "Runs when tank pumps pressure is not sufficient.",
        "Runs all time",
        "Runs only in flight.",
        "Runs when the APU fuel pump is selected on.",
      ],
      answer: 0,
    },
    {
      id: 16,
      question:
        "With nobody in the cockpit, if you have an APU FIRE, which statement is correct?",
      options: [
        "On the ground, an APU EMER shut down will occur and the APU fire bottle will be discharged automatically.",
        "On the ground, you have to perform the ECAM actions to shut down the APU and extinguish the fire from the cockpit.",
        "On the ground an APU AUTO shut down will occur but you have to discharge the APU fire bottle manually.",
        "In the air, an APU EMER shut down will occur and the APU fire bottle will be discharged automatically.",
      ],
      answer: 0,
    },
    {
      id: 17,
      question:
        "The basic element of the APU is a single shaft gas turbine which delivers ______ power for driving the accessory gearbox (electrical generator) and produces bleed air (engine starting and pneumatic supply)",
      options: [
        "2nd stage compressor",
        "3rd stage turbine",
        "2nd stage turbine.",
        "Mechanical shaft",
      ],
      answer: 3,
    },
    {
      id: 18,
      question:
        "Fire on ground or in flight will cause the APU MASTER SW pushbutton FAULT light to come on.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 19,
      question:
        "With battery power, what would an APU fire test look like?",
      options: [
        "APU FIRE pushbutton illuminated.",
        "SQUIB and DISCH lights illuminated",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 20,
      question:
        "The starter engages if the air intake is closed and the MASTER SW and the START pushbuttons are ON.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 21,
      question:
        "A FLAP OPEN indication is displayed in amber when the APU air inlet flaps is fully open",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 22,
      question:
        "The APU may obtain power for starting from:",
      options: [
        "Ground services.",
        "Normal aircraft supply.",
        "The aircraft's batteries or in combination with the external power.",
        "All of the above.",
      ],
      answer: 3,
    },
    {
      id: 23,
      question:
        "The APU cannot be shut down from outside the aircraft.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 24,
      question:
        "What are some of the causes for an APU automatic shutdown?",
      options: [
        "Fire (on ground only), EGT overtemperature, No acceleration, low oil pressure.",
        "Fire (on ground only), EGT overtemperature, Underspeed, Overspeed, low oil pressure, high oil pressure",
        "Fire (on ground only), EGT overtemperature, Reverse flow, Overspeed, low oil pressure, high oil pressure",
        "Fire (on ground only), underspeed, overspeed, EGT overtemperature, Reverse flow, Low oil pressure, DC power loss.",
      ],
      answer: 3,
    },
    {
      id: 25,
      question:
        "Maximum altitude for APU bleed operation is:",
      options: ["15, 000 ft", "18, 000 ft", "20, 000 ft", "22, 000 ft"],
      answer: 2,
    },
    {
      id: 26,
      question:
        "Can the APU FIRE test be performed with the APU running?",
      options: ["Yes", "No"],
      answer: 0,
    },
    {
      id: 27,
      question: "The APU is supplied from the:",
      options: [
        "Left fuel feed line.",
        "Right fuel feed line.",
        "Left or right fuel line",
      ],
      answer: 0,
    },
    {
      id: 28,
      question:
        "Can the APU be used with wing anti-ice on?",
      options: [
        "No.",
        "Yes, but only for electrical power. The APU bleed valve should not be opened while using wing anti-ice.",
        "Yes, except during approach and go-around.",
        "Yes, but the altitude of utilization is limited to 15,000 ft.",
      ],
      answer: 1,
    },
    {
      id: 29,
      question:
        "On ground, can you start the APU using the aircraft batteries only?",
      options: ["Yes", "No"],
      answer: 0,
    },
    {
      id: 30,
      question:
        "When starting the APU, the FUEL LO PR indication appears amber when an APU fuel low pressure is detected.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 31,
      question:
        "The LOW OIL LEVEL advisory pulses in ____ if the APU oil quantity approaches its minimum value.",
      options: ["Amber", "White", "Red", "Green"],
      answer: 3,
    },
    {
      id: 32,
      question:
        "If an APU start is initiated on battery power only, is fire protection available?",
      options: ["Yes", "No"],
      answer: 0,
    },
    {
      id: 33,
      question:
        "With battery power only, what would an APU fire test look like?",
      options: [
        "APU FIRE pb illuminated and SQUIB + DISCH lights illuminated",
        "APU FIRE pb illuminated",
        "SQUIB + DISCH lights illuminated",
      ],
      answer: 0,
    },
    {
      id: 34,
      question:
        "What is the maximum operating altitude of the APU?",
      options: ["25,000 feet", "30,000 feet", "35,000 feet", "39,000 feet"],
      answer: 3,
    },
    {
      id: 35,
      question:
        "How many APU fire extinguisher bottles are installed?",
      options: ["One", "Two", "One AC operated and one DC operated"],
      answer: 0,
    },
    {
      id: 36,
      question: "When the APU MASTER SW is selected ON:",
      options: [
        "The APU computer automatically completes a self-test, opens the air intake flap and supplies fuel pressure.",
        "The APU computer automatically starts the APU.",
        "Connects the APU generator to the aircraft electrical system.",
        "The APU door opens.",
      ],
      answer: 0,
    },
    {
      id: 37,
      question:
        "when does the apu perform an emergency shutdown?",
      options: [
        "when apu fire is detected on ground",
        "when flight crew presses the red APU fire pushbutton",
        "When batteries are in off position, when only batteries are supplying power.",
        "both a and b",
      ],
      answer: 3,
    },
    {
      id: 38,
      question:
        "what happens when the apu is started with the batteries off and ground power connected?",
      options: [
        "apu starts normally",
        "apu starts with a delay",
        "ECB shuts down, dc bat buss and APU is not powered",
        "None of the above",
      ],
      answer: 2,
    },
    {
      id: 39,
      question: "what is the apu fuel consumpiton?",
      options: ["200kg/hour", "100kg/hr", "50kg/hr", "120kg/hr"],
      answer: 3,
    },
    {
      id: 40,
      question: "which computer monitors apu bleed?",
      options: ["BMC 1", "BMC 2", "ECB", "NONE OF THE ABOVE"],
      answer: 2,
    },
    {
      id: 41,
      question:
        "LOW OIL LEVEL IS DISPLAYED ON THE APU ECAM PAGE ?",
      options: [
        "Shut down the APU",
        "Check for over heat",
        "reduce bleed demand and keep using apu",
        "APU can be operated for 10 hrs from the time of the advisory",
      ],
      answer: 3,
    },
    {
      id: 42,
      question: "when apu bleed is used?",
      options: [
        "pack flow goes to low",
        "pack flow goes to high",
        "cannot be used",
        "none of the above",
      ],
      answer: 1,
    },
    {
      id: 43,
      question: "when does APU BLEED FAULT illuminate",
      options: [
        "engine bleed leak",
        "cross bleed closed",
        "apu bleed leak",
        "none of the above",
      ],
      answer: 2,
    },
    {
      id: 44,
      question: "when is the apu fuel pump operational?",
      options: [
        "when the apu is starting",
        "when there is a fuel leak",
        "when fuel pressure from the engine fuel pump is low",
        "both a and c",
      ],
      answer: 2,
    },
    {
      id: 45,
      question: "normally how is fuel supplied to the apu?",
      options: [
        "left side fuel line of the a320",
        "left wing tank",
        "center tank",
        "none of the above",
      ],
      answer: 0,
    },
    {
      id: 46,
      question:
        "Can the apu be started when the RAT is stalled?",
      options: [
        "NO it cant be started",
        "yes via TR1",
        "yes, via dc bat buss",
        "yes via static inverter bus",
      ],
      answer: 3,
    },
    {
      id: 47,
      question: "Maximum altitude for APU bleed operation is",
      options: ["20, 000 ft", "15, 000 ft", "18, 000 ft", "22, 000 ft"],
      answer: 0,
    },
    {
      id: 48,
      question: "APU generator load can be used upto",
      options: ["39,000 feet", "20,000 feet", "25,000 feet", "31,000 feet"],
      answer: 0,
    },
    {
      id: 49,
      question:
        "What is the maximum altitude at which the APU may be started using the batteries only?",
      options: ["25, 000 ft", "15, 000 ft", "20, 000 ft", "39, 000 ft"],
      answer: 0,
    },
    {
      id: 50,
      question:
        "The APU may be started up to what altitude?",
      options: [
        "The APU can be started at any altitude using normal aircraft electrical power",
        "The APU can be started up to 25,000 feet using only the aircraft batteries",
        "Both A & B are correct",
      ],
      answer: 2,
    },
    {
      id: 51,
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
      id: 52,
      question:
        "The basic element of the APU is a single shaft gas turbine which delivers power for driving the accessory gearbox (electrical generator) and produces bleed air (engine starting and pneumatic supply).",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 53,
      question:
        "The Electronic Control Box (ECB) is a computer that performs the APU system logic for all modes of APU operation such as",
      options: [
        "Sequence and monitoring of start",
        "Speed and temperature monitoring",
        "Monitoring of bleed air and shut down",
        "All of the above",
      ],
      answer: 3,
    },
    {
      id: 54,
      question: "For starting APU",
      options: [
        "Minimum batteries voltage required is 25.5 volts",
        "For starting APU, there are no minimum BAT voltage requirements.",
      ],
      answer: 0,
    },
    {
      id: 55,
      question:
        "You have to wait for 3 seconds after selecting Master Switch to ON and before selecting Start pb to ON for APU Start",
      options: [
        "True always weather you start APU with EXT PWR ON or OFF",
        "True only if EXT PWR OFF",
        "True only if EXT PWR ON.",
      ],
      answer: 0,
    },
    {
      id: 56,
      question: "What happens when APU master switch is selected ON?",
      options: [
        "All are correct",
        "APU ECB carries out the power up TEST & Air intake flap opens",
        "APU fuel pump operates if no fuel tank pump operating",
        "APU page appears if a/c supplied by ground power",
      ],
      answer: 0,
    },
    {
      id: 57,
      question: "When will the APU air intake flap open",
      options: [
        "After Master Switch is set to ON",
        "As in (a) and after pressing START pb switch to ON",
        "is correct only for APU battery start",
      ],
      answer: 0,
    },
    {
      id: 58,
      question:
        "When would the FLAP OPEN message become advisory",
      options: [
        "There is no advisory for 'Flap Open'",
        "If air intake flap is not open in 20 seconds after selected master switch on",
        "If air intake flap is not fully closed after 3 minutes after MASTER switch has been set to OFF",
        "If flaps is closed when APU is running",
      ],
      answer: 2,
    },
    {
      id: 59,
      question: "When APU START push button is selected on",
      options: [
        "It starts the APU if the APU MASTER SW was previously selected ON",
        "The Green AVAIL light comes on when N is above 99.5 % and Blue ON light goes off",
        "Both are correct.",
      ],
      answer: 2,
    },
  ],
};
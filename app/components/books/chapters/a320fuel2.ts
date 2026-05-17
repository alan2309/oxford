import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - FUEL - 02",
  questions: [
    {
      id: 1,
      question:
        "With the center tank pump mode SEL switch in AUTO; the center tank pump:",
      options: [
        "Run for two minutes at engine start",
        "Will not restart until slats are retracted in flight and 500 kg of fuel from inner tank is used.",
        "Continue to run until five minutes after the center tank is empty.",
        "All the above",
      ],
      answer: 3,
    },
    {
      id: 2,
      question:
        "With the center tank pump mode SEL switch in AUTO; the center tank pump will continue to run after two minutes of self-test after engine start if slats are extended with a delay.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      id: 3,
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
      id: 4,
      question:
        "What indication will you see on the overhead fuel panel if the center tank has more than 250 kilograms of fuel and the left wing tank has less than 5,000 Kgs.",
      options: [
        "Fuel imbalance.",
        "Mode select fault.",
        "Fuel – Auto feed fault.",
        "CTR TK- Pump FAULT",
      ],
      answer: 1,
    },
    {
      id: 5,
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
      id: 6,
      question:
        "As long as there is a fuel in center tank and if the fuel quantity in the inner tank drops below 5000kg, MODE SEL FAULT light will come if mode selector is at Auto.",
      options: [
        "True & it will cause an ECAM of FUEL AUTO FEED FAULT.",
        "False",
      ],
      answer: 0,
    },
    {
      id: 7,
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
      id: 8,
      question:
        "After engine start, center tank fuel pumps run for minutes regardless of slat position.",
      options: ["1 minute.", "2 minute.", "3 minute.", "5 minute."],
      answer: 1,
    },
    {
      id: 9,
      question:
        "Why do the center tank pups stop automatically when then slats are extended for takeoff?",
      options: [
        "To keep the center of gravity as low as possible.",
        "During takeoff, the center tank fuel is pumped to the rear to trim aircraft.",
        "To ensure that the engines are fed from the wing tanks for takeoff (feeding segregation)",
        "During takeoff, the center tank fuel is gravity fed only.",
      ],
      answer: 2,
    },
    {
      id: 10,
      question:
        "If any one centre tank booster pump fails, with fuel in centre tank, is it possible to feed both engines from one tank ?",
      options: [
        "No. it is not possible",
        "Yes, it is possible by opening the cross feed valve",
        "Yes, it is possible by switching the mode selector to manual",
        "No, it is not possible, since wing tank booster pumps are feeding immediately",
      ],
      answer: 1,
    },
    {
      id: 11,
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
      id: 12,
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
      id: 13,
      question: "ECAM of FUEL AUTO FEED FAULT will come:",
      options: [
        "If center tank pumps keep running even after slat extension",
        "If center tank pump keeps running even five minutes later when LO LVL in ctr. Tank.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 14,
      question:
        "The message OUTER TK FUEL XFRD appears in the MEMO. What does this mean?",
      options: [
        "It is a reminder to show that a transfer valve is open",
        "Fuel is transferring from the center tank to the inner tank.",
        "It is a reminder to open the outer tank transfer valve",
        "Fuel is transferring from the inner tank to the outer tank.",
      ],
      answer: 0,
    },
    {
      id: 15,
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
      id: 16,
      question:
        "After engine shutdown, what are your actions to close the fuel transfer valves?",
      options: [
        "You have to switch the inner tank pumps off.",
        "You have to call maintenance to close the valves.",
        "No action is required. The valves will close automatically during the next refuelling.",
      ],
      answer: 2,
    },
    {
      id: 17,
      question:
        "How the fuel is transferred from the outer to the inner tanks?",
      options: [
        "By setting the MODE SEL pushbutton to MAN.",
        "The transfer valve opens automatically by the low lever sensor in the center tanks",
        "By setting the MODE SEL PB to AUTO",
        "The transfer valve opens automatically by the low level sensor in the inner tank.",
      ],
      answer: 3,
    },
    {
      id: 18,
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
      id: 19,
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
      id: 20,
      question: "When do the transfer valves open ?",
      options: [
        "If any one inner cell reaches low level, the transfer valve on either side open.",
        "If both inner cell reaches low level, then only transfer valves open",
        "If any one inner cell reaches low level, the corresponding side both transfer valves open.",
        "If any one inner cell reaches low level, both sides, all transfer valves open.",
      ],
      answer: 3,
    },
    {
      id: 21,
      question:
        "Fuel transfer from the outer tank to the inner tank of the wing tanks occurs when the inner tank quantity decreases to:",
      options: ["250 Kgs.", "450 Kgs.", "750 Kgs.", "5000 Kgs."],
      answer: 2,
    },
    {
      id: 22,
      question:
        "Outer tank fuel is unusable if you get an ECAM of FUEL L{R} TRANSFER VALVE CLOSED.",
      options: ["True", "Fallse"],
      answer: 0,
    },
    {
      id: 23,
      question:
        "If both tank pumps have failed, you will have to apply Gravity Fuel Feeding procedure.",
      options: ["True", "Fallse"],
      answer: 0,
    },
    {
      id: 24,
      question: "In case of Gravity Fuel feeding QRH procedure, .",
      options: [
        "Avoid negative G factor",
        "There are flight altitude limitations while applying this procedure.",
        "Both of the above are correct",
      ],
      answer: 2,
    },
    {
      id: 25,
      question:
        "What precaution should you observe when you apply gravity fuel feeding?",
      options: [
        "Operate the aircraft below 15,000 feet",
        "Use center tank first.",
        "Avoid negative G factor.",
        "No precautions are necessary.",
      ],
      answer: 2,
    },
    {
      id: 26,
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
      id: 27,
      question: "How will you detect a fuel leak?",
      options: [
        "There will be an ECAM caution of FUEL LEAK along with Master Caution.",
        "It is a case of leak if the sum of FOB and Fuel Used is significantly less than FOB at engine start",
        "Both of the above are correct",
      ],
      answer: 1,
    },
    {
      id: 28,
      question:
        "If you get ECAM of FUEL F.USED / FOB DISAGREE, you will have to apply FUEL LEAK PROCEDURE.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 29,
      question: "If you get an ECAM FUEL L OUTER TK HI TEMP.",
      options: [
        "Apply ECAM procedure once you are out of critical phase of the flight.",
        "If ECAM does not disappear after two min, follow the procedure.",
        "This caution never comes.",
      ],
      answer: 1,
    },
    {
      id: 30,
      question: "The Fuel Used indication on ECAM is reset:",
      options: [
        "Manually by the pilot",
        "Automatically at engine start on the ground {MASTER Switch ON}.",
        "Automatically at electric power up of the aircraft..",
      ],
      answer: 1,
    },
    {
      id: 31,
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
      id: 32,
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
      id: 33,
      question:
        "FQI degradation is indicated as last two digits dashed amber for FOB as well as fuel Quantity in any tank.",
      options: ["True", "Faslse"],
      answer: 0,
    },
    {
      id: 34,
      question: "The fuel cross feed valve is controlled by 2 motors.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 35,
      question: "What is the minimum fuel quantity for takeoff?",
      options: ["1,000 kg", "1,200 kg.", "1,500 kg.", "2,000 kg."],
      answer: 2,
    },
    {
      id: 36,
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
      id: 37,
      question:
        "What are the uses of sequence valves in the fuel system ?",
      options: [
        "To control the booster pump operation",
        "To consume centre tank fuel first, then wing tank fuel",
        "To operate the transfer valves in the desired time",
        "To control fuel temperature within limit",
      ],
      answer: 1,
    },
    {
      id: 38,
      question:
        "What are the indications if any one of the booster pump fails in the inner cell ?",
      options: [
        "Respective Fault light with ECAM message",
        "As in (a) and fuel page appears in Lower ECAM",
        "Master Caution with single chime",
        "All the above are correct.",
      ],
      answer: 3,
    },
    {
      id: 39,
      question:
        "During electrical smoke configuration which booster pumps run ?",
      options: [
        "No. 1 pump in each tank",
        "As in (a) open the X feed Valve so that centre tank feeds both engines",
        "No. 1 pumps of each wing tank",
        "No. 1 pump of each wing tank run along with No.2 pump of centre tank.",
      ],
      answer: 2,
    },
    {
      id: 40,
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
      id: 41,
      question:
        "The AC powered auxiliary fuel boost pump for the APU operates whenever the APU is operating and no other pump is on. it has an alternate power source on the AC Static Inverter bus for battery-only starts.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 42,
      question:
        "In case of FUEL TK HI TEMP for any of the tank, the flight crew should wait 2 min while the fuel temperature measurement is updated. After 2 min, if the ECAM caution has not disappeared, then flight crew must apply the ECAM procedure..",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 43,
      question:
        "During cockpit preparation you observe that the Fuel on Board quantity indication is displayed in a partial amber box. What would this indicate?",
      options: [
        "Fuel quantity indication (FQI) for at least one fuel tank is in degraded mode.",
        "The available fuel in one of the tank is completely unusable",
        "Both {A} and {B} are correct",
      ],
      answer: 1,
    },
    {
      id: 44,
      question:
        "During cruise in the fuel ECAM page, fuel quantity indication is advisory. Mark the correct statement.",
      options: [
        "This implies that the difference between the fuel quantities in the wings is greater than 1500 kgs.",
        "As in (A) and the indications of the wing inner and outer tanks with highest fuel level pulses.",
        "As in (A) and the indication of the wing inner and outer tanks with the lowest fuel level pulses.",
        "This implies that the center tank fuel has reduced to the low level.",
      ],
      answer: 1,
    },
    {
      id: 45,
      question:
        "During cruise in the fuel ECAM page, fuel quantity indication is advisory. Mark the correct statement.",
      options: [
        "This implies that the difference between the fuel quantities in the wings is greater than 1500 kgs.",
        "As in (A) and the indications of the wing inner and outer tanks with highest fuel level pulses.",
        "As in (A) and the indication of the wing inner and outer tanks with the lowest fuel level pulses.",
        "This implies that the center tank fuel has reduced to the low level.",
      ],
      answer: 1,
    },
    {
      id: 46,
      question:
        "What type of the Fuel is commonly used for our aircraft operation?",
      options: ["Jet A", "Jet A - 1", "Jet B", "JP 4"],
      answer: 1,
    },
    {
      id: 47,
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
  ],
};
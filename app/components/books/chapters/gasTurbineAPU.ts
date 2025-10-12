import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "Gas Turbines - Auxiliary Power Units and Engine Starting",
  questions: [
    {
      "id": 1,
      "question": "Which of the following statements would be more correct with regard to an APU?",
      "options": [
        "APUs provide emergency hydraulics power for the brakes only",
        "APUs provide electrical, pneumatic and hydraulic power for ground use only",
        "APUs provide electrical, pneumatic and hydraulic power for air use only and can provide an amount of thrust",
        "APUs provide electrical, pneumatic and hydraulic power for ground and air use and can provide an amount of thrust"
      ],
      "answer": 3
    },
    {
      "id": 2,
      "question": "In the event of an APU fire on the ground it:",
      "options": [
        "will need to be shut down immediately",
        "will shut down immediately",
        "will auto shutdown and fire bottle automatically operate",
        "will need to be shut down immediately and the fire bottles will be required to be fired immediately"
      ],
      "answer": 2
    },
    {
      "id": 3,
      "question": "Which of the following would result in an automatic shutdown of an APU?\n1. Overspeed of compressor\n2. Over-temp of lubrication system\n3. Turbine over-temp\n4. Combustion chamber over-temp\n5. Compressor outlet pressure exceeded\n6. Low pressure of lubrication system",
      "options": [
        "1, 2, 3 and 6",
        "1, 2, 4 and 6",
        "2, 3, 5 and 6",
        "2, 3, 4 and 6"
      ],
      "answer": 0
    },
    {
      "id": 4,
      "question": "A Ram Air Turbine is used to provide:",
      "options": [
        "emergency hydraulic power for the flaps and slats only",
        "emergency hydraulic power for the undercarriage",
        "emergency hydraulic power for the elevator, rudder and ailerons along with possible emergency electrical power",
        "emergency hydraulic power for the brakes along with possible emergency electrical power"
      ],
      "answer": 2
    },
    {
      "id": 5,
      "question": "The power to start an APU comes from:",
      "options": [
        "ground power unit",
        "aircraft main DC battery",
        "aircraft main engine generator",
        "aircraft main AC battery"
      ],
      "answer": 1
    },
    {
      "id": 6,
      "question": "A typical APU can provide:",
      "options": [
        "air for air conditioning on the ground",
        "air for engine starting",
        "electrical power for ground or in-flight use",
        "all of the above"
      ],
      "answer": 3
    },
    {
      "id": 7,
      "question": "The advantage of an air starter system is that:",
      "options": [
        "it is safer in operation than other systems, and no fire risk",
        "it is light, simple and economical",
        "it provides a more rapid start",
        "it is totally self-contained and needs no external source of power"
      ],
      "answer": 1
    },
    {
      "id": 8,
      "question": "A 'Hung Start' is indicated by:",
      "options": [
        "high EGT - high fuel flow - low rpm",
        "low EGT - idle fuel flow - low rpm",
        "low EGT - high fuel flow - high rpm",
        "high EGT - idle fuel flow - low rpm"
      ],
      "answer": 3
    },
    {
      "id": 9,
      "question": "If a gas turbine engine fails to light up within the specified time:",
      "options": [
        "it must be motored over with the HP fuel cock shut",
        "the fuel system must be drained",
        "no further attempt to start may be made until the fuel has evaporated",
        "it must be motored over with the HP fuel cock shut and no igniters selected"
      ],
      "answer": 3
    },
    {
      "id": 10,
      "question": "A Relight is:",
      "options": [
        "the action of restarting a flamed out engine, usually while airborne",
        "what occurs when the engine drain valve is stuck open",
        "the initiation of the after-burning system",
        "what must be prevented after a 'wet start'"
      ],
      "answer": 0
    },
    {
      "id": 11,
      "question": "A 'Hung Start' occurs when:",
      "options": [
        "the engine accelerates but does not light up",
        "the engine stabilizes above self-sustaining speed",
        "the engine lights up but does not accelerate to self-sustaining speed",
        "there is a double igniter failure"
      ],
      "answer": 2
    },
    {
      "id": 12,
      "question": "After engine start, the engine igniters are normally deactivated by:",
      "options": [
        "an electric interlock system",
        "a speed switch",
        "the time switch",
        "centrifugal force"
      ],
      "answer": 1
    },
    {
      "id": 13,
      "question": "Failure of the engine to light up is shown by:",
      "options": [
        "the failure of the engine to turn and no TGT",
        "low rpm fuel flow indication, and no TGT",
        "TGT increasing but no rpm",
        "no rpm and no TGT"
      ],
      "answer": 1
    },
    {
      "id": 14,
      "question": "The term 'self sustaining speed' means that:",
      "options": [
        "the aircraft can roll forward with no further opening of the throttles",
        "the speed from which the engine can accelerate to full power within 5 seconds",
        "the engine will run independently of external help",
        "the speed from which the engine can accelerate to idle without the help of the starter motor"
      ],
      "answer": 3
    },
    {
      "id": 15,
      "question": "Before opening the high-pressure fuel shut off valve during the engine start:",
      "options": [
        "the compressor must be turning at the correct rpm in the right direction",
        "the Low Pressure compressor must be stationary",
        "the Low Pressure fuel cock must be shut",
        "the Low Pressure compressor must be rotating faster than the High Pressure"
      ],
      "answer": 0
    },
    {
      "id": 16,
      "question": "The air supply to operate an air starter usually comes from:",
      "options": [
        "an external installation",
        "storage bottles carried in the aircraft",
        "the auxiliary power unit",
        "a cross-bled start"
      ],
      "answer": 2
    },
    {
      "id": 17,
      "question": "The air supply for an air start system is:",
      "options": [
        "at a relatively low pressure, but high volume",
        "filtered to prevent damage to the starter motor",
        "preheated to avoid icing in the starter nozzle guide vanes",
        "at a high pressure but low volume"
      ],
      "answer": 0
    },
    {
      "id": 18,
      "question": "The starter motor is disengaged from the engine start system:",
      "options": [
        "as soon as the engine lights up",
        "just above self-sustaining speed",
        "at 26% HP rpm",
        "just below self-sustaining speed"
      ],
      "answer": 1
    },
    {
      "id": 19,
      "question": "In a twin spool engine self-sustaining speed is normally reached at:",
      "options": [
        "60% N2",
        "60% N1",
        "30% N2",
        "30% N1"
      ],
      "answer": 2
    },
    {
      "id": 20,
      "question": "In a twin spool engine the typical idle speeds are:",
      "options": [
        "60% N2 25% N1",
        "25% N2 60% N1",
        "40% N2 30% N1",
        "80% N2 45% N1"
      ],
      "answer": 0
    }
  ]
};
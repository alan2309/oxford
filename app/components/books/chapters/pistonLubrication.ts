import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "Piston Engines - Lubrication",
  questions: [
    {
      "id": 1,
      "question": "From the following list select the correct combination of statements.\n\nThe primary tasks of lubrication are to:\n1. reduce friction\n2. cool the engine\n3. clean the engine\n4. reduce component wear\n5. act as a hydraulic medium",
      "options": ["1 and 3.", "2 and 5.", "1 and 4.", "1 and 5."],
      "answer": 2
    },
    {
      "id": 2,
      "question": "In a piston engine dry sump oil system, the oil temperature and pressure are sensed:",
      "options": [
        "when the oil is leaving the sump.",
        "for the temperature when the oil is leaving the tank, and for the pressure when the oil is leaving the pressure pump.",
        "for the oil temperature when the oil is entering the tank and for the pressure when it is entering the pressure pump.",
        "at the same point."
      ],
      "answer": 1
    },
    {
      "id": 3,
      "question": "Oil returning to the oil tank is filtered by:",
      "options": ["the oil pressure filter.", "the oil tank filter.", "a micron size multi-bore filters assembly.", "the scavenge filter."],
      "answer": 3
    },
    {
      "id": 4,
      "question": "Engine oil pressure is:",
      "options": [
        "low at idle rpm and high at high rpm.",
        "controlled by the oil cooler.",
        "substantially decreased when the oil pressure relief valve opens.",
        "relatively unaffected by engine speed."
      ],
      "answer": 3
    },
    {
      "id": 5,
      "question": "The purpose of the crankcase breather is to:",
      "options": [
        "maintain the pressure in the oil tank at atmospheric pressure.",
        "ease the task of the oil scraper ring.",
        "prevent pressure building up inside the crankcase.",
        "prevent distortion of the crankcase."
      ],
      "answer": 2
    },
    {
      "id": 6,
      "question": "The most probable cause of small fluctuations in the oil pressure would be:",
      "options": ["lack of oil.", "the pressure relief valve sticking.", "air in the oil tank.", "the scavenge pump working at a greater capacity than the pressure pump."],
      "answer": 1
    },
    {
      "id": 7,
      "question": "The extra space in the oil tank is to cater for:",
      "options": [
        "frothing and aeration of the oil as it passes through the engine.",
        "fire protection.",
        "the accommodation of extra oil contents on long duration flights.",
        "anti-surge action."
      ],
      "answer": 0
    },
    {
      "id": 8,
      "question": "The scavenge pump system in a lubrication system has:",
      "options": [
        "a bypass in case of blockage.",
        "a smaller capacity than the pressure pump.",
        "a bifurcated tertiary drive system.",
        "a larger capacity than the pressure pump."
      ],
      "answer": 3
    },
    {
      "id": 9,
      "question": "In a “wet sump” oil system, the oil is contained in the:",
      "options": ["engine and tank.", "tank and oil cooler.", "sump and tank.", "engine and sump."],
      "answer": 3
    },
    {
      "id": 10,
      "question": "The oil contents of a piston engine (wet sump) are checked:",
      "options": [
        "when the engine is running at idle power.",
        "as soon as possible after the engine is stopped because the oil will drain away from the sump.",
        "after approximately 15 minutes once the engine has stopped.",
        "when the oil has reached a specific temperature."
      ],
      "answer": 2
    }
  ]
};

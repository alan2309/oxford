import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "Gas Turbines - Fuels",
  questions: [
    {
      "id": 1,
      "question": "Water in the fuel tanks is:",
      "options": [
        "added with FSI when refuelling",
        "is a consequence of atmospheric air entering the tanks through the engine",
        "is a consequence of atmospheric air entering the tanks through the vent system",
        "is a consequence of atmospheric air entering the tanks through the feeder box"
      ],
      "answer": 2
    },
    {
      "id": 2,
      "question": "Water in the fuel tank is removed:",
      "options": [
        "via a drain valve at the lowest point in the tank",
        "via a drain tank at the base of the engine",
        "via a scoop at the top of the tank",
        "every major servicing only"
      ],
      "answer": 0
    },
    {
      "id": 3,
      "question": "The flash point of AVTUR is:",
      "options": [
        "-38.7°C",
        "38.7°C",
        "-40°C",
        "-20°C"
      ],
      "answer": 1
    }
  ]
};
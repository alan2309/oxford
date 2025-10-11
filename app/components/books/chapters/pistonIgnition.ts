import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "Powerplant - Ignition System",
  questions: [
    {
      id: 1,
      question: "The spark appears at the plug electrodes when:",
      options: [
        "the contact breaker closes",
        "the contact breaker opens",
        "the contact breaker stays open",
        "the magneto switch is made"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "The ignition switch is fitted in:",
      options: [
        "the primary coil circuit",
        "the secondary coil circuit",
        "the engine starter motor circuit",
        "the battery circuit"
      ],
      answer: 0
    },
    {
      id: 3,
      question: "When the ignition switch is placed in the ‘ON’ position it:",
      options: [
        "isolates the breaker points",
        "makes the engine starter motor circuit",
        "‘Earths’ or ‘grounds’ the secondary winding",
        "breaks the primary to earth circuit"
      ],
      answer: 2
    },
    {
      id: 4,
      question: "The purpose of a condenser as fitted in a magneto is:",
      options: [
        "to assist in the rapid collapse of the primary current and prevent arcing at the contact breaker points",
        "to prevent the rapid collapse of the primary circuit and arcing at the points",
        "to reduce the high tension voltage of the secondary circuit",
        "to earth the primary circuit"
      ],
      answer: 0
    },
    {
      id: 5,
      question: "The engine is checked for dead cut at:",
      options: [
        "a power check",
        "slow running",
        "cruising rpm",
        "full throttle"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "The distributor directs:",
      options: [
        "voltage from the primary winding to the spark plug",
        "voltage from the secondary winding to the primary winding",
        "voltage from the magneto secondary winding to the spark plug",
        "voltage from the secondary winding to the contact breaker"
      ],
      answer: 2
    },
    {
      id: 7,
      question: "To obtain a spark across the gap between two electrodes:",
      options: [
        "the circuit must have high EMF",
        "the circuit must have high ohms",
        "the circuit must have high current flow",
        "the circuit must have an impulse union"
      ],
      answer: 0
    },
    {
      id: 8,
      question: "The purpose of an ignition switch is:",
      options: [
        "to control the primary circuit of the magneto",
        "to prevent condensation",
        "to connect the secondary coil to the distributor",
        "to connect the battery to the magneto"
      ],
      answer: 0
    },
    {
      id: 9,
      question: "In a complex engine as rpm increases the ignition timing may be:",
      options: [
        "advanced",
        "retarded",
        "not altered",
        "only retarded"
      ],
      answer: 0
    },
    {
      id: 10,
      question: "An impulse starter is a device to assist in starting an engine which uses:",
      options: [
        "a leaf spring",
        "a coil spring to increase temporarily the speed of rotation of the magneto",
        "a special starting battery which provides a sudden impulse of electricity to the plugs",
        "an explosive inserted in a special tube"
      ],
      answer: 1
    }
  ]
};

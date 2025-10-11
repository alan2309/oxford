import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "Powerplant - Mixture Control",
  questions: [
    {
      id: 1,
      question: "Weakening the mixture below the best fuel/air ratio will cause the engine power to:",
      options: [
        "decrease",
        "increase initially, but decrease below take off power",
        "increase",
        "be unaffected by altitude increase"
      ],
      answer: 0
    },
    {
      id: 2,
      question: "For maximum endurance the mixture control should be set to:",
      options: [
        "weak",
        "the chemically correct state",
        "between rich and weak",
        "rich"
      ],
      answer: 0
    },
    {
      id: 3,
      question: "An air/fuel ratio of 9:1 would be considered:",
      options: [
        "chemically correct",
        "extravagant",
        "rich",
        "weak"
      ],
      answer: 2
    },
    {
      id: 4,
      question: "Because of the reduction in the density of the atmosphere associated with an increase in altitude:",
      options: [
        "the mixture control must be moved towards the weak position",
        "the throttle must close progressively to maintain the best air/fuel ratio.",
        "the mixture must be progressively richened to compensate for the power loss",
        "the octane rating of the fuel must be increased"
      ],
      answer: 0
    },
    {
      id: 5,
      question: "A chemically correct mixture is:",
      options: [
        "15:1 (fuel : air)",
        "15:1 (air : fuel)",
        "13:1 (fuel : air)",
        "13:1 (air : fuel)"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "While weakening the mixture from the chemically correct mixture the EGT will .......... and the cylinder head temperature will .......... with a .......... in thermal efficiency.",
      options: [
        "increase  increase  decrease",
        "decrease  increase  decrease",
        "decrease  increase  increase",
        "increase  increase  increase"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Which of the following mixtures theoretically would produce the maximum rpm?",
      options: [
        "14:1 (air : fuel)",
        "14:1 (fuel : air)",
        "15:1 (fuel : air)",
        "15:1 (air : fuel)"
      ],
      answer: 3
    },
    {
      id: 8,
      question: "A weak mixture is used for which of the following?",
      options: [
        "Take-off",
        "Climbing",
        "Engine starting",
        "Cruising"
      ],
      answer: 3
    },
    {
      id: 9,
      question: "While using a weak mixture which of the following would be an incorrect statement?",
      options: [
        "The charge would be cooled due to a larger proportion of nitrogen in the cylinder",
        "The charge would burn slower due to a larger proportion of nitrogen in the cylinder",
        "The ignition may have to be advanced",
        "The ignition may have to be retarded"
      ],
      answer: 3
    },
    {
      id: 10,
      question: "While using a rich mixture which of the following would be a correct statement?",
      options: [
        "The charge would burn slower",
        "All of the fuel would be used during combustion",
        "All of the oxygen would be used during combustion",
        "Cylinder head temperature increases while richening further"
      ],
      answer: 2
    }
  ]
};

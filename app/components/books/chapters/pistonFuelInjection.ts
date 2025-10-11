import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "Piston Engines - Fuel Injection",
  questions: [
    {
      id: 1,
      question: "The engine driven fuel pump supplies:",
      options: [
        "the exact amount of fuel required for all running conditions.",
        "more fuel than is required by the engine; the excess fuel is recycled.",
        "the exact amount of fuel required for all running and starting conditions.",
        "more fuel than is required by the engine, the excess being used as priming fuel."
      ],
      answer: 1
    },
    {
      id: 2,
      question: "When an engine is fitted with a fuel injection system:",
      options: [
        "it does not require priming.",
        "a separate priming system must be fitted.",
        "a separate priming system is not required.",
        "priming fuel originates from the excess supplied from the engine driven pump."
      ],
      answer: 2
    },
    {
      id: 3,
      question: "The mixture control on an engine fitted with fuel injection is:",
      options: [
        "automatic.",
        "operated by a pneumatic plunger system.",
        "hydro-pneumatically operated.",
        "necessary."
      ],
      answer: 3
    },
    {
      id: 4,
      question: "In the intake of a fuel injected engine:",
      options: [
        "there will be a throttle valve but no Venturi.",
        "neither a throttle valve nor a Venturi is required.",
        "there will be a Venturi but no throttle valve.",
        "both a throttle valve and a Venturi are required."
      ],
      answer: 0
    },
    {
      id: 5,
      question: "The discharge nozzle injects fuel:",
      options: [
        "continuously into the inlet manifold as close to the inlet valve as possible.",
        "into the inlet manifold when the inlet valve opens.",
        "into the combustion chamber during the compression stroke.",
        "continuously into the combustion chamber during the induction stroke."
      ],
      answer: 0
    },
    {
      id: 6,
      question: "The Fuel Control Unit meters fuel to the discharge nozzles in proportion to:",
      options: [
        "the position of the throttle valve only.",
        "the position of the mixture control lever only.",
        "the positions of both the throttle lever and the mixture control lever.",
        "the number of strokes applied to the priming pump."
      ],
      answer: 2
    },
    {
      id: 7,
      question: "The discharge nozzles of a fuel injected engine are matched to:",
      options: [
        "supply exactly the same amounts of fuel as each other.",
        "the type of engine they are fitted to.",
        "the octane rating of the fuel supply.",
        "the engine they are fitted to and to the nozzles on the other cylinders."
      ],
      answer: 3
    },
    {
      id: 8,
      question: "A fuel injected engine can be primed by:",
      options: [
        "a manual priming pump which delivers fuel to the discharge nozzles.",
        "an electric fuel pump delivering fuel to the discharge nozzles.",
        "the excess fuel delivered by the engine driven fuel pump.",
        "pumping the throttle lever while turning the engine over on the starter motor."
      ],
      answer: 1
    },
    {
      id: 9,
      question: "The fuel manifold valve:",
      options: [
        "meters the amount of fuel delivered to the engine in proportion to the amount of air being delivered to the engine.",
        "distributes fuel to each cylinder in the correct firing order.",
        "distributes fuel continuously to all of the cylinders continuously.",
        "is kept entirely separate from the priming system."
      ],
      answer: 2
    },
    {
      id: 10,
      question: "An engine which is fitted with fuel injection:",
      options: [
        "will never encounter hydraulicing.",
        "will not suffer from refrigeration icing.",
        "cannot be started by swinging the propeller.",
        "does not require priming."
      ],
      answer: 1
    },
    {
      id: 11,
      question: "The Common Rail:",
      options: [
        "is, in effect, a reservoir of high pressure fuel.",
        "is, in effect, a reservoir of low pressure fuel.",
        "is a device common to both the fuel and lubrication systems.",
        "is a device common to both the ignition and lubrication systems."
      ],
      answer: 0
    }
  ]
}

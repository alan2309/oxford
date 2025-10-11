import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "Propellers and Gyroscopic Effects",
  questions: [
    {
      id: 1,
      question: "As a result of gyroscopic precession, it can be said that:",
      options: [
        "any pitching around the longitudinal axis results in a yawing moment.",
        "any yawing around the normal axis results in a pitching moment.",
        "any pitching around the lateral axis results in a rolling moment.",
        "any rolling around the longitudinal axis results in a pitching moment."
      ],
      answer: 1
    },
    {
      id: 2,
      question: "A propeller rotating clockwise as seen from the rear, creates a spiralling slipstream that tends to rotate the aeroplane to the:",
      options: [
        "right around the normal axis, and to the left around the longitudinal axis.",
        "right around the normal axis, and to the right around the longitudinal axis.",
        "left around the normal axis, and to the left around the longitudinal axis.",
        "left around the normal axis, and to the right around the longitudinal axis."
      ],
      answer: 3
    },
    {
      id: 3,
      question: "The reason for variations in geometric pitch (twisting) along a propeller blade is that it:",
      options: [
        "prevents the portion of the blade near the hub from stalling during cruising flight.",
        "permits a relatively constant angle of attack along its length when in cruising flight.",
        "permits a relatively constant angle of incidence along its length when in cruising flight.",
        "minimizes the gyroscopic effect."
      ],
      answer: 1
    },
    {
      id: 4,
      question: "The geometric pitch of a propeller is:",
      options: [
        "the distance it would move forward in one revolution if there were no slip.",
        "the angle the propeller shaft makes to the plane of rotation.",
        "the distance the propeller actually moves forward in one revolution.",
        "the angle the propeller chord makes to the relative airflow."
      ],
      answer: 0
    },
    {
      id: 5,
      question: "Propeller ‘slip’ is:",
      options: [
        "the airstream in the wake of the propeller.",
        "the amount by which the distance covered in one revolution falls short of the geometric pitch.",
        "the increase in RPM which occurs during take-off.",
        "the change of blade angle from root to tip."
      ],
      answer: 1
    },
    {
      id: 6,
      question: "The distance a propeller actually advances in one revolution is:",
      options: [
        "twisting.",
        "effective pitch.",
        "geometric pitch.",
        "blade pitch."
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Blade angle of a propeller is defined as the angle between the:",
      options: [
        "angle of attack and chord line.",
        "angle of attack and line of thrust.",
        "chord line and plane of rotation.",
        "thrust line and propeller torque."
      ],
      answer: 2
    },
    {
      id: 8,
      question: "Propeller efficiency is the:",
      options: [
        "actual distance a propeller advances in one revolution.",
        "ratio of thrust horsepower to shaft horsepower.",
        "ratio of geometric pitch to effective pitch.",
        "ratio of TAS to RPM."
      ],
      answer: 1
    },
    {
      id: 9,
      question: "A fixed-pitch propeller is designed for best efficiency only at a given combination of:",
      options: [
        "airspeed and RPM.",
        "airspeed and altitude.",
        "altitude and RPM.",
        "torque and blade angle."
      ],
      answer: 0
    },
    {
      id: 10,
      question: "Which statement is true regarding propeller efficiency? Propeller efficiency is the:",
      options: [
        "difference between the geometric pitch of the propeller and its effective pitch.",
        "actual distance a propeller advances in one revolution.",
        "ratio of thrust horsepower to shaft horsepower.",
        "ratio between the RPM and number of blade elements."
      ],
      answer: 2
    },
    {
      id: 11,
      question: "Which statement best describes the operating principle of a constant speed propeller?",
      options: [
        "As throttle setting is changed by the pilot, the prop governor causes pitch angle of the propeller blades to remain unchanged.",
        "The propeller control regulates the engine RPM and in turn the propeller RPM.",
        "A high blade angle, or increased pitch, reduces the propeller drag and allows more engine power for takeoffs.",
        "As the propeller control setting is changed by the pilot, the RPM of the engines remains constant as the pitch angle of the propeller changes."
      ],
      answer: 1
    },
    {
      id: 12,
      question: "When does asymmetric blade effect cause the aeroplane to yaw to the left?",
      options: [
        "When at high angles of attack.",
        "When at high airspeeds.",
        "When at low angles of attack.",
        "In the cruise at low altitude."
      ],
      answer: 0
    },
    {
      id: 13,
      question: "The left turning tendency of an aeroplane caused by asymmetric blade effect is the result of the:",
      options: [
        "gyroscopic forces applied to the rotating propeller blades acting 90° in advance of the point the force was applied.",
        "clockwise rotation of the engine and the propeller turning the aeroplane counter-clockwise.",
        "propeller blade descending on the right, producing more thrust than the ascending blade on the left.",
        "the rotation of the slipstream striking the tail on the left."
      ],
      answer: 2
    },
    {
      id: 14,
      question: "With regard to gyroscopic precession, when a force is applied at a point on the rim of a spinning disc, the resultant force acts in which direction and at what point?",
      options: [
        "In the same direction as the applied force, 90° ahead in the plane of rotation.",
        "In the opposite direction of the applied force, 90° ahead in the plane of rotation.",
        "In the opposite direction of the applied force, at the point of the applied force.",
        "In the same direction as the applied force, 90° ahead of the plane of rotation when the propeller rotates clockwise, 90° retarded when the propeller rotates counter-clockwise."
      ],
      answer: 0
    },
    {
      id: 15,
      question: "The angle of attack of a fixed pitch propeller:",
      options: [
        "depends on forward speed only.",
        "depends on forward speed and engine rotational speed.",
        "depends on engine rotational speed only.",
        "is constant for a fixed pitch propeller."
      ],
      answer: 1
    },
    {
      id: 16,
      question: "Counter-rotating propellers are:",
      options: [
        "propellers which rotate counter clockwise.",
        "propellers which are geared to rotate in the opposite direction to the engine.",
        "two propellers driven by separate engines, rotating in opposite directions.",
        "two propellers driven by the same engine, rotating in opposite directions."
      ],
      answer: 2
    },
    {
      id: 17,
      question: "If engine RPM is to remain constant on an engine fitted with a variable pitch propeller, an increase in engine power requires:",
      options: [
        "a decrease in blade angle.",
        "a constant angle of attack to be maintained to stop the engine from overspeeding.",
        "an increase in blade angle.",
        "the prop control lever to be advanced."
      ],
      answer: 2
    }
  ]
};

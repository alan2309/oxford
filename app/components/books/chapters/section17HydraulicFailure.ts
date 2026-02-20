// section17HydraulicFailure.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 17: Hydraulic Failure & Reconfiguration Logic",
    questions: [
        { id: 385, question: "If Green hydraulic system fails in flight:\nWhich are lost?\n1. Normal brakes\n2. Nose wheel steering\n3. Landing gear normal extension\n4. PTU", options: ["1,2", "1,2,3", "2 only", "All"], answer: 1 },
        { id: 386, question: "With Green failure:\nAlternate braking is powered by:", options: ["Blue", "Yellow", "RAT", "Accumulator only"], answer: 1 },
        { id: 387, question: "With Green failure:\nLanding gear extension is:", options: ["Normal", "Via PTU", "Via gravity extension", "Via Blue"], answer: 2 },
        { id: 388, question: "Will PTU activate if Green pressure lost and Yellow normal?", options: ["Yes", "No", "Only on ground", "Only with parking brake"], answer: 0 },
        { id: 389, question: "If Yellow hydraulic system fails:\nWhich system still powers landing gear?", options: ["Blue", "Green", "PTU", "RAT"], answer: 1 },
        { id: 390, question: "If Yellow fails:\nAlternate braking available?", options: ["Yes", "No", "Via Blue", "Via accumulator only"], answer: 1 },
        { id: 391, question: "Brake accumulator pressure with Yellow failure:", options: ["Normal", "Not replenished", "Powered by Green", "Powered by PTU"], answer: 1 },
        { id: 392, question: "If Blue system fails:\nWhich remains available?", options: ["Normal brakes", "Landing gear", "Full flight controls redundancy", "RAT"], answer: 2 },
        { id: 393, question: "If Blue fails and dual engine failure occurs:", options: ["No hydraulics", "Green powers flight controls", "RAT cannot supply", "Direct mechanical only"], answer: 3 },
        { id: 394, question: "If both Green and Yellow systems fail:\nLanding gear extension is:", options: ["Normal", "Via Blue", "Via gravity", "Impossible"], answer: 2 },
        { id: 395, question: "With Green + Yellow failure:\nNormal brakes available?", options: ["Yes", "No", "Via Blue", "Via accumulator only"], answer: 3 },
        { id: 396, question: "With Green + Yellow failure:\nFlight control availability:", options: ["Fully normal", "Reduced redundancy but flyable", "Direct Law only", "Mechanical backup only"], answer: 1 },
        { id: 397, question: "If Yellow and Blue fail:\nRemaining system:", options: ["None", "Green only", "PTU", "RAT"], answer: 1 },
        { id: 398, question: "With Yellow + Blue failure:\nAlternate brakes available?", options: ["Yes", "No", "Via Green", "Via accumulator"], answer: 1 },
        { id: 399, question: "Total hydraulic failure results in:", options: ["Normal Law", "Direct Law", "Mechanical backup", "Aircraft uncontrollable"], answer: 2 },
        { id: 400, question: "Mechanical backup provides control of:", options: ["Elevator", "Aileron", "Rudder and THS", "Spoilers"], answer: 2 },
        { id: 401, question: "PTU transfers:", options: ["Hydraulic fluid", "Mechanical power", "Electrical power", "Bleed air"], answer: 1 },
        { id: 402, question: "PTU does NOT connect:", options: ["Green & Yellow", "Yellow & Green", "Blue & Green", "Green & Yellow"], answer: 2 },
        { id: 403, question: "PTU activates when pressure difference exceeds:", options: ["200 psi", "300 psi", "500 psi", "1000 psi"], answer: 2 },
        { id: 404, question: "PTU is inhibited during:\n1. Cargo door operation\n2. Single engine with parking brake set\n3. Engine start\n4. Flight", options: ["1 and 2", "3 only", "4 only", "All"], answer: 0 },
        { id: 405, question: "If Green fails:\nBraking mode becomes:", options: ["Normal", "Alternate", "Accumulator only", "None"], answer: 1 },
        { id: 406, question: "If Yellow also fails after Green:\nBraking becomes:", options: ["Normal", "Alternate", "Accumulator only", "None"], answer: 2 },
        { id: 407, question: "Dual engine flameout at cruise results in:\n1. Green lost\n2. Yellow lost\n3. Blue powered by RAT\n4. Direct Law", options: ["All", "1 only", "3 only", "1 and 2"], answer: 0 },
        { id: 408, question: "Why is Blue system electrically powered?", options: ["Weight saving", "Ensure hydraulic availability during dual engine failure", "Structural balance", "Simplicity"], answer: 1 }
    ]
};
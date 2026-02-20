import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 1: General / Aircraft Architecture",
    questions: [
        { id: 1, question: "The A320 flight control system is primarily:", options: ["Hydromechanical with electrical backup", "Fully mechanical with servo tabs", "Digital fly-by-wire with flight control computers", "Direct hydraulic without computers"], answer: 2 },
        { id: 2, question: "The A320 has how many independent hydraulic systems?", options: ["2", "3", "4", "1"], answer: 1 },
        { id: 3, question: "The three hydraulic systems operate at a nominal pressure of:", options: ["2500 psi", "3000 psi", "3500 psi", "4000 psi"], answer: 1 },
        { id: 4, question: "The normal electrical system frequency on AC buses is:", options: ["115V / 50 Hz", "115V / 400 Hz", "230V / 400 Hz", "28V DC"], answer: 1 },
        { id: 5, question: "The A320 primary structure is mainly constructed of:", options: ["Titanium", "Composite only", "Aluminum alloy with composite structures", "Stainless steel"], answer: 2 },
        { id: 6, question: "The aircraft maximum operating altitude (certified ceiling) is:", options: ["FL370", "FL390", "FL410", "FL450"], answer: 1 },
        { id: 7, question: "The A320 has how many main fuel tanks (excluding trim tank)?", options: ["2", "3", "4", "5"], answer: 1 },
        { id: 8, question: "In normal operation, engines are fed from:", options: ["Center tank only", "Respective wing tanks", "Both wing tanks simultaneously", "Any tank through crossfeed"], answer: 1 },
        { id: 9, question: "The Blue hydraulic system is powered in normal flight by:", options: ["Engine 1", "Engine 2", "Electric pump", "PTU"], answer: 2 },
        { id: 10, question: "Which hydraulic system is connected to the RAT?", options: ["Green", "Yellow", "Blue", "All three"], answer: 2 },
        { id: 11, question: "The A320 flight control computers include:\n1. ELAC\n2. SEC\n3. FAC\n4. FMGC", options: ["1,2,3", "1,2,4", "1,3,4", "All four"], answer: 0 },
        { id: 12, question: "How many ELACs are installed?", options: ["1", "2", "3", "4"], answer: 1 },
        { id: 13, question: "Normal law pitch protection includes:\n1. Load factor limitation\n2. Pitch attitude protection\n3. High AoA protection\n4. Bank angle protection", options: ["1,2,3", "1,3", "1,2,3,4", "2,3,4"], answer: 2 },
        { id: 14, question: "Maximum bank angle in Normal Law without pilot input is limited to:", options: ["45°", "67°", "33°", "25°"], answer: 2 },
        { id: 15, question: "With full sidestick deflection in Normal Law, maximum bank angle achievable is:", options: ["45°", "60°", "67°", "75°"], answer: 2 },
        { id: 16, question: "The PTU operates when the pressure difference between Green and Yellow systems exceeds approximately:", options: ["100 psi", "300 psi", "500 psi", "1000 psi"], answer: 2 },
        { id: 17, question: "The A320 has how many ADRs?", options: ["1", "2", "3", "4"], answer: 2 },
        { id: 18, question: "If one ADR fails, the system:", options: ["Reverts to Direct Law", "Uses remaining ADRs", "Loses autopilot", "Shuts down FMGC"], answer: 1 },
        { id: 19, question: "The static inverter supplies:", options: ["AC BUS 1", "AC ESS BUS", "AC ESS BUS during emergency from batteries", "DC BUS 2"], answer: 2 },
        { id: 20, question: "In case of total AC power loss in flight, which deploys automatically?", options: ["APU", "GPU", "RAT", "Batteries only"], answer: 2 }
    ]
};
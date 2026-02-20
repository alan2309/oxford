// section19ScenarioBasedGrilling.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Part 1: Scenario-Based Airline Tech Grilling",
    questions: [
        { id: 439, question: "Engine 1 failure at V1 (Takeoff continues)\nAt liftoff after Engine 1 failure, hydraulic impact is:", options: ["Green lost", "Yellow lost", "Blue lost", "No hydraulic impact"], answer: 0 },
        { id: 440, question: "With Engine 1 failure:\nLanding gear extension capability is:", options: ["Normal", "Via Yellow", "Via Blue", "Gravity only"], answer: 3 },
        { id: 441, question: "Braking after landing will be:", options: ["Normal braking", "Alternate braking", "Accumulator only", "No brakes"], answer: 1 },
        { id: 442, question: "PTU in this case will:", options: ["Remain off", "Activate automatically", "Deploy RAT", "Shut down Yellow"], answer: 1 },
        { id: 443, question: "Dual engine flameout at FL350\nFirst automatic action:", options: ["APU start", "RAT deploy", "Direct Law", "Cabin depressurization"], answer: 1 },
        { id: 444, question: "Electrical configuration becomes:", options: ["Normal", "Single generator", "Emergency electrical", "Battery only"], answer: 2 },
        { id: 445, question: "Flight control law becomes:", options: ["Normal", "Alternate", "Direct", "Mechanical"], answer: 2 },
        { id: 446, question: "Autopilot availability:", options: ["Available", "Lost", "Limited", "Only AP1"], answer: 1 },
        { id: 447, question: "Both ADRs 1 and 2 fail\nFlight control law reverts to:", options: ["Normal", "Alternate", "Direct", "Mechanical"], answer: 1 },
        { id: 448, question: "Protections available:", options: ["Full protections", "No protections", "Low speed stability only", "Alpha floor"], answer: 2 },
        { id: 449, question: "Green + Yellow hydraulic failure\nBraking available:", options: ["Normal", "Alternate", "Accumulator only", "None"], answer: 2 },
        { id: 450, question: "Landing gear extension:", options: ["Normal", "PTU powered", "Blue powered", "Gravity"], answer: 3 },
        { id: 451, question: "Engine fire after takeoff\nPressing ENG FIRE pushbutton does NOT:", options: ["Close fuel valve", "Close bleed valve", "Shut hydraulic pump", "Shut electrical generator"], answer: 2 }
    ]
};
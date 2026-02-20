// section7IceRain.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 7: Ice & Rain Protection",
    questions: [
        { id: 136, question: "Engine anti-ice uses:", options: ["Electrical heating", "Bleed air", "Hydraulic fluid", "Fuel heating"], answer: 1 },
        { id: 137, question: "Wing anti-ice protects:", options: ["Entire wing", "Leading edge slats only", "Trailing edge", "Ailerons"], answer: 1 },
        { id: 138, question: "Engine anti-ice should be used when:", options: ["Visible moisture + TAT ≤ 10°C", "OAT below 0°C only", "Rain only", "Icing visually seen"], answer: 0 },
        { id: 139, question: "Window heat is powered by:", options: ["DC bus", "AC bus", "Hydraulic pressure", "Bleed air"], answer: 1 },
        { id: 140, question: "Windshield heating failure results in:", options: ["Immediate structural failure", "Possible icing/visibility issue", "Hydraulic loss", "Engine rollback"], answer: 1 }
    ]
};
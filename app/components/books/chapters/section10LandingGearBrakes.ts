// section10LandingGearBrakes.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 10: Landing Gear & Brakes",
    questions: [
        { id: 197, question: "The A320 landing gear consists of:", options: ["Two main gears + tailwheel", "Two main gears + nose gear", "Three main gears", "Four bogies"], answer: 1 },
        { id: 198, question: "Normal landing gear extension and retraction is powered by:", options: ["Yellow hydraulic system", "Blue hydraulic system", "Green hydraulic system", "PTU"], answer: 2 },
        { id: 199, question: "If Green hydraulic system fails, landing gear extension:", options: ["Not possible", "Via Blue system", "Via gravity extension", "Via PTU"], answer: 2 },
        { id: 200, question: "Emergency gear extension is achieved by:", options: ["Yellow electric pump", "RAT", "Free-fall gravity + aerodynamic forces", "Manual crank"], answer: 2 },
        { id: 201, question: "Landing gear retraction is inhibited when:\n1. Weight on wheels\n2. Thrust levers at idle\n3. Hydraulic pressure low\n4. Door not closed", options: ["1 only", "1 and 3", "4 only", "All"], answer: 0 },
        { id: 202, question: "Normal braking is powered by:", options: ["Yellow hydraulic system", "Green hydraulic system", "Blue hydraulic system", "Accumulator only"], answer: 1 },
        { id: 203, question: "Alternate braking is powered by:", options: ["Green", "Yellow", "Blue", "RAT"], answer: 1 },
        { id: 204, question: "Brake accumulator is charged by:", options: ["Green system", "Blue system", "Yellow system", "PTU"], answer: 2 },
        { id: 205, question: "In case of total hydraulic failure, braking available is:", options: ["None", "Normal braking", "Accumulator braking only", "Parking brake only"], answer: 2 },
        { id: 206, question: "Autobrake deceleration rates approximately are:\nLO =", options: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"], answer: 1 },
        { id: 207, question: "MED autobrake deceleration is approximately:", options: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"], answer: 1 },
        { id: 208, question: "MAX autobrake provides:", options: ["Same as MED", "Highest available braking", "Moderate braking", "Engine reverse only"], answer: 1 },
        { id: 209, question: "RTO mode is active:", options: ["Below 72 kt only", "Above 72 kt only", "Any speed", "After rotation"], answer: 1 },
        { id: 210, question: "Why is RTO armed above 72 kt?", options: ["Nose wheel steering limit", "Avoid unnecessary braking at low speed", "Electrical reason", "Hydraulic limit"], answer: 1 },
        { id: 211, question: "Anti-skid is controlled by:", options: ["ELAC", "BSCU", "FAC", "FMGC"], answer: 1 },
        { id: 212, question: "If anti-skid fails:", options: ["Normal braking continues", "Reverts to alternate without anti-skid", "No brakes", "RAT deploys"], answer: 1 },
        { id: 213, question: "Anti-skid uses:", options: ["Brake temperature sensors", "Wheel speed transducers", "Hydraulic pressure sensors", "Rudder input"], answer: 1 },
        { id: 214, question: "Brake fans are powered by:", options: ["Hydraulic system", "Electrical system", "Pneumatic system", "Engine bleed"], answer: 1 },
        { id: 215, question: "Brake fan limitation:", options: ["Cannot be used on ground", "Not used in flight", "Used only in flight", "Automatic only"], answer: 1 },
        { id: 216, question: "Nose wheel steering is powered by:", options: ["Yellow", "Green", "Blue", "RAT"], answer: 1 },
        { id: 217, question: "Maximum nose wheel steering angle via tiller is approximately:", options: ["45°", "55°", "75°", "90°"], answer: 2 },
        { id: 218, question: "Nose wheel steering via rudder pedals is limited to approximately:", options: ["3°", "6°", "10°", "15°"], answer: 1 },
        { id: 219, question: "If Green hydraulic fails, ECAM auto displays:", options: ["FUEL page", "HYD page", "ENG page", "ELEC page"], answer: 1 },
        { id: 220, question: "If brake accumulator pressure low:", options: ["No indication", "ECAM caution", "Master warning", "RAT deploy"], answer: 1 }
    ]
};
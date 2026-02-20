// section8FireProtection.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 8: Fire Protection System",
    questions: [
        { id: 141, question: "Engine fire detection is provided by:", options: ["One single loop", "Dual detection loops per engine", "Smoke sensor only", "Temperature probe only"], answer: 1 },
        { id: 142, question: "The two fire detection loops per engine are:", options: ["Parallel only", "Series only", "Dual loop logic (A & B)", "Master/Slave"], answer: 2 },
        { id: 143, question: "A fire warning is generated when:", options: ["One loop detects fire", "Both loops detect fire simultaneously", "Temperature rises", "FADEC detects abnormality"], answer: 1 },
        { id: 144, question: "If one loop fails:", options: ["No fire protection available", "System reverts to single loop detection", "Engine shuts down", "APU auto-starts"], answer: 1 },
        { id: 145, question: "Engine fire warning indications include:\n1. Red FIRE pushbutton illuminates\n2. Master Warning\n3. CRC (continuous repetitive chime)\n4. ECAM warning", options: ["1,2,3", "1,2", "1,2,3,4", "2 only"], answer: 2 },
        { id: 146, question: "Pressing the ENG FIRE pushbutton:\n1. Arms squibs\n2. Closes fuel valve\n3. Closes hydraulic fire valve\n4. Closes bleed valve", options: ["1,2", "2,3", "1,2,3,4", "3 only"], answer: 2 },
        { id: 147, question: "How many fire extinguishing bottles per engine?", options: ["1", "2", "3", "4"], answer: 1 },
        { id: 148, question: "Engine fire bottles are discharged by:", options: ["Mechanical lever", "Electrically firing squib", "Hydraulic pressure", "Pneumatic trigger"], answer: 1 },
        { id: 149, question: "If first bottle does not extinguish fire:", options: ["Engine auto shuts", "Second bottle discharged manually", "RAT deploys", "APU auto-start"], answer: 1 },
        { id: 150, question: "Engine fire extinguishing agent is:", options: ["Water", "Halon", "CO₂", "Nitrogen"], answer: 1 },
        { id: 151, question: "APU fire detection uses:", options: ["Single loop", "Dual loop", "Smoke detector", "Temperature probe"], answer: 1 },
        { id: 152, question: "If APU fire occurs on ground:", options: ["Only cockpit warning", "APU shuts automatically and bottle discharges automatically", "Crew must act", "RAT deploys"], answer: 1 },
        { id: 153, question: "If APU fire occurs in flight:", options: ["Automatic bottle discharge", "Crew must discharge bottle", "Both bottles discharge automatically", "No warning"], answer: 1 },
        { id: 154, question: "APU fire extinguisher bottle count:", options: ["1", "2", "3", "None"], answer: 0 },
        { id: 155, question: "Cargo smoke detection is provided by:", options: ["Temperature probe", "Dual smoke detectors", "Fire loop", "Bleed sensor"], answer: 1 },
        { id: 156, question: "A cargo smoke warning triggers:\n1. Master Warning\n2. ECAM\n3. CRC\n4. Automatic bottle discharge", options: ["1,2,3", "2 only", "4 only", "All"], answer: 0 },
        { id: 157, question: "Cargo fire extinguishing bottles:", options: ["1", "2", "3", "4"], answer: 1 },
        { id: 158, question: "After first cargo bottle discharge:", options: ["Second discharges automatically", "Second bottle metered for continuous flow", "No further protection", "Engine shuts down"], answer: 1 },
        { id: 159, question: "Lavatory smoke detection triggers:", options: ["Master warning", "Master caution", "Cabin only indication", "RAT deploy"], answer: 1 },
        { id: 160, question: "Lavatory fire extinguisher is:", options: ["Manual", "Automatic", "Hydraulic", "Electrical"], answer: 1 },
        { id: 161, question: "Wheel well fire detection becomes active:", options: ["Always", "Only airborne", "Only on ground", "After gear retraction"], answer: 1 },
        { id: 162, question: "Wheel well fire extinguishing is:", options: ["Available", "Not installed", "Automatic", "Electrical"], answer: 1 },
        { id: 163, question: "Avionics smoke is detected by:", options: ["Temperature loop", "Smoke detectors in avionics bay", "Bleed sensors", "Hydraulic pressure"], answer: 1 },
        { id: 164, question: "If avionics smoke detected:", options: ["Automatic pack shutdown", "Ventilation reconfiguration", "Engine shutdown", "RAT deploy"], answer: 1 },
        { id: 165, question: "Pressing ENG FIRE pushbutton also:\n1. Arms extinguisher\n2. Closes LP fuel valve\n3. Closes hydraulic valve\n4. Disconnects generator", options: ["1,2,3", "1,2,3,4", "2 only", "4 only"], answer: 1 },
        { id: 166, question: "Why dual loop detection used?", options: ["Weight saving", "Redundancy & avoid false fire", "Faster detection", "Regulatory only"], answer: 1 },
        { id: 167, question: "If both detection loops fail:", options: ["Engine auto shutdown", "Fire protection lost", "Single loop reversion", "Automatic bottle discharge"], answer: 1 }
    ]
};
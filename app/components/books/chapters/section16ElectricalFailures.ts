// section16ElectricalFailures.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 16: Electrical Failures & Emergency Configuration",
    questions: [
        { id: 361, question: "In normal flight:\nAC BUS 1 is powered by:", options: ["GEN 2", "GEN 1", "APU GEN", "TR1"], answer: 1 },
        { id: 362, question: "AC BUS 2 is powered by:", options: ["GEN 1", "GEN 2", "APU", "RAT"], answer: 1 },
        { id: 363, question: "AC ESS BUS is normally powered from:", options: ["AC BUS 2", "AC BUS 1", "Static inverter", "DC BUS"], answer: 1 },
        { id: 364, question: "If GEN 1 fails in flight:", options: ["AC BUS 1 lost", "AC BUS 1 powered by GEN 2 automatically", "RAT deploys", "AC ESS lost"], answer: 1 },
        { id: 365, question: "With one generator operating:", options: ["Load shedding occurs", "All AC buses remain powered", "DC ESS lost", "SD blanks"], answer: 1 },
        { id: 366, question: "If both engine generators fail in flight:", options: ["Immediate battery only", "RAT deploys automatically", "APU auto-starts", "Direct Law"], answer: 1 },
        { id: 367, question: "RAT powers:\n1. Blue hydraulic system\n2. Emergency generator\n3. AC ESS BUS\n4. DC ESS BUS", options: ["1,2,3", "2,3", "3 only", "All"], answer: 0 },
        { id: 368, question: "RAT generator capacity is approximately:", options: ["15 kVA", "20 kVA", "25 kVA", "40 kVA"], answer: 2 },
        { id: 369, question: "In emergency electrical configuration:\nAvailable displays include:", options: ["All PFDs and NDs", "Captain PFD + Upper ECAM", "FO PFD only", "No displays"], answer: 1 },
        { id: 370, question: "In emergency configuration:\nAutopilot is:", options: ["Available", "Lost", "Limited", "Automatic"], answer: 1 },
        { id: 371, question: "In emergency configuration:\nFlight control law is:", options: ["Normal Law", "Alternate Law", "Direct Law", "Mechanical backup"], answer: 2 },
        { id: 372, question: "If AC BUS 1 lost:\nAC ESS BUS automatically transfers to:", options: ["AC BUS 2", "Static inverter", "Battery", "RAT"], answer: 0 },
        { id: 373, question: "If AC BUS 1 and AC BUS 2 both lost:\nAC ESS BUS powered by:", options: ["Battery via static inverter", "RAT", "APU", "TR2"], answer: 0 },
        { id: 374, question: "On ground with no generators and no APU:\nElectrical supply is:", options: ["RAT", "Batteries only", "External power", "None"], answer: 1 },
        { id: 375, question: "Battery-only configuration duration is limited due to:", options: ["Hydraulic pressure", "Fuel supply", "Battery capacity", "FADEC"], answer: 2 },
        { id: 376, question: "APU generator can power aircraft in flight:", options: ["Always", "Up to maximum certified altitude", "Ground only", "Only below 10,000 ft"], answer: 1 },
        { id: 377, question: "If APU GEN available after dual engine failure:", options: ["RAT remains deployed", "RAT retracts", "AC buses powered by APU", "Direct Law remains"], answer: 2 },
        { id: 378, question: "TR converts:", options: ["DC to AC", "AC to DC", "28V to 115V", "400Hz to 50Hz"], answer: 1 },
        { id: 379, question: "If TR1 fails:\nDC BUS 1 is powered by:", options: ["TR2", "Battery", "Static inverter", "RAT"], answer: 0 },
        { id: 380, question: "In electrical emergency:\nFirst loads shed are:", options: ["Flight controls", "Galleys & commercial loads", "AC ESS", "SD"], answer: 1 },
        { id: 381, question: "Why are galleys shed first?", options: ["Structural limit", "Non-essential loads", "Hydraulic load", "FMGC limitation"], answer: 1 },
        { id: 382, question: "Dual engine flameout results in:\n1. Dual GEN loss\n2. RAT deployment\n3. Direct Law\n4. Emergency electrical config", options: ["All", "1 only", "1 and 2", "2 only"], answer: 0 },
        { id: 383, question: "If RAT fails to deploy:", options: ["No electrical power", "Battery-only operation", "Green hydraulic powers AC", "APU auto-start"], answer: 1 },
        { id: 384, question: "Why is Blue hydraulic connected to RAT?", options: ["Blue has no engine pump", "Structural reason", "Fuel saving", "PTU logic"], answer: 0 }
    ]
};
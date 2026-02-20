import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Electrical System",
    questions: [{ id: 21, question: "Each engine-driven generator produces:", options: ["90 kVA", "75 kVA", "120 kVA", "40 kVA"], answer: 0 },
    { id: 22, question: "The APU generator capacity is:", options: ["60 kVA", "75 kVA", "90 kVA", "120 kVA"], answer: 2 },
    { id: 23, question: "In normal configuration:\nAC BUS 1 is powered by:", options: ["GEN 2", "GEN 1", "APU GEN", "TR1"], answer: 1 },
    { id: 24, question: "If GEN 1 fails in flight:", options: ["AC BUS 1 is lost", "AC BUS 1 is powered by GEN 2 automatically", "AC ESS is lost", "RAT deploys"], answer: 1 },
    { id: 25, question: "AC ESS BUS is normally powered by:", options: ["AC BUS 2", "AC BUS 1", "Static inverter", "DC BUS"], answer: 1 },
    { id: 26, question: "If AC BUS 1 is lost, AC ESS BUS automatically transfers to:", options: ["AC BUS 2", "Batteries", "Static inverter", "TR2"], answer: 0 },
    { id: 27, question: "The RAT generator supplies approximately:", options: ["5 kVA", "15 kVA", "25 kVA", "40 kVA"], answer: 2 },
    { id: 28, question: "Battery nominal voltage is:", options: ["12V", "24V", "28V", "48V"], answer: 2 },
    { id: 29, question: "How many main batteries are installed?", options: ["1", "2", "3", "4"], answer: 1 },
    { id: 30, question: "In emergency electrical configuration:\n1. Blue hydraulic system powered by RAT\n2. AC ESS powered\n3. DC ESS powered\n4. Galleys powered", options: ["1,2,3", "1,3", "1,2", "All four"], answer: 0 },
    { id: 31, question: "In flight, if both engine generators and APU generator fail:\nWhat happens first?", options: ["AC BUS 1 lost", "RAT deploys automatically", "Batteries power all buses", "Aircraft reverts to Direct Law"], answer: 1 },
    { id: 32, question: "The static inverter converts:", options: ["AC to DC", "DC to AC 115V 400Hz", "28V to 115V DC", "AC 50Hz to 400Hz"], answer: 1 },
    { id: 33, question: "Which buses are shed first in electrical emergency?", options: ["AC ESS", "DC ESS", "Galleys & commercial loads", "TR1"], answer: 2 },
    { id: 34, question: "The TR units convert:", options: ["AC to DC", "DC to AC", "115V to 230V", "400Hz to 50Hz"], answer: 0 },
    { id: 35, question: "If TR1 fails:\nDC BUS 1 is powered by:", options: ["TR2", "Batteries", "AC ESS", "Static inverter"], answer: 0 },
    { id: 36, question: "Maximum battery charging current is limited to approximately:", options: ["5A", "10A", "15A", "30A"], answer: 2 },
    { id: 37, question: "The electrical system is controlled automatically by:", options: ["ELAC", "EIU", "GCU & BCL", "FAC"], answer: 2 },
    { id: 38, question: "If only one engine generator is available:", options: ["Load shedding occurs", "All buses powered normally", "RAT deploys", "APU auto starts"], answer: 1 },
    { id: 39, question: "Combination Question:\nDuring emergency electrical configuration:\n1. Only Captain PFD is powered\n2. FO PFD is blank\n3. ND powered\n4. SD powered\nCorrect combination:", options: ["1 only", "1,2", "1,2,3", "1,2,3,4"], answer: 1 },
    { id: 40, question: "Why is RAT connected to Blue hydraulic system?", options: ["Blue has no engine pump", "Blue powers primary flight controls", "Blue powers PTU", "Blue has highest pressure"], answer: 0 }]
};
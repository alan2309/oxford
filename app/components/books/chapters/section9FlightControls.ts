// section9FlightControls.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 9: Flight Controls",
    questions: [
        { id: 168, question: "The A320 primary flight controls are:", options: ["Hydromechanical", "Cable-driven", "Digital fly-by-wire", "Direct hydraulic"], answer: 2 },
        { id: 169, question: "Primary flight control computers are:\n1. ELAC\n2. SEC\n3. FAC\n4. FMGC", options: ["1,2,3", "1,2", "2,3", "All"], answer: 0 },
        { id: 170, question: "Number of ELACs installed:", options: ["1", "2", "3", "4"], answer: 1 },
        { id: 171, question: "Number of SECs installed:", options: ["1", "2", "3", "4"], answer: 2 },
        { id: 172, question: "FAC computers primarily control:", options: ["Elevator", "Aileron", "Rudder & yaw functions", "Slats"], answer: 2 },
        { id: 173, question: "In Normal Law, sidestick pitch input commands:", options: ["Elevator deflection", "Load factor demand", "Pitch rate", "Flight path angle"], answer: 1 },
        { id: 174, question: "Maximum positive load factor in clean configuration:", options: ["+2.0 g", "+2.5 g", "+3.0 g", "+3.5 g"], answer: 1 },
        { id: 175, question: "Maximum positive load factor in flaps extended configuration:", options: ["+2.0 g", "+2.5 g", "+3.0 g", "+3.5 g"], answer: 0 },
        { id: 176, question: "Negative load factor limit:", options: ["-0.5 g", "-1.0 g", "-1.5 g", "-2.0 g"], answer: 1 },
        { id: 177, question: "Maximum bank angle without sidestick input:", options: ["25°", "30°", "33°", "45°"], answer: 2 },
        { id: 178, question: "Maximum bank angle with full sidestick deflection:", options: ["45°", "60°", "67°", "75°"], answer: 2 },
        { id: 179, question: "If bank exceeds 33° and sidestick released:", options: ["Aircraft remains at bank", "Returns to 33°", "Returns to 0°", "Enters spiral"], answer: 1 },
        { id: 180, question: "In Normal Law, alpha protection prevents:", options: ["High bank", "Overspeed", "Stall", "Yaw instability"], answer: 2 },
        { id: 181, question: "When alpha protection activates:", options: ["Elevator frozen", "Thrust reduced", "Sidestick commands AoA instead of load factor", "Autopilot disengages"], answer: 2 },
        { id: 182, question: "Alpha floor is:", options: ["Pitch protection", "Bank protection", "A/THR automatic TOGA thrust on high AoA", "Overspeed protection"], answer: 2 },
        { id: 183, question: "Alpha floor requires:", options: ["Autopilot ON", "A/THR armed and available", "Flaps extended", "Both engines running"], answer: 1 },
        { id: 184, question: "High speed protection prevents:", options: ["Mach exceedance", "VMO/MMO exceedance", "Structural overload", "Both A and B"], answer: 3 },
        { id: 185, question: "When high speed protection activates:", options: ["Nose pitches up automatically", "Engines shut down", "Flaps retract", "RAT deploys"], answer: 0 },
        { id: 186, question: "Loss of one ELAC results in:", options: ["Direct Law", "Alternate Law", "Normal Law retained", "Mechanical backup"], answer: 2 },
        { id: 187, question: "Alternate Law provides:\n1. Load factor protection\n2. High AoA protection\n3. Low speed stability\n4. Bank angle protection", options: ["1 and 4", "2 only", "3 only", "None"], answer: 2 },
        { id: 188, question: "Direct Law provides:", options: ["Full protections", "Load factor protection", "Direct relationship between sidestick and surface", "Alpha floor"], answer: 2 },
        { id: 189, question: "In Direct Law:", options: ["Bank auto-limits", "Pitch auto-trims", "No automatic trim", "Rudder limited"], answer: 2 },
        { id: 190, question: "Mechanical backup provides control of:", options: ["Elevator & Aileron", "Rudder & THS", "Slats", "Spoilers"], answer: 1 },
        { id: 191, question: "Spoilers serve as:\n1. Roll control\n2. Speed brakes\n3. Ground spoilers\n4. Lift dumpers", options: ["All", "1 and 2", "1 only", "3 only"], answer: 0 },
        { id: 192, question: "Ground spoilers deploy automatically when:\n1. Both thrust levers at idle\n2. Main gear compressed\n3. Reverse selected\n4. Spoilers armed", options: ["1,2,4", "2 only", "3 only", "All"], answer: 0 },
        { id: 193, question: "Rudder travel limiter limits rudder deflection based on:", options: ["AoA", "Mach", "Speed", "Weight"], answer: 2 },
        { id: 194, question: "Why is rudder limited at high speed?", options: ["Hydraulic limits", "Prevent structural overload", "Electrical limit", "Fuel saving"], answer: 1 },
        { id: 195, question: "If both pilots move sidestick simultaneously:", options: ["Captain priority", "FO priority", "Inputs are algebraically summed", "System disconnects"], answer: 2 },
        { id: 196, question: "Sidestick priority is achieved by:", options: ["Pulling circuit breaker", "Pressing red takeover pushbutton", "Switching ELAC", "Switching SEC"], answer: 1 }
    ]
};
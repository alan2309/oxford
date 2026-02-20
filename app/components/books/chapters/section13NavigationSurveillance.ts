// section13NavigationSurveillance.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 13: Navigation & Surveillance",
    questions: [
        { id: 278, question: "The A320 has how many ADIRUs?", options: ["1", "2", "3", "4"], answer: 2 },
        { id: 279, question: "Each ADIRU provides:\n1. Air data (ADR)\n2. Inertial reference (IR)\n3. Heading\n4. FMGC control", options: ["1,2,3", "1 only", "2 only", "All"], answer: 0 },
        { id: 280, question: "If one ADR fails:", options: ["Autopilot lost", "Aircraft reverts to Direct Law", "Remaining ADRs supply data", "RAT deploys"], answer: 2 },
        { id: 281, question: "If two ADRs fail:", options: ["Normal Law retained", "Alternate Law", "Direct Law", "Mechanical backup"], answer: 1 },
        { id: 282, question: "Loss of all ADRs results in:", options: ["Normal Law", "Alternate Law", "Direct Law", "Mechanical backup"], answer: 2 },
        { id: 283, question: "Loss of all IRs results in:", options: ["Total loss of control", "Raw data only", "Direct Law + limited nav", "RAT deploy"], answer: 2 },
        { id: 284, question: "Standby attitude indicator is powered by:", options: ["AC BUS 1", "DC BUS 2", "Independent battery", "Hydraulic system"], answer: 2 },
        { id: 285, question: "Radio altitude is available:", options: ["Up to FL390", "Up to 10,000 ft", "Up to 2500 ft AGL", "Up to 5000 ft"], answer: 2 },
        { id: 286, question: "Radio altitude is used for:\n1. Autoland\n2. GPWS\n3. Windshear\n4. Cabin pressure", options: ["1,2,3", "2 only", "4 only", "All"], answer: 0 },
        { id: 287, question: "GPWS Mode 1 protects against:", options: ["Excessive descent rate", "Terrain closure", "Bank angle", "Overspeed"], answer: 0 },
        { id: 288, question: "GPWS Mode 2 protects against:", options: ["Sink rate", "Excessive terrain closure rate", "Windshear", "Stall"], answer: 1 },
        { id: 289, question: "GPWS Mode 3 provides warning after:", options: ["Takeoff", "Gear down", "Altitude loss after takeoff or go-around", "Landing"], answer: 2 },
        { id: 290, question: "GPWS Mode 4 relates to:", options: ["Unsafe terrain", "Unsafe gear/flap configuration", "Overspeed", "Wind shear"], answer: 1 },
        { id: 291, question: "GPWS Mode 5 relates to:", options: ["Excessive bank", "Glide slope deviation", "Overspeed", "Tail strike"], answer: 1 },
        { id: 292, question: "Predictive GPWS uses:", options: ["Radar", "Terrain database", "IRS only", "Hydraulic sensor"], answer: 1 },
        { id: 293, question: "Reactive windshear detection uses:", options: ["Weather radar", "Radio altitude", "Flight control computers + ADR data", "GPWS"], answer: 2 },
        { id: 294, question: "Predictive windshear uses:", options: ["Inertial data", "Weather radar", "FMGC", "Hydraulic data"], answer: 1 },
        { id: 295, question: "Windshear warning triggers:", options: ["Master caution", "Master warning + WINDSHEAR aural", "ECAM advisory only", "No aural"], answer: 1 },
        { id: 296, question: "TCAS provides:", options: ["Weather detection", "Traffic advisory", "Resolution advisory", "Both B and C"], answer: 3 },
        { id: 297, question: "TCAS RA requires:", options: ["Immediate autopilot disconnect", "Manual pilot response", "Autopilot override automatically", "Thrust idle"], answer: 1 },
        { id: 298, question: "During TCAS RA:", options: ["Follow ATC first", "Follow TCAS RA first", "Maintain altitude", "Disconnect FD"], answer: 1 },
        { id: 299, question: "TCAS uses:", options: ["Primary radar", "Transponder signals", "GPS", "IRS"], answer: 1 },
        { id: 300, question: "Weather radar tilt should be adjusted to:", options: ["Maximum up", "Maximum down", "Scan relevant weather cells", "Zero always"], answer: 2 },
        { id: 301, question: "Predictive windshear function is available:", options: ["Below 2300 ft AGL", "Above FL100", "Cruise only", "Any altitude"], answer: 0 },
        { id: 302, question: "Transponder modes include:\n1. Mode A\n2. Mode C\n3. Mode S\n4. TCAS", options: ["1,2,3", "1 only", "3 only", "All"], answer: 0 }
    ]
};
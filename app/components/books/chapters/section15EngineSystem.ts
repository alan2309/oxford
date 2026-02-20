// section15EngineSystem.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 15: Engine System – CFM56",
    questions: [
        { id: 333, question: "The CFM56 engine is a:", options: ["Turbojet", "Low-bypass turbofan", "High-bypass turbofan", "Turboprop"], answer: 2 },
        { id: 334, question: "Engine thrust is primarily indicated by:", options: ["EGT", "N2", "N1", "Fuel flow"], answer: 2 },
        { id: 335, question: "The FADEC controls:\n1. Fuel flow\n2. Variable stator vanes\n3. Engine limits\n4. Thrust reverser deployment", options: ["1,2,3", "1 only", "2 only", "All"], answer: 0 },
        { id: 336, question: "Each engine has how many FADEC channels?", options: ["1", "2", "3", "4"], answer: 1 },
        { id: 337, question: "FADEC power source in flight is:", options: ["Aircraft AC bus", "Aircraft DC bus", "Permanent magnet alternator on engine", "Hydraulic pump"], answer: 2 },
        { id: 338, question: "During engine start, ignition begins at approximately:", options: ["5% N2", "10% N2", "15% N2", "20% N2"], answer: 2 },
        { id: 339, question: "Fuel is introduced at approximately:", options: ["10% N2", "15% N2", "20% N2", "30% N2"], answer: 2 },
        { id: 340, question: "Starter cutout occurs at approximately:", options: ["30% N2", "40% N2", "50% N2", "60% N2"], answer: 2 },
        { id: 341, question: "If EGT rises rapidly during start beyond limit:", options: ["Continue start", "Abort start", "Advance thrust", "Turn off ignition"], answer: 1 },
        { id: 342, question: "A hung start is characterized by:", options: ["Rapid EGT rise", "N2 stagnation below idle", "Oil pressure loss", "Fuel leak"], answer: 1 },
        { id: 343, question: "Hot start is indicated by:", options: ["Low N2", "Rapid excessive EGT", "No ignition", "Fuel low"], answer: 1 },
        { id: 344, question: "Thrust ratings available include:\n1. TOGA\n2. FLEX/MCT\n3. CLB\n4. CRZ", options: ["1,2,3", "1,3", "2,4", "All"], answer: 3 },
        { id: 345, question: "FLEX temperature must be:", options: ["Below OAT", "Equal to OAT", "Above OAT", "Below ISA"], answer: 2 },
        { id: 346, question: "Selecting FLEX temperature provides:", options: ["Maximum thrust", "Reduced takeoff thrust", "Idle thrust", "Reverse thrust"], answer: 1 },
        { id: 347, question: "MCT (Max Continuous Thrust) is used:", options: ["During normal cruise", "After engine failure", "During descent", "During taxi"], answer: 1 },
        { id: 348, question: "Maximum N1 limit is governed by:", options: ["Pilot input", "FADEC automatically", "Hydraulic system", "FMGC"], answer: 1 },
        { id: 349, question: "If thrust levers advanced beyond limit:", options: ["FADEC prevents exceedance", "Engine overspeeds", "Fire warning", "RAT deploys"], answer: 0 },
        { id: 350, question: "Maximum EGT limit during takeoff is approximately:", options: ["850°C", "900°C", "950°C", "1050°C"], answer: 2 },
        { id: 351, question: "Engine oil pressure at idle is typically above:", options: ["10 psi", "15 psi", "25 psi", "40 psi"], answer: 2 },
        { id: 352, question: "Oil quantity is measured in:", options: ["Liters", "Gallons", "Percentage", "PSI"], answer: 2 },
        { id: 353, question: "Oil temperature high may indicate:", options: ["Fuel starvation", "Overheating", "Hydraulic leak", "Electrical fault"], answer: 1 },
        { id: 354, question: "Thrust reversers are powered by:", options: ["Hydraulic system", "Electric motor", "Pneumatic pressure", "Fuel pressure"], answer: 0 },
        { id: 355, question: "Thrust reverser deployment is inhibited:\n1. In flight\n2. If one reverser unlocked\n3. If hydraulic pressure low\n4. Above certain speed", options: ["1 and 2", "1 only", "3 only", "All"], answer: 0 },
        { id: 356, question: "If one reverser fails to deploy:", options: ["Both shut down", "Opposite reverser inhibited", "Opposite continues", "RAT deploys"], answer: 1 },
        { id: 357, question: "Engine fuel return occurs when:", options: ["Demand high", "Demand low", "Crossfeed open", "FADEC fault"], answer: 1 },
        { id: 358, question: "Engine bleed air affects:\n1. Pack performance\n2. Anti-ice\n3. Engine thrust margin\n4. Cabin pressure", options: ["All", "1 only", "3 only", "2 only"], answer: 0 },
        { id: 359, question: "ENG FAIL ECAM triggers when:", options: ["N1 drops", "EGT drops", "FADEC detects flameout", "Oil low"], answer: 2 },
        { id: 360, question: "In case of engine flameout in cruise:", options: ["RAT deploys", "Auto relight may occur", "Immediate descent required", "Direct Law"], answer: 1 }
    ]
};
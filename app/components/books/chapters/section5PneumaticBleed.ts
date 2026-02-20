// section5PneumaticBleed.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 5: Pneumatic / Bleed System",
    questions: [
        { id: 96, question: "Bleed air source in normal operation is:", options: ["APU only", "Engine compressor stages", "Hydraulic pump", "Fuel system"], answer: 1 },
        { id: 97, question: "Engine bleed air is taken from:", options: ["Fan", "LP compressor", "HP compressor stage", "Turbine"], answer: 2 },
        { id: 98, question: "APU bleed can be used:", options: ["In flight at any altitude", "On ground only", "Up to certain altitude", "Only for engine start"], answer: 2 },
        { id: 99, question: "APU bleed air altitude limit is approximately:", options: ["15,000 ft", "20,000 ft", "25,000 ft", "35,000 ft"], answer: 1 },
        { id: 100, question: "Bleed air pressure regulation is controlled by:", options: ["FADEC", "BMC (Bleed Monitoring Computer)", "ELAC", "TR"], answer: 1 },
        { id: 101, question: "The crossbleed valve allows:", options: ["Hydraulic transfer", "Electrical sharing", "Air transfer between sides", "Fuel balancing"], answer: 2 },
        { id: 102, question: "During single engine start using crossbleed:", options: ["Opposite engine supplies air", "APU required", "Hydraulic pressure required", "PTU required"], answer: 0 },
        { id: 103, question: "In case of bleed leak detected:", options: ["Affected side automatically closes", "Both engines shut down", "RAT deploys", "Fuel pumps stop"], answer: 0 },
        { id: 104, question: "Why is bleed air temperature regulated?", options: ["Protect ducts", "Maintain cabin comfort", "Prevent structural damage", "All of the above"], answer: 3 },
        { id: 105, question: "Pack flow is automatically reduced during:\n1. Engine start\n2. Single pack operation\n3. Takeoff\n4. Landing", options: ["1 and 3", "2 only", "1 only", "All"], answer: 0 },
        { id: 106, question: "Why is pack flow reduced during takeoff?", options: ["Noise reduction", "Increase engine thrust margin", "Reduce cabin pressure", "Electrical limitation"], answer: 1 },
        { id: 107, question: "If both engine bleeds fail in flight:", options: ["Cabin depressurizes immediately", "APU bleed may be used", "RAT supplies bleed", "PTU powers packs"], answer: 1 },
        { id: 108, question: "Wing anti-ice uses air from:", options: ["LP compressor", "HP compressor", "APU", "Hydraulic pump"], answer: 1 },
        { id: 109, question: "Why is wing anti-ice not used on ground?", options: ["Fuel saving", "Overheating risk", "Structural risk", "Electrical load"], answer: 1 },
        { id: 110, question: "If bleed air overheat occurs:", options: ["Fuel pump stops", "Bleed valve closes automatically", "Hydraulic system fails", "AC ESS lost"], answer: 1 }
    ]
};
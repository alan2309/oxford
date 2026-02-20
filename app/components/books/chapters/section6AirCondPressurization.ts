// section6AirCondPressurization.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 6: Air Conditioning & Pressurization",
    questions: [
        { id: 111, question: "The A320 has how many air conditioning packs?", options: ["1", "2", "3", "4"], answer: 1 },
        { id: 112, question: "Each pack is supplied by:", options: ["Hydraulic pressure", "Engine bleed air", "Electrical compressor", "Fuel vapor"], answer: 1 },
        { id: 113, question: "Pack flow selector positions are:", options: ["LO – NORM – HI", "OFF – AUTO – MAX", "LOW – MED – HIGH", "1 – 2 – 3"], answer: 0 },
        { id: 114, question: "In single pack operation, pack flow automatically:", options: ["Decreases", "Remains normal", "Increases to HI", "Shuts down"], answer: 2 },
        { id: 115, question: "During engine start, pack flow:", options: ["Increases", "Is automatically reduced", "Remains unchanged", "Shuts permanently"], answer: 1 },
        { id: 116, question: "Why is pack flow reduced during engine start?", options: ["Reduce cabin pressure", "Increase bleed availability for start", "Reduce electrical load", "Prevent overheat"], answer: 1 },
        { id: 117, question: "If both packs fail in flight:", options: ["Immediate depressurization", "Cabin slowly depressurizes", "RAT deploys", "Hydraulic pressure drops"], answer: 1 },
        { id: 118, question: "Ram air inlet is used:", options: ["During cruise normally", "For emergency ventilation", "During engine start", "During landing only"], answer: 1 },
        { id: 119, question: "Pressurization is controlled automatically by:", options: ["FMGC", "ELAC", "CPC (Cabin Pressure Controller)", "FADEC"], answer: 2 },
        { id: 120, question: "How many CPCs are installed?", options: ["1", "2", "3", "4"], answer: 1 },
        { id: 121, question: "CPCs operate in:", options: ["Master/Slave mode", "Parallel mode", "Alternating active mode", "Independent control"], answer: 2 },
        { id: 122, question: "Maximum certified cabin differential pressure is approximately:", options: ["6 psi", "7 psi", "8.6 psi", "9.5 psi"], answer: 2 },
        { id: 123, question: "Maximum cabin altitude limitation is:", options: ["8000 ft", "10,000 ft", "12,000 ft", "14,000 ft"], answer: 0 },
        { id: 124, question: "Cabin altitude warning triggers at approximately:", options: ["8000 ft", "8800 ft", "9500 ft", "10,000 ft"], answer: 2 },
        { id: 125, question: "If cabin altitude exceeds approximately 14,000 ft:", options: ["ECAM only", "Master caution", "Passenger oxygen masks deploy automatically", "RAT deploys"], answer: 2 },
        { id: 126, question: "Outflow valve is located at:", options: ["Nose", "Wing root", "Rear fuselage", "Vertical stabilizer"], answer: 2 },
        { id: 127, question: "The outflow valve is electrically controlled and:", options: ["Hydraulically actuated", "Pneumatically actuated", "Mechanically actuated", "Electrically actuated"], answer: 3 },
        { id: 128, question: "In case of CPC failure:", options: ["Aircraft depressurizes", "Manual mode available", "RAT deploys", "Packs shut down"], answer: 1 },
        { id: 129, question: "Manual pressurization control is done using:", options: ["PACK selector", "MODE SEL pushbutton", "RAM AIR", "Crossbleed"], answer: 1 },
        { id: 130, question: "During climb, cabin climbs at approximately:", options: ["300 ft/min", "500 ft/min", "700 ft/min", "1000 ft/min"], answer: 2 },
        { id: 131, question: "During descent, cabin descent rate is approximately:", options: ["200 ft/min", "500 ft/min", "750 ft/min", "1000 ft/min"], answer: 2 },
        { id: 132, question: "Negative pressure relief valve protects against:", options: ["Excess positive differential", "Reverse differential pressure", "Hydraulic leak", "Bleed overheat"], answer: 1 },
        { id: 133, question: "If landing field elevation is not inserted in FMGC:", options: ["Cabin depressurizes immediately", "CPC uses departure elevation", "CPC uses barometric reference", "Automatic safe mode"], answer: 2 },
        { id: 134, question: "Combination Question:\nPressurization is lost if:\n1. Both packs fail\n2. Outflow valve stuck open\n3. Bleed supply lost\n4. CPC failure", options: ["1,2,3", "2 only", "4 only", "All"], answer: 0 },
        { id: 135, question: "Why is APU bleed limited at high altitude?", options: ["Electrical limits", "APU performance limits", "Fuel heating", "Hydraulic limits"], answer: 1 }
    ]
};
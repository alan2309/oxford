// section12FMGS.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 12: FMGS",
    questions: [
        { id: 252, question: "The A320 FMGS consists of:\n1. FMGC 1\n2. FMGC 2\n3. MCDUs\n4. ADIRUs", options: ["1,2,3", "1,2", "1,2,3,4", "2,3 only"], answer: 2 },
        { id: 253, question: "Primary aircraft position source is:", options: ["GPS only", "IRS only", "IRS blended with radio updating", "VOR only"], answer: 2 },
        { id: 254, question: "IRS alignment on ground requires:", options: ["GPS signal", "Aircraft stationary", "Engine running", "Hydraulic pressure"], answer: 1 },
        { id: 255, question: "Typical IRS alignment time is approximately:", options: ["2 minutes", "4 minutes", "7 minutes", "10 minutes"], answer: 2 },
        { id: 256, question: "If both FMGCs fail:", options: ["Aircraft uncontrollable", "Reverts to Direct Law", "Raw data flying only", "RAT deploys"], answer: 2 },
        { id: 257, question: "In managed mode, VOR/DME tuning is:", options: ["Manual only", "Automatic by FMGC", "Controlled by ELAC", "Controlled by FAC"], answer: 1 },
        { id: 258, question: "Manual tuning overrides:", options: ["FMGC permanently", "Only active FMGC", "Auto-tuning temporarily", "Both FMGCs permanently"], answer: 2 },
        { id: 259, question: "Cost Index represents:", options: ["Fuel price", "Ratio of time cost to fuel cost", "Aircraft weight", "Engine wear factor"], answer: 1 },
        { id: 260, question: "High Cost Index results in:", options: ["Lower speed", "Higher speed", "Lower fuel burn", "Lower thrust"], answer: 1 },
        { id: 261, question: "Cost Index = 0 means:", options: ["Maximum speed", "Minimum fuel burn speed", "Idle descent only", "No climb"], answer: 1 },
        { id: 262, question: "Increasing Cost Index increases:\n1. Climb speed\n2. Cruise Mach\n3. Descent speed\n4. Fuel consumption", options: ["1,2,3", "1 only", "2 only", "All"], answer: 3 },
        { id: 263, question: "Top of Climb (T/C) is computed based on:\n1. Cost Index\n2. Weight\n3. Wind\n4. ISA deviation", options: ["All", "1 and 2", "3 only", "2 only"], answer: 0 },
        { id: 264, question: "If wind input incorrect, fuel prediction will be:", options: ["Unaffected", "Incorrect", "Overwritten by GPS", "Reset"], answer: 1 },
        { id: 265, question: "FMGS uses which fuel value for predictions?", options: ["Block fuel only", "FOB only", "Gross weight derived from FOB + ZFW", "Manual entry only"], answer: 2 },
        { id: 266, question: "Secondary flight plan allows:", options: ["Backup route preparation", "Independent FMGC", "Dual autopilot", "Independent navigation"], answer: 0 },
        { id: 267, question: "Activating secondary flight plan:", options: ["Deletes primary", "Swaps with primary", "Erases constraints", "Requires IRS reset"], answer: 1 },
        { id: 268, question: "Upon engine failure, FMGS computes:", options: ["New cost index", "Engine-out ceiling", "Direct law", "Hydraulic reconfiguration"], answer: 1 },
        { id: 269, question: "Engine-out drift-down path is computed using:", options: ["Idle thrust", "Max continuous thrust", "TOGA", "Selected thrust"], answer: 1 },
        { id: 270, question: "Engine-out ceiling depends on:\n1. Weight\n2. Temperature\n3. Cost index\n4. Wind", options: ["1 and 2", "1 only", "3 only", "All"], answer: 0 },
        { id: 271, question: "Inserting approach minima allows:", options: ["Automatic landing", "Visual cue reference", "DH/MDA display on PFD", "Engine shutdown"], answer: 2 },
        { id: 272, question: "If minima not inserted:", options: ["No landing possible", "No DH callout", "ECAM warning", "AP disconnect"], answer: 1 },
        { id: 273, question: "FLS provides:", options: ["ILS signal", "Computed final approach path", "Raw VOR guidance", "Autoland capability"], answer: 1 },
        { id: 274, question: "FINAL APP mode requires:", options: ["Valid approach in database", "LOC frequency tuned", "Glide slope signal", "Autopilot off"], answer: 0 },
        { id: 275, question: "Incorrect baro reference affects:\n1. VNAV path\n2. Altitude capture\n3. GPWS\n4. Cabin pressure", options: ["1,2,3", "4 only", "1 only", "All"], answer: 0 },
        { id: 276, question: "Resetting FMGC in flight may cause:", options: ["Law reversion", "Temporary loss of guidance", "Engine shutdown", "Hydraulic failure"], answer: 1 },
        { id: 277, question: "Position accuracy degrades when:", options: ["GPS lost", "DME unavailable", "IRS drift increases", "All"], answer: 3 }
    ]
};
// section14ECAMDisplay.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 14: ECAM & Display System (EIS)",
    questions: [
        { id: 303, question: "The A320 Electronic Instrument System (EIS) consists of:\n1. 2 PFDs\n2. 2 NDs\n3. Upper ECAM (E/WD)\n4. Lower ECAM (SD)", options: ["1 and 2", "1,2,3", "All", "3 and 4 only"], answer: 2 },
        { id: 304, question: "The ECAM system is managed by:", options: ["FMGC", "DMC (Display Management Computers)", "ELAC", "FADEC"], answer: 1 },
        { id: 305, question: "How many DMCs are installed?", options: ["1", "2", "3", "4"], answer: 2 },
        { id: 306, question: "If one DMC fails:", options: ["All displays lost", "Reconfiguration possible via EIS switching", "RAT deploys", "Autopilot lost"], answer: 1 },
        { id: 307, question: "Master Warning (Red) indicates:", options: ["Advisory", "Caution", "Immediate crew action required", "Memo"], answer: 2 },
        { id: 308, question: "Master Caution (Amber) indicates:", options: ["Immediate danger", "Abnormal condition requiring awareness/action", "Advisory only", "System reset"], answer: 1 },
        { id: 309, question: "Continuous Repetitive Chime (CRC) accompanies:", options: ["Caution", "Advisory", "Warning", "Memo"], answer: 2 },
        { id: 310, question: "Single chime accompanies:", options: ["Warning", "Caution", "Advisory", "Memo"], answer: 1 },
        { id: 311, question: "The Upper ECAM (E/WD) displays:", options: ["System synoptic", "Warnings & engine parameters", "Navigation data", "TCAS"], answer: 1 },
        { id: 312, question: "The Lower ECAM (SD) displays:", options: ["Primary flight info", "System synoptic pages", "Autopilot modes", "IRS alignment"], answer: 1 },
        { id: 313, question: "If Green hydraulic fails, SD automatically displays:", options: ["ENG page", "HYD page", "FUEL page", "ELEC page"], answer: 1 },
        { id: 314, question: "If pack fails, SD auto displays:", options: ["BLEED", "COND", "HYD", "PRESS"], answer: 1 },
        { id: 315, question: "If engine failure occurs, SD auto displays:", options: ["FUEL", "ENG", "ELEC", "BLEED"], answer: 1 },
        { id: 316, question: "After takeoff, SD auto page is:", options: ["HYD", "ENG", "CRUISE", "PRESS"], answer: 2 },
        { id: 317, question: "During approach, SD auto page changes to:", options: ["CRUISE", "WHEEL", "ENG", "FUEL"], answer: 1 },
        { id: 318, question: "If multiple warnings occur simultaneously:", options: ["First come first served", "Highest priority displayed first", "Random order", "Engine first always"], answer: 1 },
        { id: 319, question: "ECAM actions follow order:\n1. Identify\n2. Confirm\n3. Act\n4. Monitor", options: ["1,2,3,4", "2,3,1,4", "1,3,2,4", "4,1,2,3"], answer: 0 },
        { id: 320, question: "If pilot presses CLR button:", options: ["Erases warning permanently", "Clears caution after action", "Deletes memory item", "Resets FMGC"], answer: 1 },
        { id: 321, question: "Memo messages are:", options: ["Warnings", "Advisories", "Status indications (green)", "Failures"], answer: 2 },
        { id: 322, question: "Example of memo message:", options: ["ENG FIRE", "SEAT BELTS ON", "HYD LO PR", "CAB ALT"], answer: 1 },
        { id: 323, question: "Status page shows:", options: ["Active warning", "Deferred maintenance items", "Consequences of failures", "Engine parameters"], answer: 2 },
        { id: 324, question: "FMA is located on:", options: ["ND", "ECAM", "Top of PFD", "Lower SD"], answer: 2 },
        { id: 325, question: "FMA has how many columns?", options: ["3", "4", "5", "6"], answer: 2 },
        { id: 326, question: "Column 1 of FMA displays:", options: ["Lateral mode", "Autothrust mode", "Vertical mode", "Approach capability"], answer: 1 },
        { id: 327, question: "Column 2 displays:", options: ["Autothrust", "Lateral mode", "Vertical mode", "Minimums"], answer: 2 },
        { id: 328, question: "Column 3 displays:", options: ["Lateral mode", "Vertical mode", "Autothrust", "Radio altitude"], answer: 0 },
        { id: 329, question: "Column 4 displays:", options: ["Approach capability", "Autothrust", "FD status", "ECAM"], answer: 0 },
        { id: 330, question: "Mode changes on FMA are highlighted for approximately:", options: ["1 sec", "3 sec", "5 sec", "10 sec"], answer: 2 }
    ]
};
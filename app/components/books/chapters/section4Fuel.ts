// section4Fuel.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 4: Fuel System",
    questions: [
        { id: 71, question: "Total fuel quantity indication is provided by:", options: ["FADEC", "FQI system", "FMGC", "EIU"], answer: 1 },
        { id: 72, question: "Fuel pumps are:", options: ["Engine-driven", "AC powered electric pumps", "DC powered", "Hydraulic"], answer: 1 },
        { id: 73, question: "Each wing tank contains:", options: ["1 pump", "2 pumps", "3 pumps", "4 pumps"], answer: 1 },
        { id: 74, question: "Center tank contains:", options: ["1 pump", "2 pumps", "3 pumps", "4 pumps"], answer: 1 },
        { id: 75, question: "Center tank pumps have priority over wing tank pumps:", options: ["Always", "Only during takeoff", "When center tank fuel present", "Never"], answer: 2 },
        { id: 76, question: "Why do center tank pumps have priority?", options: ["Reduce structural stress", "Maintain CG", "Prevent wing bending relief loss", "Prevent overpressure"], answer: 2 },
        { id: 77, question: "If one wing tank level drops significantly lower than other:\nFuel imbalance limitation is approximately:", options: ["500 kg", "1000 kg", "1500 kg", "2000 kg"], answer: 1 },
        { id: 78, question: "Amber half-box around FOB appears when:", options: ["Total fuel low", "Fuel not usable", "Refueling active", "Crossfeed open"], answer: 1 },
        { id: 79, question: "If FOB shows two dashes on last digits:", options: ["Normal mode", "Degraded FQI mode", "Low fuel", "Crossfeed fault"], answer: 1 },
        { id: 80, question: "In degraded FQI mode, crew should:", options: ["Trust displayed value fully", "Use ECAM FUEL page to identify affected tank", "Reset FMGC", "Shut pumps"], answer: 1 },
        { id: 81, question: "Fuel crossfeed valve is:", options: ["Electrically controlled and hydraulically actuated", "Manually cable operated", "Hydraulically powered", "Pneumatically controlled"], answer: 0 },
        { id: 82, question: "With crossfeed valve OPEN and all pumps ON, fuel will:", options: ["Flow only from left tank", "Flow only from right tank", "Be available to both engines from all tanks", "Shut down center tank"], answer: 2 },
        { id: 83, question: "In normal operation, fuel recirculation occurs when:", options: ["Engine fuel temperature high", "Engine fuel demand low", "Fuel pumps OFF", "Crossfeed open"], answer: 1 },
        { id: 84, question: "Fuel returned from engine goes to:", options: ["Center tank", "Opposite wing tank", "Same wing tank", "Trim tank"], answer: 2 },
        { id: 85, question: "Center tank pumps automatically stop when:", options: ["Wing tank pumps ON", "Center tank low level reached", "Aircraft airborne", "Crossfeed closed"], answer: 1 },
        { id: 86, question: "Why do center tank pumps stop at low level?", options: ["Prevent cavitation", "Prevent pump overheating", "Maintain CG", "Avoid structural damage"], answer: 1 },
        { id: 87, question: "If both center tank pumps fail but fuel remains:", options: ["Fuel unusable", "Fuel transferred automatically", "Scavenge system transfers to wing tank", "Crossfeed required"], answer: 2 },
        { id: 88, question: "The scavenge system transfers fuel from:", options: ["Wing to center", "Center to wing", "One wing to other", "Trim to wing"], answer: 1 },
        { id: 89, question: "Refueling is normally controlled by:", options: ["ECAM panel", "Refuel panel under wing", "FMGC", "FADEC"], answer: 1 },
        { id: 90, question: "Maximum fuel temperature limitation (Jet A-1) is approximately:", options: ["-20°C", "-30°C", "-40°C", "-50°C"], answer: 2 },
        { id: 91, question: "If fuel temperature approaches limit:", options: ["Increase speed", "Descend to warmer air", "Shut center pumps", "Open crossfeed"], answer: 1 },
        { id: 92, question: "Low fuel warning triggers when fuel per wing tank is approximately:", options: ["500 kg", "750 kg", "1000 kg", "1500 kg"], answer: 1 },
        { id: 93, question: "If one engine flameout occurs due to fuel starvation:\nMost probable reason:", options: ["Crossfeed open", "Wing tank empty on that side", "Center tank empty", "PTU fault"], answer: 1 },
        { id: 94, question: "Why does A320 not have automatic fuel balancing?", options: ["Weight reduction", "Structural design allows tolerance", "Crew-managed logic preferred", "Simplicity & reliability"], answer: 3 },
        { id: 95, question: "Combination Question:\nIn case of single engine operation:\n1. Crossfeed normally closed\n2. Opposite wing pump supplies engine\n3. Automatic balancing occurs\n4. Manual crossfeed may be required", options: ["1 and 4", "2 and 3", "1 only", "All"], answer: 0 }
    ]
};
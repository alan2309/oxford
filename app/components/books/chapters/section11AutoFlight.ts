// section11AutoFlight.ts
import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Section 11: Auto Flight System (AFS)",
    questions: [
        { id: 221, question: "The A320 Auto Flight System consists of:\n1. FMGC\n2. FCU\n3. FMA\n4. ELAC", options: ["1,2,3", "1,2", "1,2,3,4", "2,3"], answer: 0 },
        { id: 222, question: "Number of FMGCs installed:", options: ["1", "2", "3", "4"], answer: 1 },
        { id: 223, question: "Autopilot engagement minimum height after takeoff is approximately:", options: ["50 ft", "100 ft", "200 ft", "500 ft"], answer: 1 },
        { id: 224, question: "Autopilot maximum engagement speed is limited by:", options: ["VLS", "VMO/MMO", "Flap limit", "Alpha prot"], answer: 1 },
        { id: 225, question: "FD engagement requires:", options: ["AP ON", "A/THR ON", "FD pushbutton ON", "NAV selected"], answer: 2 },
        { id: 226, question: "If both FD pushbuttons are OFF:", options: ["Autopilot disconnects", "No FD bars displayed", "A/THR disengages", "FMA blank"], answer: 1 },
        { id: 227, question: "When thrust levers are set to TOGA for takeoff:\nLateral mode becomes:", options: ["NAV", "RWY", "HDG", "GA TRK"], answer: 1 },
        { id: 228, question: "RWY mode requires:", options: ["LOC signal", "Runway in FMGS database", "ILS tuned", "Manual heading input"], answer: 1 },
        { id: 229, question: "If runway not in database, lateral mode after TOGA becomes:", options: ["RWY", "NAV", "RWY TRK", "HDG"], answer: 2 },
        { id: 230, question: "Vertical mode at takeoff thrust application is:", options: ["CLB", "OP CLB", "SRS", "ALT"], answer: 2 },
        { id: 231, question: "SRS mode commands:", options: ["Pitch to maintain V2", "Pitch to maintain VAPP", "Pitch to maintain altitude", "Fixed pitch"], answer: 0 },
        { id: 232, question: "In engine failure at V1, SRS commands:", options: ["VLS", "V2", "Green dot", "VFE"], answer: 1 },
        { id: 233, question: "NAV mode engages automatically after takeoff when:", options: ["100 ft", "400 ft AGL", "1500 ft", "3000 ft"], answer: 1 },
        { id: 234, question: "NAV engagement requires:\n1. Active flight plan\n2. Valid IRS position\n3. HDG selected\n4. LOC signal", options: ["1 and 2", "2 only", "1 only", "All"], answer: 0 },
        { id: 235, question: "CLB mode is:", options: ["Selected mode", "Managed vertical mode", "Direct pitch mode", "Open descent"], answer: 1 },
        { id: 236, question: "OP CLB differs from CLB because:", options: ["Uses selected speed", "Ignores constraints", "Uses managed speed", "Uses FPA"], answer: 1 },
        { id: 237, question: "If selected altitude is lower than aircraft altitude during climb:\nMode reverts to:", options: ["ALT", "V/S", "OP CLB", "DES"], answer: 0 },
        { id: 238, question: "ALT* indicates:", options: ["Altitude hold", "Altitude capture", "Cruise mode", "Direct law"], answer: 1 },
        { id: 239, question: "ALT mode engages when:", options: ["Passing through selected altitude", "Reaching selected altitude", "Below selected altitude", "When AP off"], answer: 1 },
        { id: 240, question: "If pilot pulls altitude knob during climb:\nMode becomes:", options: ["CLB", "OP CLB", "ALT", "V/S"], answer: 1 },
        { id: 241, question: "DES mode follows:", options: ["Selected speed only", "Vertical profile from FMGS", "Constant pitch", "ATC vector"], answer: 1 },
        { id: 242, question: "OP DES ignores:", options: ["Speed", "Constraints", "Selected altitude", "Mach"], answer: 1 },
        { id: 243, question: "If aircraft is above profile in DES:", options: ["Adds thrust", "Increases pitch", "Uses idle + speed increase", "Enters CLB"], answer: 2 },
        { id: 244, question: "LOC mode engages when:", options: ["Within 30 NM", "LOC signal valid & armed", "Glide slope captured", "AP off"], answer: 1 },
        { id: 245, question: "G/S mode captures when:", options: ["From above only", "From below only", "From any direction", "At 1000 ft"], answer: 1 },
        { id: 246, question: "LAND mode indicates:", options: ["Autopilot armed", "CAT II/III capability", "Autoland active", "Manual landing"], answer: 1 },
        { id: 247, question: "FLARE mode activates at approximately:", options: ["100 ft", "50 ft", "30 ft", "20 ft"], answer: 2 },
        { id: 248, question: "ROLL OUT mode activates after:", options: ["Touchdown", "Reverse selection", "100 kt", "Gear down"], answer: 0 },
        { id: 249, question: "A/THR arms when:", options: ["AP ON", "Thrust levers in active range", "FD ON", "NAV active"], answer: 1 },
        { id: 250, question: "Alpha floor triggers:", options: ["Speed high", "AoA high", "Mach low", "Bank > 33°"], answer: 1 },
        { id: 251, question: "A/THR wake-up occurs when:\n1. Speed below target\n2. Alpha prot active\n3. AP OFF\n4. FD OFF", options: ["1 and 2", "3 only", "4 only", "All"], answer: 0 }
    ]
};
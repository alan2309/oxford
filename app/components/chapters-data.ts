import type { ExamData } from "./exam-data"

export interface Chapter {
  id: string
  title: string
  questionCount: number
}

export const chapters: Chapter[] = [
  
  {
    id: "Overview",
    title: "Overview",
    questionCount: 26,
  },
  {
    id: "atmosphere",
    title: "The Atmosphere",
    questionCount: 21,
  },
  {
    id: "aerodynamics",
    title: "Basic Aerodynamics",
    questionCount: 9,
  },
  {
    id: "subsonic",
    title: "Subsonic",
    questionCount: 20,
  },
  {
    id: "lift",
    title: "Lift",
    questionCount: 36,
  },
  {
    id: "drag",
    title: "Drag",
    questionCount: 32,
  },
  {
    id: "stalling",
    title: "Stalling",
    questionCount: 37,
  },
  {
    id: "highlift",
    title: "High Lift ",
    questionCount: 14,
  },
  {
    id: "airframeContamination",
    title: "Airframe Contamination",
    questionCount: 7,
  },
  {
    id: "stability",
    title: "Stability and Control",
    questionCount: 37,
  },
  {
    id: "controls",
    title: "Controls",
    questionCount: 44,
  },
  {
    id: "flightMech",
    title: "Flight Mechanics",
    questionCount: 36,
  },
  {
    id: "highspeedflight",
    title: "High Speed Flight",
    questionCount: 27,
  },
  {
    id: "limitations",
    title: "Limitattions",
    questionCount: 13,
  },
]

// Function to get chapter data by ID
export async function getChapterData(chapterId: string): Promise<ExamData | null> {
  try {
    const mod = await import(`./books/chapters/${chapterId}`);
    return mod.examData;
  } catch (error) {
    console.error(`Failed to load chapter data for ${chapterId}:`, error);
    return null;
  }
}


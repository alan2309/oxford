export interface Question {
  id: number
  question: string
  options: string[]
  answer: number
  image?: string | string[]
}

export interface ExamData {
  title: string
  questions: Question[]
}
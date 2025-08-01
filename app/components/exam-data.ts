export interface Question {
  id: number
  question: string
  options: string[]
  answer: number
}

export interface ExamData {
  title: string
  questions: Question[]
}
"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, RotateCcw, Home, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getChapterData } from "@/app/components/chapters-data"
import type { ExamData } from "@/app/components/exam-data"

export default function ExamPage() {
  const params = useParams()
  const router = useRouter()
  const chapterId = params.chapterId as string

  const [examData, setExamData] = useState<ExamData | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<Array<{ questionId: number; selectedAnswer: number; isCorrect: boolean,ans: number }>>([])
  const [examCompleted, setExamCompleted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadExamData = async () => {
      try {
        const data = await getChapterData(chapterId)
        if (data) {
          setExamData(data)
        } else {
          router.push("/")
        }
      } catch (error) {
        console.error("Error loading exam data:", error)
        router.push("/")
      } finally {
        setLoading(false)
      }
    }

    loadExamData()
  }, [chapterId, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <Card className="w-96">
          <CardContent className="flex items-center justify-center p-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400">Loading exam...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!examData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <Card className="w-96">
          <CardContent className="text-center p-8">
            <p className="text-red-600 dark:text-red-400 mb-4">Exam not found</p>
            <Link href="/">
              <Button>Return Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentQuestion = examData.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / examData.questions.length) * 100

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === currentQuestion.answer

    if (isCorrect) {
      setScore(score + 1)
    }

    setAnswers([
      ...answers,
      {
        questionId: currentQuestion.id,
        selectedAnswer,
        isCorrect,
        ans:currentQuestion.answer
      },
    ])

    setShowResult(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < examData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setExamCompleted(true)
    }
  }

  const handleRestartExam = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
    setExamCompleted(false)
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600 dark:text-green-400"
    if (percentage >= 60) return "text-yellow-600 dark:text-yellow-400"
    return "text-red-600 dark:text-red-400"
  }

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return "Excellent! Outstanding performance!"
    if (percentage >= 80) return "Great job! Well done!"
    if (percentage >= 70) return "Good work! Keep it up!"
    if (percentage >= 60) return "Not bad! Room for improvement."
    return "Keep studying! You can do better!"
  }

  if (examCompleted) {
    const percentage = Math.round((score / examData.questions.length) * 100)

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <div className="mx-auto max-w-2xl">
          <Card className="mt-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-green-600 dark:text-green-400">
                Exam Completed! 🎉
              </CardTitle>
              <CardDescription className="text-xl">
                {examData.title} - Your final score: {score} out of {examData.questions.length}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className={`text-6xl font-bold ${getScoreColor(percentage)}`}>{percentage}%</div>
                <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">{getScoreMessage(percentage)}</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Review Your Answers:</h3>
                {examData.questions.map((question, index) => {
                  const userAnswer = answers[index]
                  return (
                    <div
                      key={question.id}
                      className="flex items-center justify-between p-4 rounded-lg border bg-white dark:bg-gray-800"
                    >
                      <div className="flex-1">
                        <p className="font-medium">Question {index + 1}</p>
                        <p className="text-sm text-gray-900 dark:text-gray-900">{question.question}</p><br/>
                        <p className={`text-m text-gray-700 dark:text-gray-700`}>Answer:</p>
                        <p className={`text-sm text-gray-700 dark:text-gray-700`}>{question.options[userAnswer.ans]}</p>
                      </div>
                      {userAnswer.isCorrect ? (
                        <CheckCircle className="h-6 w-6 text-green-500 ml-4" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500 ml-4" />
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button onClick={handleRestartExam} className="flex-1" size="lg">
                <RotateCcw className="mr-2 h-4 w-4" />
                Restart Exam
              </Button>
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent" size="lg">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Chapters
                </Button>
              </Link>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 dark:text-gray-400">Score</div>
              <div className="text-lg font-bold">
                {score}/{examData.questions.length}
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{examData.title}</h1>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>
                Question {currentQuestionIndex + 1} of {examData.questions.length}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="w-full h-2" />
          </div>
        </div>

        {/* Question Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent>
            {!showResult ? (
              <RadioGroup
                value={selectedAnswer?.toString()}
                onValueChange={(value) => handleAnswerSelect(Number.parseInt(value))}
                className="space-y-3"
              >
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-base leading-relaxed">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <div className="space-y-4">
                {/* Result Feedback */}
                <div
                  className={`p-4 rounded-lg border-2 ${
                    selectedAnswer === currentQuestion.answer
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : "border-red-500 bg-red-50 dark:bg-red-900/20"
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-3">
                    {selectedAnswer === currentQuestion.answer ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500" />
                    )}
                    <span className="font-semibold text-lg">
                      {selectedAnswer === currentQuestion.answer ? "Correct!" : "Incorrect"}
                    </span>
                  </div>

                  {selectedAnswer !== currentQuestion.answer && (
                    <p className="text-sm mb-3">
                      <strong>Correct answer:</strong> {currentQuestion.options[currentQuestion.answer]}
                    </p>
                  )}
                </div>

                {/* All Options with Visual Feedback */}
                <div className="space-y-2">
                  {currentQuestion.options.map((option, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border transition-colors ${
                        index === currentQuestion.answer
                          ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                          : index === selectedAnswer && selectedAnswer !== currentQuestion.answer
                            ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                            : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{option}</span>
                        {index === currentQuestion.answer && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {index === selectedAnswer && selectedAnswer !== currentQuestion.answer && (
                          <XCircle className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            {!showResult ? (
              <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null} className="w-full" size="lg">
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} className="w-full" size="lg">
                {currentQuestionIndex < examData.questions.length - 1 ? "Next Question" : "View Results"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

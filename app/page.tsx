"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Trophy, Users, ChevronRight, CheckSquare, X, Save } from "lucide-react"
import { chapters } from "./components/chapters-data"
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { useEffect, useState } from "react";

interface Chapter {
  _id: string;
  title: string;
  status: string;
  book: string;
  index: string;
}

export default function HomePage() {
  const [data, setData] = useState<Chapter[] | null>(null);
  const [checklistOpen, setChecklistOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result.data[0].data);
      }
      catch (err: any) {
        console.error(err?.message || 'An error occurred');
      }
    }
    fetchData();
    
    if (!localStorage.getItem("visitorId")) {
      localStorage.setItem("visitorId", Date.now().toString());
      const params = {
        to_name: "Alankrit",
        from_name: "New user",
        reply_to: "alankritarya25@gmail.com",
        message: "A new user visited the site.",
      };
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID ?? "";
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "";
      const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "";
      const toastId = toast.loading("Sending your message...");
      console.log("Sending email with params:", params, serviceId, templateId, publicKey);
      emailjs
        .send(
          serviceId,
          templateId,
          params,
          {
            publicKey: publicKey,
            limitRate: {
              throttle: 10000,
            },
          }
        ).then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            toast.error("ERROR", {
              id: toastId,
            });
            console.log("FAILED...", error);
          }
        );
    }
  }, [])

  // Sort data by book and then by index number
  const sortedData = data ? [...data].sort((a, b) => {
    // First sort by book name
    if (a.book < b.book) return -1;
    if (a.book > b.book) return 1;
    
    // If same book, sort by index (convert to number for proper numeric sorting)
    return parseInt(a.index) - parseInt(b.index);
  }) : [];

  // Group data by book
  const groupedData = sortedData.reduce((acc, chapter) => {
    if (!acc[chapter.book]) {
      acc[chapter.book] = [];
    }
    acc[chapter.book].push(chapter);
    return acc;
  }, {} as Record<string, Chapter[]>);

  const toggleChapterStatus = (chapterId: string) => {
    if (!data) return;
    
    const updatedData = data.map(chapter => 
      chapter._id === chapterId 
        ? { ...chapter, status: chapter.status === 'true' ? 'false' : 'true' }
        : chapter
    );
    
    setData(updatedData);
  };

  const saveProgress = async () => {
    if (!data) return;
    setIsSaving(true);
    const toastId = toast.loading("Saving your progress...");
    
    try{ const response = await fetch(`/api/data/68d83b4b8172af226ec67659`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
       body: JSON.stringify({ data: data }),
    })
      
      if (!response.ok) {
        throw new Error('Failed to save progress');
      }
      
      const result = await response.json();

      toast.success("Progress saved successfully!", { id: toastId });
    } catch (error) {
      toast.error("Failed to save progress", { id: toastId });
    } finally {
      setIsSaving(false);
    }
  };

  // Check if there are any changes to save
  const hasChanges = data && data.some(chapter => 
    chapter.status === 'true' || chapter.status === 'false'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Toaster richColors={true} />
      
      {/* Floating Checklist */}
      <div className={`fixed right-4 top-4 z-50 transition-all duration-300 ${checklistOpen ? 'w-80' : 'w-14'}`}>
        <Card className="shadow-2xl border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                {checklistOpen && (
                  <CardTitle className="text-lg">Progress Checklist</CardTitle>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setChecklistOpen(!checklistOpen)}
                className="h-8 w-8 p-0"
              >
                {checklistOpen ? <X className="h-4 w-4" /> : <CheckSquare className="h-4 w-4" />}
              </Button>
            </div>
          </CardHeader>
          
          {checklistOpen && (
            <CardContent className="max-h-96 overflow-y-auto">
              {Object.entries(groupedData).map(([book, chapters]) => (
                <div key={book} className="mb-4">
                  <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2 border-b pb-1">
                    {book}
                  </h3>
                  <div className="space-y-1">
                    {chapters.map((chapter) => (
                      <div
                        key={chapter._id}
                        className="flex items-center space-x-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer"
                        onClick={() => toggleChapterStatus(chapter._id)}
                      >
                        <div
                          className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                            chapter.status === 'true'
                              ? 'bg-green-500 border-green-500'
                              : 'border-gray-400'
                          }`}
                        >
                          {chapter.status === 'true' && (
                            <span className="text-white text-xs">✓</span>
                          )}
                        </div>
                        <span className="text-xs flex-1">
                          {chapter.index}. {chapter.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              {sortedData.length > 0 && (
                <div className="mt-4 pt-2 border-t">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    Completed: {sortedData.filter(ch => ch.status === 'true').length} / {sortedData.length}
                  </div>
                  <Button 
                    onClick={saveProgress}
                    disabled={isSaving || !hasChanges}
                    size="sm" 
                    className="w-full"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {isSaving ? "Saving..." : "Save Progress"}
                  </Button>
                </div>
              )}
            </CardContent>
          )}
        </Card>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Oxford Exam Platform</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose from our comprehensive collection of exam chapters. Test your knowledge across different subjects and
            track your progress.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle>Multiple Chapters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Choose from various subjects and topics</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Clock className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <CardTitle>Instant Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Get immediate results and explanations</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle>Score Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Monitor your progress across all chapters</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <CardTitle>Comprehensive</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Detailed explanations for better learning</p>
            </CardContent>
          </Card>
        </div>

        {/* Chapters Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Chapter</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Select a chapter below to start your exam. Each chapter contains carefully curated questions with detailed
              explanations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter,index) => (
              <Card key={chapter.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {index+1}. {chapter.title}
                      </CardTitle>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {chapter.questionCount} Questions
                    </Badge>
                  </div>

                  <Link href={`/exam/${chapter.id}`} className="block">
                    <Button className="w-full group-hover:bg-blue-600 transition-colors">
                      Start {chapter.title} Exam
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Platform Statistics</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {chapters.reduce((total, chapter) => total + chapter.questionCount, 0)}
              </div>
              <p className="text-gray-600 dark:text-gray-400">Total Questions</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{chapters.length}</div>
              <p className="text-gray-600 dark:text-gray-400">Available Chapters</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
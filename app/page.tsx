"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Clock,
  Trophy,
  Users,
  ChevronRight,
  CheckSquare,
  X,
  Save,
  ChevronDown,
  Search,
} from "lucide-react";
import { books } from "./components/chapters-data";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { useEffect, useState, useMemo } from "react";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [openBooks, setOpenBooks] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result.data[0].data);
      } catch (err: unknown) {
        const error = err as Error;
        console.error(error.message || "An error occurred");
      }
    };
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
      console.log(
        "Sending email with params:",
        params,
        serviceId,
        templateId,
        publicKey
      );
      emailjs
        .send(serviceId, templateId, params, {
          publicKey: publicKey,
          limitRate: {
            throttle: 10000,
          },
        })
        .then(
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
  }, []);

  // Filter books and chapters based on search query - using useMemo to prevent unnecessary recalculations
  const filteredBooks = useMemo(() => {
    return books
      .filter((book) => {
        const matchesBook = book.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesChapters = book.chapters.some((chapter) =>
          chapter.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return matchesBook || matchesChapters;
      })
      .map((book) => ({
        ...book,
        chapters: book.chapters.filter(
          (chapter) =>
            chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }));
  }, [searchQuery]);

  // Auto-open books that have search results - only when searchQuery changes
  useEffect(() => {
    if (searchQuery) {
      const booksWithResults = new Set(filteredBooks.map((book) => book.title));
      setOpenBooks(booksWithResults);
    } else {
      // Only reset if we're not manually keeping any books open
      setOpenBooks(new Set());
    }
  }, [searchQuery]); // Removed filteredBooks from dependencies

  // Sort data by book and then by index number
  const sortedData = data
    ? [...data].sort((a, b) => {
        // First sort by book name
        if (a.book < b.book) return -1;
        if (a.book > b.book) return 1;

        // If same book, sort by index (convert to number for proper numeric sorting)
        return parseInt(a.index) - parseInt(b.index);
      })
    : [];

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

    const updatedData = data.map((chapter) =>
      chapter._id === chapterId
        ? { ...chapter, status: chapter.status === "true" ? "false" : "true" }
        : chapter
    );

    setData(updatedData);
  };

  const saveProgress = async () => {
    if (!data) return;
    setIsSaving(true);
    const toastId = toast.loading("Saving your progress...");

    try {
      const response = await fetch(`/api/data/68d83b4b8172af226ec67659`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data }),
      });

      if (!response.ok) {
        throw new Error("Failed to save progress");
      }

      toast.success("Progress saved successfully!", { id: toastId });
    } catch (error) {
      toast.error(`Failed to save progress-${error}`, { id: toastId });
    } finally {
      setIsSaving(false);
    }
  };

  // Check if there are any changes to save
  const hasChanges =
    data &&
    data.some(
      (chapter) => chapter.status === "true" || chapter.status === "false"
    );

  // Toggle book open/closed
  const toggleBook = (bookTitle: string) => {
    const newOpenBooks = new Set(openBooks);
    if (newOpenBooks.has(bookTitle)) {
      newOpenBooks.delete(bookTitle);
    } else {
      newOpenBooks.add(bookTitle);
    }
    setOpenBooks(newOpenBooks);
  };

  // Calculate total questions and chapters from books data
  const totalQuestions = books.reduce(
    (total, book) =>
      total +
      book.chapters.reduce(
        (bookTotal, chapter) => bookTotal + chapter.questionCount,
        0
      ),
    0
  );

  const totalChapters = books.reduce(
    (total, book) => total + book.chapters.length,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Toaster richColors={true} />

      {/* Floating Checklist */}
      <div
        className={`fixed right-4 top-4 z-50 transition-all duration-300 ${
          checklistOpen ? "w-80" : "w-14"
        }`}
      >
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
                {checklistOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <CheckSquare className="h-4 w-4" />
                )}
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
                            chapter.status === "true"
                              ? "bg-green-500 border-green-500"
                              : "border-gray-400"
                          }`}
                        >
                          {chapter.status === "true" && (
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
                    Completed:{" "}
                    {sortedData.filter((ch) => ch.status === "true").length} /{" "}
                    {sortedData.length}
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
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Oxford Exam Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose from our comprehensive collection of exam chapters. Test your
            knowledge across different subjects and track your progress.
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
              <p className="text-gray-600 dark:text-gray-400">
                Choose from various subjects and topics
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Clock className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <CardTitle>Instant Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Get immediate results and explanations
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle>Score Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Monitor your progress across all chapters
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <CardTitle>Comprehensive</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Detailed explanations for better learning
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search books or chapters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>
          {searchQuery && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
              Found{" "}
              {filteredBooks.reduce(
                (total, book) => total + book.chapters.length,
                0
              )}{" "}
              chapters in {filteredBooks.length} books
            </p>
          )}
        </div>

        {/* Books and Chapters Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Chapter
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Select a chapter below to start your exam. Each chapter contains
              carefully curated questions with detailed explanations.
            </p>
          </div>

          <div className="space-y-4">
            {filteredBooks.map((book) => (
              <Card
                key={book.title}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                {/* Book Header - Clickable */}
                <button
                  onClick={() => toggleBook(book.title)}
                  className="w-full text-left p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BookOpen className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {book.title}
                      </h3>
                      <Badge variant="secondary" className="ml-3">
                        {book.chapters.length} chapters
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {openBooks.has(book.title) ? "Hide" : "Show"} chapters
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          openBooks.has(book.title) ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Collapsible Chapters */}
                {openBooks.has(book.title) && (
                  <div className="p-6 pt-0 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {book.chapters.map((chapter) => (
                        <Card
                          key={chapter.id}
                          className="hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                        >
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <CardTitle className="text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {chapter.title}
                                </CardTitle>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  {chapter.questionCount} Questions
                                </p>
                              </div>
                              <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors mt-1" />
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <Button
                              className="w-full group-hover:bg-blue-600 transition-colors"
                              size="sm"
                              disabled={chapter.questionCount === 0}
                            >
                              {chapter.questionCount === 0 ? (
                                "No Questions Available"
                              ) : (
                                <Link
                                  href={`/exam/${chapter.id}`}
                                  className="flex items-center justify-center"
                                >
                                  Start Exam
                                  <ChevronRight className="ml-2 h-4 w-4" />
                                </Link>
                              )}
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}

            {filteredBooks.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No books or chapters match your search for &ldquo;
                  {searchQuery}&rdquo;
                </p>
                <Button
                  onClick={() => setSearchQuery("")}
                  variant="outline"
                  className="mt-4"
                >
                  Clear search
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Platform Statistics
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {totalQuestions}
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Total Questions
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {totalChapters}
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Available Chapters
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

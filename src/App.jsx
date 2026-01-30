import { BookOpen, PlayCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">CodeForMe</h1>

      <p className="max-w-xl text-center text-lg opacity-90 mb-10">
        Learn Python and CSS through short video lessons, practice, and progress —
        inspired by Duolingo and Khan Academy.
      </p>

      <div className="flex gap-6">
        <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          <BookOpen /> Start Learning
        </button>

        <button className="flex items-center gap-2 bg-black/30 px-6 py-3 rounded-xl hover:scale-105 transition">
          <PlayCircle /> Watch Intro
        </button>
      </div>
    </div>
  );
}


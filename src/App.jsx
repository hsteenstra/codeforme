import { useState } from "react";
import { PlayCircle, CheckCircle, BookOpen, Users } from "lucide-react";

export default function App() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      id: 1,
      language: "Python",
      title: "Intro to Python",
      video: "https://www.example.com/python.mp4",
      description: "Learn variables, printing, and logic."
    },
    {
      id: 2,
      language: "CSS",
      title: "CSS Basics",
      video: "https://www.example.com/css.mp4",
      description: "Style websites with colors and layouts."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      <nav className="flex items-center justify-between p-6">
        <h1 className="text-3xl font-bold">CodeForMe</h1>
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <BookOpen size={18} /> Learn
          </span>
          <span className="flex items-center gap-2">
            <Users size={18} /> Teacher
          </span>
        </div>
      </nav>

      <main className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Lessons</h2>
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              onClick={() => setSelectedLesson(lesson)}
              className="cursor-pointer bg-white/20 hover:bg-white/30 transition rounded-xl p-4 mb-4"
            >
              <h3 className="text-xl font-bold">{lesson.title}</h3>
              <p className="opacity-80">{lesson.language}</p>
            </div>
          ))}
        </section>

        <section className="bg-white/10 rounded-2xl p-8 shadow-xl">
          {selectedLesson ? (
            <>
              <h2 className="text-2xl font-bold mb-2">
                {selectedLesson.title}
              </h2>
              <p className="mb-4 opacity-90">
                {selectedLesson.description}
              </p>
              <video controls className="rounded-xl w-full mb-4">
                <source src={selectedLesson.video} />
              </video>
              <button className="flex items-center gap-2 bg-green-400 text-black px-4 py-2 rounded-xl font-semibold">
                <CheckCircle size={18} /> Mark Complete
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full opacity-80">
              <PlayCircle size={64} />
              <p className="mt-4">Select a lesson to begin</p>
            </div>
          )}
        </section>
      </main>

      <footer className="text-center p-6 opacity-70">
        Built with ❤️ for learners
      </footer>
    </div>
  );
}

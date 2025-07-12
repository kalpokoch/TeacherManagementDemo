import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

export function UpcomingLessonsCard() {
  const lessons = [
    {
      id: 1,
      date: "Wed, May 14",
      time: "10:00 AM",
      subject: "Math",
      grade: "Grade 10",
    },
    {
      id: 2,
      date: "Wed, May 14",
      time: "2:00 PM",
      subject: "Science",
      grade: "Grade 9",
    },
    {
      id: 3,
      date: "Thu, May 15",
      time: "9:00 AM",
      subject: "English",
      grade: "Grade 11",
    },
  ];

  return (
    <Card className="card-hover min-h-[200px] rounded-2xl overflow-hidden" style={{ backgroundColor: '#FDFEFD', boxShadow: '0 4px 6px -1px rgba(179, 184, 176, 0.1), 0 2px 4px -1px rgba(179, 184, 176, 0.06)' }}>
      <div className="p-6 h-full">
        <h3 className="text-lg font-semibold mb-4" style={{ color: '#607267' }}>Upcoming Lessons</h3>
        <div className="space-y-3">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <Calendar className="w-4 h-4 flex-shrink-0" style={{ color: '#607267' }} />
              <div className="flex-1">
                <div className="text-sm font-medium" style={{ color: '#2F2F30' }}>
                  {lesson.date} — {lesson.time}
                </div>
                <div className="text-xs" style={{ color: '#607267' }}>
                  {lesson.subject} ({lesson.grade})
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiClock, FiMapPin } from "react-icons/fi";

export const Route = createFileRoute("/news-events")({
  component: NewsEventsPage,
});

function NewsEventsPage() {
  const news = [
    {
      img: "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?auto=format&fit=crop&w=600&q=80",
      date: "May 12, 2026",
      category: "Achievement",
      title: "INFANT JESUS NURSERY AND PRIMARY SCHOOL Students Win National Robotics Championship",
      excerpt: "Our primary school team brought home the gold from this year's national finals after building an automated sorting machine.",
    },
    {
      img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80",
      date: "April 28, 2026",
      category: "Campus",
      title: "New Interactive Discovery Lab Opens",
      excerpt: "A dedicated facility for primary students to explore basic science, environmental studies, and introductory coding.",
    },
    {
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
      date: "April 14, 2026",
      category: "Academics",
      title: "Class 5 Graduates Secure Top School Admissions",
      excerpt: "100% of our Class 5 graduates have been admitted to top-tier middle schools across the region for the upcoming academic year.",
    },
    {
      img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
      date: "March 30, 2026",
      category: "Arts",
      title: "Annual Spring Art Exhibition",
      excerpt: "Students from UKG to Class 5 showcased their creative masterpieces to parents and local artists.",
    }
  ];

  const events = [
    { day: "08", month: "Jun", name: "Open House & Campus Tour", time: "10:00 AM - 12:00 PM", location: "Main Auditorium" },
    { day: "15", month: "Jun", name: "Spring Arts Showcase", time: "6:30 PM - 8:30 PM", location: "School Theater" },
    { day: "22", month: "Jun", name: "Parent-Teacher Conference", time: "9:00 AM - 3:00 PM", location: "Classrooms" },
    { day: "30", month: "Jun", name: "Summer Sports Camp Begins", time: "9:00 AM", location: "Sports Complex" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 sm:pt-24 pb-12 sm:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">News & Events</h1>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-[#475569] max-w-3xl mx-auto px-2">
            Stay updated with the latest happenings, achievements, and upcoming activities at INFANT JESUS NURSERY AND PRIMARY SCHOOL.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6 sm:mb-8">Latest News</h2>
            <div className="space-y-6 sm:space-y-8">
              {news.map((n, i) => (
                <article
                  key={i}
                  className="group flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="sm:w-2/5 overflow-hidden">
                    <img
                      src={n.img}
                      alt={n.title}
                      className="w-full h-48 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="sm:w-3/5 p-4 sm:p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#F59E0B] px-2 py-1 rounded-md">
                        {n.category}
                      </span>
                      <span className="text-sm font-medium text-[#475569] flex items-center gap-1">
                        <FiCalendar /> {n.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#F59E0B] transition-colors">
                      {n.title}
                    </h3>
                    <p className="text-[#475569] mb-4 line-clamp-2">{n.excerpt}</p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] hover:text-[#F59E0B] transition-colors mt-auto"
                    >
                      Read full story <FiArrowRight />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            {/* Upcoming Events */}
            <div className="bg-[#0F172A] rounded-2xl p-5 sm:p-6 md:p-8 text-white mb-6 sm:mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FiCalendar className="text-[#F59E0B]" /> Upcoming Events
              </h3>
              <ul className="space-y-6">
                {events.map((e, i) => (
                  <li key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center justify-center bg-white/10 rounded-xl p-3 min-w-[70px] text-center border border-white/5 group-hover:bg-[#F59E0B] group-hover:border-[#F59E0B] transition-colors">
                      <span className="text-2xl font-bold leading-none">{e.day}</span>
                      <span className="text-xs font-medium uppercase tracking-wider mt-1">{e.month}</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-lg leading-tight mb-1 group-hover:text-[#F59E0B] transition-colors">{e.name}</h4>
                      <div className="text-sm text-white/70 flex items-center gap-1 mb-0.5">
                        <FiClock size={12} /> {e.time}
                      </div>
                      <div className="text-sm text-white/70 flex items-center gap-1">
                        <FiMapPin size={12} /> {e.location}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 py-3 border border-white/20 rounded-full font-medium hover:bg-white hover:text-[#0F172A] transition-colors">
                View Full Calendar
              </button>
            </div>

            {/* Announcements */}
            <div className="bg-[#F59E0B]/10 rounded-2xl p-5 sm:p-6 md:p-8 border border-[#F59E0B]/20">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Important Announcements</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-[#F59E0B]/20">
                  <span className="text-xs font-bold text-[#F59E0B] uppercase">Reminder</span>
                  <p className="text-[#0F172A] font-medium mt-1">Winter uniform policies take effect starting November 1st.</p>
                </div>
                <div className="pb-4 border-b border-[#F59E0B]/20">
                  <span className="text-xs font-bold text-[#F59E0B] uppercase">Notice</span>
                  <p className="text-[#0F172A] font-medium mt-1">PTA general meeting scheduled for next Wednesday in the main hall.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F59E0B] uppercase">Update</span>
                  <p className="text-[#0F172A] font-medium mt-1">Bus route #4 timing has been adjusted by 10 minutes.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}

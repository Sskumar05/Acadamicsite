import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaFutbol, FaPalette, FaMusic, FaLaptop, FaCalendarAlt, FaGlobe, FaPuzzlePiece } from "react-icons/fa";

export const Route = createFileRoute("/activities")({
  component: ActivitiesPage,
});

function ActivitiesPage() {
  const activitiesList = [
    {
      img: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=800&q=80",
      label: "Sports",
      icon: <FaFutbol />,
      desc: "Expansive playgrounds and courts for physical development and team sports.",
      h: "h-72",
    },
    {
      img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80",
      label: "Arts & Crafts",
      icon: <FaPalette />,
      desc: "Dedicated studios to nurture creativity and artistic expression.",
      h: "h-96",
    },
    {
      img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      label: "Music & Dance",
      icon: <FaMusic />,
      desc: "Soundproofed rooms equipped for performing arts and cultural activities.",
      h: "h-80",
    },
    {
      img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      label: "Smart Classroom Activities",
      icon: <FaLaptop />,
      desc: "Technology-integrated learning environments for interactive education.",
      h: "h-72",
    },
    {
      img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      label: "Student Events",
      icon: <FaCalendarAlt />,
      desc: "Regular engaging events that build community and school spirit.",
      h: "h-80",
    },
    {
      img: "https://images.unsplash.com/photo-1522008342704-6b265b543c46?auto=format&fit=crop&w=800&q=80",
      label: "Cultural Programs",
      icon: <FaGlobe />,
      desc: "Celebrating diversity and heritage through organized cultural festivities.",
      h: "h-72",
    },
    {
      img: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=800&q=80",
      label: "Extracurricular Activities",
      icon: <FaPuzzlePiece />,
      desc: "A wide variety of clubs and hobbies that cater to every student's interests.",
      h: "h-80",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0F172A] md:text-5xl lg:text-6xl">Activities</h1>
          <p className="mt-4 text-xl text-[#475569] max-w-3xl mx-auto">
            A vibrant community of learners, artists, athletes, and young explorers.
          </p>
        </div>

        {/* Intro */}
        <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">More Than Just Academics</h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-4">
              At Infant Jesus Nursery and Primary School, we believe that education extends far beyond the four walls of a classroom. Our varied activities are designed to provide a holistic environment where primary students can discover their passions, build lifelong friendships, and develop essential life skills.
            </p>
            <p className="text-[#475569] text-lg leading-relaxed">
              From our expansive playgrounds for sports to our specialized arts studios and cultural events, every activity is an opportunity for learning and personal growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80" alt="Students playing" className="rounded-2xl h-48 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1603354350317-6f7aaaa2d145?auto=format&fit=crop&w=400&q=80" alt="Student learning" className="rounded-2xl h-48 w-full object-cover mt-8" />
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-12 text-center">Our Activities</h2>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {activitiesList.map((it) => (
              <div
                key={it.label}
                className={`group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl ${it.h}`}
              >
                <img
                  src={it.img}
                  alt={it.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent transition-all duration-300 group-hover:bg-[#0F172A]/50" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 text-white mb-2">
                    <div className="text-2xl text-[#F59E0B]">{it.icon}</div>
                    <h3 className="text-xl font-bold">{it.label}</h3>
                  </div>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    {it.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

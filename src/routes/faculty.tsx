import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const Route = createFileRoute("/faculty")({
  component: FacultyPage,
});

function FacultyPage() {
  const leadership = [
    {
      name: "Dr. Eleanor Pierce",
      title: "Head of School",
      edu: "Ph.D., Harvard University",
      img: "https://i.pravatar.cc/300?img=49",
      bio: "With over 20 years of experience in educational leadership, Dr. Pierce is dedicated to fostering an environment where every primary student can thrive."
    },
    {
      name: "Mr. Jonathan Reyes",
      title: "Director of Academics",
      edu: "M.Ed., Stanford",
      img: "https://i.pravatar.cc/300?img=14",
      bio: "Mr. Reyes oversees the primary curriculum, ensuring it remains dynamic, engaging, and aligned with global best practices."
    }
  ];

  const team = [
    {
      name: "Ms. Priya Sharma",
      title: "Head of Kindergarten",
      edu: "M.A. Early Childhood Education",
      img: "https://i.pravatar.cc/300?img=44",
    },
    {
      name: "Mr. David Okafor",
      title: "Athletics Director",
      edu: "B.S. Physical Education",
      img: "https://i.pravatar.cc/300?img=15",
    },
    {
      name: "Mrs. Sarah Jenkins",
      title: "Lead Teacher (Class 1-2)",
      edu: "B.Ed. Elementary Education",
      img: "https://i.pravatar.cc/300?img=5",
    },
    {
      name: "Mr. Michael Chang",
      title: "Arts Coordinator",
      edu: "M.F.A. Visual Arts",
      img: "https://i.pravatar.cc/300?img=11",
    },
    {
      name: "Ms. Linda Roberts",
      title: "Lead Teacher (Class 3-5)",
      edu: "M.Ed. Curriculum Design",
      img: "https://i.pravatar.cc/300?img=9",
    },
    {
      name: "Mr. James Wilson",
      title: "Music Director",
      edu: "B.Mus.",
      img: "https://i.pravatar.cc/300?img=12",
    },
    {
      name: "Dr. Emily Chen",
      title: "School Counselor",
      edu: "Psy.D. Child Psychology",
      img: "https://i.pravatar.cc/300?img=20",
    },
    {
      name: "Ms. Rachel Green",
      title: "Librarian",
      edu: "M.L.I.S.",
      img: "https://i.pravatar.cc/300?img=24",
    },
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
          <h1 className="text-3xl font-bold text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">Our Faculty</h1>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-[#475569] max-w-3xl mx-auto px-2">
            Meet the dedicated educators and leaders who inspire our students every day.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-8 sm:mb-12 text-center">Leadership Team</h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto">
            {leadership.map((leader, i) => (
              <div key={i} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-lg border border-gray-100 flex flex-col items-center">
                <img src={leader.img} alt={leader.name} className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#F59E0B] mb-4 sm:mb-6 shadow-md" />
                <h3 className="text-2xl font-bold text-[#0F172A] mb-1">{leader.name}</h3>
                <h4 className="text-lg text-[#F59E0B] font-medium mb-3">{leader.title}</h4>
                <p className="text-sm text-[#475569] font-medium uppercase tracking-wider mb-6">{leader.edu}</p>
                <p className="text-[#475569] leading-relaxed mb-6">{leader.bio}</p>
                <div className="flex gap-4 mt-auto">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#475569] hover:bg-[#F59E0B] hover:text-white transition-colors">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#475569] hover:bg-[#F59E0B] hover:text-white transition-colors">
                    <FiMail />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Staff */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-8 sm:mb-12 text-center">Teaching & Support Staff</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {team.map((p, i) => (
              <div
                key={p.name}
                className="group rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 text-center shadow-sm transition-all hover:border-[#F59E0B] hover:shadow-xl"
              >
                <div className="mx-auto h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full ring-4 ring-[#F8FAFC] transition group-hover:ring-[#F59E0B]/30">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-3 sm:mt-5 text-sm sm:text-lg font-bold text-[#0F172A]">{p.name}</h3>
                <div className="text-xs sm:text-sm font-medium text-[#F59E0B] mb-1">{p.title}</div>
                <div className="text-[10px] sm:text-xs text-[#475569]">{p.edu}</div>
                <div className="mt-3 sm:mt-5 flex justify-center gap-2 sm:gap-3 text-[#475569]">
                  <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 hover:text-[#F59E0B] transition-colors">
                    <FaLinkedinIn size={14} />
                  </a>
                  <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 hover:text-[#F59E0B] transition-colors">
                    <FaTwitter size={14} />
                  </a>
                  <a href="#" aria-label="Email" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 hover:text-[#F59E0B] transition-colors">
                    <FiMail size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

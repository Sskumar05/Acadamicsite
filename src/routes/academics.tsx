import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaBookOpen, FaPalette, FaFlask, FaLaptopCode, FaHandsHelping, FaShapes } from "react-icons/fa";

export const Route = createFileRoute("/academics")({
  component: AcademicsPage,
});

function AcademicsPage() {
  const programs = [
    {
      icon: <FaShapes />,
      title: "Lower Kindergarten (LKG)",
      desc: "Building strong foundational skills through play-based learning, social interaction, and curiosity-driven exploration.",
      highlights: ["Phonics & Alphabet", "Numbers 1-20", "Motor Skills", "Social Play"],
    },
    {
      icon: <FaPalette />,
      title: "Upper Kindergarten (UKG)",
      desc: "Developing early literacy, numeracy, and creative expression in a nurturing and engaging environment.",
      highlights: ["Reading Readiness", "Basic Addition", "Creative Arts", "Environmental Awareness"],
    },
    {
      icon: <FaFlask />,
      title: "Primary (Classes 1-5)",
      desc: "Fostering critical thinking, academic excellence, and character building through a comprehensive and dynamic curriculum.",
      highlights: ["Language Arts", "Mathematics & Science", "Social Studies", "Information Technology"],
    },
  ];

  const methodologies = [
    { title: "Experiential Learning", icon: <FaHandsHelping />, desc: "Hands-on activities that connect classroom learning to the real world." },
    { title: "Integrated Curriculum", icon: <FaBookOpen />, desc: "Connecting subjects to provide a holistic understanding of concepts." },
    { title: "Technology Enabled", icon: <FaLaptopCode />, desc: "Interactive smart boards and age-appropriate tech tools to enhance learning." },
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
          <h1 className="text-4xl font-bold text-[#0F172A] md:text-5xl lg:text-6xl">Academics</h1>
          <p className="mt-4 text-xl text-[#475569] max-w-3xl mx-auto">
            A rigorous, future-ready curriculum tailored for early childhood and primary education.
          </p>
        </div>

        {/* Curriculum Overview */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Curriculum Overview</h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-6">
              Our curriculum is designed to stimulate intellectual curiosity and foster a love for learning. By integrating best global practices with national standards, we provide a balanced education that addresses the academic, physical, emotional, and social development of each child.
            </p>
            <p className="text-[#475569] text-lg leading-relaxed">
              We focus on building strong foundations in literacy and numeracy while encouraging creativity, critical thinking, and problem-solving skills necessary for the 21st century.
            </p>
          </div>
        </div>

        {/* Programs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-12 text-center">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#F59E0B] transition-colors group">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F59E0B]/10 text-3xl text-[#F59E0B] group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{p.title}</h3>
                <p className="text-[#475569] mb-6">{p.desc}</p>
                <ul className="space-y-2">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="flex items-center text-sm font-medium text-[#0F172A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mr-2"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Methodology */}
        <div className="mb-20 bg-[#F8FAFC] rounded-3xl p-8 md:p-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-12 text-center">Teaching Methodology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {methodologies.map((m, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto h-20 w-20 bg-white rounded-full flex items-center justify-center text-3xl text-[#F59E0B] shadow-sm mb-6">
                  {m.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{m.title}</h3>
                <p className="text-[#475569]">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

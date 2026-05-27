import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaGraduationCap, FaChalkboardTeacher, FaGlobe, FaMedal } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const [val, setVal] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    const unsub = rounded.on("change", setVal);
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, count, rounded]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function AboutPage() {
  const stats = [
    { value: 25, label: "Years of Excellence" },
    { value: 850, label: "Students" },
    { value: 95, label: "Faculty" },
    { value: 3000, label: "Alumni Worldwide" },
  ];

  const values = [
    { title: "Excellence", icon: <FaMedal />, desc: "Striving for the highest standards in all endeavors." },
    { title: "Integrity", icon: <FaChalkboardTeacher />, desc: "Acting with honesty and strong moral principles." },
    { title: "Global Perspective", icon: <FaGlobe />, desc: "Understanding and respecting diverse cultures." },
    { title: "Lifelong Learning", icon: <FaGraduationCap />, desc: "Fostering a continuous passion for knowledge." }
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
          <h1 className="text-4xl font-bold text-[#0F172A] md:text-5xl lg:text-6xl">About Us</h1>
          <p className="mt-4 text-xl text-[#475569] max-w-3xl mx-auto">
            Discover the rich history, values, and vision that make Arulmigu Korakkar Nursery and Primary School a leading institution in primary education.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="border-l-4 border-[#F59E0B] pl-6 mb-6">
              <h3 className="text-2xl font-bold text-[#0F172A]">Our Mission</h3>
            </div>
            <p className="text-[#475569] text-lg leading-relaxed">
              To inspire curious minds, nurture compassionate hearts, and prepare confident
              leaders ready to shape a better world starting from their foundational years.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="border-l-4 border-[#F59E0B] pl-6 mb-6">
              <h3 className="text-2xl font-bold text-[#0F172A]">Our Vision</h3>
            </div>
            <p className="text-[#475569] text-lg leading-relaxed">
              To be the most innovative and globally respected primary institution, where every
              student discovers their unique potential in a supportive and enriching environment.
            </p>
          </div>
        </div>

        {/* History */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" alt="School History" className="rounded-2xl shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Our History</h2>
              <p className="text-[#475569] text-lg leading-relaxed mb-4">
                Founded in 2000, Arulmigu Korakkar Nursery and Primary School started with a vision to revolutionize early childhood and primary education. Over the past two decades, we have grown from a small community school into a premier educational institution recognized for excellence.
              </p>
              <p className="text-[#475569] text-lg leading-relaxed">
                Our journey has been marked by continuous innovation in curriculum development, facility enhancements, and a steadfast commitment to our core values, making us the preferred choice for discerning parents.
              </p>
            </div>
          </div>
        </div>

        {/* Principal's Message */}
        <div className="bg-[#0F172A] text-white rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <img src="https://i.pravatar.cc/300?img=49" alt="Principal" className="w-48 h-48 rounded-full border-4 border-[#F59E0B] mx-auto object-cover" />
              <div className="text-center mt-4">
                <h4 className="text-xl font-bold">Dr. Eleanor Pierce</h4>
                <p className="text-[#F59E0B]">Principal</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">A Message from the Principal</h3>
              <p className="text-lg text-white/90 italic leading-relaxed">
                "Welcome to Arulmigu Korakkar Nursery and Primary School. We believe that the primary years are the most crucial in a child's development. Our dedicated faculty and innovative curriculum ensure that every child receives the attention, inspiration, and tools they need to flourish both academically and personally. We invite you to join our vibrant community."
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl text-[#F59E0B] mb-4 flex justify-center">{v.icon}</div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-2">{v.title}</h4>
                <p className="text-[#475569]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl font-bold text-[#0F172A] md:text-5xl">
                <span className="text-[#F59E0B]">
                  <Counter to={s.value} />
                </span>
              </div>
              <div className="mt-2 text-sm font-medium text-[#475569]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import { FaStar, FaBookOpen, FaPalette, FaFlask } from "react-icons/fa";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INFANT JESUS NURSERY AND PRIMARY SCHOOL — Where Excellence Meets Innovation" },
      {
        name: "description",
        content:
          "INFANT JESUS NURSERY AND PRIMARY SCHOOL is a premium private primary school nurturing future leaders through world-class academics, arts, athletics, and innovation from LKG to Class 5.",
      },
      { property: "og:title", content: "INFANT JESUS NURSERY AND PRIMARY SCHOOL — Premium Private Primary School" },
      {
        property: "og:description",
        content: "World-class early childhood and primary education that shapes future leaders.",
      },
    ],
  }),
  component: Index,
});

function FloatingShape({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/75 to-[#0F172A]/90" />

      <FloatingShape className="left-10 top-24 h-24 w-24 bg-[#F59E0B]/20 blur-2xl" />
      <FloatingShape className="right-20 top-40 h-40 w-40 bg-[#F59E0B]/10 blur-3xl" delay={2} />
      <FloatingShape className="bottom-32 left-1/3 h-32 w-32 bg-white/10 blur-2xl" delay={4} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white mt-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-4 py-1.5 text-sm font-medium text-[#F59E0B]"
        >
          Est. 2000 · Accredited Primary Private School
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Where Excellence <span className="text-[#F59E0B]">Meets</span> Innovation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl"
        >
          Discover a world-class education that shapes future leaders through inquiry, character,
          and creativity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/admissions"
            className="rounded-full bg-[#F59E0B] px-8 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#d98708]"
          >
            Apply Now
          </Link>
          <Link
            to="/activities"
            className="rounded-full border-2 border-white px-8 py-3.5 font-semibold text-white transition-all hover:scale-105 hover:bg-white hover:text-[#0F172A]"
          >
            Explore Activities
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <FiChevronDown size={32} />
      </motion.div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-aos="fade-up">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
              About INFANT JESUS NURSERY AND PRIMARY SCHOOL
            </span>
            <h2 className="mt-3 text-4xl font-bold text-[#0F172A] md:text-5xl">
              Shaping minds, building character
            </h2>
            <p className="mt-6 text-lg text-[#475569] leading-relaxed">
              For over two decades, INFANT JESUS NURSERY AND PRIMARY SCHOOL has been a beacon of academic excellence and
              holistic development. Our primary focus is on nurturing young minds from LKG to Class 5, providing them with a strong foundation for their future academic journeys.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0F172A] hover:text-[#F59E0B] transition-colors"
            >
              Discover Our Story <FiArrowRight />
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" alt="Students learning" className="rounded-2xl shadow-xl w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AcademicsPreview() {
  const programs = [
    {
      icon: <FaBookOpen />,
      title: "Lower Kindergarten",
      grade: "LKG",
      desc: "Building strong foundational skills through play-based learning and curiosity-driven exploration.",
    },
    {
      icon: <FaPalette />,
      title: "Upper Kindergarten",
      grade: "UKG",
      desc: "Developing early literacy, numeracy, and creative expression in a nurturing environment.",
    },
    {
      icon: <FaFlask />,
      title: "Primary Classes",
      grade: "Classes 1-5",
      desc: "Fostering critical thinking and academic excellence through a dynamic curriculum.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center" data-aos="fade-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
            Primary Education
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[#0F172A] md:text-5xl">
            Our Academic Programs
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              whileHover={{ scale: 1.02 }}
              className="group rounded-2xl border-2 border-transparent bg-white p-8 shadow-md transition-all hover:border-[#F59E0B] hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#F59E0B]/10 text-2xl text-[#F59E0B]">
                {p.icon}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#F59E0B]">
                {p.grade}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">{p.title}</h3>
              <p className="mt-3 text-[#475569]">{p.desc}</p>
              <Link
                to="/academics"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0F172A] transition group-hover:text-[#F59E0B]"
              >
                Learn More <FiArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivitiesPreview() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4" data-aos="fade-right">
             <img src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=400&q=80" alt="Sports" className="rounded-2xl h-64 w-full object-cover" />
             <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&q=80" alt="Arts" className="rounded-2xl h-64 w-full object-cover mt-8" />
          </div>
          <div data-aos="fade-left">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
              Activities
            </span>
            <h2 className="mt-3 text-4xl font-bold text-[#0F172A] md:text-5xl">
              Activities at Infant Jesus Nursery and Primary School
            </h2>
            <p className="mt-6 text-lg text-[#475569] leading-relaxed">
              More than academics — a vibrant community of artists, athletes, scientists, and dreamers. Our state-of-the-art campus is designed specifically for primary education, ensuring safe, engaging, and inspiring spaces for every child.
            </p>
            <Link
              to="/activities"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0F172A] hover:text-[#F59E0B] transition-colors"
            >
              Explore Our Activities <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const slides = [
    {
      quote:
        "ARULMIGU KORAKKAR NURSERY AND PRIMARY SCHOOL didn't just educate our daughter — it shaped a confident, curious young woman ready for any challenge.",
      name: "Sarah Mitchell",
      role: "Parent of Class 5 Student",
      img: "https://i.pravatar.cc/120?img=47",
    },
    {
      quote:
        "The teachers genuinely care. I've grown more in two years here than I thought possible.",
      name: "Marcus Chen",
      role: "Class 4 Student",
      img: "https://i.pravatar.cc/120?img=12",
    },
    {
      quote:
        "An exceptional community where excellence is the standard and kindness is the culture.",
      name: "Dr. Amelia Foster",
      role: "Alumni Parent",
      img: "https://i.pravatar.cc/120?img=32",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <section className="bg-[#0F172A] py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center" data-aos="fade-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
            Voices
          </span>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            What Our Community Says
          </h2>
        </div>

        <div className="mt-16" data-aos="fade-up">
          <Slider {...settings}>
            {slides.map((s) => (
              <div key={s.name}>
                <div className="px-2 text-center text-white">
                  <div className="mb-6 flex justify-center gap-1 text-[#F59E0B]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="mx-auto max-w-2xl text-xl italic text-white/90 md:text-2xl leading-relaxed">
                    "{s.quote}"
                  </p>
                  <img
                    src={s.img}
                    alt={s.name}
                    className="mx-auto mt-10 h-20 w-20 rounded-full border-4 border-[#F59E0B] object-cover"
                  />
                  <div className="mt-4 font-bold text-lg">{s.name}</div>
                  <div className="text-sm text-white/60">{s.role}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .slick-dots li button:before { color: #F59E0B !important; opacity: 0.4; font-size: 10px; }
        .slick-dots li.slick-active button:before { color: #F59E0B !important; opacity: 1; }
        .slick-dots { bottom: -40px; }
      `}</style>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-[#F59E0B] py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
      <div className="mx-auto max-w-4xl" data-aos="fade-up">
        <h2 className="text-3xl font-bold md:text-5xl mb-6">Ready to Join Infant Jesus Nursery and Primary School?</h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Begin your child's journey towards excellence. Applications are now open for the upcoming academic year.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/admissions"
            className="rounded-full bg-[#0F172A] px-8 py-4 font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            Start Application
          </Link>
          <Link
            to="/contact"
            className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-[#F59E0B]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0F172A]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-[#F59E0B]" />
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F8FAFC] text-[#0F172A]"
    >
      <Hero />
      <AboutPreview />
      <AcademicsPreview />
      <ActivitiesPreview />
      <Testimonials />
      <CTASection />
    </motion.main>
  );
}

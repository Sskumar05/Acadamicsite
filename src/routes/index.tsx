import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowRight,
  FiPlay,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaStar,
  FaGraduationCap,
  FaBookOpen,
  FaUniversity,
  FaFlask,
  FaRobot,
  FaMusic,
  FaTheaterMasks,
  FaPalette,
  FaFutbol,
} from "react-icons/fa";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOVA Academy — Where Excellence Meets Innovation" },
      {
        name: "description",
        content:
          "NOVA Academy is a premium private school nurturing future leaders through world-class academics, arts, athletics, and innovation from K-12.",
      },
      { property: "og:title", content: "NOVA Academy — Premium Private School" },
      {
        property: "og:description",
        content: "World-class K-12 education that shapes future leaders.",
      },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Campus", href: "#campus" },
  { name: "Admissions", href: "#admissions" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className={`flex items-center gap-2 text-2xl font-bold tracking-tight ${
            scrolled ? "text-[#0F172A]" : "text-white"
          }`}
        >
          <FaGraduationCap className="text-[#F59E0B]" />
          NOVA Academy
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-[#F59E0B] ${
                  scrolled ? "text-[#475569]" : "text-white/90"
                }`}
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#admissions"
            className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-[#d98708]"
          >
            Apply Now <FiArrowRight />
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className={`lg:hidden ${scrolled ? "text-[#0F172A]" : "text-white"}`}
          aria-label="Open menu"
        >
          <FiMenu size={28} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-2xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="flex items-center gap-2 text-xl font-bold text-[#0F172A]">
              <FaGraduationCap className="text-[#F59E0B]" /> NOVA
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <FiX size={26} className="text-[#0F172A]" />
            </button>
          </div>
          <ul className="space-y-4">
            {NAV_LINKS.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-[#0F172A] hover:text-[#F59E0B]"
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#admissions"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-white"
          >
            Apply Now
          </a>
        </aside>
      </div>
    </header>
  );
}

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
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
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

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-4 py-1.5 text-sm font-medium text-[#F59E0B]"
        >
          Est. 2000 · Accredited K-12 Private School
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
          <a
            href="#admissions"
            className="rounded-full bg-[#F59E0B] px-8 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#d98708]"
          >
            Apply Now
          </a>
          <a
            href="#campus"
            className="rounded-full border-2 border-white px-8 py-3.5 font-semibold text-white transition-all hover:scale-105 hover:bg-white hover:text-[#0F172A]"
          >
            Explore Campus
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <FiChevronDown size={32} />
      </motion.a>
    </section>
  );
}

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

function About() {
  const stats = [
    { value: 25, label: "Years of Excellence" },
    { value: 850, label: "Students" },
    { value: 95, label: "Faculty" },
    { value: 3000, label: "Alumni Worldwide" },
  ];

  return (
    <section id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-aos="fade-up">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
              About NOVA
            </span>
            <h2 className="mt-3 text-4xl font-bold text-[#0F172A] md:text-5xl">
              Shaping minds, building character
            </h2>
            <p className="mt-4 text-lg text-[#475569]">
              For over two decades, NOVA Academy has been a beacon of academic excellence and
              holistic development.
            </p>

            <div className="mt-8 space-y-6">
              <div className="border-l-4 border-[#F59E0B] pl-6">
                <h3 className="text-xl font-bold text-[#0F172A]">Our Mission</h3>
                <p className="mt-2 text-[#475569]">
                  To inspire curious minds, nurture compassionate hearts, and prepare confident
                  leaders ready to shape a better world.
                </p>
              </div>
              <div className="border-l-4 border-[#F59E0B] pl-6">
                <h3 className="text-xl font-bold text-[#0F172A]">Our Vision</h3>
                <p className="mt-2 text-[#475569]">
                  To be the most innovative and globally respected K-12 institution, where every
                  student discovers their unique potential.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
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
      </div>
    </section>
  );
}

function Academics() {
  const programs = [
    {
      icon: <FaBookOpen />,
      title: "Primary School",
      grade: "K-5",
      desc: "Building strong foundations through play-based learning, literacy, and curiosity-driven exploration.",
    },
    {
      icon: <FaFlask />,
      title: "Middle School",
      grade: "6-8",
      desc: "Critical thinking, STEAM labs, and leadership opportunities that empower young minds.",
    },
    {
      icon: <FaUniversity />,
      title: "High School",
      grade: "9-12",
      desc: "AP & IB pathways, university counseling, and globally recognized academic rigor.",
    },
  ];

  return (
    <section id="academics" className="bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center" data-aos="fade-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
            What We Teach
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[#0F172A] md:text-5xl">
            Our Academic Programs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#475569]">
            A rigorous, future-ready curriculum at every stage of your child's journey.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
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
                Grades {p.grade}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">{p.title}</h3>
              <p className="mt-3 text-[#475569]">{p.desc}</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0F172A] transition group-hover:text-[#F59E0B]"
              >
                Learn More <FiArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CampusLife() {
  const items = [
    {
      img: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=800&q=80",
      label: "Athletics",
      icon: <FaFutbol />,
      h: "h-72",
    },
    {
      img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80",
      label: "Visual Arts",
      icon: <FaPalette />,
      h: "h-96",
    },
    {
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      label: "Science Lab",
      icon: <FaFlask />,
      h: "h-80",
    },
    {
      img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      label: "Robotics",
      icon: <FaRobot />,
      h: "h-72",
    },
    {
      img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      label: "Music",
      icon: <FaMusic />,
      h: "h-80",
    },
    {
      img: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=800&q=80",
      label: "Drama",
      icon: <FaTheaterMasks />,
      h: "h-72",
    },
  ];

  return (
    <section id="campus" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center" data-aos="fade-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
            Campus Life
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[#0F172A] md:text-5xl">Life at NOVA</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#475569]">
            More than academics — a vibrant community of artists, athletes, scientists, and dreamers.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3" data-aos="fade-up">
          {items.map((it) => (
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
              <div className="absolute inset-0 bg-[#F59E0B]/0 transition-all duration-300 group-hover:bg-[#F59E0B]/40" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#0F172A] backdrop-blur">
                {it.icon} {it.label}
              </div>
            </div>
          ))}

          {/* Virtual tour video card */}
          <div className="group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl h-80 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80"
              alt="Virtual campus tour"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0F172A]/60 transition group-hover:bg-[#0F172A]/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F59E0B] text-2xl shadow-xl transition-transform group-hover:scale-110">
                <FiPlay className="ml-1" />
              </div>
              <div className="mt-4 text-lg font-semibold">Take a Virtual Tour</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Admissions() {
  const steps = [
    { t: "Inquiry & Tour", d: "Visit our campus and meet our admissions team." },
    { t: "Application", d: "Submit your online application and required documents." },
    { t: "Assessment", d: "Age-appropriate evaluation and family interview." },
    { t: "Enrollment", d: "Receive your offer and welcome to the NOVA family." },
  ];

  return (
    <section id="admissions" className="bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center" data-aos="fade-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
            Join Us
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[#0F172A] md:text-5xl">Admissions Process</h2>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div data-aos="fade-up">
            <div className="relative space-y-8 pl-12">
              <div className="absolute bottom-2 left-5 top-2 w-0.5 bg-[#E2E8F0]" />
              {steps.map((s, i) => (
                <div key={s.t} className="relative">
                  <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-[#F59E0B] font-bold text-white shadow-md">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">{s.t}</h3>
                  <p className="mt-1 text-[#475569]">{s.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-5 py-3 text-sm font-medium text-[#0F172A]">
              <FaStar className="text-[#F59E0B]" />
              Tuition assistance available — over 30% of families receive aid.
            </div>
          </div>

          <form
            data-aos="fade-up"
            data-aos-delay="100"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We will be in touch shortly.");
            }}
            className="rounded-2xl bg-white p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold text-[#0F172A]">Request Information</h3>
            <p className="mt-1 text-sm text-[#475569]">We'll reply within 24 hours.</p>

            <div className="mt-6 space-y-4">
              <input
                required
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B]"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B]"
              />
              <input
                required
                type="tel"
                placeholder="Phone number"
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B]"
              />
              <select
                required
                defaultValue=""
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B]"
              >
                <option value="" disabled>
                  Child's grade
                </option>
                <option>Kindergarten</option>
                <option>Grades 1-5 (Primary)</option>
                <option>Grades 6-8 (Middle)</option>
                <option>Grades 9-12 (High)</option>
              </select>
              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B]"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-[#F59E0B] py-3.5 font-semibold text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-[#d98708]"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function NewsEvents() {
  const news = [
    {
      img: "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?auto=format&fit=crop&w=600&q=80",
      date: "May 12, 2026",
      title: "NOVA Students Win National Robotics Championship",
      excerpt: "Our middle school team brought home the gold from this year's national finals.",
    },
    {
      img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80",
      date: "April 28, 2026",
      title: "New STEM Innovation Lab Opens",
      excerpt: "A 12,000 sq ft facility for biotech, AI, and engineering exploration.",
    },
    {
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
      date: "April 14, 2026",
      title: "Class of 2026 Secures Ivy League Offers",
      excerpt: "100% of seniors admitted to their top-choice universities.",
    },
  ];

  const events = [
    { day: "08", month: "Jun", name: "Open House & Campus Tour", time: "10:00 AM" },
    { day: "15", month: "Jun", name: "Spring Arts Showcase", time: "6:30 PM" },
    { day: "22", month: "Jun", name: "Parent-Teacher Conference", time: "All Day" },
    { day: "30", month: "Jun", name: "Summer Sports Camp Begins", time: "9:00 AM" },
  ];

  return (
    <section id="news" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center" data-aos="fade-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
            What's New
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[#0F172A] md:text-5xl">News & Events</h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {news.map((n, i) => (
              <article
                key={n.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group flex flex-col gap-6 overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl sm:flex-row"
              >
                <div className="sm:w-2/5">
                  <img
                    src={n.img}
                    alt={n.title}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#F59E0B]">
                    {n.date}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-[#0F172A] group-hover:text-[#F59E0B]">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-[#475569]">{n.excerpt}</p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A]"
                  >
                    Read more <FiArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <aside data-aos="fade-up" data-aos-delay="200">
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#0F172A]">Upcoming Events</h3>
              <ul className="mt-4 space-y-4">
                {events.map((e) => (
                  <li
                    key={e.name}
                    className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-[#F59E0B] text-white">
                      <span className="text-lg font-bold leading-none">{e.day}</span>
                      <span className="text-xs uppercase">{e.month}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#0F172A]">{e.name}</div>
                      <div className="text-xs text-[#475569]">{e.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const slides = [
    {
      quote:
        "NOVA didn't just educate our daughter — it shaped a confident, curious young woman ready for any challenge.",
      name: "Sarah Mitchell",
      role: "Parent of 12th Grader",
      img: "https://i.pravatar.cc/120?img=47",
    },
    {
      quote:
        "The teachers genuinely care. I've grown more in two years here than I thought possible.",
      name: "Marcus Chen",
      role: "Grade 11 Student",
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
    <section className="bg-[#0F172A] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center" data-aos="fade-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
            Voices
          </span>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            What Our Community Says
          </h2>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <Slider {...settings}>
            {slides.map((s) => (
              <div key={s.name}>
                <div className="px-2 text-center text-white">
                  <div className="mb-4 flex justify-center gap-1 text-[#F59E0B]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="mx-auto max-w-2xl text-xl italic text-white/90 md:text-2xl">
                    "{s.quote}"
                  </p>
                  <img
                    src={s.img}
                    alt={s.name}
                    className="mx-auto mt-8 h-20 w-20 rounded-full border-4 border-[#F59E0B] object-cover"
                  />
                  <div className="mt-4 font-bold">{s.name}</div>
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

function Faculty() {
  const team = [
    {
      name: "Dr. Eleanor Pierce",
      title: "Head of School",
      edu: "Ph.D., Harvard University",
      img: "https://i.pravatar.cc/300?img=49",
    },
    {
      name: "Mr. Jonathan Reyes",
      title: "Director of STEM",
      edu: "M.Sc., MIT",
      img: "https://i.pravatar.cc/300?img=14",
    },
    {
      name: "Ms. Priya Sharma",
      title: "Head of Humanities",
      edu: "M.A., Oxford",
      img: "https://i.pravatar.cc/300?img=44",
    },
    {
      name: "Mr. David Okafor",
      title: "Athletics Director",
      edu: "M.Ed., Stanford",
      img: "https://i.pravatar.cc/300?img=15",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center" data-aos="fade-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
            Our People
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[#0F172A] md:text-5xl">Meet Our Educators</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p, i) => (
            <motion.div
              key={p.name}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border-2 border-transparent bg-white p-6 text-center shadow-md transition-all hover:border-[#F59E0B] hover:shadow-xl"
            >
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full ring-4 ring-[#F8FAFC] transition group-hover:ring-[#F59E0B]/30">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#0F172A]">{p.name}</h3>
              <div className="text-sm font-medium text-[#F59E0B]">{p.title}</div>
              <div className="mt-1 text-xs text-[#475569]">{p.edu}</div>
              <div className="mt-4 flex justify-center gap-3 text-[#475569]">
                <a href="#" aria-label="LinkedIn" className="transition hover:text-[#F59E0B]">
                  <FaLinkedinIn />
                </a>
                <a href="#" aria-label="Twitter" className="transition hover:text-[#F59E0B]">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="Email" className="transition hover:text-[#F59E0B]">
                  <FiMail />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0F172A] text-white/80">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <FaGraduationCap className="text-[#F59E0B]" /> NOVA Academy
            </div>
            <p className="mt-4 text-sm">
              A premium K-12 private school nurturing tomorrow's leaders through academic excellence
              and character formation.
            </p>
            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:scale-110 hover:bg-[#F59E0B] hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["About", "Academics", "Admissions", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="transition hover:text-[#F59E0B]">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-[#F59E0B]" /> 1200 Excellence Drive, Boston, MA 02115
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[#F59E0B]" /> +1 (617) 555-0123
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-[#F59E0B]" /> hello@novaacademy.edu
              </li>
              <li>
                <a href="#" className="text-[#F59E0B] hover:underline">
                  View on map →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <p className="mt-4 text-sm">Get monthly updates from our campus.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed!");
              }}
              className="mt-4 flex overflow-hidden rounded-full bg-white/10"
            >
              <input
                required
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none"
              />
              <button
                type="submit"
                className="bg-[#F59E0B] px-5 text-sm font-semibold text-white transition hover:bg-[#d98708]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row">
          <div>© {new Date().getFullYear()} NOVA Academy. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#F59E0B]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#F59E0B]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
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
    <main className="bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <CampusLife />
      <Admissions />
      <NewsEvents />
      <Testimonials />
      <Faculty />
      <Footer />
    </main>
  );
}

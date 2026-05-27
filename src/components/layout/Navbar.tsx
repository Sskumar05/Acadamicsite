import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Activities", href: "/activities" },
  { name: "Admissions", href: "/admissions" },
  { name: "News", href: "/news-events" },
  { name: "Faculty", href: "/faculty" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On home: transparent initially, white on scroll
  // On inner pages: always dark navy
  const showDark = !isHome || !scrolled;
  const bgClass = isHome
    ? scrolled
      ? "bg-white shadow-md"
      : "bg-transparent"
    : "bg-[#0F172A] shadow-md";

  const textClass = isHome && scrolled ? "text-[#0F172A]" : "text-white";
  const linkInactiveClass =
    isHome && scrolled
      ? "text-[#475569] hover:text-[#F59E0B]"
      : "text-white/90 hover:text-[#F59E0B]";
  const mobileToggleClass = isHome && scrolled ? "text-[#0F172A]" : "text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`flex items-center gap-2 text-2xl font-bold tracking-tight ${textClass}`}
        >
          <FaGraduationCap className="text-[#F59E0B]" />
            AK Primary School
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.name}>
              <Link
                to={l.href}
                activeProps={{ className: "text-[#F59E0B] font-bold" }}
                inactiveProps={{
                  className: linkInactiveClass,
                }}
                className="text-sm font-medium transition-colors"
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-[#d98708]"
          >
            Apply Now <FiArrowRight />
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className={`lg:hidden ${mobileToggleClass}`}
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
              <FaGraduationCap className="text-[#F59E0B]" /> ARULMIGU KORAKKAR NURSERY AND PRIMARY SCHOOL
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <FiX size={26} className="text-[#0F172A]" />
            </button>
          </div>
          <ul className="space-y-4">
            {NAV_LINKS.map((l) => (
              <li key={l.name}>
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-[#F59E0B] font-bold" }}
                  inactiveProps={{ className: "text-[#0F172A] hover:text-[#F59E0B]" }}
                  className="block text-base font-medium transition-colors"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/admissions"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-white"
          >
            Apply Now
          </Link>
        </aside>
      </div>
    </header>
  );
}

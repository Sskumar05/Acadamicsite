import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);

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
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          to="/"
          className={`flex items-center gap-2 text-lg sm:text-2xl font-bold tracking-tight ${textClass}`}
        >
          <FaGraduationCap className="text-[#F59E0B] flex-shrink-0" />
          <span className="truncate">Infant Jesus</span>
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
        className={`fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"
            }`}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[85vw] max-w-xs bg-white p-5 sm:p-6 shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="mb-6 flex items-start justify-between gap-3">
            <span className="flex items-center gap-2 text-base font-bold text-[#0F172A] leading-tight">
              <FaGraduationCap className="text-[#F59E0B] flex-shrink-0 text-lg" /> 
              <span className="line-clamp-2">Infant Jesus Nursery & Primary School</span>
            </span>
            <button onClick={closeMenu} aria-label="Close menu" className="flex-shrink-0 p-1">
              <FiX size={24} className="text-[#0F172A]" />
            </button>
          </div>
          <ul className="space-y-4">
            {NAV_LINKS.map((l) => (
              <li key={l.name}>
                <Link
                  to={l.href}
                  onClick={closeMenu}
                  activeProps={{ className: "text-[#F59E0B] font-bold" }}
                  inactiveProps={{ className: "text-[#0F172A] hover:text-[#F59E0B]" }}
                  className="block py-1 text-base font-medium transition-colors"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/admissions"
            onClick={closeMenu}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-white shadow-md"
          >
            Apply Now <FiArrowRight />
          </Link>
        </aside>
      </div>
    </header>
  );
}

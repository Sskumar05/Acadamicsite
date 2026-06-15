import { Link } from "@tanstack/react-router";
import { FaGraduationCap, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0F172A] text-white/80 mt-auto">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <FaGraduationCap className="text-[#F59E0B]" /> IJ Primary School
            </div>
            <p className="mt-4 text-sm">
              A premium private primary school nurturing tomorrow's leaders through academic excellence
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
              {[
                { name: "About", to: "/about" },
                { name: "Academics", to: "/academics" },
                { name: "Activities", to: "/activities" },
                { name: "Admissions", to: "/admissions" },
                { name: "News & Events", to: "/news-events" },
                { name: "Faculty", to: "/faculty" },
                { name: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <Link to={l.to} className="transition hover:text-[#F59E0B]">
                    {l.name}
                  </Link>
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
                <FiMail className="text-[#F59E0B]" /> hello@goodshepherd.edu
              </li>
              <li>
                <Link to="/contact" className="text-[#F59E0B] hover:underline">
                  View on map →
                </Link>
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
          <div>© {new Date().getFullYear()} INFANT JESUS NURSERY AND PRIMARY SCHOOL. All rights reserved.</div>
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

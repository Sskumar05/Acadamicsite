import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: "Our Campus",
      details: ["1200 Excellence Drive", "Boston, MA 02115", "United States"],
    },
    {
      icon: <FiPhone />,
      title: "Phone Numbers",
      details: ["Main Reception: +1 (617) 555-0123", "Admissions: +1 (617) 555-0124", "Emergency: +1 (617) 555-0911"],
    },
    {
      icon: <FiMail />,
      title: "Email Addresses",
      details: ["General: hello@goodshepherd.edu", "Admissions: apply@goodshepherd.edu", "Careers: hr@goodshepherd.edu"],
    },
    {
      icon: <FiClock />,
      title: "School Hours",
      details: ["Monday - Friday", "8:00 AM - 3:30 PM", "Office: 7:30 AM - 4:30 PM"],
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
          <h1 className="text-4xl font-bold text-[#0F172A] md:text-5xl lg:text-6xl">Contact Us</h1>
          <p className="mt-4 text-xl text-[#475569] max-w-3xl mx-auto">
            We would love to hear from you. Reach out to us for any inquiries, admissions information, or to schedule a visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Get In Touch</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F59E0B] text-white text-xl shadow-md">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, j) => (
                        <p key={j} className="text-[#475569]">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Send us a Message</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Your message has been sent successfully!");
                }}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">First Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane"
                      className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Last Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Doe"
                      className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Subject</label>
                  <select
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-[#F59E0B] px-8 py-4 font-bold text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-[#d98708]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Placeholder */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-96 bg-gray-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center text-gray-500">
               <FiMapPin size={48} className="mx-auto mb-4 opacity-50" />
               <p className="font-medium text-lg">Interactive Map Placeholder</p>
               <p className="text-sm">1200 Excellence Drive, Boston, MA 02115</p>
             </div>
          </div>
          <iframe
            title="Google Map"
            className="w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.8442220464245!2d-71.0936173238612!3d42.34586617119289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a1999cf5ce1%3A0xc97b00e66522b98c!2sMuseum%20of%20Fine%20Arts%2C%20Boston!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </motion.div>
  );
}

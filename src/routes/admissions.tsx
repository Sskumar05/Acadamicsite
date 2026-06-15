import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaStar, FaFileAlt, FaCalendarCheck, FaRegComments, FaCheckCircle } from "react-icons/fa";

export const Route = createFileRoute("/admissions")({
  component: AdmissionsPage,
});

function AdmissionsPage() {
  const steps = [
    { icon: <FaRegComments />, t: "1. Inquiry & Campus Tour", d: "Reach out to our admissions team and schedule a personalized tour to experience our vibrant environment." },
    { icon: <FaFileAlt />, t: "2. Application Submission", d: "Complete our online application form and submit the required documentation (birth certificate, past records)." },
    { icon: <FaCalendarCheck />, t: "3. Student Assessment", d: "Age-appropriate interaction or assessment to understand your child's developmental milestones." },
    { icon: <FaCheckCircle />, t: "4. Enrollment & Welcome", d: "Receive your offer letter, complete the enrollment formalities, and join the ARULMIGU KORAKKAR NURSERY AND PRIMARY SCHOOL family." },
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
          <h1 className="text-3xl font-bold text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">Admissions</h1>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-[#475569] max-w-3xl mx-auto px-2">
            Take the first step towards providing your child with a world-class primary education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
          {/* Admissions Process */}
          <div>
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Admission Process</h2>
            <div className="space-y-8">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F59E0B]/10 text-xl text-[#F59E0B]">
                      {s.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">{s.t}</h3>
                    <p className="text-[#475569] leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 inline-flex items-center gap-3 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-[#0F172A]">
              <FaStar className="text-[#F59E0B]" />
              Tuition assistance is available for qualifying families.
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Request Information</h3>
            <p className="text-[#475569] mb-6">Fill out the form below and our admissions office will contact you within 24 hours.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We will be in touch shortly.");
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="Parent's First Name"
                  className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                />
                <input
                  required
                  type="text"
                  placeholder="Parent's Last Name"
                  className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                />
              </div>
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="Child's Name"
                  className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                />
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                >
                  <option value="" disabled>Select Grade Applied For</option>
                  <option>LKG</option>
                  <option>UKG</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                  <option>Class 4</option>
                  <option>Class 5</option>
                </select>
              </div>
              <textarea
                rows={4}
                placeholder="Questions or Comments (Optional)"
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#0F172A] outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-[#F59E0B] py-4 font-semibold text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-[#d98708] mt-2"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6 sm:mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              { q: "What is the age requirement for LKG?", a: "Children must be at least 3.5 years old by the start of the academic year for LKG admission." },
              { q: "What documents are needed for admission?", a: "You will need the child's birth certificate, recent passport-sized photographs, vaccination records, and a transfer certificate (if applicable from Class 1 onwards)." },
              { q: "Do you offer transportation?", a: "Yes, we offer safe, air-conditioned school bus services covering all major routes in the city with GPS tracking." },
              { q: "What is the student-to-teacher ratio?", a: "We maintain a low ratio of 15:1 for kindergarten and 20:1 for primary classes to ensure personalized attention." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">{faq.q}</h4>
                <p className="text-[#475569]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

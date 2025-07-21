import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import heroContact from "../assets/contactGIF.gif";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Globe,
} from "lucide-react";

/* --- Helpers --- */
const useFadeUp = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const ctrls = useAnimation();
  useEffect(() => {
    if (isInView) ctrls.start("visible");
  }, [isInView, ctrls]);
  return [ref, ctrls];
};

const useParallax = (factor) => {
  const { scrollY } = useViewportScroll();
  return useTransform(scrollY, [0, 1000], [0, 1000 * factor]);
};

/* --- Type-writer effect --- */
const TypeWriter = ({ text = "Let’s Connect", delay = 60 }) => {
  const [display, setDisplay] = React.useState("");
  React.useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(id);
    }, delay);
    return () => clearInterval(id);
  }, [text, delay]);
  return <>{display}</>;
};

/* --- Main ContactPage Component --- */
const ContactPage = ({ darkMode, setDarkMode }) => {
  const parallaxY = useParallax(0.3);

  return (
    <div className={darkMode ? "bg-[#121212] text-white" : "bg-white text-[#222]"}>
      <header className="flex justify-end items-center px-8 py-6">
        <button
          onClick={() => typeof setDarkMode === 'function' ? setDarkMode(prev => !prev) : null}
          className={darkMode ? "text-[#FFD600] hover:text-[#5A6F73] transition" : "text-[#5A6F73] hover:text-[#FFD600] transition"}
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.364-6.364l-1.06 1.06M6.696 17.304l-1.06 1.06m12.728 0l-1.06-1.06M6.696 6.696l-1.06-1.06M12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
            </svg>
          )}
        </button>
      </header>
      {/* Background Gradient & Particles */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C9C9C' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 0h30v30H0V0zm30 30h30v30H30V30z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              />
            </filter>
          </defs>
          <g filter="url(#goo)">
            <motion.circle
              cx="25%"
              cy="20%"
              r="120"
              fill="#FFD700"
              animate={{ cy: [20, 25, 20] }}
              transition={{ repeat: Infinity, duration: 10 }}
            />
            <motion.circle
              cx="75%"
              cy="80%"
              r="140"
              fill="#FFD700"
              animate={{ cy: [80, 75, 80] }}
              transition={{ repeat: Infinity, duration: 12 }}
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="100"
              fill="#FFD700"
              animate={{ cx: [50, 55, 50] }}
              transition={{ repeat: Infinity, duration: 8 }}
            />
          </g>
        </svg>
      </div>

      {/* HERO SECTION */}
      <motion.section
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Parallax background layer */}
        <motion.div className="absolute inset-0 z-0" style={{ y: parallaxY }}>
          {/* GIF background */}
          <img
            src={heroContact} // Use public path or CDN URL
            alt="Animated background"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-radial from-[#FFD700]/10 via-transparent to-transparent" />
        </motion.div>

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#FFD700] rounded-full"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4],
              scale: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + i * 0.2,
              delay: i * 0.1,
            }}
          />
        ))}

        {/* Foreground glass card */}
        <motion.div
          className="relative z-10 max-w-3xl p-10 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <h1 className="text-5xl md:text-6xl font-black text-[#FFD700] mb-4">
            <TypeWriter />
          </h1>
          <p className="text-xl text-[#E0E0E0]">
            Discover AI that adapts to you. Drop us a line and start the
            conversation.
          </p>
        </motion.div>
      </motion.section>

      {/* CONTACT FORM & INFO */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1A1A1A] p-8 rounded-2xl shadow-xl border border-[#333333] hover:border-[#FFD700] transition"
          >
            <h2 className="text-3xl font-bold text-[#FFD700] mb-8 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#E0E0E0] text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <GlassInput id="name" placeholder="John Doe" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#E0E0E0] text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <GlassInput
                  id="email"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[#E0E0E0] text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <GlassTextarea
                  id="message"
                  placeholder="Tell us about your project or question..."
                  rows={6}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FFD700] text-[#0A0A0A] px-6 py-3 rounded-xl font-semibold hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 p-8 rounded-2xl bg-[#1A1A1A] shadow-xl border border-[#333333] hover:border-[#FFD700] transition"
          >
            <h2 className="text-3xl font-bold text-[#FFD700] mb-8 text-center">
              Reach Out Directly
            </h2>
            <div className="grid gap-6">
              <ContactInfoItem
                icon={<Mail size={24} className="text-[#FFD700]" />}
                label="Email Us"
                value="info@aitools.com"
              />
              <ContactInfoItem
                icon={<Phone size={24} className="text-[#FFD700]" />}
                label="Call Us"
                value="+1 (555) 123-4567"
              />
              <ContactInfoItem
                icon={<MapPin size={24} className="text-[#FFD700]" />}
                label="Our Headquarters"
                value="Silicon Valley, CA"
              />
              <ContactInfoItem
                icon={<Globe size={24} className="text-[#FFD700]" />}
                label="Business Hours"
                value="Mon-Fri, 9 AM - 5 PM PST"
              />
            </div>

            {/* Social Media Links */}
            <div className="mt-10 text-center">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-6">
                Connect With Us
              </h3>
              <div className="flex justify-center space-x-6">
                <SocialLink
                  icon={<Linkedin size={28} />}
                  href="https://linkedin.com/yourcompany"
                />
                <SocialLink
                  icon={<Twitter size={28} />}
                  href="https://twitter.com/yourcompany"
                />
                <SocialLink
                  icon={<Github size={28} />}
                  href="https://github.com/yourcompany"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAP SECTION */}
      <SectionWrapper bg="dark">
        <h2 className="text-3xl font-bold text-[#FFD700] mb-8">
          Our Global Presence
        </h2>
        <p className="text-[#E0E0E0] mb-8 max-w-2xl mx-auto">
          We work with clients worldwide, bringing innovative AI solutions to
          businesses no matter where they are located.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h-96 w-full rounded-2xl border border-[#333333] overflow-hidden shadow-lg hover:border-[#FFD700] transition"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.075485908051!2d-122.0838510846875!3d37.42199997982535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c7f07e551%3A0x1d1e1d1e1d1e1d1e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1678912345678!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
          {/* Animated pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
            <motion.div
              className="w-6 h-6 bg-[#FFD700] rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <div className="w-3 h-3 bg-[#0A0A0A] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </motion.div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <h2 className="text-3xl font-bold text-[#FFD700] mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 text-left">
          {[
            {
              q: "How quickly do you respond to messages?",
              a: "We typically respond within 24-48 hours during business days. For urgent matters, please use our phone line.",
            },
            {
              q: "Can I schedule a demo of your AI solutions?",
              a: "Absolutely! Please use the contact form above or call us directly, and we’ll arrange a personalized demo session.",
            },
            {
              q: "Do you offer custom AI solutions for specific industries?",
              a: "Yes, we specialize in tailoring AI solutions to your unique business challenges and industry-specific needs.",
            },
            {
              q: "What kind of support do you offer after implementation?",
              a: "We provide comprehensive post-implementation support including maintenance and dedicated technical assistance.",
            },
          ].map((faq, i) => (
            <GlassCard key={i} delay={0.1 * (i + 1)}>
              <h3 className="text-lg font-semibold text-[#FFD700] mb-2">
                {faq.q}
              </h3>
              <p className="text-[#E0E0E0]">{faq.a}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA / Newsletter */}
      <SectionWrapper bg="dark">
        <h2 className="text-3xl font-bold text-[#FFD700] mb-6">
          Stay Connected with AI Insights
        </h2>
        <p className="text-[#E0E0E0] mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest updates on AI trends,
          exclusive insights, and company news.
        </p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Your Email Address"
            className="p-3 rounded-xl bg-[#0A0A0A]/50 backdrop-blur text-[#E0E0E0] border border-[#333333] focus:border-[#FFD700] outline-none transition w-full md:flex-1 placeholder-[#808080]"
          />
          <button
            type="submit"
            className="bg-[#FFD700] text-[#0A0A0A] px-6 py-3 rounded-xl font-semibold hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Subscribe
          </button>
        </motion.form>
      </SectionWrapper>
    </div>
  );
};

/* --- Reusable Components --- */

const SectionWrapper = ({ children, bg = "light" }) => {
  const [ref, ctrls] = useFadeUp();
  return (
    <section
      ref={ref}
      className={`py-16 px-6 ${
        bg === "dark" ? "bg-[#0A0A0A]" : "bg-transparent"
      }`}
    >
      <motion.div
        initial="hidden"
        animate={ctrls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        {children}
      </motion.div>
    </section>
  );
};

const GlassCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="relative liquid-glass p-6 rounded-2xl bg-white/5 backdrop-blur border border-[#333333] hover:border-[#FFD700] transition shadow-md"
  >
    {children}
  </motion.div>
);

const GlassInput = (props) => (
  <input
    {...props}
    className="w-full p-3 rounded-xl bg-white/5 backdrop-blur text-[#E0E0E0] border border-[#333333] focus:border-[#FFD700] outline-none transition placeholder-[#808080]"
  />
);

const GlassTextarea = (props) => (
  <textarea
    {...props}
    className="w-full p-3 rounded-xl bg-white/5 backdrop-blur text-[#E0E0E0] border border-[#333333] focus:border-[#FFD700] outline-none transition placeholder-[#808080]"
  />
);

const ContactInfoItem = ({ icon, label, value }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    className="flex items-center space-x-4 bg-white/5 backdrop-blur p-4 rounded-xl border border-[#333333] shadow-sm hover:border-[#FFD700] transition"
  >
    {icon}
    <div>
      <p className="text-sm text-[#E0E0E0]/80">{label}</p>
      <p className="text-lg font-semibold text-[#FFD700]">{value}</p>
    </div>
  </motion.div>
);

const SocialLink = ({ icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors duration-300"
    whileHover={{ y: -4, scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {icon}
  </motion.a>
);

export default ContactPage;

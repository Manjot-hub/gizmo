/*  ContactPage.jsx  */
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import heroContact from "../assets/contact-hero.jpg";

/* --- helper to trigger animations once when in view --- */
const useFadeUp = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const ctrls = useAnimation();
  useEffect(() => {
    if (isInView) ctrls.start("visible");
  }, [isInView, ctrls]);
  return [ref, ctrls];
};

/* --- type-writer effect for the hero --- */
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

/* --- main component --- */
const ContactPage = () => {
  return (
    <main className="relative text-white isolate overflow-hidden">
      {/* animated gradient background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0d0c] via-[#1a1a1a] to-[#0c0d0c]" />
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
              fill="#e3d271"
              animate={{ cy: [20, 25, 20] }}
              transition={{ repeat: Infinity, duration: 10 }}
            />
            <motion.circle
              cx="75%"
              cy="80%"
              r="140"
              fill="#e3d271"
              animate={{ cy: [80, 75, 80] }}
              transition={{ repeat: Infinity, duration: 12 }}
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="100"
              fill="#e3d271"
              animate={{ cx: [50, 55, 50] }}
              transition={{ repeat: Infinity, duration: 8 }}
            />
          </g>
        </svg>
      </div>

      {/* HERO SECTION */}
      <section
        className="relative min-h-[400px] flex items-center justify-center text-center py-20 px-4 bg-cover bg-center bg-no-repeat isolate"
        style={{
          backgroundImage: `url(${heroContact})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full max-w-4xl mx-auto perspective-[2000px]"
        >
          <div className="relative w-full h-[300px] transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
            {/* Front */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-2xl backface-hidden p-8 flex flex-col justify-center items-center border border-white/10 hover:border-[#e3d271] transition">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#e3d271]">
                <TypeWriter />
              </h1>
              <p className="text-lg md:text-xl text-[#ffffff]/80 max-w-3xl">
                Have questions about our AI solutions? Reach out and let’s
                discuss how we can help your business thrive.
              </p>
            </div>
            {/* Back */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-2xl backface-hidden rotate-y-180 p-8 flex flex-col justify-center items-center border border-[#e3d271]">
              <h2 className="text-3xl md:text-4xl font-bold text-[#e3d271] mb-4">
                Let’s Talk AI!
              </h2>
              <p className="text-lg md:text-xl text-[#ffffff]/80 max-w-3xl">
                We’re excited to explore innovative solutions with you. Drop us a
                message and let’s make something extraordinary.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <SectionWrapper>
        <h2 className="text-3xl font-bold text-[#e3d271] mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 text-left">
          {[
            {
              q: "How quickly do you respond to messages?",
              a: "We typically respond within 24-48 hours during business days.",
            },
            {
              q: "Can I schedule a demo?",
              a: "Absolutely! Contact us and we’ll arrange a time that works for you.",
            },
            {
              q: "Do you offer custom AI solutions?",
              a: "Yes, we tailor AI solutions to your specific business needs.",
            },
          ].map((faq, i) => (
            <GlassCard key={i} delay={0.1 * (i + 1)}>
              <h3 className="text-lg font-semibold text-[#e3d271] mb-2">
                {faq.q}
              </h3>
              <p className="text-[#808080]">{faq.a}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* MAP */}
      <SectionWrapper bg="dark">
        <h2 className="text-3xl font-bold text-[#e3d271] mb-8">
          Our Global Presence
        </h2>
        <p className="text-[#808080] mb-8">
          We work with clients worldwide. No matter where you are, our team is
          ready to help.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h-64 rounded-2xl border border-white/10 bg-[#1a1a1a] flex items-center justify-center text-[#808080] hover:border-[#e3d271] transition"
        >
          Map Placeholder
        </motion.div>
      </SectionWrapper>

      {/* CTA / Newsletter */}
      <SectionWrapper>
        <h2 className="text-3xl font-bold text-[#e3d271] mb-6">
          Stay Connected
        </h2>
        <p className="text-[#808080] mb-6">
          Subscribe to our newsletter for updates on AI trends, insights, and
          company news.
        </p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-2xl bg-[#0c0d0c]/50 backdrop-blur text-white border border-white/10 focus:border-[#e3d271] outline-none transition w-full md:w-1/2"
          />
          <button
            type="submit"
            className="bg-[#e3d271] text-black px-6 py-3 rounded-2xl font-semibold hover:bg-[#e3d271]/80 transition"
          >
            Subscribe
          </button>
        </motion.form>
      </SectionWrapper>

      {/* CONTACT FORM */}
      <SectionWrapper bg="dark">
        <h2 className="text-3xl font-bold text-[#e3d271] mb-8">
          Send Us a Message
        </h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-lg mx-auto"
        >
          <GlassInput placeholder="Your Name" />
          <GlassInput placeholder="Your Email" type="email" />
          <GlassTextarea placeholder="Your Message" rows={5} />
          <button
            type="submit"
            className="bg-[#e3d271] text-black px-6 py-3 rounded-2xl font-semibold hover:bg-[#e3d271]/80 transition"
          >
            Send Message
          </button>
        </motion.form>
      </SectionWrapper>

      {/* CONTACT INFO */}
      <SectionWrapper>
        <h2 className="text-3xl font-bold text-[#e3d271] mb-8">
          Contact Information
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-[#808080]">
          {[
            { label: "Email", value: "info@aitools.com" },
            { label: "Phone", value: "+1 (555) 123-4567" },
            { label: "Headquarters", value: "Silicon Valley, CA" },
          ].map((item, i) => (
            <GlassCard key={i} delay={0.15 * (i + 1)}>
              <h3 className="text-xl text-[#e3d271] font-bold mb-2">
                {item.label}
              </h3>
              <p>{item.value}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
};

/* --- reusable components --- */
const SectionWrapper = ({ children, bg = "light" }) => {
  const [ref, ctrls] = useFadeUp();
  return (
    <section
      ref={ref}
      className={`py-16 px-6 ${
        bg === "dark" ? "bg-[#0c0d0c]" : "bg-transparent"
      }`}
    >
      <motion.div
        initial="hidden"
        animate={ctrls}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
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
    className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-[#e3d271] transition"
  >
    {children}
  </motion.div>
);

const GlassInput = (props) => (
  <input
    {...props}
    className="w-full p-3 rounded-2xl bg-white/5 backdrop-blur text-white border border-white/10 focus:border-[#e3d271] outline-none transition placeholder-[#808080]"
  />
);

const GlassTextarea = (props) => (
  <textarea
    {...props}
    className="w-full p-3 rounded-2xl bg-white/5 backdrop-blur text-white border border-white/10 focus:border-[#e3d271] outline-none transition placeholder-[#808080]"
  />
);

export default ContactPage;
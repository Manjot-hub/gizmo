import React from "react";
import { motion } from "framer-motion";

import heroHci from "../assets/hero-dashboard.svg";
import hciNlp from "../assets/hci-nlp.png";
import hciVoice from "../assets/hci-voice.png";
import hciFacial from "../assets/hci-facial.png";
import hciGesture from "../assets/hci-gesture.png";
import hciPersonalized from "../assets/hci-personalized.png";
import hciConversational from "../assets/hci-conversational.png";
import caseStudyImage from "../assets/case-study.png";
import defaultSvg from "../assets/defaultSvg.png";

const featureSvgs = {
  "Natural Language Processing (NLP)": hciNlp,
  "Voice & Speech Recognition": hciVoice,
  "Facial Expression Analysis": hciFacial,
  "Gesture Recognition": hciGesture,
  "Personalized Interactions": hciPersonalized,
  "Conversational Interfaces": hciConversational,
};

const features = [
  {
    title: "Natural Language Processing (NLP)",
    desc: "Understands and responds to spoken or typed commands.",
    example: "“Schedule a meeting for tomorrow at 3 PM.”",
  },
  {
    title: "Voice & Speech Recognition",
    desc: "Interact through voice with high accuracy and speed.",
    example: "“Hey AI, play my productivity playlist.”",
  },
  {
    title: "Facial Expression Analysis",
    desc: "AI reads user emotion through webcam input.",
    example: "Detects if a user is confused or frustrated.",
  },
  {
    title: "Gesture Recognition",
    desc: "Control systems using hand movements.",
    example: "Swipe in the air to change slides in a presentation.",
  },
  {
    title: "Personalized Interactions",
    desc: "Learns from past behavior to tailor experiences.",
    example: "Website greets user by name and shows preferred content.",
  },
  {
    title: "Conversational Interfaces",
    desc: "Human-like chatbots and voice assistants.",
    example: "Customer support chatbot that handles 70% of queries.",
  },
];

const benefits = [
  {
    title: "More Intuitive UX",
    desc: "Reduce learning curve with natural inputs.",
    example: "Elderly users navigate apps with voice instead of touch.",
  },
  {
    title: "Increased Accessibility",
    desc: "Helps users with disabilities interact more easily.",
    example: "Vision-impaired users navigate via speech commands.",
  },
  {
    title: "Faster Task Completion",
    desc: "Say or gesture instead of typing or clicking.",
    example: "“Turn off all lights” voice command in smart home.",
  },
  {
    title: "Real-Time Feedback",
    desc: "System adapts instantly based on user mood or action.",
    example: "Tutor app changes tone when student looks frustrated.",
  },
  {
    title: "Enhanced Engagement",
    desc: "Makes interaction feel human and fluid.",
    example: "AI game characters respond to your voice tone dynamically.",
  },
  {
    title: "Data-Driven UX Improvements",
    desc: "Analyze user interaction data for future design upgrades.",
    example: "Track which commands users use most and optimize flow.",
  },
];

export default function EnhancedHci() {
  return (
    <div className="bg-black text-[#E5E5E5] font-sans">
      {/* HERO SECTION */}
      <section
        className="py-16 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 bg-no-repeat"
        style={{
          backgroundImage: `url(${heroHci})`,
        }}
      >
        <div className="flex-1">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Smarter, Seamless Interaction Between Humans and Machines
          </motion.h1>
          <p className="mb-6 text-lg">
            Empower users to communicate naturally with systems through voice,
            gestures, emotions, and beyond.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#FFD700] text-black font-bold py-3 px-6 rounded hover:shadow-[0_0_10px_#FFD700] transition">
              See It in Action
            </button>
            <button className="border border-[#FFD700] text-[#FFD700] font-bold py-3 px-6 rounded hover:bg-[#FFD700] hover:text-black transition">
              Request a Demo
            </button>
          </div>
        </div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroHci}
            alt="HCI Hero Visual"
            className="w-full max-h-[400px] object-contain"
          />
        </motion.div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#FFD700]">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-gray-700 rounded-xl p-6 hover:border-[#FFD700] hover:shadow-[0_0_10px_#FFD700] transition-colors"
            >
              <img
                src={featureSvgs[feature.title] || defaultSvg}
                alt={feature.title}
                className="h-16 w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-[#FFD700] mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-center">{feature.desc}</p>
              <p className="text-center text-sm text-[#FFD700] mt-2 italic">
                {feature.example}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#FFD700]">
          Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-gray-700 rounded-xl p-6 hover:border-[#FFD700] hover:shadow-[0_0_10px_#FFD700] transition-colors"
            >
              <h3 className="text-xl font-bold text-[#FFD700] mb-2">
                {benefit.title}
              </h3>
              <p>{benefit.desc}</p>
              <p className="text-sm text-[#FFD700] mt-2 italic">
                {benefit.example}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#FFD700]">
          How It Works
        </h2>
        <div className="space-y-8 text-lg">
          <p>
            <span className="text-[#FFD700]">🟡 Step 1:</span> Capture User
            Input — Voice, gesture, facial expression, or typed message.
          </p>
          <p>
            <span className="text-[#FFD700]">🟠 Step 2:</span> AI Processing —
            Natural language understanding, vision models, or sentiment
            detection are applied.
          </p>
          <p>
            <span className="text-[#FFD700]">🟢 Step 3:</span> Smart Response —
            AI executes tasks, responds appropriately, or adapts UI in real
            time.
          </p>
          <p>
            <span className="text-[#FFD700]">🔵 Step 4:</span> Continuous
            Learning — The system improves over time with more interaction data.
          </p>
          <p className="mt-4 text-[#FFD700]">💡 Example Flow:</p>
          <p>
            User opens a learning app → Speaks a question → AI recognizes voice,
            detects confusion on face → Offers help with simpler explanation.
          </p>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#FFD700]">
          Case Study
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={caseStudyImage}
              alt="Case Study"
              className="w-full rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4">
              How EduTalk Increased User Engagement by 75%
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>🗣 90% of users preferred voice-based learning</li>
              <li>😊 Improved satisfaction scores by 40%</li>
              <li>📊 Engagement time increased by 75%</li>
              <li>💡 User frustration dropped by 65%</li>
            </ul>
            <p className="mt-4 italic text-[#FFD700]">
              “Our platform went from just functional to deeply personal and
              intuitive — users felt like they were truly ‘heard’.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#FFD700]">
          Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] border border-gray-700 rounded-xl p-6 hover:border-[#FFD700] hover:shadow-[0_0_10px_#FFD700] transition-colors text-center"
          >
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4">
              🎧 Basic Plan — $0/month
            </h3>
            <ul className="space-y-2">
              <li>✔ Voice & Text Interaction</li>
              <li>✔ 1 AI Bot / Interface</li>
              <li>✔ Limited API Access</li>
              <li>✔ Community Support</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] border border-gray-700 rounded-xl p-6 hover:border-[#FFD700] hover:shadow-[0_0_10px_#FFD700] transition-colors text-center"
          >
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4">
              🧩 Pro Plan — $79/month
            </h3>
            <ul className="space-y-2">
              <li>✔ NLP + Emotion Detection</li>
              <li>✔ Customizable Voice/Chat UI</li>
              <li>✔ Real-time Feedback Loops</li>
              <li>✔ Slack + Web + Mobile Integration</li>
              <li>✔ Priority Email Support</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] border border-gray-700 rounded-xl p-6 hover:border-[#FFD700] hover:shadow-[0_0_10px_#FFD700] transition-colors text-center"
          >
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4">
              🏢 Enterprise — Custom Pricing
            </h3>
            <ul className="space-y-2">
              <li>✔ Multi-modal Interaction (Voice + Gesture + Emotion)</li>
              <li>✔ Brand-trained AI Agents</li>
              <li>✔ Role-based Dashboards</li>
              <li>✔ Dedicated AI Trainer</li>
              <li>✔ 24/7 Support + SLA</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-[#FFD700] text-center py-8 border-t border-gray-700 mt-12">
        <p>&copy; 2025 AI Tools Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

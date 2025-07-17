import React from "react";
import { motion } from "framer-motion";

import heroPersonalized from "../assets/personalized-hero.svg";
import personalizedBehavior from "../assets/personalized-behavior.svg";
import personalizedRealtime from "../assets/personalized-realtime.svg";
import personalizedDynamic from "../assets/personalized-dynamic.svg";
import personalizedEmail from "../assets/personalized-email.svg";
import personalizedCustomization from "../assets/personalized-customization.svg";
import personalizedMultichannel from "../assets/personalized-multichannel.svg";
import caseStudyImage from "../assets/case-study.png";
import defaultSvg from "../assets/defaultSvg.png";

const featureSvgs = {
  "Behavioral Tracking": personalizedBehavior,
  "Real-Time Content Recommendations": personalizedRealtime,
  "Dynamic UI Personalization": personalizedDynamic,
  "Email & Notification Personalization": personalizedEmail,
  "Product/Service Customization": personalizedCustomization,
  "Multi-Channel Experience Sync": personalizedMultichannel,
};

const features = [
  {
    title: "Behavioral Tracking",
    desc: "AI observes and learns from user actions and preferences.",
    example: "User watches 3 cooking videos → shows more recipe content.",
  },
  {
    title: "Real-Time Content Recommendations",
    desc: "Suggest products, articles, or videos based on live behavior.",
    example:
      "E-commerce site shows winter coats when user searches for “cold weather.”",
  },
  {
    title: "Dynamic UI Personalization",
    desc: "Rearrange content or adjust design for each user.",
    example: "Dashboard shows most-used tools at the top.",
  },
  {
    title: "Email & Notification Personalization",
    desc: "Send custom subject lines and content per user.",
    example: "Email: “Hi Alex, here’s a course you might love!”",
  },
  {
    title: "Product/Service Customization",
    desc: "Tailor offerings to user profiles.",
    example:
      "Fitness app suggests plans based on age, goals, and past progress.",
  },
  {
    title: "Multi-Channel Experience Sync",
    desc: "Seamless personalization across web, app, email, chatbot, etc.",
    example:
      "User adds item to cart on mobile → sees same on web with discount reminder.",
  },
];

const benefits = [
  {
    title: "Higher Conversions",
    desc: "Personalized CTAs and content drive better engagement.",
    example: "38% increase in clicks on dynamic product offers.",
  },
  {
    title: "Better Customer Retention",
    desc: "Users return when experiences feel tailored.",
    example: "Personalized dashboards reduce churn by 25%.",
  },
  {
    title: "Increased User Satisfaction",
    desc: "AI shows users what they care about, instantly.",
    example: "“I always find what I need on your homepage.”",
  },
  {
    title: "Boosted Revenue",
    desc: "Upsell and cross-sell through intelligent suggestions.",
    example: "AI suggests accessories after adding a phone to cart.",
  },
  {
    title: "Time Savings for Teams",
    desc: "No need for manual targeting or segmentation.",
    example: "Automated personalization rules handle everything.",
  },
  {
    title: "Brand Loyalty",
    desc: "Customers feel understood and valued.",
    example: "“This app knows me better than I do!” – review quote.",
  },
];

export default function PersonalizedExperiences() {
  return (
    <div className="bg-black text-[#E5E5E5] font-sans">
      {/* HERO SECTION */}
      <section
        className="py-16 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 bg-no-repeat"
        style={{
          backgroundImage: `url(${heroPersonalized})`,
        }}
      >
        <div className="flex-1">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Deliver Tailored Experiences That Truly Connect
          </motion.h1>
          <p className="mb-6 text-lg">
            Use AI to personalize content, recommendations, and interactions for
            every individual — in real time.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#FFD700] text-black font-bold py-3 px-6 rounded hover:shadow-[0_0_10px_#FFD700] transition">
              Start Personalizing Now
            </button>
            <button className="border border-[#FFD700] text-[#FFD700] font-bold py-3 px-6 rounded hover:bg-[#FFD700] hover:text-black transition">
              Request Live Demo
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
            src={heroPersonalized}
            alt="Personalized Experiences Hero"
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
            <span className="text-[#FFD700]">🟡 Step 1:</span> Track User Data —
            Capture user behavior, preferences, and context (browsing, clicks,
            time spent).
          </p>
          <p>
            <span className="text-[#FFD700]">🟠 Step 2:</span> AI Analysis — AI
            processes user patterns, profiles, and engagement data in real-time.
          </p>
          <p>
            <span className="text-[#FFD700]">🟢 Step 3:</span> Deliver
            Personalized Output — From UI to emails to content suggestions —
            everything adapts to each user.
          </p>
          <p>
            <span className="text-[#FFD700]">🔵 Step 4:</span> Continuous
            Learning — AI refines experiences as it learns more about each
            individual.
          </p>
          <p className="mt-4 text-[#FFD700]">💡 Example Flow:</p>
          <p>
            User logs into fitness app → AI analyzes past workouts → Suggests a
            customized 4-week strength training plan → App layout changes to
            match new goal.
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
              How ShopSmart Increased Engagement by 68%
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>👀 2.5x more product views per session</li>
              <li>💌 Email open rates jumped from 18% → 42%</li>
              <li>🛒 68% increase in add-to-cart events</li>
              <li>💬 Positive user feedback on “smart suggestions”</li>
            </ul>
            <p className="mt-4 italic text-[#FFD700]">
              “ShopSmart now feels like a boutique tailored for every shopper.
              Personalization transformed our user experience — and our
              numbers.”
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
              🎈 Free Plan — $0/month
            </h3>
            <ul className="space-y-2">
              <li>✔ 1 Personalization Rule</li>
              <li>✔ Website Content Suggestions</li>
              <li>✔ Up to 500 Users</li>
              <li>✔ Basic Analytics</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] border border-gray-700 rounded-xl p-6 hover:border-[#FFD700] hover:shadow-[0_0_10px_#FFD700] transition-colors text-center"
          >
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4">
              🎯 Growth Plan — $59/month
            </h3>
            <ul className="space-y-2">
              <li>✔ Dynamic Product & Content Recommendations</li>
              <li>✔ A/B Testing</li>
              <li>✔ Email & Push Personalization</li>
              <li>✔ Up to 10,000 Users</li>
              <li>✔ Slack + Email Notifications</li>
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
              <li>✔ Unlimited Personalization</li>
              <li>✔ AI Behavioral Clustering</li>
              <li>✔ Cross-Platform Sync</li>
              <li>✔ Dedicated AI Consultant</li>
              <li>✔ Priority Support + SLA</li>
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

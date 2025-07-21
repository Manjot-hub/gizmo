import React from "react";
import { motion } from "framer-motion";
import heroPersonalized from "../assets/personalized-hero.svg";
// Animation variant used by all components
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Service3Hero Component
const Service3Hero = ({ darkMode, setDarkMode }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className={darkMode ? "bg-[#0c0d0c] text-white py-20 text-center px-4 bg-no-repeat" : "bg-white text-[#222] py-20 text-center px-4 bg-no-repeat"}
    style={{
      backgroundImage: `url(${heroPersonalized})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <header className="flex justify-end items-center px-8 py-6">
      <button
        onClick={() => typeof setDarkMode === 'function' ? setDarkMode(prev => !prev) : null}
        className={darkMode ? "text-[#e3d271] hover:text-[#5A6F73] transition" : "text-[#5A6F73] hover:text-[#e3d271] transition"}
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
    <motion.h1
      variants={fadeUp}
      className="text-4xl md:text-5xl font-bold mb-4 text-[#e3d271]"
    >
      Make Smarter Decisions with Data
    </motion.h1>
    <motion.p
      variants={fadeUp}
      className="text-lg md:text-xl text-[#ffffff]/80 max-w-3xl mx-auto"
    >
      Leverage AI to transform raw data into actionable insights and predictions
      that drive performance.
    </motion.p>
    <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-4">
      <button className="bg-[#e3d271] text-black px-6 py-3 rounded-2xl font-semibold">
        Get Started
      </button>
      <button className="border border-[#e3d271] px-6 py-3 rounded-2xl text-white hover:bg-[#e3d271]/10">
        View Report
      </button>
    </motion.div>
  </motion.section>
);

// Service3Features Component
const features = [
  {
    title: "Real-Time Dashboards",
    desc: "Visualize key metrics and KPIs instantly.",
  },
  {
    title: "Predictive Analytics",
    desc: "Forecast trends using machine learning models.",
  },
  {
    title: "Natural Language Queries",
    desc: "Ask data questions in plain English.",
  },
  {
    title: "Data Cleaning & Structuring",
    desc: "Automatically prepare and enrich raw data.",
  },
  {
    title: "AI-Powered Reports",
    desc: "Generate dynamic reports with insights.",
  },
  {
    title: "Integration with Data Sources",
    desc: "Connect databases, APIs, CRMs, and IoT data.",
  },
];
const Service3Features = () => (
  <section className="bg-[#1a1a1a] text-white py-20 px-6">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto text-center"
    >
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-bold text-[#e3d271] mb-12"
      >
        Key Features
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            variants={fadeUp}
            key={index}
            className="bg-[#0c0d0c] p-6 rounded-xl shadow-md hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-[#808080]">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

// Service3Benefits Component
const benefits = [
  {
    title: "Faster Decisions",
    desc: "Access data insights in real-time for quicker actions.",
  },
  {
    title: "Reduced Guesswork",
    desc: "Base strategies on evidence, not assumptions.",
  },
  {
    title: "Improved ROI",
    desc: "Allocate resources more efficiently with predictive insights.",
  },
  {
    title: "Better Targeting",
    desc: "Use data to identify high-value audiences.",
  },
  { title: "Scalability", desc: "Analyze growing data volumes effortlessly." },
  {
    title: "Team Empowerment",
    desc: "Self-serve insights for non-technical users.",
  },
];
const Service3Benefits = () => (
  <section className="bg-[#0c0d0c] text-white py-20 px-6">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto text-center"
    >
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-bold text-[#e3d271] mb-12"
      >
        Benefits
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((item, index) => (
          <motion.div
            variants={fadeUp}
            key={index}
            className="p-6 bg-[#1a1a1a] rounded-xl shadow"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-[#808080]">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

// Service3HowItWorks Component
const steps = [
  {
    step: "Step 1",
    title: "Connect Data Sources",
    desc: "Pull from CRMs, APIs, sensors, and spreadsheets.",
  },
  {
    step: "Step 2",
    title: "Clean & Normalize",
    desc: "Ensure consistency and structure with AI tools.",
  },
  {
    step: "Step 3",
    title: "Analyze & Predict",
    desc: "Run queries, detect trends, and forecast behavior.",
  },
  {
    step: "Step 4",
    title: "Visualize & Share",
    desc: "Display results with dashboards and smart reports.",
  },
];
const Service3HowItWorks = () => (
  <section className="bg-[#1a1a1a] text-white py-20 px-6">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-5xl mx-auto text-center"
    >
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-bold text-[#e3d271] mb-12"
      >
        How It Works
      </motion.h2>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            variants={fadeUp}
            key={i}
            className="p-6 bg-[#0c0d0c] rounded-xl shadow"
          >
            <h4 className="text-[#e3d271] font-bold mb-2">{s.step}</h4>
            <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
            <p className="text-[#808080] text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

// Service3CaseStudy Component
const Service3CaseStudy = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="bg-[#0c0d0c] text-white py-20 px-6"
  >
    <motion.div variants={fadeUp} className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#e3d271] mb-6">
        Case Study: RetailMax
      </h2>
      <p className="text-[#808080] mb-6">
        <strong>Client:</strong> RetailMax — Large Fashion Retail Chain
      </p>
      <p className="mb-4">
        <strong>Challenge:</strong> No unified customer insight; ineffective
        promotions.
      </p>
      <p className="mb-4">
        <strong>Solution:</strong> AI analyzed purchase behavior and optimized
        campaigns.
      </p>
      <ul className="text-left max-w-xl mx-auto text-[#808080] space-y-2">
        <li>📈 40% increase in promo engagement</li>
        <li>🧠 Predictive insights for demand planning</li>
        <li>💡 Custom dashboards per team</li>
        <li>📊 Daily insight reports emailed automatically</li>
      </ul>
      <blockquote className="mt-6 italic text-[#e3d271]">
        “We now make data-driven moves daily. It’s a competitive advantage.”
      </blockquote>
    </motion.div>
  </motion.section>
);

// Service3Pricing Component
const plans = [
  {
    name: "Starter",
    price: "$29/month",
    features: ["3 Dashboards", "Basic Reports", "Email Support"],
  },
  {
    name: "Pro",
    price: "$149/month",
    features: [
      "Unlimited Reports",
      "AI Forecasting",
      "Data API Access",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    features: [
      "Data Lake Integration",
      "Private Cloud",
      "Account Manager",
      "24/7 SLA",
    ],
  },
];
const Service3Pricing = () => (
  <section className="bg-[#1a1a1a] text-white py-20 px-6">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto text-center"
    >
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-bold text-[#e3d271] mb-12"
      >
        Pricing
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            variants={fadeUp}
            key={i}
            className="bg-[#0c0d0c] p-6 rounded-xl border border-[#e3d271]/30"
          >
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-[#e3d271] font-semibold mb-4">{plan.price}</p>
            <ul className="text-[#808080] space-y-2 text-sm">
              {plan.features.map((f, index) => (
                <li key={index}>✔ {f}</li>
              ))}
            </ul>
            <button className="mt-6 bg-[#e3d271] text-black px-4 py-2 rounded-xl font-semibold">
              {plan.name === "Enterprise" ? "Contact Us" : "Start Plan"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

// Main App Component
const DataAnalysisInsights = () => {
  return (
    <main className="bg-[#0c0d0c] text-white">
      <Service3Hero />
      <Service3Features />
      <Service3Benefits />
      <Service3HowItWorks />
      <Service3CaseStudy />
      <Service3Pricing />
    </main>
  );
};

export default DataAnalysisInsights;

import React from "react";
import { motion } from "framer-motion";

import heroDashboard from "../assets/hero-dashboard.svg";
import caseStudy from "../assets/case-study.svg";
import defaultSvg from "../assets/defaultSvg.svg";

import industryModel from "../assets/feature-industry-model.svg";
import compliance from "../assets/feature-compliance.svg";
import workflow from "../assets/feature-workflow.svg";
import analytics from "../assets/feature-analytics.svg";
import scalable from "../assets/feature-scalable.svg";
import integration from "../assets/feature-integration.svg";

const featureSvgs = {
  "Industry-Specific AI Models": industryModel,
  "Compliance & Security Ready": compliance,
  "Custom Workflow Automation": workflow,
  "Predictive Analytics for Key Metrics": analytics,
  "Scalable Deployment": scalable,
  "Integration with Industry Tools": integration,
  "heroDashboard": heroDashboard
};

const features = [
  {
    title: "Industry-Specific AI Models",
    desc: "Pre-trained models optimized for domain data and workflows.",
    example: "Healthcare AI trained on medical records and imaging.",
  },
  {
    title: "Compliance & Security Ready",
    desc: "Built with GDPR, HIPAA, SOC2, and other standards.",
    example: "Financial AI meets PCI DSS requirements.",
  },
  {
    title: "Custom Workflow Automation",
    desc: "AI handles tasks unique to the industry.",
    example: "AI schedules surgeries based on resource availability.",
  },
  {
    title: "Predictive Analytics for Key Metrics",
    desc: "AI forecasts domain-specific outcomes.",
    example: "Manufacturing AI predicts machine failure.",
  },
  {
    title: "Scalable Deployment",
    desc: "Easily adapts to SMBs or enterprise-scale operations.",
    example: "Same model powers 10 clinics or 10,000.",
  },
  {
    title: "Integration with Industry Tools",
    desc: "Connects with legacy and modern systems.",
    example: "AI pulls data from EMRs, ERPs, CRMs, POS systems.",
  },
];

const benefits = [
  {
    title: "Higher Accuracy with Domain Context",
    desc: "AI understands specialized terminology and logic.",
    example: "Detects rare medical conditions in radiology scans.",
  },
  {
    title: "Faster Time to Value",
    desc: "Pre-built models mean no months-long training.",
    example: "Bank uses credit risk AI with results in week one.",
  },
  {
    title: "Lower Operational Cost",
    desc: "Automates expensive and manual domain tasks.",
    example: "Legal firm saves 400 hours/month on document review.",
  },
  {
    title: "Improved Compliance & Audits",
    desc: "AI ensures processes follow regulations.",
    example: "Healthcare AI tracks consent forms and usage logs.",
  },
  {
    title: "Better Decision Making",
    desc: "Industry KPIs are front and center with AI insights.",
    example: "Supply chain dashboard alerts delays before they happen.",
  },
  {
    title: "Competitive Edge",
    desc: "Specialized AI makes your service smarter and faster.",
    example: "Real estate firm auto-prices listings based on market trends.",
  },
];

export default function SpecializedIndustryApps() {
  return (
    <div className="bg-black text-[#E5E5E5] font-sans">

      {/* HERO SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AI Built for Your Industry — Precision, Performance, and Impact
          </motion.h1>
          <p className="mb-6 text-lg">
            From healthcare to manufacturing, our AI models are customized to solve real-world problems in your domain.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#FFD700] text-black font-bold py-3 px-6 rounded hover:shadow-[0_0_10px_#FFD700] transition">
              Explore Solutions
            </button>
            <button className="border border-[#FFD700] text-[#FFD700] font-bold py-3 px-6 rounded hover:bg-[#FFD700] hover:text-black transition">
              Request a Custom Demo
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
            src={heroDashboard}
            alt="Industry Dashboard"
            className="w-full max-h-[400px] object-contain"
          />
        </motion.div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#FFD700]">Key Features</h2>
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
              <h3 className="text-xl font-bold text-[#FFD700] mb-2 text-center">{feature.title}</h3>
              <p className="text-center">{feature.desc}</p>
              <p className="text-center text-sm text-[#FFD700] mt-2 italic">{feature.example}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#FFD700]">Benefits</h2>
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
              <h3 className="text-xl font-bold text-[#FFD700] mb-2">{benefit.title}</h3>
              <p>{benefit.desc}</p>
              <p className="text-sm text-[#FFD700] mt-2 italic">{benefit.example}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#FFD700]">How It Works</h2>
        <div className="space-y-8 text-lg">
          <p><span className="text-[#FFD700]">🟡 Step 1:</span> Select Your Industry — Choose from Healthcare, Finance, Retail, Logistics, Real Estate, Manufacturing, and more.</p>
          <p><span className="text-[#FFD700]">🟠 Step 2:</span> Connect Data Sources — Securely integrate with industry software (EMR, ERP, databases, etc.)</p>
          <p><span className="text-[#FFD700]">🟢 Step 3:</span> Apply Specialized AI Model — The domain-trained AI processes, analyzes, and predicts outcomes.</p>
          <p><span className="text-[#FFD700]">🔵 Step 4:</span> Deploy and Customize — Fine-tune workflows, build reports, automate tasks — tailored for your needs.</p>
          <p className="mt-4 text-[#FFD700]">💡 Example Flow:</p>
          <p>Real estate agency connects their MLS listings → AI predicts pricing trends → Suggests optimal pricing and time-to-sell → Team acts on AI’s insights.</p>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#FFD700]">Case Study</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={caseStudy}
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
              How MedixAI Improved Patient Outcomes
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>🧬 Diagnosed diseases with 91% accuracy in X-rays</li>
              <li>⏱ Reduced time-to-treatment by 40%</li>
              <li>📉 Lowered admin workload for doctors by 55%</li>
              <li>💬 Enhanced patient communication via smart alerts</li>
            </ul>
            <p className="mt-4 italic text-[#FFD700]">
              “The AI doesn’t just work — it understands our field. That’s what makes the difference.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#FFD700]">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] border border-gray-700 rounded-xl p-6 hover:border-[#FFD700] hover:shadow-[0_0_10px_#FFD700] transition-colors text-center"
          >
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4">🏁 Starter — $0/month</h3>
            <ul className="space-y-2">
              <li>✔ 1 Industry AI Model</li>
              <li>✔ Basic Predictions</li>
              <li>✔ 2 System Integrations</li>
              <li>✔ Community Support</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] border border-gray-700 rounded-xl p-6 hover:border-[#FFD700] hover:shadow-[0_0_10px_#FFD700] transition-colors text-center"
          >
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4">📊 Professional — $99/month</h3>
            <ul className="space-y-2">
              <li>✔ Advanced AI + Custom Dashboards</li>
              <li>✔ Up to 10 Workflows</li>
              <li>✔ Full API Access</li>
              <li>✔ Slack + Email Alerts</li>
              <li>✔ GDPR/HIPAA compliant</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] border border-gray-700 rounded-xl p-6 hover:border-[#FFD700] hover:shadow-[0_0_10px_#FFD700] transition-colors text-center"
          >
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4">🏢 Enterprise — Custom Quote</h3>
            <ul className="space-y-2">
              <li>✔ Unlimited Data + Industry Pipelines</li>
              <li>✔ Custom Model Training</li>
              <li>✔ Private Cloud Hosting</li>
              <li>✔ Dedicated Account Manager</li>
              <li>✔ 24/7 Support + Compliance Reports</li>
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
import React from "react";

const AutomationEfficiency = () => (
  <div className="bg-[#1a1a1a] text-white min-h-screen">
    {/* Hero Section */}
    <section className="py-20 px-6 text-center">
      <h1 className="text-5xl font-bold mb-4 text-[#e3d271]">Intelligent Workflow Automation</h1>
      <p className="text-lg text-[#808080] max-w-2xl mx-auto mb-8">
        Streamline your business with AI-powered automation. Eliminate repetitive tasks, reduce errors, and boost productivity.
      </p>
      <button className="bg-[#e3d271] text-[#1a1a1a] font-bold px-8 py-3 rounded-full shadow hover:bg-[#c6b25a] transition">
        Get Started
      </button>
    </section>
 {/* Features Section */}
    <section className="py-16 px-6 bg-[#0c0d0c]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#e3d271] mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#1a1a1a] rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">AI-Driven Triggers</h3>
            <p className="text-[#808080] text-sm">Automate actions based on intelligent event detection and data analysis.</p>
          </div>
          <div className="p-6 bg-[#1a1a1a] rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Custom Workflows</h3>
            <p className="text-[#808080] text-sm">Design workflows tailored to your unique business processes.</p>
          </div>
          <div className="p-6 bg-[#1a1a1a] rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Real-Time Monitoring</h3>
            <p className="text-[#808080] text-sm">Track automation performance and receive instant alerts for anomalies.</p>
          </div>
        </div>
      </div>
    </section>
{/* Benefits Section */}
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#e3d271] mb-12">Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#0c0d0c] rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Save Time</h3>
            <p className="text-[#808080] text-sm">Automate repetitive tasks and focus on high-value work.</p>
          </div>
          <div className="p-6 bg-[#0c0d0c] rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Reduce Errors</h3>
            <p className="text-[#808080] text-sm">Minimize manual mistakes with consistent, rule-based automation.</p>
          </div>
          <div className="p-6 bg-[#0c0d0c] rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Scale Easily</h3>
            <p className="text-[#808080] text-sm">Handle growing workloads without increasing headcount.</p>
          </div>
        </div>
      </div>
    </section>
 {/* How It Works Section */}
    <section className="bg-[#1a1a1a] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#e3d271] mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "Step 1", title: "Identify Repetitive Tasks", desc: "Map out manual processes suitable for automation." },
            { step: "Step 2", title: "Set Workflow Rules", desc: "Define triggers and logic for intelligent decisions." },
            { step: "Step 3", title: "Deploy & Monitor", desc: "Push live and observe system output + alerts." },
            { step: "Step 4", title: "Optimize with Insights", desc: "Analyze logs to refine and enhance over time." }
          ].map((s, i) => (
            <div key={i} className="p-6 bg-[#0c0d0c] rounded-xl shadow">
              <h4 className="text-[#e3d271] font-bold mb-2">{s.step}</h4>
              <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
              <p className="text-[#808080] text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
 {/* Case Study Section */}
    <section className="py-16 px-6 bg-[#0c0d0c]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#e3d271] mb-8">Case Study</h2>
        <div className="bg-[#1a1a1a] rounded-xl shadow p-8">
          <h3 className="text-xl font-semibold mb-2">Retailer X Automates Inventory</h3>
          <p className="text-[#808080] text-sm mb-4">
            Retailer X used our workflow automation to sync inventory, reduce stockouts, and save 20+ hours/week.
          </p>
          <ul className="text-left text-[#e3d271] list-disc list-inside">
            <li>Automated stock level checks</li>
            <li>Instant reorder triggers</li>
            <li>Real-time dashboard</li>
          </ul>
        </div>
      </div>
    </section>
{/* Pricing Section */}
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#e3d271] mb-8">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#0c0d0c] rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Starter</h3>
            <p className="text-[#e3d271] font-bold text-2xl mb-2">$29/mo</p>
            <ul className="text-[#808080] text-sm mb-4">
              <li>Basic workflow automation</li>
              <li>Email support</li>
            </ul>
            <button className="bg-[#e3d271] text-[#1a1a1a] font-bold px-6 py-2 rounded-full hover:bg-[#c6b25a] transition">Choose</button>
          </div>
          <div className="p-6 bg-[#e3d271] rounded-xl shadow text-[#1a1a1a]">
            <h3 className="text-lg font-semibold mb-2">Pro</h3>
            <p className="font-bold text-2xl mb-2">$79/mo</p>
            <ul className="text-[#1a1a1a] text-sm mb-4">
              <li>Advanced automation</li>
              <li>Priority support</li>
              <li>Analytics dashboard</li>
            </ul>
            <button className="bg-[#1a1a1a] text-[#e3d271] font-bold px-6 py-2 rounded-full hover:bg-[#33331a] transition">Choose</button>
          </div>
<div className="p-6 bg-[#0c0d0c] rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
            <p className="text-[#e3d271] font-bold text-2xl mb-2">Custom</p>
            <ul className="text-[#808080] text-sm mb-4">
              <li>Custom integrations</li>
              <li>Dedicated manager</li>
              <li>SLAs & onboarding</li>
            </ul>
            <button className="bg-[#e3d271] text-[#1a1a1a] font-bold px-6 py-2 rounded-full hover:bg-[#c6b25a] transition">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AutomationEfficiency;
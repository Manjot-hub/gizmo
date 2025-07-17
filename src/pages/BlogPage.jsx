import React from "react";
import { motion } from "framer-motion";

import heroImage from "../assets/blog-hero.png";
import catIndustry from "../assets/blog-cat-industry.png";
import catTools from "../assets/blog-cat-tools.png";
import catTrends from "../assets/blog-cat-trends.png";
import catCase from "../assets/blog-cat-case.png";
import catTutorial from "../assets/blog-cat-tutorial.png";
import catThought from "../assets/blog-cat-thought.png";
import post1 from "../assets/blog-post1.png";
import post2 from "../assets/blog-post2.png";
import post3 from "../assets/blog-post3.png";

export default function BlogPage() {
  const categories = [
    {
      title: "AI in Industry",
      desc: "Explore how AI transforms healthcare, finance, retail, and more.",
      teaser:
        "From optimizing supply chains to diagnosing diseases, AI reshapes industries with speed, accuracy, and scale never seen before. Companies adopting AI gain competitive advantage and operational efficiency.",
      image: catIndustry,
    },
    {
      title: "AI Development & Tools",
      desc: "Best practices, tools, and frameworks for building AI solutions.",
      teaser:
        "Stay up-to-date with the latest tools like TensorFlow, PyTorch, and cloud services for rapid AI deployment. Learn techniques that help build scalable, production-grade AI systems.",
      image: catTools,
    },
    {
      title: "AI Trends & Insights",
      desc: "Latest trends and future predictions in the AI space.",
      teaser:
        "Understand where AI is headed. Explore predictions around generative AI, regulatory changes, ethics, and how AI will shape jobs and the global economy in coming years.",
      image: catTrends,
    },
    {
      title: "Case Studies",
      desc: "Real-world examples of AI making a difference.",
      teaser:
        "Dive into real-life business cases showcasing how AI creates measurable impact — from marketing personalization to predictive analytics in healthcare.",
      image: catCase,
    },
    {
      title: "Tutorials",
      desc: "Step-by-step guides to help you learn and build with AI.",
      teaser:
        "Follow practical guides that walk you through AI projects from scratch. Whether beginner or pro, find tutorials tailored to your learning journey.",
      image: catTutorial,
    },
    {
      title: "Thought Leadership",
      desc: "Perspectives from industry experts and innovators.",
      teaser:
        "Read insights from AI pioneers and tech leaders discussing the challenges, ethics, and incredible future potential of AI technologies.",
      image: catThought,
    },
  ];

  const posts = [
    {
      title: "How AI is Revolutionizing Retail",
      desc: "From personalized shopping to smarter logistics, discover how AI is transforming the retail industry.",
      teaser:
        "Retailers are leveraging AI for demand forecasting, inventory management, and hyper-personalized shopping experiences. AI-driven insights help brands serve customers better while increasing revenue.",
      author: "Jane Doe",
      date: "July 2025",
      image: post1,
    },
    {
      title: "Building Scalable AI Systems",
      desc: "Key architectural patterns and tips for developing enterprise-scale AI applications.",
      teaser:
        "Learn how to architect AI systems that scale across millions of users. Understand data pipelines, microservices, and cloud-native patterns crucial for production-grade AI.",
      author: "John Smith",
      date: "June 2025",
      image: post2,
    },
    {
      title: "The Future of AI Ethics",
      desc: "Explore how AI ethics will shape future applications and what businesses should prepare for.",
      teaser:
        "AI ethics is becoming a central concern for companies worldwide. Issues like bias, transparency, and privacy are critical for building AI systems that are both ethical and trusted by users.",
      author: "Alex Chen",
      date: "May 2025",
      image: post3,
    },
  ];

  const benefits = [
    "Stay Informed on Latest AI Trends",
    "Access Practical Guides and Tutorials",
    "Gain Competitive Insights for Your Business",
    "Read Expert Opinions and Thought Leadership",
    "Connect with the AI Community",
    "Get Actionable Tips for AI Implementation",
  ];

  return (
    <div className="bg-black text-[#E5E5E5] font-sans">
      {/* HERO SECTION */}
      <section
        className="py-16 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="bg-black/70 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Insights & Innovation in AI Tools
            </motion.h1>
            <p className="mb-6 text-lg">
              Explore expert articles, trends, and practical guides shaping the
              future of AI.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-[#FFD700] text-black font-bold py-3 px-6 rounded hover:shadow-[0_0_10px_#FFD700] transition">
                Read Latest Posts
              </button>
              <button className="border border-[#FFD700] text-[#FFD700] font-bold py-3 px-6 rounded hover:bg-[#FFD700] hover:text-black transition">
                Subscribe for Updates
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
              src={heroImage}
              alt="Blog Hero"
              className="w-full max-h-[400px] object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* KEY CATEGORIES */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#FFD700]">
          Key Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="[perspective:1000px]">
              <div className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#111] border border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-24 mb-4 object-contain"
                  />
                  <h3 className="text-lg font-bold text-[#FFD700] mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-300">{cat.desc}</p>
                </div>
                {/* Back Side */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#1c1c1c] border border-[#FFD700] rounded-xl p-4 flex items-center justify-center text-sm text-gray-300 text-center">
                  <p>{cat.teaser}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#FFD700]">
          Featured Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="[perspective:1000px]">
              <div className="relative w-full h-96 transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#111] border border-gray-700 rounded-xl flex flex-col overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between flex-1 text-center">
                    <h3 className="text-lg font-bold text-[#FFD700] mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-300">{post.desc}</p>
                    <p className="text-xs text-[#FFD700] italic mt-4">
                      By {post.author} — {post.date}
                    </p>
                  </div>
                </div>
                {/* Back Side */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#1c1c1c] border border-[#FFD700] rounded-xl p-6 flex items-center justify-center text-sm text-gray-300 text-center">
                  <p>{post.teaser}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#FFD700]">
          Benefits of Following Our Blog
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.li
              key={idx}
              className="bg-[#111] border border-gray-700 rounded-xl p-4 hover:border-[#FFD700] hover:shadow-[0_0_10px_#FFD700] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {benefit}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* HOW IT HELPS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#FFD700]">
          How Our Blog Helps You
        </h2>
        <div className="space-y-8 text-lg">
          <p>
            <span className="text-[#FFD700]">🟡 Step 1:</span> Discover topics
            you care about in curated categories.
          </p>
          <p>
            <span className="text-[#FFD700]">🟠 Step 2:</span> Dive into expert
            articles written by AI professionals.
          </p>
          <p>
            <span className="text-[#FFD700]">🟢 Step 3:</span> Apply insights
            and boost your AI projects or business strategies.
          </p>
          <p>
            <span className="text-[#FFD700]">🔵 Step 4:</span> Stay updated by
            subscribing for fresh insights every month.
          </p>
          <p className="mt-4 text-[#FFD700]">💡 Example Flow:</p>
          <p>
            “You read a tutorial on AI data pipelines → implement the steps →
            improve your AI app’s performance → share results back in the
            community.”
          </p>
        </div>
      </section>

      {/* SUBSCRIBE SECTION */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#FFD700]">
          Subscribe to Stay Ahead in AI
        </h2>
        <p className="mb-6">
          Join thousands of professionals reading our blog to stay ahead of the
          AI curve.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 rounded bg-[#222] border border-gray-700 text-white focus:outline-none focus:border-[#FFD700]"
          />
          <button className="bg-[#FFD700] text-black font-bold px-6 py-3 rounded hover:shadow-[0_0_10px_#FFD700] transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-[#FFD700] text-center py-8 border-t border-gray-700 mt-12">
        <p>&copy; 2025 AI Tools Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

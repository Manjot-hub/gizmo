import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// InsightCard component with flip effect and consistent alignment
function InsightCard({ icon, title, desc, more }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      style={{ perspective: '1000px' }}
      data-aos="fade-up"
    >
      <div
        className="relative w-full h-72 transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'none',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg flex flex-col justify-between items-center transition-all duration-300 group hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] cursor-pointer"
          style={{ backfaceVisibility: 'hidden' }}
          onClick={() => setFlipped(true)}
        >
          <div className="flex flex-col items-center w-full flex-1 justify-center">
            <span className="text-3xl mb-4">{icon}</span>
            <h3 className="text-2xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600] text-center">{title}</h3>
            <p className="mb-4 text-center flex-1">{desc}</p>
          </div>
          <button className="text-[#FFD600] underline font-semibold mt-2 self-center">Read More</button>
        </div>
        {/* Back Side */}
        <div
          className="absolute inset-0 bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg flex flex-col justify-between items-center transition-all duration-300 cursor-pointer"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
          onClick={() => setFlipped(false)}
        >
          <div className="flex flex-col items-center w-full flex-1 justify-center">
            <h3 className="text-2xl font-bold text-[#FFD600] mb-4 text-center">{title} - Details</h3>
            <p className="text-center text-[#FFD600] mb-4 flex-1">{more}</p>
          </div>
          <button className="text-[#FFD600] underline font-semibold self-center" onClick={e => { e.stopPropagation(); setFlipped(false); }}>Go Back</button>
        </div>
      </div>
    </div>
  );
}

const SecondHome = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
      {/* Home Intro */}
      <section className="py-20 flex justify-center items-center">
        <div data-aos="fade-up">
          <h1 className="text-4xl font-bold text-[#fffffe] mb-4 group-hover:text-[#FFD600]">Welcome to Our Company</h1>
          <p className="text-[#5A6F73] group-hover:text-[#FFD600]">
            We help businesses achieve remarkable growth with innovative solutions.
          </p>
        </div>
      </section>

      {/* Insights Reveal - Updated Cards */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-[#fffffe] text-center mb-10">Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: '📊',
              title: 'Market Trends',
              desc: 'Stay ahead with data-driven insights into evolving markets.',
              more: 'We analyze global and local market trends to help you make informed decisions and stay competitive.'
            },
            {
              icon: '🧑‍💼',
              title: 'Customer Behavior',
              desc: 'Understand your customers and tailor your services effectively.',
              more: 'Deep dive into customer analytics to optimize engagement and retention strategies.'
            },
            {
              icon: '🚀',
              title: 'Growth Opportunities',
              desc: 'Unlock hidden growth potential for your business success.',
              more: 'Identify new markets, products, and partnerships for sustainable growth.'
            },
            {
              icon: '💡',
              title: 'Innovation Insights',
              desc: 'Discover the latest innovations in your industry.',
              more: 'Stay updated with cutting-edge technologies and innovative business models.'
            },
            {
              icon: '🔒',
              title: 'Security Analysis',
              desc: 'Protect your business with advanced security insights.',
              more: 'Get recommendations on best practices and tools to safeguard your data.'
            },
            {
              icon: '🌐',
              title: 'Global Expansion',
              desc: 'Expand your reach with global market insights.',
              more: 'Learn about international opportunities and how to enter new markets.'
            }
          ].map((card, idx) => (
            <InsightCard key={idx} icon={card.icon} title={card.title} desc={card.desc} more={card.more} />
          ))}
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-[#fffffe] text-center mb-10">Featured Clients</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div
            className="bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 relative group hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] hover:text-[#FFD600]"
            data-aos="fade-up"
          >
            <span className="text-3xl mb-2">🏢</span>
            <h3 className="text-xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600]">Client A</h3>
          </div>
          {/* Card 2 */}
          <div
            className="bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 relative group hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] hover:text-[#FFD600]"
            data-aos="fade-up"
          >
            <span className="text-3xl mb-2">🏬</span>
            <h3 className="text-xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600]">Client B</h3>
          </div>
          {/* Card 3 */}
          <div
            className="bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 relative group hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] hover:text-[#FFD600]"
            data-aos="fade-up"
          >
            <span className="text-3xl mb-2">🏦</span>
            <h3 className="text-xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600]">Client C</h3>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Updated Cards */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-[#fffffe] text-center mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div
            className="bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg transition-all duration-300 relative hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] group text-center"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <span className="text-3xl">⏳</span>
            </div>
            <h3 className="text-2xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600]">10+</h3>
            <p className="mb-4">Years of Experience</p>
            <a href="#" className="text-[#FFD600] underline font-semibold">Read More</a>
          </div>
          {/* Card 2 */}
          <div
            className="bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg transition-all duration-300 relative hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] group text-center"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <span className="text-3xl">📦</span>
            </div>
            <h3 className="text-2xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600]">200+</h3>
            <p className="mb-4">Projects Delivered</p>
            <a href="#" className="text-[#FFD600] underline font-semibold">Read More</a>
          </div>
          {/* Card 3 */}
          <div
            className="bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg transition-all duration-300 relative hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] group text-center"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <span className="text-3xl">👥</span>
            </div>
            <h3 className="text-2xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600]">50+</h3>
            <p className="mb-4">Expert Team Members</p>
            <a href="#" className="text-[#FFD600] underline font-semibold">Read More</a>
          </div>
          {/* Card 4 */}
          <div
            className="bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg transition-all duration-300 relative hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] group text-center"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <span className="text-3xl">⭐</span>
            </div>
            <h3 className="text-2xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600]">98%</h3>
            <p className="mb-4">Client Satisfaction</p>
            <a href="#" className="text-[#FFD600] underline font-semibold">Read More</a>
          </div>
        </div>
      </section>

      {/* Our Services - Updated Cards */}
      <section className="py-20 text-white">
        <h2 className="text-3xl font-bold text-[#fffffe] text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div
            className="bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg transition-all duration-300 relative hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] group"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600]">Web Development</h3>
            <p className="mb-4">High-quality websites that scale with your business needs.</p>
            <a href="#" className="text-[#FFD600] underline font-semibold">Read More</a>
          </div>
          {/* Card 2 */}
          <div
            className="bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg transition-all duration-300 relative hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] group"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600]">Mobile Apps</h3>
            <p className="mb-4">Seamless mobile applications for iOS and Android platforms.</p>
            <a href="#" className="text-[#FFD600] underline font-semibold">Read More</a>
          </div>
          {/* Card 3 */}
          <div
            className="bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg transition-all duration-300 relative hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] group"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="text-2xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600]">UI/UX Design</h3>
            <p className="mb-4">Engaging designs focused on user experience and results.</p>
            <a href="#" className="text-[#FFD600] underline font-semibold">Read More</a>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-[#fffffe] text-center mb-10">Our Clients</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div
            className="bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 relative group hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] hover:text-[#FFD600]"
            data-aos="fade-up"
          >
            <span className="text-3xl mb-2">🅰️</span>
            <h3 className="text-xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600]">Logo 1</h3>
          </div>
          {/* Card 2 */}
          <div
            className="bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 relative group hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] hover:text-[#FFD600]"
            data-aos="fade-up"
          >
            <span className="text-3xl mb-2">🅱️</span>
            <h3 className="text-xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600]">Logo 2</h3>
          </div>
          {/* Card 3 */}
          <div
            className="bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 relative group hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] hover:text-[#FFD600]"
            data-aos="fade-up"
          >
            <span className="text-3xl mb-2">🅾️</span>
            <h3 className="text-xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600]">Logo 3</h3>
          </div>
          {/* Card 4 */}
          <div
            className="bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 relative group hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] hover:text-[#FFD600]"
            data-aos="fade-up"
          >
            <span className="text-3xl mb-2">🆎</span>
            <h3 className="text-xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600]">Logo 4</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondHome;
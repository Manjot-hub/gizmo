
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function HomePage({ darkMode, setDarkMode }) {
  return (
    <div className={darkMode ? "dark bg-[#121212] text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Welcome to <span className="text-[#D8B4FE]">Gizmo</span>
        </h1>
        <p className="max-w-xl text-[#5A6F73] mb-10">
          We help you transform your business with innovative solutions.
          Let’s build the future together.
        </p>
        <div className="space-x-4">
          <button className="bg-[#D8B4FE] text-[#121212] font-semibold px-6 py-3 rounded hover:bg-[#b08ed1] transition">
            Get Started
          </button>
          <button className="border border-[#D8B4FE] text-[#D8B4FE] px-6 py-3 rounded hover:bg-[#D8B4FE] hover:text-[#121212] transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features / Highlights */}
      <section className="grid md:grid-cols-3 gap-8 px-8 py-16">
        {[
          {
            title: "Boost Productivity",
            desc: "Streamline your operations and empower your teams.",
          },
          {
            title: "Scale Seamlessly",
            desc: "Flexible solutions to grow as your business evolves.",
          },
          {
            title: "Insights & Analytics",
            desc: "Data-driven insights to help you make smarter decisions.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-[#1E1E1E] p-6 rounded shadow hover:bg-[#2a2a2a] transition"
          >
            <h3 className="text-xl font-bold mb-2 text-[#D8B4FE]">
              {feature.title}
            </h3>
            <p className="text-[#5A6F73]">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="flex flex-col items-center justify-center py-16">
        <h2 className="text-3xl font-bold mb-4 text-[#D8B4FE]">
          Ready to get started?
        </h2>
        <button className="bg-[#D8B4FE] text-[#121212] font-semibold px-8 py-3 rounded hover:bg-[#b08ed1] transition">
          Contact Us
        </button>
      </section>

      <Footer />
    </div>
  );
}

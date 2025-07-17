import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../assets/about-hero.svg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="bg-[#0c0d0c] text-white">
      {/* Hero Section */}
      <section
        className="py-20 px-6 text-center bg-center bg-cover bg-no-repeat min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="bg-black/70 p-8 rounded-lg inline-block">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#e3d271]">
            About Our Company
          </h1>
          <p className="text-lg md:text-xl text-[#e5e5e5]/80 max-w-3xl mx-auto">
            Empowering businesses through innovation, technology, and
            exceptional service.
          </p>
        </div>
      </section>

      {/* What Makes Us Stand Apart */}
      <section className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#e3d271] mb-8">
            What Makes Us Stand Apart
          </h2>
          <p
            className="text-[#808080] max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            At our company, innovation isn’t just a buzzword—it’s the foundation
            of everything we do. Our agile approach and passionate team empower
            us to deliver tailored solutions that exceed client expectations.
            We believe in forging long-term partnerships, driven by
            transparency, creativity, and relentless pursuit of excellence.
          </p>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 px-6 bg-[#0c0d0c]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#e3d271] mb-8">
            Vision and Mission
          </h2>
          <p
            className="text-[#808080] max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            Our vision is to transform the digital landscape through sustainable
            and impactful solutions. We aim to empower businesses worldwide,
            enabling them to thrive in an ever-changing market. Our mission is
            to deliver exceptional services rooted in innovation, integrity,
            and a client-centric approach.
          </p>
        </div>
      </section>

      {/* Our Services (Features) */}
      <section className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#e3d271] mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                desc:
                  "Craft scalable, high-performance websites tailored to your business objectives.",
              },
              {
                title: "Mobile Apps",
                desc:
                  "Deliver smooth user experiences and robust performance on all devices.",
              },
              {
                title: "Digital Strategy",
                desc:
                  "Achieve measurable results through data-driven strategies and marketing.",
              },
              {
                title: "Cloud Integration",
                desc:
                  "Migrate and manage workloads in the cloud for seamless operations.",
              },
              {
                title: "Data Analytics",
                desc:
                  "Transform raw data into actionable insights to drive smarter decisions.",
              },
              {
                title: "AI Solutions",
                desc:
                  "Leverage AI to automate, personalize, and innovate faster than ever.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#0c0d0c] p-6 rounded-xl shadow hover:shadow-lg transition"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-bold mb-2 text-[#e3d271]">
                  {service.title}
                </h3>
                <p className="text-[#808080]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-[#0c0d0c]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#e3d271] mb-12">
            Benefits of Working With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation Driven",
                desc: "We stay ahead of the curve by embracing the latest technologies.",
              },
              {
                title: "Client Centric",
                desc:
                  "Your success is our priority, guiding every decision we make.",
              },
              {
                title: "Scalable Solutions",
                desc:
                  "Our solutions grow with your business, ensuring long-term value.",
              },
              {
                title: "Expert Team",
                desc:
                  "A passionate team of professionals dedicated to your project.",
              },
              {
                title: "Transparent Process",
                desc:
                  "We value open communication and keep you informed every step.",
              },
              {
                title: "Proven Results",
                desc:
                  "We deliver measurable outcomes and lasting business impact.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-xl shadow hover:shadow-lg transition"
                data-aos="fade-up"
              >
                <h3 className="text-lg font-semibold mb-2 text-[#e3d271]">
                  {benefit.title}
                </h3>
                <p className="text-[#808080]">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#e3d271] mb-12">
            How We Work
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "Step 1",
                title: "Consult & Understand",
                desc:
                  "We start by learning your unique goals and challenges.",
              },
              {
                step: "Step 2",
                title: "Design Solutions",
                desc:
                  "Our team designs innovative strategies tailored to you.",
              },
              {
                step: "Step 3",
                title: "Implement & Build",
                desc:
                  "We bring the vision to life through agile development.",
              },
              {
                step: "Step 4",
                title: "Optimize & Support",
                desc:
                  "Continuous improvement and support to ensure your success.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#0c0d0c] p-6 rounded-xl shadow"
                data-aos="fade-up"
              >
                <h4 className="text-[#e3d271] font-bold mb-2">
                  {item.step}
                </h4>
                <h3 className="text-lg font-semibold mb-1 text-white">
                  {item.title}
                </h3>
                <p className="text-[#808080] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team (Case Study Equivalent) */}
      <section className="py-16 px-6 bg-[#0c0d0c]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#e3d271] mb-12">
            Meet Our Leaders
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                initials: "J.S.",
                name: "Jane Smith",
                role: "Chief Executive Officer",
              },
              {
                initials: "M.K.",
                name: "Mark Kumar",
                role: "Head of Technology",
              },
              {
                initials: "L.W.",
                name: "Laura White",
                role: "Head of Design",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
              >
                <div className="w-32 h-32 rounded-full mx-auto bg-[#e3d271] text-[#1a1a1a] flex items-center justify-center text-2xl font-bold">
                  {member.initials}
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-[#808080]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;

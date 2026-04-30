import { motion } from "framer-motion";
import { LineChart } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { skills } from "../data/skills";

function About() {
  const principles = [
    {
      title: "Product thinking",
      text: "I connect user problems, business goals, and technical constraints before jumping into screens.",
    },
    {
      title: "UX execution",
      text: "I turn complex flows into clear interfaces, strong hierarchy, and practical design systems.",
    },
    {
      title: "Team leadership",
      text: "I work closely with developers and stakeholders to move ideas from discovery to delivery.",
    },
  ];

  const tools = ["Figma", "Notion", "React / Tailwind", "Analytics", "Jira"];

  return (
    <section id="about" className="px-6 mx-auto max-w-7xl py-28">
      <SectionLabel icon={<LineChart size={18} />} label="About" />

      <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-[#108549]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/about.png"
                alt="Ahmed portrait"
                className="h-[520px] w-full object-cover object-top grayscale-[35%]"
              />
            </div>

            <div className="absolute bottom-8 left-8 rounded-2xl border border-white/10 bg-[#0c1512]/90 px-5 py-4 backdrop-blur">
              <p className="text-4xl font-extrabold tracking-[-0.04em] text-[#8ee0b4]">
                7+
              </p>
              <p className="mt-1 text-sm text-white/55">
                Years of product design
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8ee0b4]">
            Expertise
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.04em] md:text-6xl">
            Blending product logic with clean execution.
          </h2>

          <p className="max-w-3xl mt-6 text-lg leading-8 text-white/60">
            I’m a Product Designer & Product Manager focused on turning complex
            products into clear, usable, and business-aligned experiences. I
            don’t just design screens — I shape systems that teams can build,
            users can understand, and businesses can grow with.
          </p>

          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-white/40">
              Core competencies
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-white/40">
              Tools & stack
            </p>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-[#108549]/12 px-4 py-2 text-sm font-medium text-[#8ee0b4]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-4 mt-10 md:grid-cols-3">
        {principles.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#108549]/40 hover:bg-[#108549]/5"
          >
            <p className="text-sm text-[#8ee0b4]">0{index + 1}</p>
            <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
            <p className="mt-3 leading-7 text-white/55">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;

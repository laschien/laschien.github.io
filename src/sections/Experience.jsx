import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { experience } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="px-6 mx-auto max-w-7xl py-28">
      <div className="text-center">
        <SectionLabel
          icon={<BriefcaseBusiness size={18} />}
          label="Experience"
        />

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#8ee0b4]">
          Journey
        </p>

        <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-bold tracking-[-0.04em] md:text-6xl">
          Professional experience shaped by product execution.
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto mt-16">
        <div className="absolute top-0 w-px h-full left-4 bg-white/10 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10">
          {experience.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={`${item.role}-${item.company}`}
                initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative grid gap-6 md:grid-cols-2 ${
                  isLeft ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                <div
                  className={`relative ml-12 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-[#108549]/40 hover:bg-[#108549]/5 md:ml-0 ${
                    isLeft ? "md:mr-10" : "md:ml-10"
                  }`}
                >
                  <div
                    className={`absolute top-7 hidden h-px w-10 bg-white/10 md:block ${
                      isLeft ? "right-[-40px]" : "left-[-40px]"
                    }`}
                  />

                  <span className="absolute -left-[38px] top-6 h-3 w-3 rounded-full bg-[#8ee0b4] shadow-[0_0_24px_rgba(142,224,180,0.65)] md:hidden" />

                  <p className="text-sm font-semibold text-[#8ee0b4]">
                    {item.date}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold leading-tight">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-white/45">{item.company}</p>

                  <p className="mt-5 leading-8 text-white/60">{item.text}</p>

                  <div className="mt-5 rounded-2xl border border-[#108549]/20 bg-[#108549]/10 px-4 py-3 text-sm text-[#8ee0b4]">
                    {item.highlight}
                  </div>
                </div>

                <span className="absolute left-4 top-7 hidden h-3 w-3 rounded-full bg-[#8ee0b4] shadow-[0_0_24px_rgba(142,224,180,0.65)] md:left-1/2 md:block md:-translate-x-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;

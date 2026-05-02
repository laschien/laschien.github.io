import { motion } from "framer-motion";
import { LineChart } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionLabel from "../components/SectionLabel";
import { skills } from "../data/skills";

function About() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";
  const isArabic = lang === "ar";

  const principles = t("about.principles", { returnObjects: true });
  const tools = ["Figma", "Notion", "React / Tailwind", "Analytics", "Jira"];

  return (
    <section id="about" className="px-6 mx-auto max-w-7xl py-28">
      <SectionLabel icon={<LineChart size={18} />} label={t("about.label")} />

      <div
        className={`mt-8 grid lg:items-stretch ${
          isArabic
            ? "gap-6 lg:gap-2 xl:gap-0 lg:grid-cols-[1fr_0.95fr]"
            : "gap-10 lg:gap-6 xl:gap-10 lg:grid-cols-[1fr_0.85fr]"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className={`${isArabic ? "lg:order-2 max-w-3xl lg:max-w-4xl xl:w-full" : ""}`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8ee0b4]">
            {t("about.eyebrow")}
          </p>

          <h2
            className={`mt-4 max-w-3xl font-bold tracking-[-0.04em] ${
              isArabic
                ? "text-4xl leading-[1.25] md:text-5xl"
                : "text-4xl md:text-6xl"
            }`}
          >
            {t("about.title")}
          </h2>

          <p className="max-w-3xl mt-6 text-lg leading-8 text-white/60">
            {t("about.description")}
          </p>

          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-white/40">
              {t("about.competencies")}
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.en}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65"
                >
                  {skill[lang]}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-white/40">
              {t("about.tools")}
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

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.65,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`relative w-full max-w-[560px] h-full ${
            isArabic ? "justify-self-start lg:order-1" : "justify-self-end"
          }`}
        >
          <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-[#108549]/20 blur-3xl" />

          <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3">
            <div className="h-full overflow-hidden rounded-[1.5rem]">
              <img
                src="/about.webp"
                alt="Ahmed portrait"
                className="max-h-[600px] min-h-[520px] w-full object-cover object-top grayscale-[35%]"
              />
            </div>

            <div
              className={`absolute bottom-8 rounded-2xl border border-white/10 bg-[#0c1512]/90 px-5 py-4 backdrop-blur ${
                isArabic ? "right-8 text-right" : "left-8"
              }`}
            >
              <p className="text-4xl font-extrabold tracking-[-0.04em] text-[#8ee0b4]">
                {t("about.badgeNumber")}
              </p>
              <p className="mt-1 text-sm text-white/55">
                {t("about.badgeLabel")}
              </p>
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
            <p className="text-sm text-[#8ee0b4]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
            <p className="mt-3 leading-7 text-white/55">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;

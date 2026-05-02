import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionLabel from "../components/SectionLabel";
import { experience } from "../data/experience";

function Experience() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";
  const isArabic = lang === "ar";

  return (
    <section id="experience" className="px-6 mx-auto max-w-7xl py-28">
      <div className="text-center">
        <SectionLabel
          icon={<BriefcaseBusiness size={18} />}
          label={t("experience.label")}
        />

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#8ee0b4]">
          {t("experience.eyebrow")}
        </p>

        <h2
          className={`mx-auto mt-3 max-w-3xl font-bold tracking-[-0.04em] ${
            isArabic
              ? "text-4xl leading-[1.25] md:text-5xl"
              : "text-4xl md:text-6xl"
          }`}
        >
          {t("experience.title")}
        </h2>
      </div>

      {/* Keep timeline geometry LTR even when the page is RTL */}
      <div dir="ltr" className="relative max-w-5xl mx-auto mt-16">
        {/* Main vertical timeline line */}
        <div className="absolute top-0 w-px h-full left-4 bg-white/10 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {experience.map((item, index) => {
            /*
              English:
              0 left, 1 right, 2 left

              Arabic:
              0 right, 1 left, 2 right
            */
            const cardSide = isArabic
              ? index % 2 === 0
                ? "right"
                : "left"
              : index % 2 === 0
                ? "left"
                : "right";

            const cardColumn =
              cardSide === "left" ? "md:col-start-1" : "md:col-start-2";

            const cardSpacing = cardSide === "left" ? "md:mr-10" : "md:ml-10";

            const connectorPosition =
              cardSide === "left" ? "right-[-40px]" : "left-[-40px]";

            return (
              <motion.div
                key={`${item.role.en}-${item.company.en}`}
                initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative grid gap-6 group md:grid-cols-2"
              >
                <div
                  dir={isArabic ? "rtl" : "ltr"}
                  className={`relative ml-12 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-start transition duration-300 group-hover:-translate-y-1 group-hover:border-[#108549]/40 group-hover:bg-[#108549]/5 md:ml-0 ${cardColumn} ${cardSpacing}`}
                >
                  {/* Connector from card to center dot */}
                  <div
                    className={`absolute top-8 hidden h-px w-10 bg-white/10 transition duration-300 group-hover:bg-[#8ee0b4]/60 md:block ${connectorPosition}`}
                  />

                  {/* Mobile dot */}
                  <span className="absolute -left-[38px] top-6 h-3 w-3 rounded-full bg-[#8ee0b4] shadow-[0_0_24px_rgba(142,224,180,0.65)] transition duration-300 group-hover:scale-125 group-hover:shadow-[0_0_34px_rgba(142,224,180,0.9)] md:hidden" />

                  <p className="text-sm font-semibold text-[#8ee0b4]">
                    {item.date[lang]}
                  </p>

                  <h3
                    className={`mt-3 font-bold leading-tight ${
                      isArabic ? "text-2xl md:text-3xl" : "text-2xl"
                    }`}
                  >
                    {item.role[lang]}
                  </h3>

                  <p className="mt-1 text-white/45">{item.company[lang]}</p>

                  <p className="mt-5 leading-8 text-white/60">
                    {item.text[lang]}
                  </p>

                  <div className="mt-5 rounded-2xl border border-[#108549]/20 bg-[#108549]/10 px-4 py-3 text-sm text-[#8ee0b4]">
                    {item.highlight[lang]}
                  </div>
                </div>

                {/* Center dot */}
                <span className="absolute left-4 top-7 hidden h-3 w-3 rounded-full bg-[#8ee0b4] shadow-[0_0_24px_rgba(142,224,180,0.65)] transition duration-300 group-hover:scale-125 group-hover:shadow-[0_0_34px_rgba(142,224,180,0.9)] md:left-1/2 md:block md:-translate-x-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;

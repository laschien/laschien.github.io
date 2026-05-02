import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Counter from "../components/Counter";

function Impact() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const rawMetrics = t("impact.metrics", { returnObjects: true });
  const metrics = Array.isArray(rawMetrics)
    ? rawMetrics
    : Object.values(rawMetrics || {});

  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="grid gap-5 px-6 py-20 mx-auto max-w-7xl md:grid-cols-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={`${metric.label}-${index}`}
            initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.75,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -6,
              transition: { duration: 0.25 },
            }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1512] p-6 transition hover:border-[#108549]/40 hover:bg-[#108549]/5"
          >
            <div className="absolute right-[-40px] top-[-40px] h-28 w-28 rounded-full bg-[#108549]/0 blur-3xl transition duration-500 group-hover:bg-[#108549]/20" />

            <p
              className={`relative text-6xl font-extrabold tracking-[-0.05em] text-[#8ee0b4] ${
                isArabic ? "font-sans" : ""
              }`}
            >
              <Counter value={metric.number} />
              {metric.suffix}
            </p>

            <h3
              className={`relative mt-4 font-bold text-white ${
                isArabic ? "text-2xl leading-[1.4]" : "text-2xl"
              }`}
            >
              {metric.label}
            </h3>

            <p className="relative mt-3 leading-7 text-white/50">
              {metric.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Impact;

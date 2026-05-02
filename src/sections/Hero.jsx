import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const { scrollYProgress } = useScroll();

  const imageScale = useTransform(scrollYProgress, [0, 0.18], [0.88, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.12], [0.55, 1]);
  const imageRadius = useTransform(scrollYProgress, [0, 0.18], [48, 28]);
  const imageY = useTransform(scrollYProgress, [0, 0.18], [60, 0]);

  const meta = t("hero.meta", { returnObjects: true });

  return (
    <section className="relative flex flex-col items-center justify-center max-w-5xl min-h-screen px-6 pt-32 mx-auto text-center">
      <div className="absolute top-20 h-[300px] w-[300px] rounded-full bg-[#108549]/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#108549]/30 bg-[#108549]/10 px-4 py-2 text-sm text-[#8ee0b4]">
          {t("hero.badge")}
        </div>

        <h1
          className={`mx-auto max-w-4xl text-4xl font-extrabold tracking-[-0.04em] md:text-6xl lg:text-7xl ${
            isArabic
              ? "text-6xl md:text-6xl leading-[1.25]"
              : "text-4xl md:text-6xl lg:text-7xl"
          }`}
        >
          {t("hero.title")}
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-white/60">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col items-center gap-4 mt-8 sm:flex-row sm:justify-center">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-[#108549] px-6 py-3 font-semibold text-white transition hover:bg-[#0c6f3d]"
          >
            {t("hero.primaryCta")}
          </a>

          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 font-semibold text-white transition border rounded-full border-white/10 bg-white/5 hover:bg-white/10"
          >
            {t("hero.secondaryCta")}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm text-white/45">
          {meta.map((item, index) => (
            <span key={item}>
              {index > 0 && <span className="mx-1">·</span>}
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        style={{
          scale: imageScale,
          opacity: imageOpacity,
          y: imageY,
          borderRadius: imageRadius,
        }}
        className="mt-14 w-full max-w-4xl origin-top overflow-hidden border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-black/40"
      >
        <div className="overflow-hidden rounded-[1.5rem]">
          <img
            src="/laschien.jpg"
            alt="Ahmed portfolio portrait"
            className="h-[560px] w-full object-cover object-top md:h-[680px] lg:h-[780px]"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;

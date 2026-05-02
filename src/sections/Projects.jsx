import { ArrowUpRight, Layers } from "lucide-react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import SectionLabel from "../components/SectionLabel";

function Projects() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";
  const isArabic = lang === "ar";

  return (
    <section id="work" className="px-6 mx-auto max-w-7xl py-28">
      <SectionLabel icon={<Layers size={18} />} label={t("projects.label")} />

      <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
        <h2
          className={`max-w-4xl font-bold tracking-[-0.04em] ${
            isArabic
              ? "text-4xl leading-[1.25] md:text-5xl"
              : "text-4xl md:text-6xl"
          }`}
        >
          {t("projects.title")}
        </h2>

        <p className="max-w-md text-lg leading-8 text-white/55">
          {t("projects.subtitle")}
        </p>
      </div>

      <div className="grid gap-5 mt-14 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title.en}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-[#108549]/50 hover:bg-[#108549]/5"
          >
            <ProjectImage image={project.image} title={project.title[lang]} />

            <div className="p-6">
              <p className="text-sm font-medium text-[#8ee0b4]">
                {project.category[lang]}
              </p>

              <h3
                className={`mt-3 font-bold leading-tight ${
                  isArabic ? "text-2xl md:text-3xl" : "text-3xl"
                }`}
              >
                {project.title[lang]}
              </h3>

              <div className="flex flex-col gap-2 mt-4 text-sm text-white/45">
                <span>{project.role[lang]}</span>
                <span className="text-[#8ee0b4]">{project.impact[lang]}</span>
              </div>

              <p className="mt-5 min-h-[96px] text-white/60">
                {project.description[lang]}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags[lang].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs border rounded-full border-white/10 bg-black/10 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition hover:border-[#108549]/50 hover:bg-[#108549]/10">
                {t("projects.cta")}
                <ArrowUpRight
                  size={16}
                  className={`transition group-hover:-translate-y-1 ${
                    isArabic
                      ? "rotate-y-180 group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  }`}
                />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full border border-[#108549]/30 bg-[#108549]/10 px-6 py-3 font-semibold text-[#8ee0b4] transition hover:border-[#108549]/60 hover:bg-[#108549]/15"
        >
          {t("projects.viewAll")}
          <ArrowUpRight size={18} className={isArabic ? "rotate-y-180" : ""} />
        </a>
      </div>
    </section>
  );
}

function ProjectImage({ image, title }) {
  return (
    <div className="relative h-56 overflow-hidden border-b border-white/10 bg-[#0c1512]">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full transition duration-500 opacity-0 group-hover:scale-105"
        onLoad={(event) => {
          event.currentTarget.classList.remove("opacity-0");
          event.currentTarget.classList.add("opacity-100");
        }}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      <div className="absolute inset-0 -z-0 bg-gradient-to-br from-[#108549]/25 via-white/[0.04] to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-4 py-2 text-sm border rounded-full border-white/10 bg-black/20 text-white/45 backdrop-blur">
          Project image placeholder
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#07100d]/70 via-transparent to-transparent" />
    </div>
  );
}

export default Projects;

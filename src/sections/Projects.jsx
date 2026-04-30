import { ArrowUpRight, Layers } from "lucide-react";
import { projects } from "../data/projects";
import SectionLabel from "../components/SectionLabel";
import ProjectPreview from "../components/ProjectPreview";

function Projects() {
  return (
    <section id="work" className="px-6 mx-auto max-w-7xl py-28">
      <SectionLabel icon={<Layers size={18} />} label="Selected Work" />

      <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
        <h2 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] md:text-6xl">
          Selected case studies across SaaS, dashboards, and product systems.
        </h2>

        <p className="max-w-md text-lg leading-8 text-white/55">
          A focused collection of product work where strategy, UX, and execution
          come together.
        </p>
      </div>

      <div className="grid gap-5 mt-14 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group flex min-h-[620px] flex-col rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#108549]/50 hover:bg-[#108549]/5"
          >
            <ProjectPreview index={index} />

            <div className="mt-8">
              <p className="text-sm font-medium text-[#8ee0b4]">
                {project.category}
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight">
                {project.title}
              </h3>

              <div className="flex flex-col gap-2 mt-4 text-sm text-white/45">
                <span>{project.role}</span>
                <span className="text-[#8ee0b4]">{project.impact}</span>
              </div>

              <p className="mt-5 leading-8 text-white/60">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs border rounded-full border-white/10 bg-black/10 text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-8 mt-auto">
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition hover:border-[#108549]/50 hover:bg-[#108549]/10">
                View case study
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

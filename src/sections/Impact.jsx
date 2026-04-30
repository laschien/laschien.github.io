import { motion } from "framer-motion";
import Counter from "../components/Counter";

function Impact() {
  const metrics = [
    {
      number: 7,
      suffix: "+",
      label: "Years in UI/UX Design",
      detail:
        "Designing dashboards, SaaS platforms, mobile apps, and business tools.",
    },
    {
      number: 3,
      suffix: "+",
      label: "Product Domains",
      detail:
        "Security operations, e-commerce SaaS, and AI/ML monitoring systems.",
    },
    {
      number: 6,
      suffix: "",
      label: "Developers Led",
      detail:
        "Coordinating backend, frontend, and mobile teams from idea to delivery.",
    },
  ];

  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.16,
            },
          },
        }}
        className="grid gap-5 px-6 py-20 mx-auto max-w-7xl md:grid-cols-3"
      >
        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            variants={{
              hidden: {
                opacity: 0,
                y: 34,
                filter: "blur(10px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileHover={{
              y: -6,
              transition: { duration: 0.25 },
            }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1512] p-6 transition hover:border-[#108549]/40 hover:bg-[#108549]/5"
          >
            <div className="absolute right-[-40px] top-[-40px] h-28 w-28 rounded-full bg-[#108549]/0 blur-3xl transition duration-500 group-hover:bg-[#108549]/20" />

            <p className="relative text-6xl font-extrabold tracking-[-0.05em] text-[#8ee0b4]">
              <Counter value={metric.number} />
              {metric.suffix}
            </p>

            <h3 className="relative mt-4 text-2xl font-bold text-white">
              {metric.label}
            </h3>

            <p className="relative mt-3 leading-7 text-white/50">
              {metric.detail}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Impact;

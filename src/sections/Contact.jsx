import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import SectionLabel from "../components/SectionLabel";

function Contact() {
  const links = [
    {
      label: "Email",
      value: "hello@laschien.me",
      href: "mailto:hello@laschien.me",
    },
    {
      label: "LinkedIn",
      value: "Connect professionally",
      href: "https://www.linkedin.com/in/laschien/",
    },
    {
      label: "GitHub",
      value: "View projects & code",
      href: "https://github.com/laschien",
    },
  ];

  return (
    <section id="contact" className="px-6 py-24 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-10"
      >
        <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-[#108549]/15 blur-[90px]" />

        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <SectionLabel icon={<Mail size={18} />} label="Contact" />

            <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-[-0.04em] md:text-6xl">
              Let’s build something clear and useful.
            </h2>

            <p className="max-w-xl mt-5 text-lg leading-8 text-white/55">
              Available for product design, SaaS UX, dashboard design, product
              strategy, and selected freelance collaborations.
            </p>
          </div>

          <div className="grid gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0c1512] px-5 py-4 transition hover:border-[#108549]/40 hover:bg-[#108549]/5"
              >
                <div>
                  <p className="text-sm text-[#8ee0b4]">{link.label}</p>
                  <p className="mt-1 text-white/55">{link.value}</p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-white/35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8ee0b4]"
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;

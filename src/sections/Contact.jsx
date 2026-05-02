import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionLabel from "../components/SectionLabel";

function Contact() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const links = [
    {
      label: t("contact.links.email"),
      value: t("contact.links.emailValue"),
      href: "mailto:hello@laschien.me",
    },
    {
      label: t("contact.links.linkedin"),
      value: t("contact.links.linkedinValue"),
      href: "https://www.linkedin.com/",
    },
    {
      label: t("contact.links.github"),
      value: t("contact.links.githubValue"),
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
        <div
          className={`absolute top-[-80px] h-72 w-72 rounded-full bg-[#108549]/15 blur-[90px] ${
            isArabic ? "left-[-80px]" : "right-[-80px]"
          }`}
        />

        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <SectionLabel
              icon={<Mail size={18} />}
              label={t("contact.label")}
            />

            <h2
              className={`mt-6 max-w-2xl font-bold tracking-[-0.04em] ${
                isArabic
                  ? "text-4xl leading-[1.25] md:text-5xl"
                  : "text-4xl md:text-6xl"
              }`}
            >
              {t("contact.title")}
            </h2>

            <p className="max-w-xl mt-5 text-lg leading-8 text-white/55">
              {t("contact.description")}
            </p>

            <div className="flex flex-col gap-3 mt-8 sm:flex-row">
              <a
                href="mailto:hello@laschien.me"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#108549] px-5 py-3 font-semibold transition hover:bg-[#0c6f3d]"
              >
                {t("contact.emailCta")}
                <ArrowUpRight
                  size={18}
                  className={isArabic ? "rotate-y-180" : ""}
                />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold transition hover:border-[#108549]/40 hover:bg-[#108549]/10"
              >
                {t("contact.linkedinCta")}
                <ArrowUpRight
                  size={18}
                  className={isArabic ? "rotate-y-180" : ""}
                />
              </a>
            </div>
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
                  className={`text-white/35 transition group-hover:-translate-y-1 group-hover:text-[#8ee0b4] ${
                    isArabic
                      ? "rotate-y-180 group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  }`}
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

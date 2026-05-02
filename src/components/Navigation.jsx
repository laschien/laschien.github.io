import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

function Navigation() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  const navItems = [
    { label: t("nav.work"), href: "work" },
    { label: t("nav.about"), href: "about" },
    { label: t("nav.experience"), href: "experience" },
    { label: t("nav.contact"), href: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#07100d]/75 backdrop-blur-xl">
      <nav className="relative flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center"
          aria-label="Go to top"
        >
          <img
            src={isArabic ? "/logo-ar.png" : "/logo-en.png"}
            alt="Ahmed Lasheen"
            className="h-10 cursor-pointer"
          />
        </button>

        <div className="absolute items-center hidden gap-8 text-sm -translate-x-1/2 left-1/2 text-white/60 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollToSection(item.href)}
              className="transition cursor-pointer hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 h-10 text-sm font-medium transition hover:border-[#108549]/60 hover:bg-[#108549]/10 cursor-pointer"
          >
            {t("nav.cta")}
          </button>

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Change language"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-[#108549]/60 hover:bg-[#108549]/10 hover:text-white cursor-pointer"
          >
            {t("nav.language")}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;

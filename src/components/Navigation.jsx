import { useTranslation } from "react-i18next";

function Navigation() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#07100d]/75 backdrop-blur-xl">
      <nav className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <a href="#" className="text-sm font-semibold tracking-wide">
          Ahmed<span className="text-[#108549]">.</span>
        </a>

        <div className="items-center hidden gap-8 text-sm text-white/60 md:flex">
          <a href="#work" className="transition hover:text-white">
            {t("nav.work")}
          </a>
          <a href="#about" className="transition hover:text-white">
            {t("nav.about")}
          </a>
          <a href="#experience" className="transition hover:text-white">
            {t("nav.experience")}
          </a>
          <a href="#contact" className="transition hover:text-white">
            {t("nav.contact")}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition hover:border-[#108549]/60 hover:bg-[#108549]/10"
          >
            {t("nav.cta")}
          </a>

          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-white/10 bg-white/5 h-9 w-9 text-sm text-center font-medium text-white/70 transition hover:border-[#108549]/60 hover:bg-[#108549]/10 hover:text-white cursor-pointer"
          >
            {t("nav.language")}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;

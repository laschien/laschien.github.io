import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="px-6 py-8 border-t border-white/10">
      <div className="flex flex-col justify-between gap-4 mx-auto text-sm max-w-7xl text-white/40 md:flex-row">
        <p>{t("footer.left")}</p>
        <p>{t("footer.right")}</p>
      </div>
    </footer>
  );
}

export default Footer;

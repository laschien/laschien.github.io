import { motion } from "framer-motion";

function SectionLabel({ icon, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-2 rounded-full border border-[#108549]/30 bg-[#108549]/10 px-4 py-2 text-sm font-medium text-[#8ee0b4]"
    >
      {icon && <span className="opacity-80">{icon}</span>}
      <span>{label}</span>
    </motion.div>
  );
}

export default SectionLabel;

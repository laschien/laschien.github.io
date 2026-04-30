function ProjectPreview({ index }) {
  return (
    <div className="relative h-52 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c1512] p-4">
      <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-[#108549]/25 blur-3xl" />

      <div className="relative flex flex-col justify-between h-full">
        <div className="flex items-center justify-between">
          <div className="w-24 h-3 rounded-full bg-white/15" />
          <div className="h-7 w-16 rounded-full bg-[#108549]/20" />
        </div>

        {index === 0 && (
          <div className="grid grid-cols-[0.8fr_1fr] gap-3">
            <div className="rounded-2xl bg-[#108549]/20 p-3">
              <div className="h-2 w-14 rounded-full bg-[#8ee0b4]/70" />
              <div className="mt-8 h-14 rounded-xl bg-white/10" />
            </div>
            <div className="space-y-2">
              <div className="h-8 rounded-xl bg-white/10" />
              <div className="h-8 rounded-xl bg-white/[0.07]" />
              <div className="h-8 rounded-xl bg-white/[0.07]" />
            </div>
          </div>
        )}

        {index === 1 && (
          <div className="grid grid-cols-3 gap-3">
            <div className="h-24 rounded-2xl bg-white/10" />
            <div className="h-24 rounded-2xl bg-[#108549]/20" />
            <div className="h-24 rounded-2xl bg-white/10" />
          </div>
        )}

        {index === 2 && (
          <div className="flex items-end h-24 gap-2">
            {[45, 70, 50, 85, 65, 95].map((height, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-lg bg-[#108549]/60"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectPreview;

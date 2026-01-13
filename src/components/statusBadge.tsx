export default function StatusBadge() {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#6207FF]/30 bg-[#6207FF]/10 backdrop-blur-sm transition-all hover:bg-[#6207FF]/20 mb-4">
        <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6207FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6207FF]"></span>
        </span>
        <span className="text-sm font-medium text-[#6207FF]">
            Disponível para novas oportunidades
        </span>
        </div>
    );
}


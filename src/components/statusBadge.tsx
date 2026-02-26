export default function StatusBadge() {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#5C1D25]/30 bg-[#5C1D25]/10 backdrop-blur-sm transition-all hover:bg-[#640410]/20 mb-4">
        <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5C1D25] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5C1D25]"></span>
        </span>
        <span className="text-sm font-medium text-[#5C1D25]">
            Disponível para novas oportunidades
        </span>
        </div>
    );
}


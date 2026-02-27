export default function StatusBadge() {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#A2192B]/30 bg-[#A2192B]/15 backdrop-blur-sm transition-all hover:bg-[#640410]/20 mb-4">
        <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A2192B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A2192B]"></span>
        </span>
        <span className="text-sm font-medium text-[#A2192B]">
            Disponível para novas oportunidades
        </span>
        </div>
    );
}


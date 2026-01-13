'use client'

import { useState } from 'react';
import Image from 'next/image';
import git from "@/assets/git.svg"
import linkedin from "@/assets/linkedin.svg"

export default function MenuLateral() {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => setIsOpen(!isOpen);

return (
<>
    {/* Botão Hambúrguer - Agora visível em todos os tamanhos (removido md:hidden) */}
    <button 
    onClick={toggleMenu}
    className="fixed top-5 right-5 z-50 p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg shadow-md hover:bg-slate-50 transition-all"
    aria-label="Abrir menu"
    >
    <div className="w-6 h-5 flex flex-col justify-between">
        <span className={`h-0.5 w-full bg-slate-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`h-0.5 w-full bg-slate-600 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`h-0.5 w-full bg-slate-600 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
    </div>
    </button>

    {/* Menu Lateral (Aside) - Sempre fixo e por cima */}
    <aside className={`
    fixed top-0 right-0 h-full w-20 md:w-24 bg-white/40 backdrop-blur-md border-l border-white/20 z-40
    transition-transform duration-500 ease-in-out
    flex items-center justify-center
    ${isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'}
    `}>
    <ul className="flex flex-col items-center gap-10">
        <li className="hover:scale-110 transition-transform">
        <a href="https://github.com/LilianeFalcao" target="_blank" rel="noreferrer">
            <Image src={git} alt="github icon" width={28} height={28} className="opacity-80 hover:opacity-100" />
        </a>
        </li>
        <li className="hover:scale-110 transition-transform">
        <a href="https://www.linkedin.com/in/lilianefalcao/" target="_blank" rel="noreferrer">
            <Image src={linkedin} alt="linkedin icon" width={28} height={28} className="opacity-80 hover:opacity-100" />
        </a>
        </li>
    </ul>
    </aside>

    {/* Overlay: Escurece o fundo levemente quando aberto */}
    {isOpen && (
    <div 
        onClick={toggleMenu}
        className="fixed inset-0 bg-black/5 backdrop-blur-[1px] z-30 transition-opacity"
    />
    )}
</>
);
}
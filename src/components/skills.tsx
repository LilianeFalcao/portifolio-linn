interface SkillBadgeProps {
  text: string;
  isHighlight?: boolean; 
}

const SkillBadge = ({ text, isHighlight }: SkillBadgeProps) => (
  <span className={`
    px-5 py-2 text-sm font-bold rounded-lg transition-all duration-300 cursor-default shadow-sm
    ${isHighlight 
      ? "bg-[#5C1D25] text-white hover:bg-[#8B2B36] hover:scale-110 shadow-[#5C1D25]/20" 
      : "border-2 border-[#5C1D25] text-[#5C1D25] hover:bg-[#5C1D25] hover:text-white"
    }
  `}>
    {text}
  </span>
);

export default function Skills() {
  const highlights = ["ReactJS", "ReactNative", "Next.js", "Tailwind CSS", "Python", "JavaScript", "SQL"];
  const hardSkills = ["Node.js", "REST API", "Figma", "POSTMAN", "Git/Github"];
  const softSkills = ["Trabalho em Equipe", "Resolução de Problemas", "Adaptabilidade", "Organização"];

  return (
    <section className="p-8 flex flex-col gap-12 max-w-4xl mx-auto">
      {/* Seção de Hard Skills */}
      <div>
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
          <div className="max-w-2xl text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-[#5C1D25] uppercase tracking-wider">Hard Skills</h3>
            <p className="text-slate-600 leading-relaxed">
              Durante minha formação no curso técnico e na graduação no CEFET-MG, tive contato com diversas linguagens e ferramentas de desenvolvimento;
              entretanto, possuo maior familiaridade com:
            </p>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#5C1D25] to-transparent hidden md:block mb-2" />
        </div>

        <div className="flex flex-wrap gap-3">
          {/* Renderiza primeiro os destaques em vinho sólido */}
          {highlights.map((skill) => (
            <SkillBadge key={skill} text={skill} isHighlight />
          ))}
          {/* Renderiza o restante com o estilo outline */}
          {hardSkills.map((skill) => (
            <SkillBadge key={skill} text={skill} />
          ))}
        </div>
      </div>

      {/* Seção de Soft Skills */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-[#5C1D25] uppercase tracking-wider">Soft Skills</h3>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#5C1D25] to-transparent" />
        </div>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill) => (
            <SkillBadge key={skill} text={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
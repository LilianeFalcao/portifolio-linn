// Sub-componente para os badges individuais
interface SkillBadgeProps {
  text: string;
}

const SkillBadge = ({ text }:SkillBadgeProps) => (
  <span className="px-4 py-1.5 text-sm font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-full transition-all duration-200 hover:bg-slate-200 hover:border-slate-300 hover:scale-105 cursor-default shadow-sm">
    {text}
  </span>
);

export default function Skills() {
  const hardSkills = ["ReactJS", "Python", "Node.js", "REST API", "Next.js", "Tailwind CSS", "Figma"];
  const softSkills = ["Trabalho em Equipe", "Resolução de Problemas", "Adaptabilidade", "Organização"];

  return (
    <section className="p-8 flex flex-col gap-10 max-w-4xl mx-auto">
      {/* Seção de Hard Skills */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div>
          <h3 className="text-xl font-bold text-slate-900">Hard Skills</h3>
          <h2>Durante minha formação no curso técnico e na graduação, tive contato com diversas linguagens de programação; entretanto, possuo maior familiaridade com:</h2>
          </div>
          <div className="h-[1px] flex-1 bg-slate-200 ml-4" />
        </div>
        <div className="flex flex-wrap gap-3">
          {hardSkills.map((skill) => (
            <SkillBadge key={skill} text={skill} />
          ))}
        </div>
      </div>

      {/* Seção de Soft Skills */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-xl font-bold text-slate-900">Minhas Soft Skills</h3>
          <div className="h-[1px] flex-1 bg-slate-200 ml-4" />
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
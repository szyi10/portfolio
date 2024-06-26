import { techStack } from "../../lib/constants"

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20">
      <div className="flex-container flex-wrap gap-4 max-w-screen-lg justify-center">
        {techStack.map((stack) => (
          <div
            key={stack.label}
            className="flex items-center border border-neutral-300 rounded-[6px] gap-2 px-4 py-2 hover:bg-neutral-300 transition-colors cursor-default"
          >
            <img src={stack.icon} alt={stack.label} height={20} width={20} />
            <p className="text-sm font-semibold">{stack.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack

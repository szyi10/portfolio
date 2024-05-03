import { techStack } from "../../lib/constants"

const TechStack = () => {
  return (
    <section id="tech-stack" className="my-20">
      <div className="flex-container flex-wrap gap-4 max-w-screen-lg justify-center">
        {techStack.map((stack) => (
          <div
            key={stack.label}
            className="flex items-center border border-neutral-300 rounded-full gap-2 px-4 py-2"
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

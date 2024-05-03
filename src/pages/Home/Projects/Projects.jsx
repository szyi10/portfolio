import { useEffect, useState } from "react"
import { projects, projectCategoires } from "../../../lib/projects"

import ProjectCategory from "./ProjectCategory"
import Project from "./Project"

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [filteredProjects, setFilteredProjects] = useState([])

  useEffect(() => {
    if (selectedCategory !== "") {
      let filtered = projects.filter((project) =>
        project.tags.includes(selectedCategory)
      )
      setFilteredProjects(filtered)
    } else {
      setFilteredProjects(projects)
    }
  }, [selectedCategory])

  const selectCategory = (category) => {
    setSelectedCategory(category)
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center">
          <h6 className="uppercase text-sm font-medium tracking-widest text-neutral-500 mb-5">
            Projects
          </h6>
          <h3 className="text-4xl leading-tight font-bold mb-4">
            My portfolio
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {projectCategoires.map((category) => (
            <ProjectCategory
              key={category}
              category={category}
              selected={selectedCategory}
              selectCategory={selectCategory}
            />
          ))}
        </div>
        <div className="flex flex-col mt-8">
          {filteredProjects.map((project, index) => (
            <Project key={project.name} data={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

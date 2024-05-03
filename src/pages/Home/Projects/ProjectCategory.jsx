import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

const ProjectCategory = ({ category, selected, selectCategory }) => {
  const [isCategorySelceted, setIsCategorySelceted] = useState(false)

  useEffect(() => {
    if (selected === category) {
      setIsCategorySelceted(true)
    } else {
      setIsCategorySelceted(false)
    }
  }, [selected, category])

  const chooseCategory = () => {
    if (isCategorySelceted) {
      selectCategory("")
      setIsCategorySelceted(false)
    } else {
      selectCategory(category)
    }
  }

  return (
    <button
      onClick={chooseCategory}
      className={twMerge(
        "flex items-center border border-neutral-300 rounded-[6px] gap-2 px-4 py-2 hover:bg-neutral-300 transition-colors cursor-pointer",
        isCategorySelceted &&
          "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-700 hover:border-neutral-700"
      )}
    >
      <p className="text-sm font-semibold">{category}</p>
    </button>
  )
}

export default ProjectCategory

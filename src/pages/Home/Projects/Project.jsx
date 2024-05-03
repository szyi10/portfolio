const Project = ({ data, index }) => {
  return (
    <article className="group/project cursor-pointer flex flex-col md:flex-row gap-8 lg:gap-16 last-of-type:border-0 border-b border-b-neutral-300 pt-4 pb-6 ">
      <div className="flex items-center w-full md:w-1/2">
        <div>
          <span className="text-lg tracking-widest font-bold text-neutral-700">
            0{index + 1}.
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-500 mt-1 leading-normal">
            <span className="text-neutral-900 font-bold">{data.name}:</span>{" "}
            {data.description}
          </h3>
          <div className="block md:hidden">
            <img
              src={data.image}
              alt={data.name}
              className="rounded-[6px] mt-4 shadow"
            />
            <div className="flex gap-2 mt-2">
              <button className="button text-xs px-6 py-3 w-1/2">
                Preview
              </button>
              <button className="button-outline text-xs px-6 py-3 w-1/2">
                Source code
              </button>
            </div>
          </div>
          <div className="mt-4 md:mt-6 flex justify-center md:justify-normal gap-2">
            {data.tags.map(
              (tag, idx) =>
                idx < 3 && (
                  <div
                    key={tag}
                    className="flex items-center border border-neutral-300 rounded-[6px] gap-2 px-4 py-2 hover:bg-neutral-300 transition-colors"
                  >
                    <p className="text-xs font-semibold text-neutral-700">
                      {tag}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:block w-1/2 relative">
        <img
          src={data.image}
          alt={data.name}
          className="rounded-[6px] shadow"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-900/50 opacity-0 rounded-[6px] transition-opacity flex items-center justify-center group-hover/project:opacity-100">
          <div className="flex gap-2">
            <a
              href={data.previewLink}
              className="button bg-white border-white text-black text-sm px-6 py-3"
            >
              Preview
            </a>
            <a
              href={data.githubLink}
              className="button-outline border-white text-white text-sm px-6 py-3"
            >
              Source code
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Project

import React from "react"

const Selector = ({ options, resultsPerPage, setResultsPerPage }) => {
  return (
    <div className="max-w-fit ml-auto my-4 drop-shadow-lg select-none">
      <p className="text-right px-1">Results</p>
      <div className="bg-slate-800 rounded-b-lg rounded-tl-lg p-2 ">
        {options.map((option) => (
          <span
            className={`py-1 px-2 cursor-pointer hover:bg-slate-700 hover:rounded-full ${
              option === resultsPerPage && "text-sky-500 font-bold"
            }`}
            key={`option-${option}`}
            onClick={() => setResultsPerPage(option)}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Selector

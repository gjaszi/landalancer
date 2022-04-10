import React, { useRef, createRef } from 'react'

const ButtonGroup = ({ values, defaultValue, setNumberOfResults }) => {
  const buttonRefs = useRef(values.map(() => createRef()))

  const handleClick = ({ current }) => {
    buttonRefs.current.forEach((ref) => {
      if (ref.current === current && current.classList.contains('bg-sky-500')) return
      if (ref.current === current && !current.classList.contains('bg-sky-500')) {
        setNumberOfResults(ref.current.innerText)
        ref.current.classList.remove('bg-slate-900')
        ref.current.classList.add('bg-sky-500')
      } else {
        ref.current.classList.remove('bg-sky-500')
        ref.current.classList.add('bg-slate-900')
      }
    })
  }

  return (
    <div className='button-group grid gap-2 grid-cols-4 bg-slate-800 rounded-lg p-2 text-center drop-shadow'>
      {buttonRefs.current.map((ref, i) => (
        <button className={values[i] === defaultValue ? 'bg-sky-500' : 'bg-slate-900'} key={`button-${i}`} ref={ref} onClick={() => handleClick(ref)}>
          {values[i]}
        </button>
      ))}
    </div>
  )
}

export default ButtonGroup

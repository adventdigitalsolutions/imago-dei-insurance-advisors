'use client'

function LinkButton({ buttonText }) {

  return (
    <div>
      <button type="button" className="rounded-md bg-royal-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-royal-blue-500 border border-transparent hover:border-yellow-300" onClick={() => {document.getElementById(`dialog`).showModal()}}>{buttonText}</button>
    </div>
  )
}

export default LinkButton
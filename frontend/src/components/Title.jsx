import React from 'react'

function Title({title1 ,title2, p}) {
  return (
    <div>
<h2 className='text-center p-4 text-2xl text-[#1f29e1] font-semibold'>{title1}</h2>
<p className='text-center text-gray-600'>{p}</p>
    </div>
  )
}

export default Title
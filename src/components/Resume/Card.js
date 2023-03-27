import React from 'react'

function Card(props) {
  return (
    <>
<div className='box box_shadow'>
    <div className='title_content d_flex' >
        <div className='title'>
<h2>{props.title}</h2>
        </div>
    </div>
</div>
    </>
  )
}

export default Card
import React from 'react'
import './Contact.css'
// import contact1 from 'https://tse1.mm.bing.net/th?id=OIP.YGgeNlYVH3Y5ntQqyS0F6QHaFh&pid=Api&P=0'


const Contact = () => {
  return (
<>
<section className='Contact' id='contact'>
    <div className='container top'>
        <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>LET'S WORK TOGETHER</h1>
        </div>
        <div className='content d_flex'>
            <div className='left'>
                <div className='box box_shadow'>
                    <div className='img'>
                        <img src='https://tse1.mm.bing.net/th?id=OIP.YGgeNlYVH3Y5ntQqyS0F6QHaFh&pid=Api&P=0' alt=''/>
                        <p>stay in touch* </p>
                    </div>
                    <div className='details'>
 <p><i class="fa-solid fa-phone">+987654321</i></p>
                        <p><i class="fa-solid fa-phone">superduper@puper.com</i></p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default Contact
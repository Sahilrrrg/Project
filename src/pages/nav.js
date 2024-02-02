import React from 'react'

function Nav() {
  return (
    <>
    <header className='head'> {/* header */}

    <div className='nav'>    {/* nav */}

    
    <img className='adjust' src='images\blocktunix_logo.svg'/>
  
 <div>   {/* ul strt */}
  <ul className='shift'>
    <li className='menu'>features</li>
    <li className='menu'>Wallet</li>
    <li className='menu'>Exchange</li>
  </ul>
 </div>    {/* ul end*/}

 </div>   {/* nav  end*/}
 </header>    {/* header end*/}

 <section className='section1'> {/* section strt*/}
 
 <div className='container'>   {/* con strt*/}
<div className='parent'>  {/* parent div strt */}
  <div className='left'>  {/* left strt */}
  
    <h1 className='block'>  Blocktunix <span className='wallet'>Wallet</span> <br></br>
    <span className='digi'>Your Digital Reserve!</span></h1>
  

    
    <p className='crypto'>Manage your cryptocurrency world wide with a<br></br>
    premium, secure & top-notch crypto wallet!</p>
  

    
    <button className='started'>GET STARTED</button>
  
       </div> {/* left end */}

  <div className='right'> {/* right*/}
    <img className='phone' src='images/bnr_img2.png'/>
  </div>
 {/* right end */}
  </div>  {/* parent div end */}
  </div>   {/* con end*/}
 </section>  {/* sec end*/}

 
 </>
  )
}

export default Nav
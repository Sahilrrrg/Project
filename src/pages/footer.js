import React from 'react'

function Footer() {
  return (
    <div className='black'> {/*main div*/}
      <div className='container '> {/*container div*/}
    <img className='blog' src='../images/blocktunix_logo.svg'></img>
    <p className='base'>Coinbase has a variety of features that make it<br></br>
    the best place to start trading </p>
    <br></br>
    <p className='follow'>Follow US On:</p>

    <div className='social'>
      <img className='app' src='../images/facebook.png'/>
      <img className='app' src='../images/twitter.png'/>
      <img className='app' src='../images/instagram.png'/>
      <img className='app' src='../images/linkedin.png'/>
    </div>
    <div className='about'>
    <div>
      <h4>ABOUT</h4>
      <p>Company</p>
      <p>Careers</p>
    </div>
    <div>
      <h4>RESOURCES</h4>
      <p>Bitcoin price</p>
      <p>Proof of Reserves</p>
      <p>Discoveer</p>
      <p>Help Centre</p>
      <p>Status</p>
    </div>
    <div>
      <h4>LEGAL</h4>
      <p>Terms of use</p>
      <p>Customer Protection</p>
      <p>Legal & compliance</p>
      <p>Privacy policy</p>
    </div>
    </div>

        </div> {/*contsiner div end*/}
    </div> 
  );
}

export default Footer
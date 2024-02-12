import React from 'react'

function Footer() {
  return (
    <div className='black'> {/*main div*/}
      <div className=' di_v  '> {/*container div*/}
      <div className='first_portion'  >  {/*first portion*/}
        <div> <img className='blog' src='../images/blocktunix_logo.svg'></img>
    <p className='base'>Coinbase has a variety of features that make it<br></br>
    the best place to start trading </p>
    <br></br>
    <p className='follow'>Follow US On:</p>
    </div>


    <div className='social'>
      <img className='app' src='../images/facebook.png'/>
      <img className='app' src='../images/twitter.png'/>
      <img className='app' src='../images/instagram.png'/>
      <img className='app' src='../images/linkedin.png'/>
    </div>

    </div>   {/*first portion end*/}

    <div>    {/*second portion start*/}
  
      <h4>ABOUT</h4> 
      <p>Company</p>
      <p>Careers</p>
    </div>        {/*second portion end*/}

    <div>       {/* third portion start*/}
      <h4>RESOURCES</h4>
      <p>Bitcoin price</p>
      <p>Proof of Reserves</p>
      <p>Discoveer</p>
      <p>Help Centre</p>
      <p>Status</p>
    </div>            {/*third portion end*/}
    <div>  {/*fourth portion start*/}
      <h4>Products</h4>
      <p>Features</p>
      <p>Wallet</p>
      <p>Exchange</p>
    </div> {/*fourth portion end*/}

    <div>     {/* fifth portion start*/}
      <h4>LEGAL</h4>
      <p>Terms of use</p>
      <p>Customer Protection</p>
      <p>Legal & compliance</p>
      <p>Privacy policy</p>
    </div>        {/*forth portion end*/}

    

        </div> {/*contsiner div end*/}

     {/* main div end*/}
     </div> 
  );
}

export default Footer
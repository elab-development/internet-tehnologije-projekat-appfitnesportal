import React from 'react'
import {BsInstagram, BsFacebook, BsYoutube, BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Footer(){
return (
<>
<div className='footer'>
<div className='logo'>
<img src="https://cdn.pixabay.com/photo/2019/10/23/06/56/avocado-4570642_1280.png" alt="" className='logoFooter' />
</div>
<div className='social'>
<Link className='icon' to='http://instagram.com'><BsInstagram size={25}/></Link>
<Link className='icon' to='http://facebook.com'><BsFacebook size={25}/></Link>
<Link className='icon' to='http://twitter.com'><BsTwitter size={25}/></Link>
<Link className='icon' to='http://youtube.com'><BsYoutube size={25}/></Link>
</div>
</div>
</>

);
}

export default Footer
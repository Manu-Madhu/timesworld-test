import React from 'react'

import walkV1 from '../../assets/images/walkV1.png';

const LoginBanner = () => {
  return (
    <div className='d-none d-md-block w-100 h-100 text-end align-content-center '>
      <img src={walkV1} alt="login banner" style={{width:'80%'}} />
    </div>
  )
}

export default LoginBanner

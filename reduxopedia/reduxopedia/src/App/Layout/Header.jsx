import React from 'react'
import logo from '../../images/react.png'

function Header() {
  return (
    <div className='pt-3 pl-2'>
       <img src={logo} style={{ height:'50px', verticalAlign:'top'}}></img>
       <span className='h2 pt-4 text-white-50'>React Course - Reduxopedia</span>
    </div>
  )
}

export default Header

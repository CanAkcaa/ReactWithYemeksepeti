import React, {useState} from 'react'
import { Typography } from 'antd';
import {Link, useNavigate} from 'react-router-dom'
import { Button, Radio, Space, Divider } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import {UserOutlined} from '@ant-design/icons'
function Navbar() {
  const [size, setSize] = useState<SizeType>('large'); 
  return(
    <>
    
<nav className= "bg-white shadow-xl">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
    <a href="/" className="flex items-center">
        <span className="self-center text-4xl font-semibold whitespace-nowrap text-rose-600 absolute bottom-100 left-10 font-sans">Yemeksepeti</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:white:bg-gray-900 dark:border-gray-700">
        <li>
          <Link className="block py-2 pl-3 pr-4 text-white bg-blue-800 rounded md:bg-transparent md:text-pink-600 md:p-0 dark:text-white md:dark:text-pink-600" style={{position: 'absolute', right: '50px', top: '15px'}} aria-current="page" to="/Login"><Button className='rounded-xl border-rose-600 bg-rose-600 font-bold' style={{width:"200px",height:"40px",color:"white",fontFamily:"sans-serif",fontSize:"16px"}} icon={<UserOutlined style={{position: "absolute",bottom:"12px",right: "160px",color:"white"}}/>}>Giriş Yap</Button></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
    
}
export default Navbar;
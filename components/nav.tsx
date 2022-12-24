import React from 'react'
import { useTheme } from 'next-themes';
import { useEffect ,useState} from 'react';
const Navbar = () => {
  const {systemTheme,theme,setTheme}=useTheme();
  const [mounted,setMounted]=useState(false);
  useEffect(() => setMounted(true), []);
  const toggleTheme=()=>{
    if(!mounted) return null;
    const currentTheme=theme==='system'?systemTheme:theme;
    if(currentTheme==='light'){
      return (
        <p 
        className='cursor-pointer text-gray-500 dark:text-gray-300 p-3'
        onClick={
          ()=>setTheme('dark')
        }>
          Dark 
        </p>
      )
    }else{
      return (
        <p
        className='cursor-pointer text-gray-500
        dark:text-gray-300 p-3'
        onClick={
          ()=>setTheme('light')
        }>
          Light
        </p>
      )
    }
  }

  return (
  <nav className='font-nunito
  flex
  justify-between
  items-center
  h-[10vh]
  p-4
  bg-white
  dark:bg-gray-800
  dark:text-white
  shadow-lg
  '>
    <h2 className="text-2xl font-bold">
      Where in the world?
    </h2>
    <p className='
    cursor-pointer
    text-gray-500
    '>
      {toggleTheme()}
      &nbsp;
    </p>
  </nav>
  )
}

export default Navbar
import React from 'react';

type props = {
  setSearch: (search: string) => void;
  setRegion: (region: string) => void;
}

const Searchbar = ({setSearch,setRegion}:props) => {

  const handleSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value);
  }

  return (
    <div className='p-4 flex justify-evenly'>
        <input 
        onChange={handleSearch}
        className='outline-none
        border-2
        border-gray-200
        rounded-lg
        p-2
        w-[60%]
        font-nunito
        text-gray-500
        placeholder-gray-500
        '   
        type="text" placeholder="Search for a country..." />
        <select name=""
          className='outline-none
          border-2 border-gray-200
          rounded-lg
          p-2
          w-[20%]
          font-nunito
          text-gray-500
          placeholder-gray-500
          '
          onChange={(e)=>setRegion(e.target.value)}
        id="">
            <option>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Searchbar;    
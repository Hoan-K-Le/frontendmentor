import React,{useState,useEffect} from 'react'

const NavBar = () => {
    const [archives,setArchieves] = useState(['Archive by day', 'Category Page', 'Top Page', 'Arthur Page', 'Results'])
    const [singlePosts, setSinglePosts] = useState(['Image Post', 'Gallery Post', 'Video Post', 'Audio Post'])
    const [pages, setPages] = useState(['Regular Page', '404 Page'])
  return (
    <div className='p-8  text-sm font-medium shadow-2xl shadow-slate-200 justify-around flex'>
        <div className='flex items-center gap-4 justify-around '>
            <button className='text-[#6f6fff]'>HOMEPAGE</button>
       <select className='w-[90px] text-center hover:text-[#6f6fff] cursor-pointer'>
        <option value="">Archives</option>
       {archives.map((archive) => (
        <option value={archive}>{archive}</option>
       ))}
        </select>
        <select className='w-[120px]text-center hover:text-[#6f6fff] cursor-pointer'>
            <option value="">Single Posts</option>
        {singlePosts?.map((post) => (
            <option value={post}>{post}</option>
        ))}
        </select>
        <select className='w-[75px] hover:text-[#6f6fff] cursor-pointer text-center'>
            <option value="">Pages</option>
            {pages?.map((page) => (
                <option value={page}>{page}</option>
            ))}
        </select>
        <button className='hover:text-[#6f6fff] '>Typography</button>
        <button className='hover:text-[#6f6fff] '>Documentation</button>
        </div>
     

        <div className='flex items-center'>
            <span>A</span>
            <span>M</span>
            <span>S</span>
            <span>l</span>
        </div>

    </div>
  )
}

export default NavBar
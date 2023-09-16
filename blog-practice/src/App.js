import NavBar from './components/NavBar'
function App() {
  return (
    <div className="">
     <NavBar/>
     <div className='pt-20 flex justify-center flex-col items-center'>
     <h2 className='text-4xl font-bold title-border header-title text-center'>Sakura Crystal</h2>
     <div className='flex flex-col items-center justify-center pt-10'>
     <h3 className='text-3xl font-medium'>Must-Get Crystal</h3>
     <p className='text-sm flex flex-col items-center text-[#999] mt-6 header-description'>The Best Crystal That Is Recommended To Everyone</p>
     </div>
     </div>
    </div>
  );
}

export default App;

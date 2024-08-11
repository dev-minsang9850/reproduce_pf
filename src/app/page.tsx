import Link from 'next/link';

export default function Home() {
  return (
    <div className="main">
      <div className="body p-8">
       <div className="logo text-2xl font-['D2Coding'] flex justify-start ml-5">MS-DEV</div>
       <div className="menu flex justify-end">
        <Link href={'/'} className='p-2'>Project</Link>
        <Link href={'/blog'} className='p-2'>Blog</Link>
        <Link href={'/tags'}className="p-2" >Tags</Link>
        <Link href={'/about'} className="p-2">About</Link>
        
       </div>
        <div className='border-t border-white'></div>
        <h1 className="bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-gradient-animated text-5xl p-8">
          Welcome to MS-DEV!
        </h1>
        <div className='container'>
          <div className="text-left text-3xl p-4 mt-8">Github</div>
          <img src="https://ghchart.rshah.org/219138/dev-minsang9850" className='bg-slate-800 rounded-xl p-4 flex justify-center'/>
          </div>
        </div>
      </div>
  );
}

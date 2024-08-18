import Link from 'next/link';
import GitHubCalendar from 'react-github-calendar';
import styles from '../app/css/home.module.css';


export default function Home() {
  return (
    <div className="main m-4">
      <div className="body p-8">
       <div className="logo text-2xl font-['D2Coding'] flex justify-start ml-5">MS-DEV</div>
       <div className="menu flex justify-end font-['D2Coding']">
        <Link href={'/'} className='p-3'>Project</Link>
        <Link href={'/blog'} className='p-3'>Blog</Link>
        <Link href={'/about'} className="p-3">About</Link>
       </div>
          <h1 className="Home bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 text-transparent bg-gradient-animated text-8xl  mt-10 p-4 font-bold ">
              Hello World!
          </h1>
        <h1 className="text-left text-xl p-4 mt-8 font-['D2Coding'] ">MINSANG LEE | DYHS BigData Department</h1>
        <h1 className="text-left text-xl p-4 ">이민상 | 덕영고등학교 빅데이터과</h1>
        <div className="containe md:flex-row flex-col">
          <div className="text-3xl p-4 mt-8 flex flex-col rounded-3xl">
              <div className="ml-6 mt-4 m-4">
              <p className="text-left text-3xl mb-10 font-['D2Coding']">Github</p>
            <GitHubCalendar username="dev-minsang9850" />
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
export default function blog(){
    return (
        <div className="main m-4">
        <div className="body p-8">
        <Link href={'/'} className="logo text-2xl font-['D2Coding'] flex justify-start ml-5">MS-DEV</Link>
            <div className="menu flex justify-end font-['D2Coding']">
                <Link href={'/Project'} className='p-3'>Project</Link>
                <Link href={'/blog'} className='p-3'>Blog</Link>
                <Link href={'/about'} className="p-3">About</Link>
                <div className="p-4">
                    <FaSearch />
                </div>
            </div>
            <div>
                blog
            </div>
        </div>
      </div>
    )
}
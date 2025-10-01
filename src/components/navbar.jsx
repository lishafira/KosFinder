import Logo from '../../public/logoKos.png'
import "../index.css"

export default function Navbar() {
    return (
    <header className="bg-none shadow-md h-19 justify-between flex">
        {/** BAGIAN KIRI */}
        <div className="bg-orange-300 w-[50%] px-5">
            {/** KIRI ATAS */}
            <div className='flex w-50 h-max'>
                <img src="logoKos.png" alt="logoKos" className='h-10'/>
                <p className="w-20 h-10 flex items-center px-2 font-sans ">
                KOSFINDER
                </p>
            </div>
            {/** KIRI BAWAH */}
            <div className='w-50 h-9 items-center flex pb-1.5'>
                <a href="#" className='px-4 font-sans'>
                    ABOUT
                </a>
                <a href="#" className='px-4 font-sans'>
                    SEARCH
                </a>
            </div>
        </div>
        {/** BAGIAN KANAN */}
        <div className='w-[50%]'>
            <div className=''></div>
        </div>
    </header>
    );
}

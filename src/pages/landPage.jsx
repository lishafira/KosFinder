import '../index.css'
import Navbar from '../components/navbar'

export default function landPage() {

    return(
        <>
        <Navbar />
        <div className="bg-image h-screen top-0 relative">
            <div className="absolute inset-0 bg-white/15 flex items-center justify-center">
                <p className='font-sans text-3xl font-bold'>Your Next Room is Just a Click Away</p>
            </div>
        </div>
        <div className='h-50 bg-cream'></div>
        </>
    )
}
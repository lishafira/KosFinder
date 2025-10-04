import '../index.css'
import Navbar from '../components/navbar'
import BaseCard from '../components/BaseCard'
import '../../public/gambarKos.png'

export default function landPage() {

    return(
        <>
        <Navbar />
        <div className="bg-image h-screen top-0 relative">
            <div className="absolute inset-0 bg-white/15 flex items-center justify-center">
                <p className='font-sans text-3xl font-bold'>Your Next Room is Just a Click Away</p>
            </div>
        </div>
        <div className='h-150 bg-cream flex justify-center items-center gap-75 '>
            <div>
                <BaseCard 
                    image='gambarKos.png'
                    title="Kos 1"
                    description="Deskripsi singkat"
                    price={1500000}
                    location={"Jakarta, Indonesia"}
                    additionalInfo={"Kamar mandi dalam, AC, WiFi"}
                />
            </div>
            <div>
                <BaseCard 
                    image="gambarKos.png"
                    title="Kos 2"
                    description="Deskripsi singkat"
                    price={1200000}
                    location={"Bandung, Indonesia"}
                    additionalInfo={"Kamar mandi luar, Non-AC, WiFi"}
                />
            </div>
            <div>
                <BaseCard
                    image="gambarKos.png"
                    title="Kos 3"
                    description="Deskripsi singkat"
                    price={1000000}
                    location={"Surabaya, Indonesia"}
                    additionalInfo={"Kamar mandi dalam, AC, No WiFi"}
                />
            </div>
        </div>
        </>
    )
}
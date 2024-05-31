import { Button } from "../ui/button"


function HomePageHeroSection() {
    

    return (
        <div className="relative">
        <div className="">
            <video src="portfolio-video.mp4" autoPlay loop muted className="w-[100vw] h-[90vh] object-cover">error</video>
        </div>

        <div className="absolute top-32 left-48 text-white ">
            <p className="text-4xl font-bold tracking-wide mb-3">TOP WEB DEVELOPMENT AND DIGITAL MARKETING AGENCY</p>
            <h1 className="text-8xl font-bold mb-3">WE GROW BRANDS <br /> ONLINE</h1>
            <p className="text-2xl tracking-widedest mb-7">Custom Websites, Branding & Digital Marketing Solutions</p>
            <Button className="p-6 text-xl bg-green-800">SPEAK WITH OUR EXPERTS</Button>
        </div>
        </div>
    )
}

export default HomePageHeroSection

import HomePageHeroSection from "@/components/HomePage/HomePageHeroSection"
import HomePageSection from "@/components/HomePage/HomePageSection"
import Navbar from "@/components/Navbar/Navbar"

const HomePage:React.FC = () => {
    return (
        <>
        <Navbar />
        <HomePageHeroSection />
        <HomePageSection />
        </>
    )
}

export default HomePage
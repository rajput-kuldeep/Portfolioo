import { MonitorPlay } from "lucide-react";

const HomePageSection:React.FC  = () => {

    return (
        <>
        <div className="flex flex-col gap-16 bg-[#00042A] text-white pt-10">
            <div>
            <p className="text-5xl font-bold text-center leading-tight">Creative Web Agency <br /> Delivering Custom Solutions</p>
            </div>
            <div className="flex text-[25px] flex-wrap gap-20 font-semibold justify-center items-center text-center">
                <p>Tailored Branding Strategies To <br /> Drive Engagement</p>
                <p>Effective Marketing Campaigns <br /> To Generate Growth</p>
                <p>Custom Web Design Solutions To <br /> Drive Conversions</p>
                <p>5 Star DesignRush Reviews</p>
                <p>Latest Web Design <br />AwardWeb Design Award</p>
            </div>
            <div className="flex justify-center items-center ">
            <MonitorPlay size={92} strokeWidth={1} className=""/>
            <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-widest">SEE OUR WORK</span>
                <span className="text-xl font-semibold tracking-widest">IN ACTION</span>
                <span className="font-semibold tracking-widest">2 MINUTES</span>
            </div>
            </div>
        </div>
        </>
    )
}

export default HomePageSection;

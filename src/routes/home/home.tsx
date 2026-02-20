import CTACard from "@/components/CTACard";
import ClassContents from "@/components/ClassContents";
import NewsLetter from "@/components/NewsLetter";

const Home = () => {
    return (
        <div className="flex-1 px-[120px] py-[64px] max-md:px-[20px] max-md:py-[28px]">
            <CTACard />
            <ClassContents />
            <NewsLetter />
        </div>
    );
};

export default Home;

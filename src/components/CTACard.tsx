import DButton from "./DButton";
import cardbg from "@/assets/cardbg.jpeg";

const CTACard = () => {
    return (
        <div className="relative flex flex-col justify-center px-[140px] py-[37px] w-full min-h-[400px] rounded-[10px] overflow-clip max-md:px-[20px]">
            <img
                src={cardbg}
                className="absolute w-full h-full inset-0 object-cover"
            />
            <div className="bg-card inset-0 absolute" />
            <div className="z-10 inset-0 flex gap-3 flex-col items-center max-md:items-stretch">
                <h1 className="heading1 max-md:heading4 text-text-light-primary text-center">
                    Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform
                    Video Interaktif!
                </h1>
                <p className="bodyMediumMedium max-md:bodySmallMedium text-text-light-primary text-center mb-3">
                    Temukan ilmu baru yang menarik dan mendalam melalui koleksi
                    video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda
                    juga dapat berpartisipasi dalam latihan interaktif yang akan
                    meningkatkan pemahaman Anda.
                </p>
                <DButton
                    style="primary"
                    title="Temukan Video Course Untuk Dipelajari"
                />
            </div>
        </div>
    );
};

export default CTACard;

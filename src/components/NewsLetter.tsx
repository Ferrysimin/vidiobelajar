import newsLetter from "@/assets/newsletter.jpeg";

const NewsLetter = () => {
    return (
        <div className="relative flex flex-col justify-center px-[140px] py-[37px] w-full min-h-[400px] rounded-[10px] overflow-clip max-md:px-[20px]">
            <img
                src={newsLetter}
                className="absolute w-full h-full inset-0 object-cover"
            />
            <div className="bg-card inset-0 absolute" />
            <div className="z-10 inset-0 flex gap-1 flex-col items-center max-md:items-stretch">
                <p className="bodyLargeMedium bodyMediumMedium text-text-light-secondary text-center">
                    NEWSLETTER
                </p>
                <h3 className="heading3 max-md:heading4 text-text-light-primary text-center">
                    Mau Belajar Lebih Banyak?
                </h3>
                <p className="bodyMediumRegular max-md:bodySmallRegular text-text-light-primary text-center mt-[6px] mb-9">
                    Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                    penawaran spesial dari program-program terbaik hariesok.id
                </p>

                <div className="flex p-2 bg-other-background-primary rounded-[10px] gap-[20px] max-md:gap-4 max-md:flex-col max-md:bg-transparent">
                    <input className="bodyMediumRegular max-md:bodySmallRegular pl-6 border-none outline-none w-[333px] placeholder:text-text-dark-secondary text-text-dark-primary py-[10px] rounded-[10px] max-md:text-center max-md:pl-0 max-md:w-full" placeholder="Masukkan emailmu"/>
                    <p className="py-[10px] px-[26px] bg-secondary rounded-[10px] text-text-light-primary bodyMediumBold max-md:bodySmallBold cursor-pointer text-center">Subscribe</p>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;

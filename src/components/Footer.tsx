import logo from "@/assets/logo.svg";
import linkedin from "@/assets/linkedin.svg";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import twitter from "@/assets/twitter.svg";
import arrowRight from "@/assets/arrowRight.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    const socialMedias = [
        {
            icon: linkedin,
            navigation: "https://www.linkedin.com/",
        },
        {
            icon: facebook,
            navigation: "https://www.facebook.com/",
        },
        {
            icon: instagram,
            navigation: "https://www.instagram.com/",
        },
        {
            icon: twitter,
            navigation: "https://www.twitter.com/",
        },
    ];

    const footerSubLinks = [
        {
            title: "Kategori",
            links: [
                {
                    name: "Digital & Teknologi",
                    navigation: "/",
                },
                {
                    name: "Pemasaran",
                    navigation: "/",
                },
                {
                    name: "Manajemen Bisnis",
                    navigation: "/",
                },
                {
                    name: "Pengembangan Diri",
                    navigation: "/",
                },
                {
                    name: "Design",
                    navigation: "/",
                },
            ],
        },
        {
            title: "Perusahaan",
            links: [
                {
                    name: "Tentang Kami",
                    navigation: "/",
                },
                {
                    name: "FAQ",
                    navigation: "/",
                },
                {
                    name: "Kebijakan Privasi",
                    navigation: "/",
                },
                {
                    name: "Ketentuan Layanan",
                    navigation: "/",
                },
                {
                    name: "Bantuan",
                    navigation: "/",
                },
            ],
        },
        {
            title: "Komunitas",
            links: [
                {
                    name: "Tips Sukses",
                    navigation: "/",
                },
                {
                    name: "Blog",
                    navigation: "/",
                },
            ],
        },
    ];

    return (
        <div className="px-[120px] py-[60px] flex flex-col gap-[20px] max-md:gap-4 bg-other-background-primary border-t border-other-border max-md:p-[20px]">
            <div className="flex justify-between items-start gap-4 max-md:flex-col">
                <div className="flex flex-col max-w-[352px] gap-3 max-md:gap-2 max-md:max-w-fit">
                    <img
                        src={logo}
                        className="h-[56px] w-[204px] object-fill mb-1 max-md:h-[36px] max-md:w-[170px] max-md:mb-2"
                    />
                    <p className="bodyLargeBold max-md:bodySmallBold  text-text-dark-primary">
                        Gali Potensi Anda Melalui Pembelajaran Video di
                        hariesok.id!
                    </p>
                    <p className="bodyMediumRegular max-md:bodySmallRegular text-text-dark-Primary">
                        Jl. Usman Effendi No. 50 Lowokwaru, Malang
                    </p>
                    <p className="bodyMediumRegular max-md:bodySmallRegular text-text-dark-Primary">
                        +62-877-7123-1234
                    </p>
                </div>
                <div className="flex justify-start gap-12 max-md:flex-col max-md:gap-3 max-md:w-full">
                    {footerSubLinks.map((sublink) => (
                        <>
                            <div className="flex flex-col gap-3 max-md:hidden">
                                <p className="bodyMediumBold text-text-dark-primary mb-1">
                                    {sublink.title}
                                </p>
                                {sublink.links.map((link) => (
                                    <Link
                                        to={link.navigation}
                                        className="bodyMediumMedium text-text-dark-secondary"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex justify-between cursor-pointer gap-2 md:hidden">
                                <p className="bodyLargeBold">{sublink.title}</p>
                                <img src={arrowRight} />
                            </div>
                        </>
                    ))}
                </div>
            </div>

            <div className="border-b border-other-border h-[33px] max-md:h-fit" />

            <div className="flex justify-between items-center gap-1 max-md:flex-col-reverse max-md:items-start max-md:gap-3">
                <p className="bodyMediumMedium text-text-dark-secondary">
                    @2023 Gerobak Sayur All Rights Reserved.
                </p>
                <div className="flex gap-[15px]">
                    {socialMedias.map((socialMedia) => (
                        <Link
                            to={socialMedia.navigation}
                            className="p-2 rounded-full border-[1.5px] border-other-border w-[35px] h-[35px]"
                        >
                            <img src={socialMedia.icon} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;

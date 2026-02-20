import content1 from "@/assets/contents/background/content1.png";
import content2 from "@/assets/contents/background/content2.jpeg";
import content3 from "@/assets/contents/background/content3.jpeg";
import content4 from "@/assets/contents/background/content4.jpeg";
import content5 from "@/assets/contents/background/content5.jpeg";
import content6 from "@/assets/contents/background/content6.jpeg";
import content7 from "@/assets/contents/background/content7.jpeg";
import content8 from "@/assets/contents/background/content8.jpeg";
import content9 from "@/assets/contents/background/content9.jpeg";
import avatar1 from "@/assets/contents/avatar/avatar1.png";
import avatar2 from "@/assets/contents/avatar/avatar2.png";
import avatar3 from "@/assets/contents/avatar/avatar3.png";
import avatar4 from "@/assets/contents/avatar/avatar4.png";
import avatar5 from "@/assets/contents/avatar/avatar5.png";
import avatar6 from "@/assets/contents/avatar/avatar6.png";
import avatar7 from "@/assets/contents/avatar/avatar7.png";
import avatar8 from "@/assets/contents/avatar/avatar8.png";
import avatar9 from "@/assets/contents/avatar/avatar9.png";
import ClassCard from "./ClassCard";

const ClassContents = () => {
    const categories = [
        "Semua Kelas",
        "Pemasaran",
        "Desain",
        "Pengembangan Diri",
        "Bisnis",
    ];
    const selected = categories[0];

    const allClasses = [
        {
            background: content1,
            title: "Big 4 Auditor Financial Analyst",
            description:
                "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            instructor: {
                name: "Jenna Ortega",
                job: "Senior Accountant",
                company: "Gojek",
                avatar: avatar1,
            },
            rating: {
                value: 3.5,
                from: 86,
            },
            price: 300000,
        },
        {
            background: content2,
            title: "Big 4 Auditor Financial Analyst",
            description:
                "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            instructor: {
                name: "Jenna Ortega",
                job: "Senior Accountant",
                company: "Gojek",
                avatar: avatar2,
            },
            rating: {
                value: 3.5,
                from: 86,
            },
            price: 300000,
        },
        {
            background: content3,
            title: "Big 4 Auditor Financial Analyst",
            description:
                "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            instructor: {
                name: "Jenna Ortega",
                job: "Senior Accountant",
                company: "Gojek",
                avatar: avatar3,
            },
            rating: {
                value: 3.5,
                from: 86,
            },
            price: 300000,
        },
        {
            background: content4,
            title: "Big 4 Auditor Financial Analyst",
            description:
                "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            instructor: {
                name: "Jenna Ortega",
                job: "Senior Accountant",
                company: "Gojek",
                avatar: avatar4,
            },
            rating: {
                value: 3.5,
                from: 86,
            },
            price: 300000,
        },
        {
            background: content5,
            title: "Big 4 Auditor Financial Analyst",
            description:
                "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            instructor: {
                name: "Jenna Ortega",
                job: "Senior Accountant",
                company: "Gojek",
                avatar: avatar5,
            },
            rating: {
                value: 3.5,
                from: 86,
            },
            price: 300000,
        },
        {
            background: content6,
            title: "Big 4 Auditor Financial Analyst",
            description:
                "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            instructor: {
                name: "Jenna Ortega",
                job: "Senior Accountant",
                company: "Gojek",
                avatar: avatar6,
            },
            rating: {
                value: 3.5,
                from: 86,
            },
            price: 300000,
        },
        {
            background: content7,
            title: "Big 4 Auditor Financial Analyst",
            description:
                "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            instructor: {
                name: "",
                job: "Senior Accountant",
                company: "Gojek",
                avatar: avatar7,
            },
            rating: {
                value: 3.5,
                from: 86,
            },
            price: 300000,
        },
        {
            background: content8,
            title: "Big 4 Auditor Financial Analyst",
            description:
                "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            instructor: {
                name: "Jenna Ortega",
                job: "Senior Accountant",
                company: "Gojek",
                avatar: avatar8,
            },
            rating: {
                value: 3.5,
                from: 86,
            },
            price: 300000,
        },
        {
            background: content9,
            title: "Big 4 Auditor Financial Analyst",
            description:
                "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
            instructor: {
                name: "Jenna Ortega",
                job: "Senior Accountant",
                company: "Gojek",
                avatar: avatar9,
            },
            rating: {
                value: 3.5,
                from: 86,
            },
            price: 300000,
        },
    ];
    return (
        <>
            <h3 className="heading3 mt-16  max-md:heading4 max-md:mt-6">
                Koleksi Video Pembelajaran Unggulan
            </h3>
            <p className="bodyMediumMedium max-md:bodySmallMedium text-text-dark-secondary mt-[10px]">
                Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
            <div className="flex gap-9 mt-8 max-md:mt-6 overflow-x-scroll scrollbar-hide">
                {categories.map((category) => (
                    <div className="flex flex-col">
                        <p
                            className={`${
                                selected === category
                                    ? "text-tertiary"
                                    : "text-text-dark-secondary"
                            } bodyMediumMedium max-md:bodySmallMedium py-3 text-nowrap`}
                        >
                            {category}
                        </p>
                        <div
                            className={`h-[6px] w-[52px] ${
                                selected === category
                                    ? "bg-tertiary"
                                    : "bg-transparent"
                            } rounded-[10px]`}
                        />
                    </div>
                ))}
            </div>
            <div className="mt-8 mb-16 gap-[24px] grid max-lg:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3 grid-cols-4 max-md:gap-[20px]">
                {allClasses.map((item) => (
                    <ClassCard item={item} />
                ))}
            </div>
        </>
    );
};

export default ClassContents;

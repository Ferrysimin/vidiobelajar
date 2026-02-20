import star from "@/assets/star.svg";
import unfilledstar from "@/assets/unfilledstar.svg";
import halfstar from "@/assets/halfstar.svg";

interface Props {
    item: {
        background: string;
        title: string;
        description: string;
        instructor: {
            name: string;
            job: string;
            company: string;
            avatar: string;
        };
        rating: {
            value: number;
            from: number;
        };
        price: number;
    };
}

const ClassCard = ({ item }: Props) => {
    const getStars = () => {
        const stars: string[] = [];
        let curr = item.rating.value;
        for (let i = 0; i < 5; i++) {
            if (curr >= 1) {
                stars.push(star);
            } else if (curr < 1 && curr > 0) {
                stars.push(halfstar);
            } else {
                stars.push(unfilledstar);
            }
            curr -= 1;
        }

        return stars;
    };

    return (
        <div className="flex flex-col p-[20px] border border-other-border rounded-[10px] bg-other-background-primary gap-4 max-lg:gap-2 max-lg:p-4">
            <div className="flex flex-col gap-4 max-lg:flex-row max-lg:items-center max-lg:gap-3">
                <img
                    src={item.background}
                    className="inset-0 h-[193px] object-cover rounded-[10px] max-lg:w-[82px] max-lg:h-[82px]"
                />
                <div>
                    <h6 className="heading6 max-lg:bodyMediumBold text-text-dark-primary">
                        {item.title}
                    </h6>
                    <p className="bodyMediumMedium text-text-dark-secondary line-clamp-2 mt-2 max-lg:hidden">
                        {item.description}
                    </p>
                    <div className="flex gap-[10px] items-center mt-4 max-lg:mt-2">
                        <img
                            src={item.instructor.avatar}
                            className="w-10 h-10 rounded-[10px]"
                        />
                        <div>
                            <p className="line-clamp-1 bodyMediumMedium max-lg:bodySmallMedium text-text-dark-primary">
                                {item.instructor.name}
                            </p>
                            <p className="line-clamp-1 bodySmallRegular  text-text-dark-secondary">
                                {item.instructor.job}{" "}
                                <span className="max-lg:hidden">
                                    di{" "}
                                    <span className="bodySmallBold">
                                        {item.instructor.company}
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between gap-[10px] items-center">
                <div className="flex gap-2">
                    <div className="flex">
                        {getStars().map((starImg) => (
                            <img src={starImg} width={18} height={18} />
                        ))}
                    </div>
                    <p className="text-text-dark-secondary bodySmallMedium underline">
                        {item.rating.value} ({item.rating.from})
                    </p>
                </div>
                <h4 className="heading4 max-lg:heading5 text-primary">
                    Rp {item.price / 1000}K
                </h4>
            </div>
        </div>
    );
};

export default ClassCard;

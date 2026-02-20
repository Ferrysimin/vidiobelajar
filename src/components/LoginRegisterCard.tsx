interface Props {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

const LoginRegisterCard = ({ title, subtitle, children }: Props) => {
    return (
        <div className="flex-1 flex items-center justify-center px-[20px] py-[28px] w-full">
            <div className="w-[590px] bg-other-background-primary border border-[#F1F1F1] rounded-[4px] flex flex-col items-center gap-9 p-9 max-md:p-[20px] max-md:gap-[20px]">
                <div className="flex flex-col items-center gap-[10px]">
                    <h3 className="heading3 text-text-dark-primary max-md:heading4">
                        {title}
                    </h3>
                    <p className="bodyMediumRegular text-text-dark-secondary max-md:bodySmallRegular">
                        {subtitle}
                    </p>
                </div>
                {children}
            </div>
        </div>
    );
};

export default LoginRegisterCard;

import { Link } from "react-router-dom";
import avatar from "@/assets/avatar.png";
import menu from "@/assets/menu.svg";
import logout from "@/assets/logout.svg";
import { useState } from "react";

interface Props {
    isNotLoginOrRegister: boolean;
}

const Nav = ({ isNotLoginOrRegister }: Props) => {
    const [showMenu, setShowMenu] = useState(false);

    const menus = [
        {
            name: "Kategori",
            navigate: "/",
            color: "text-text-dark-secondary",
        },
        {
            name: "Profil Saya",
            navigate: "/",
            color: "text-text-dark-secondary",
        },
        {
            name: "Kelas Saya",
            navigate: "/",
            color: "text-text-dark-secondary",
        },
        {
            name: "Pesanan Saya",
            navigate: "/",
            color: "text-text-dark-secondary",
        },
        {
            name: "Keluar",
            navigate: "/login",
            icon: logout,
            color: "text-error",
        },
    ];
    return (
        <>
            <nav className="sticky z-20 top-0 flex flex-col">
                <div className="bg-other-background-primary border-b border-other-border py-3 px-[120px] flex justify-between items-center max-md:py-4 max-md:px-6 max-md:shadow-navbar">
                    <img
                        src="/Logo.svg"
                        className="h-[56px] w-[237px] max-md:h-[42px] max-md:w-[152px]"
                        alt="logo"
                    />
                    {isNotLoginOrRegister && (
                        <>
                            <div className="flex gap-9 items-center max-md:hidden">
                                <Link
                                    to="/category"
                                    className="text-text-dark-secondary bodyMediumMedium"
                                >
                                    Kategori
                                </Link>

                                <img
                                    src={avatar}
                                    className="h-[44px] w-[44px] object-cover rounded-[10px]"
                                />
                            </div>
                            <img
                                className="hidden max-md:block w-6 h-6 cursor-pointer"
                                src={menu}
                                onClick={() => setShowMenu(!showMenu)}
                            />
                        </>
                    )}
                </div>
                {showMenu && isNotLoginOrRegister && (
                    <div className="hidden z-30 max-md:flex flex-col bg-white py-1">
                        {menus.map((menu) => (
                            <Link
                                to={menu.navigate}
                                className="flex gap-[5px] py-4 px-3 items-center border-b border-text-dark-primary"
                            >
                                <p className={`bodyMediumMedium ${menu.color}`}>
                                    {menu.name}
                                </p>
                                {menu.icon && (
                                    <img src={menu.icon} className="w-6 h-6" />
                                )}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </>
    );
};

export default Nav;

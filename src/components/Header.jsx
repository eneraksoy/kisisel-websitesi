import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Header = ({ toggleDarkMode }) => {
    const [isToggled, setIsToggled] = useState(false);
    const { language, toggleLanguage } = useLanguage();

    const toggleSwitch = () => {
        setIsToggled(!isToggled);
        toggleDarkMode();
    };

    return (
        <section className="flex relative">
            {/* Sol Bölüm */}
            <div className="w-9/12 bg-blue-700 dark:bg-[#171043] text-white pl-56">
                <div className="p-5">
                    <a href="#" onClick={toggleLanguage} className="text-lime-300 float-right text-sm font-bold mt-1 mr-3 tracking-widest dark:text-white">
                        {language === "tr" ? "ENGLISH" : <><span>TÜRKÇE</span><span className="dark:text-gray-500">'YE GEÇ</span></>}
                    </a>
                    <h3 className="text-lime-300 text-lg mt-8 ml-16 font-bold">almila</h3>
                </div>
                <div className="p-20">
                    <h1 className="text-lime-300 text-6xl font-bold leading-tight mt-10 w-6/12">
                        {language === "tr" ? "Ben bir Frontend Developer'ım..." : "I am a Frontend Developer..."}
                    </h1>
                    <p className="mt-8 text-xl w-6/12">
                        {language === "tr" ? "...kullanıcı deneyimi mükemmel, sağlam ve ölçeklenebilir frontend ürünleri üretmeyi seviyorum." : "...who likes to craft solid and scalable frontend products with great user experiences."}
                    </p>
                    <div className="mt-6 flex gap-5">
                        <button>
                            <img src="/assets/Github-Button.png" />
                        </button>
                        <button>
                            <img src="/assets/Linkedin-Button.png" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Sağ Bölüm */}
            <div className="w-3/12 bg-lime-400 dark:bg-[#1A210B] relative flex p-5">
                <div
                    onClick={toggleSwitch}
                    className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${isToggled ? "bg-gray-600" : "bg-purple-400 dark:bg-gray-500"}`}
                >
                    <div
                        className={`bg-lime-300 dark:bg-lime-500 w-6 h-6 rounded-full transform duration-300 ease-in-out ${isToggled ? "translate-x-8" : "translate-x-0"}`}
                    ></div>
                </div>
                <span className={`mt-1 ml-3 font-bold text-sm ${isToggled ? "text-blue-900" : "text-blue-800 dark:text-white"}`}>
                    {isToggled ? "LIGHT MODE" : "DARK MODE"}
                </span>
            </div>

            {/* Ortada ki Resim */}
            <div className="absolute left-[66%] top-20">
                <img
                    src="/assets/hero-right.png"
                    className="w-4/5 rounded-lg"
                />
            </div>
        </section>
    );
};

export default Header;

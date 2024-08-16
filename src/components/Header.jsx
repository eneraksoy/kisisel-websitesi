import React, { useState } from 'react';

const Header = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleSwitch = () => {
        setIsToggled(!isToggled);
    };

    return (
        <section className="flex relative">
            {/* Sol Bölüm */}
            <div className="w-9/12 bg-blue-700 text-white pl-56">
                <div className='p-5'>
                    <a href="#" className="text-lime-300 float-right text-sm font-bold mt-1 mr-3 tracking-widest">TÜRKÇE'YE GEÇ</a>
                    <h3 className="text-lime-300 text-lg mt-8 ml-16 font-bold">almila</h3>
                </div>
                <div className="p-20">
                    <h1 className="text-lime-300 text-6xl font-bold leading-tight mt-10 w-6/12">
                        I am a Frontend Developer...
                    </h1>
                    <p className="mt-8 text-xl w-6/12">
                        ...who likes to craft solid and scalable frontend products with great user experiences.
                    </p>
                    <div className="mt-6 flex gap-5">
                        <button>
                            <img src="../src/assets/Github-Button.png" alt="Github" />
                        </button>
                        <button>
                            <img src="../src/assets/Linkedin-Button.png" alt="LinkedIn" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Sağ Bölüm */}
            <div className="w-3/12 bg-lime-400 relative flex p-5 ">
                <div
                    onClick={toggleSwitch}
                    className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${isToggled ? 'bg-purple-700' : 'bg-gray-300'}`}
                >
                    <div
                        className={`bg-yellow-300 w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${isToggled ? 'translate-x-8' : 'translate-x-0'}`}
                    ></div>
                </div>
                <span className={`mt-1 ml-3 font-bold text-sm  ${isToggled ? 'text-purple-700' : 'text-blue-800'}`}>
                    DARK MODE
                </span>
            </div>

            {/* Ortada ki Resim */}
            <div className="absolute left-[66%] top-20">
                <img
                    src="../src/assets/hero-right.png"
                    alt="Profile"
                    className="w-4/5 h-auto rounded-lg"
                />
            </div>
        </section >
    );
};

export default Header;

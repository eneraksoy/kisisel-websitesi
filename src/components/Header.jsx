const Header = () => (
    <section className="flex h-screen">
        <div className="flex-1 relative">
            {/* Sol bölüm (Mavi) */}
            <div className="absolute inset-y-0 left-0 w-7/12 bg-blue-700 flex items-center p-10 text-white">
                <div>
                    <a href="#" className="text-[#CA0909]">TÜRKÇE'YE GEÇ</a>
                    <h2 className="text-[#CBF281] text-xl font-bold">almila</h2>

                    <h1 className="text-[#CBF281] text-5xl font-bold leading-tight">
                        I am a Frontend <br /> Developer...
                    </h1>
                    <p className="mt-4 text-lg">
                        ...who likes to craft solid and scalable frontend products with great user experiences.
                    </p>
                    <div className="mt-6 flex space-x-4">
                        <button>
                            <img src="../src/assets/Github-Button.png" alt="GitHub" />
                        </button>
                        <button>
                            <img src="../src/assets/Linkedin-Button.png" alt="LinkedIn" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Sağ bölüm (Sarı) */}
            <div className="absolute inset-y-0 right-0 w-5/12 bg-lime-400 flex items-center justify-end p-10">
                <div className="relative w-full h-full flex justify-center">
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <button className="bg-gray-200 p-1 rounded-full">
                            <span className="text-sm">DARK MODE</span>
                        </button>
                    </div>
                    <img
                        src="../src/assets/hero-right.png"
                        className="w-3/4 h-auto"
                        style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Header;

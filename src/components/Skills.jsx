import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
    const { language } = useLanguage();

    const skills = [
        "/assets/js.png",
        "/assets/node.png",
        "/assets/react.png",
        "/assets/vscode.png",
        "/assets/redux.png",
        "/assets/figma.png"
    ];

    return (
        <div className="text-left pl-56 flex dark:bg-[#252128]">
            <h2 className="text-6xl font-bold text-blue-700 mb-6 mx-20 mt-16 leading-tight dark:text-lime-300">
                {language === "tr" ? "Yetenekler" : "Skills"}    </h2>
            <div className="grid grid-cols-2 gap-x-20 ml-36">
                {skills.map((src, index) => (
                    <div key={index} className="flex items-center ">
                        <img src={src} className="w-30 h-30" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

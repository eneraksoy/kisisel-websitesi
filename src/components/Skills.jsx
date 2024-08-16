const Skills = () => {
    const skills = [
        "../src/assets/js.png",
        "../src/assets/node.png",
        "../src/assets/react.png",
        "../src/assets/vscode.png",
        "../src/assets/redux.png",
        "../src/assets/figma.png"
    ];

    return (
        <div className="text-left pl-56 flex">
            <h2 className="text-6xl font-bold text-blue-700 mb-6 mx-20 mt-16 leading-tight">Skills</h2>
            <div className="grid grid-cols-2 gap-x-20 ml-48">
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

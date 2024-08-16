const Projects = ({ projects }) => {
    const images = [
        '../src/assets/Rectangle 41.png',
        '../src/assets/Rectangle 42.png'
    ];

    return (
        <div className="bg-lime-300 p-10 rounded-lg px-72">
            <h2 className="text-6xl font-bold text-blue-700 mb-10">Projects</h2>
            {projects.map((project, index) => (
                <div key={project.id} className="bg-white rounded-lg shadow-xl flex mb-6">
                    <img
                        src={images[index]}
                        alt={project.baslik}
                        className="w-1/5 rounded-lg "
                    />
                    <div className="w-2/3 pl-6">
                        <h3 className="text-2xl font-bold text-blue-700 mt-10">{project.baslik}</h3>
                        <p className=" mt-10">{project.aciklama}</p>
                        <div className="mt-10 flex flex-wrap gap-2">
                            {project.teknoloji.map((tech, i) => (
                                <span key={i} className="bg-blue-800 text-white py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="mt-10 underline">
                            <a href={project.linkler.site} className=" font-bold mr-4  ">
                                View Site
                            </a>
                            <a href={project.linkler.github} className=" font-bold">
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;

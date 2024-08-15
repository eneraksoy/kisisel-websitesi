const Projects = ({ projects }) => (
    <div className="bg-lime-300 p-10 rounded-lg mt-10">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="mt-4">
            {projects.map((project) => (
                <div key={project.id} className="bg-white p-5 rounded-lg mb-6 shadow-lg">
                    <h3 className="text-2xl font-bold">{project.baslik}</h3>
                    <p>{project.aciklama}</p>
                    <div className="mt-2">
                        <strong>Technologies:</strong> {project.teknoloji.join(", ")}
                    </div>
                    <div className="mt-4">
                        <a href={project.linkler.site} className="text-blue-700 mr-4">
                            View Site
                        </a>
                        <a href={project.linkler.github} className="text-blue-700">
                            Github
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Projects;

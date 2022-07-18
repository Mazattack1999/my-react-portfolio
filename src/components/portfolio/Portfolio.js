import Card from './Card';

function Portfolio(props) {
    // parse props
    const {projects, setCurrentProject, setViewingProject} = props
    
    return (
        <section className="d-flex flex-column align-items-center">
            <h2 className="text-light">Portfolio</h2>

            <div className="d-flex flex-row flex-wrap">
                {projects.map(project => {
                    return (
                        <Card
                        project={project}
                        setCurrentProject={setCurrentProject}
                        setViewingProject={setViewingProject}
                        key={project.name}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio;
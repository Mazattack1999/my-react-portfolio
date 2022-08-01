function Project(props) {
    // parse props
    const {currentProject: project} = props
    
    return (
        <section className="d-flex flex-column align-items-center">
            <h2 className="text-light">{project.name}</h2>

            <img className="card-img-top w-75" src={project.color || require('../../assets/images/backend-placeholder.jpg')} alt={`${project.name} screenshot`}/>
            
            <div className="d-flex flex-column align-items-center">
                
                {project.github && <a className="text-info my-3" href={project.github} target="_blank">GitHub Repository</a>}


                {project.deploy && <a className="text-info my-3" href={project.deploy} target="_blank">Deployed Application</a>}
            </div>
            
        </section>
    )
}

export default Project;
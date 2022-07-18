function Card(props) {
    // parse props
    const {project, setCurrentProject, setViewingProject} = props
    

    function handleClick() {
        setCurrentProject(project);
        setViewingProject(true);
    }


    return (
        <div className="card d-flex flex-column align-items-center w-25 mx-2 mt-2" onClick={handleClick} >
            <img className="card-img-top" src={project.color} alt={`${project.name} screenshot`}/>
            <div className="card-body">
                <h3 className="card-title">{project.name}</h3>
                <p className="card-text">{project.tools}</p>
            </div>

        </div>
    )
}

export default Card;
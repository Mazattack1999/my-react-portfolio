import {Link, Navigate} from 'react-router-dom';

function Card(props) {
    // parse props
    const {project, setCurrentProject} = props
    

    function handleClick(e) {
        setCurrentProject(project);
    }


    return (
        <Link
        to={`/portfolio/${project.name}`}
        project={project}
        className="card d-flex flex-column align-items-center w-25 mx-2 mt-2" onClick={handleClick}>
        
            <img className="card-img-top" src={project.color} alt={`${project.name} screenshot`}/>
            <div className="card-body">
                <h3 className="card-title">{project.name}</h3>
                <p className="card-text">{project.tools}</p>
            </div>
        
        </Link>
    )
}

export default Card;
import {Link} from 'react-router-dom';
import './style.css';

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
        className="card bg-dark d-flex flex-column align-items-center mx-2 mt-2 col-11 col-lg-5" onClick={handleClick}>
        
            <img className="card-img-top position-relative" src={project.color || require('../../../assets/images/backend-placeholder.jpg')} alt={`${project.name} screenshot`}/>
            <div className="card-body position-absolute bg-dark text-info project-header">
                <h3 className="card-title">{project.name}</h3>
                <p className="card-text">{project.tools}</p>
            </div>
        
        </Link>
    )
}

export default Card;
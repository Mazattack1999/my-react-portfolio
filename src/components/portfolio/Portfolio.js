import Card from './Card';

function Portfolio(props) {

  const {setCurrentProject} = props;

    // portfolio projects
const projects = [
    {
      name: 'Book Bits',
      tools: 'HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, MySQL',
      color: require('../../assets/images/book-bits.png'),
      github: "https://github.com/Mazattack1999/book-bits",
      deploy: "https://book-bits-blog.herokuapp.com/"
    },
    {
      name: 'Meditation Buddy',
      tools: 'HTML, CSS, JavaScript, Bulma.io',
      color: require('../../assets/images/meditation-buddy.png'),
      github: "https://github.com/Mazattack1999/meditation-buddy",
      deploy: "https://mazattack1999.github.io/meditation-buddy/"
    },
    {
      name: 'Tech Blog',
      tools: 'CSS, JavaScript, Node.js, MySQL',
      color: require('../../assets/images/tech-blog.png'),
      github: "https://github.com/Mazattack1999/tech-blog",
      deploy: "https://safe-meadow-45436.herokuapp.com/"
    },
    {
      name: 'Weather Dashboard',
      tools: 'HTML, CSS, JavaScript, Moment.js',
      color: require('../../assets/images/weather-dashboard.png'),
      github: "https://github.com/Mazattack1999/weather-dashboard",
      deploy: "https://mazattack1999.github.io/weather-dashboard/"
    },
    {
      name: 'Work Day Scheduler',
      tools: 'HTML, CSS, JavaScript, jQuery, Bootstrap, Moment.js, Font Awesome',
      color: require('../../assets/images/calendar.png'),
      github: "https://github.com/Mazattack1999/calendar",
      deploy: "https://mazattack1999.github.io/calendar/"
    },
    {
      name: 'Code Quiz',
      tools: 'HTML, CSS, JavaScript',
      color: require('../../assets/images/code-quiz.png'),
      github: "https://github.com/Mazattack1999/code-quiz",
      deploy: "https://mazattack1999.github.io/code-quiz/"
    },
    {
      name: 'Password Generator',
      tools: 'HTML, CSS, JavaScript',
      color: require('../../assets/images/password-generator.png'),
      github: "https://github.com/Mazattack1999/password-generator",
      deploy: "https://mazattack1999.github.io/password-generator/"
    },
    {
      name: 'ReadMe Generator',
      tools: 'JavaScript, Node.js',
      github: "https://github.com/Mazattack1999/readme-generator",
    }
  ]
    
    return (
        <section className="d-flex flex-column align-items-center">
            <h2 className="text-light">Portfolio</h2>

            <div className="row d-flex flex-row flex-wrap justify-content-center">
                {projects.map(project => {
                    return (
                        <Card
                        project={project}
                        setCurrentProject={setCurrentProject}
                        key={project.name}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio;
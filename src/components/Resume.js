

function Resume() {
    
    return (
        <section className="d-flex flex-column align-items-center">
            <h2 className="text-light">Resume</h2>

            <div>
                <p>Download my <a className="text-info" href={require('../assets/documents/resume.pdf')} download>Resume</a></p>

                <div>
                    <h3>Front-End Skills</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>jQueryUI</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                    </ul>
                </div>

                <div>
                    <h3>Back-End Skills</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;
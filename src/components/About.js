

function About(props) {
    // parse out props
    // const {tabs, currentTab, setCurrentTab} = props;

    return (
        <section className="d-flex flex-column align-items-center">
            <h2 className="text-light">About Me</h2>

            {/* Image of Micah Zahn */}
            <img 
            src={require("../assets/images/profile-picture.jpg")} alt="Picture of Micah Zahn" 
            className="w-25"
            />

            <div className="mt-2 px-4 text-white text-center">
                <p>
                I grew up in South Carolina. I had a great interest in math and science in school. I got accepted into my high school's STEM program where I took on accelerated courses and participated in my high school's science team.
                </p>
                <p>
                I moved to Florida my senior year of high school. I was accepted into the University of Florida when I graduated high school and studied Mechanical Engineering for 3 years. It was at this time that I also discovered my love for coding.
                </p>
                <p>
                When COVID-19 hit, I put my studies on hold and became a 1st grade teaching assistant at my church's elementary school. I worked there for a year and a half until my family and I moved to Wisconsin. 
                </p>
                <p>
                I have enrolled in an online coding boot camp focused on full-stack web development in which I am set to graduate in early August of 2022.
                </p>
            </div>

            

            

            

            
        </section>
        
    )


}

export default About;
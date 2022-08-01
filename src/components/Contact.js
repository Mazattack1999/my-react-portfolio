function Contact() {

    return (
        <section className="d-flex flex-column align-items-center">
            <h2 className="text-light">Contact Me</h2>

            <div className="row mx-5">
                <div className="col-12 col-lg-6 d-flex flex-row justify-content-center">
                {/* Image of Micah Zahn */}
                <img 
                src={require("../assets/images/profile-picture.jpg")} alt="Picture of Micah Zahn" 
                className="w-50"
                />
                </div>


                {/* contact information */}
                <div className="col-12 col-lg-4 mt-4 d-flex flex-column align-items-center">
                    <h3 className="text-light">Contact Info:</h3>
                    <div className="d-flex flex-column align-items-center">
                        <a className="text-info" href="tel:8032385708">(803)238-5708</a>
                        <a className="text-info"href="mailto:micah.a.zahn@gmail.com" target="_blank">micah.a.zahn@gmail.com</a>
                        <a 
                        href="https://www.linkedin.com/in/micah-zahn-116954230/" 
                        target="_blank"
                        className="text-info"
                        >LinkedIn</a>
                        </div>
                </div>
            </div>

    
        </section>
    )


}

export default Contact;
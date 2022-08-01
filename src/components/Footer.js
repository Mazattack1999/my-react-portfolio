function Footer() {

    return (
        <footer className="bg-dark d-flex f-row justify-content-center row py-4">
            <div className="d-flex flex-row justify-content-around col-sm-9 col-lg-6">
                {/* Github Link */}
                <a 
                href="https://github.com/Mazattack1999" 
                target="_blank"
                className="text-info"
                >
                    <i className="fa-brands fa-github fa-3x"></i>
                </a>

                {/* LinkedIn link */}
                <a 
                href="https://www.linkedin.com/in/micah-zahn-116954230/" 
                target="_blank"
                className="text-info"
                >
                    <i className="fa-brands fa-linkedin fa-3x"></i>
                </a>

                {/* Facebook */}
                <a 
                href="https://www.facebook.com/micah.zahn"
                target="_blank"
                className="text-info"
                >
                    <i className="fa-brands fa-facebook fa-3x"></i>
                </a>
            </div>
            
        </footer>
    )


}

export default Footer;
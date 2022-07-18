function Footer() {

    return (
        <footer className="bg-dark d-flex f-row justify-content-center row py-4">
            <div className="d-flex flex-row justify-content-between col-sm-9 col-md-7 col-lg-3">
                {/* Github Link */}
                <a 
                href="https://github.com/Mazattack1999" 
                target="_blank"
                className="text-info"
                >Github</a>

                {/* LinkedIn link */}
                <a 
                href="https://www.linkedin.com/in/micah-zahn-116954230/" 
                target="_blank"
                className="text-info"
                >LinkedIn</a>

                {/* Facebook */}
                <a 
                href="https://www.facebook.com/micah.zahn"
                target="_blank"
                className="text-info"
                >Facebook</a>
            </div>
            
        </footer>
    )


}

export default Footer;
// Some code snippets are from the University of Wisconsin Extended Campus Coding Bootcamp module lesson "Photo Portfolio."
import {useState} from 'react';
import {validateEmail} from '../utils/helpers';

function Contact() {
    // form state handler
    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    // error message for invalid form inputs
    const [errorMessage, setErrorMessage] = useState('');

    // parse values from formState
    const {name, email, message} = formState

    function handleChange(e) {
        // if event.target is the email input
        if (e.target.name === 'email') {
            // check if email is valid
            const isValid = validateEmail(e.target.value);
            
            // if email is not valid
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } 
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`A ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="d-flex flex-column align-items-center">
            <h2 className="text-light">Contact Me</h2>

            <form className="w-50 d-flex flex-column" 
            onSubmit={handleSubmit}>

                <label htmlFor="name">Name:</label>
                <input name="name" type="text" defaultValue={name} onBlur={handleChange} />

                <label htmlFor="email">Email:</label>
                <input name="email" type="text" defaultValue={email} onBlur={handleChange} />

                <label htmlFor="name">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>

                {/* error message */}
                {errorMessage && (
                    <div>
                        <p className="text-warning">{errorMessage}</p>
                    </div>
                )}

                <button className="btn bg-dark text-light mt-2" type="submit">Submit</button>
            </form>

            {/* contact information */}
            <div className="mt-4 d-flex flex-column align-items-center">
                <h3 className="text-light">Contact Info:</h3>
                <div className="d-flex flex-column align-items-center">
                    <a className="text-info" href="tel:8032385708">(803)238-5708</a>
                    <a className="text-info"href="mailto:micah.a.zahn@gmail.com" target="_blank">micah.a.zahn@gmail.com</a>
                </div>
            </div>
    
        </section>
    )


}

export default Contact;
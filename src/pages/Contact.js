import React from 'react';
import '../styles/All.css'
import '../styles/Contact.css';

let handleOnChange = ( email ) => {

    // don't remember from where i copied this code, but this works.
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( !re.test(email) ) {
        alert("Invalid email!")
    }
    // else {
    //     // invalid email, maybe show an error to the user.
    // }

}

function Contact() {
    return (
        <div>
            <form className="form-horizontal contact-wrapper" action="/action_page.php">
                <div className="form-group">
                    <label className="control-label col-sm-2" for="email">Email:</label>
                    <div className="col-sm-6 col-md-4 col-xl-3">
                        <input type="email" className="form-control" id="email" placeholder="Enter email" onSubmit={ handleOnChange } />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" for="name">Name:</label>
                    <div className="col-sm-6 col-md-4 col-xl-3">
                        <input className="form-control" id="name" placeholder="Your Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" for="msg">Message:</label>
                    <div className="col-sm-8 col-md-8 col-xl-4">
                        <textarea className="form-control" id="msg" placeholder="Your message here" rows="5"/>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact;
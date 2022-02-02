import React from 'react';

const Contact = () => {
   return (
      <div className="section-6">
         <div className="container-5 w-container">
            <div className="w-form">
               <form id="email-form" name="email-form" data-name="Email Form" className="form">
                  <h1 className="heading-3">Looking for help with design</h1>
                  <p className="paragraph-5">Send me detail</p><label for="name" className="body">Name</label><input
                     type="text" className="text-field w-input" maxlength="256" name="name" data-name="Name"
                     id="name" /><label for="email" className="field-label">Email Address</label><input type="email"
                        className="text-field-2 w-input" maxlength="256" name="email" data-name="Email" id="email"
                        required="" /><label for="email-2" className="field-label-2">Detail</label><textarea name="field"
                           maxlength="5000" id="field" className="textarea w-input"></textarea><input type="submit"
                              value="Submit" data-wait="Please wait..." className="button w-button" />
               </form>
               <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
               </div>
               <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;

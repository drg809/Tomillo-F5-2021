import React from 'react';

const Home = () => {
   return (
      <div className="section-12">
         <div className="container w-container"><img
            src="https://uploads-ssl.webflow.com/6040b20ee5059bede58b3285/6040b695917c1d2d1da6bded_FullSizeRender%202-min.jpg"
            loading="lazy" height="64" width="64"
            srcSet="https://uploads-ssl.webflow.com/6040b20ee5059bede58b3285/6040b695917c1d2d1da6bded_FullSizeRender%202-min-p-500.jpeg 500w, https://uploads-ssl.webflow.com/6040b20ee5059bede58b3285/6040b695917c1d2d1da6bded_FullSizeRender%202-min-p-800.jpeg 800w, https://uploads-ssl.webflow.com/6040b20ee5059bede58b3285/6040b695917c1d2d1da6bded_FullSizeRender%202-min.jpg 3024w"
            sizes="64px" alt="" className="image" />
            <h1 className="heading">Welcome to my Portfolio 👋</h1>
            <p className="paragraph">Hello, I&#x27;m Mete. I&#x27;m 24 years old. I am a Digital Product Designer with
               software education and later training in design and 3 years of experience. I am currently working as a
               Digital Product Designer at Norma and also working on
               freelance jobs and side projects. In my spare time, I try to improve myself on Webflow and SwiftUI.</p>
            <a href="#email-form" className="button w-button">Contact Me</a>
         </div>
      </div>
   );
};

export default Home;
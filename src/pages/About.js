import React from 'react';
import '../styles/About.css';
import '../styles/All.css'

function About() {
    return (
        <section className="about-me-wrapper row">
            <div className="aside-wrapper col-4 col-lg-2">
                <h2 id="aboutme">About Me</h2>
            </div>
            <div className="col-10">
                <p>Hey there! My name is Shawn A. Analla. I'm a recently certified junior fullstack developer that just started coding about three months ago. I'm showcasing some of my early work here
                    and will continue to update the page with more projects as they come along. I'm very proud of what I've done so far and am looking forward
                    to creating bigger and greater projects in the future as I cultivate more experience. If you're interested in what I have to offer, please
                    don't hesitate to contact me via one of my contact options at the bottom of the page, or check out my resume. I look forward to working with you!
                </p>       
                <p>
                    You can view my portfolio where I host some of my favorite projects by clicking the tab above. Thanks for visiting!
                </p>
            </div>
        </section>
    );
}

export default About;
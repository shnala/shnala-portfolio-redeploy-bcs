import React from 'react';
import '../styles/Portfolio.css';
import '../styles/All.css';

export default function Portfolio() {
    return (
        <section className="work-wrapper row">
            <div className="aside-wrapper col-4 col-lg-2">
                <h2 id="work">My Work</h2>
            </div>

            <div className="col-10 col-lg-8">
            <p>
                    Thanks for checking out my work! I've uploaded some of my favorite projects here. Some of them go all the way back to when I first started coding and may not be the best representation of what I can do, but they hold a special place in my heart and are a good reference to see how much I've grown as a developer. All projects besides the first are listed chronologically.
                </p>

            </div>
            
            <ul id="projects" className="col-12 col-lg-10">
                <li id="main-card">

                    <h2><a href="https://pacific-ravine-12135.herokuapp.com/" target="_blank">Ponder</a>
                        <br />
                        <a href="https://github.com/Chrisle206/ponder" target="_blank"><span className="sub-label">GitHub</span></a></h2>


                </li>
                <li id="card2" className="col-12 col-lg-5">
                    <h2><a href="https://shnala.github.io/animal-crossing-new-horizons-villager-database/" target="_blank">

                        Villager Database
                    </a>
                        <br />
                        <a href="https://github.com/shnala/animal-crossing-new-horizons-villager-database"><span className="sub-label card-labels">GitHub</span></a></h2>


                </li>

                <li id="card3" className="col-12 col-lg-5">
                    <h2><a href="https://shnala.github.io/live-weather-dashboard/" target="_blank">

                        Live Weather App
                    </a>
                        <br />
                        <a href="https://github.com/shnala/live-weather-dashboard" target="_blank"><span className="sub-label card-labels">GitHub</span></a></h2>


                </li>
                <li id="card4" className="col-12 col-lg-5"><a href="" target="blank">

                    <h2>Pastel Puzzles<br />
                        <span className="sub-label">Mern Stack</span>
                    </h2>

                </a></li>
                <li id="card5" className="col-12 col-lg-5"><a href="" target="blank">

                    <h2>Run Buddy<br />
                        <span className="sub-label">HTML | CSS</span>
                    </h2>

                </a></li>
            </ul>
        </section>
    );
}

// export default Portfolio;
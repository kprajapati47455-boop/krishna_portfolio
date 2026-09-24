import './projects.css';
export default function Projects() {
    return (


        <div className="projects">

            <h1>My Projects</h1>

            <div className="project-container">

                <div className="project-card">
                    <h2>E-Education</h2>

                    <p>
                        An education-based web application where users can access
                        educational content through a simple and user-friendly interface.
                    </p>

                    <p>
                        <b>Technologies:</b> C#, ASP.NET MVC, HTML, CSS, JavaScript,
                        Bootstrap, MySQL
                    </p>

                    <div className="project-buttons">
                        <a href="https://github.com/kprajapati47455-boop-boop/E-education" target="_blank">GitHub</a>
                        <a href="#" target="_blank">Live Demo</a>
                    </div>
                </div>


                <div className="project-card">
                    <h2>BlogpostApp</h2>

                    <p>
                        A blog application built with ASP.NET Core MVC that allows users
                        to create posts, upload images, add comments and manage blog content.
                    </p>

                    <p>
                        <b>Technologies:</b> ASP.NET Core MVC, C#, Entity Framework Core,
                        HTML, CSS, JavaScript
                    </p>

                    <div className="project-buttons">
                        <a href="#" target="_blank">GitHub</a>
                        <a href="#" target="_blank">Live Demo</a>
                    </div>
                </div>


                <div className="project-card">
                    <h2>React E-Commerce</h2>

                    <p>
                        A responsive e-commerce website built with React that displays
                        products using an API and provides a modern shopping interface.
                    </p>

                    <p>
                        <b>Technologies:</b> React, JavaScript, HTML, CSS, API
                    </p>

                    <div className="project-buttons">
                        <a href="#" target="_blank">GitHub</a>
                        <a href="https://apna-grossery.netlify.app/" target="_blank">Live Demo</a>
                    </div>
                </div>

            </div>

        </div>



    )
}
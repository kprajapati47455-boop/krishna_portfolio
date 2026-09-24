import './skills.css'
export default function Skills() {
    return (


        <section className="skills">
            <h1>My Skills</h1>
            <p className="skills-intro">
                Technologies and tools I use to build web applications.
            </p>

            <div className="skills-container">
                <div className="skill-card">
                    <h2>Frontend</h2>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React.js</p>
                </div>

                <div className="skill-card">
                    <h2>Backend</h2>
                    <p>C#</p>
                    <p>ASP.NET Core</p>
                    <p>Entity Framework Core</p>
                    <p>SQL</p>
                </div>

                <div className="skill-card">
                    <h2>Programming</h2>
                    <p>C</p>
                    <p>C++</p>
                    <p>C#</p>
                    <p>JavaScript</p>
                </div>

                <div className="skill-card">
                    <h2>Tools</h2>
                    <p>Git & GitHub</p>
                    <p>Visual Studio</p>
                    <p>VS Code</p>
                    <p>Postman</p>
                </div>
            </div>
        </section>
    )
}
 
import './about.css';

export default function About() {
    return (
        <section className="about">
            <h1>About Me</h1>

            <div className="about-container">

                <div className="about-intro">
                    <h2>Hello, I'm Krishna </h2>

                    <p>
                        I am a Computer Science and Engineering diploma graduate
                        who is passionate about software development and web
                        technologies.
                    </p>

                    <p>
                        I enjoy creating web applications and continuously
                        improving my programming skills. Currently, I am
                        focusing on React and .NET development.
                    </p>

                    <p>
                        My goal is to become a skilled Software Developer and
                        work on real-world applications that solve useful
                        problems.
                    </p>
                </div>

                <div className="about-details">

                    <div className="about-card">
                        <h3>🎓 Education</h3>
                        <p>
                            Diploma in Computer Science & Engineering
                        </p>
                        <span>Government Polytechnic Mahoba</span>
                    </div>

                    <div className="about-card">
                        <h3>💻 Development</h3>
                        <p>
                            React, JavaScript, C#, ASP.NET Core and EF Core
                        </p>
                        <span>Currently learning and building projects</span>
                    </div>

                    <div className="about-card">
                        <h3>🎯 Career Goal</h3>
                        <p>
                            Software Developer / SDE
                        </p>
                        <span>
                            Interested in building scalable web applications
                        </span>
                    </div>

                </div>

            </div>
        </section>
    );
} 

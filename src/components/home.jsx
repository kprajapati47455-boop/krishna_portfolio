import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <p className="greeting">Hi, I'm Krishna Prajapati </p>

          <h1>
            Full Stack <span>.NET Developer</span>
          </h1>

          <p className="intro-text">
            I'm a Computer Science & Engineering graduate passionate about
            building modern and user-friendly web applications.
          </p>

          <p className="skills-text">
            I work with <b>C#, ASP.NET Core, React, JavaScript, HTML, CSS,
            and SQL</b>, and I'm continuously improving my development skills
            by building real-world projects.
          </p>

          <div className="hero-buttons">
             
           <Link to="/projects">view projects</Link> 
             <a href="\krishna_updatedresume.pdf" download>download resume</a>
          </div>

        </div>

      </section>

    </div>
  )
}
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero">
        <h1>Hi, I'm Gabriel</h1>
        <p>Aspiring Azure Developer | Problem Solver | Multilingual Communicator</p>
        <a href="#projects" className="btn">View My Work</a>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm Gabriel. I spent nearly ten years in hospitality before I really got into technology. That's when I started learning on my own and building some local projects. Right now, I'm aiming for a junior Azure developer role. Curiosity keeps me going, along with this real drive to learn more. My background there built up solid communication skills, plus flexibility and a problem-solving mindset. All that supports me while I work on little projects and build my tech base stronger.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>E-Commerce REST API</h3>
          <p>An E-Commerce REST API — a system that lets people manage products online.

            A real, deployed, production-grade API that an online store could actually use!.</p>
          <a href="https://github.com/myerio/Ecommerce-api">GitHub Repo</a>
        </div>
        {/* Add more projects here as needed */}
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Python</li>
          <li>Docker</li>
          <li>Git</li>
          <li>CI/CD</li>
          <li>Customer Service</li>
          
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: marashigabriel@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/gabriel-marashi-710bb921b/</p>
        <p>GitHub: https://github.com/myerio</p>
      </section>
    </main>
  )
}

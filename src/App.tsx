import { ProjectCard, type ProjectCardProps } from '../components/ProjectCard'
import Writing from '../components/Writing'

const LANGUAGES_AND_TOOLS = [
  "React", "React Native", "JavaScript", "TypeScript",
  "Scikit-Learn", "TensorFlow", "Pandas", "Python",
  "LangGraph", "LangChain", "Jupyter", "Figma", "Git",
  "GitHub", "Linux"
]

const PROJECTS: ProjectCardProps[] = [
  {
    name: "Dictatr",
    description: "A local dictation tool for Linux, with VAD-based streaming and SLM cleanup.",
    cover: '/covers/dictatr-cover.png',
    githubLink: 'https://github.com/syedmohammadhaider/dictatr'
  },
  {
    name: "Kalām",
    description: "An experimental harness optimized for small, local models. Work in progress.",
    cover: '/covers/kalam-cover.png',
    githubLink: 'https://github.com/syedmohammadhaider/kalam-agent'
  },
  {
    name: "Ghostwriter",
    description: "An experimental writing agent that researches a topic piece-by-piece before generating long-form text.",
    cover: '/covers/ghostwriter-cover.png',
    githubLink: 'https://github.com/syedmohammadhaider/ghostwriter'
  },
  {
    name: "Virtual Mouse",
    description: "An Android app which uses BLE to control the mouse on your computer. Built with Kotlin and Bleak",
    cover: '/covers/virtualmouse-cover.png',
    githubLink: 'https://github.com/syedmohammadhaider/virtual-trackpad'
  }
]

function App() {
  return (
    <div>
      <div className='hero'>
        <div className='hero-vid'>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster='/poster.jpg'
          >
            <source src={'/cover-opt.mp4'} type="video/mp4"/>
          </video>
        </div>
        <img src={'/avatar.jpg'} width={125} className='hero-img'/>
      </div>

      <div className='content'>
        <section>
          <span>
            <h1>Syed Mohammad Haider</h1>
            <ul className='social-links'>
              <li><a target="_blank" href="https://www.linkedin.com/in/syed-mohammad-haider-083407227/"><img src={'/icons/linkedin.svg'} /></a></li>
              <li><a target="_blank" href="https://github.com/syedmohammadhaider/"><img src={'/icons/github.svg'} /></a></li>
              <li><a target="_blank" href="mailto:syed.mohammad.haider05@gmail.com"><img src={'/icons/mail.svg'} /></a></li>
            </ul>
          </span>
          <p>
            Hi! I am a Computer Science student at MIT Manipal from Patna, India. I have always had a love for computers, from making HTML websites and video games in school to creating intelligent systems and deep learning models as a university student. Besides programming, I like reading, football and speedcubing.
          </p>
          {/* Add Later
          <p>
            <a href='/resume.pdf'>View my Resume →</a>
          </p>   */}
        </section>

        <section>
          <h2>My Projects</h2>
          <div className='project-container'>
            {
              PROJECTS.map((item, index) => (
                <ProjectCard
                  key={index}
                  name={item.name}
                  description={item.description}
                  cover={item.cover}
                  githubLink={item.githubLink && item.githubLink}
                  liveLink={item.liveLink && item.liveLink}
                />
              ))
            }
          </div>
        </section>

        <Writing />

        <section>
          <h2>Tools and Technology</h2>
          <div className='tech'>
            {
              LANGUAGES_AND_TOOLS.map((item, index) => (
                <div key={index} className='tech-chip'>
                  <p>{item}</p>
                </div>
              ))
            }
          </div>
        </section>

        <section>
          <div className='footer-container'>
            <h1>Still here? </h1>
            <p>You have reached the end of my little webpage. If you want to connect, feel free to reach out. </p>
            <ul>
              <li><a target='_blank' href="https://www.linkedin.com/in/syed-mohammad-haider-083407227/">LinkedIn</a></li>
              <li><a target='_blank' href="mailto:syed.mohammad.haider05@gmail.com">Email</a></li>
            </ul>
          </div>
        </section>

        <section className='footer'>
          <p>Built with &#9829; by Syed Mohammad Haider.</p>
          <p>Layout inspired by <a target='_blank' href='https://samworks.vercel.app/'>Samiran De</a>.</p>
        </section>
      </div>
    </div>
  )
}

export default App

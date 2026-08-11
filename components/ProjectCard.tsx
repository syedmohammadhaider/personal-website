import GithubLogo from '../public/icons/github.svg'
import Globe from '../public/icons/globe.svg'

export type ProjectCardProps = {
  cover: string;
  name: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
}

export function ProjectCard({
  cover,
  name,
  description,
  githubLink,
  liveLink
}: ProjectCardProps) {
  return (
    <div className="project-card-container">
      <img src={cover} width={'100%'} />
      <div className="project-info">
        <div className="project-name-and-links">
          <h3>{name}</h3>
          <div className="project-links">
            {githubLink && <a target='_blank' href={`${githubLink}`}><img src={GithubLogo} width={36} /></a>}
            {liveLink && <a target='_blank' href={`${liveLink}`}><img src={Globe} width={36} /></a>}
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

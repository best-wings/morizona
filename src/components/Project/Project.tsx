import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import appStoreIcon from "../../assets/appStore.png";
import playStoreIcon from "../../assets/gpstore.png";
import folderIcon from "../../assets/folder.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { ProjectData } from "./data";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {ProjectData.map((project) => (
          <ScrollAnimation animateIn="flipInX" key={`${project.title}`}>
            <div className="project">
              <header>
                <img src={folderIcon} alt="FolderIcon" />
                <div className="project-links">
                  <a href={project.appStore} target="_blank" rel="noreferrer">
                    <img src={appStoreIcon} alt="App Store" />
                  </a>
                  <a href={project.playStore} target="_blank" rel="noreferrer">
                    <img
                      src={playStoreIcon}
                      alt="Visit site"
                      style={{ width: 45, height: 45 }}
                    />
                  </a>
                </div>
              </header>
              <div className="gallery">
                {project.img.map((item, imgIndex) => (
                  <div
                    className="gallery-item"
                    key={`${project.title}_${imgIndex}`}
                  >
                    <img src={item} alt="GalleryItem" />
                  </div>
                ))}
              </div>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.skills.map((skill, skillIndex) => (
                    <li key={`${project.title}_skill_${skillIndex}`}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}

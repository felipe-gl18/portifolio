import { useEffect } from "react";
import { useState } from "react";
import styles from "./Projects.module.css";
function ProjectItem({ description, name, url }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/repos/felipe-gl18/${name}/languages`, {
      method: "GET",
    }).then(async (res) => setData(await res.json()));
  }, []);
  function handleRedirectToUrl() {
    window.open(url);
  }
  return (
    <>
      {data ? (
        <div>
          <div className={styles.name_and_url_redirection}>
            <h3>{name}</h3>
            <img onClick={handleRedirectToUrl} src="/icons/Link.png" alt="" />
          </div>
          <div className={styles.languages}>
            {Object.keys(data).map((item) => (
              <p>{item}</p>
            ))}
          </div>
          <div>
            <span>{description}</span>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default function Projects({ projectsRef }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/felipe-gl18/repos", {
      method: "GET",
    }).then(async (res) => setData(await res.json()));
  }, []);
  return (
    <div className={styles.projects} ref={projectsRef}>
      <h2>Projects</h2>
      {data ? (
        <div className={styles.projects_list}>
          {data.map((item) => (
            <ProjectItem
              name={item.name}
              description={item.description}
              url={item.html_url}
            />
          ))}
        </div>
      ) : (
        <p className={styles.not_found}>Please await the projects load...</p>
      )}
    </div>
  );
}

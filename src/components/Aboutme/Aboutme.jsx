import styles from "./Aboutme.module.css";
export default function Aboutme({ aboutMeRef, handleModalIsOpen }) {
  const links = {
    github: "https://github.com/felipe-gl18",
    linkedin: "https://www.linkedin.com/in/felipe-lino-developer/",
  };
  function handleRedirect(option) {
    window.open(links[option]);
  }
  return (
    <main className={styles.aboutme} ref={aboutMeRef}>
      <div className={styles.resume}>
        <div className={styles.name_and_occupation}>
          <h1>Felipe Gadelha</h1>
          <p>Software developer</p>
        </div>
        <div className={styles.apresentation}>
          <p>
            Hello, I am a Full-Stack Developer, working mainly with{" "}
            <strong>React.js</strong> and <strong>Node.js</strong>. Currently at{" "}
            <strong>Síntese BI</strong>, I develop SaaS solutions for data
            analysis and manage projects using <strong>Docker</strong> and{" "}
            <strong>AWS</strong>. I also have experience enhancing e-commerce
            platforms and integrating backend systems.
          </p>
        </div>
        <button className={styles.contactme} onClick={handleModalIsOpen}>
          Contact me
        </button>
        <div className={styles.social_medias}>
          <img
            src="/icons/GitHub.png"
            alt=""
            onClick={() => handleRedirect("github")}
          />
          <img
            src="/icons/LinkedIn.png"
            alt=""
            onClick={() => handleRedirect("linkedin")}
          />
        </div>
      </div>
      <div className={styles.portifolio_photo}></div>
    </main>
  );
}

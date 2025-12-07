import styled from "styled-components";

const StyledMain = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: #f5f5f5;
  padding: 64px;

  h1 {
    color: #0d3b66;
    font-size: 56px;
    font-weight: 700;
  }

  span {
    color: #555555;
    font-size: 28px;
    font-weight: 500;
  }

  p {
    text-align: start;
    color: #777777;
    font-size: 18px;
    font-weight: 500;
    max-width: 740px;
  }
`;

const Photo = styled.div`
  position: absolute;
  width: 242px;
  height: 242px;
  border-radius: 50%;

  top: 200px;
  right: 240px;

  background-image: url("/professional-photo.png");
  background-position: center center;
  background-size: cover;
`;

export default function Main() {
  return (
    <StyledMain>
      <Photo />
      <h1>Felipe Lino</h1>
      <span>Software Engineer</span>
      <p>
        I’m a full-stack developer focused on building modern, scalable, and
        maintainable web applications — especially in the SaaS and real-time
        communication space. I’m passionate about solving real problems through
        clean architecture, thoughtful design, and reliable engineering.
      </p>
    </StyledMain>
  );
}

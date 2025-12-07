import styled from "styled-components";
import "./App.css";
import Main from "./components/Main";
import Terminal from "./components/Terminal";

const Layout = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Half = styled.div`
  flex: 1;
  height: 100%;
`;

function App() {
  return (
    <Layout>
      <Half>
        <Main />
      </Half>

      <Half>
        <Terminal />
      </Half>
    </Layout>
  );
}

export default App;

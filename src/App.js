import Stack from "react-bootstrap/Stack";
import Container from 'react-bootstrap/Container';
import Header from "./components/Header";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";

function App() {
  return (
    <>
    <Container fluid className="App">
      <Header />
      <Body sidebar>
        <Projects />
      </Body>
    </Container>
    </>
  );
}

export default App;

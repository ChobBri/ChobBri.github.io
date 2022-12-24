import Stack from "react-bootstrap/Stack";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Header from "./components/Header";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";

function App() {
  const projects = [
    {
      id: 1,
      title: 'Psychokinefish',
      description: 'Horizontal scrolling fish game involving psychokinefish.',
      link: 'https://chobbri.itch.io/psychokinefish',
    },
    {
      id: 2,
      title: 'Wiggle Match',
      description: 'Block matching puzzle game',
      link: 'https://chobbri.itch.io/wiggle-match',
    },
  ]
  return (
    <>
    <Container fluid className="App">
      <Header />
      <Container>
        <Stack direction="horizontal">
          <Sidebar />
          <Container>
            <Projects />
          </Container>
        </Stack>
      </Container>
    </Container>
    </>
  );
}

export default App;

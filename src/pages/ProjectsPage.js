import Projects from "../components/Projects";
import Body from "../components/Body";

export default function ProjectsPage() {
  return (
    <Body>
        <h1 style={{marginTop: "7px"}}>Projects</h1>
        <p>Some of my software/game related projects.</p>
        <Projects />
    </Body>
  );
}
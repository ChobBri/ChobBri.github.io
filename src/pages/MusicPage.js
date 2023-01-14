import Body from "../components/Body";
import Musics from "../components/Musics";
import Project from "../components/Project";

export default function MusicPage() {
    const project = {
        id: 1,
        title: 'Starlight Chemistry Soundtrack',
        description: '',
        link: 'https://www.youtube.com/watch?v=soH0LgIjIV8',
        coversrc: '/assets/Starlight Chemistry Cover.jpg',
        };

  return (
    <Body>
        <h1 style={{marginTop: "7px"}}>Music</h1>
        <p>Sometimes I make music as a hobby.</p>
        <Project key={1} project={project}/>
        <Musics />
    </Body>
  );
}
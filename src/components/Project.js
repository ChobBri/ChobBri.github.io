import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

export default function Project( {project}) {
    return (
        <div className="Project">
            <a href={project.link} target="_blank" style={{color: "inherit", text_decoration:"none"}}>
                <Stack direction="horizontal" gap={3} className="ProjectContainer">
                    <div className="ProjectCoverContainer">
                        <Image src={project.coversrc} alt={project.title} className="ProjectCover"/>
                    </div>
                    <div className="ProjectAttributes">
                        <p><b>{project.title}</b></p>
                        <p>{project.description}</p>
                    </div>
                </Stack>
            </a>
        </div>
    )
}
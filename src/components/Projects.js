import Project from "./Project";

export default function Projects() {
    const projects = [
        {
        id: 1,
        title: 'Psychokinefish',
        description: 'Horizontal scrolling fish game involving psychokinefish.',
        link: 'https://chobbri.itch.io/psychokinefish',
        coversrc: '/assets/Psychokinefish Cover.jpg',
        },
        {
        id: 2,
        title: 'Wiggle Match',
        description: 'Block matching puzzle game',
        link: 'https://chobbri.itch.io/wiggle-match',
        coversrc: '/assets/Wiggle Match Cover.jpg',
        },
    ];

    return (
        <>
            <h4>Projects</h4>
            {projects.length === 0 ?
                <p>No projects yet!</p>
            :
                projects.map(project => <Project key={project.id} project={project}/>)
            }
        </>
    )
}
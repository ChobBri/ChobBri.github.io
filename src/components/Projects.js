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
        description: 'Block matching puzzle game.',
        link: 'https://chobbri.itch.io/wiggle-match',
        coversrc: '/assets/Wiggle Match Cover.jpg',
        },
        {
        id: 6,
        title: 'Tankinematics',
        description: 'Interactive tool to make learning high school 2D kinematics fun.',
        link: 'https://github.com/ChobBri/Tankinematics',
        coversrc: '/assets/Tankinematics Cover.jpg',
        },
        {
        id: 4,
        title: 'Hamstar',
        description: 'Gravity-centric platformer.',
        link: 'https://oscosan.itch.io/hamstar',
        coversrc: '/assets/Hamstar Cover.jpg',
        },
        {
        id: 5,
        title: 'Dice Quest',
        description: 'Turn-based dice-rolling strategy game.',
        link: 'https://thenewgrandmaster.itch.io/gmtkgamejam2022',
        coversrc: '/assets/Dice Quest Cover.jpg',
        },
        {
        id: 3,
        title: 'Starlight Chemistry',
        description: '2D platformer game about reclaiming the sun.',
        link: 'https://chobbri.itch.io/starlight-chemistry',
        coversrc: '/assets/Starlight Chemistry Cover.jpg',
        },
        
            
    ];

    return (
        <>
            {projects.length === 0 ?
                <p>No projects yet!</p>
            :
                projects.map(project => <Project key={project.id} project={project}/>)
            }
        </>
    )
}
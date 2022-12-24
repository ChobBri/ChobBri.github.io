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
      <h1>Portfolio</h1>
      <h4>Projects</h4>
      {projects.length === 0 ?
        <p>No projects yet!</p>
      :
        projects.map(project => {
          return(
            <div key={project.id}>
              <p><b>{project.title}</b></p>
              <p>{project.description}</p>
              <a href={project.link} target="_blank">View</a>
            </div>
          )
        })
      }
    </>
  );
}

export default App;

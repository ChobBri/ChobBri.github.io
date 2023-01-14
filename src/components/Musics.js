import Music from "./Music";

export default function Musics() {
    const musics = [
        {
        id: 1,
        title: 'Unknown Space Wax',
        description: 
        `The very first track I made using the free FL studio version. That's why you hear the drums cut out near the final section.
        Apparently, I made this back in early 2018.`
        ,
        audiosrc: 'assets/Music/unknown space wax.wav',
        },
        {
        id: 2,
        title: 'Tetris Remix',
        description: 
        `I made this for a school stop-motion film project (you can probably guess what it was about). Primarily used the Synth1 plugin. I basically copied the style of Danny Baranowsky from his dannyBsides album, but you know, I was just learning at the time.`
        ,
        audiosrc: 'assets/Music/tetris arrange.mp3',
        },
        {
        id: 3,
        title: 'To The Grassland remix - Cave Story',
        description: 
        `Another remix that I basically copied off of Danny Baranowsky. I believe this time I had the Fruity edition of FL. Still using Synth1 plugin.`
        ,
        audiosrc: 'assets/Music/to the grassland remix - cave story.wav',
        },
        {
        id: 4,
        title: 'The Moon remix - Ducktales',
        description: 
        `Yet another remix that I copy except this time I copy off of Jake Kaufman.

        Still rocking the Synth1 plugin.`
        ,
        audiosrc: 'assets/Music/Ducktales - The Moon arrange bass up.mp3',
        },
        {
        id: 5,
        title: 'Space Exploration',
        description: 
        `Surprisingly, an original track that I made aside from the fact that I copied Lena Raine's bass on 'in risk we trust' from her Hackmud soundtrack .

        Made this for the Queen's Computing 2024 discord server.
        
        I believe I used the Producer edition of FL.`
        ,
        audiosrc: 'assets/Music/space exploration smth.mp3',
        },
        {
        id: 6,
        title: 'Adventure Theme',
        description: 
        `This one is probably my favourite. It has always been on my mind to do an orchestral track since I grew up playing the violin.
        I really loved seeing all the instruments come together.

        This is another track I made for the Queen's Computing 2024 discord server.`
        ,
        audiosrc: 'assets/Music/Some Adventure Theme.mp3',
        },
        {
        id: 7,
        title: 'FL sucks',
        description: 
        `jk, not really. I just don't like their file management system. Switched to Ableton Live though.`
        ,
        audiosrc: 'assets/Music/FL sucks.mp3',
        },
        {
        id: 8,
        title: 'Beksample',
        description: 
        `Used Beksinski's guitar sample.`
        ,
        audiosrc: 'assets/Music/Beksample.mp3',
        },
        {
        id: 9,
        title: 'Winter Track',
        description: 
        `Winter vibes.`
        ,
        audiosrc: 'assets/Music/Winter Track.mp3',
        },
        {
        id: 10,
        title: 'Glitchy Voice',
        description: 
        `If I remember correctly, I recorded myself reading a business fundamentals textbook and put a beat over it.`
        ,
        audiosrc: 'assets/Music/GlitchyVoice.mp3',
        },
    ];
    return (
        <>
            {musics.length === 0 ?
                <p>No music yet!</p>
            :
                musics.map(music => <Music key={music.id} music={music}/>)
            }
        </>
    )
}
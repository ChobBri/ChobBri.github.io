import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import ReactAudioPlayer from 'react-audio-player';

export default function Music( {music}) {
    return (
        <div className="Music">
            <Stack direction="horizontal" gap={3} className="ProjectContainer">
                <div className="AudioPlayer">
                    <ReactAudioPlayer src={music.audiosrc} controls/>
                </div>
                <div className="ProjectAttributes">
                    <p><b>{music.title}</b></p>
                    <p>{music.description}</p>
                  
                </div>
            </Stack>
        </div>
    )
}
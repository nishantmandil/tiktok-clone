import React, { useEffect, useState } from "react";
import './App.css';
import db from "./firebase";
import Video from './Video';

function App() {

  const [videos, setVideos]= useState([]);

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => (
        setVideos(snapshot.docs.map(doc => doc.data()))
    ))
  }, [videos])

  return (
    <div className="app">
      <div className="app__videos">

        {videos.map( ({ url,channel,description,song,likes,messages,shares }) => (
          <Video
          url={url}
        channel={channel}
        description={description}
        song={song}
        likes={likes}
        messages={messages}
        shares={shares} />
        ))}
        {/* <Video 
        url="https://9gag.com/photo/aEpBDZn_460sv.mp4"
        channel="nishant"
        description="Wow this works"
        song="original sound ..."
        likes={123}
        messages={43}
        shares={21}
        />
        <Video url="https://9gag.com/photo/anQjDMq_460sv.mp4"
        channel="FunnyMan"
        description="Wow this works"
        song="original sound ..."
        likes={323}
        messages={143}
        shares={108} />
        <Video />
        <Video /> */}
      </div>

    </div>
  );
}

export default App;

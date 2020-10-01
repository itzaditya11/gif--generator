import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.React_APP_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const [gif, setGif] = useState("");
  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };
  useEffect(() => {
    fetchGif(tag);
  }, []);
  const handleClick = () => {
    fetchGif(tag);
    console.log("new gif ");
  };
  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="random Gif" />
      <input
        value={tag}
        placeholder="What is in your mind"
        onChange={(e) => setTag(e.target.value)}
      />
      <button onClick={handleClick}>Click For Gif you want to See</button>
    </div>
  );
};

export default Tag;

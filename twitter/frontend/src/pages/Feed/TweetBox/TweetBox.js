import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "./TweetBox.css";

const TweetBox = () => {
  const [post, setPost] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleTweet = (e) => {
    e.preventDefault();
    const userPost = {
      post: post,
      imageURL: imageURL, // Changed this property name
    };
    console.log(userPost);
    
    fetch(`http://localhost:5000/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //

  return (
    <div className="tweetBox">
      <form action="" onSubmit={handleTweet}>
        <div className="tweetBox_input">
          <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
          <input
            type="text"
            placeholder="whats happening"
            onChange={(e) => {
              setPost(e.target.value);
            }}
          />
        </div>

        <div className="imageIcon_tweetButton">
          <label htmlFor="image" className="imageIcon">
            <AddPhotoAlternateIcon />
          </label>
          <input type="file" id="image" className="imageInput" />
          <Button className="tweetBox_tweetButton" type="submit">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;

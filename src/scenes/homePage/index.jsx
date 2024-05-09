import { Box, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLogout, setMode } from "state";

const HomePage = () => {

  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
const dispatch = useDispatch();                                                 //dispatch actions to reducers
	const navigate = useNavigate();


	var scrollup;
	var scrolldown;	

	const pages = ["go to home", "go to profile","logout"];
	const urls = {
		"go to home": "/home",
		"go to profile": `/profile/${_id}`
	};

	const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
	const recognition = new speechRecognition();
	window.onload = () => {
		recognition.start();

		recognition.onresult = (event) => {
			var command = event.results[0][0].transcript
			// document.querySelector("#transcript").textContent=command;
			console.log(command);

			if (pages.includes(command)) {

				navigate(urls[command])
				recognition.stop();
				if(command==="logout"){
					dispatch(setLogout());
				}


			}

			else if (command === "goup" || command === "scrollup" || command ==="scroll up" || command ==="Scroll up") {


				scrollup = setInterval(() => execute(), 2000);
				function execute() {
					window.scrollBy(0, -500);

				}

			}
			else if (command === "godown" || command === "scrolldown" || command ==="scroll down") {

				scrolldown = setInterval(() => execute(), 2000);
				function execute() {
					window.scrollBy(0, 500);

				}
				

			}
			else if (command === "stop") {

				clearInterval(scrollup);
				clearInterval(scrolldown);
			}
			else if(command ==="change"){
				dispatch(setMode());
			}
			else if (window.scrollY === 0 || (window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
				clearInterval(scrollup);
				clearInterval(scrolldown);
				console.log("stop .");
			}


		}
	}
	recognition.onend = () => {
		recognition.start();
		window.onscroll = function(ev) {
			if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight){
				clearInterval(scrollup);
				clearInterval(scrolldown);
				console.log("stop 2.");
			}
		};
	}







  return (
    <Box>
      <Navbar />
      <Box
className=" scroll-smooth"
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;

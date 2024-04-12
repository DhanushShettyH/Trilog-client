import { useEffect, useState } from "react";
import {
	Box,
	IconButton,
	InputBase,
	Typography,
	Select,
	MenuItem,
	FormControl,
	useTheme,
	useMediaQuery,
	Button,
} from "@mui/material";
import {
	Search,
	Message,
	DarkMode,
	LightMode,
	Notifications,
	Help,
	Menu,
	Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const Navbar = () => {
	const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
	const dispatch = useDispatch();                                                 //dispatch actions to reducers
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
	const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");             //from material ui

	const theme = useTheme();                                                     //we can use theme js color
	const neutralLight = theme.palette.neutral.light;
	const dark = theme.palette.neutral.dark;
	const background = theme.palette.background.default;
	const primaryLight = theme.palette.primary.light;
	const alt = theme.palette.background.alt;

	const fullName = `${user.firstName} ${user.lastName}`;


	// const [redirectUrl, setredirectUrl] = useState("");

	// const commands = [{
	// 	command: ["Go to *", "Open *",],
	// 	callback: (redirectPage) => setredirectUrl(redirectPage)
	// },//* is redirectPage
	// ];
	// const { transcript } = useSpeechRecognition({ commands });

	// const pages = ["home", "profile","logout"];
	// const urls = {
	// 	home: "/home",
	// 	profile: `/trilog/profile/${user._id}`
	// };


	// useEffect(() => {
	// 	if (redirectUrl) {
	// 		if (pages.includes(redirectUrl)) {
	// 			console.log(redirectUrl);

	// 			navigate(urls[redirectUrl])
	// 			if(redirectUrl==="logout"){
	// 				dispatch(setLogout());
	// 			}


	// 		}
	// 		else {
	// 			console.log(redirectUrl, "failed");
	// 			// @ts-ignore

	// 		}
	// 	}
	// }, [redirectUrl])
	// if (!SpeechRecognition.browserSupportsSpeechRecognition) {
	// 	return null
	// }


	return (
		<FlexBetween padding="1rem 6%" backgroundColor={alt}>
			<FlexBetween gap="1.75rem">
				<Typography
					fontWeight="bold"
					fontSize="clamp(1rem, 2rem, 2.25rem)"                       //clamp(min recommended max)      in small device min
					color="primary"
					onClick={() => navigate("/trilog/home")}
					sx={{
						"&:hover": {
							color: primaryLight,
							cursor: "pointer",
						},
					}}
				>
					TriLog
				</Typography>
				{isNonMobileScreens && (
					<FlexBetween
						backgroundColor={neutralLight}
						borderRadius="9px"
						gap="3rem"
						padding="0.1rem 1.5rem"
					>
						<InputBase placeholder="Search..." />
						<IconButton>
							<Search />
						</IconButton>
					</FlexBetween>
				)}
			</FlexBetween>

			{/* DESKTOP NAV */}
			{isNonMobileScreens ? (
				<FlexBetween gap="2rem">
					<IconButton onClick={() => dispatch(setMode())}>
						{theme.palette.mode === "dark" ? (
							<DarkMode sx={{ fontSize: "25px" }} />
						) : (
							<LightMode sx={{ color: dark, fontSize: "25px" }} />
						)}
					</IconButton>
					<Message sx={{ fontSize: "25px" }} />
					<Notifications sx={{ fontSize: "25px" }} />
					<Help sx={{ fontSize: "25px" }} />
					<Box>
					
					</Box>
					<FormControl variant="standard" value={fullName}>
						<Select
							value={fullName}
							sx={{
								backgroundColor: neutralLight,
								width: "150px",
								borderRadius: "0.25rem",
								p: "0.25rem 1rem",
								"& .MuiSvgIcon-root": {
									pr: "0.25rem",
									width: "3rem",
								},
								"& .MuiSelect-select:focus": {
									backgroundColor: neutralLight,
								},
							}}
							input={<InputBase />}
						>
							<MenuItem value={fullName}>
								<Typography>{fullName}</Typography>
							</MenuItem>
							<MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
						</Select>
					</FormControl>
					<Box>
					<p id="transcript"></p>
					</Box>
				</FlexBetween>
			) : (
				<IconButton
					onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
				>
					<Menu />
				</IconButton>
			)}

			{/* MOBILE NAV */}
			{!isNonMobileScreens && isMobileMenuToggled && (
				<Box
					position="fixed"
					right="0"
					bottom="0"
					height="100%"
					zIndex="10"
					maxWidth="500px"
					minWidth="300px"
					backgroundColor={background}
				>
					{/* CLOSE ICON */}
					<Box display="flex" justifyContent="flex-end" p="1rem">
						<IconButton
							onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
						>
							<Close />
						</IconButton>
					</Box>

					{/* MENU ITEMS */}
					<FlexBetween
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						gap="3rem"
					>
						<IconButton
							onClick={() => dispatch(setMode())}
							sx={{ fontSize: "25px" }}
						>
							{theme.palette.mode === "dark" ? (
								<DarkMode sx={{ fontSize: "25px" }} />
							) : (
								<LightMode sx={{ color: dark, fontSize: "25px" }} />
							)}
						</IconButton>
						<Message sx={{ fontSize: "25px" }} />
						<Notifications sx={{ fontSize: "25px" }} />
						<Help sx={{ fontSize: "25px" }} />
						<FormControl variant="standard" value={fullName}>
							<Select
								value={fullName}
								sx={{
									backgroundColor: neutralLight,
									width: "150px",
									borderRadius: "0.25rem",
									p: "0.25rem 1rem",
									"& .MuiSvgIcon-root": {
										pr: "0.25rem",
										width: "3rem",
									},
									"& .MuiSelect-select:focus": {
										backgroundColor: neutralLight,
									},
								}}
								input={<InputBase />}
							>
								<MenuItem value={fullName}>
									<Typography>{fullName}</Typography>
								</MenuItem>
								<MenuItem onClick={() => dispatch(setLogout())}>
									Log Out
								</MenuItem>
							</Select>
						</FormControl>
						<Box>
					<p id="transcript"></p>
					</Box>
					</FlexBetween>
				</Box>
			)}
		</FlexBetween>
	);
};

export default Navbar;

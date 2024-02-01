import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import LoadingPage from "landingSite/LoadingPage";

function App() {
  const mode = useSelector((state) => state.mode);                                //accessing mode
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);          //we set theme for material ui pass this themeProvider={theme}
  const isAuth = Boolean(useSelector((state) => state.token));                    //authentication

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />                          {/*  css reset : a list of rules that 'reset' all of the default browser styles   */}
          <Routes>
			<Route path="/" element={isAuth ?<Navigate to="/home"/>:<LoadingPage/>}/>

            <Route path="/login" element={isAuth?<Navigate to="/home"/>:<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

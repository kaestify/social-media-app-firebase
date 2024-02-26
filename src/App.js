import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Profile from "./pages/profile/Profile";
import { useAuthContext } from "./hooks/useAuthContext";
import NewPost from "./pages/posts/NewPost";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>

            <Route exact path="/login">
              {!user && <Login />}
            </Route>

            <Route exact path="/profile">
              <Profile />
            </Route>

            <Route exact path="/signup">
              {!user && <Signup />}
              {user && <Redirect to="/home" />}
            </Route>
            <Route exact path="/home">
              {user && <Home />}
              {!user && <Redirect to="/login" />}
            </Route>
            <Route exact path="/newpost">
              <NewPost />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

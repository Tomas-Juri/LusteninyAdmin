import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "wouter";
import { GameCyphersPage, GameHomePage, GameNewTeamPage, GameSelectionPage, GameSetttingsPage, LoginPage } from "./pages";
import { GameTeamsPage } from "./pages/GameTeamsPage";
import { RegisterPage } from "./pages/RegisterPage";
import { RootState } from "./redux/store";

const App = () => {
  const isAuthorized = useSelector((state: RootState) => state.auth.isAuthorized);

  console.log(isAuthorized);
  return (
    <>
      <Switch>
        <Route path="/account/login" component={LoginPage} />
        <Route path="/account/register" component={RegisterPage} />

        {isAuthorized ? (
          <>
            <Route path="/" component={GameSelectionPage} />
            <Route path="/games/:gameId" component={GameHomePage} />
            <Route path="/games/:gameId/teams" component={GameTeamsPage} />
            <Route path="/games/:gameId/teams/new" component={GameNewTeamPage} />
            <Route path="/games/:gameId/cyphers" component={GameCyphersPage} />
            <Route path="/games/:gameId/settings" component={GameSetttingsPage} />
          </>
        ) : (
          <Redirect to="/account/login" />
        )}
      </Switch>
    </>
  );
};

export default App;

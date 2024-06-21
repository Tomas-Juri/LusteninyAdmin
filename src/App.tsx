import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "wouter";
import { GameCyphersPage, GameHomePage, GameSelectionPage, GameSetttingsPage, LoginPage } from "./pages";
import { GameTeamsPage } from "./pages/GameTeamsPage";
import { RootState } from "./redux/store";

const App = () => {
  const isAuthorized = useSelector((state: RootState) => state.auth.isAuthorized);

  console.log(isAuthorized);
  return (
    <>
      {isAuthorized === false && <Redirect to="/login" />}
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={GameSelectionPage} />
        <Route path="/games/:gameId" component={GameHomePage} />
        <Route path="/games/:gameId/teams" component={GameTeamsPage} />
        <Route path="/games/:gameId/cyphers" component={GameCyphersPage} />
        <Route path="/games/:gameId/settings" component={GameSetttingsPage} />
      </Switch>
    </>
  );
};

export default App;

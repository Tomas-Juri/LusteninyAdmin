import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "wouter";
import { GameHomePage, GameSelectionPage, LoginPage } from "./pages";
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
      </Switch>
    </>
  );
};

export default App;

import { Route, Switch } from "react-router-dom";

import AllMeetups from "./Pages/AllMeetups";
import NewMeetup from "./Pages/NewMeetup";
import Favorites from "./Pages/Favorites";
import Layout from './Components/Layout/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

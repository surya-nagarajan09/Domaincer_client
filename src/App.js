import React,{Fragment} from "react";
import CandidatePage from "./Candidate/CandidatePage";
import RecruiterPage from "./Recruiter/RecruiterPage";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {UserContext} from "./userContext";
import Jobs from "./JobFeed/Jobs";
import RecruiterDash from "./Recruiter/JobCreate/RecruiterDash"

const   App=()=> {
  let  isLogged_seeker=false;
  let  isLogged_recruiter=false;
  return (
    <Fragment>
      <Router>
        <Switch>
          <UserContext.Provider value={{isLogged_seeker,isLogged_recruiter}}>
          <Route exact path="/" component={CandidatePage}/>
          <Route path="/recruiter" component={RecruiterPage}/>
          <Route path="/jobs" component={Jobs}/>
          <Route path="/recruiterdash" component={RecruiterDash}/>
          </UserContext.Provider>
        </Switch>   
      </Router> 
     </Fragment>
  );
}

export default App;

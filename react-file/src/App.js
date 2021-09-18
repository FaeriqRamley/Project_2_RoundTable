import React,{useEffect} from "react";
import { Switch,Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ArticlePage from "./pages/ArticlePage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer";
import {useDispatch} from 'react-redux';
import {updateNewsKey,addUser} from "./actions";
import LoginPage from "./pages/LoginPage";
import { getAuth,onAuthStateChanged } from "@firebase/auth";
import AppNav from "./components/AppNav";
import {Container,Row} from 'react-bootstrap';

function App() {
  const dispatch = useDispatch();
//   const currentUser = useSelector(state => state.currentUser)
  const auth = getAuth();
  
  useEffect(() => {
    // const gNewsApiKey = "d69945a9c7ac933a0182b48a3b100db9";
    const gNewsApiKey = "93bae65096c243999aa3397cdfe5a526";
    dispatch(updateNewsKey(gNewsApiKey))
  }, [])

  useEffect(()=> {
    onAuthStateChanged(auth,
        (user) => {
            dispatch(addUser(user))
        }
    )
  },[])

  return (
    <div>
        <AppNav/>
        <Container fluid>
          <Row>
            <Switch>
                <Route exact path="/" component={SearchPage}/>
                <Route path="/articles" component={ArticlePage}/>
                <Route path="/profile" component={ProfilePage}/>
                <Route path="/login" component={LoginPage}/>
            </Switch>
          </Row>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;

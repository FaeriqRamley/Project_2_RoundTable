import React from 'react'
import {Navbar,Container} from 'react-bootstrap';
import {getAuth,signOut} from 'firebase/auth';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {removeUser} from "../actions";

function AppNav() {
    const currentUser = useSelector(state => state.currentUser);
    const auth = getAuth()
    const dispatch = useDispatch()

    const handleSignOut = (e) => {
        e.preventDefault();
        signOut(auth);
        dispatch(removeUser())
    }


    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/" style={{textDecoration:"none",color:"inherit"}}>RoundTable</Link>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    {currentUser ? 
                        <React.Fragment>
                            <Navbar.Text style={{marginRight:"10px"}}>
                                <span>Signed in as: </span>
                                <Link to="/profile" style={{color:"inherit"}}>
                                    {currentUser.displayName}
                                </Link>
                            </Navbar.Text>
                            <Navbar.Text onClick={handleSignOut}>
                                Sign Out
                            </Navbar.Text>
                        </React.Fragment>:
                        <Navbar.Text>
                            <Link to="/login" style={{textDecoration:"none",color:"inherit"}}>
                                Log In | Sign Up
                            </Link>
                        </Navbar.Text>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNav;

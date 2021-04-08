import * as React from "react";
import { Link } from "gatsby";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AllNotes from './notes/AllNotes';
import NewNote from './notes/NewNote';
import EditNote from './notes/EditNote';
import Form from './notes/Form';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar App-header" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to={"/index"} className="navbar-item">Book of Shadows</Link>
            </div>
            <div className="navbar-end">
                <Link to="/" className="navbar-item">All Notes</Link>
                <Link to="/newnote" className="navbar-item">New Note</Link>
                <Form />
            </div>
            </nav>
            {/* <Route exact path="/" component={AllNotes}/>
            <Route path="/newnote" component={NewNote}/>
            <Route path="/note/:id" component={EditNote}/> */}
        </div>
    )
}
export default Navbar;
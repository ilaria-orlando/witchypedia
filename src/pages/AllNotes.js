import * as React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from "../components/layout"
import Background from "../components/background";

import editIcon from '../images/edit.png';
import deleteIcon from '../images/delete.png';


const AllNotes = (props) => {
    console.log(props);
    const notes = props.data.allMongodbWitchypediaNotes.nodes;
// TODO links edit note
// TODO link delete note
// TODO new note
    return(
        <Background>
            <Layout>
                <div className="divStyle">
                    {notes.map(note =>
                        <div className="note">
                                {/* <img src={note.node.thumbnailUrl} /> */}
                                <h2>{note.title}</h2>
                                <p>{note.content}</p>
                                {/* <h6>{note.date}</h6> */}
                                <Link to={'/editNote/'+note.id}> <button type='button'> <img className="grimoireButton" src={editIcon} alt="edit"/></button></Link>
                                <Link to={'/deleteNote/'}> <button type='button'> <img className="grimoireButton" src={deleteIcon} alt="delete"/></button></Link>
                        </div>
                    )}
                </div>
            </Layout>
        </Background>
    )

}

export const notesQuery = graphql`
    query {
        allMongodbWitchypediaNotes {
            nodes {
                id
                content
                title
                date
            }
        }
    }
`
export default AllNotes;
import * as React from 'react';
import {graphql, Link} from 'gatsby';


const AllNotes = (props) => {
    console.log(props);
    const notes = props.data.allMongodbWitchypediaNotes.nodes;
// TODO links edit note
// TODO link delete note
// TODO new note
    return(
        <div className="divStyle">
            {notes.map(note =>
                <div className="note">
                        {/* <img src={note.node.thumbnailUrl} /> */}
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>
                        <h6>{note.date}</h6>
                        <Link to={'/editNote/'+note.id}>Edit</Link>
                        <Link to={'/deleteNote/'}>Delete</Link>
                </div>
            )}
        </div>
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
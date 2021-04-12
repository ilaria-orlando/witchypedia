import * as React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from "../components/layout"
import Background from "../components/background";


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
                                <Link to={'/editNote/'+note.id}> <i></i> </Link>
                                <Link to={'/deleteNote/'}>Delete</Link>
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
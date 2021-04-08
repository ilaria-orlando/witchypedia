import * as React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from "../components/layout";


const BookOfShadows = (props) => {
    console.log(props);
    const notes = props.data.allMongodbWitchypediaNotes.nodes;

    return(
        <Layout>
            <div className="divStyle">
                {notes.map(note =>
                    <div className="note">
                        <Link to={'/note/' + note.id}>
                            {/* <img src={note.node.thumbnailUrl} /> */}
                            <h2>{note.title}</h2>
                            <p>{note.content}</p>
                            <h6>{note.date}</h6>
                        </Link>
                    </div>
                )}
            </div>
        </Layout>
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
export default BookOfShadows;

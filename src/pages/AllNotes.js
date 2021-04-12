import * as React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from "../components/layout"
import Background from "../components/background";

import editIcon from '../images/edit.png';
import deleteIcon from '../images/delete.png';
import addIcon from '../images/add.png';


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
                    <div className="grimoire">
                        <h1 className="name">Grimoire</h1>
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
                    <div className="container m-t-20">
                        <div className="newnote-page m-t-20">
                            <form>
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input"
                                            name="title"
                                            type="text"
                                            placeholder="Note Title"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <textarea
                                            className="textarea"
                                            name="content"
                                            rows="10"
                                            placeholder="Note Content here..."
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <button className="button is-link"><img className="grimoireButton" src={addIcon} alt="add"/></button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
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
import * as React from 'react';
import axios from 'axios';

const CreateNote = () => {

    constructor(props) {
        super(props);

        this.onChangeNoteDescription = this.onChangeNoteDescription.bind(this);
        this.onChangeNoteResponsible = this.onChangeNoteResponsible.bind(this);
        this.onChangeNotePriority = this.onChangeNotePriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            note_description: '',
            note_responsible: '',
            note_priority: '',
            note_completed: false
        }
    }

    onChangeNoteDescription(e) {
        this.setState({
            note_description: e.target.value
        });
    }

    onChangeNoteResponsible(e) {
        this.setState({
            note_responsible: e.target.value
        });
    }

    onChangeNotePriority(e) {
        this.setState({
            note_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Note Description: ${this.state.note_description}`);
        console.log(`Note Responsible: ${this.state.note_responsible}`);
        console.log(`Note Priority: ${this.state.note_priority}`);
        console.log(`Note Completed: ${this.state.note_completed}`);

        const newNote = {
            note_description: this.state.note_description,
            note_responsible: this.state.note_responsible,
            note_priority: this.state.note_priority,
            note_completed: this.state.note_completed
        }

        axios.post('https://webhooks.mongodb-realm.com/api/client/v2.0/app/witchypedia-wigwf/service/notes/incoming_webhook/add', newNote)
            .then(res => console.log(res.data));

        this.setState({
            note_description: '',
            note_responsible: '',
            note_priority: '',
            note_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Note</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.note_description}
                                onChange={this.onChangeNoteDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.note_responsible}
                                onChange={this.onChangeNoteResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.note_priority==='Low'}
                                    onChange={this.onChangeNotePriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.note_priority==='Medium'}
                                    onChange={this.onChangeNotePriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.note_priority==='High'}
                                    onChange={this.onChangeNotePriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Note" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateNote;
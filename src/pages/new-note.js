const newNote = () => {
    return (
        <div className="container m-t-20">
            <h1 className="page-title">New Note</h1>

            <div className="newnote-page m-t-20">
                <form
                    onSubmit={e => {
                        e.preventDefault();

                        createNote({
                            variables: {
                                title,
                                content,
                                date: Date.now()
                            }
                        });
                        // TODO notification/ empty field error 
                        // if (!empty) {
                        //     notify.show("Note was edited successfully", "success");
                        // } else {
                        // notify.show("Please fill in the fields", "error");
                        // }
                        history.push("/");
                    }}
                >
                    <div className="field">
                        <label className="label">Note Title</label>
                        <div className="control">
                            <input
                                className="input"
                                name="title"
                                type="text"
                                placeholder="Note Title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Note Content</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                name="content"
                                rows="10"
                                placeholder="Note Content here..."
                                value={content}
                                onChange={e => setContent(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
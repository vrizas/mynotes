import React from 'react';

class AddNoteModalBody extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
        title: '',
        body: '',
      }
    
      this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
      this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
          return {
            title: event.target.value,
          }
        });
    }
      
    onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
    }

    onHideAddNoteModal() {
        const addNoteModal = document.querySelector('.add-note-modal');
        const addNoteModalContent = document.querySelector('.add-note-modal__content');
        addNoteModalContent.style.transform = 'scale(0)';
        setTimeout(() => {
            addNoteModal.style.display = 'none';
        }, 300)
    }
      
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNoteHandler(this.state);
        this.setState(() => {
            return {
                title: '',
                body: '',
            }
        });
        this.onHideAddNoteModal();
        window.scrollTo(0, document.body.scrollHeight);
    }

    render() {
        return (
            <section className="add-note-modal__body">
                <form className="add-note-modal__form" onSubmit={this.onSubmitEventHandler}>
                    <div className="add-note-modal__form-item">
                        <label htmlFor="title">Judul</label>
                        <input type="text" id="title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    </div>
                    <div className="add-note-modal__form-item">
                        <label htmlFor="body">Catatan</label>
                        <textarea cols="30" rows="10" id="body" value={this.state.body} onChange={this.onBodyChangeEventHandler} ></textarea>
                    </div>
                    <button className="add-note-modal__form-add">Simpan</button>
                </form>
            </section>
         );
    }
}

export default AddNoteModalBody;
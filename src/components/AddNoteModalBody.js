import React from 'react';

class AddNoteModalBody extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
        title: '',
        body: '',
        remainingTitleChar: 50,
      }
    
      this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
      this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const title = event.target.value;

        if (title.length > 50) {
            return;
        }

        return this.setState(() => {
            return {
              title,
              remainingTitleChar: 50 - title.length,
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
        const titleInput = document.querySelector('#title');
        const bodyInput = document.querySelector('#body');

        if (!this.state.title && !this.state.body) {
            titleInput.style.borderColor = 'var(--danger)';
            bodyInput.style.borderColor = 'var(--danger)';
            return;
        }

        if (!this.state.title) {
            titleInput.style.borderColor = 'var(--danger)';
            bodyInput.style.borderColor = 'var(--secondary)';
            return;
        }

        if (!this.state.body) {
            titleInput.style.borderColor = 'var(--secondary)';
            bodyInput.style.borderColor = 'var(--danger)';
            return;
        }

        this.props.addNoteHandler(this.state);
        this.setState(() => {
            return {
                title: '',
                body: '',
            }
        });

        titleInput.style.borderColor = 'var(--secondary)';
        bodyInput.style.borderColor = 'var(--secondary)';
        
        this.onHideAddNoteModal();
        const noteList = document.querySelector('.note-list');
        window.scrollTo(0, noteList.scrollHeight);
    }

    render() {
        return (
            <section className="add-note-modal__body">
                <p className="add-note-modal__limit">Sisa karakter: <span>{this.state.remainingTitleChar}</span></p>
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
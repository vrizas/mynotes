import React from 'react';

class SearchInput extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
        query: '',
      }
    
      this.onQueryChangeEventHandler = this.onQueryChangeEventHandler.bind(this);
    }
      
    onQueryChangeEventHandler(event) {
        this.setState(() => {
            return {
              query: event.target.value,
            }
        });

        this.props.searchNoteHandler(event.target.value);
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
    }

    render() {
        return (
            <section className="search">
                <form className="search__form" onSubmit={this.onSubmitEventHandler}>
                    <div className="search__form-item">
                        <span className="material-icons icon">search</span>
                        <input type="text" id="Query" value={this.state.query} onChange={this.onQueryChangeEventHandler} />
                    </div>
                </form>
            </section>
         );
    }
}

export default SearchInput;
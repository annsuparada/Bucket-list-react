import React from "react"

class BucketForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }


    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value })
    };
    hendleSubmit = event => {
        event.preventDefault();
        this.setState({ item: ''})
        this.props.addItem(event, this.state.item)
    }
    render() {
        return(
            <div className="bucket-form">
                
                <form onSubmit={this.hendleSubmit}>
                    <input
                        type='text'
                        name='item'
                        value={this.state.item}
                        onChange={this.handleChanges}
                    />
                    <button>Add Aventure</button>
                </form>
            </div>
        );
    }
}



export default BucketForm;
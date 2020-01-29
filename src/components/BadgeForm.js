import React from 'react';

class BadgeForm extends React.Component {

    handleChange = e => {
        console.log({ 
            name: e.target.name,
            value: e.target.value
        });
    };

    handleClick = e => {
        console.log("Button was Clic...");
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Form was Submit...");
    };

    render(){
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                        <label>Nombres</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="fisrtName"/>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}
export default BadgeForm;
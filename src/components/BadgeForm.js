import React from 'react';

class BadgeForm extends React.Component {

    state = {
        jobTitle:'Developers',
    };

    handleChange = e => {
        /*
        console.log({ 
            name: e.target.name,
            value: e.target.value
        });
        */

        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleClick = e => {
        console.log("Button was Clic...");
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Form was Submit...");
        console.log(this.state);
    };

    render(){
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Nombres</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="fisrtName" value={this.state.firstName}/>
                </div>

                <div className="form-group">
                    <label>Apellidos</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="lastName" value={this.state.lastName}/>
                </div>

                <div className="form-group">
                    <label>Ocupación</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle}/>
                </div>
                
                <div className="form-group">
                    <label>Twitter</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="twitter" value={this.state.twitter}/>
                </div>
                
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={this.handleChange} className="form-control" type="email" name="email" value={this.state.email}/>
                </div>

                <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>




            </div>
        );
    }
}
export default BadgeForm;
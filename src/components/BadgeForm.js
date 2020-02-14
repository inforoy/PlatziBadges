import React from 'react';

class BadgeForm extends React.Component {
    handleClick = e => {
        console.log("Button was Clic...");
    };

/*    handleSubmit = e => {
        e.preventDefault();
        console.log("Form was Submit...");
        console.log(this.state);
    };*/

    render(){
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label>Nombres</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
                </div>

                <div className="form-group">
                    <label>Apellidos</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>
                </div>

                <div className="form-group">
                    <label>Ocupación</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
                </div>
                
                <div className="form-group">
                    <label>Twitter</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>
                </div>
                
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>
                </div>

                <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    {this.props.error && (<p className="text-danger">{this.props.error.message}</p>) }
                </form>

            </div>
        );
    }
}
export default BadgeForm;
import React from 'react'

class BadgeForm extends React.Component {
    /*
    state = {
        jobTitle: 'Developer'
    };
     */

    handleClick = e => {
        console.log("El boton ha sido Clicado");
    };

    /*
    handleChange = e => {
        //console.log({name: e.target.name });
        //console.log({value: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    */

    handleSumit = e => {
        e.preventDefault();
        console.log("El formulario fue enviado...");
        console.log(this.state)
    };

    render() {
        return(
            <div>
                <h1>Nueva Atencion</h1>
                <form action="" onSubmit={this.handleSumit} >
                    <div className="form-group">
                        <label>Primer Nombre</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName} />
                    </div>
                    <div className="form-group">
                        <label>Apellidos</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName} />
                    </div>
                    <div className="form-group">
                        <label>Correo Electrónico</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email} />
                    </div>
                    <div className="form-group">
                        <label>Ocupación</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle} />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter} />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;
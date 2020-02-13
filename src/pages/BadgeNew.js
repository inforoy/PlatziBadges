import React from 'react';

import '../pages/style/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from "../api";

class BadgeNew extends React.Component {

    state = {
        form: {
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            twitter:'',
            //avatarUrl:''
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = e => {
        //e.preventDefault();
        console.log("Form was Submit...");
        console.log(this.state);
        e.preventSubmit();
        this.setState({loading: true, error: null});
        try {
            await api.badges.create(this.state.form)
            this.setState({loading: false});
        } catch (error) {
            this.setState({loading: false, error: error});
        }

    };

    render(){
        return (<React.Fragment>

            <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt="Logo"/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge 
                            firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName || 'LAST_NAME'}
                            twitter={this.state.form.twitter || 'twitter'}
                            jobTitle={this.state.form.jobTitle || 'JOB_TITTLE'}
                            email={this.state.form.email || 'email'}
                            avatarUrl="https://s.gravatar.com/avatar/66b43d0aeb9b49da10ba5c25815cb6bc?s=80"/>
                    </div>

                    <div className="col-6">
                        <BadgeForm
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}/>
                    </div>

                </div>
            </div>

        </React.Fragment>)
    }
}
export default BadgeNew;
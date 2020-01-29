import React from 'react';

import '../pages/style/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    render(){
        return (<div>
            <Navbar />
            <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt="Logo"/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge 
                            firstName="Caritus" 
                            lastName="Cordeirus" 
                            twitter="caritus" 
                            jobTitle="Doctor"
                            avatarUrl="https://s.gravatar.com/avatar/66b43d0aeb9b49da10ba5c25815cb6bc?s=80"/>

                    </div>

                    <div className="col-6">
                        <BadgeForm />

                    </div>

                </div>
            </div>

        </div>)
    }
}
export default BadgeNew;
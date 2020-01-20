import React from 'react';
import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'


class Badge extends React.Component {
    render() {

        //const firstName = "Roy";
        //const lastName = 'Calle';

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de ..."/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.urlAvatar} alt="Avatar"/>
                    <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.email}</h3>
                    <h2>{this.props.jobTitle}</h2>
                    <p>@{this.props.twitter}</p>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>

            </div>
        );
    }
}

export default Badge;
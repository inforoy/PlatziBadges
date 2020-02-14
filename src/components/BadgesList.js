import React from 'react'

import '../components/styles/BadgesList.css'
import tw_logo from '../images/twitter_icon.png'
import {Link} from "react-router-dom";

class BadgesList extends React.Component {

    render() {
        if (this.props.badges.length === 0){
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new" >
                        Create new badge
                    </Link>
                </div>
            );
        }

        return (
        <ul className="list-unstyled BadgesList">
            {
                this.props.badges.map((badge) => {
                    return (
                    <li key={badge.id} className="BadgesListItem">

                        <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`} >

                        <img src={badge.avatarUrl} className="BadgesListItem__avatar"/>
                        <div className="container">
                            <div className="row">
                                <div className="">
                                    {badge.firstName} {badge.lastName}
                                    <br/>
                                    {badge.jobTitle}
                                    <br/>
                                    <img src={tw_logo} className="tw__logo"/>
                                    <span className="twitter__blue_font">{badge.twitter}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </li>
                    )
                })
            }
        </ul>
        )
    }
}

export default BadgesList;

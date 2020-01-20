import React from 'react'

import '../components/styles/BadgeList.css'
import imgTwitter from '../images/twitter_3.png'

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {
                    this.props.badges.map((badge)=>{
                        return (
                            <li className="BadgesListItem mb-2" key={badge.id}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt={`${badge.firstName} ${badge.lastName}`}/>
                                        </div>
                                        <div className="col-9">
                                            <p className="mb-0 font-weight-bold">{badge.firstName} {badge.lastName}</p>
                                            <p className="mb-0 text-primary"> <img src={imgTwitter} alt={badge.firstName}/>@{badge.twitter}</p>
                                            <small className="mb-0">{badge.jobTitle}</small>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        )
                    })}
            </ul>
        );
    }
}

export default BadgesList;
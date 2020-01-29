import React from 'react'

import '../components/styles/BadgesList.css'
import tw_logo from '../images/twitter_icon.png'

class BadgesList extends React.Component {

    render() {

        return (
        <ul className="list-unstyled BadgesList">
            {
                this.props.badges.map((badge) => {

                    return (
                    <li key={badge.id} className="BadgesListItem">

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
                    </li>
                    )

                })
            }
        </ul>

        )
    }
}

export default BadgesList;

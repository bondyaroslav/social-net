import React from "react"
import axios from "axios";
import Profile from "./Profile"
import {connect} from "react-redux";
import {setUserProfile} from "../../store/reducers/profileReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        const url = `https://social-network.samuraijs.com/api/1.0/profile/2`
        axios.get(url)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {
    setUserProfile
} ) (ProfileContainer)
import React, {useRef,useState} from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
      user: state.Login.user
    }
}

const Account = (props) => <div>{props.user.user} {props.user.password}</div>
export default connect(mapStateToProps, null)(Account)
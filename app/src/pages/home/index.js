import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = props => {
  return (
    <div>
      <h1>{props.home.appName}</h1>
      <ul>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    home: state.appData
  }
}

const connector = connect(mapStateToProps)

export default connector(Home)

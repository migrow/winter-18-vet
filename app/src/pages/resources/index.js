import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'

const Resources = props => {
  // props.resources

  return (
    <div>
      <h1>Resources</h1>
      <div>
        <ol>{map(r => <li>{r.name}</li>, props.resources)}</ol>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    resources: state.resources
  }
}

const connector = connect(mapStateToProps)

export default connector(Resources)

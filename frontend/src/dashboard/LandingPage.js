import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <Fragment>
        <h1>LANDING PAGE</h1>
        <br/>
        <Link to="/register">REGISTER PAGE</Link>
        <br/><br/>
        <Link to="/login">LOGIN PAGE</Link>
    </Fragment>
  )
}

export default LandingPage
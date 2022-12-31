import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import IndexArticles from './routes/IndexArticles.js'
import ViewArticle from './routes/ViewArticle.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      msgAlerts: []
    }
  }
  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts } = this.state

    return (
      <Fragment>
        <Header/>
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <IndexArticles msgAlert={this.msgAlert} />
          )} />
          <Route exact path='/article/:id' render={() => (
            <ViewArticle msgAlert={this.msgAlert} />
          )} />
        </main>
      </Fragment>
    )
  }
}

// AUTH
// import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
// import SignUp from './components/SignUp/SignUp'
// import SignIn from './components/SignIn/SignIn'
// import SignOut from './components/SignOut/SignOut'
// import ChangePassword from './components/ChangePassword/ChangePassword'
// <Route path='/sign-up' render={() => (
//   <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
// )} />
// <Route path='/sign-in' render={() => (
//   <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
// )} />
// <AuthenticatedRoute user={user} path='/sign-out' render={() => (
//   <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
// )} />
// <AuthenticatedRoute user={user} path='/change-password' render={() => (
//   <ChangePassword msgAlert={this.msgAlert} user={user} />
// )} />
export default App

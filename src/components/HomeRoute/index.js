import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Header from '../Header'

class Home extends Component {
  render() {
    // Accessing the state passed from the Register route
    const {location} = this.props
    const {userInput, optionInput} = location.state || {}
    const isRegistered = userInput && optionInput

    return (
      <div>
        <Header />
        <div>
          {isRegistered ? (
            <div>
              <h1>Hello {userInput}</h1>
              <p>Welcome to {optionInput}</p>{' '}
              {/* Display the topic displayText */}
            </div>
          ) : (
            <div>
              <h1>Welcome to Meetup</h1>
              <p>Please register for the topic</p>
              <Link to="/register">
                <button type="button">Register</button>
              </Link>
            </div>
          )}
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      </div>
    )
  }
}

export default withRouter(Home)

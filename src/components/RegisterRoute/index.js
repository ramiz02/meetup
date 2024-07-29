import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../Header'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Beauty',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    userName: '',
    optionInput: topicsList[0].id,
    error: '',
  }

  onInput = event => this.setState({userName: event.target.value})

  onSelect = event => this.setState({optionInput: event.target.value})

  onFormSubmit = event => {
    event.preventDefault()
    const {userName, optionInput} = this.state
    const {history} = this.props

    if (userName.trim() === '') {
      this.setState({error: 'Please enter your name'})
    } else {
      // Find the displayText of the selected optionInput
      const selectedTopic = topicsList.find(topic => topic.id === optionInput)

      // Use history.replace to pass data to the Home route
      history.replace({
        pathname: '/',
        state: {
          userInput: userName,
          optionInput: selectedTopic.displayText, // Pass displayText instead of id
        },
      })
    }
  }

  render() {
    const {userName, optionInput, error} = this.state

    return (
      <div>
        <Header />
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
        </div>
        <div>
          <h1>Let us join</h1>
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              id="name"
              value={userName}
              onChange={this.onInput}
            />

            <label htmlFor="option">TOPICS</label>
            <select id="option" value={optionInput} onChange={this.onSelect}>
              {topicsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.displayText}
                </option>
              ))}
            </select>

            <button type="submit">Register Now</button>

            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Register)

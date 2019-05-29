import React, { Component } from 'react'

class NewsFeed extends Component {
  state = {
    mission: '',
    details: '',
    eta: '',
    launch_name: '',
    slide: 0
  }
  get_news_api = () => {
    console.log('fetching api 2')

    fetch('https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(this.state.slide)
        this.setState({
          mission: data[this.state.slide].mission_name,
          details: data[this.state.slide].details,
          eta: data[this.state.slide].launch_date_local,
          launch_name: data[this.state.slide].launch_site.site_name_long
        })
      })
  }
  increaseSlide = () => {
    this.state.slide += 1
    console.log('buttonclicked')
    this.get_news_api()
  }

  componentDidMount() {
    this.get_news_api()
  }
  render() {
    return (
      <>
        <h2 className="banner">Upcoming Space Launches</h2>
        <div className="news-container">
          <div className="left-button-container">
            <button className="left-button">
              <i className="fas fa-angle-left" />
            </button>
          </div>
          <section className="news-feed">
            <h2>
              <i className="fas fa-space-shuttle" />
              &nbsp;<span>{this.state.mission}</span>
            </h2>
            <p>
              <i className="fas fa-info-circle" />
              <span id="details" />
            </p>
            {this.state.details}
            <p>
              <i className="fas fa-clock" />
              <span id="eta" />
            </p>

            <p>
              <i className="fas fa-map-marked" />
              <span id="launch_name" />
              {this.setState.launch_name}
            </p>
          </section>
          <div className="right-button-container">
            <button onClick={this.increaseSlide} className="right-button">
              <i className="fas fa-angle-right" />
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default NewsFeed

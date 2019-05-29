import React, { Component } from 'react'

class NewsFeed extends Component {
  state = {
    mission: '',
    details: '',
    eta: '',
    launch_name: ''
  }
  get_news_api = () => {
    console.log('fetching api 2')

    fetch('https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(this.slide)
        this.setState({
          mission: data[this.slide].mission_name,
          details: data[this.slide].details,
          eta: data[this.slide].launch_date_local,
          launch_name: data[this.slide].launch_site.site_name_long
        })
      })
  }
  componentDidMount() {
    this.get_news_api()
  }
  render() {
    const increaseSlide = () => (this.slide += 1)
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
              &nbsp;<span>&nbsp;</span>
            </h2>
            <p>
              <i className="fas fa-info-circle" />
              <span id="details" />
            </p>

            <p>
              <i className="fas fa-clock" />
              <span id="eta" />
            </p>

            <p>
              <i className="fas fa-map-marked" />
              <span id="launch_name" />
              &nbsp;
            </p>
          </section>
          <div className="right-button-container">
            <button onClick={() => this.increaseSlide} className="right-button">
              <i className="fas fa-angle-right" />
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default NewsFeed

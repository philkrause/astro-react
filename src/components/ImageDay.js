import React, { Component } from 'react'

class ImageDay extends Component {
  state = {
    imageURL: ''
  }
  get_pic_api = () => {
    console.log('fetching api')

    fetch('https://sdg-astro-api.herokuapp.com/api/Nasa/apod')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log({ data })
        this.setState({
          imageURL: data.url
        })
      })
  }
  componentDidMount() {
    this.get_pic_api()
  }

  render() {
    const imageofday = {
      width: '100%',
      height: '20rem',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${this.state.imageURL}`
    }
    console.log('finding image')
    return (
      <div style={imageofday}>
        <span className="explore">Explore your universe.</span>
      </div>
    )
  }
}

export default ImageDay

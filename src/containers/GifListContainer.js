import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


class GifListContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      gifs: []
    }
  }

  fetchGifs = (search) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(data => {
      let three = [data.data[0], data.data[1], data.data[2]]
      this.setState({
        gifs: three
      })
    })
    console.log(search)
  }

  render(){
    return(
      <div>
        <GifSearch handleSearch={this.handleSubmit} fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }


}

export default GifListContainer

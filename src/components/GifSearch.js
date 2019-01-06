import React from 'react'

class GifSearch extends React.Component {
  constructor(){
    super()
    this.state = {
      value: ""
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.value)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange}/>
        <input type='submit'/>
      </form>
    )
  }
}

export default GifSearch

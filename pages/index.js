import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';
import Photo from '../components/Photo';

export default class extends Component {
  static async getInitialProps() {
    const res = await fetch('http://localhost:4000/photos')
    const images = await res.json()
    return { images }
  }
  componentWillMount() {
    this.setState({
      images: this.props.images
    })
  }
  LikesEntry(id) {
    const images = this.state.images 
    let image = images.find(image => image.id === id) 
    image.likes = parseInt(image.likes) + 1
    // add changes to state
    this.setState({
      images
    })
    fetch(`http://localhost:4000/photos/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON. stringify(image)
    })
  }
  render() {
    return (
      <Layout>
         {
          this.state.images.map((image, key) => 
            <Photo 
            LikesEntry={this.LikesEntry.bind(this)}
            id={image.id} 
            key={key} 
            data={image} />)
         }
      </Layout>
    )
  }
}

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
    state = { album: []}
    componentDidMount = () => {
      axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(res => {
          console.log(res.data)
          console.log('masuk')
          this.setState({ album: res.data})
      });
    }
 
    renderAlbum = () => {
        var listAlbum = this.state.album.map((item) => {
            return (
                <AlbumDetail key={item.title} album={item}/> 
            )
        });
        return listAlbum;
    }

    render(){
        return (
            <ScrollView>
                {/* <Text>Ini Component AlbumList</Text> */}
                {this.renderAlbum()}
            </ScrollView>
        );
    }
    
}

export default AlbumList;
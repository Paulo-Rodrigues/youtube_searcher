import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './app.css';

const API_KEY = 'AIzaSyDAF-0Air9K_GVub-jETCeyeF363myC9WI';



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('metallica');   
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){

        const videoSearch = _.debounce((term) => {this.videoSearch(term)},400);

        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })} 
                videos={ this.state.videos } />
            </div>
        );
    }
}

export default App;


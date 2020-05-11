import React from 'react';
import './css/NavBar.css';
import './css/Button.css';

import { Grid } from '@material-ui/core';
import VideoLayout from './components/VideoLayout';

import Header from './components/Header/Header';

import youtube from './api/youtube';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSubmit('vegan food');
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    } 

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyCZC7vsKYoM9heoFybSwHXGAMDYWiAXEOQ',
                q: searchTerm
            }
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    render() {
        const { selectedVideo, videos } = this.state;
        return(
            <div className="top-container">
                <Header onFormSubmit={this.handleSubmit}/>
                {/* <img src="https://media.publit.io/file/tomato-avocado-crop.jpg" alt="Simply Easy Learning" height="50%" width="100%" /> */}
                {/* <div className="transbox">
                    <p>Korean</p>
                </div> */}
                <div className="CuisineButtons">
                    <a href="something" class="button41" style={{backgroundColor:'#f14e4e'}}>Korean</a>
                    <a href="something" class="button41" style={{backgroundColor:'#f1bb4e'}}>Italian</a>
                    <a href="something" class="button41" style={{backgroundColor:'#84f14e'}}>Mexican</a>
                    <a href="something" class="button41" style={{backgroundColor:'#4ef18f'}}>Chinese</a>
                    <a href="something" class="button41" style={{backgroundColor:'#4e9af1'}}>Western</a>
                    <a href="something" class="button41" style={{backgroundColor:'#9a4ef1'}}>Thai</a>
                    <a href="something" class="button41" style={{backgroundColor:'#f14ebd'}}>Vietnamese</a>
                </div>
                <VideoLayout />

                {/* <Grid container style={{padding:'20px', marginTop:'45%'}}>
                    <Grid item xs={11}>
                        <Grid container spacing={10}>
                            <Grid item xs={8} >
                                <VideoDetail video={selectedVideo}/>
                            </Grid>
                            <Grid item xs={4}>
                                <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> */}
            </div>

            )
    }
}

export default App;
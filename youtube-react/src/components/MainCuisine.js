import React from 'react';
import React from 'react';

import { Grid } from '@material-ui/core';
import { SearchBar, VideoList, VideoDetail } from './components';
import Header from 'Header/Header';

import youtube from '../api/youtube';


function MainCuisine() {
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
            <React.Fragment>
                <Header onFormSubmit={this.handleSubmit}/>
                <Grid container style={{padding:'20px'}}>
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
                </Grid>
            </React.Fragment>

            )
    }
}

export default MainCuisine;
import React, { Component } from 'react';

import { Paper, TextField } from '@material-ui/core';

import styled from 'styled-components';


class SearchBar extends Component {
    state={
        searchTerm: '',
    }

    handleChange = (event) => { this.setState({ searchTerm: event.target.value }) };

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }

    render() {
        return (
            <Paper elevation={6} style={{padding:'2rem', width:'200rem', background:'#d4d4cf'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}></TextField>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;

// const x = styled.div`

// `;
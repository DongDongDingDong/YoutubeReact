import React, { Component } from 'react';
import '../../css/NavBar.css';
import SearchBar from '../SearchBar';
import styled from 'styled-components';


class Header extends Component {

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }


    render() {
        return (
            <HeaderComponent>
                <nav>
                    <div class="logo">
                        <h4>Vegan Logo</h4>
                    </div>
                    <ul class="nav-links">
                        <li>
                            <a href="#">Home    |</a>
                        </li>
                        <li>
                            <a href="#">About   |</a>
                        </li>
                        <li>
                            <a href="#">Work    |</a>
                        </li>
                        <li>
                            <a href="#">Contact |</a>
                        </li>
                    </ul>
                    <ul class="searchBar">
                        <li>
                        <SearchBar onFormSubmit={this.handleSubmit}/>
                        </li>
                    </ul>
                    <div class="burger">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                </nav>
            </HeaderComponent>
        )
    }
}

export default Header;

const HeaderComponent = styled.div`
width:100%;
//Header Div
nav {
    /* width:100%; */
}

`;

//-------------------------
//------------HEADER comp
//-------------------------


import React, { Component } from 'react';


class Header extends Component {
	constructor(props){
        super(props);
        this.state = { expand: false };
        this.expandSearch = this.expandSearch.bind(this);
        // this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    expandSearch() {
        // if (!this.state.expand) {
        //     // attach/remove event handler
        //     document.addEventListener('click', this.handleOutsideClick, false);
        // } else {
        //     document.removeEventListener('click', this.handleOutsideClick, false);
        // }
        this.setState(prevState => ({
           expand: !prevState.expand,
        })); //Flips true/false
    }
	render() {
		return (
			<header id="header">
				<h1><a href="/">Zemun</a></h1>
				<nav className="links">
					<ul>
						<li><a href="/">Istorija</a></li>
						<li><a href="/">Znamenitosti</a></li>
						<li><a href="/">Poznati Zemunci</a></li>
						<li><a href="/">Price</a></li>
						<li><a href="/">Blog</a></li>
					</ul>
				</nav>
				<nav className="main">
					<ul>
						<li className="search">
							<a className="fa-search" onClick={this.expandSearch}>Search</a>
							<form id="search" method="get" action="#" className={(this.state.expand ? "visible " : "")}>
								<input type="text" name="query" placeholder="Search" />
							</form>
						</li>
						<li className="menu" >
							<a className="fa-bars" onClick={this.props.toggleMenu}>Menu</a>
						</li>
					</ul>
				</nav>
			</header>

		);
	}
}

export default Header;
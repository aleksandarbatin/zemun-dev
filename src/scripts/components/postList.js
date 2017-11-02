//-------------------------
//------------ POST LIST comp
//-------------------------


import React, { Component } from 'react';


class Postlist extends Component {
	 constructor(props) {
        super(props);

        this.state = { active: '' };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var toggle = this.state.active === 'is-active' ? '' : 'is-active';
        this.setState({active: toggle});
    }

	render() {
		return (
			<article>
				<header>
					<h3><a href="/">{this.props.title}</a></h3>
					<time className="published" dateTime="2015-10-20">{this.props.date}</time>
				</header>
				<a href="/" className="image"><img src={this.props.img} alt="" /></a>
				 <button className={`hamburger hamburger--emphatic fadein one ${this.state.active}`} onClick={this.handleClick} type="button">
	                <span className="homeMenuTextButton">Menu</span>
	                <span className="hamburger-box">
	                    <span className="hamburger-inner"></span>
	                </span>
	            </button>
			</article>

		);
	}
}

export default Postlist;

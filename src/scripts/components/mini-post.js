//-------------------------
//------------ MINI POST comp
//-------------------------


import React, { Component } from 'react';


class Minipost extends Component {
	render() {
		return (
			<article className="mini-post">
				<header>
					<h3>{5 == 2 ? "Fuck" : "Hello!"}<a href="#">{this.props.title}</a></h3>
					<time className="published" dateTime="2015-10-20">{this.props.date}</time>
					<a href="/" className="author"><img src={this.props.authorImg} alt="" /></a>
				</header>
				<a href="/" className="image"><img src={this.props.postImg} alt="" /></a>
			</article>

		);
	}
}

export default Minipost;

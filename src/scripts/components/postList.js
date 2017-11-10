//-------------------------
//------------ POST LIST comp
//-------------------------


import React, { Component } from 'react';


class Postlist extends Component {

	render() {
		return (
			<article>
				<header>
					<h3><a href="/">{this.props.title}</a></h3>
					<time className="published" dateTime="2015-10-20">{this.props.date}</time>
				</header>
				<a href="/" className="image"><img src={this.props.img} alt="" /></a>
			</article>

		);
	}
}

export default Postlist;

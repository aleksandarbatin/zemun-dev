//-------------------------
//------------POST comp
//-------------------------


import React, { Component } from 'react';


class Post extends Component {
	constructor(props) {
		super();
		this.state = {
			like: props.initialLike,
			status: 0
		};
	}
	heartLike() {
		this.setState({
			like: this.state.like + 1
		});
	}
	render() {
		return (
			<article className="post">
				<header>
					<div className="title">
						<h2><a href="/">{this.props.title}</a></h2>
						<p>{this.props.subtitle}</p>
					</div>
					<div className="meta">
						<time className="published" dateTime="2015-11-01">{this.props.date}</time>
						<a href="/" className="author"><span className="name">{this.props.author}</span><img src={this.props.authorImg} alt="" /></a>
					</div>
				</header>
				<a href="/" className="image featured"><img src={this.props.postImg} alt="" /></a>
				<p>{this.props.postText}</p>
				<footer>
					<ul className="actions">
						<li><a href="/" className="button big">Continue Reading</a></li>
					</ul>
					<ul className="stats">
						<li><a href="/">General</a></li>
						<li><span className="icon fa-heart" onClick={this.heartLike.bind(this)}>{this.state.like}</span></li>
						<li><a href="/" className="icon fa-comment">128</a></li>
					</ul>
				</footer>
			</article>
		);
	}
}

export default Post;
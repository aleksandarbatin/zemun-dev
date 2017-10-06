//-------------------------
//----------MAIN VIEW comp
//-------------------------


import React, { Component } from 'react';

class Bigview extends Component {
	render() {
		return (
			<section className="bigView">
				<article className="teaser teasr--full">
					<div className="imgWrapper">
						<img src="./images/city-zemun.jpg" alt="main-view"/>
					</div>
					<div className="content">
						<h2>Ipsum consequat lorem</h2>
						<p>Lorem feugiat veroeros dolor sit amet tempus adipiscing amet sed aliquam feugiat veroeros lorem ipsum dolor sit amet consequat tempus adipiscing.</p>
						<ul className="actions">
							<li><a href="/" className="button big">Continue Reading</a></li>
						</ul>
					</div>
				</article>
			</section>
		);
	}
}

export default Bigview;

//-------------------------
//----------MAIN VIEW comp
//-------------------------


import React, { Component } from 'react';

class Mainview extends Component {
	render() {
		return (
			<section className="mainView">
				<article className="teaser teasr--full">
				
					<img src="https://static.pexels.com/photos/161893/seattle-washington-city-cities-161893.jpeg" alt="main-view"/>
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

export default Mainview;

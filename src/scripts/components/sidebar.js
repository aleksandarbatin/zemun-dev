//-------------------------
//------------ SIDEBAR comp
//-------------------------


import React, { Component } from 'react';

import Minipost from './mini-post';
import Postlist from './postList';

class Sidebar extends Component {
	render() {
		return (
				<section id="sidebar">
					{/* Intro */}
						<section id="intro">
							<a href="#" className="logo"><img src="./images/logo.jpg" alt="" /></a>
							<header>
								<h2>Future Imperfect</h2>
								<p>Another fine responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
							</header>
						</section>

					{/* Mini Post */}
						<section>
							<div className="mini-posts">

								{/*  Mini Post */}
									<Minipost 
										title="Vitae sed condimentum"
										date="October 20, 2015"
										authorImg="./images/avatar.jpg"
										postImg="./images/pic04.jpg"
										/>

								{/*  Mini Post */}
									<Minipost 
										title="Vitae sed condimentum"
										date="October 20, 2015"
										authorImg="./images/avatar.jpg"
										postImg="./images/pic05.jpg"
										/>

								{/*  Mini Post */}
									<Minipost 
										title="Vitae sed condimentum"
										date="October 20, 2015"
										authorImg="./images/avatar.jpg"
										postImg="./images/pic06.jpg"
										/>

								{/*  Mini Post */}
									<Minipost 
										title="Lorem ipsum dolor sit"
										date="October 20, 2015"
										authorImg="./images/avatar.jpg"
										postImg="./images/pic07.jpg"
										/>

							</div>
						</section>

					{/* Post List */}
						<section>
							<ul className="posts">
								<li>
									<Postlist 
										title="Lorem ipsum fermentum ut nisl vitae"
										date="October 20, 2015"
										img="images/pic08.jpg"
									/>
								</li>
								<li>
									<Postlist 
										title="Lorem ipsum fermentum ut nisl vitae"
										date="October 20, 2015"
										img="images/pic09.jpg"
									/>
								</li>
								<li>
									<Postlist 
										title="Lorem ipsum fermentum ut nisl vitae"
										date="October 20, 2015"
										img="images/pic10.jpg"
									/>
								</li>
								<li>
									<Postlist 
										title="Lorem ipsum fermentum ut nisl vitae"
										date="October 20, 2015"
										img="images/pic11.jpg"
									/>
								</li>
								<li>
									<Postlist 
										title="Lorem ipsum fermentum ut nisl vitae"
										date="October 20, 2015"
										img="images/pic12.jpg"
									/>
								</li>
							</ul>
						</section>

					{/* About */}
						<section className="blurb">
							<h2>About</h2>
							<p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
							<ul className="actions">
								<li><a href="#" className="button">Learn More</a></li>
							</ul>
						</section>

					{/* Footer */}
						<section id="footer">
							<ul className="icons">
								<li><a href="#" className="fa-twitter"><span className="label">Twitter</span></a></li>
								<li><a href="#" className="fa-facebook"><span className="label">Facebook</span></a></li>
								<li><a href="#" className="fa-instagram"><span className="label">Instagram</span></a></li>
								<li><a href="#" className="fa-rss"><span className="label">RSS</span></a></li>
								<li><a href="#" className="fa-envelope"><span className="label">Email</span></a></li>
							</ul>
							<p className="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>. Images: <a href="http://unsplash.com">Unsplash</a>.</p>
						</section>
				</section>
		);
	}
}

export default Sidebar;
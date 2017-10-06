//-------------------------
//------------MAIN comp
//-------------------------


import React, { Component } from 'react';
import Sidebar from './sidebar';
import Pagination from './pagination';
import Post from './post';


class Maincontainer extends Component {
	render() {
		return (
			<div id="wrapper">
			    <div id="main">
				    {/* Post */}
				   	<Post title="Magna sed adipiscing" 
				   		  subtitle="Lorem ipsum dolor amet nullam consequat etiam feugiat" 
				   		  date="November 1, 2015"
				   		  author="Jane Doe"
				   		  authorImg="images/avatar.jpg"
				   		  postImg="images/pic01.jpg" 
				   		  postText="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. 
				   		  Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. 
				   		  Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. 
				   		  Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." 
				   		  />
		   		  	{/* Post */}
					<Post title="Lorem ipsum dolor sit amet" 
				   		  subtitle="Lorem ipsum dolor amet nullam consequat etiam feugiat" 
				   		  date="November 1, 2015"
				   		  author="Susan Sontag"
				   		  authorImg="images/avatar.jpg"
				   		  postImg="images/pic02.jpg" 
				   		  postText="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. 
				   		  Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. 
				   		  Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. 
				   		  Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." 
				   		  />
		   		  	{/* Post */}
			   		<Post title="Praesent tincidunt sed tellus ut" 
				   		  subtitle="Lorem ipsum dolor amet nullam consequat etiam feugiat" 
				   		  date="November 1, 2015"
				   		  author="Jane Doe"
				   		  authorImg="images/avatar.jpg"
				   		  postImg="images/pic03.jpg" 
				   		  postText="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. 
				   		  Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. 
				   		  Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. 
				   		  Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." 
				   		  />
					{/* Pagination */}
					<Pagination />
				</div>
				{/* Sidebar */}
				<Sidebar />
			</div>
		);
	}
}

export default Maincontainer;

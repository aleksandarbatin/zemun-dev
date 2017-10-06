//-------------------------
//----------PAGINATION comp
//-------------------------


import React, { Component } from 'react';

class Pagination extends Component {
	render() {
		return (
			<ul className="actions pagination">
				<li><a href="/" className="disabled button big previous">Previous Page</a></li>
				<li><a href="/" className="button big next">Next Page</a></li>
			</ul>
		);
	}
}

export default Pagination;

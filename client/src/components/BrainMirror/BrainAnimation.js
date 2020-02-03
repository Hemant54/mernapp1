import React, { Component } from 'react';
import './brainmirror.css';

class BrainAnimation extends Component {
	componentDidMount() {
		window.onload = function () {
		  var Line1 = document.getElementById("line1");
		  var Line2 = document.getElementById("line2");
		  //Add paths together
		  Line1.setAttribute('d', Line1.getAttribute('d') + '' + Line2.getAttribute('d'));
		  //Remove unnecessary second path
		  Line2.parentNode.removeChild(Line2);
		}
	}
	render() {
		return (
		<svg style={{marginRight: "-40px"}} width="250px" height="250px" viewBox="0 0 250 250" id="svg">
	        <g id="outer_icon"></g>
	        <g id="svg_icon">
	        <path id="line1" className="brain" fill="#fff" stroke="#204A5A" strokeWidth="2" d="M192.2,93.9l-0.4-0.7l0.3-0.7c1.8-3.7,4-9.8,4-17.8c0-4.1-0.6-8.3-1.8-12.5c-5.5-20-22.4-26.6-31.9-28.7l-1-0.2l-0.1-1
	            c-0.8-6.4-4.8-21.7-24.4-27.3c-3.9-1.1-8-1.7-12.1-1.7c-8,0-15.3,2.2-20.6,6.1c-0.6,0.4-1.1,0.9-1.6,1.4l-1.1,1l-1-1.1
	            c-0.9-1-1.6-1.7-2.4-2.4c-6.4-5.4-15.6-7.5-25.6-5.8C58.8,4.7,52.2,14.8,49.5,20.6l-0.3,0.7l-0.7,0.2c-5.5,1.3-15.8,5.2-23.2,17.6
	            C21.1,46,19,53.2,19,60.5c0,1.6,0.1,3.2,0.3,4.8l0.1,1l-0.9,0.5C12.9,70.1,2.9,78.4,0.6,97.5c-0.2,1.8-0.3,3.6-0.3,5.3
	            c0,10.5,4.1,17.2,7.6,21l0.5,0.6l-0.2,0.8c-0.4,2-1,5.2-1,9c0,7.3,2,18,11.5,27.6c11,10.9,19.8,13.2,25.2,13.2l1.3,0l0.4,0.8
	            c3.1,6.2,10.9,17,28.7,19.6c2.2,0.3,4.3,0.5,6.3,0.5c9,0,14.5-3.2,17.6-5.9c1-0.8,1.9-1.8,2.8-3l1-1.3l1.2,1.2
	            c0.7,0.7,1.4,1.4,2.3,2c5.1,4,11.8,6.2,19.2,6.2h0c3.2,0,6.6-0.4,9.9-1.2c15-3.6,19.7-14.4,21-18.9l0.3-1l1-0.1
	            c14.5-0.8,22.4-11.3,25-20.9l0.1-0.6l0.5-0.3c9.1-5.8,14.7-13.3,16.8-22.4c0.6-2.6,0.9-5.3,0.9-8.1
	            C200.3,109.8,195.3,99.2,192.2,93.9z M92.4,183.1c-2.8,2.4-6.8,3.7-11.7,3.7c-1.6,0-3.3-0.1-5-0.4c-19-2.8-23.1-17.1-23.2-17.7
	            l-0.1-0.3l0-0.1c-0.4-1.5-0.6-2.8-0.6-4c0-2.4,0.7-4.4,1.9-6c1.7-2.2,4.3-3.2,5.9-3.5l0.6-0.1l0.5,0.3c2.6,1.7,5.2,2.9,7.8,3.5
	            l1.2,0.3l0,1.2c-0.2,3.6,0.4,8.6,3.8,12.2c1.4,1.5,3.9,1.5,5.4,0.1c0.7-0.7,1.2-1.6,1.2-2.7c0-1-0.3-2-1-2.7
	            c-1.7-1.8-1.8-5.2-1.6-7.1l0.1-1.1l1-0.3c5-1.3,8.7-4.4,10.4-6.7c1.5-2,1.1-4.7-0.9-6.2c-1.9-1.4-4.8-1.1-6.3,0.8
	            c-0.9,1.2-3.5,3.9-7.9,3.9c-2.8,0-5.8-1.1-8.9-3.3c-3.1-2.2-9.4-1.2-14.1,2c-2.9,2-7.8,6.7-7.8,15.1l0,1.9l-1.8-0.4
	            c-4.9-1.1-10.2-4.6-15.9-10.2c-13.5-13.5-7.7-30.2-7.4-30.9c0.7-1.9,0-4.1-1.7-5.3c-0.3-0.2-8.2-6.1-6.5-20.6
	            c2.6-21,15.9-25.1,16.5-25.3c1.2-0.3,2.2-1.2,2.8-2.3c0.6-1.1,0.7-2.5,0.2-3.6c-0.2-0.4-3.8-10.6,4-23.6c3-5,6.8-8.7,11.4-11.2
	            l2.1-1.1l0.1,2.4c0.3,8.2,4.2,15.6,7.5,20.3l0.9,1.2l-1.2,0.8c-4.9,3.3-8.3,7.9-10,13.8c-0.1,0.4-0.2,0.9-0.2,1.3
	            c0,2,1.3,3.7,3.2,4.3c2.4,0.7,4.9-0.7,5.6-3c1.8-5.8,5.5-8.7,8.3-10.1l0.8-0.4l0.7,0.5c4.4,2.8,9.3,3.4,12.7,3.4
	            c1.7,0,2.9-0.2,3.2-0.2c2.4-0.4,4.1-2.6,3.8-5.1c-0.3-2.4-2.6-4.2-5.1-3.8C76.2,57,75.5,57,74.8,57c-2.3,0-6.4-0.4-9.1-2.9
	            l-0.2-0.2c-0.6-0.6-13.7-14.3-8.8-26.9c0.1-0.4,0.2-0.5,0.2-0.6c0.1-0.3,4.1-12.9,17.3-15.2c1.9-0.3,3.7-0.5,5.4-0.5
	            c6.5,0,10.6,2.3,12.9,4.3c3.1,2.6,4.5,6,4.5,7.9l0,16L95.5,39c-4.1,0.2-10.3-0.9-14.8-7.5c-1.4-2-4.3-2.5-6.2-1.2
	            c-1,0.7-1.7,1.7-1.9,2.9c-0.2,1.2,0,2.4,0.7,3.4C80,46.5,89.8,48,95,48l2,0l0,33.1l-2-0.7c-5.6-2.1-11.6-2.7-17.5-1.9
	            C63.3,80.4,56,89.7,52.4,97.2l-0.7,1.5l-1.4-0.8c-4-2.4-8.4-4-13.1-4.8l-1.2-0.2l0-1.2c0-2.4-0.6-4.8-1.5-6.7
	            c-1-2.1-3.7-3.1-5.9-2.1c-2.2,1-3.2,3.7-2.2,5.9c0.7,1.6,2.4,7-4.7,11.1c-2.1,1.2-2.9,4-1.6,6.1c1.2,2.1,4.1,2.9,6.1,1.6
	            c2.6-1.5,4.8-3.3,6.4-5.5l0.5-0.7l0.8,0.1c11,1.2,16.5,7.6,16.6,7.6c1.1,1.3,2.9,1.9,4.6,1.4c1.7-0.4,3-1.8,3.3-3.4
	            c0.2-0.7,3.9-17.6,20.5-19.9c1.3-0.2,2.5-0.3,3.8-0.3c6.1,0,10.9,2,13.8,3.7l0.7,0.4l0,34.3l-2.1,0c-7.9,0-13.5-2.9-16.8-5.4
	            l-0.9-0.7l0.4-1c1.2-3.1,1.8-6.6,1.6-9.5c-0.2-2.3-2.1-4.2-4.5-4.2c-2.7,0.1-4.6,2.3-4.5,4.7c0.3,5.4-2.7,12.4-11.9,14.2
	            c-1.6,0.3-3.1,0.5-4.5,0.5c-9.7,0-13.3-6.9-13.7-7.7c-1-2.2-3.8-3.2-6-2.2c-2.3,1-3.2,3.6-2.2,5.9c0.5,1.2,2.6,5.3,7.6,8.7l1.7,1.2
	            l-1.7,1.2c-4.1,3-5.1,5.7-5.4,7.1c-0.4,2.2,1,4.3,3.4,4.9c2.2,0.6,4.8-1,5.5-3.3l0.2,0.1c1.1-1.3,4.7-4.4,15.4-7.2l0.7-0.1
	            c0.2,0,0.5-0.1,0.7-0.1c4.3-0.8,8-2.5,11-5l0.9-0.7l0.9,0.7c4.4,3.2,11.8,7.1,21.9,7.1l2.2,0l0,38C97,174.1,96.7,179.4,92.4,183.1z
	             M190.7,127.7c-1.4,6-4.8,11-10.5,15.1l-0.4,0.2c-2.4,1.1-5.6,1.4-7.8,1.4c-2,0-3.5-0.2-3.9-0.3c-2.1-0.3-4,1.1-4.4,3.1
	            c-0.3,2.1,1.1,4,3.1,4.4c0.4,0.1,1.8,0.3,3.8,0.3l2.2,0.1l-0.9,2c-2,4.2-6,9.5-14.1,10.6l-1.5,0.2l-0.2-1.5
	            c-1.8-14.4-10.6-22.8-11-23.2c-1.7-1.6-4.7-1.5-6.3,0.2c-1.7,1.8-1.6,4.6,0.2,6.4c0.4,0.3,8.8,8.6,8.5,22.3
	            c-0.1,1.3-0.9,12.5-15,15.9c-2.7,0.6-5.3,1-7.8,1c-5.4,0-10.1-1.5-13.6-4.2c-3.2-2.5-5.1-6-5.1-9.2l0-22.6l1.9,0.5
	            c5.6,1.6,12.8,5.7,15.8,16c0.7,2.3,3.2,3.8,5.6,3.1c2.4-0.7,3.8-3.2,3.1-5.6c-5-17.3-19.2-21.8-25.1-22.9l-1.2-0.2l0-21.4l2.2,1.3
	            c4.9,2.8,10.6,4,16.4,3.5c5.3-0.5,9.4-2.3,12.6-5.6l1.3-1.3l1,1.5c2.8,4.1,7.5,9.2,14.2,10.7c2.3,0.5,4.5,0.7,6.6,0.7
	            c7.2,0,11.1-2.7,11.5-3.1c2-1.5,2.4-4.2,0.9-6.2c-1.4-1.9-4.3-2.4-6.3-1l0,0c-0.5,0.3-2.5,1.3-6.1,1.3c-1.5,0-3.1-0.2-4.8-0.5
	            c-6.2-1.3-10.4-9.9-11.2-11.6l-0.3-0.7l0.4-0.7c1.8-3,3.8-5.3,7.6-6.6c1.1-0.4,2-1.2,2.6-2.3c0.5-1.1,0.6-2.3,0.2-3.4
	            c-0.8-2.3-3.4-3.6-5.7-2.8c-8.4,2.9-11.8,9.2-14.2,13.8c-2.8,5.2-4.5,8.3-11,8.9c-5.1,0.5-10.3-1.2-13.8-4.3
	            c-1.8-1.6-3.9-4.4-3.9-8.2l0-42.7c0-4.5,2.5-9.2,6.4-11.8c3.3-2.2,7.1-2.7,10.8-1.2c6.6,2.6,9.3,7.5,9.4,7.7c1.1,2.1,3.9,3,6.1,1.9
	            c2.2-1.2,3-3.8,1.9-6c-0.1-0.2-2.1-4.1-6.8-7.7l-1.1-0.8l0.7-1.1c2.1-3.3,3.2-7.3,3.2-11.8c0-2.5-2-4.5-4.5-4.5
	            c-2.5,0-4.5,2-4.5,4.5c0,4.5-1.4,7-2.6,8.3l-0.6,0.6l-0.8-0.2c-5.2-1.2-10.6-0.3-15.3,2.5l-2.2,1.4l0-18.7c0-2.4,1.3-4.6,3.8-6.5
	            c5.5-4.1,15.8-5.5,24.7-3c18.6,5.3,18.2,21.4,18.1,23.3c-0.1,2.4,1.7,4.6,4.1,4.8c0.9,0.1,23.3,2.2,29.1,23
	            c4.3,15.6-2.5,25.7-2.8,26.1l0,0c-5.6,8.2-15.9,9.5-16.4,9.5c-2.5,0.3-4.3,2.5-4,4.9c0.3,2.4,2.4,4.2,4.9,4c0.4,0,9.2-1,16.9-7.1
	            l1.5-1.1l0.8,1.7C189.6,109,192.8,118.6,190.7,127.7z"/>
	        <path id="line2" className="brain2" fill="#fff" d="M171.1,80.7c2-0.6,3.2-2.7,2.6-4.7c-0.6-2-2.7-3.2-4.7-2.6c-2.8,0.8-5.7,0.3-8.2-1.5l-1.2-0.8l0.8-1.2
	            c1.9-2.8,3.2-6.1,3.3-8.8c0.1-2.4-1.7-4.5-4.1-4.7l-0.4,0c-2.3,0-4.2,1.8-4.5,4.1c-0.1,1-1.4,9.7-16.2,11.3
	            c-0.7,0.1-1.3,0.1-1.9,0.1c-7.7,0-10.1-5.7-10.6-6.9c-0.7-1.8-2.4-3-4.3-3c-0.5,0-1,0.1-1.5,0.2c-2.3,0.8-3.6,3.3-2.8,5.6
	            c0.8,2.5,2.9,6.1,6.5,8.8l1.2,0.9l-1,1.2c-3.9,4.6-5.2,10.5-5.1,14.5c0.1,2.4,2,4.3,4.5,4.3l0.1,0c2.5,0,4.4-2.1,4.4-4.6
	            c0-5.4,2.9-11.5,11.3-12.4c5.2-0.6,9.8-2,13.5-4.1l0.9-0.5l0.8,0.7c2.4,2.1,6.4,4.6,11.6,4.6C167.9,81.4,169.5,81.2,171.1,80.7z"/>
	        </g>           
		</svg>
	);
	}
}

export default BrainAnimation;
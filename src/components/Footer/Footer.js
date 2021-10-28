import React from 'react'
import './Footer.css'
const Footer = () => {
    return (

		<footer className="footer-distributed">

			<div className="footer-right">

				<a href="#"><i className="fa fa-facebook"></i></a>
				<a href="#"><i className="fa fa-twitter"></i></a>
				<a href="#"><i className="fa fa-linkedin"></i></a>
				<a href="#"><i className="fa fa-github"></i></a>

			</div>

			<div className="footer-left">

				<p className="footer-links">
					<a className="link-1" href="/">Home</a>

					
				</p>

				<p>Money Tips &copy; 2021</p>
			</div>

		</footer>
    )
}

export default Footer

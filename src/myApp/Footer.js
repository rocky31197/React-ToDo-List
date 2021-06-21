import React from 'react'

export default function Footer() {
    return (
    <footer className=" footer footer-basic bg-dark text-light">
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="copyright">Company Name © 2018</p>
        </footer>
    )
}


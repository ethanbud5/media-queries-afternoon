import React from "react";

import "./Header.css";
import "./../HeroSection/HeroSection.css"

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showNav:false
        }
        this.showNav = this.showNav.bind(this)
    }

    showNav(){
        this.setState({showNav:!this.state.showNav})
    }
    render(){
        return(
            <div>
                <section className="hero_image">
                    <header id="header">
                        <div id="nav_container" className="nav_container">
                            <h2 id="logo">Start Bootstrap</h2>
                            <nav className={this.state.showNav?"show_nav":""}>
                                <span>Services</span>
                                <span>Portfolio</span>
                                <span>About</span>
                                <span>Team</span>
                                <span>Contact</span>
                            </nav>
                            <button onClick={this.showNav}>Menu &#x2630;</button>
                        </div>
                    </header>
                    <div className="hero_info">
                        <h3>Welcome To Our Studio!</h3>
                        <h1>It's nice to meet you</h1>
                        <button>Tell me more</button>
                    </div>
                </section>
            </div>
        )

    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     document.getElementById("header").classList.add("solid_nav");
     document.getElementById("nav_container").classList.add("reset_margin");
     document.getElementById("logo").classList.add("bigger_font");
    //  console.log("greater than 50")
    } else {
        document.getElementById("header").classList.remove("solid_nav");
        document.getElementById("nav_container").classList.remove("reset_margin");
        document.getElementById("logo").classList.remove("bigger_font");
    // console.log("less than 50")
  }
}

export default Header;
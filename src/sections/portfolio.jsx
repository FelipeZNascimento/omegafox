import React, { Component } from 'react';
import InfoImage from '../components/info_image.jsx';

import PortfolioImage1 from '../img/work1.jpg';
import PortfolioImage2 from '../img/work2.jpg';
import PortfolioImage3 from '../img/work3.jpg';

let portfolioList = [
    {id:0, title: "Bolão NFL", description: "NFL pick'em betting platform built on AngularJS frontend, PHP backend, MySQL DB. 5+ years online, 25+ players, yearly updates. Signup and login systems, live results via scraper, rankings and records automatically updated, public and private REST APIs.", image_path: PortfolioImage3, link: "https://www.omegafox.me/bolaonfl/"},
    {id:1, title: "Wedding Website", description: "Wedding website developed on React.", image_path: PortfolioImage2, link: "http://www.roevi.ml"},
    {id:2, title: "Marvel Heroes", description: "Built on AngularJS, this website was developed to consume Marvel Comic Books' API. Search, pagination, details internal page.", image_path: PortfolioImage1, link: "https://www.omegafox.me/codehero/"}
]

class Portfolio extends Component {
    render () {
        const renderPortfolio = portfolioList.map((work, index) => {
            return (
                <InfoImage key={index} 
                title={work.title} 
                description={work.description}
                image={work.image_path}
                url={work.link}
                mobile={this.props.mobile} />
            )
        });

        return (
            <div id="portfolio" className="section-container blue-bg">
                <div className="title">
                    <p>Portfolio</p>
                </div>
                <div className="section-content wrap">
                    {renderPortfolio}
                </div>
            </div>            
        )
    }
}

export default Portfolio;
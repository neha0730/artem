import React, { useState } from 'react';
import portfolioData from '../../../data/portfolio-data';
import Link from 'next/link';

const showPortfolioItem = 4;

const TwoColumns = () => {
    const portfolioItem = portfolioData;
    const [items, setItems] = useState(portfolioItem);
    const [next, setNext] = useState(showPortfolioItem);
    const handleLoadData = () => {
        setNext(value => value + 2)
    }
    return (
        <div className="portfolio__one section-padding-three">
            <div className="container">
                <div className="row dark_image">
                    {portfolioItem?.slice(0, next)?.map((data, id) => (
                        <div className="col-lg-6 mt-25" key={id}>
                            <div className="portfolio__one-item">
                                <div className="portfolio__one-item-image">
                                    <img src={data.image.src} alt="image" />
                                    <div className="portfolio__one-item-image-content">
                                        <span><i className="fa-regular fa-horizontal-rule"></i>{data.subtitle}</span>
                                        <h6><Link href={`/portfolio/${data.id}`}>{data.title}</Link></h6>
                                        <Link href={`/portfolio/${data.id}`}><i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {next < items.length && (
                    <div className="row mt-70">
                        <div className="col-xl-12 t-center">
                            <button onClick={handleLoadData} className="btn-one">Load More</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TwoColumns;
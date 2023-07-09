import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import card1 from './../assets/kalim1.jpg'
import card2 from './../assets/kalim2.jpg'
import card3 from './../assets/kalim3.jpg'
import card4 from './../assets/kalim4.jpeg'
import card5 from './../assets/kalim5.jpg'
import card6 from './../assets/kalim6.jpg'
import card7 from './../assets/kalim7.jpg'
import card8 from './../assets/kalim8.jpg'
import { Link } from "react-router-dom";

export const Kalimpong = () => {
    return (
        <>
        <div style={{height: '10em'}}>
        <Carousel>
                <div>
                    <img src={card1} alt="card1" style={{height: '39.7em'}}  />
                    <p className="legend">
                        <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                        Pine View Nursery "Tourist attraction"
                    </p>
                </div>
                <div>
                    <img src={card2} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                    Delo Park "Park and Garden"
                    </p>
                </div>
                <div>
                    <img src={card3} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                    Kalimpong Science Centre "Science museum"
                    </p>
                </div>
                <div>
                    <img src={card4} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                    Geden Tharpa Choling Monastery "Buddhist temple"
                    </p>
                </div>
                <div>
                    <img src={card5} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                    Dr. Graham's Homes "School"
                    </p>
                </div>
                <div>
                    <img src={card6} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                    Mangal Dham Temple "Hindu temple"
                     </p>
                </div>
                <div>
                    <img src={card7} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                    Morgan House Tourism Property "Lodge" 
                    </p>
                </div>
                <div>
                    <img src={card8} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                        The Zang Dhok Palri Monastery </p>
                </div>
            </Carousel>
            </div>
            </>
    )
}
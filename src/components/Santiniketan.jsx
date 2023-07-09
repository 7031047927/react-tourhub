import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import card1 from './../assets/santi1.jpg'
import card2 from './../assets/santi2.jpg'
import card3 from './../assets/santi3.jpg'
import card4 from './../assets/santi4.jpg'
import card5 from './../assets/santi5.jpg'
import card6 from './../assets/santi6.jpeg'
import card7 from './../assets/santi7.jpg'
import card8 from './../assets/santi8.jpg'
import { Link } from "react-router-dom";

export const Santiniketan = () => {
    const imageClick = () => {
        alert('Click');
      } 
    return (
        <>
        <div style={{height: '10em'}}>
        <Carousel>
                <div>
                    <img src={card1} alt="card1" style={{height: '39.7em'}}  />
                    <p className="legend">
                        <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                        ছাতিম তলা "Historical landmark"
                    </p>
                </div>
                <div>
                    <img src={card2} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                    Kala Bhavana "University department"
                    </p>
                </div>
                <div>
                    <img src={card3} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                    Visva-Bharati University "University"
                    </p>
                </div>
                <div>
                    <img src={card4} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                    Ballavpur Wildlife Sanctuary "Wildlife park"
                    </p>
                </div>
                <div>
                    <img src={card5} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                    রবীন্দ্র ভবন "Museum"
                    </p>
                </div>
                <div>
                    <img src={card6} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                    পাঠ ভবন "School"
                        </p>
                </div>
                <div>
                    <img src={card7} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                    Kankalitala Shaktipeeth Temple "Hindu temple"
                    </p>
                </div>
                <div>
                    <img src={card8} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                    Surul Rajbari "Historical landmark"
                    </p>
                </div>
            </Carousel>
            </div>
            </>
    )
}
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import card1 from './../assets/card1.jpg'
import card2 from './../assets/card2.jpg'
import card3 from './../assets/card3.jpg'
import card4 from './../assets/card4.jpg'
import card5 from './../assets/card5.jpg'
import card6 from './../assets/card6.jpg'
import card7 from './../assets/card7.jpg'
import card8 from './../assets/card8.jpg'
import { Link } from "react-router-dom";

export const Kolkata = () => {
    return (
        <>
        <div style={{height: '10em'}}>
        <Carousel>
                <div>
                    <img src={card1} alt="card1" style={{height: '39.7em'}}  />
                    <p className="legend">
                        <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>
                         Kalimpong became an important centre for trade with Tibet due to the closeness of the town to the Jelepla Pass which allowed access to Central Tibet
                    </p>
                </div>
                <div>
                    <img src={card2} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>

                        Santiniketan, popularly known today as a university town, a hundred miles to the north of Kolkata, was originally an ashram built by Debendranath Tagore, where anyone</p>
                </div>
                <div>
                    <img src={card3} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>

                        Darjeeling is situated on a long, narrow mountain ridge of the Sikkim Himalayas that descends abruptly to the bed of the Great Rangit River. Welcome to Darjeeling.</p>
                </div>
                <div>
                    <img src={card4} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>

                        Before 28th August 1949, Cooch Behar was a Princely State ruled by the king of Cooch Behar, who had been a feudatory ruler under British Government.</p>
                </div>
                <div>
                    <img src={card5} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">
                    <Link to='/maps' className='btn btn-warning btm-sm'>Go To Maps </Link>

                        The Malda Museum has a great collection of the region's architectural and anthropological specimens. During the 18th century, Malda was the seat of prosperous cotton and silk industries.</p>
                </div>
                <div>
                    <img src={card6} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">Established as a French settlement in 1673, the town of Chandannagar is situated by the River Hooghly and has turned into a popular tourist attraction today. Welcome to Candannagar. </p>
                </div>
                <div>
                    <img src={card7} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">Before the advent of British, the city of Murshidabad was the capital of Bengal. Before the advent of British, the city of Murshidabad was the capital of Bengal. Before the advent of British.</p>
                </div>
                <div>
                    <img src={card8} alt="card1" style={{height: '39.7em'}} />
                    <p className="legend">Kolkata was the capital of the British India until 1911, when the capital was relocated to Delhi. Kolkata grew rapidly in the 19th century to become the second most important city of the . </p>
                </div>
            </Carousel>
            </div>
            </>
    )
}
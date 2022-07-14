import {useState} from 'react';
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi'

const Carousel = ({rocketData}) => {

    const [current, setCurrent] = useState(0);
    const length = rocketData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current+1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }
    console.log(current)
    return (
        <div className='rocketDataContainer'>
            <ul>
            {rocketData.map((rocketDetail, index) => {
                
                return (
                
                    <li className={index === current ? 'rocketInfoActive' : 'rocketInfo'} key={rocketDetail.id}>
                        {index === current && (
                            <>
                                <img src={rocketDetail.flickr_images} alt={`${rocketDetail.rocket_name} taking off`} />
                                <h3>{rocketDetail.rocket_name}</h3>
                                <p>{rocketDetail.description}</p>
                            </>
                        )}
                    </li>
                    
                )
            })}
            </ul>
            <div className='arrows'>
                <HiOutlineArrowSmLeft className='leftArrow' onClick={prevSlide} />
                <HiOutlineArrowSmRight className='rightArrow' onClick={nextSlide}/>
            </div>
        </div>
    );
};
export default Carousel;
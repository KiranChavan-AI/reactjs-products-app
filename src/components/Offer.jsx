import offerimg from '../assets/SpecialOffer.jpg'
import { memo } from 'react';
function Offer() {
    console.log('Offer component is trigerred');
    return (
        <>

            <img src={offerimg} style={{ width: "120px", height: "120px" }}></img>
            <p> Get 20% Off</p>
        </>
    )
}

export default memo(Offer);
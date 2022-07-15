import React, { useState, useEffect, useRef } from 'react'
import './dropdown.css';
import KeyboardArrowDownOutlined from '@material-ui/icons/KeyboardArrowDownOutlined';
import StarsRounded from '@material-ui/icons/StarsRounded';
import LocalMallRounded from '@material-ui/icons/LocalMallRounded';
import SchoolRounded from '@material-ui/icons/SchoolRounded';
import MovieRounded from '@material-ui/icons/MovieRounded';
import LocalHotelRounded from '@material-ui/icons/LocalHotelRounded';
import DirectionsTransitRounded from '@material-ui/icons/DirectionsTransitRounded';

// const Dropdown = ({ selected, setSelected }) => {
//     const [isActive, setIsActive] = useState(false)
//     return (
//         <div className='dropdown' >
//             <div>MAP FILTER<KeyboardArrowDownOutlined className='icon' onClick={(e) => setIsActive(!isActive)} /></div>
//             {isActive && (
//                 <div className='dropdown-content'>
//                     <button className='button'>SHOW ALL</button>
//                     <div className='dropdown-item'>
//                         <button className='buttons'>Landmarks</button>
//                     </div>
//                     <div className='dropdown-item'>
//                         <button className='buttons'>Malls</button>
//                     </div>
//                     <div className='dropdown-item'>
//                         <button className='buttons'>Schools</button>
//                     </div>
//                     <div className='dropdown-item'>
//                         <button className='buttons'>Cinema</button>
//                     </div>
//                     <div className='dropdown-item'>
//                         <button className='buttons'>Hotels</button>
//                     </div>
//                     <div className='dropdown-item'>
//                         <button className='buttons'>Metro </button>
//                     </div>
//                 </div>

//             )}

//         </div>

//     )
// }

export default function Dropdown() {
    const [isActive, setIsActive] = useState(false);

    const blocLinks = useRef(null);
    const dropDown = useRef(null);
    const btnDrop = useRef(null);
    const liItem = useRef(null);

    useEffect(() => {

        var toggleIndex = false
        const bl = blocLinks.current;
        const btn = btnDrop.current;

        btn.addEventListener(`click`, toggleDropDown);

        function toggleDropDown() {
            if (!toggleIndex) {
                bl.style.height = `${bl.scrollHeight}px`;
                console.log("Scroll H ->" + bl.scrollHeight);
                toggleIndex = true;
                return;
            }
            bl.style.height = 0;
            toggleIndex = false;
        }
    })

    return (
        <div className="dropdown">
            <button ref={btnDrop} className="btn-top">
                <span>MAP FILTER</span>
                <KeyboardArrowDownOutlined className='icon' />
            </button>

            <div ref={blocLinks} className="bloc-links"  >

                <ul>
                    <li>
                    <button className='buttons'><span>SHOW ALL</span></button>
                    </li>
                    <li>
                        <button className='buttons' ><span>Landmark</span><StarsRounded className='listicon' /></button>
                    </li>
                    <li>
                        <button className='buttons' >Malls<LocalMallRounded className='listicon' /></button>
                    </li>
                    <li>
                        <button className='buttons' >Schools <SchoolRounded className='listicon' /></button>
                    </li>
                    <li>
                        <button className='buttons' >Cinema<MovieRounded className='listicon' /></button>
                    </li>
                    <li>
                        <button className='buttons' >Hotels<LocalHotelRounded className='listicon' /></button>
                    </li>
                    <li>
                        <button className='buttons' >Metro<DirectionsTransitRounded className='listicon' /></button>
                       
                    </li>
                </ul>
            </div>
        </div>
    )
}

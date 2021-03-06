import React from 'react';
import SimpleSlider from '../LivingCarousel/LivingCarousel';
import './Living.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

const Living = () => {
    return (
        <section id="living">
            <h2 className="text-center text-5xl mb-10">Luxurious living places</h2>
            <div className="container mx-auto"> 
                <div className="grid grid-cols-3 grid-10">
                    <div className="living-col">
                        <p className="f-icon"><FontAwesomeIcon icon={faIgloo} /></p>
                        <h2 className="text-3xl mb-6">Comfortable Stay</h2>
                        <p className="pr-6">Tourverse features 180 Premium resorts around the country, 55 Superior King. 40 Superior Twin, 10 Deluxe King/Twin, and 1 Presidential Villa (3 B/R). All guests’ rooms & suites are designed with the latest state of the art technology and furnished in modern contemporary style, all to give the utmost comfortable work and sleep environment.</p>
                    </div>

                    <div className="living-carousel col-span-2">
                        <SimpleSlider></SimpleSlider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Living;
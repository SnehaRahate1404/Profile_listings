import './Techstack.css'
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Techstack(){
    return(
        <>
            <hr />
            <div className="row">
                <div className="col-5 Techstack">
                    <div className="techStackContent">
                        <p>
                            <p>
                                🗺️ Interactive Google Maps
                            </p>
                         Visualize user profiles directly on a live, zoomable map. Location pins link to individual profiles for seamless exploration.
                        </p>
                        <p>
                            <p>🛠️ Admin Dashboard</p>
                             Easily manage, add, edit, or delete profile data through a secure and intuitive admin interface.
                        </p>
                        <p>
                            <p>📱 Responsive Design</p>
                             Optimized for all devices—desktop, tablet, and mobile—for a smooth and consistent user experience everywhere.
                        </p>
                        <p>
                            <p>⚠️ Robust Error Handling & Validation</p>
                             Ensures data integrity and gracefully handles invalid inputs or failed map loads.
                        </p>
                        <p>
                            <p>🔍 Smart Search & Filters</p>
                             Quickly find profiles by name, location, or custom attributes using powerful search and filtering tools.
                        </p>
                    </div>
                </div>
                <div className="col-7">
                    <DotLottieReact
                     src="https://lottie.host/334d3fcf-8504-45f3-9063-188b94f40814/LCdN9g6ykJ.lottie"
                     loop
                     autoplay
                    />
                </div>
            </div>
        </>
    )
}
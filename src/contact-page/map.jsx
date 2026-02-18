import React from "react";

const Mapping = () => {
    return (
        <>
            <div className="map-main">
                <iframe
                    title="Office location map"
                    src="YOUR_MAP_URL"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />            </div>
        </>
    );
}

export default Mapping;
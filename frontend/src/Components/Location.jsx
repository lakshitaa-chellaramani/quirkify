import React, { useEffect, useState } from 'react';
// import { GiHamburgerMenu } from "react-icons/gi";

const Location = () => {
    const [locations, setLocations] = useState([]);
    const [clicked, setClicked] = useState(false);

    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = currentDate.getDay();
    const dayName = daysOfWeek[dayIndex];

    const [selectedDay, setSelectedDay] = useState(dayName);

    useEffect(() => {
        const getLocation = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/location/getAllLocations', {
                    method: "GET"
                });
                const data = await response.json();
                setLocations(data.locations);
            } catch (error) {
                console.log(error);
            }
        };

        getLocation();
    }, []);

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    const getLocationMap = () => {
        let url;
        const foundLocation = locations.find(location => location.day === selectedDay);
        if (foundLocation) {
            url = foundLocation.url;
        }
        return url
    }

    const showNavbar = () => {
        setClicked(!clicked)
    }

    return (
        <div className="main_location">
            <div className="ham">
                {/* <GiHamburgerMenu onClick={showNavbar} className='inside_ham' /> */}
            </div>
            <div className="left_location">
                {locations.map(location => (
                    <div
                        key={location._id}
                        className={`day_left ${selectedDay === location.day ? 'selected' : ''} ${clicked ? "clicked_class" : ""}`}
                        onClick={() => handleDayClick(location.day)}
                    >
                        <h1>Day : {location.day}</h1>
                        <h1>Place : {location.place}</h1>
                    </div>
                ))}
            </div>
            <div className="right_location">
                {selectedDay && (
                    <iframe
                        title={`Map for ${selectedDay}`}
                        width="600"
                        height="450"
                        className="rounded-xl"
                        loading="lazy"
                        allowFullScreen
                        src={getLocationMap()}
                    ></iframe>
                )}
            </div>
        </div>
    );
};

export default Location;


// let url;
// const foundLocation = locations.find(location => location.day === selectedDay);
// if (foundLocation) {
//   url = foundLocation.url;
// }

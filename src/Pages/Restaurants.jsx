import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Navigation from '../Components/Navigation'
const Restaurants = () => {
  // const [location, setLocation] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setLocation({ latitude, longitude });
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );

  //          // Fetch nearby restaurants
  //          if (location) {
  //           const apiKey =  process.env.REACT_APP_GOOGLE_API_KEY;
  //           const radius = 1000; // Radius in meters
  //           const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=${radius}&type=restaurant&key=${apiKey}`;
    
  //           axios.get(url)
  //             .then(response => {
  //               console.log(response);
  //               setRestaurants(response.data.results);
  //             })
  //             .catch(error => {
  //               console.error(error);
  //             });
  //         }
  //   }
  // }, [location]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const apiKey =  process.env.REACT_APP_GOOGLE_API_KEY;
            const radius = 1000;
            const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=restaurant&key=${apiKey}`;

            const response = await axios.get(url);
            setRestaurants(response.data.results);
          } catch (error) {
            console.error(error);
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);


  return (
    <>
    <div>
      <h2>Restaurants Near Me</h2>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.place_id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
    <Navigation />
    </>
  )
}

export default Restaurants
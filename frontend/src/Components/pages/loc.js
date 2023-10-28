

import React, { useEffect, useRef } from 'react';

import mapboxgl from 'mapbox-gl';

// import useMapStore from '@/store/map-store';


export default function Loc() {

  const mapRef = useRef(null);

  // @ts-ignore

//   const { mapState } = useMapStore();

useEffect(() => {

    mapboxgl.accessToken = 'pk.eyJ1IjoidGVqYXMtZ2siLCJhIjoiY2xud3NsNmc5MGR2NDJtbXhnaDR5YXI4dSJ9.1xnoW8szgMdfpdq4sI7Yzg';

    

    navigator.geolocation.getCurrentPosition(

      (position) => {

        const { longitude, latitude } = position.coords;


        const map = new mapboxgl.Map({

          container: mapRef.current,

          style: 'mapbox://styles/mapbox/streets-v11',

          center: [longitude, latitude],

          zoom: 12,

        });


        const navControl = new mapboxgl.NavigationControl();

        map.addControl(navControl, 'top-right');


        new mapboxgl.Marker()

          .setLngLat([longitude, latitude])

          .addTo(map);


        return () => map.remove(); 

      },

      (error) => {

        console.error('Error getting geolocation:', error);

        // Handle error here

      },

      {

        enableHighAccuracy: true,

      }

    );

  }, []); 


  return (

    <div  className='w-full h-screen'
style={{
    height:"100vh",
    width:"20vw"
}}
>

      <div ref={mapRef} className='w-full h-full'
style={{
    height:"100vh",
    width:"30vw"
}}
/>

    </div>

  );

}
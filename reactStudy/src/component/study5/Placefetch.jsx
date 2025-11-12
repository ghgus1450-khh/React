
// // map을 이용하지 않은 버전

// import { useEffect, useState } from "react";

// export default function TestFetch() {

//   const [city, setCity] = useState("");

//   useEffect(() => {
//     fetch("https://api.zippopotam.us/us/90210")
//       .then((res) => res.json())
//       .then((data) => {
//         setCity(data.places[0]["place name"]);
//       });
//   }, []);

//   return (
//     <>
//       <h2>도시 이름</h2>
//       <p>{city}</p>
//     </>
//   );
// }


// map을 이용한 버전 

import { useState, useEffect } from 'react';

export default function PlaceFetch() {
  const [places, setPlaces] = useState([]); // 배열로 저장!

  useEffect(() => {
    fetch("https://api.zippopotam.us/us/90210")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data.places); // 배열 그대로 저장
      });
  }, []);

  return (
    <>
      <h2>도시 이름 출력 (map 버전)</h2>
      <ul>
        {places.map((p, i) => (
            // i = index 적용
          <li key={i}>
            도시 이름 : {p["place name"]}
          </li>
        ))}
      </ul>
    </>
  );
}
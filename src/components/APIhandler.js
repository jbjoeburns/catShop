// import React from 'react';
// import { useEffect, useState } from 'react';
// import '../App.css';
// import {render} from 'react-dom';

// const App = () => {
//     const [catPic, setPic] = useState([]);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         const fetchCat = async () => {
//         try {
//             const response = await fetch(
//                 'https://cataas.com/cat',
//             );
//             if (!response.ok) {
//                 throw new Error(response.statusText);
//             }
//             const data = await response.json();
//             setPic(data);
//         } catch (err) {
//             setError('Could not fetch data');
//             console.log(err.message);
//             }
//         };
//         fetchCat();
// }, [])
// render() ;{
//     const catPic = this.state.staff;
//     // return (
//     //     <div>
//     //         {buttonVals.map(calcVal => {
//     //                     return <button id='buttonNumb'>{calcVal}</button>
//     //                 })}
//     //     </div>
//     // )
// };

// }

// export default App;
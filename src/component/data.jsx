// import { useState, useEffect } from "react";

// function Data({ data }) {
//   const newDataF = [];
//   const newDataT = [];
//   const newDataR = [];
//   const newDataS = [];
//   const [dataT, setDataT] = useState([]);
//   const [dataR, setDataR] = useState([]);
//   const [dataF, setDataF] = useState([]);
//   const [dataS, setDataS] = useState([]);
//   useEffect(() => {
//     data.forEach((data) => {
//       if (data.restrntNm) {
//         newDataF.push(data);
//       } else if (data.tourspotNm) {
//         newDataT.push(data);
//       } else if (data.romsNm) {
//         newDataR.push(data);
//       } else if (data.shppgNm) {
//         newDataS.push(data);
//       }
//     });

//     setDataF(newDataF);
//     setDataT(newDataT);
//     setDataR(newDataR);
//     setDataS(newDataS);
//   }, [data]);
// }
// export default Data;

// import axios from "axios";
// import { useState, useEffect } from "react";

// function Api() {
//   let [allData, setAllData] = useState();
//   let [data, setData] = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response1 = await axios.get(
//           "https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=1000"
//         );
//         const response2 = await axios.get(
//           "https://apis.data.go.kr/6300000/openapi2022/tourroms/gettourroms?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=1000"
//         );
//         const response3 = await axios.get(
//           "https://apis.data.go.kr/6300000/openapi2022/restrnt/getrestrnt?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=1000"
//         );
//         const response4 = await axios.get(
//           "https://apis.data.go.kr/6300000/openapi2022/shppg/getshppg?serviceKey=9Kbh7puvigX1v%2BUt3d80DNluxIWcGTBZSt49gFUCQ%2B%2B9qkGYjvpqm7U4Xsxwt0M%2FaoRl4a3n1jSj%2BBMAHZSeOQ%3D%3D&pageNo=1&numOfRows=100"
//         );

//         const mergedData = response1.data.response.body.items.concat(
//           response2.data.response.body.items,
//           response3.data.response.body.items,
//           response4.data.response.body.items
//         );

//         setAllData(mergedData);
//         setData([...mergedData]);
//         setIsLoading(false);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);
// }

// export default Api;

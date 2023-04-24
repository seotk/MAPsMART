// import React, { useState } from "react";
// import "./App.css";

// function Chat() {
//   const [message, setMessage] = useState("");
//   const [response, setResponse] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:3001/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ message }),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return res.json();
//       })
//       .then((data) => setResponse(data.message))
//       .catch((error) => console.error("Error:", error));
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>
//       <div>{response}</div>
//     </div>
//   );
// }
// export default Chat;

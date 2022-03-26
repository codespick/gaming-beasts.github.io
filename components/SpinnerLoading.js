// import React from 'react';
// import Loader from "react-loader-spinner";
// // import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// // import "../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// export default function SpinnerLoading() {
//     return (
//         <div>
//             {/* <h2>NextJs Spinner Loader - GeeksforGeeks</h2> */}
//             <Loader
//                 type="Puff"
//                 color="#00BFFF"
//                 height={100}
//                 width={100}
//                 timeout={3000}
//             />
//         </div>
//     )
// }

// import styles from "../styles/Loading.module.css"

export default function SpinnerLoading() {
  return (
    <>
      <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>


  )
}

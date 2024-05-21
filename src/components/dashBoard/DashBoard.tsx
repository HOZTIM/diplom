// import React, { useState } from "react";
// import "./dashboard.css";
// function DashBoard() {
//   return (
//     <div className="container">
//       <div className="gallery">
//         <div className="wrap_video_item">
//           <h3>Санкт-Петербург</h3>
//           <div className="video_item">
//             <video src="video/piter.mp4" muted controls></video>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashBoard;

import React from "react";
import "./dashboard.css";
function DashBoard() {
  return (
    <div className="container">
      <div className="gallery">
        <div className="wrap_video_item">
          <h3>Санкт-Петербург</h3>
          <div className="video_item">
            <video src="video/piter.mp4" muted controls></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;

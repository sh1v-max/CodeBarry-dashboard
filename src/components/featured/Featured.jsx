import "./featured.scss"
import DataObjectIcon from '@mui/icons-material/DataObject';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';


const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Session</h1>
        <DataObjectIcon fontSize="small" className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={7} text={"Today: 7"} strokeWidth={4} />
        </div>
        <p className="title">
          <h2>Total question attempted</h2>
        </p>
        <p className="amount"><h1>503</h1></p>
        <p className="desc">Complete and win badges <br />
        You earned 3 badges this week <br />
        congragulation🎉</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Easy</div>
            <div className="itemResult negative">
              <VerifiedOutlinedIcon fontSize="exta small" className="icon" />
              <div className="resultAmount">241</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Medium</div>
            <div className="itemResult positive">
              <VerifiedOutlinedIcon fontSize="exta small" className="icon" />
              <div className="resultAmount">152</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Hard</div>
            <div className="itemResult positive">
              <VerifiedOutlinedIcon fontSize="exta small" className="icon" />
              <div className="resultAmount">110</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured
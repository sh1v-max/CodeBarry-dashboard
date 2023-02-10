import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import StarIcon from '@mui/icons-material/Star';

const Widget = ({types}) => {
  let data;
  const amount=100
  const diff=20

  switch(types){
    case "submissions":
    data={
        title:"SUBMISSIONS",
        isMoney:false,
        link:"all submissions",
        icon:(<TurnedInNotOutlinedIcon className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.1)",
            }}/>)
      };
      break;
      case "views":
    data={
        title:"VIEWS",
        isMoney:false,
        link:"total views",
        icon:(<VisibilityOutlinedIcon  className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.1)",
              color: "goldenrod",
            }}/>)
      };
      break;
      case "solutions":
    data={
        title:"SOLUTIONS",
        isMoney:false,
        link:"all solutions",
        icon:(<CodeOutlinedIcon className="icon"
            style={{ 
              backgroundColor: "rgba(0, 128, 0, 0.1)", 
            color: "green" }}/>)
      };
      break;
      case "discuss":
    data={
        title:"DISCUSS",
        isMoney:false,
        link:"all discussions",
        icon:(<TaskOutlinedIcon className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.1)",
              color: "purple",
            }}/>)
      };
      break;
      case "reputation":
    data={
        title:"REPUTATION",
        isMoney:false,
        link:"reputation this week",
        icon:(<StarIcon className="icon"
            style={{
              backgroundColor: "rgba(75, 31, 0, 0.4)",
              color: "orangered",
            }}/>)
      };
      break;
    default:
      break;
  }


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon/>
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget


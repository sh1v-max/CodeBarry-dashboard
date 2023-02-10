import "./sidebar.scss"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import GamepadOutlinedIcon from '@mui/icons-material/GamepadOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">CodeBarry</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">PROFILE</p>
                <li>
                    <AccountCircleOutlinedIcon className="icon"/>
                    <span>My Profile</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className="icon"/>
                    <span>Sign out</span>
                </li>
                    <p className="title">TRACK YOURSELF</p>

                <li>
                    <FavoriteBorderOutlinedIcon className="icon"/>
                    <span>My List</span>
                </li>
                <li>
                    <GamepadOutlinedIcon className="icon"/>
                    <span>My Playground</span>
                </li>
                <li>
                    <NoteOutlinedIcon className="icon"/>
                    <span>Notebook</span>
                </li>
                <li>
                    <AccessTimeOutlinedIcon className="icon"/>
                    <span>Submission</span>
                </li>
                <li>
                    <InsertChartOutlinedSharpIcon className="icon"/>
                    <span>Session</span>
                </li>
                <li>
                    <PieChartOutlineOutlinedIcon className="icon"/>
                    <span>Progress</span>
                </li>
                <li>
                    <NumbersOutlinedIcon className="icon"/>
                    <span>Points</span>
                </li>
                <li>
                    <TurnedInNotOutlinedIcon className="icon"/>
                    <span>Subscription</span>
                </li>
                <li>
                    <SendOutlinedIcon className="icon"/>
                    <span>Orders</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar
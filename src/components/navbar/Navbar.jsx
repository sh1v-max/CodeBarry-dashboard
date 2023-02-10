import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="itemo">
            Explore
          </div>
          <div className="itemo">
            Problems
          </div>
          <div className="itemo">
            Context
          </div>
          <div className="itemo">
            Discuss
          </div>
          <div className="item">
            <StorefrontOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <WorkspacePremiumOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <LocalFireDepartmentOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <AccountCircleTwoToneIcon className="icon"/>
          </div>
          <div className="item">
            <img 
            src="https://images.pexels.com/photos/4629624/pexels-photo-4629624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
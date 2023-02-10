import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home"> 
        <Sidebar/>              
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget types="submissions"/>
            <Widget types="views"/>
            <Widget types="solutions"/>
            <Widget types="discuss"/>
            <Widget types="reputation"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Question bank</div>
            <Table/>
          </div>
        </div>
    </div>
  );
};

export default Home;

import logo from './assets/logo.png';
import bell from './assets/bell.png';
import msg from './assets/msg.png';
import user from './assets/users/user.png';

import search from './assets/search.png';


import './App.css';
import { data } from './constants';

function Home() {
  return (
    <div className="App">
      <div className="header">

        <div className="left_header">

           <img alt='' src={logo} />
           <h3>Home</h3>
           <h3>Today</h3>
           <h3>Following</h3>
        </div>

        <div className="middle_header">
          <img alt='' src={search} />
           <h3>Search</h3>
        </div>

        <div className="right_header">
          <img alt='' src={bell} />
          <img alt='' src={msg} />
          <img alt='' src={user} />
        </div>


      </div>
      


      <div className="main_page">
         {
                    data.list.map((item,index=0) => (
                      
                          
                          <div className="post_box" key={item.key}>
                            <img alt='' src={item.img} />
                            <h2>{item.tagline}</h2>
                          </div>
                    ))
          }
      </div>
      
    </div>
  );
}

export default Home;
import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <h1 className="hhh">ARSA</h1>
      <p>choose who you want to see</p>
      <div className="btndivm">
        <Link style={{ textDecoration: 'none' }} className="btndiv" to="/home">
          <div>
              <div className="ps">
                  <p className="hhh">HI! <br></br>i`m Arya Aramde</p> <br></br>
                  <p className="hhhm">front end developer</p>
              </div>

            <button className="btnmiann" >lets start</button>
          </div>
        </Link>
        <Link style={{ textDecoration: 'none' }} className="btndiv" to="/Home1">
          <div>
                <div className="ps">
                  <p className="hhh">HI! <br></br>i`m Kasram Safarali</p> <br></br>
                  <p className="hhhm">Graphic Designer</p>
                </div>

                 <button className="btnmiann" >lets start</button>
          </div>
        </Link>
      </div>
      
    </div>
    
  );
}

export default Main;

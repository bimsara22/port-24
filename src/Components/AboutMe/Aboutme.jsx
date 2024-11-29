import React from "react";
import Header from "../Header/Header";
import rusl from "../../Images/rusl.jpg";

function Aboutme() {
  const items = ['Js', 'HTML', 'CSS', 'React'];
  const itemss = [{name:'yasindu',age:25},{name:'yasindu1',age:251},{name:'yasindu3',age:2512}];


  return (
    <div>
      <div className="container">
        <section>
          <div className="about">
            <div className="text">
              <h3>ABout me</h3>
              <h4>
                The simple selectors select elements based on element-name, id,
                and class. In addition, there is the universal selector (*).CSS
                selectors are used to "find" (or select) the HTML elements you
                want to style. Use our CSS Selector Tester to demonstrate the
                different selectors.
                <h3>About me</h3>
                <h4>About me 34 test test</h4>
              </h4>
            </div>
            <div className="image-container1">
              <img src={rusl} alt="image" className="image2"></img>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="skills">
        
            {items.map((value,index)=>(
                <div className="skill-item">
                  {/* {items} */}
                
                <div className="icon">icon</div>
                <div className="title-icon">{value}</div>
                
                </div>
            ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Aboutme;

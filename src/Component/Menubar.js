import React, { useEffect } from 'react';
import { CarouselItem, Col, Dropdown, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "./Menubar.css"

const Menubar = ({ parent, catagory }) => {
    const history=useHistory()
    
    console.log(parent,catagory)
    let leftThird=["Left Third 1"," Left Third 2"," Left Third 3","Left Third 4"]
    let leftSecond=["Left Secont 1"," Left Second 2",leftThird," Left Second 3","Left Second 4"]
    let leftFirst = ["Left First 1", " Left First 2", " Left First 3", leftSecond, "Left First 4"]
    


    let rightThird=["Right Third 1"," Right Third 2"," Right Third 3","Right Third 4"]
    let rightSecond=["Right Secont 1"," Right Second 2",rightThird," Right Second 3","Right Second 4"]
    let rightFirst=["Right First 1"," Right First 2"," Right First 3",rightSecond,"Right First 4"]

    const transfar = (name) => {
    history.push(`/catagory/${name}`)
}

   switch (parent) {
     case "leftFirst":
      leftFirst.push(catagory)
       break;
     case "leftSecond":
       leftSecond.push(catagory)
       break;
     case "leftThird":
       leftThird.push(catagory)
       break;
     case "rightFirst":
      rightFirst.push(catagory)
       break;
     case "rightSecond":
       rightSecond.push(catagory)
       break;
       case "rightThird":
           console.log(catagory)
           rightThird.push(catagory);
           break;
      
   }


    return (
      <div className="container menubar">
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Link to="/"> Home</Link>
          </Col>
          <Col xs={12} sm={6} md={3}>
            {/* Left DropDown  */}
            <Dropdown className="parentMenu">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Left Dropdown
              </Dropdown.Toggle>

              <Dropdown.Menu className="childMenu">
                {leftFirst.map((item, index) =>
                  Array.isArray(item) ? (
                    // Left second Dropdown

                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Left Level 2
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="childMenu">
                        {leftSecond.map((item, index) =>
                          Array.isArray(item) ? (
                            // left  Third Dropdown
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="light"
                                id="dropdown-basic"
                              >
                                Left Level 3
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="childMenu">
                                {leftThird.map((item) => (
                                  <Dropdown.Item key={item} as={Link} onClick={()=>transfar(item)}>
                                    {item}
                                  </Dropdown.Item>
                                ))}
                              </Dropdown.Menu>
                            </Dropdown>
                          ) : (
                            <Dropdown.Item key={item} as={Link} onClick={()=>transfar(item)}>
                              {item}
                            </Dropdown.Item>
                          )
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <Dropdown.Item key={item} as={Link} onClick={()=>transfar(item)}>
                      {item}
                    </Dropdown.Item>
                  )
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={12} sm={6} md={3}>
            {/* Right dropdown  */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Right Dropdown
              </Dropdown.Toggle>

              <Dropdown.Menu className="childMenu">
                {rightFirst.map((item) =>
                  Array.isArray(item) ? (
                    // Right second Dropdown

                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Right Level 2
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="childMenu">
                        {rightSecond.map((item) =>
                          Array.isArray(item) ? (
                            // Right Third Dropdown
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="light"
                                id="dropdown-basic"
                              >
                                Right Level 3
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="childMenu">
                                {rightThird.map((item, index) => (
                                  <Dropdown.Item key={item} as={Link} onClick={()=>transfar(item)}>
                                    {item}
                                  </Dropdown.Item>
                                ))}
                              </Dropdown.Menu>
                            </Dropdown>
                          ) : (
                            <Dropdown.Item key={item} as={Link} onClick={()=>transfar(item)}>
                              {item}
                            </Dropdown.Item>
                          )
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <Dropdown.Item key={item} as={Link} onClick={()=>transfar(item)}>
                      {item}
                    </Dropdown.Item>
                  )
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Link to="/addCatagory"> Add Catagory</Link>
          </Col>
        </Row>
      </div>
    );
};

export default Menubar;
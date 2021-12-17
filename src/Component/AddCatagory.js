import React, { useState } from "react";
import swal from "sweetalert";

import {
  Button,
  Card,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";

const AddCatagory = ({ setCatagory, setParent }) => {
  const [tempCatagory, setTempCatagory] = useState("");
  const [tempParent, setTempParent] = useState("");
    const [error, setError] = useState(false);
    function refreshPage() {
      window.location.reload();
    }

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!tempParent) {
      setError(true);
      return;
    }
    setError(false);
    setCatagory(tempCatagory);
      setParent(tempParent);
e.target.reset();
      swal({
        title: "Successfully Added A New Catagory!",
        text: `Added ${tempCatagory} Under ${tempParent} Dropdown`,
        icon: "success",
        button: "Ok",
      });

 
    
  };

  return (
    <div>
      <Row>
        <Col sm={12} md={4}></Col>
        <Col sm={12} md={4}>
          <Card border="primary" className="addCatagory p-3 mt-5">
            <Card.Title>Add A New Catagory</Card.Title>
            <hr />
            <Card.Body>
              <form onSubmit={handelSubmit}>
                <Form.Group
                  controlId="formFileMultiple"
                  className="mb-3 text-start"
                >
                  <Form.Label>Please Enter Catagory Name</Form.Label>
                  <Form.Control
                    required
                    onBlur={(e) => setTempCatagory(e.target.value)}
                    type="text"
                    placeholder="Catagory Name"
                  />
                </Form.Group>
                <Form.Group
                  controlId="formFileMultiple"
                  className="mb-3 text-start"
                >
                  <Form.Label>Choose Parent Dropdown</Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                      Choose Parent Dropdown
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => setTempParent("leftFirst")}>
                        Left Main level
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setTempParent("leftSecond")}
                      >
                        Left Second Level
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setTempParent("leftThird")}>
                        Left Third Level
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setTempParent("rightFirst")}
                      >
                        Right Main Level
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setTempParent("rightSecond")}
                      >
                        Right Second Level
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setTempParent("rightThird")}
                      >
                        Right Third Level
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
                {error && (
                  <p style={{ color: "red" }}>Please Select A Catagory..</p>
                )}
                <Button type="submit" variant="primary" size="lg">
                  Add Catagory
                </Button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddCatagory;

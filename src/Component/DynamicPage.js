import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const DynamicPage = () => {
    const { name } = useParams()
   
    return (
      <div>
        <h1 className="my-5">This is {name} Page</h1>

        <Button variant="info" as={Link} to="/">
          {" "}
         Go Home
        </Button>
        <Button  className='ms-2' variant="info" as={Link} to="/addCatagory">
          {" "}
          Add New Catagory
        </Button>
      </div>
    );
};

export default DynamicPage;
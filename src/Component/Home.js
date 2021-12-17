import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div>
            <h1 className='my-5'>This is Simple Multi-Level Category Menu Webpage </h1>{" "}
            <Button variant="info" as={Link} to="/addCatagory"> Add New Catagory</Button>
      </div>
    );
};

export default Home;
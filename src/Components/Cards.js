import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardSubTitle,
  MDBBtn
} from 'mdb-react-ui-kit';
// import Organise from '../Organise/Organise';
import ImageMask from './ImageMask';
import './Cards.css'



  

function Cards() {
    const imgSrc="https://img.collegepravesh.com/2018/09/MAIT-Delhi.jpg";

  const text="Event Name!!";
  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path = `/organise`; 
  //   navigate(path);
  // }
  
  return (

    <div>

<MDBCard id = "main_body" className='card ms-4' >
      
      <ImageMask imgSrc={imgSrc} text={text} />
      <MDBCardBody>
        <MDBCardTitle>University Name</MDBCardTitle>
        {/* <MDBCardSubTitle>University Name</MDBCardSubTitle> */}
        <MDBCardText>
       With the demand for full stack development uplifting heights and more developers moving toward React.js
        </MDBCardText>
        <MDBCardText id="sponsor_text">
        Sponsored by : Red Bull, LeetCode, Byjus
        </MDBCardText>
      </MDBCardBody>
      <MDBCardBody>
           <MDBBtn outline className='mx-2 d-inline' disabled color='dark'>
        Off/Online
      </MDBBtn>
           <MDBBtn outline className='mx-2 d-inline' disabled color='dark'>
        Location
      </MDBBtn>
           <MDBBtn outline className='mx-2 d-inline' disabled color='dark'>
        Team/Solo
      </MDBBtn>
      </MDBCardBody>
      <MDBCardBody>
      <MDBBtn className='me-1 ms-1 d-inline' color='success'>
        Create a Team
      </MDBBtn>
      <MDBBtn className='ms-1 d-inline' color='success'>
         Join a Team
      </MDBBtn>
      </MDBCardBody>

      <MDBCardText id="sponsor_text">
        1000+ people interested
        </MDBCardText>

    </MDBCard>


    </div>
  )
}

export default Cards
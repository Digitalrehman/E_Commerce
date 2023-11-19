import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';



const Login = () => {
  return (
    <>
    <div className="container my-2 bg-dark text-light rounded-3">
      <div className="row justify-content-center">
        <div className="col-10">
       <div className='text-center py-3'>
        <h1 className='fw-bold '>Registration</h1>
       </div>
     <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' placeholder='Name' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2'placeholder='Last Name' label='Last name' />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='form6Example3' placeholder='Company Name' label='Company name' />
      <MDBInput wrapperClass='mb-4' id='form6Example4' placeholder='Address' label='Address' />
      <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' placeholder='Email' label='Email' />
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' placeholder='Phone' label='Phone' />

      <MDBInput wrapperClass='mb-4' textarea id='form6Example7' placeholder='Tell me about your mind' rows={4} label='Additional information' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form6Example8'
        label='Create an account?'
        defaultChecked
      />

      <MDBBtn className='mb-4' type='submit' block>
        Place order
      </MDBBtn>
    </form>
   
    </div>
      </div>
    </div>
    </>
  )
}

export default Login

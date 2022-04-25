import React from 'react'
import '../../assets/css/schedule.css';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button'

const ScheduleModal = (props) => {
  return (
    <>
    {props.show ?  <div className='modal'>
        <div className='modal-form'>
        <form className='form'>
            <label className='modal-head' for="birthdaytime">Choose Date & Time:</label>
            <input type="datetime-local" id="birthdaytime" name="birthdaytime"/>
            <input type="submit"/>
            <a onClick={props.onHide}> hello</a>
        </form>
        </div>
    </div> : null}
    
    
    </>
    // <div>
    //   <Modal
    //   {...props}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >
    //   <Modal.Header closeButton>
    //     <Modal.Title id="contained-modal-title-vcenter">
    //       Modal heading
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <h4>Centered Modal</h4>
    //     <p>
    //       Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
    //       dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
    //       consectetur ac, vestibulum at eros.
    //     </p>
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button onClick={props.onHide}>Close</Button>
    //   </Modal.Footer>
    // </Modal>
    // </div> 
  )
}

export default ScheduleModal
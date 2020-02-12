import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {  Row, Col,  Modal } from 'react-bootstrap';
class AddModal extends Component{
  constructor(props) {
         super(props);
         this.state = {
             show: false
         };
         this.showModal = this.showModal.bind(this);
         this.hideModal = this.hideModal.bind(this);
     }
     showModal() {
         this.setState({
             show: true
         });
     }
     hideModal(){
       this.setState({
         show: false
       })
     }
    render(){
      return(
        <div className="App">
                        <Row>
                            <Col md={12}>
                                <Button  className='btn-block' onClick={this.showModal}>More Info</Button>
                                <Modal show={this.state.show} onHide={this.hideModal} aria-labelledby='ModalHeader'>
                                    <Modal.Header closeButton>
                                        <Modal.Title id='ModalHeader'>{this.props.title}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <img src={this.props.pic} style={{width: "350px"}}/>
                                    </Modal.Body>
                                    <Modal.Footer>
                                            <button className='btn btn-primary' onClick={this.hideModal}>
                                                Close
                                            </button>
                                    </Modal.Footer>
                                </Modal>
                            </Col>
                        </Row>
          
        </div>  
      )
    }
  }
export default AddModal;


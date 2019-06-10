import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Input, FormBtn } from '../components/Form';
// import { Link } from "react-router-dom";
import API from "../utils/API";

class UserInfo extends Component {
    state = {
        users: [],
        email:"",
        password:"",
        streetAddress:"",
        city:"",
        userState:"",
        

    };

    componentDidMount(){
        this.loadUser()
    }

    loadUser = id => {
        // eslint-disable-next-line no-undef
        API.getUser(id)
        .then(res =>
        this.setState({email:"", streetAddress:"", city:"", state:"" })
            )
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.email && this.state.password && this.state.streetAddress && this.state.city && this.state.userState){
        // eslint-disable-next-line no-undef
        
        API.saveUser({
            email: this.state.email,
            password: this.state.password,
            streetAddress: this.state.streetAddress,
            city: this.state.city,
            userState: this.state.userState
        })
        .then(res => this.loadUser())
        .catch(err => console.log(err));
    }
};

render() {
    return(
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <form>
                    <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder= "Email (required)"
                    />
                     <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder= "Password (required)"
                    />
                     <Input
                    value={this.state.streetAddress}
                    onChange={this.handleInputChange}
                    name="streetAddress"
                    placeholder= "Street Address (required)"
                    />
                     <Input
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    name="city"
                    placeholder= "City (required)"
                    />
                     <Input
                    value={this.state.userState}
                    onChange={this.handleInputChange}
                    name="userState"
                    placeholder= "State (required)"
                    />
                    <FormBtn
                    onClick={this.handleFormSubmit}
                    >
                        Submit
                    </FormBtn>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

}

export default UserInfo;



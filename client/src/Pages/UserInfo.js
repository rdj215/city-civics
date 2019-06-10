import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Input, FormBtn } from '../components/Form';
// import { Link } from "react-router-dom";
import API from "../utils/API";
const homeStyle = {
    backgroundcolor: 'green'
    
}
const queryUrl ="https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyD94j3PxJF135ewOPPSHaPh49-9g9rk6dY&address=Philadelphia,PA"
// const addy = "Philadelphi, PA"
class UserInfo extends Component {
    state = {
        users: [],
        email:"",
        password:"",
        streetAddress:"",
        city:"",
        userState:"",
        zip:"",
        officials:[]

    };

    // componentDidMount(){
    //     this.loadElects()
    // }

    // loadElects = id => {
        
    //     // eslint-disable-next-line no-undef
    //     fetch(queryUrl)
    //     .then(results => {
            
    //         console.log(results)
    //         return results.json();}).then(res => console.log(res));
            // console.log(results.json)
        // }).then(data => {
        //     let elects = data.results.map((info) =>{
        //         return(
        //             <div key={info.results} >
        //             < div {...info.picture} />
        //             </div>
        //         )
        //     })
        //     this.setState({info: info});
           
        
    
    // };

        // .catch(err => console.log(err));
    // };

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
            userState: this.state.userState,
            zip: this.state.zip
        })
        
        // .then(res => this.loadUser())
        // .catch(err => console.log(err));
        console.log(this.state.email);
        
        
    }  
    
};

render() {
    return(
        <Container style={homeStyle} fluid>
            <Row>
                <Col size="md-6" style={homeStyle}>
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
                     <Input
                    value={this.state.zip}
                    onChange={this.handleInputChange}
                    name="zip"
                    placeholder= "Zip (required)"
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



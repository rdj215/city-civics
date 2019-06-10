// import React from "react;";
// import { publicDecrypt } from "crypto";
// import { Input, FormBtn } from "./client/src/components/Form";

// // const queryUrl ="https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyD94j3PxJF135ewOPPSHaPh49-9g9rk6dY&address"

// // .then(res => fetch(queryUrl + this.state.streetAddress + "" + this.city.state + "" + this.state.userState)
// //         .then(res => res.json()))


//         // componentDidMount(){
//         //     fetch(queryUrl +  )
//         // }

// class Card2 extends Component {
//     constructor(){
//         super();
//         this.state= {
//             elects: [],
//         };
//     }

//     componentDidMount(){
//         fetch(queryUrl + this.state.zip)
//         .then(results => {
//             return results.json();
//         }).then(data => {
//             let elects = data.results.map((info) =>{
//                 return(
//                     <div key={info.results} >
//                     <li {info.pic.med} />
//                     </div>
//                 )
//             })
//             this.setState({info: info});
//         })
//     }

//     lookUpElects = event => {
//         event.preventDefault();
        
//     }

//     render(){
//         return(
//             <form>
//                 <Input
//                 value={this.state.zip}
//                 onChange={this.handleInputChange}
//                 name="zipcode"
//                 placeholder="zip code"
//                 />
//                 <FormBtn
//                 onClick={this.lookUpElects}

//             </form>
//             <div className="container1">
//                 <div className="container2">
//                     {this.state.med}
//                 </div>
//             </div>
//         )
//     }
// }
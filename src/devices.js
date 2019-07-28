import React from 'react';
import './devices.css';
import {Circle} from 'react-shapes';

 class Devices extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      devicesNum:0,
      hasErrors:false,
      name:'Ashish Bhardwaj',
      email:'ashish10211@gmail.com',
      message:':) Test Completed . Thanks for this oppurtunity . Hope to hear from you soon',
      repoURL:'https://github.com/ashish10211/testFrontEnd',
      tokken:'',
    };
  }

  componentWillMount(){
    this.fetchdata();
     this.fetchToken();
     this.interval = setInterval(() => {
      this. fetchdata();
    }, 5000);
  }

  fetchToken= async() => {
	 var temp=localStorage.getItem('token')
	await this.setState({tokken:temp})
	
}


  fetchdata= async() =>{
     fetch("http://35.201.2.209/devices")
      .then(res => res.json())
      .then(res =>
       this.setState({ 
      	devicesNum: res.devices.length ,
      	elements:res.devices,
      }))
      .catch(() => this.setState({ hasErrors: true })); 
  console.log(this.state.elements)
}

logout(){
	localStorage.removeItem('token');
	this.props.history.push('/')
}

sendData(){
	fetch('http://35.201.2.209/notify', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email:this.state.email,
    password:this.state.password,
    
  })
}).then(function (response) {
      console.log(response);
      if(response.status==200){
        console.log(response.message)
        alert(response.message) 
       
      }
      else if (response.status==401){
         console.log(response.message)
        alert(response.message)
      
    }
    else if(response.status==400){
       console.log(response.message)
      alert(response.message)
    }

  })
    .catch(function (error) {
      console.log(error);
    });
}


  render() {
    const a = this.state.devicesNum;
   
    return (
      <div className="inner-container">
         <div className="inner-container1">
             <div className="box">
              <div className="circles1">
          {Array.apply(null, Array(this.state.devicesNum)).map(function(item, i){                                        
                    return (
                      
                           <Circle r={25} fill={{color:'white'}} stroke={{color:'black'}} strokeWidth={2} />
                      
                    );                
                }, this)} 
           </div>
       <div className="device-info">
       <font color="white">{this.state.devicesNum}</font>
       </div>
       <div className="text">
      <font color="white">Devices Online</font>
       </div>
       <div className="panel">
        <button
            type="button"
            className="notify-btn"
            ><font color="black">NOTIFY</font></button>
            <button
            type="button"
            className="logout-btn"
            onClick={this.logout.bind(this)}
            ><font color="white">LOG OUT</font></button>
       </div>
       </div>
       </div>
      </div>
    );
  }

}
export default Devices;


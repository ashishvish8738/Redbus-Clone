import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import Footer from './Footer'
import Logo from '../Assets/sideBus.jpg'
import CardBar from './CardBar';
import SortComponent from './SortComponent';
import Loading from './Loading';
import Navbar from './Navbar'
import FormInput from "./FormInput";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import LoginUi from 'LoginUi.js'
// import BookMySeat from './src/BookMySeat';
// import BookSeat from './src/BookSeat';

// import { Router } from 'express';
// import Home from "./components/Home"
// import Login from "./components/Login"
// import Signup from "./components/Signup"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { useState } from 'react';

// function App() {
//   return (
//     <div className='App'>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login/>}/>
//           <Route path="/signup" element={<Signup/>}/>
//           <Route path="/home" element={<Home/>}/>
//         </Routes>
//       </Router>
//     </div>
//   )
// }
//  {
//   const initialValues = { username: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };

//   return (
//     <div className="container">
//       {Object.keys(formErrors).length === 0 && isSubmit ? (
//         <div className="ui message success">Signed in successfully</div>
//       ) : (
//         <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
//       )}

//       <form onSubmit={handleSubmit}>
//         <h1>Login Form</h1>
//         <div className="ui divider"></div>
//         <div className="ui form">
//           <div className="field">
//             <label>Username</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formValues.username}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.username}</p>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={formValues.email}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.email}</p>
//           <div className="field">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.password}</p>
//           <button className="fluid ui button blue">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
//       }



const App = () => {
  // return(
  //   <BookMySeat/>
  // )

  // const App = () => {
    
    // return (
      
    // );


  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [isLoading,setIsLoading]=useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchedData();
  }, [])
  const fetchedData = async () => {
    setIsLoading(true);
    const res = await fetch("https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses");
    const jsonData = await res.json();
    setIsLoading(false);
    setData(jsonData);

  }

  const searchChange = (e) => {
    e.preventDefault();
    if (source && destination) {
      fetch(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}`)
        .then(res => res.json())
        .then(data => {
          setData(data);
          console.log(data);
        })
      
      setDestination("");
      setSource("");
    }

  }

  // sorting
  const sortDeperature = () => {
    
    const filteredData = [...data].sort((a, b) => {
      const timeA = a.departureTime.split(":");
      const timeB = b.departureTime.split(":");
    
      const hourA = parseInt(timeA[0]);
      const hourB = parseInt(timeB[0]);
      
      const minuteA = parseInt(timeA[1].slice(0, 2));
      const minuteB = parseInt(timeB[1].slice(0, 2));

      const periodA = timeA[1].slice(2);
      const periodB = timeB[1].slice(2);
    
      if (periodA === "AM" && periodB === "PM") {
        return -1;
      }
    
      if (periodA === "PM" && periodB === "AM") {
        return 1;
      }
    
      if (hourA === hourB) {
        if (minuteA === minuteB) {
          return 0;
        } else {
          return minuteA < minuteB ? -1 : 1;
        }
      }
    
      return hourA < hourB ? -1 : 1;
    });
    setData(filteredData);
    console.log(filteredData);

  }
  const sortArival = () => {
    
    const filteredData = [...data].sort((a, b) => {
      const timeA = a.arrivalTime.split(":");
      const timeB = b.arrivalTime.split(":");
    
      const hourA = parseInt(timeA[0]);
      const hourB = parseInt(timeB[0]);

      const minuteA = parseInt(timeA[1].slice(0, 2));
      const minuteB = parseInt(timeB[1].slice(0, 2));

      const periodA = timeA[1].slice(2);
      const periodB = timeB[1].slice(2);
    
      if (periodA === "AM" && periodB === "PM") {
        return -1;
      }
    
      if (periodA === "PM" && periodB === "AM") {
        return 1;
      }
    
      if (hourA === hourB) {
        if (minuteA === minuteB) {
          return 0;
        } else {
          return minuteA < minuteB ? -1 : 1;
        }
      }
    
      return hourA < hourB ? -1 : 1;
    });
    setData(filteredData);
    console.log(filteredData);

  }
 

    const sortRating = () => {
      alert("rating data not present API \n Hard coded value")
    }

    const sortPrice = () => {
      setData("");
      const filteredData = [...data].sort((item1, item2) => item1.ticketPrice - item2.ticketPrice);
      setData(filteredData);

      console.log(data);
    }



    return (
      <>
      <div className="red">
      <form>
        <FormInput/>
      </form>
      </div> 

      {/* <div className="app">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>
      </div>
       */}

      <Navbar />
        <div id="main">
          <form className='input-wrapper' onSubmit={searchChange}>
            <div className='single-InputField'>
              {/* from */}
              <label>FROM</label>
              <input type='text' value={source} onChange={(e) => setSource(e.target.value)} />
            </div>
            <div className='single-InputField arrow'>

              <div>⇆</div>
            </div>
            <div className='single-InputField'>
              {/* to */}
              <label>TO</label>
              <input type='text' value={destination} onChange={(e) => setDestination(e.target.value)} />
            </div>
            <div className='single-InputField'>
              <label>DATE</label>
              <input type='date' />
            </div>
            <button type='submit' >Search Buses</button>
          </form>

        </div>
        <div className='bus-svg'><img src={Logo}/></div>
        <div style={{ background: 'red', padding: '10px' }}>
          {!isLoading && <SortComponent sortDeperature={sortDeperature} sortRating={sortRating} sortPrice={sortPrice} sortArival={sortArival}/>}
          {isLoading ?  <Loading /> : (data.map((item, i) => <CardBar key={i} item={item} />)) }

          <Footer />
          
        </div>
      </>
    )
  };



  export default App;

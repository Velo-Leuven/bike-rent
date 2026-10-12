import { Routes, Route, Link, useParams } from "react-router-dom"
import React from "react";
import SecondhandDetails from "./pages/SecondhandDetails";
import LevDetails from "./pages/LevDetails";
import UcllDetails from "./pages/UcllDetails";
import Velo7Details from "./pages/Velo7Details";
import EbikeDetails from "./pages/EbikeDetails";
import VelokadeeDetails from "./pages/VelokadeeDetails";


const rentData = {

tweedehand:{
 title: "Tweedehandfiets / 2nd hand",
 imag: "/images/2dehand.jpg",
},

lev:{
  title: "Lev",
  imag: "/images/lev.jpg",
},

ucll:{
 title:"Blauwe / Blue UCLL",
 imag: "/images/ucll.jpg",
},
velo7:{
title:"Velo7",
imag: "/images/velo7.jpg",
},

ebike:{
  title:"Circulaire e-bike",
  imag:"/images/swugo.jpg", 
},
velokadee:{
title:"VeloKadee",
imag: "/images/kadee.jpg",

},
};
function Home(){
 return (
  <main className="home">
   <div className="container">

    <div className="logotitle">
      <img src="logo.jpg" alt="Bike Rent" />


    </div>

    <h1>Bike Rent</h1>

    <p className="intro"> Choose which bike you would like to rent:</p>

    <div className="rent-grid">
    {Object.entries(rentData).map(([id,item])=>(

    <Link
     key={id}
     to={`/rent/${id}`}
     className="rent-card"
    >
      <h2>{item.title}</h2>
      <div className="card-imag">
       <img src={item.imag} alt={item.title}/>
      </div>
      

     <button className="card-button">
  Open →
</button>
    
    
    </Link>
 ) ) }
 </div>

 </div>

</main>

);
}


function RentPage(){
const {topic}= useParams();
const item= rentData[topic];

if (!item) {

  return(
  <main className="page">
 <div className="container">
<h1>Page not found</h1>

<Link to="/" className="back-button">← Back</Link>
 </div>
  </main>
  );
}


if (item.title === "Lev") {

return(
<main className="page">
<div className="container">

<Link to="/" className="back-link">
← Back
</Link>
<div className="rent-content">
<div className="page-imag">
<img src={item.imag} alt={item.title}/>
</div>
<h1>{item.title}</h1>


<Link to="/LevDetails" className="details-button">
Bike Details ⤴ 
</Link>


  <table className="rental-table">
  <thead>
    <tr>
      <th colSpan="2" className="table-title">
        Periode huur / Rental period
      </th>
    </tr>

    <tr>
      <th>Maanden / Months</th>
      <th>Studenten / Students ( KULeuven )</th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1 maand / month</td>
      <td className="price">€ 30 </td>
      
    </tr>
<tr>
      <td>2 maanden / months</td>
      <td className="price">€ 40 </td>
      
    </tr>

    <tr>
      <td>3 maanden / months</td>
      <td className="price">€ 50 </td>
      
    </tr>
    <tr>
      <td>4 maanden / months</td>
      <td className="price">€ 60 </td>
     
    </tr>
    <tr>
      <td>5 maanden / months</td>
      <td className="price">€ 70 </td>
     
    </tr>
    <tr>
      <td>6 maanden / months</td>
      <td className="price">€ 80 </td>
      
    </tr>
    <tr>
      <td>7-12 maanden / months</td>
      <td className="price">€ 100 </td>
     
    </tr>
    <tr>
       <td className="deposit">Waarborg / Deposit</td>

   <td colSpan={1}>€ 170 </td>
    </tr>
  </tbody>
</table>


<table className="rental-table">
  <thead>
    <tr>
      <th colSpan="2" className="table-title">
        Te laat teruggebracht / Late return
      </th>
    </tr>

    <tr>
      <th>Maanden / Months</th>
      <th>Prijs / Price</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Na 14 dagen / After 14 days</td>
      <td className="price">€ 20 </td>
    </tr>
    <tr>
      <td>Na 1 maand / After 1 month</td>
      <td className="price">€ 35 </td>
    </tr>
    <tr>
      <td>Na 2 maanden / After 2 months</td>
      <td className="price">€ 50 </td>
    </tr>
    <tr>
      <td>Na 3 maanden / After 3 months</td>
      <td className="price">€ 70 </td>
    </tr>
    <tr>
      <td>Na 6 maanden / After 6 months</td>
      <td className="price">€ 95 </td>
    </tr>
    <tr>
      <td>Na 12 maanden / After 12 months</td>
      <td className="price">€ 170 </td>
    </tr>
  </tbody>
</table>

<div className="important-div">

              <p className="important-text">
                ⚠️ Important
              </p>

              <p className="p-text">
                Fietswissel / Bike swap (eerste 2 weken gratis / first 2 weeks for free) <br /> <br />
                later (5 euro)
              </p>

            </div>


  
             
<div className="button-container">
<Link to="/" className="back-button">
← Back to Bike Rent
</Link>


<Link to="https://klantenportaal.velo.be/web/login?redirect=%2Fmy%2Fhome%3F" className="register-button">
Inschrijven / Register
</Link>
</div>
</div>



</div>




</main>




);
}


else if(item.title === "Tweedehandfiets / 2nd hand") {

return(
<main className="page">
<div className="container">

<Link to="/" className="back-link">
← Back
</Link>
<div className="rent-content">
<div className="page-imag">
<img src={item.imag} alt={item.title}/>
</div>
<h1>{item.title}</h1>


<Link to="/SecondhandDetails" className="details-button">
Bike Details ⤴ 
</Link>


  <table className="rental-table">
  <thead>
    <tr>
      <th colSpan="5" className="table-title">
        Periode huur / Rental period
      </th>
    </tr>

    <tr>
      <th>Maanden / Months</th>
      <th>KULeuven</th>
      <th>UCLL</th>
      <th>Andere studenten / Other students</th>
      <th>Niet Studenten / Non students</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1 maand / month</td>
      <td className="price">€ 20 </td>
      <td className="price"> </td>
      <td className="price"> € 20</td>
      <td className="price"> € 30</td>
    </tr>
<tr>
      <td>2 maanden / months</td>
      <td className="price">€ 30 </td>
      <td className="price"> </td>
      <td className="price"> € 30</td>
      <td className="price"> € 40</td>
    </tr>

    <tr>
      <td>3 maanden / months</td>
      <td className="price">€ 40 </td>
      <td className="price"> </td>
      <td className="price"> € 40</td>
      <td className="price"> € 50</td>
    </tr>
    <tr>
      <td>4 maanden / months</td>
      <td className="price">€ 50 </td>
      <td className="price"> </td>
      <td className="price"> € 50</td>
      <td className="price"> € 60</td>
    </tr>
    <tr>
      <td>5 maanden / months</td>
      <td className="price">€ 60 </td>
      <td className="price"> </td>
      <td className="price"> € 60</td>
      <td className="price"> € 70</td>
    </tr>
    <tr>
      <td>6 maanden / months</td>
      <td className="price">€ 70 </td>
      <td className="price"> </td>
      <td className="price"> € 70</td>
      <td className="price"> € 80</td>
    </tr>
    <tr>
      <td>7-12 maanden / months</td>
      <td className="price">€ 90 </td>
      <td className="price"> € 35</td>
      <td className="price"> € 90</td>
      <td className="price"> € 110</td>
    </tr>
    <tr>
       <td className="deposit">Waarborg / Deposit</td>

   <td colSpan={4}>€ 100 </td>
    </tr>
  </tbody>
</table>


<table className="rental-table">
  <thead>
    <tr>
      <th colSpan="2" className="table-title">
        Te laat teruggebracht / Late return
      </th>
    </tr>

    <tr>
      <th>Maanden / Months</th>
      <th>Prijs / Price</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Na 14 dagen / After 14 days</td>
      <td className="price">€ 20 </td>
    </tr>
    <tr>
      <td>Na 1 maand / After 1 month</td>
      <td className="price">€ 35 </td>
    </tr>
    <tr>
      <td>Na 2 maanden / After 2 months</td>
      <td className="price">€ 50 </td>
    </tr>
    <tr>
      <td>Na 3 maanden / After 3 months</td>
      <td className="price">€ 70 </td>
    </tr>
    <tr>
      <td>Na 6 maanden / After 6 months</td>
      <td className="price">€ 85 </td>
    </tr>
    <tr>
      <td>Na 12 maanden / After 12 months</td>
      <td className="price">€ 100 </td>
    </tr>
  </tbody>
</table>

<div className="important-div">

              <p className="important-text">
                ⚠️ Important
              </p>

              <p className="p-text">
                Fietswissel / Bike swap (eerste 2 weken gratis / first 2 weeks for free) <br /> <br />
                later (5 euro)
              </p>

            </div>


  
             
<div className="button-container">
<Link to="/" className="back-button">
← Back to Bike Rent
</Link>


<Link to="https://klantenportaal.velo.be/web/login?redirect=%2Fmy%2Fhome%3F" className="register-button">
Inschrijven / Register
</Link>
</div>
</div>



</div>




</main>




);
}


else if(item.title === "Blauwe / Blue UCLL") {

return(
<main className="page">
<div className="container">

<Link to="/" className="back-link">
← Back
</Link>
<div className="rent-content">
<div className="page-imag">
<img src={item.imag} alt={item.title}/>
</div>
<h1>{item.title}</h1>


<Link to="/UcllDetails" className="details-button">
Bike Details ⤴ 
</Link>


 <table className="rental-table">
  <thead>
    <tr>
      <th colSpan="2" className="table-title">
        Periode huur / Rental period
      </th>
    </tr>

    <tr>
      <th>Maanden / Months</th>
      <th>Studenten / Students ( UCLL )</th>
      
    </tr>
  </thead>

  <tbody>
   
    <tr>
      <td>7-12 maanden / months</td>
      <td className="price">€ 65 </td>
     
    </tr>
    <tr>
       <td className="deposit">Waarborg / Deposit</td>

   <td colSpan={1}>€ 170 </td>
    </tr>
  </tbody>
</table>


<table className="rental-table">
  <thead>
    <tr>
      <th colSpan="2" className="table-title">
        Te laat teruggebracht / Late return
      </th>
    </tr>

    <tr>
      <th>Maanden / Months</th>
      <th>Prijs / Price</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Na 14 dagen / After 14 days</td>
      <td className="price">€ 20 </td>
    </tr>
    <tr>
      <td>Na 1 maand / After 1 month</td>
      <td className="price">€ 35 </td>
    </tr>
    <tr>
      <td>Na 2 maanden / After 2 months</td>
      <td className="price">€ 50 </td>
    </tr>
    <tr>
      <td>Na 3 maanden / After 3 months</td>
      <td className="price">€ 70 </td>
    </tr>
    <tr>
      <td>Na 6 maanden / After 6 months</td>
      <td className="price">€ 95 </td>
    </tr>
    <tr>
      <td>Na 12 maanden / After 12 months</td>
      <td className="price">€ 170 </td>
    </tr>
  </tbody>
</table>

<div className="important-div">

              <p className="important-text">
                ⚠️ Important
              </p>

              <p className="p-text">
                Fietswissel / Bike swap (eerste 2 weken gratis / first 2 weeks for free) <br /> <br />
                later (5 euro)
              </p>

            </div>


  
             
<div className="button-container">
<Link to="/" className="back-button">
← Back to Bike Rent
</Link>


<Link to="https://klantenportaal.velo.be/web/login?redirect=%2Fmy%2Fhome%3F" className="register-button">
Inschrijven / Register
</Link>
</div>
</div>



</div>




</main>




);
}


else if (item.title === "Velo7") {

return(
<main className="page">
<div className="container">

<Link to="/" className="back-link">
← Back
</Link>
<div className="rent-content">
<div className="page-imag">
<img src={item.imag} alt={item.title}/>
</div>
<h1>{item.title}</h1>


<Link to="/Velo7Details" className="details-button">
Bike Details ⤴ 
</Link>


  <table className="rental-table">
  <thead>
    <tr>
      <th colSpan="2" className="table-title">
        Periode huur / Rental period
      </th>
    </tr>

    <tr>
      <th>Maanden / Months</th>
      <th>Studenten / Students ( KULeuven )</th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1 maand / month</td>
      <td className="price">€ 30 </td>
      
    </tr>
<tr>
      <td>2 maanden / months</td>
      <td className="price">€ 40 </td>
      
    </tr>

    <tr>
      <td>3 maanden / months</td>
      <td className="price">€ 50 </td>
      
    </tr>
    <tr>
      <td>4 maanden / months</td>
      <td className="price">€ 60 </td>
     
    </tr>
    <tr>
      <td>5 maanden / months</td>
      <td className="price">€ 70 </td>
     
    </tr>
    <tr>
      <td>6 maanden / months</td>
      <td className="price">€ 80 </td>
      
    </tr>
    <tr>
      <td>7-12 maanden / months</td>
      <td className="price">€ 100 </td>
     
    </tr>
    <tr>
       <td className="deposit">Waarborg / Deposit</td>

   <td colSpan={1}>€ 170 </td>
    </tr>
  </tbody>
</table>


<table className="rental-table">
  <thead>
    <tr>
      <th colSpan="2" className="table-title">
        Te laat teruggebracht / Late return
      </th>
    </tr>

    <tr>
      <th>Maanden / Months</th>
      <th>Prijs / Price</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Na 14 dagen / After 14 days</td>
      <td className="price">€ 20 </td>
    </tr>
    <tr>
      <td>Na 1 maand / After 1 month</td>
      <td className="price">€ 35 </td>
    </tr>
    <tr>
      <td>Na 2 maanden / After 2 months</td>
      <td className="price">€ 50 </td>
    </tr>
    <tr>
      <td>Na 3 maanden / After 3 months</td>
      <td className="price">€ 70 </td>
    </tr>
    <tr>
      <td>Na 6 maanden / After 6 months</td>
      <td className="price">€ 95 </td>
    </tr>
    <tr>
      <td>Na 12 maanden / After 12 months</td>
      <td className="price">€ 170 </td>
    </tr>
  </tbody>
</table>

<div className="important-div">

              <p className="important-text">
                ⚠️ Important
              </p>

              <p className="p-text">
                Fietswissel / Bike swap (eerste 2 weken gratis / first 2 weeks for free) <br /> <br />
                later (5 euro)
              </p>

            </div>


  
             
<div className="button-container">
<Link to="/" className="back-button">
← Back to Bike Rent
</Link>


<Link to="https://klantenportaal.velo.be/web/login?redirect=%2Fmy%2Fhome%3F" className="register-button">
Inschrijven / Register
</Link>
</div>
</div>



</div>




</main>




);
}

else if(item.title === "Circulaire e-bike") {

return(
<main className="page">
<div className="container">

<Link to="/" className="back-link">
← Back
</Link>
<div className="rent-content">
<div className="page-imag">
<img src={item.imag} alt={item.title}/>
</div>
<h1>{item.title}</h1>


<Link to="/EbikeDetails" className="details-button">
Bike Details ⤴ 
</Link>


  <table className="rental-table">
  <thead>
    <tr>
      <th colSpan="5" className="table-title">
        Periode huur / Rental period
      </th>
    </tr>

    <tr>
      <th>Maanden / Months</th>
      <th>KULeuven</th>
      <th>UCLL</th>
      <th>Andere studenten / Other students</th>
      <th>Niet Studenten / Non students</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1 maand / month</td>
      <td className="price" colSpan={4}>€ 50 </td>
      
    </tr>


    
    
    <tr>
       <td className="deposit">Waarborg / Deposit</td>

   <td colSpan={4}>€ 170 </td>
    </tr>
  </tbody>
</table>


<table className="rental-table">
  <thead>
    <tr>
      <th colSpan="2" className="table-title">
        Te laat teruggebracht / Late return
      </th>
    </tr>

    <tr>
      <th>Maanden / Months</th>
      <th>Prijs / Price</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Na 14 dagen / After 14 days</td>
      <td className="price">€ 50 </td>
    </tr>
    
  </tbody>
</table>

<div className="important-div">

              <p className="important-text">
                ⚠️ Important
              </p>

              <p className="p-text">
                Fietswissel / Bike swap (eerste 2 weken gratis / first 2 weeks for free) <br /> <br />
                later (5 euro)
              </p>

            </div>


  
             
<div className="button-container">
<Link to="/" className="back-button">
← Back to Bike Rent
</Link>


<Link to="https://klantenportaal.velo.be/web/login?redirect=%2Fmy%2Fhome%3F" className="register-button">
Inschrijven / Register
</Link>
</div>
</div>



</div>




</main>




);
}

else if(item.title === "VeloKadee") {

return(
<main className="page">
<div className="container">

<Link to="/" className="back-link">
← Back
</Link>
<div className="rent-content">
<div className="page-imag">
<img src={item.imag} alt={item.title}/>
</div>
<h1>{item.title}</h1>


<Link to="/VelokadeeDetails" className="details-button">
Bike Details ⤴ 
</Link>


  <table className="rental-table">
  <thead>
    <tr>
      <th colSpan="3" className="table-title">
        Periode huur / Rental period
      </th>
    </tr>

    <tr>
      <th>Maanden / Months</th>
      <th>Prijs / Price</th>
      <th>Prijs met UITPAS / <br />Price with UITPAS</th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>12 maanden / months</td>
      <td className="price" >€ 70 </td>
       <td className="price" >€ 14 </td>
      
    </tr>


    
    
    
  </tbody>
</table>




<div className="important-div">

              <p className="important-text">
                ⚠️ Important
              </p>

               <p className="p-text">
              Tot 12-13 jaar / Until 12-13 years old  <br /> <br />
              
                Fietswissel / Bike swap ( gratis /  free) 
              </p>

            </div>


  
             
<div className="button-container">
<Link to="/" className="back-button">
← Back to Bike Rent
</Link>


<Link to="https://klantenportaal.velo.be/web/login?redirect=%2Fmy%2Fhome%3F" className="register-button">
Inschrijven / Register
</Link>
</div>
</div>



</div>




</main>




);
}









}




function App(){

return (

<Routes>
<Route path="/" element={<Home />}/>
<Route path="/rent/:topic" element={<RentPage/>}/>
<Route path="/SecondhandDetails" element={<SecondhandDetails />}/>
<Route path="/LevDetails" element={<LevDetails />}/>
<Route path="/UcllDetails" element={<UcllDetails />}/>
<Route path="/Velo7Details" element={<Velo7Details />}/>
<Route path="/EbikeDetails" element={<EbikeDetails />}/>
<Route path="/VelokadeeDetails" element={<VelokadeeDetails />}/>

</Routes>

  );


}
export default App

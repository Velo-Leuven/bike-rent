import React from "react";
import { Link } from "react-router-dom";


function SecondhandDetails(){
return(

<div className="page">
<div className="container">



<table className="td-table">
  <thead>
    <tr>
      <th colSpan="2" className="table-title">
        Tweedehandfiets / 2nd hand
      </th>
    </tr>
  
   
  </thead>

  <tbody>
    <tr>
      <td> Slot / Lock</td>
      <td className="td-imag"><img src="images/details/slot2.jpg" alt="slot2" /> </td>
    </tr>
    <tr>
      <td>Remmen / Brakes</td>
      <td className="td-imag"> <img src="images/details/rem1.jpg" alt="rem1" /></td>
    </tr>
    <tr>
      <td>Lichten / Lights</td>
      <td className="td-imag"> <img src="images/details/light2.jpg" alt="light2" /></td>
    </tr>
    <tr>
      <td>Versnelling / Gear (7)</td>
      <td className="td-imag"> <img src="images/details/versnelling1.png" alt="versnelling" /></td>
    </tr>
    
  </tbody>
</table>

<Link to="/rent/tweedehand" className="back-button">
← Back 
</Link>

</div>

</div>


);

}

export default SecondhandDetails;
import React from "react";
import { Link } from "react-router-dom";


function VelokadeeDetails(){
return(

<div className="page">
<div className="container">



<table className="td-table">
  <thead>
    <tr>
      <th colSpan="2" className="table-title">
        Velokadee
      </th>
    </tr>
  
   
  </thead>

  <tbody>
    <tr>
      <td> Slot / Lock</td>
      <td className="td-imag"><img src="images/details/slot3.jpg" alt="slot3" /> </td>
    </tr>
    <tr>
      <td>Remmen / Brakes</td>
      <td className="td-imag"> <img src="images/details/rem1.jpg" alt="rem1" /></td>
    </tr>
    <tr>
      <td>Lichten / Lights <h6>(Alleen de 20 en 24 inch / <br/>Only the 20 and 24 inch)</h6></td>
      <td className="td-imag"> <img src="images/details/light1.jpg" alt="light1" /> </td>
    </tr>
    <tr>
      <td>Versnelling / Gear (3) <h6>(Alleen de 20 en 24 inch / <br/>Only the 20 and 24 inch)</h6></td>
      <td className="td-imag"> <img src="images/details/versnelling2.jpg" alt="versnelling2" /></td>
    </tr>
    
  </tbody>
</table>

<Link to="/rent/velokadee" className="back-button">
← Back 
</Link>

</div>

</div>


);

}

export default VelokadeeDetails;
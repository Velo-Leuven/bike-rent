import React from "react";
import { Link } from "react-router-dom";


function UcllDetails(){
return(

<div className="page">
<div className="container">



<table className="td-table">
  <thead>
    <tr>
      <th colSpan="2" className="table-title">
        UCLL
      </th>
    </tr>
  
   
  </thead>

  <tbody>
    <tr>
      <td> Slot / Lock</td>
      <td className="td-imag"><img src="images/details/slot1.jpg" alt="slot1" /> </td>
    </tr>
    <tr>
      <td>Remmen / Brakes</td>
      <td className="td-imag"> <img src="images/details/rem1.jpg" alt="rem1" /><img src="images/details/rem2.png" alt="rem2" /></td>
    </tr>
    <tr>
      <td>Lichten / Lights</td>
      <td className="td-imag"> <img src="images/details/light1.jpg" alt="light1" /></td>
    </tr>
    <tr>
      <td>Versnelling / Gear (3)</td>
      <td className="td-imag"> <img src="images/details/versnelling2.jpg" alt="versnelling2" /></td>
    </tr>
    
  </tbody>
</table>

<Link to="/rent/ucll" className="back-button">
← Back 
</Link>

</div>

</div>


);

}

export default UcllDetails;
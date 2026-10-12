import React from "react";
import { Link } from "react-router-dom";


function Velo7Details(){
return(

<div className="page">
<div className="container">



<table className="td-table">
  <thead>
    <tr>
      <th colSpan="2" className="table-title">
        Velo7
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
      <td className="td-imag"> <img src="images/details/rem1.jpg" alt="rem1" /></td>
    </tr>
    <tr>
      <td>Lichten / Lights</td>
      <td className="td-imag"> <img src="images/details/light1.jpg" alt="light1" /></td>
    </tr>
    <tr>
      <td>Versnelling / Gear (7)</td>
      <td className="td-imag"> <img src="images/details/versnelling1.png" alt="versnelling1" /></td>
    </tr>
    
  </tbody>
</table>

<Link to="/rent/velo7" className="back-button">
← Back 
</Link>

</div>

</div>


);

}

export default Velo7Details;
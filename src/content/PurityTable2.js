import React from 'react';

import {
  Table,
  Input
} from "reactstrap";

function PurityTable({product}) {
  let details, quality, quality2, adulteration;

  if(product) {
    details = product.details;
    quality = details.quality;
    quality2 = details.quality2;
    adulteration = details.adulteration;
  }
  return <div id="purity-table">

    <Table 
      // striped 
      style={{backgroundColor: 'white', marginTop: 20}}
      className="table-condensed"
    >
      <thead>
        <tr >
          <th style={{verticalAlign: 'middle'}}>Test</th>
          {/* <th style={{verticalAlign: 'middle'}}>Time</th> */}
          <th style={{verticalAlign: 'middle'}}>Colour Change</th>
          {/* <th style={{verticalAlign: 'middle'}}>Observation</th> */}
          {/* <th style={{verticalAlign: 'middle'}}>Quality</th> */}
          <th colSpan={2} style={{textAlign: 'center'}}>
            Observation & interpretation after testing
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <div>Good</div>
              <div>Poor</div>
            </div>
          </th>
        </tr>
      </thead>
        
      <tbody>
        <tr>
          <td style={{verticalAlign: 'middle'}}>MQ-1</td>
          
          <td 
            style={{
              background: 'linear-gradient(90deg, purple, #fd4363)', 
              color: 'white', 
              paddingLeft: 10
            }}
          >
            <div style={{paddingLeft: 20}}>
              Purple to Pink
            </div>
          </td>
          {/* <td>Less than 25 min</td> */}
          {/* <td>Strip / Milk</td> */}
          <td 
            style={{ 
              paddingLeft: 10,
              textAlign: 'center'
            }}
          >
            <div style={{paddingLeft: 20}}>
              <Input checked={quality2.mq1 === 'above 25'} type="checkbox" /> More than 25 Min
            </div>
          </td>
          <td 
            style={{ 
              paddingLeft: 10,
              textAlign: 'center'
            }}
          >
            <div style={{paddingLeft: 20}}>
              <Input checked={quality2.mq1 === 'below 25'} type="checkbox" /> Less than 25 Min
            </div>
          </td>
        </tr>

        <tr>
          <td style={{verticalAlign: 'middle'}}>MQ-1</td>
          
          <td 
            style={{
              background: 'linear-gradient(90deg, darkblue, transparent)', 
              color: 'white', 
              paddingLeft: 10
            }}
          >
            <div style={{paddingLeft: 20}}>
              Blue to Colourless
            </div>
          </td>
          <td 
            style={{ 
              paddingLeft: 10,
              textAlign: 'center'
            }}
          >
            <div style={{paddingLeft: 20}}>
              <Input checked={quality2.mq1 === 'above 25'} type="checkbox" /> More than 25 Min
            </div>
          </td>
          <td 
            style={{ 
              paddingLeft: 10,
              textAlign: 'center'
            }}
          >
            <div style={{paddingLeft: 20}}>
              <Input checked={quality2.mq1 === 'below 25'} type="checkbox" /> Less than 25 Min
            </div>
          </td>
        </tr>
        
        </tbody>
      </Table>
  </div>
}

export default PurityTable;
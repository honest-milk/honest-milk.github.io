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
      // conde
      className="table-condensed"
      style={{backgroundColor: 'white'}}
    >
      <thead>
        <tr >
          <th style={{verticalAlign: 'middle'}}>Adulteration Test</th>
          <th style={{verticalAlign: 'middle'}}>Why It is Added</th>
          <th style={{verticalAlign: 'middle'}}>Color Change to be observed in</th>
          <th colSpan={2}>
            Observation & interpretation after testing
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <div>Natural</div>
              <div>Adulterated</div>
            </div>
          </th>
        </tr>
        
      </thead>
      <tbody>
        
        <tr>
          <td>Boric Acid</td>
          <td>Added as a preservative to increase the shelf life of milk</td>
          <td>Strip</td>
          <td style={{backgroundColor: 'rgb(255 199 95)', color: '', paddingLeft: 10}}>
            <div style={{paddingLeft: 20, minWidth: 120}}>
              <Input checked={adulteration.boric.natural === 'no-change'} type="checkbox" /> No Change
            </div>
          </td>
          <td style={{backgroundColor: '#b67600', color: 'white', paddingLeft: 10}}>
            <div style={{paddingLeft: 20, minWidth: 120}}>
              <Input checked={adulteration.boric.adulterated === 'deep-orange'} type="checkbox" /> Deep Orange
            </div>
          </td>
        </tr>
        
        <tr>
          <td>Urea</td>
          <td>Added as an adulterant to increase fat content in milk</td>
          <td>Strip</td>
          <td style={{backgroundColor: '', color: '', paddingLeft: 10}}>
            <div style={{paddingLeft: 20, minWidth: 120}}>
              <Input checked={adulteration.urea.natural === 'no-change'} type="checkbox" /> No Change
            </div>
          </td>
          <td style={{backgroundColor: 'yellow', color: 'black', paddingLeft: 10}}>
            <div style={{paddingLeft: 20, minWidth: 120}}>
              <Input checked={adulteration.urea.adulterated === 'yellow'} type="checkbox" /> Yellow
            </div>
          </td>
        </tr>
        
        <tr>
          <td>Starch</td>
          <td>Flour from wheat, rice and corn is commonly added to increase the fat content in milk</td>
          <td>Milk</td>
          <td style={{backgroundColor: '', color: '', paddingLeft: 10}}>
            <div style={{paddingLeft: 20, minWidth: 120}}>
              <Input checked={adulteration.starch.natural === 'no-change'} type="checkbox" /> No Change
            </div>
          </td>
          <td style={{backgroundColor: 'blue', color: 'white', paddingLeft: 10}}>
            <div style={{paddingLeft: 20, minWidth: 120}}>
              <Input type="checkbox" checked={adulteration.starch.adulterated === 'blue-sediments'} /> Blue Sediments
            </div>
          </td>
        </tr>
        
        <tr>
          <td style={{verticalAlign: 'middle'}}>Detergent or Pulverised Soap</td>
          <td style={{verticalAlign: 'middle'}}>Generally used to prepare synthetic milk and added to increase fat content of milk</td>
          <td style={{verticalAlign: 'middle'}}>Strip / Milk</td>
          <td style={{backgroundColor: '#fefe95', color: '', paddingLeft: 10, verticalAlign: 'middle'}}>
            <div style={{paddingLeft: 20, minWidth: 120}}>
              <Input checked={adulteration.detergent.natural === 'light-yellow'} type="checkbox" /> Light Yellow
            </div>
          </td>
          <td style={{textAlign: 'left', padding: 0, paddingLeft: 10}}>
            <div style={{backgroundColor: 'blue', marginLeft: '-10px', color: 'white'}}>
              <div style={{padding: 10, paddingLeft: 30, minWidth: 120}}>
              <Input checked={adulteration.detergent.adulterated === 'blue'} type="checkbox" /> Blue
              </div>
            </div>
            
            <div style={{backgroundColor: 'yellow', marginLeft: '-10px', color: 'black'}}>
              <div style={{padding: 10, paddingLeft: 30, minWidth: 120}}>
              <Input checked={adulteration.detergent.adulterated === 'yellow'} type="checkbox" /> Yellow
              </div>
            </div>
            
            <div style={{backgroundColor: 'lightgreen', marginLeft: '-10px', color: 'black'}}>
              <div style={{padding: 10, paddingLeft: 30, minWidth: 120}}>
              <Input checked={adulteration.detergent.adulterated === 'green'} type="checkbox" /> Green
              </div>
            </div>
          </td>
        </tr>
        
        <tr>
          <td>Hydrogen Peroxide</td>
          <td>Added as a preservative to increase the shelf life of milk</td>
          <td>Strip / Milk</td>
          <td style={{backgroundColor: '', color: '', paddingLeft: 10}}>
            <div style={{paddingLeft: 20, minWidth: 120}}>
              <Input checked={adulteration.peroxide.natural === 'no-change'} type="checkbox" /> No Change
            </div>
          </td>
          <td style={{backgroundColor: 'lightyellow', color: 'black', paddingLeft: 10}}>
            <div style={{paddingLeft: 20, minWidth: 120}}>
              <Input checked={adulteration.peroxide.adulterated === 'dusty-yellow'} type="checkbox" /> Dusty Yellow
            </div>
          </td>
        </tr>
        
        <tr>
          <td>Neutraliser</td>
          <td>Added in milk to prevent curdling/sourness in milk</td>
          <td>Strip / Milk</td>
          <td style={{backgroundColor: '#efd4a1', color: '', paddingLeft: 10}}>
            <div style={{paddingLeft: 20, minWidth: 120}}>
              <Input checked={adulteration.neutraliser.natural === 'light-orange'} type="checkbox" /> Light Orange
            </div>
          </td>
          <td style={{backgroundColor: 'lightpink', color: 'black', paddingLeft: 10}}>
            <div style={{paddingLeft: 20, minWidth: 120}}>
              <Input checked={adulteration.neutraliser.adulterated === 'light-pink'} type="checkbox" /> Light Pink
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
}

export default PurityTable;
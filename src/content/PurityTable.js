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
          <td>Strip</td>
          <td style={{backgroundColor: 'rgb(255 199 95)', color: '', paddingLeft: 10}}>
            <div style={{paddingLeft: 20}}>
              <Input checked={adulteration.boric.natural === 'no-change'} type="checkbox" /> No Change
            </div>
          </td>
          <td style={{backgroundColor: '#b67600', color: 'white', paddingLeft: 10}}>
            <div style={{paddingLeft: 20}}>
              <Input checked={adulteration.boric.adulterated === 'deep-orange'} type="checkbox" /> Deep Orange
            </div>
          </td>
        </tr>
        
        <tr>
          <td>Urea</td>
          <td>Strip</td>
          <td style={{backgroundColor: '', color: '', paddingLeft: 10}}>
            <div style={{paddingLeft: 20}}>
              <Input checked={adulteration.urea.natural === 'no-change'} type="checkbox" /> No Change
            </div>
          </td>
          <td style={{backgroundColor: 'yellow', color: 'black', paddingLeft: 10}}>
            <div style={{paddingLeft: 20}}>
              <Input checked={adulteration.urea.adulterated === 'yellow'} type="checkbox" /> Yellow
            </div>
          </td>
        </tr>
        
        <tr>
          <td>Starch</td>
          <td>Milk</td>
          <td style={{backgroundColor: '', color: '', paddingLeft: 10}}>
            <div style={{paddingLeft: 20}}>
              <Input checked={adulteration.starch.natural === 'no-change'} type="checkbox" /> No Change
            </div>
          </td>
          <td style={{backgroundColor: 'blue', color: 'white', paddingLeft: 10}}>
            <div style={{paddingLeft: 20}}>
              <Input type="checkbox" checked={adulteration.starch.adulterated === 'blue-sediments'} /> Blue Sediments
            </div>
          </td>
        </tr>
        
        <tr>
          <td style={{verticalAlign: 'middle'}}>Detergent or Pulverised Soap</td>
          <td style={{verticalAlign: 'middle'}}>Strip / Milk</td>
          <td style={{backgroundColor: '#fefe95', color: '', paddingLeft: 10, verticalAlign: 'middle'}}>
            <div style={{paddingLeft: 20}}>
              <Input checked={adulteration.detergent.natural === 'light-yellow'} type="checkbox" /> Light Yellow
            </div>
          </td>
          <td style={{textAlign: 'left', padding: 0, paddingLeft: 10}}>
            <div style={{backgroundColor: 'blue', marginLeft: '-10px', color: 'white'}}>
              <div style={{padding: 10, paddingLeft: 30}}>
              <Input checked={adulteration.detergent.adulterated === 'blue'} type="checkbox" /> Blue
              </div>
            </div>
            
            <div style={{backgroundColor: 'yellow', marginLeft: '-10px', color: 'black'}}>
              <div style={{padding: 10, paddingLeft: 30}}>
              <Input checked={adulteration.detergent.adulterated === 'yellow'} type="checkbox" /> Yellow
              </div>
            </div>
            
            <div style={{backgroundColor: 'lightgreen', marginLeft: '-10px', color: 'black'}}>
              <div style={{padding: 10, paddingLeft: 30}}>
              <Input checked={adulteration.detergent.adulterated === 'green'} type="checkbox" /> Green
              </div>
            </div>
          </td>
        </tr>
        
        <tr>
          <td>Hydrogen Peroxide</td>
          <td>Strip / Milk</td>
          <td style={{backgroundColor: '', color: '', paddingLeft: 10}}>
            <div style={{paddingLeft: 20}}>
              <Input checked={adulteration.peroxide.natural === 'no-change'} type="checkbox" /> No Change
            </div>
          </td>
          <td style={{backgroundColor: 'lightyellow', color: 'black', paddingLeft: 10}}>
            <div style={{paddingLeft: 20}}>
              <Input checked={adulteration.peroxide.adulterated === 'dusty-yellow'} type="checkbox" /> Dusty Yellow
            </div>
          </td>
        </tr>
        
        <tr>
          <td>Neutraliser</td>
          <td>Strip / Milk</td>
          <td style={{backgroundColor: '#efd4a1', color: '', paddingLeft: 10}}>
            <div style={{paddingLeft: 20}}>
              <Input checked={adulteration.neutraliser.natural === 'light-orange'} type="checkbox" /> Light Orange
            </div>
          </td>
          <td style={{backgroundColor: 'lightpink', color: 'black', paddingLeft: 10}}>
            <div style={{paddingLeft: 20}}>
              <Input checked={adulteration.neutraliser.adulterated === 'light-pink'} type="checkbox" /> Light Pink
            </div>
          </td>
        </tr>
      </tbody>
    </Table>

    <Table 
      // striped 
      style={{backgroundColor: 'white', marginTop: 20}}
      className="table-condensed"
    >
      <thead>
        <tr >
          <th style={{verticalAlign: 'middle'}}>Test</th>
          <th style={{verticalAlign: 'middle'}}>Time</th>
          <th style={{verticalAlign: 'middle'}}>Colour change in</th>
          <th style={{verticalAlign: 'middle'}}>Observation</th>
          <th style={{verticalAlign: 'middle'}}>Quality</th>
        </tr>
      </thead>
        
      <tbody>
        <tr>
          <td rowSpan={2} style={{verticalAlign: 'middle'}}>MQ-1</td>
          <td>Less than 25 min</td>
          <td>Strip / Milk</td>
          <td 
            style={{
              background: 'linear-gradient(90deg, purple, #fd4363)', 
              color: 'white', 
              paddingLeft: 10
            }}
          >
            <div style={{paddingLeft: 20}}>
              <Input checked={quality2.mq1 === 'below 25'} type="checkbox" /> Purple to Pink
            </div>
          </td>
          <td style={{
            // backgroundColor: 'darkred', 
            color: 'black', 
            paddingLeft: 10
          }}
        >
            Poor
          </td>
        </tr>
        
        <tr>
          <td>More than 25 min</td>
          <td>Strip / Milk</td>
          <td 
            style={{
              background: 'linear-gradient(90deg, purple, #fd4363)', 
              color: 'white', 
              paddingLeft: 10
            }}
          >
            <div style={{paddingLeft: 20}}>
              <Input checked={quality2.mq1 === 'above 25'} type="checkbox" /> Purple to Pink
            </div>
          </td>
          <td style={{
            // backgroundColor: 'darkgreen', 
            color: 'black', 
            paddingLeft: 10
          }}
        >
            Good
          </td>
        </tr>

        <tr>
          <td rowSpan={2} style={{verticalAlign: 'middle'}}>MQ-2</td>
          <td>Less than 25 min</td>
          <td>Strip / Milk</td>
          <td 
            style={{
              background: 'linear-gradient(90deg, darkblue, transparent)', 
              color: 'white', 
              paddingLeft: 10
            }}
          >
            <div style={{paddingLeft: 20}}>
              <Input checked={quality2.mq2 === 'below 25'} type="checkbox" /> Blue to Colourless
            </div>
          </td>
          <td style={{
            // backgroundColor: 'darkred', 
            color: 'black', 
            paddingLeft: 10
          }}
        >
            Poor
          </td>
        </tr>
        
        <tr>
          <td>More than 25 min</td>
          <td>Strip / Milk</td>
          <td 
            style={{
              background: 'linear-gradient(90deg, darkblue, transparent)', 
              color: 'white', 
              paddingLeft: 10
            }}
          >
            <div style={{paddingLeft: 20}}>
              <Input checked={quality2.mq2 === 'above 25'} type="checkbox" /> Blue to Colourless
            </div>
          </td>
          <td style={{
            // backgroundColor: 'darkgreen', 
            color: 'black', 
            paddingLeft: 10
          }}
        >
            Good
          </td>
        </tr>
        </tbody>
      </Table>
  </div>
}

export default PurityTable;
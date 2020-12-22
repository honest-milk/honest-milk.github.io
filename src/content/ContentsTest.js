import React, {useState} from 'react';

import {
  Row,
  Col, 
  Collapse
} from "reactstrap";
import PurityTable2 from './PurityTable2';


function Contents({product})  {
  let {details} = product;
  let {quality} = details;

  
  const [fat_collapsed, set_fat] = useState(false);
  const [protein_collapsed, set_protein] = useState(false);
  const [mbrt_collapsed, set_mbrt] = useState(false);
  const [snf_collapsed, set_snf] = useState(false);

    return (
      <>
        <Row 
          style={{marginTop: 30}}
        >
          <Col xs="12" sm="12" md="6" lg="3" style={{padding: 10}}>
            <div className="stat-card card-body" onClick={() => set_fat(!fat_collapsed)}>
              <div>FAT</div>
              <div><span style={{fontSize: '2em'}}>{quality ? quality.fat.value : '3.8 %'}</span></div>
              <div>STANDARD 3.5 - 4.5 %</div>
              <Collapse
                isOpen={fat_collapsed}
              >
                <div style={{marginTop: 10}}>
                Fat content in cow milk depends upon the diet, weather and lactation cycle of cow.
                </div>
              </Collapse>
            </div>                  
          </Col>
          
          <Col xs="12" sm="12" md="6" lg="3" style={{padding: 10}}>
            <div className="stat-card card-body" onClick={() => set_snf(!snf_collapsed)}>
              <div>SNF <br /></div>
              <div><span style={{fontSize: '2em'}}>{quality ? quality.snf.value : '8.35 %'}</span><br /></div>
              <div>STANDARD 8 - 8.5 %</div>
              <Collapse
                isOpen={snf_collapsed}
              >
                <div style={{marginTop: 10}}>
                Solids Not Fat (SNF) consists of everything except milk fat and water. That means total solids content in the entire residue left after complete evaporation of water from milk. This includes protein, lactose and minerals.
                </div>
              </Collapse>
            </div>
          </Col>

          <Col xs="12" sm="12" md="6" lg="3" style={{padding: 10}}>
            <div className="stat-card card-body" onClick={() => set_protein(!protein_collapsed)}>
              <div>PROTEIN <br /></div>
              <div><span style={{fontSize: '2em'}}>{quality ? quality.protein.value : '3.8 %'}</span><br /></div>
              <div>STANDARD 32 gms / Litre</div>
              <Collapse
                isOpen={protein_collapsed}
              >
                <div style={{marginTop: 10}}>
                Standard whole cow milk contains 32 gms of protein per litre.
                </div>
              </Collapse>
            </div>
          </Col>
          
          <Col xs="12" sm="12" md="6" lg="3" style={{padding: 10}}>
            <div className="stat-card card-body" onClick={() => set_mbrt(!mbrt_collapsed)}>
                <div>MBRT <br /></div>
                <div><span style={{fontSize: '2em'}}>{quality ? quality.mbrt.value : '4 Hours'}</span><br /></div>
                <div>STANDARD 3 Hours</div>
                <Collapse
                  isOpen={mbrt_collapsed}
                >
                  <div style={{marginTop: 10}}>
                  MBRT (methylene blue reduction test) test is used to check the bacterial count in milk. Higher time indicates lower bacterial count in milk.
                  </div>
                </Collapse>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <PurityTable2
            product={product}
          />
          </Col>
        </Row>
      </>
    );
}

export default Contents;
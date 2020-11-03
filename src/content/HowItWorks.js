import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import box from '../assets/img/icons/common/milk.svg';
import cow from '../assets/img/icons/common/cow.svg';
import shipped from '../assets/img/icons/common/shipped.svg';
import test from '../assets/img/icons/common/test-tube.svg';

function Cow() {
  return (
    <img src={cow} alt="icon" width="40px" />
  );
}

function Box() {
  return (
    <img src={box} alt="icon" width="40px" />
  );
}
function Delivery() {
  return (
    <img src={shipped} alt="icon" width="40px" />
  );
}
function Testing() {
  return (
    <img src={test} alt="icon" width="40px" />
  );
}

function HowItWorks() {
  return (
    <section className="section section-lg pb-0 pt-0" id="how-it-works">
      <VerticalTimeline>
        <h1 style={{textAlign: 'right'}}>How It works</h1>
        <div className="hiw-ill" id="hiw-ill-1"></div>
        <div className="hiw-ill" id="hiw-ill-2"></div>
        <div className="hiw-ill" id="hiw-ill-3"></div>
        <div className="hiw-ill" id="hiw-ill-4"></div>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date={<WorkIcon />}
          iconStyle={{ background: 'var(--primary)', color: '#fff' }}
          icon={<Cow />}
        >
          <h3 className="vertical-timeline-element-title">Co-Managed Farms</h3>
          <p>
            Our Milk comes from the co-managed farms that are managed by highly trained and experienced dairy farmers. Each partnered farm goes through rigorous training and follows the standard procedures that are prepared by team of dairy experts, veterinarians and nutrionists  giving utmost priority to animal health and nutrition. Cattle health is regularly monitored and each animal goes through routine check-up before milking, because only healthy cows give healthy MILK!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2010 - 2011"
          iconStyle={{ background: 'var(--primary)', color: '#fff' }}
          // icon={<WorkIcon />}
          icon={<Testing />}
          
        >
          <h3 className="vertical-timeline-element-title">Quality and Adulteration Testing</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
          <p>
            Each milk sample goes through daily quality and adulteration testing at our in-house lab run by qualified technicians. Over 15 tests are conducted daily to ensure quality and even the slightest deviation results is removal of the whole batch. We at ‘Honest Milk’ leave no stone unturned to provide you and your family quality-tested Milk which is free of Growth Hormones, Antibiotics, Adulteration and Preservatives. To know more about our testing or to order a testing kit to see results yourself write us <a href="mailto:support@honestmilk.in">support@honestmilk.in</a>.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2008 - 2010"
          iconStyle={{ background: 'var(--primary)', color: '#fff' }}
          icon={<Box />}
        >
          <h3 className="vertical-timeline-element-title">Chilling and Packaging</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
          <p>
            Many of our customers wanted to know why they receive chilled milk. Well, this is to ensure that quality can be maintained without adding any preservatives. Raw Milk is chilled to 2 degree Celsius to prevent the microbial growth and is packaged right after in our eco-friendly and non-toxic glass bottles to retain temperature. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2006 - 2008"
          iconStyle={{ background: 'var(--primary)', color: '#fff' }}
          icon={<Delivery />}
        >
          <h3 className="vertical-timeline-element-title">Delivery</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
          <p>
            Milk is delivered at your doorstep within 3-4 hours of milking in insulated bags by our network of bikers. To battle against this ongoing Coronavirus pandemic, our delivery staff is equipped with safety kits and avoids contact while delivering. Our staff members sanitise their hands after every delivery to minimize the chances of spread!
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  )
}

export default HowItWorks;
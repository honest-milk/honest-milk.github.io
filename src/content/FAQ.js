import React from "react";
// reactstrap components
import { UncontrolledCollapse, Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";

let list = [
  {
    que: 'Where does the milk come from?',
    ans: (
      <p>
        The milk comes from our network of co-managed exclusive farms run by experienced farmers near dhanoni,derabassi every day, to your doorstep.
      </p>
    )
  }, {
    que: 'What makes this milk so good?',
    ans: <p>
      Honest milk is pure, natural, raw milk obtained from livestock raised according to best dairy methods. That is, they are fed on a very high quality diet, their milk is obtained without contamination and the cattles are not treated with any hormones. At our farms, we ensure the milk produced retains every aspect of this definition:
      <ol>
        <li>
          No artificial growth hormones: The cows are not given any hormonal injections to              boost the milk  yield.
        </li>
        <li>
          No antibiotics or steroids: The cows are not given any steroids and antibiotics              (exceptional cases can be where the ailment is serious, but those cows are not              milked).
        </li>
        <li>
          No stress on the lactating cows: The cows are free to roam, stay in clean and                 well-maintained  surroundings, and live healthily.
        </li>
        <li>
          No preservatives and adulterants: The milk obtained from the cows is            unadulterated and does not have any preservatives (such as formalin), which is            widely used by local dairy vendors as well  as branded milk.
        </li>
        <li>
          Chemical-free fodder: Fodder for the cows (green  and dry) are obtained from the best local resources.
        </li>
        <li>
          Full control over quality: From fodder to milk to packaging, the entire process is               controlled and  monitored at the farm.
        </li>
      </ol>
      Honest milk is Pure, Natural, chemical-free,  hormone-free and preservative-free.
    </p>
  }, {
    que: 'Which breed of cows do you have?',
    ans: (
      <p>
        Presently milk sold is of Dutch Holstein Friesian breed which is known as the world’s highest production dairy  animals.
      </p>
    )
  }, {
    que: 'How can you be assured of the milk quality? ',
    ans: (
      <p>
        We provide sample test reports from FSSAI  accredited labs on a periodic basis to give you  assurance on the milk quality. We also have a well  equipped laboratory to test the milk on all adulterants  and toxins on a daily basis and upload the reports on our  purity meter. All subscribers are welcome to visit the  farm and labs on appointment, to see the processes  themselves.
      </p>
    )
  }, {
    que: 'Why is the milk thickness inconsistent unlike the  branded packaged milk?',
    ans: (
      <p>
        Honest milk is Farm fresh raw milk. We do not do any sort of processing on the milk. Many famous brands use  melamine and other adulterants to make the milk thick .  Cow milk is naturally not that thick .
        
      </p>
    )
  }, {
    que: 'Are the cows happy? How do you maintain the physical and emotional wellbeing of the livestock at the  farm?',
    ans: (
      <p>
        At our Farms, we use the best methods of maintaining  milk cattle and top dairy consultants have been  appointed which has helped them to understand the key inputs for cattle well being:
        <ul>
          <li>
            Cows are free to roam at the farm.
          </li>
          <li>
            There are no flies and mosquitoes in the cow  shelters - natural methods such as smoke from  grass and anti-mosquito repellants are put into  practice for this.
          </li>
          <li>
            Utmost care is taken to maintain good diet and  health of the cows.
          </li>
        </ul>
      </p>
    )
  }, {
    que: 'Why do you package the milk in glass bottles? ',
    ans: (
      <p>
        Glass is one of the safest materials on earth, for  packaging of F&B products. It is non-toxic and non reactive, as compared to other packaging materials  such as plastic, which can leach into food products. Our  brand values don’t go with plastic or anti-environment  materials, thus we use glass bottles for packaging. It is  very tough for us to work with daily supplies in glass  bottles, but creating high quality produce and then  packaging it in plastic does not make any sense to us!
      </p>
    )
  }, {
    que: 'Is the milk pasteurised?',
    ans: (
      <p>
        Honest milk is raw, unpasteurized milk. We don’t process the milk – thus providing purest and freshest form of milk to our patrons.
      </p>
    )
  }, {
    que: 'Why don’t you pasteurise your milk? ',
    ans: (
      <p>
        Pasteurization is nothing but a way to improve the shelf life of the product, it has                nothing to do with the nutritional quality of the milk. Pasteurization is a process of               killing bacteria in the milk with the help of high temperatures and shock heating.              This leads to some loss of good enzymes and the nutritional content of the milk               and it also changes the protein (amino cells) structure of the milk. This can also be                achieved by gradual boiling at home which is a much better process to retain the               goodness
      </p>
    )
  },
  {
    que: 'What is the shelf life of the milk? Do I need to boil  the milk?',
    ans: (
      <p>
        Since this is raw milk, we recommend boiling it within  two hours of receiving it, especially during the summers. <br />
        We recommend that the customers boil the milk before the consumption as raw             milk is difficult to digest unless your system is used to it. After boiling, the milk can                 be  refrigerated upto 2-3 days, as in the case of  conventional milk.

      </p>
    )
  },
  {
    que: 'Do you sell toned milk too? ',
    ans: (
      <p>
        We don't do multiple variants of milk. We sell whole milk, the fat content of which is                 between 4 to 4.5 %. However, whole cow milk is lighter than normal toned milk               available in the market, which is primarily buffalo milk. Almost 40% of the fat in the                milk can be extracted in the  form of cream-layer/malai when you boil the milk.
      </p>
    )
  }, {
    que: 'Is this A1 milk or A2 milk?',
    ans: (
      <p>
        Scientifically, we cannot establish whether it is A1 or A2 milk, as we don't have               A1/A2 certification available in India. Most milch cattle give milk which contains            both A1 & A2 protein, but to what percentage, we cannot commit. It can be in any                 proportion for a given cow i.e.  50/50, 60/40, 70/30 or vice-versa and so on…
      </p>
    )
  }, {
    que: "I can't set good dahi with milk. It's quite runny.Why is that so?",
    ans: (
      <p>
        Firstly, the milk available in the market has a certain percentage of Skimmed Milk              Powder (SMP) mixed, hence you get curd very thick and creamy (chakka kind of),              because of the powder content in the milk. Honest milk Milk is 100% farm fresh,               direct from the udder, so there is natural Solids Not Fat (SNF) which is relatively               low in comparison to conventional milk brands. <br />
        Setting curd with Honest milk is altogether a different thing vis-à-vis conventional brands. When you put our milk for boiling/heating (while setting curd)  make sure that you put/mix culture when the milk is  about 5 minutes away from boiling and then maintain  the temperature of the utensil. <br />
        Don’t use readymade curd (pouch/cup/matki etc.) as  culture, either use the curd or Chaach (ButterMilk)  made from Honest milk.
      </p>
    )
  }, {
    que: "Is this A1 milk or A2 milk?I've had cow's milk when I was a child, and it was always yellow in colour.                But the milk you supply is  white. Is it really cow's milk?",
    ans: (
      <p>
        Yellow color in milk is mainly due to the presence of carotenoid. Some breeds have               high amounts of it while others have low amounts of carotenoid generation            hence the yellow tinge in the milk can vary by breed, the food and other               factors. <br />
Presence of less yellow tinge is nothing to worry about. It is due to the fresh                seasonal diet fed to the  cows.  <br />
After boiling and refrigerating the milk, you can witness that the malai/cream            layer on the top is  slightly yellow (you can say tinge of yellow) <br />
      </p>
    )
  }, {
    que: "If it's full-fat cow's milk, why isn't there any thick malai on  it after it is boiled and cooled?",
    ans: (
      <p>
        Full fat milk from cows cannot be compared with conventional brands milk,            because the latter is mainly buffalo milk. Also, in conventional brands, cream/fat is             added as per percentage proportions to make different  variants. Conventional full cream brands contain 6% fat.  Cow full fat milk cannot be more than 4.5% fat because  it is the natural lactating property of the cow that its light  in terms of fat, thus easy to digest. That’s why it's widely  known that cow milk fat is GOOD FAT.
      </p>
    )
  }, {
    que: "Can I add/change my milk requirement if I’m  travelling or have guests over?",
    ans: (
      <p>
        Yes, you can do it latest by 8.30 pm a day before you want the quantities to be                  modified. Alternatively, call/ whatsapp at Honest Milk customer care number          (7707872590), minimum one day in advance if you want more/ less quantity of             milk, or want to suspend  the deliveries while travelling. 
      </p>
    )
  },  {
    que: "Do I have to return empty bottles? ",
    ans: (
      <p>
        As per our green initiative, we reuse the glass bottles,  Hence we require you to rinse and return the empty  glass bottle on your next scheduled delivery. Loss of any bottles will be charged at Rs. 30 each.
      </p>
    )
  },  {
    que: "What are modes of payment available? ",
    ans: (
      <p>
        You can pay through:  <br />
        <span style={{fontWeight: 'bolder'}}>✓ Online mode (Paytm/Gpay) </span> <br /> 
        <span style={{fontWeight: 'bolder'}}>✓ Cash / Cheque </span>
      </p>
    )
  },  {
    que: "What is the delivery schedule on holidays? ",
    ans: (
      <p>
        Your milk is delivered 7 days a week, 365 days a year,  unless there is an exceptional emergency situation. 
      </p>
    )
  },  {
    que: "Are there any additional charges beyond the  subscription rate?",
    ans: (
      <p>
        There is no additional charge beyond the subscription  amount. 
      </p>
    )
  }

]

class Profile extends React.Component {
  render() {
    return (
      <>
        <section className="section pt-8" id="faq">
          <Container>
            <Row>
              <Col>
                <h1>FAQ</h1>
                <p>
                  We want you to know more about our product and how we assure to provide the best quality and pure cow’s milk. We’ve put together a small FAQ about our milk products that you would find informative. At Honest milk, we believe in honest, good food. We look forward to  serving you with the same honesty.
                </p>
                <ListGroup >
                  {
                    list.map((item, i) => (
                      <ListGroupItem key={i.toString()}>
                        <ListGroupItemHeading id={`faq-${i}`} className="toggler">
                          {item.que}
                        </ListGroupItemHeading>
                        <UncontrolledCollapse toggler={`#faq-${i}`}>
                          <ListGroupItemText>
                            {item.ans}
                          </ListGroupItemText>
                        </UncontrolledCollapse>
                      </ListGroupItem>
                    ))
                  }
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Profile;

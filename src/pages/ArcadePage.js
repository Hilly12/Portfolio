import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import "../assets/Arcade.css"
import snek from "../assets/images/snek.png";
import Placeholder from "../components/Placeholder";
import {Button} from "reactstrap";
import Image from "../components/Image";

const cards = [
  {
    title: "Alphazero Pawn Race",
    description: "A chess engine for pawns",
    img: "https://lh3.googleusercontent.com/pw/ACtC-3d7fd7hfXKe7Y3KvuMXCKbblWV_ced0futGrTMWS-NlJOFgUhFRDsuBeRcgcKLC4hpGLIpBCCRK5_uw6YamMUBDnU6pXlZVAauKYHxUnssfdi2UPu6ZDN0UMLWip1lZ5JaPRP9nyb6yKRAkVpJbbYHO=w1065-h599-no",
    link: "sandbox/alphazero",
  },
  {
    title: "Weblike",
    description: "A roguelike dungeon crawler",
    img: "https://lh3.googleusercontent.com/pw/ACtC-3cYvKNZJpVc0Q0XnRsiM2-c8ObvhpaG-II7JCnlyr1B0b4h71-EkwgyCBhL89Cohz4OPsC-oXSTcvMnt0MtLDajI2P-KX7htnWuG3ZhHRkLkaxCGcs-nYDB79XeeWVjsBV0BRiRxi3WcO3qZoIe2lOS=w320-h180",
    link: "sandbox/roguelike",
  },
  {
    title: "Cave Generator",
    description: "A procedural cavern generator",
    img: "https://lh3.googleusercontent.com/pw/ACtC-3fWyu5XkGuUMw717XCo8bANgnFv7K9Q2UbVyLhKXWfOwlbekxM32VljhUiKJKtgfCSaDYosby_zLvncMqGrHGhRfwMLvdyWwfMgzZlREmAMrup7yDYOp5kG2ZzANTf6oM7sYVeVdTCKUV8O_FUtHd8V=w1281-h721-no",
    link: "sandbox/cavegen",
  },
  {
    title: "Snake",
    description: "The classic",
    img: snek,
    link: "sandbox/snake",
  },
  {
    title: "Space Shooter",
    description: "Old school",
    img: "https://lh3.googleusercontent.com/pw/ACtC-3dedFWEmNFMxJQuzbFOhHIamo9nppcldlCT3cByHBKnACvoDokNNAaYS3vyYXQFwuFPKjZmrIAj8rkqAv6VRodWHdTfbWFuQ5lXL4DryrYE7Rb_QuQKTAaDx9RAyxJAQjJfMgVmnHki1ngmDP9s3r7p=w576-h324-no",
    link: "sandbox/spaceshooter",
  }
];

class ArcadePage extends Component {

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <div className="container" style={{ minHeight: "100vh" }}>
          <div className="heading">
            <h2>Sandbox</h2>
          </div>
          <div className="row">
            {cards.map((card, key) => {
              return (
                <div key={key} className="col-md-6 col-lg-4 mb-5">
                  <div className="card border-0 card-img-custom" style={{ backgroundColor: "transparent" }}>
                    <Image classes="card-img-top border-bottom" src={card.img}
                           placeholder={<Placeholder/>}/>
                    <div className="card-body text-center text-muted">
                      <h6 className="text-center" style={{ color: '#007bff', fontWeight: '600' }}>
                        {card.title}
                      </h6>
                      <p className="text-center card-text">{card.description}</p>
                      <div>
                        <Link to={card.link}>
                          <Button style={{ paddingLeft: '20px', paddingRight: '20px' }} size="sm" color="info">
                            Go
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <Footer/>
      </Fragment>
    );
  }
}

export default ArcadePage;
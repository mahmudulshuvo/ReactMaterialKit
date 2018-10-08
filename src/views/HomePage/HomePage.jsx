import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import HeaderLinksUser from "components/Header/HeaderLinksUser.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { cardTitle } from "assets/jss/material-kit-react.jsx";
import image from "assets/img/landing-bg.jpg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import profileImage from "assets/img/faces/avatar.jpg";
import Email from "@material-ui/icons/Email";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
import Icon from "@material-ui/core/Icon";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

const style = {
  cardTitle,
  textCenter: {
    textAlign: "center"
  },
  textMuted: {
    color: "#6c757d"
  }
};

class HomePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Brand Name/Logo"
          rightLinks={<HeaderLinksUser />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />

        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Card style={{ width: "20rem" }}>
                    <img
                      style={{
                        height: "180px",
                        width: "100%",
                        display: "block"
                      }}
                      className={classes.imgCardTop}
                      src={require("assets/img/bg4.jpg")}
                      alt="Card-img-cap"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>Card title</h4>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card style={{ width: "20rem" }}>
                    <img
                      style={{
                        height: "180px",
                        width: "100%",
                        display: "block"
                      }}
                      className={classes.imgCardTop}
                      src={require("assets/img/bg4.jpg")}
                      alt="Card-img-cap"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>Card title</h4>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card style={{ width: "20rem" }}>
                    <img
                      style={{
                        height: "180px",
                        width: "100%",
                        display: "block"
                      }}
                      className={classes.imgCardTop}
                      src={require("assets/img/bg4.jpg")}
                      alt="Card-img-cap"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>Card title</h4>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Card style={{ width: "20rem" }}>
                    <img
                      style={{
                        height: "180px",
                        width: "100%",
                        display: "block"
                      }}
                      className={classes.imgCardTop}
                      src={require("assets/img/bg4.jpg")}
                      alt="Card-img-cap"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>Card title</h4>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card style={{ width: "20rem" }}>
                    <img
                      style={{
                        height: "180px",
                        width: "100%",
                        display: "block"
                      }}
                      className={classes.imgCardTop}
                      src={require("assets/img/bg4.jpg")}
                      alt="Card-img-cap"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>Card title</h4>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card style={{ width: "20rem" }}>
                    <img
                      style={{
                        height: "180px",
                        width: "100%",
                        display: "block"
                      }}
                      className={classes.imgCardTop}
                      src={require("assets/img/bg4.jpg")}
                      alt="Card-img-cap"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>Card title</h4>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Card style={{ width: "20rem" }}>
                    <img
                      style={{
                        height: "180px",
                        width: "100%",
                        display: "block"
                      }}
                      className={classes.imgCardTop}
                      src={require("assets/img/bg4.jpg")}
                      alt="Card-img-cap"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>Card title</h4>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card style={{ width: "20rem" }}>
                    <img
                      style={{
                        height: "180px",
                        width: "100%",
                        display: "block"
                      }}
                      className={classes.imgCardTop}
                      src={require("assets/img/bg4.jpg")}
                      alt="Card-img-cap"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>Card title</h4>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card style={{ width: "20rem" }}>
                    <img
                      style={{
                        height: "180px",
                        width: "100%",
                        display: "block"
                      }}
                      className={classes.imgCardTop}
                      src={require("assets/img/bg4.jpg")}
                      alt="Card-img-cap"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>Card title</h4>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Card className={classes.textCenter}>
                    <CardHeader color="danger">Featured</CardHeader>
                    <img
                      style={{
                        height: "180px",
                        width: "100%",
                        display: "block"
                      }}
                      className={classes.imgCardTop}
                      src={require("assets/img/bg2.jpg")}
                      alt="Card-img-cap"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>
                        Special title treatment
                      </h4>
                      <p>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <Button color="primary">Do something</Button>
                    </CardBody>
                    {/* <CardFooter className={classes.textMuted}>
                      2 days ago
                    </CardFooter> */}
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
// const homePageStyle = withStyles(profilePageStyle)(HomePage);
const cardStyle = withStyles(style)(HomePage);

// export default (homePageStyle, cardStyle);

export default withStyles(profilePageStyle, cardStyle, navbarsStyle)(HomePage);

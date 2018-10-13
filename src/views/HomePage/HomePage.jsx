import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomSelect from "components/Header/CustomSelect.jsx";
import HeaderLinksUser from "components/Header/HeaderLinksUser.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import { cardTitle } from "assets/jss/material-kit-react.jsx";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

const style = {
  cardTitle,
  textCenter: {
    textAlign: "center"
  },
  textMuted: {
    color: "#6c757d"
  }
};

function handleSelect(event) {
  console.log("clicked");
}

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
          brand="Material Kit React"
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
            <div className={classes.container} style={{ paddingTop: "20px" }}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
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
                      <h4 className={classes.cardTitle}>
                        Special title treatment
                      </h4>
                      <p>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <CustomSelect />
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
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
                      <h4 className={classes.cardTitle}>
                        Special title treatment
                      </h4>
                      <p>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <CustomSelect />
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
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
                      <h4 className={classes.cardTitle}>
                        Special title treatment
                      </h4>
                      <p>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <CustomSelect />
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
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
                      <h4 className={classes.cardTitle}>
                        Special title treatment
                      </h4>
                      <p>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <CustomSelect />
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
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
                      <h4 className={classes.cardTitle}>
                        Special title treatment
                      </h4>
                      <p>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <CustomSelect />
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
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
                      <h4 className={classes.cardTitle}>
                        Special title treatment
                      </h4>
                      <p>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <CustomSelect />
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
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
                      <h4 className={classes.cardTitle}>
                        Special title treatment
                      </h4>
                      <p>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <CustomSelect />
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
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
                      <h4 className={classes.cardTitle}>
                        Special title treatment
                      </h4>
                      <p>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <CustomSelect />
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
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
                      <h4 className={classes.cardTitle}>
                        Special title treatment
                      </h4>
                      <p>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <CustomSelect />
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

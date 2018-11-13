import React from "react";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import HeaderLinksUser from "components/Header/HeaderLinksUser.jsx";
import classNames from "classnames";
import qaPageStyle from "assets/jss/material-kit-react/views/qaPage.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// import checkboxRadio from "../../assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

class TestPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      selectedEnabled: "b",
      numberOfradios: 0
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  componentDidMount() {
    this.setState({
      numberOfradios: parseInt(this.props.location.state.generate.slice(9))
    });
  }

  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }

  radioContainer = (RadioButton, numberOfradios) => {
    let values = [];
    for (let i = 0; i < numberOfradios; i++) {
      values.push(
        <GridItem xs={12} sm={12} md={12}>
          <Card style={{ background: "#eee" }}>
            <CardBody>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <RadioButton value="a" />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <RadioButton value="b" />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <RadioButton value="c" />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <RadioButton value="d" />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      );
    }
    return values;
  };

  render() {
    const { classes, ...rest } = this.props;

    const RadioButton = value => (
      <div
        className={
          classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
        }
      >
        <FormControlLabel
          control={
            <Radio
              checked={this.state.selectedEnabled === "a"}
              onChange={this.handleChangeEnabled}
              value={value}
              name="radio button enabled"
              aria-label="A"
              icon={<FiberManualRecord className={classes.radioUnchecked} />}
              checkedIcon={
                <FiberManualRecord className={classes.radioChecked} />
              }
              classes={{
                checked: classes.radio
              }}
            />
          }
          classes={{
            label: classes.label
          }}
          label="First Radio"
        />
      </div>
    );

    return (
      <div>
        <Header
          color="primary"
          brand="Material Kit React"
          rightLinks={<HeaderLinksUser />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container} style={{ paddingTop: "20px" }}>
              <GridContainer justify="center">
                {this.radioContainer(RadioButton, this.state.numberOfradios)}
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(qaPageStyle)(TestPage);

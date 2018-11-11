/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Email from "@material-ui/icons/Email";
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";
import profileImage from "assets/img/faces/avatar.jpg";

// function handleDropDown(event) {
//   console.log(event.currentTarget.textContent);
//   if (event.currentTarget.textContent === "Me") {
//     <Link to="/profile" className={} />;
//   }
// }

function HeaderLinksUser({ ...props }) {
  console.log("props", props);
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/home"
          className={classes.navLink}
          // onClick={e => e.preventDefault()}
          color="transparent"
        >
          Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          left
          caret={false}
          hoverColor="primary"
          dropdownHeader="Menu"
          buttonText={
            <img src={profileImage} className={classes.img} alt="profile" />
          }
          buttonProps={{
            className: classes.navLink + " " + classes.imageDropdownButton,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/profile" className={classes.dropdownLink}>
              Me
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Sign out
            </Link>
          ]}
        />
      </ListItem>
    </List>
  );
}

export default withStyles(navbarsStyle)(HeaderLinksUser);

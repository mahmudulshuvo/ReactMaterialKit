/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function handleSelect(event) {
  console.log("on Change called", event.currentTarget.textContent);
}

function CustomSelect({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={props.dropdownList}
          onClick={handleSelect}

          // dropdownList={[
          //   <span className={classes.dropdownLink}>Generate 20</span>,
          //   <span className={classes.dropdownLink}>Generate 50</span>,
          //   <span className={classes.dropdownLink}>Generate 100</span>
          // ]}
        />
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(CustomSelect);

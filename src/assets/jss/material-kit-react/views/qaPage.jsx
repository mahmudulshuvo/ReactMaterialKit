import { container, title } from "assets/jss/material-kit-react.jsx";
import {
  primaryColor,
  dangerColor,
  roseColor,
  grayColor
} from "assets/jss/material-kit-react.jsx";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

const profilePageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,

  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "100px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },
  checkRoot: {
    padding: "14px"
  },
  radioRoot: {
    padding: "16px"
  },
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px"
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px"
    },
    "&:not(:first-child)": {
      marginTop: "-14px"
    },
    marginTop: "0",
    marginBottom: "0"
  },
  checked: {
    color: primaryColor + "!important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  disabledCheckboxAndRadio: {
    opacity: "0.45"
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "rgba(0, 0, 0, 1)",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all"
  },
  labelHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "39px",
    marginRight: "0",
    "@media (min-width: 992px)": {
      float: "right"
    }
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: "22px"
  },
  labelLeftHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "22px",
    marginRight: "0"
  },
  labelError: {
    color: dangerColor
  },
  radio: {
    color: primaryColor + "!important"
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + primaryColor,
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "50%"
  },
  inlineChecks: {
    marginTop: "8px"
  }
  //   iconCheckbox: {
  //     height: "116px",
  //     width: "116px",
  //     color: grayColor,
  //     "& > span:first-child": {
  //       borderWidth: "4px",
  //       borderStyle: "solid",
  //       borderColor: "#CCCCCC",
  //       textAlign: "center",
  //       verticalAlign: "middle",
  //       borderRadius: "50%",
  //       color: "inherit",
  //       margin: "0 auto 20px",
  //       transition: "all 0.2s"
  //     },
  //     "&:hover": {
  //       color: roseColor,
  //       "& > span:first-child": {
  //         borderColor: roseColor
  //       }
  //     }
  //   },
  //   iconCheckboxChecked: {
  //     color: roseColor,
  //     "& > span:first-child": {
  //       borderColor: roseColor
  //     }
  //   },
  //   iconCheckboxIcon: {
  //     fontSize: "40px",
  //     lineHeight: "111px"
  //   },
  //   switchBase: {
  //     color: primaryColor + "!important"
  //   },
  //   switchIcon: {
  //     boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
  //     color: "#FFFFFF !important",
  //     border: "1px solid rgba(0, 0, 0, .54)",
  //     transform: "translateX(-4px)!important"
  //   },
  //   switchIconChecked: {
  //     borderColor: "#9c27b0",
  //     transform: "translateX(0px)!important"
  //   },
  //   switchBar: {
  //     width: "30px",
  //     height: "15px",
  //     backgroundColor: "rgb(80, 80, 80)",
  //     borderRadius: "15px",
  //     opacity: "0.7!important"
  //   },
  //   switchChecked: {
  //     "& + $switchBar": {
  //       backgroundColor: "rgba(156, 39, 176, 1) !important"
  //     }
  //   }
};

export default profilePageStyle;

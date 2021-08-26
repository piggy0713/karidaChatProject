import { makeStyles } from "@material-ui/core/styles";

const bubbleStyles = makeStyles((theme) => ({
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: theme.spacing(1),
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },
  image: {
    padding: theme.spacing(1),
    borderRadius: "10px 10px 0 10px",
  },
  imageWithText: {
    borderRadius: "10px 10px 0 0",
  },
}));

export default bubbleStyles;

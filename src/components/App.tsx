import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import NavBar from "./common/NavBar";
import PageNotFound from "./PageNotFound";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { withTranslation, Trans } from "react-i18next";
function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {" team."}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div className="container-fluid">
      <NavBar />
      <CssBaseline />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          <Trans i18nKey="Title" />
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          <Trans i18nKey="Footer" />
        </Typography>
        <MadeWithLove />
      </footer>
    </div>
  );
}
export default withTranslation("translation")(App);

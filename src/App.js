import React, { Component } from 'react';
import { connect } from "react-redux";
import { addArticle } from "./redux/actions/index";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


//const classes = useStyles();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addArticle({ title });
    this.setState({ title: "" });
  }
  LoadTable = () => {
    return (null)
  }
  render() {
    console.log("cal...................", this.props.articles)
    const { title } = this.state;
    const {classes} = this.props;
    return (
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}  className={classes.col}>
          <Paper className={classes.paper}>
          {this.LoadTable()}
          {(this.props.articles || []).map((obj, index) => <Paper
            variant="outlined" square
            style={{ "height": 50, width: 100 }}>{obj}</Paper>)}
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={this.handleChange}
              />

            </div>
            <button type="submit">SAVE</button>
          </form>
          </Paper>
        </Grid>
        
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "Called..");
  return { articles: state.usersReducer.articles };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },col:{margin: "auto"}
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));

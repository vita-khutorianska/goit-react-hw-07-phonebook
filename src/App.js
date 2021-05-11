import { Component } from 'react';
import './App.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import { connect } from 'react-redux';
import { getContact } from './Redux/Phonebook/operationsApi';
// import { getLoading } from './Redux/Phonebook/';
class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            Phonebook
            {this.props.isLoading && <LinearProgress color="secondary" />}
          </h1>

          <ContactForm />
        </div>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  // isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(getContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

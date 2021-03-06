import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }
    onFormSubmit = (evt) => {
        evt.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button 
                        type="submit" 
                        className="btn btn-secondary">
                        submit
                    </button>
                </span>        
            </form>    
        )
    }
}

function mapDispatchToProps(dispatch) {
    // whenever fetchWeather is called, result
    // will be passed to all the reducers
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
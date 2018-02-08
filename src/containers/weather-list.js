import React, { Component } from 'react';
import { connect } from 'react-redux';
import SparkLines from '../components/sparkline';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {

    renderWeather = (cityData) => {
        const name = cityData.city.name;
        const temp = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lat, lon } = cityData.city.coord;

        return(
            <tr key={name}>
                <td>
                    <GoogleMap lat={lat} lon={lon}/>
                    <p>{name}</p>
                </td>
                <td><SparkLines data={temp} color="orange" unit="C"/></td>
                <td><SparkLines data={pressure} color="green" unit="hPa"/></td>
                <td><SparkLines data={humidity} color="black" unit="%"/></td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>            
        )
    }
}

function mapStateToProps({ weather }) {
    // whatever is returned will show up
    // as a prop inside a BookList
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);
import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
    constructor(props) {
        super(props);
        //ЭТО ЕДИНСТВЕННЫЙ РАЗ, КОГДА МЫ НАПРЯМУЮ ЗАДАЁМ this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //мы вызвали setState!!!
               this.setState({ lat: position.coords.latitude });
               //так неправильно !!! - this.state.lat = position.coords.latitude

            },
            (err) => {
               this.setState({ errorMessage: err.message }); 
            }
        );
    }
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }
        return <div>Loading!</div>
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
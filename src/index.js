import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
    constructor(props) {
        super(props);
        //ЭТО ЕДИНСТВЕННЫЙ РАЗ, КОГДА МЫ НАПРЯМУЮ ЗАДАЁМ this.state
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //мы вызвали setState!!!
               this.setState({lat: position.coords.latitude });
               //так неправильно !!! - this.state.lat = position.coords.latitude

            },
            (err) => console.log(err)
        );
    }
    render() {
        return <div>Latitude: {this.state.lat}</div>
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
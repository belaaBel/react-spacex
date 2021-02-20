import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';

import FeatchData from './service/FeatchData';

import './style.css';

class App extends React.Component{
    featchData = new FeatchData();

    state = {
        rocket: 'Falcon 1',
        rocketFeatures: null,
        rockets: [],
        company: null,
    }

    componentDidMount() {
       this.updateRocket();
       this.updateCompany();
    }

    updateRocket() {
        this.featchData.getRocket()
            .then(data => {
                this.setState({rockets: data.map(item => item.name)});
                this.setState({rocketFeatures: data.find(item => item.name === this.state.rocket)});

                return data;
            })
            .then(data => data.find(item => item.name === this.state.rocket))
            // .then(data => this.setState({rocketFeatures: data.find(item => item.name === this.state.rocket)}))
    }       

    updateCompany() {
        this.featchData.getCompany()
            .then(data => {
                this.setState({company: data})
            })
    }

    changeRocket = (rocket, rocketFeatures) => {
        this.setState({rocket, rocketFeatures}, this.updateRocket);
    }

    render() {
        return (
            <>
              <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
              <Main rocket={this.state.rocket}/>
              <Features rocketFeatures={this.state.rocketFeatures}/>
              {this.state.company &&  <Footer link={this.state.company.links}/>}           
          </>
        );
    }  
}

export default App;

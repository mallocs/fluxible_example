import React from 'react';
import { SelectServerForm, SelectServerForm2 } from './SelectServerForm';
import SelectBatteryForm from './SelectBatteryForm';
import {testingServers} from '../fixtures/getAvailableTestingServers';

            console.log("hi");
            console.log(testingServers.GetTestingServerResponse.TestingServer);

class AchillesBatteryRunnerPage extends React.Component {
	handleSelect(e) {    
    }
    
    render() {
        return (

            <div>
                <h2>Achilles Battery Runner - vvnaclwa01.vegas.com</h2>
                <SelectServerForm />
                <SelectServerForm2 options={testingServers.GetTestingServerResponse.TestingServer} onChange={this.handleSelect}/>
                <SelectBatteryForm />
            </div>
        );
    }
}

export default AchillesBatteryRunnerPage;

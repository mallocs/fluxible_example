import React from 'react';
import SelectServerForm from './SelectServerForm'
import SelectBatteryForm from './SelectBatteryForm'

class AchillesBatteryRunnerPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Achilles Battery Runner - vvnaclwa01.vegas.com</h2>
                <SelectServerForm />
                <SelectBatteryForm />
            </div>
        );
    }
}

export default AchillesBatteryRunnerPage;

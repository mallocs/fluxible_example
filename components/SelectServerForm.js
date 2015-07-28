import React from 'react';
import batteryTests from '../fixtures/getAvailableBatteryTests';

class SelectServerForm extends React.Component {
    render() {
        return (
            <form action="/achilles" method="POST" onsubmit="document.getElementById('changeServerButton').disabled=true;" className="pure-form">
                <fieldset>
                    <b>
                    <label htmlFor="testingServer">Current Test Server: </label></b>
                    <select size="1" name="testingServer">
                        <option value="TEST01">Test01</option>
                        <option value="TEST07" >Test07</option>
                    </select>
                    <button id="changeServerButton" type="submit" className="pure-button">Change Server</button>
                </fieldset>
            
            </form>
        );
    }
}

export default SelectServerForm;

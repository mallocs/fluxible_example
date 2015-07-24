import React from 'react';
import BatteryList from './BatteryList'

const batteryListStyle = {
    listStyle: 'none'
};

class SelectBatteryForm extends React.Component {
    render() {
        return (
            <form action="/achilles" method="POST">                    
                <h2>Smoke Test Batteries</h2>
                    <BatteryList />
                <h2>
                Verification Test Batteries
                </h2>
                <ul style={batteryListStyle}>
                    <li>
                    <input type="checkbox" value="1158" name="battery" />
                    Czar Ancillary Products Test Battery
                    </li>
                    <li>
                    <input type="checkbox" value="1159" name="battery" />
                    Czar Hotel Test Battery
                    </li>
                    <li>
                    <input type="checkbox" value="1160" name="battery" />
                    Czar-Athena Integration Test Battery
                    </li>
                    <li>
                    <input type="checkbox" value="1161" name="battery" />
                    SoapUI Test Battery
                    </li>
                    <li>
                    <input type="checkbox" value="1162" name="battery" />
                    Athena VDC Multi Browser Test Battery
                    </li>
                    <li>
                    <input type="checkbox" value="1163" name="battery" />
                    POS VDC Test Battery
                    </li>
                    <li>
                    <input type="checkbox" value="1164" name="battery" />
                    Athena LVCVA Multi Browser Test Battery
                    </li>
                    <li>
                    <input type="checkbox" value="1165" name="battery" />
                    POS LVCVA Test Battery
                    </li>
                    <li>
                    <input type="checkbox" value="1166" name="battery" />
                    Mobile VDC Multi Device Test Battery
                    </li>
                    <li>
                    <input type="checkbox" value="1167" name="battery" />
                    Athena LVCVA IE Test Battery
                    </li>
                    <li>
                    <input type="checkbox" value="1168" name="battery" />
                    Athena VDC IE Test Battery
                    </li>
                </ul>
                <h2>
                Individual Ad-Hoc Test Batteries
                </h2>
                <ul style={batteryListStyle}>
                    <li>
                    <input type="checkbox" value="1169" name="battery" />
                    Travel Click Simulation Battery
                    </li>
                </ul>
                <input type="submit" value="Run Batteries" />
            </form>
        );
    }
}

export default SelectBatteryForm;

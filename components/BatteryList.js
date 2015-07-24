import React from 'react';

const batteryListStyle = {
    listStyle: 'none'
};

class BatteryList extends React.Component {
    render() {
        return (
            <ul style={batteryListStyle}>
                <li>
                <input type="checkbox" value="1157" name="battery" />
                Smoke Test Battery
                </li>
                <li>
                <input type="checkbox" value="smokeAndVerification" name="battery" />
                Smoke Tests and Verification Tests
                </li>
            </ul>
        );
    }
}

export default BatteryList;

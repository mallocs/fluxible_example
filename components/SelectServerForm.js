import React from 'react';

class SelectServerForm extends React.Component {
    render() {
        return (
            <form action="/achilles" method="POST" onsubmit="document.getElementById('changeServerButton').disabled=true;">
            <h2>
            Current Test Server: <select size="1" name="testingServer">
                <option value="TEST01">Test01</option>
                <option value="TEST07" >Test07</option>
            </select>
            <input id="changeServerButton" type="submit" value="Change Server" />
            </h2>
            </form>
        );
    }
}

export default SelectServerForm;

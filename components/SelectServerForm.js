import React from 'react';
import batteryTests from '../fixtures/getAvailableBatteryTests';

export class SelectServerForm extends React.Component {
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

export var SelectServerForm2 = React.createClass({
	displayName: 'FormSelect',
	propTypes: {
		className: React.PropTypes.string,
		firstOption: React.PropTypes.string,
		htmlFor: React.PropTypes.string,
		id: React.PropTypes.string,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		options: React.PropTypes.array.isRequired,
		value: React.PropTypes.string
	},
    
	getInitialState() {
		return {
			isValid: true,
			validationIsActive: this.props.alwaysValidate
		};
	},
        
	handleChange(e) {
		this._lastChangeValue = e.target.value;
		if (this.props.onChange) this.props.onChange(e.target.value);
	},

	render() {  
        let props = this.props;
        
		// options
		let options = this.props.options.map(function(opt, i) {
			return ( 
                <option key={'option-' + i} value={opt.value}>{opt.label}</option> 
            );
		});       
            
		return (
            
			<div>
				<select className="FormInput FormSelect" onChange={this.handleChange}  {...props}>
					{options}
				</select>
			</div>
		);
    }
});
var React = require('react');

var Style = require('./index.css');

var YButton = {
	render: function () {
		return (
			<button className="y-button">
				<span>
					{this.props.children}
				</span>
			</button>
		);
	}
};

module.exports = React.createClass(YButton);
module.exports.Style = Style;
module.exports.Class = YButton;

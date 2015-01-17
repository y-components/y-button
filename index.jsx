var React = require('react');
var b = require('b_');

var Style = require('./index.styl');

var YButton = {
	render: function () {
		var classes = b('y-button', {
			theme: this.props.theme || 'normal',
			type: this.props.type,
			size: this.props.size
		});

		return (
			<button className={classes}>
				<span className={b('y-button', 'text')}>
					{this.props.children}
				</span>
			</button>
		);
	}
};

module.exports = React.createClass(YButton);
module.exports.Style = Style;
module.exports.Class = YButton;

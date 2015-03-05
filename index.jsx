var React = require('react');
var b = require('b_');

var Style = require('./index.css!');

var YButton = {
	displayName: 'y-button',

	getInitialState: function() {
        return {
            hovered: false,
			pressed: false
        };
    },

	__onMouseEnter: function() {
        this.setState({hovered: true});
    },

    __onMouseLeave: function() {
        this.setState({hovered: false});
    },

	__onMouseDown: function() {
        this.setState({pressed: true});
    },

	__onMouseUp: function() {
        this.setState({pressed: false});
    },

	render: function () {
		var classes = b('y-button', {
			theme: this.props.theme || 'normal',
			type: this.props.type,
			view: this.props.view,
			size: this.props.size || 'm',
			disabled: this.props.disabled,
			hovered: this.state.hovered,
			pressed: this.state.pressed
		});

		return (
			<button
				className={classes}
				onMouseEnter={this.__onMouseEnter}
                onMouseLeave={this.__onMouseLeave}
				onMouseDown={this.__onMouseDown}
                onMouseUp={this.__onMouseUp}>
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

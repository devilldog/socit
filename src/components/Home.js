var React = require('react');
var actions = require('../actions');
var SocitInput = require('./SocitInput');
var SocitList = require('./SocitList');
var SocitStore = require('../stores/socits');

var Home = React.createClass({
    getInitialState: function () {
        return {
            socits: SocitStore.timeline()
        };
    },
    mixins: [SocitStore.mixin()],
    render: function () {
        return <div>
            <SocitInput onSave={this.saveSocit} />
            <SocitList socits={this.state.socits} />
        </div>;
    },
    saveSocit: function (text) {
        actions.socit(text);
    }
});

module.exports = Home;

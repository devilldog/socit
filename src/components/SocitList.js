var React = require('react');
var Box = require('./SocitBox');
var moment = require('moment');

var UserStore = require('../stores/users');

var SocitList = React.createClass({
    render: function () {
        var items = this.props.socits.map(function (socit) {
            return <Box key={socit.cid} 
                        user={socit} 
                        timestamp={moment(socit.$created).fromNow()}>
                        {socit.text}
                </Box>;
        });
        return <ul> {items} </ul>;
    }
});

module.exports = SocitList;

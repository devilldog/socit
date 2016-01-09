var React = require('react');
var UserStore = require('../stores/users');
var SocitStore = require('../stores/socits');
var utils = require('../utils');
var FollowButton = require('./FollowButton');

var UserProfile = module.exports = React.createClass({
    getInitialState: function () {
        var id = parseInt(this.props.params.id, 10);

        return {
            user: UserStore.get(id) || {},
            socits: SocitStore.byUserId(id)
        };
    },
    mixins: [UserStore.mixin(), SocitStore.mixin()],
    render: function () {
        console.log("UserProfile Rendering");
        var socits = this.state.socits.map(function (socit) {
            return <li key={socit.cid}> {socit.text} </li>;
        });

        return (<div>
            <img className='two columns' src={utils.avatar(this.state.user.email)} />
            <div className='ten columns'>

                <h1> {this.state.user.fullname} </h1>
                <h3 className='timestamp'> @{this.state.user.username} </h3>

                <p> <FollowButton userId={this.state.user.cid} /> </p>

                <ul>
                    {socits}
                </ul>
            </div>
        </div>);
    }
});

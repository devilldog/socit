var constants = require('../constants');
var UserStore = require('./users');

var SocitStore = module.exports = require('./store').extend({
    init: function () {
        this.bind(constants.GOT_SOCITS, this.set);
        this.bind(constants.SOCITED, this.add);
    },
    timeline: function () {
        var ids = [UserStore.currentUser.cid].concat(UserStore.currentUser.following);
        return this._data.filter(function (socit) {
            return ids.indexOf(socit.userId) > -1;
        });
    },
    byUserId: function (id) {
        return this._data.filter(function (socit) {
            return socit.userId === id;
        });
    }
});

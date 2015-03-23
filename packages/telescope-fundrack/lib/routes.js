Meteor.startup(function () {
    Router.route('/feedback', {
        name: 'feedback_submit',
        template: getTemplate('feedback_submit'),
        waitOn: function () {
            return coreSubscriptions.subscribe('allUsersAdmin');
        }
    });

});
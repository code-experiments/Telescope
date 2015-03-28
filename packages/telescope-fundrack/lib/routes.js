Meteor.startup(function () {
    Router.route('/feedback', {
        name: 'feedback_submit',
        template: getTemplate('feedback_submit'),
        waitOn: function () {
            return coreSubscriptions.subscribe('allUsersAdmin');
        }
    });
    Router.route('/submit-post', {
        name: 'submit-post',
        template: getTemplate('submit-post')
    });
});
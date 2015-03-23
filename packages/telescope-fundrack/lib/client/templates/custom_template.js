Meteor.startup(function () {
    Template[getTemplate('customTemplate')].helpers({
        name: function () {
            return "Bruce Willis";
        }
    });
    Template[getTemplate('feedbackSubmit')].helpers();
    Template[getTemplate('feedbackSubmit')].events({
        'submit .feedback-form': function(event){
            var form = event.target;
            var feedback = {
                name: form.userName.value,
                email: form.email.value,
                message: form.message.value
            };
            Meteor.call("sendFeedback", feedback);
            return false;
        }
    });
});

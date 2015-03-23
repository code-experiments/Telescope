Meteor.methods({
    sendFeedback: function (feedback) {
        console.log(feedback);
        var admins = ['fundrack@gmail.com', 'msprakashkumarchakka@gmail.com'];
        var html = feedback.name + "<br>" + feedback.email + "<br>" + feedback.message;

        admins.forEach(function(email){
            sendEmail(email, 'New Feedback from ' + feedback.name, html);
        });
    }
});
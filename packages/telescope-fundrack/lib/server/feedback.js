Meteor.methods({
    sendFeedback: function (feedback) {
        var admins = ['fundrack@gmail.com'];
        var html = feedback.name + "<br>" + feedback.email + "<br>" + feedback.message;

        admins.forEach(function(email){
            sendEmail(email, 'New Feedback from ' + feedback.name, html);
        });
        return true;
    },

    sendPostToAdmin: function(post){
        var admins = ['fundrack@gmail.com'];
        var html = "<a href='"+post.source+"'>Source</a>" + "<br>" + post.source + "<br>" + post.email + "<br>" + post.message;

        admins.forEach(function(email){
            sendEmail(email, 'New Post submitted from ' + post.email, html);
        });
        return true;
    }
});
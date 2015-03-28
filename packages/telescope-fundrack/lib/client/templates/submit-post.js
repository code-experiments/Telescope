Template[getTemplate('submit-post')].events({
    'submit .submit-post-form': function(e){
        var form = e.target;
        var details = {
            source: form.source.value,
            message: form.message.value
        };
        if(Meteor.user()) {
            details.email = getEmail(Meteor.user());
        } else {
            details.email = form.email.value;
        }
        Meteor.call("sendPostToAdmin", details, function(err){
            if(err){
                flashMessage(err.message, 'error');
            } else {
                Router.go('/');
                flashMessage(i18n.t('thanks_your_post_is_awaiting_approval'), 'success');
            }
        });
        return false;
    }
});

Template[getTemplate('submit-post')].helpers({
    userEmail: function(){
        if(Meteor.user())
            return getEmail(Meteor.user());
        else
            return null;
    },
    isNotLoggedIn: function () {
        return !Meteor.user();
    }
});
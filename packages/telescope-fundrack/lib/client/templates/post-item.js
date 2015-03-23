Meteor.startup(function () {
    Template[getTemplate('postFRHeading')].helpers({
        details: function(){
            return this;
        }
    });
    Template[getTemplate('postFRMeta')].helpers({
        details: function(){
            return this;
        },
        categoriesArray: function(){
            return _.map(this.categories, function (categoryId) { // note: this.categories maybe be undefined
                return Categories.findOne(categoryId);
            });
        },
        categoryLink: function(){
            return getCategoryUrl(this.slug);
        }
    });
    Template[getTemplate('postFRUpvote')].helpers({
        upvoted: function(){
            var user = Meteor.user();
            if(!user) return false;
            return _.include(this.upvoters, user._id);
        },
        upvotes: function(){
            return this.upvotes;
        }
    });

    Template[getTemplate('postFRUpvote')].events({
        'click .upvote-link': function(e, instance){
            var post = this;
            e.preventDefault();
            if(!Meteor.user()){
                Router.go('atSignIn');
                flashMessage(i18n.t("please_log_in_first"), "info");
            }
            Meteor.call('upvotePost', post, function(error, result){
                trackEvent("post upvoted", {'_id': post._id});
            });
        }
    });

});

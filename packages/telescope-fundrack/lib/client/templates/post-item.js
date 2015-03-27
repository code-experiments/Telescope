var getSiteUrl = Package['telescope-lib'].getSiteUrl;

Meteor.startup(function () {
    Template[getTemplate('postFRHeading')].helpers({
        details: function () {
            return this;
        }
    });
    Template[getTemplate('postFRMeta')].helpers({
        details: function () {
            return this;
        },
        categoriesArray: function () {
            return _.map(this.categories, function (categoryId) { // note: this.categories maybe be undefined
                return Categories.findOne(categoryId);
            });
        },
        categoryLink: function () {
            return getSiteUrl() + '/category/' + this.slug;
        },
        showFundingRound: function(){
            return this.funding_round && this.funding_round.length > 0 && this.funding_round != 'none';
        }
    });
    Template[getTemplate('postFRUpvote')].helpers({
        upvoted: function () {
            var user = Meteor.user();
            if (!user) return false;
            return _.include(this.upvoters, user._id);
        },
        upvotes: function () {
            return this.upvotes;
        }
    });

    Template[getTemplate('postFRUpvote')].events({
        'click .upvote-link': function (e, instance) {
            var post = this;
            e.preventDefault();
            if (!Meteor.user()) {
                Router.go('atSignIn');
                flashMessage(i18n.t("please_log_in_first"), "info");
            }
            Meteor.call('upvotePost', post, function (error, result) {
                trackEvent("post upvoted", {'_id': post._id});
            });
        }
    });
    Template[getTemplate('postContent')].events({
        'click .post-info': function (event) {
            var element = $(event.target);
            if(!element.hasClass('post-category')
                && location.pathname.indexOf('/posts/') == -1
                && element.closest('.post-meta-item').length == 0){
                Router.go('post_page', {_id: this._id});
            }
        }
    });

});

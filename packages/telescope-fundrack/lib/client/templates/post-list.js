Template[getTemplate('postFRList')].created = function() {
    Session.set('listPopulatedAt', new Date());
};

Template[getTemplate('postFRList')].helpers({
    postsLayout: function () {
        return getSetting('postsLayout', 'posts-list');
    },
    description: function () {
        var controller = Iron.controller();
        if (typeof controller.getDescription === 'function')
            return Iron.controller().getDescription();
    },
    before_post_item: function () {
        return getTemplate('before_post_item');
    },
    post_item: function () {
        return getTemplate('post_item');
    },
    after_post_item: function () {
        return getTemplate('after_post_item');
    },
    postsCursor : function () {
        if (this.postsCursor) { // not sure why this should ever be undefined, but it can apparently
            var datesMap= {};
            this.postsCursor.each(function (post, index, cursor) {
                post.rank = index;
                datesMap[getPostedDate(post)] = post;
            });
            console.log("custom");
            console.log(datesMap);
            return [];
        } else {
            console.log('postsCursor not defined');
        }
    },
    postsLoadMore: function () {
        return getTemplate('postsLoadMore');
    },
    postsListIncoming: function () {
        return getTemplate('postsListIncoming');
    }
});

var getPostedDate = function(post){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = new Date(post.createdAt);
    return days[date.getDay()] + "," + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
};
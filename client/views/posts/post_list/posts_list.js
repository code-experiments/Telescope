Template[getTemplate('posts_list')].created = function() {
    Session.set('listPopulatedAt', new Date());
};

Template[getTemplate('posts_list')].helpers({
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
            this.postsCursor.forEach(function (post, index, cursor) {
                post.rank = index;
                var date = getDateStamp(post.postedAt);
                if(datesMap[date])
                    datesMap[date].push(post);
                else
                    datesMap[date] = [post];
            });
            var finalArray = [];
            for(var key in datesMap){
                var dateString = getPostedDate(datesMap[key][0]);
                finalArray.push({date:dateString, results:datesMap[key], sortKey: key});
            }
            finalArray = finalArray.sort(function(a, b){
                return (a.sortKey < b.sortKey);
            });
            return finalArray;
        } else {
            console.log('postsCursor not defined')
        }
    },
    postsLoadMore: function () {
        return getTemplate('postsLoadMore');
    },
    postsListIncoming: function () {
        return getTemplate('postsListIncoming');
    }
});
var getDateStamp = function(dateString){
    var date = new Date(dateString);
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()).getTime();
};
var getPostedDate = function(post){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = new Date(post.postedAt);
    return days[date.getUTCDay()] + ", " + date.getUTCDate() + " " + months[date.getUTCMonth()] + " " + date.getUTCFullYear();
};
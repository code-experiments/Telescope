
Meteor.startup(function(){
    var increasePostClicks = function(postId, ip){

        var clickEvent = {
            name: 'click',
            properties: {
                postId: postId,
                ip: ip
            }
        };

        // make sure this IP hasn't previously clicked on this post
        var existingClickEvent = Events.findOne({name: 'click', 'properties.postId': postId, 'properties.ip': ip});

        if(!existingClickEvent){
            logEvent(clickEvent);
            Posts.update(postId, { $inc: { clickCount: 1 }});
        }
    };

    Router.route('/view', {
        name: 'view',
        where: 'server',
        action: function(){
            var query = this.request.query;
            if(query.id){ // for some reason, query.url doesn't need to be decoded
                var post = Posts.findOne({_id: query.id});
                if (post) {
                    var ip = this.request.connection.remoteAddress;
                    increasePostClicks(post._id, ip);
                    this.response.writeHead(302, {'Location': post.url});
                } else {
                    // don't redirect if we can't find a post for that link
                    this.response.write('Invalid URL');
                }
                this.response.end();
            }
        }
    });
});
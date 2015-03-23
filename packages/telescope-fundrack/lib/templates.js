
templates['viewsMenu'] = 'empty';
templates['postModule'] = 'postItem';
templates['nav'] = 'customNav';
templates['postAvatars'] = 'empty';
templates['postUpvote'] = 'postFRUpvote';

postModules.push({
    template: 'sourceLink',
    order: 26
});

postModules = _.reject(postModules, function(module){
    return module.template == 'postRank'
});
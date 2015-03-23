var headerColor = "#16A086";
var settings = {
    "authMethods" : [
        "email",
        "twitter",
        "facebook"
    ],
    "autoSubscribe" : true,
    "buttonColor" : "#4cba6f",
    "clickyId" : "100825029",
    "commentInterval" : 15,
    "debug" : false,
    "defaultEmail" : "hello@fundrack.com",
    "defaultView" : "top",
    "description" : "Just Funded is a curation of the new funding news, every day. Discover the hot mobile apps, websites, and technology products that have got funded.",
    "emailFooter" : "You are receiving this e-mail because you either requested this info through email or one of your friends have suggested you to us. If you think this email is not intended to you. Please click on unsubscribe button or mail us to unsubscribe@justfunded.co",
    "emailNotifications" : false,
    "embedlyKey" : "8ba12b61f3e743be968eee0dd43c04c4",
    "enableNewsletter" : true,
    "googleAnalyticsId" : "UA-27546725-6",// TODO Need to Verify
    "headerColor" : headerColor,
    "kadiraAppId" : "Wk5LZofhAuBf2oeiM",
    "kadiraAppSecret" : "7d9da423-87de-4374-b450-3d59dc16ea92",
    "language" : "en",
    "maxPostsPerDay" : 200,
    "newsletterFrequency" : 1,
    "newsletterTime" : "00:00",
    "postInterval" : 30,
    "postsLayout" : "posts-list",
    "postsPerPage" : 30,
    "requirePostInvite" : false,
    "requirePostsApproval" : true,
    "requireViewInvite" : false,
    "scoreUpdateInterval" : 30,
    "showBanner" : true,
    "showTaglineBanner" : true,
    "siteUrl" : "http://www.fundrack.com",
    "startInvitesCount" : 3,
    "tagline" : "Stay on the top of today's funding news!",
    "thumbnailHeight" : 0,
    "thumbnailWidth" : 0,
    "title" : "fundrack",
    "twitterAccount" : "fundrack" // TODO Need to Verify
};

Meteor.startup(function(){
    if(Settings.find({}).count() == 0) {
        Settings.insert(settings);
    }

    if(ServiceConfiguration.configurations.find({service:"facebook"}).count() == 0) {
        ServiceConfiguration.configurations.insert({
            service: "facebook",
            appId: "1686455964915238",
            secret: "2f06302ecb94395b914d43160261be2b"
        });
    }
    if(ServiceConfiguration.configurations.find({service:"twitter"}).count() == 0) {
//        ServiceConfiguration.configurations.insert({
//            service: "twitter"
//        });
    }
});

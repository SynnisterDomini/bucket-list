// // first, remove configuration entry in case service is already configured
// Accounts.loginServiceConfiguration.remove({
//   service: "facebook"
// });
// Accounts.loginServiceConfiguration.insert({
//   service: "facebook",
//   appId: "666293863511471",
//   secret: "63f9eaae510e3f5fa41e0cff2b640a5c"
// });

// // first, remove configuration entry in case service is already configured
// Accounts.loginServiceConfiguration.remove({
//   service: "twitter"
// });
// Accounts.loginServiceConfiguration.insert({
//   service: "twitter",
//   consumerKey: "i1HVGOd5RKRMwyZKmumCuiFuE",
//   secret: "b0gzulP07TXcUOItkLZyTzicniKbqnspyUm142Z5wdsNBVW2jx"
// });

// // first, remove configuration entry in case service is already configured
// Accounts.loginServiceConfiguration.remove({
//   service: "google"
// });
// Accounts.loginServiceConfiguration.insert({
//   service: "google",
//   clientId: "527151180636-b25gao2ers5ae64uekr6rufmv4h739il.apps.googleusercontent.com",
//   secret: "MMF_ljvQ3A4zQqFgfmAZRa7i"
// });

Accounts.onCreateUser(function(options, user) {
  user.personalItems = [];
  if (options.profile)
    user.profile = options.profile;
  return user;
});

Meteor.users.allow({
   update: function(userId, user){
     return user._id === Meteor.userId();
     return user.personalItems === Meteor.userID().personalItems();
   }
});

// Meteor.publish("userData", function () {
//   if (this.userId) {
//     return Meteor.users.find({_id: this.userId},
//                              {fields: {personalItems: 1}});
//   } else {
//     this.ready();
//   }
// });
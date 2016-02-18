Meteor.methods({
  'uploadAvatar': (base64) => {
    Meteor.users.update({_id: Meteor.userId()},
      {
        $set: {
          'profile.avatar': base64
        }
      }
    );
  }
});

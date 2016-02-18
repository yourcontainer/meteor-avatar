Template.userAvatar.helpers({
  src() {
    const userObj = Meteor.user();
    return userObj.profile && userObj.profile.avatar || '/default.png';
  }
});


Template.uploadAvatar.events({
  "change #uploadAvatarInput": function(event, template){
    event.preventDefault();

    var File = event.target.files[0];
    var Reader  = new FileReader();

    Reader.addEventListener("load", function () {
      Meteor.call('uploadAvatar', Reader.result);
    }, false);

    if (File) {
      Reader.readAsDataURL(File);
    }
  }
});

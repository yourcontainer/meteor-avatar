# meteor-avatar

Simple helpers will be useful provide the avatar system to your awesome users

# Install and usage
```
meteor add yourcontainer:meteor-avatar
```

and then show the avatar
```
{{> userAvatar id="avatar" width="100px" height="100px" }}
```
you can use other attributes such as title, alt, class

Show upload form
```
{{> uploadAvatar label="Upload avatar"}}
```

Image stored in base64 in `profile.avatar` field, if you use collection2 package you must set up the field in you schema
```
avatar: {
  type: String,
  optional: true
}
```

# Mozaik Playlist Spotify

Mozaik Playlist Spotify is an application to create our own spotify playlist that personalized from our mood, unique taste and also memories. We can select our best tracks and named it by ourself. This application is my final project submission for #GenerasiGIGIH

![image](https://user-images.githubusercontent.com/60766317/164719685-41515963-e6e0-494a-b7ad-12f2c788d130.png)


## Features

### Requirement Features from Gigih

 - [x] User need to login first before accessing the Create Playlist page
 - [x] Select Songs
 - [x] A form for playlist title and description
 - [x] Token stored on Redux
 - [x] toBeInTheDocument() and userEvent for Testing
 - [x] Zero eslint error

### Additional Features

- Impelement ChakraUI Component
- Written in Typescript
- Get UserPofile store on Redux
- Testing for searchAPI
- Impelement LocalStorage to save token 
- Show User's profile (image and name)
- Show list of user's playlist with image,name and description
- Show list of user's song from spesific playlist with table
- Show list of user's top tracks
- Responsive design

## Installion

- Clone the repository
```
git clone https://github.com/moehzi/spotify-playlist.git
```
- Go to the project directory
```
cd spotify-playlist
```
- Change the Spotify Key on .env file to your own Spotify Key
- Change the Redirect URI on .env file to http://localhost:3000
- Install dependencies
```
npm install
```
- Run the app
```
npm start
```

## Preview

Here some screenshots how's the app run

1. You need to login first in Landing Page with spotify account and then you will be redirect to page `/create-playlist` .
<table>
  <tr>
    <td valign="top">
        ![image](https://user-images.githubusercontent.com/60766317/164721424-f043c819-5af3-4caf-8c47-96b7323efc37.png)
    </td>
    <td valign="top">
        ![image](https://user-images.githubusercontent.com/60766317/164721386-2b5ee787-51c3-466e-beef-f05d01549157.png)
    </td>
  </tr>
</table>


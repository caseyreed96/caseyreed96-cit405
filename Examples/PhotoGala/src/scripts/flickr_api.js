import api_key from "./secret/api_keys.js"; //Store API Keys separately

const FLICKR_API_KEY = api_key.flickr_api_key; //Grab key from secret/api_keys.js
const USER_ID="REPLACE WITH YOUR FLICKR USER ID"; //Replace with Your User ID in Flickr API

//Method to retrieve a listing of photos from Flickr
function fetchPhotos() {
  const API_STEM = `https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1`;
  return fetch(API_STEM)
    .then(response => response.json())
    .then(responseJSON => {
      return {
        photos: responseJSON.photos,
      };
    })
    .catch(error => {
      console.error(error);
    });
}

//Method to retrieve a listing of photo albums from Flickr
function fetchPhotoAlbums() {
  const API_STEM = `https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${FLICKR_API_KEY}&user_id=${USER_ID}&format=json&nojsoncallback=1`;
  return fetch(API_STEM)
    .then(response => response.json())
    .then(responseJSON => {
      return {
        photosets: responseJSON.photosets,
      };
    })
    .catch(error => {
      console.error(error);
    });
}
//Method to retrieve a listing of photos from Flickr photo album
function fetchPhotoAlbum(album_id) {
  const API_STEM = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${album_id}&user_id=${USER_ID}&format=json&nojsoncallback=1`;
  return fetch(API_STEM)
    .then(response => response.json())
    .then(responseJSON => {
      return {
        photosets: responseJSON.photoset,
      };
    })
    .catch(error => {
      console.error(error);
    });
}

//Method to retrieve a single photo from Flickr
function fetchPhoto(photo_id, server_id, secret, farm, owner) {
  const API_STEM = `https://live.staticflickr.com/${server_id}/${photo_id}_${secret}_w.jpg`;
  return API_STEM;
}

//Method to retrieve profile info from FLickr
function fetchProfile() {
  const API_STEM = `https://www.flickr.com/services/rest/?method=flickr.profile.getProfile&api_key=${FLICKR_API_KEY}&user_id=${USER_ID}&format=json&nojsoncallback=1`;
  //console.log(API_STEM);
  return fetch(API_STEM)
    .then(response => response.json())
    .then(responseJSON => {
      //console.log(responseJSON);
      return {
        profile: responseJSON.profile
      };
    })
    .catch(error => {
      console.error(error);
    });
}

//Method to retrieve profile info from FLickr
function fetchProfilePhoto() {
  const API_STEM = `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${FLICKR_API_KEY}&user_id=${USER_ID}&format=json&nojsoncallback=1`;
  return fetch(API_STEM)
    .then(response => response.json())
    .then(responseJSON => {
      let photo_url= fetchPhoto(responseJSON.photos.photo[0].id,responseJSON.photos.photo[0].server,responseJSON.photos.photo[0].secret,responseJSON.photos.photo[0].farm,responseJSON.photos.photo[0].owner);
      return {photo_url: photo_url};
    })
    .catch(error => {
      console.error(error);
    });
}
export default { fetchPhotos: fetchPhotos, fetchPhotoAlbums: fetchPhotoAlbums, fetchPhotoAlbum: fetchPhotoAlbum, fetchPhoto: fetchPhoto, fetchProfile: fetchProfile, fetchProfilePhoto: fetchProfilePhoto  };

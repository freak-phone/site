let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
  {
    name: "How Do You Think?",
    artist: "Date of Birth",
    image: "/assets/graphics/music/featuredsong11.png",
    path: "https://files.catbox.moe/g2k259.mp3"
  },
  {
    name: "One Thousand Tears of A Tarantula",
    artist: "Dengue Fever",
    image: "/assets/graphics/music/featuredsong8.png",
    path: "https://files.catbox.moe/3se6f6.mp3"
  },
  {
    name: "Gelbi",
    artist: "Nu Guinea",
    image: "/assets/graphics/music/featuredsong10.png",
    path: "https://files.catbox.moe/r3ox5m.mp3"
  },
  {
    name: "Gila Monster",
    artist: "King Gizzard and the Lizard Wizard",
    image: "/assets/graphics/music/featuredsong6.png",
    path: "https://www.dl.dropboxusercontent.com/s/xg3wxwzkxxsi1xh/King_Gizzard_the_Lizard_Wizard_-_Gila_Monster.mp3"
  },
  {
    name: "The Smiling Hour",
    artist: "Sara Vaughan",
    image: "/assets/graphics/music/featuredsong5.png",
    path: "https://www.dl.dropboxusercontent.com/s/5xpdhi79tn3qp66/Sarah%20Vaughan%20-%20The%20Smiling%20Hour.mp3"
  },
  {
    name: "Free",
    artist: "Chakra",
    image: "/assets/graphics/music/featuredsong4.png",
    path: "https://www.dl.dropboxusercontent.com/s/yqqxul35juwng59/Chakra%20-%20Free.mp3"
  },
  {
    name: "Woof Woof",
    artist: "ARTHUR",
    image: "/assets/graphics/music/featuredsong3.png",
    path: "https://files.catbox.moe/wfs8b6.mp3"
  },
  {
    name: "Tell Me a Bedtime Story",
    artist: "Kimiko Kasai & Herbie Hancock",
    image: "/assets/graphics/music/featuredsong2.png",
    path: "https://files.catbox.moe/zpxlrz.mp3"
  },
  {
    name: "Music for Eels",
    artist: "Sven Libaek",
    image: "/assets/graphics/music/featuredsong.jpg",
    path: "https://www.dl.dropboxusercontent.com/s/tkw8690u5f1j6w3/Music%20for%20Eels.mp3"
  },
];

//

//

function loadTrack(track_index) {
  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();

  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  // Update details of the track
  track_art.style.backgroundImage =
     "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
     "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);

  // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener("ended", nextTrack);

  // Apply a random background color
  random_bg_color();
}

// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;

  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>';
}

function pauseTrack() {
  // Pause the loaded track
  curr_track.pause();
  isPlaying = false;

  // Replace icon with the play icon
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';
}

function nextTrack() {
  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;

  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length - 1;

  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  seekto = curr_track.duration * (seek_slider.value / 100);

  // Set the current track position to the calculated seek position
  curr_track.currentTime = seekto;
}

function setVolume() {
  // Set the volume according to the
  // percentage of the volume slider set
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

// Load the first track in the tracklist
loadTrack(track_index);

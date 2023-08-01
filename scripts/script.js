new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Opening Catch",
          artist: "Newer Team",
          cover: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/thumbs/NewerAlbumCover.png",
          source: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/jmdpytqu/01%20-%20Opening%20Catch.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "Title Screen",
          artist: "Newer Team",
          cover: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/thumbs/NewerAlbumCover.png",
          source: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/vzsglpdk/02%20-%20Title%20Screen.mp3",
          url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
          favorited: true
        },
        {
          name: "File Select",
          artist: "Newer Team",
          cover: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/thumbs/NewerAlbumCover.png",
          source: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/fqqluvsk/03%20-%20File%20Select.mp3",
          url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
          favorited: false
        },
        {
          name: "Overworld",
          artist: "Newer Team",
          cover: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/thumbs/NewerAlbumCover.png",
          source: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/dterfoeu/04%20-%20Overworld.mp3",
          url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
          favorited: false
        },
        {
          name: "Underground",
          artist: "Newer Team",
          cover: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/thumbs/NewerAlbumCover.png",
          source: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/jfyoxuhh/05%20-%20Underground.mp3",
          url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
          favorited: true
        },
        {
          name: "Autumn",
          artist: "Newer Team",
          cover: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/thumbs/NewerAlbumCover.png",
          source: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/kftoijit/06%20-%20Autumn.mp3",
          url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
          favorited: false
        },
        {
          name: "Athletic",
          artist: "Newer Team",
          cover: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/thumbs/NewerAlbumCover.png",
          source: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/thumbs/NewerAlbumCover.png",
          url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
          favorited: true
        },
        {
          name: "Underwater",
          artist: "Newer Team",
          cover: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/thumbs/NewerAlbumCover.png",
          source: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/ascahhzz/08%20-%20Underwater.mp3",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false
        },
        {
          name: "Crystal Sewer",
          artist: "Newer Team",
          cover: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/thumbs/NewerAlbumCover.png",
          source: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/exogvwtv/09%20-%20Crystal%20Sewer.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "Wagon Way",
          artist: "Newer Team",
          cover: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/thumbs/NewerAlbumCover.png",
          source: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/ymdplwll/10%20-%20Wagon%20Way.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
         {
          name: "Airship",
          artist: "Newer Team",
          cover: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/thumbs/NewerAlbumCover.png",
          source: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/ttzyxmnx/11%20-%20Airship.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }, 
        {
          name: "Beach",
          artist: "Newer Team",
          cover: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/thumbs/NewerAlbumCover.png",
          source: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/nxldjycq/12%20-%20Beach.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "Forest",
          artist: "Newer Team",
          cover: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/thumbs/NewerAlbumCover.png",
          source: "https://vgmsite.com/soundtracks/newer-super-mario-bros-ds/glbiqfyc/13%20-%20Forest.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});

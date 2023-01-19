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
          name: "The London",
          artist: "Young Thug, Travis Scott",
          cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2Fa648bd49565f7fb70a88deb9ec930214.1000x1000x1.png&f=1&nofb=1&ipt=646b5f3d36ef377c3b37625330fc8a869b037c5e482a245dc968325544712cbc&ipo=images",
          source: "./mp3/Thelondon.mp3",
          url: "https://www.youtube.com/watch?v=OKhT_6XtD7I",
          favorited: false
        },
        {
          name: "Locked out of heaven",
          artist: "Bruno Mars",
          cover: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.chartsinfrance.net%2Fstyle%2Fbreves%2F7%2Fphoto_1356106147.png&f=1&nofb=1&ipt=b8c460dbe5c2422cc7cc149be31e2229ffa5929accf8c5aab738a18f11227ca8&ipo=images",
          source: "./mp3/Brunoooo.mp3",
          url: "https://www.youtube.com/watch?v=e-fA-gBCkj0",
          favorited: true
        },
        {
          name: "Empire State of Mind",
          artist: "Jay z, feat. Alicia keys",
          cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.hip-hopvibe.com%2Fwp-content%2Fuploads%2F2012%2F08%2FEmpire-State-of-Mind.jpg&f=1&nofb=1&ipt=64066b7087129838c99665a51a18bc946ceaf8bfa0ed2c8bd856bf49ccbfef88&ipo=images",
          source: "./mp3/NewYork.mp3",
          url: "https://www.youtube.com/watch?v=vk6014HuxcE",
          favorited: false
        },
        {
          name: "Billie Jean",
          artist: "Michael Jackson",
          cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2F80rt2zjgjfx41.jpg%3Fauto%3Dwebp%26s%3D5b66e4f7ee3425a1a29ae6572f68f9a4c7f82a1b&f=1&nofb=1&ipt=f04cce651234a1587a04ff17280100de67fa3f3d508a3bdbe65f0919916a9113&ipo=images",
          source: "./mp3/MJ.mp3",
          url: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y",
          favorited: false
        },
        {
          name: "Chinois",
          artist: "Luka schreiber familie",
          cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffarm6.staticflickr.com%2F5747%2F22980073791_2c1a1d227f_o.jpg&f=1&nofb=1&ipt=6799d5daef5778ab21c37cc16d69b301710698c43a41b3143d60d869cc634852&ipo=images",
          source: "./mp3/Luka.mp3",
          url: "https://www.youtube.com/watch?v=gdZLi9oWNZg",
          favorited: true
        },
        {
          name: "Kassav",
          artist: "Gazo",
          cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2F857314bbff4977801b5ffe5c076e5914.1000x1000x1.jpg&f=1&nofb=1&ipt=0ff805067a061347915dd05b38608ef3ae9c363543544d356719a6209cc12261&ipo=images",
          source: "./mp3/gazo.mp3",
          url: "https://www.youtube.com/watch?v=zNEU9VExoWE",
          favorited: false
        },
        {
          name: "Thundertrucks",
          artist: "ACDC",
          cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpre00.deviantart.net%2Fdd35%2Fth%2Fpre%2Fi%2F2013%2F351%2F2%2Fb%2Fac_dc_thunderstruck_album_reimagined_by_jerle73-d6yb5kr.jpg&f=1&nofb=1&ipt=6052d7f9c396a990ae098f1ebfa0eb2d897bdde11afbddf93af5d1b3f5dba037&ipo=images",
          source: "./mp3/ACDC.mp3",
          url: "https://www.youtube.com/watch?v=v2AC41dglnM",
          favorited: true
        },
        {
          name: "Dior",
          artist: "Pop Smoke",
          cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2F62ca1c82104455c025d15bd93c441bfb.1000x1000x1.jpg&f=1&nofb=1&ipt=fe851da5fd5494762b4f97a04ee4a9340cb2a592debd6d545d6e77782437cab8&ipo=images",
          source: "./mp3/Dior.mp3",
          url: "https://www.youtube.com/watch?v=goYgHnsQdtY",
          favorited: false
        },
        {
          name: "Gangsta's Paradise",
          artist: "Coolio",
          cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2F691b44047ee0d7b8ef1ca842167dd4d6.1000x1000x1.jpg&f=1&nofb=1&ipt=81ea5e3f60bdd68f5a887ee48bb64e5dddb2d25a96489b9014d6d4a37b517f60&ipo=images",
          source: "./mp3/gang.mp3",
          url: "https://www.youtube.com/watch?v=fPO76Jlnz6c",
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

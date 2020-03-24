class Audio {
  static play(data) {
    return new Promise((resolve, reject) => {
      const playing = data.play();
      if (playing) {
        resolve();
      } else {
        reject();
      }
    });
  }

  static pause(data) {
    return new Promise((resolve, reject) => {
      const pause = data.pause();
      if (pause) {
        resolve();
      } else {
        reject();
      }
    });
  }
}

export default Audio;

class MusicPlayer {

    play(url = 'FreesoundOrgSynthesizedHornByDarkadders.mp3') {
        const audio = new Audio(url);
        audio.play();
    }

    static create() {
        if (!MusicPlayer.instance) {
            MusicPlayer.instance = new MusicPlayer();
        }
        return MusicPlayer.instance;
    }

}

MusicPlayer.instance = null;

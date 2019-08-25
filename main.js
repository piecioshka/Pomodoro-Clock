
function main() {

    // @ts-ignore
    Clock.create();

    const $clock = document.querySelector('#wholeClock');
    $clock.addEventListener('ticktock', () => {
        const player = MusicPlayer.create();
        player.play();
    });

}

main();

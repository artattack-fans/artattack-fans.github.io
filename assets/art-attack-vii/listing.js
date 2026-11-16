const GALLERY_LISTING = `
scenes/salute_cloppy.jpeg
scenes/jnj.jpeg
scenes/jordan.jpeg
scenes/i_tried_to_guide_u.jpeg
scenes/but_we_got_lost.jpeg
scenes/blame_game.jpeg
scenes/champ.jpeg
scenes/complete.jpeg
scenes/cool_sunnies.jpeg
scenes/cowboy_alex.jpeg
scenes/crafty.jpeg
scenes/crowned_guide.jpeg
scenes/cubes.jpeg
scenes/departing.jpeg
scenes/finding_a_solution.jpeg
scenes/green_haze.jpeg
scenes/hi_evan.jpeg
scenes/hi_evan_2.jpeg
scenes/hi_maggie.jpeg
scenes/hunting.jpeg
scenes/i_m_fine.jpeg
scenes/i_want_one.jpeg
scenes/quiet.jpeg
scenes/quiet_2.jpeg
scenes/searching.jpeg
scenes/sportsmanship.jpeg
scenes/tnm.jpeg
scenes/cat_dog.jpeg
scenes/cloppy.jpeg
scenes/cubes.jpeg
scenes/dilbert.jpeg
scenes/hillside_farm.jpeg
scenes/flowers.jpeg
scenes/hangman.jpeg
scenes/hangman_2.jpeg
scenes/icons.jpeg
scenes/marilyn.jpeg
scenes/michael_claire.jpeg
scenes/miniclip.jpeg
scenes/pride.jpeg
scenes/screen.jpeg
scenes/screen-pre-party.jpeg
scenes/sunny_day.jpeg
scenes/sweedish_sats.jpeg
scenes/the_simps.jpeg
scenes/turtle.jpeg
scenes/wait.jpeg
scenes/cubes_2.jpeg
scenes/mnc.jpeg
campfire.gif
pumpkin-real.gif
virus.gif
tune-up.gif
aavii_no-sig.jpg
aavii_promo_ii.png
promo.png
aavii_logo.png
`;

const getPrefix = () => "/assets/art-attack-vii/";

window.itemHeaderProducerFn = (item) => {
    const cE = document.createElement.bind(document);
    const titlebar = cE('div');
    titlebar.classList.add('win-titlebar');

    const winTitle = cE('span');
    winTitle.classList.add('win-title');
    winTitle.innerText = item.split('/').reverse()[0];
    titlebar.appendChild(winTitle);

    const winControls = cE('span');
    winControls.classList.add('win-controls');
    const expand = cE('span');
    expand.classList.add('win-button');
    expand.classList.add('win-minimize');
    const maximize = cE('span');
    maximize.classList.add('win-button');
    maximize.classList.add('win-maximize');
    const close = cE('span');
    close.classList.add('win-button');
    close.classList.add('win-close');
    winControls.appendChild(expand);
    winControls.appendChild(maximize);
    winControls.appendChild(close);

    titlebar.appendChild(winControls);
    return titlebar;
}
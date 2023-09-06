/* 8 kyu - Are You Playing Banjo? */

function areYouPlayingBanjo(name) {
    // Examine first character of name to see if 'R' or 'r'
    return name[0] === 'r' || name[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`;
}
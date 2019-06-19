// const SoundcloudPageLoader = require('./src/soundcloudPageLoader');
// const YoutubePageLoader = require('./src/youtubePageLoader');
// const PrimePageLoader = require('./src/primePageLoader');
const fs = require('fs');
// const queries = require('./src/queries');

// console.time('browse');
// const browser = new PrimePageLoader(queries.primeQueries.counterInfo);
// browser.visit('https://music.amazon.com/playlists/B07KXS3DKR')
//   .then(async () => {
//     const source = await browser.getPageSource();
//     fs.writeFileSync('./assets/primeeexample.html', source);
//     await browser.quit();
//     console.timeEnd('browse');
//   }).catch((error) => {
//     console.log(error);
//     console.timeEnd('browse');
//   });

// https://music.youtube.com/playlist?list=PLFgquLnL59anX9MlB94jIg69rR6FyzqQP
// https://music.youtube.com/playlist?list=RDCLAK5uy_k2pS49OPwSZtJeXgWnvAPmlB8gJCphDes
// https://soundcloud.com/james-vanho/sets/melodic-dubstep
// https://music.youtube.com/playlist?list=RDCLAK5uy_kWm5me-X3IbEMBOWHd2fI7d4aQoauMcbI
// https://music.amazon.com/playlists/B07KXS3DKR
// https://music.amazon.com/user-playlists/7b4b6d204bd3437e9ae59d8ea449a816sune
// https://soundcloud.com/enioluwa-segun/sets/dub
// https://music.youtube.com/playlist?list=PL95w6cQ_ViuIKAt8s2vyIacDiGfBiP4M7


const importer = require('.');
console.time('browse');
importer.getPlaylistData('https://music.youtube.com/playlist?list=PL95w6cQ_ViuIKAt8s2vyIacDiGfBiP4M7')
  .then((data) => {
    console.timeEnd('browse');
    fs.writeFileSync('./assets/youtube1.json', JSON.stringify(data, null, 2));
  })
  .catch((error) => {
    console.timeEnd('browse');
    console.log(error);
  });


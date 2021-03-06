/**
 * Interface to standardize queries from different platforms
 * Currently only needed by Apple Music since its JSON response is
 * not complete.
 */
class PlaylistQuery {
  constructor(props) {
    this.counterInfo = props.counterInfo;
    this.authorQuery = props.authorQuery;
    this.descriptionQuery = props.descriptionQuery;
    this.photoQuery = props.photoQuery;
    this.trackQuery = props.trackQuery;
    this.trackTitleQuery = props.trackTitleQuery;
    this.trackArtistQuery = props.trackArtistQuery;
    this.titleQuery = props.titleQuery;
    this.trackIsExplicitQuery = props.trackIsExplicitQuery;
    this.trackLengthQuery = props.trackLengthQuery;
    this.telegraphedLengthQuery = props.telegraphedLengthQuery;
  }
}


const soundcloudQueries = new PlaylistQuery({
  counterInfo: {
    songCountClasses: 'genericTrackCount large m-active',
    eofClasses: 'paging-eof sc-border-light-top',
    trackClasses: 'trackItem__number sc-font-tabular' },
  authorQuery: 'a.soundTitle__username.g-opacity-transition-500.g-type-shrinkwrap-inline.g-type-shrinkwrap-large-secondary.soundTitle__usernameHero.sc-type-medium',
  descriptionQuery: 'div.truncatedAudioInfo__content',
  photoQuery: 'div.listenArtworkWrapper__artwork',
  trackQuery: 'li.trackList__item.sc-border-light-bottom',
  trackTitleQuery: 'a.trackItem__trackTitle.sc-link-dark.sc-font-light',
  trackArtistQuery: 'a.trackItem__username.sc-link-light',
  titleQuery: 'span.soundTitle__title.sc-font.g-type-shrinkwrap-inline.g-type-shrinkwrap-large-primary',
  trackIsExplicitQuery: null,
  // to get this you have to hit play on every song during the automation, and send the data as part of the html somehow
  trackLengthQuery: null,
  telegraphedLengthQuery: 'div.genericTrackCount__title.sc-font-tabular',
});

const primeQueries = new PlaylistQuery({
  counterInfo: {
    initValue: '...',
    songCountClasses: 'viewSubDescription',
    trackClasses: 'playlistDetailsListItem' },
  authorQuery: 'div.viewSubDescription',
  descriptionQuery: 'h2.viewDescription',
  photoQuery: 'div.playlistHeaderArt',
  trackQuery: 'tr.playlistDetailsListItem',
  trackTitleQuery: 'td.title',
  trackArtistQuery: 'span.artist',
  titleQuery: 'h1.viewTitle',
  trackIsExplicitQuery: null,
  trackLengthQuery: 'div.listViewDuration',
  telegraphedLengthQuery: 'div.viewSubDescription',
});

const youtubeQueries = new PlaylistQuery({
  counterInfo: {
    continuationsXpath: '//div[@id=\'continuations\' and @class=\'style-scope ytmusic-playlist-shelf-renderer\']',
  },
  authorQuery: 'yt-formatted-string.subtitle.style-scope.ytmusic-detail-header-renderer',
  descriptionQuery: 'yt-formatted-string#description',
  photoQuery: 'yt-img-shadow img[width="264"]',
  trackQuery: 'div.flex-columns.style-scope.ytmusic-responsive-list-item-renderer',
  trackTitleQuery: 'yt-formatted-string.title.style-scope.ytmusic-responsive-list-item-renderer',
  trackArtistQuery: 'div.secondary-flex-columns.style-scope.ytmusic-responsive-list-item-renderer',
  titleQuery: 'yt-formatted-string.title.style-scope.ytmusic-detail-header-renderer',
  trackIsExplicitQuery: 'yt-icon.icon.style-scope.ytmusic-inline-badge-renderer[title="Explicit"]',
  trackLengthQuery: 'yt-formatted-string.fixed-column.style-scope.ytmusic-responsive-list-item-renderer',
  telegraphedLengthQuery: 'yt-formatted-string.subtitle.style-scope.ytmusic-detail-header-renderer',
});

module.exports = {
  soundcloudQueries,
  primeQueries,
  youtubeQueries,
  PlaylistQuery,
};

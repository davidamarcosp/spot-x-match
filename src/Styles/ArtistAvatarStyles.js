export default {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '4.5rem'
  },
  artistWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  artistCard: {
    maxWidth: 345,
    marginBottom: '20px',
    display: 'inline-block',
    background: 'linear-gradient(90deg, rgba(184,183,200,1) 0%, rgba(153,153,158,1) 0%, rgba(213,213,213,1) 65%)',
    boxShadow: '6px 6px 15px -4px rgba(77,71,77,1)',
    zIndex: 1,
    transition: 'all 0.5s'
  },
  artistAvatar: {
    height: '320px',
    width: '320px',
    borderRadius: '2px'
  },
  artistName: {
    fontWeight: '600',
    color: 'white',
    textShadow: '4px 4px 6px rgba(66,66,66,0.77)'
  },
  playerWrapper: {
    maxWidth: '330px'
  },
  nowPlaying: {
    maxHeight: '31px',
    overflow: 'hidden',
    marginTop: '7px'
  }
};
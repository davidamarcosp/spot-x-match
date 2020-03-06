export default {
  notchedOutline: { borderColor: "#1e88e5 !important" },
  input: {
    height: '60px',
    width: '300px',
    fontSize: '1rem',
    backgroundColor: '#000000'
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    alignItems: 'center'
  },
  spinner: {
    position: 'relative',
    right: '42px'
  },
  landing: {
    animationName: '$fadeInDown',
    animationDuration: '1s',
    width: '100%', 
    height: '70vh', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  '@keyframes fadeInDown': {
    from: {
      opacity: '0',
      transform: 'translatey(-55px)'
    },
    to: {
      opacity: '1',
      transform: 'translatey(0)'
    }
  },
  helper: {
    position: 'absolute',
    color: 'red',
    top: '60px',
    left: '68px'
  },
  placeholder: {
    color: 'white',
    '&::placeholder':{
      color: 'white'
    }
  }
};
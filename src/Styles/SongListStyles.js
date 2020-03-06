export default {
  root: {
    display: 'flex', 
    minHeight: '676px'
  },
  list: {
    maxHeight: 676,
    overflow: 'hidden',
    padding: 0,
    margin: 'auto',
    '&:hover':{
      overflow: 'auto'
    }
  },
  button: {
    height: '65px',
    width: '65px',
    marginLeft: '1rem',
    alignSelf: 'center',
    color: '#1e88e5',
    '&:hover': {
      backgroundColor: '#e0e0e0'
    }
  },
  snackbarText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: '600',
    textShadow: '4px 4px 6px rgba(66,66,66,0.77)'
  },
  snackbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1565c0'
  },
  divider: {
    backgroundColor: 'gray'
  }
}
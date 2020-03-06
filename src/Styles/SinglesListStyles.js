export default {
  root: {
    display: 'flex', 
    minHeight: '676px',
    justifyContent: 'space-between'
  },
  list: {
    maxHeight: 676,
    overflow: 'hidden',
    padding: 0,
    margin: 'auto',
    '&:hover': {
      overflow: 'auto'
    }
  },
  button: {
    height: '65px',
    width: '65px',
    marginRight: 'auto',
    marginLeft: '2rem',
    alignSelf: 'center'
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
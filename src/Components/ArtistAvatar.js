import React, { useContext } from 'react';
import { ArtistContext } from '../Context/ArtistContext';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ReactPlayer from 'react-player'
import { withStyles } from '@material-ui/core/styles';
import styles from '../Styles/ArtistAvatarStyles';


function ArtistAvatar(props) {

  const { resetAlbum, singles, handleSingleChange, artist, song, playing } = useContext(ArtistContext);

  return (
    <div>
      {artist &&
        <div className={props.classes.artistWrapper}>
          <ToggleButtonGroup
            value={singles ? true : false}
            exclusive
            onChange={handleSingleChange}
            aria-label="text alignment"
            style={{ marginBottom: '20px' }}
          >
            <ToggleButton
              value={true}
              aria-label="singles-option"
              disabled={singles ? true : false}
              onClick={() => resetAlbum()}
            >
              {'singles'}
            </ToggleButton>
            <ToggleButton
              value={false}
              aria-label="album-option"
              disabled={!singles ? true : false}
            >
              {'albums'}
            </ToggleButton>
          </ToggleButtonGroup>
          <Card className={props.classes.artistCard}>
            <CardHeader
              avatar={
                <Avatar
                  className={props.classes.artistAvatar}
                  variant="square"
                  src={artist.images[1].url}
                >
                </Avatar>
              }
            />
            <CardContent>
              <Typography
                className={props.classes.artistName}
                gutterBottom
                variant="h5"
                component="h2"
                align='center'
              >
                {artist.name.toUpperCase()}
                <Tooltip
                  className={props.classes.artistTooltip}
                  title='Click to open on Spotify'
                >
                  <LibraryMusicIcon onClick={() => console.log('CLICK')} />
                </Tooltip>
              </Typography>
            </CardContent>
          </Card>
          <div className={props.classes.playerWrapper} style={{ opacity: song ? '1' : '0' }}>
            <ReactPlayer
              url={song ? song.songUrl : ''}
              playing={playing}
              controls
              height={50}
              width={330}
              config={{ file: { attributes: { controlsList: 'nodownload' } } }} // Disable download button
              onContextMenu={e => e.preventDefault()} // Disable right click
              className={props.classes.player}
              volume={0.1}
            />
            <Typography
              className={props.classes.nowPlaying}
              gutterBottom noWrap={true}
              variant="overline"
              component="h4"
              align='center'
            >
              {`Playing: ${song ? song.songName : ''}`}
            </Typography>
          </div>
        </div>
      }
    </div>
  );
}

export default withStyles(styles)(ArtistAvatar);
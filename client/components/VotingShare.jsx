import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions } from 'material-ui/Card';

import Button from 'material-ui/Button';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon
} from 'react-share';

const styles = theme => ({
  container: {
    width: '50%',
    minWidth: '350px',
    margin: '10px auto',
    textAlign: 'center',
    padding: theme.spacing.unit * 4
  },
  actions: {
    justifyContent: 'center',
    marginTop: '10px'
  },
  shareButton: {
    cursor: 'pointer'
  }
})

function VotingShare(props) {
  const { classes,
          onCopyClick,
          url,
          description
        } = props;
  return (
    <Card className={classes.container} elevation={0}>
      <CardActions className={classes.actions}>
        <Button variant='flat' color='primary' onClick={onCopyClick}>Copy Link</Button>

          <FacebookShareButton url={url} className={classes.shareButton} quote={description} hashtag='voteapp'>
            <FacebookIcon round size={32} />
          </FacebookShareButton>

          <GooglePlusShareButton url={url} className={classes.shareButton}>
            <GooglePlusIcon round size={32} />
          </GooglePlusShareButton>

          <TwitterShareButton url={url} className={classes.shareButton} title={description} hashtag='voteapp'>
            <TwitterIcon round size={32} />
          </TwitterShareButton>

      </CardActions>
    </Card>
  )
};

VotingShare.propTypes = {
  onCopyClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(VotingShare);


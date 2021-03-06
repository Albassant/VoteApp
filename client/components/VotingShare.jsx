import React from 'react';
import PropTypes from 'prop-types';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon
} from 'react-share';

import { common } from './styles/commonStyles';

const styles = theme => ({
  container: {
    width: '50%',
    minWidth: '300px',
    margin: '10px auto',
    textAlign: 'center',
    padding: theme.spacing.unit * 4,
    backgroundColor: 'inherit'
  },
  actions: {
    ...common.actions,
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    },
  },
  shareButton: {
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      width: '40px',
      margin: '10px auto'
    },
  }
})

const VotingShare = ({ classes,
                    onCopyClick,
                    url,
                    description
                  }) => (
  <Card className={classes.container} elevation={0}>
    <CardContent>
      <Typography variant="subheading">Don't forget to share the poll with your friends!</Typography>
    </CardContent>
    <CardActions className={classes.actions}>
      <CopyToClipboard onCopy={onCopyClick} text={url}>
        <Button variant='flat' color='primary'>Copy Link</Button>
      </CopyToClipboard>

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


VotingShare.propTypes = {
  onCopyClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(VotingShare);


import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by Suzuki, Tanizaki, Omori from "Tokko-Yaro-C-Team".'}
    </Typography>
  );
}

function Footer() {
    return (
      <div>
        <Box mt={5}>
          <MadeWithLove />
        </Box>
      </div>
    );
}

export default Footer;

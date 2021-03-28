import { Link, Typography } from '@material-ui/core';
import React, { memo } from 'react';

export const Copyright = memo(() => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
      My Store
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
));

Copyright.displayName = 'Copyright';

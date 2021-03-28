import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { memo } from 'react';
import { PageLink } from '@app/client-web/components/common/Page/Link';

export const HeaderProfile = memo(() => (
  <div>
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      // onClick={handleMenu}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
    <Menu
      id="menu-appbar"
      // anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={false}
      // onClose={handleClose}
    >
      <MenuItem component={PageLink} href="/admin/orders">
        Manage orders
      </MenuItem>
      <MenuItem component={PageLink} href="/admin/products">
        Manage products
      </MenuItem>
    </Menu>
  </div>
));

HeaderProfile.displayName = 'HeaderProfile';

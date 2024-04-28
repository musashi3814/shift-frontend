import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SimCardIcon from '@mui/icons-material/SimCard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EditNoteIcon from '@mui/icons-material/EditNote';
import GroupIcon from '@mui/icons-material/Group';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <WorkHistoryIcon />
      </ListItemIcon>
      <ListItemText primary="シフト希望提出" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SimCardIcon />
      </ListItemIcon>
      <ListItemText primary="確定シフト" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      管理者専用
    </ListSubheader>
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <FormatListBulletedIcon />
        </ListItemIcon>
        <ListItemText primary="シフト提出状況" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <EditNoteIcon />
        </ListItemIcon>
        <ListItemText primary="シフト作成" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="従業員管理" />
      </ListItemButton>
    </React.Fragment>
  </React.Fragment>
);
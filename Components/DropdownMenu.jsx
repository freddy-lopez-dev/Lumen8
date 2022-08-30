import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsChevronDown } from 'react-icons/bs';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="btn"
      >
        Shop All
        <BsChevronDown />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Fresh Flowers</MenuItem>
        <MenuItem onClick={handleClose}>Fresh Plants</MenuItem>
        <MenuItem onClick={handleClose}>Forever Flowers</MenuItem>
        <MenuItem onClick={handleClose}>Garden</MenuItem>
        <MenuItem onClick={handleClose}>Glowing Paint</MenuItem>
      </Menu>
    </div>
  );
}

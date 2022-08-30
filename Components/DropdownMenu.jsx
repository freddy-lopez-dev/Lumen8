import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from '@mui/material';
import styled from '@emotion/styled';

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
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
          <Link href={'/category/fresh-flowers'}>Fresh Flowers</Link>
        </MenuItem>
        <MenuItem>
          <Link href={'/category/fresh-plants'}>Fresh Plants</Link>
        </MenuItem>
        <MenuItem>
          <Link href={'/category/forever-flowers'}>Forever Flower</Link>
        </MenuItem>
        <MenuItem>
          <Link href={'/category/indoor-and-outdoor-garden'}>Garden</Link>
        </MenuItem>
        <MenuItem>
          <Link href={'/category/glowing-paint'}>Glowing Paint</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

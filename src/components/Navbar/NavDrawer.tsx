import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Button } from '@nextui-org/react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FiMenu } from 'react-icons/fi';

import categorires from '@/util/categories';
import Link from 'next/link';

import { useRouter } from 'next/router';
type Anchor = 'top' | 'left' | 'bottom' | 'right';
import { useState } from 'react';
export default function TemporaryDrawer() {
  const router = useRouter();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {categorires.map((category, index) => (
          <ListItem
            sx={{
              textTransform: 'capitalize',
              paddingTop: '0.7rem',
              paddinBottm: '0.7rem',
            }}
            key={index}
            disablePadding
          >
            <ListItemButton>
              {category.name !== 'Tüm Ürünler' ? (
                <Link
                  title={category.name}
                  href={'/products/category/' + category.endpoint}
                  className={`${
                    router.asPath === `/products/category/${category.endpoint}`
                      ? 'text-green-500 '
                      : ''
                  }`}
                >
                  <ListItemText primary={category.name} />
                </Link>
              ) : (
                <Link
                  title={category.name}
                  href={'/products/'}
                  className={`${
                    router.asPath === `/products` ? 'text-green-500 ' : ''
                  }`}
                >
                  <ListItemText primary={category.name} />
                </Link>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <FiMenu
          onClick={toggleDrawer('left', true)}
          className='w-[1.4rem] h-[1.4rem] ml-4'
        />

        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

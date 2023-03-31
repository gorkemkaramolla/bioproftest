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
            sx={{ textTransform: 'capitalize' }}
            key={index}
            disablePadding
          >
            <ListItemButton>
              {category !== 'tüm ürünler' ? (
                <Link
                  title={category}
                  href={'/products/category/' + category}
                  className={`${
                    router.asPath === `/products/category/${category}`
                      ? 'text-green-500'
                      : ''
                  }`}
                >
                  <ListItemText primary={category} />
                </Link>
              ) : (
                <Link
                  title={category}
                  href={'/products/'}
                  className={`${
                    router.asPath === `/products` ? 'text-green-500' : ''
                  }`}
                >
                  <ListItemText primary={category} />
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
        <Button light auto onClick={toggleDrawer('left', true)}>
          <FiMenu className='w-[1.4rem] h-[1.4rem]' />
        </Button>
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

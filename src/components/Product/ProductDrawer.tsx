import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FiMenu } from 'react-icons/fi';
import Button from '../Buttons/Button';
import categorires from '@/util/ürünler/categories';
import Link from 'next/link';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoClose } from 'react-icons/io5';
import { useRouter } from 'next/router';
import Image from 'next/image';
type Anchor = 'top' | 'left' | 'bottom' | 'right';
import products from '@/util/ürünler/products';
// import type { ProductType } from '@/util/ürünler/products';
interface Props {
  linkler: {
    trendyol: string;
    hepsiburada: string;
    bim: string;
  };
}

export default function TemporaryDrawer(props: Props) {
  const router = useRouter();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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
      sx={{ width: 400 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <IoClose />
        </IconButton>
      </DrawerHeader>
      <div className='text-center mt-10 mb-2'>
        Satın almak istediğiniz mağazayı seçiniz
      </div>
      <hr />
      <div className='divide-y'>
        <div className='divide-x flex p-4'>
          <div className='flex flex-col items-center'>
            <div>
              <Image
                className='w-auto h-auto'
                src='/brand-banner/trendyol.png'
                width={150}
                height={60}
                alt=''
              />
            </div>
            <Button url={props?.linkler?.trendyol} name='Satın Al'></Button>
          </div>
          <div className='flex flex-col items-center'>
            <div>
              <Image
                className='w-auto h-auto'
                src='/brand-banner/hepsiburada.png'
                width={150}
                height={60}
                alt=''
              />
            </div>
            <Button url={props?.linkler?.hepsiburada} name='Satın Al'></Button>
          </div>
        </div>
        <div className='divide-x flex p-4'>
          <div className='flex flex-col items-center'>
            <div>
              <Image
                className='w-auto h-auto'
                src='/brand-banner/watsons.png'
                width={150}
                height={60}
                alt=''
              />
            </div>
            <Button url={props?.linkler?.bim} name={'Satın Al'}></Button>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'right'}>
        <button
          className='w-full bg-black py-3 text-white mt-6 text-lg '
          onClick={toggleDrawer('right', true)}
        >
          Satın Al
        </button>

        <Drawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
        >
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

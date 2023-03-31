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
import Image from 'next/image';
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
      sx={{ width: 400 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
            <Button
              size={'sm'}
              auto
              ghost
              className='text-black hover:bg-slate-50'
              css={{
                color: '$black',
                borderWidth: 'thin',
                borderColor: '$accents4',
                borderRadius: '0',
              }}
              onClick={() => router.push('https://trendyol.com')}
            >
              Satın Al
            </Button>
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
            <Button
              size={'sm'}
              auto
              ghost
              className='text-black hover:bg-slate-50'
              css={{
                color: '$black',
                borderWidth: 'thin',
                borderColor: '$accents4',
                borderRadius: '0',
              }}
              onClick={() => router.push('https://hepsiburada.com')}
            >
              Satın Al
            </Button>
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
            <Button
              size={'sm'}
              auto
              ghost
              className='text-black hover:bg-slate-50'
              css={{
                color: '$black',
                borderWidth: 'thin',
                borderColor: '$accents4',
                borderRadius: '0',
              }}
              onClick={() => router.push('https://watsons.com')}
            >
              Satın Al
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'right'}>
        <Button
          size={'lg'}
          color={'default'}
          className='hover:bg-red-400'
          css={{
            w: 'stretch',
            mt: '$15',
            backgroundColor: '$accents9',
            borderRadius: '0',
          }}
          onClick={toggleDrawer('right', true)}
        >
          Satın Al
        </Button>
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

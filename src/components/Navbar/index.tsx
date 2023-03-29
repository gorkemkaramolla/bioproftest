import { Navbar, Link, Text, Avatar, Dropdown } from '@nextui-org/react';
import { useSSR } from '@nextui-org/react';
import Image from 'next/image';
// import { AcmeLogo } from "./AcmeLogo.js";
const links: { [key: string]: string } = {
  'Temizleyici - Arındırıcı': 'cleansing',
  'Yoğun Nem Desteği': 'intense-moisturizing',
  'Onarıcı Bakım': 'skin-repair',
  'Güneş Koruyucu': 'sunscreens',
  'Tüm Ürünler': 'products',
};
export default function App() {
  const { isBrowser } = useSSR();

  if (isBrowser) {
    return (
      <Navbar isBordered variant='sticky'>
        <Navbar.Toggle showIn='xs' />
        <Link href='/'>
          <Navbar.Brand
            css={{ jc: 'center' }}
            //   className='mx-auto sm:mx-0 '
          >
            {/* <AcmeLogo /> */}
            <img className='h-10 ' src='bioprof-logo.png' alt='logo'></img>
            {/* <Text b color="inherit" hideIn="xs">
            ACME
        </Text> */}
          </Navbar.Brand>
        </Link>
        <Navbar.Content
          enableCursorHighlight
          activeColor='secondary'
          hideIn='xs'
          variant='default'
          className='text-sm lg:text-base pl-8'
        >
          {Object.keys(links).map((link) => (
            <Navbar.Link
              key={link}
              title={link}
              href={'/' + links[link]}
              className='text-xs lg:text-base '
            >
              {link}
            </Navbar.Link>
          ))}
        </Navbar.Content>
        <Navbar.Content
          css={{
            '@xs': {
              w: '12%',
              jc: 'flex-end',
            },
          }}
        >
          <Navbar.Item>
            <div className='h-[30px] w-[30px]'></div>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {Object.entries(links).map(([key, value], index) => (
            <Navbar.CollapseItem
              key={index}
              activeColor='secondary'
              // css={{
              //   color: index === links.length - 1 ? "$error" : "",
              // }}
              // isActive={index === 2}
            >
              <Link
                color='inherit'
                css={{
                  minWidth: '100%',
                }}
                href={'/' + value}
              >
                {key}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    );
  } else return <div></div>;
}

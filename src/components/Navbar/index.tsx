import React from 'react';
import NavLink from './NavLink';

import { BsMenuButton } from 'react-icons/bs';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavDrawer from './NavDrawer';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [pathname, setPathname] = React.useState<null | string>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    // var element = document.getElementById('vert-dots');
    // if (element) {
    //   element.style.rotate = '90deg';
    //   element.style.transition = ' .3s ease-out';
    // }
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    // var element = document.getElementById('vert-dots');
    // if (element) {
    //   element.style.rotate = '0deg';
    //   element.style.transition = ' .5s ease-out';
    // }
    setAnchorEl(null);
  };
  React.useEffect(() => {
    setPathname(router.pathname);
  }, [router.pathname]);
  return (
    <div className='fixed top-0 flex py-2 px-4 space-x-4 justify-around items-center border-b shadow-sm w-full z-50 backdrop-blur-sm bg-white bg-opacity-[0.85]'>
      <div className='inline-flex lg:hidden'>
        <NavDrawer />
      </div>
      <Link href='/'>
        <Image
          width={100}
          height={40}
          className='h-10 '
          src='/bioprof-logo.png'
          alt='logo'
        />
      </Link>

      <div className='hidden lg:flex space-x-2 lg:space-x-4'>
        <NavLink />
      </div>
      <div className='h-10 w-10'></div>
    </div>
  );
};

export default Navbar;

// import { Navbar } from "@nextui-org/react";
// import { FC, memo } from "react";
// import Link from "next/link";

// import Image from "next/image";
// import { useSSR } from "@nextui-org/react";

// const links: { [key: string]: string } = {
//   "Temizleyici - Arındırıcı": "cleansing",
//   "Yoğun Nem Desteği": "intense-moisturizing",
//   "Onarıcı Bakım": "skin-repair",
//   "Güneş Koruyucu": "sunscreens",
//   "Tüm Ürünler": "products",
// };
// import categorires from "@/util/categories";
// import { firstCharacterUpper } from "@/util/utilfunctions";
// import { useRouter } from "next/router";
// const NavigationBar: FC<{}> = () => {
//   const router = useRouter();

//   const { isBrowser } = useSSR();

//   return isBrowser ? (
//     <Navbar isBordered variant="sticky" className="lg:bg-white bg-inherit">
//       <Navbar.Toggle showIn="xs" />
//       <Link href="/">
//         <Navbar.Brand css={{ jc: "center" }}>
//           <Image
//             width={100}
//             height={40}
//             className="h-10 "
//             src="/bioprof-logo.png"
//             alt="logo"
//           />
//         </Navbar.Brand>
//       </Link>
//       <Navbar.Content
//         enableCursorHighlight
//         activeColor="secondary"
//         hideIn="xs"
//         variant="default"
//         className="text-sm lg:text-base pl-8"
//       >
//         {/* {Object.keys(links).map((link) => (
//           <Link
//             key={link}
//             title={link}
//             href={"/products/category/" + links[link]}
//             className="text-xs lg:text-base "
//           >
//             {link}
//           </Link>
//         ))} */}
//         {categorires.map((category, i) => {
//           if (category === "tüm ürünler") {
//             return (
//               <Link
//                 key={i}
//                 title={category}
//                 href={"/products/"}
//                 className={`text-xs lg:text-base ${
//                   router.asPath === `/products` ? "text-green-500" : ""
//                 }`}
//               >
//                 {firstCharacterUpper(category)}
//               </Link>
//             );
//           } else
//             return (
//               <Link
//                 key={i}
//                 title={category}
//                 href={"/products/category/" + category}
//                 className={`text-xs lg:text-base ${
//                   router.asPath === `/products/category/${category}`
//                     ? "text-green-500"
//                     : ""
//                 }`}
//               >
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </Link>
//             );
//         })}
//       </Navbar.Content>
//       <Navbar.Content
//         css={{
//           "@xs": {
//             w: "12%",
//             jc: "flex-end",
//           },
//         }}
//       >
//         <Navbar.Item>
//           <div className="h-[30px] w-[30px]"></div>
//         </Navbar.Item>
//       </Navbar.Content>
//       <Navbar.Collapse>
//         {categorires.map((category, i) => {
//           if (category === "tüm ürünler") {
//             return (
//               <Link
//                 key={i}
//                 title={category}
//                 href={"/products/"}
//                 className={`text-xs lg:text-base ${
//                   router.asPath === `/products` ? "text-green-500" : ""
//                 }`}
//               >
//                 {firstCharacterUpper(category)}
//               </Link>
//             );
//           } else
//             return (
//               <Link
//                 key={i}
//                 title={category}
//                 href={"/products/category/" + category}
//                 className={`text-xs lg:text-base ${
//                   router.asPath === `/products/category/${category}`
//                     ? "text-green-500"
//                     : ""
//                 }`}
//               >
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </Link>
//             );
//         })}
//       </Navbar.Collapse>
//     </Navbar>
//   ) : null;
// };

// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }

// export default memo(NavigationBar);

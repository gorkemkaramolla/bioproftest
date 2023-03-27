import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { useSSR } from "@nextui-org/react";

// import { AcmeLogo } from "./AcmeLogo.js";
const links: { [key: string]: string } = {
  "Temizleyici - Arındırıcı ": "cleaner",
  "Yoğun Nem Desteği": "moisturizer",
  "Onarıcı Bakım": "restorative-care",
  "Güneş Koruyucu": "sunscreen",
  "Tüm Ürünler": "all",
};
export default function App() {
  const { isBrowser } = useSSR();
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  if (isBrowser) {
    return (
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Link href="/">
          <Navbar.Brand
            css={{ jc: "center" }}
            //   className='mx-auto sm:mx-0 '
          >
            {/* <AcmeLogo /> */}
            <img
              className="h-10 "
              src="BİOPROF site dosyalar/Logo/Bioprof logo.png"
              alt="logo"
            />
            {/* <Text b color="inherit" hideIn="xs">
            ACME
        </Text> */}
          </Navbar.Brand>
        </Link>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="default"
          className="text-xs lg:text-base pl-8"
        >
          {Object.keys(links).map((link) => (
            <Navbar.Link
              key={link}
              title={link}
              href={links[link]}
              className="text-xs lg:text-base "
            >
              {link}
            </Navbar.Link>
          ))}

          {/* <Navbar.Link href='#'>Features</Navbar.Link>
        <Navbar.Link isActive href='#'>
        Customers
        </Navbar.Link>
        <Navbar.Link href='#'>Pricing</Navbar.Link>
    <Navbar.Link href='#'>Company</Navbar.Link> */}
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Navbar.Item>
            <div className="h-[30px] w-[30px]"></div>
            {/* <Avatar
            className='hidden'
            bordered
            as='button'
            color='secondary'
            size='md'
            src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
          /> */}
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    );
  } else return <div></div>;
}

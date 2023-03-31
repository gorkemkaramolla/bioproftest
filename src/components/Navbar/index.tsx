import { Navbar } from "@nextui-org/react";
import { FC, memo } from "react";
import Link from "next/link";

import Image from "next/image";
import { useSSR } from "@nextui-org/react";

const links: { [key: string]: string } = {
  "Temizleyici - Arındırıcı": "cleansing",
  "Yoğun Nem Desteği": "intense-moisturizing",
  "Onarıcı Bakım": "skin-repair",
  "Güneş Koruyucu": "sunscreens",
  "Tüm Ürünler": "products",
};
import categorires from "@/util/categories";
import { firstCharacterUpper } from "@/util/utilfunctions";
const NavigationBar: FC<{}> = () => {
  const { isBrowser } = useSSR();

  return isBrowser ? (
    <Navbar isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Link href="/">
        <Navbar.Brand css={{ jc: "center" }}>
          <Image
            width={100}
            height={40}
            className="h-10 "
            src="/bioprof-logo.png"
            alt="logo"
          />
        </Navbar.Brand>
      </Link>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="default"
        className="text-sm lg:text-base pl-8"
      >
        {/* {Object.keys(links).map((link) => (
          <Link
            key={link}
            title={link}
            href={"/products/category/" + links[link]}
            className="text-xs lg:text-base "
          >
            {link}
          </Link>
        ))} */}
        {categorires.map((category, i) => {
          if (category === "tüm ürünler") {
            return (
              <Link
                key={i}
                title={category}
                href={"/products/"}
                className="text-xs lg:text-base "
              >
                {firstCharacterUpper(category)}
              </Link>
            );
          } else
            return (
              <Link
                key={i}
                title={category}
                href={"/products/category/" + category}
                className="text-xs lg:text-base "
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            );
        })}
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
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        {Object.entries(links).map(([key, value], index) => (
          <Navbar.CollapseItem key={index} activeColor="secondary">
            <Link color="inherit" href={`/${value}`}>
              {key}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  ) : null;
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default memo(NavigationBar);

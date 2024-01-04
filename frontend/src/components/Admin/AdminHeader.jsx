"use client";
import { Navbar, TextInput } from "keep-react";
import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MagnifyingGlass,
  TwitterLogo,
  SignOut,
} from "phosphor-react";

const AdminHeader = () => {
  return (
    <Navbar fluid={true} className="bg-white">
      <Navbar.Container className="flex items-center justify-between px-16">
        <Navbar.Brand>
          <img
            src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/ITEXPERTS_LOGO.png?v=1704170784"
            alt="keep"
            width="100"
            height="40"
          />
        </Navbar.Brand>

        <Navbar.Container className="flex items-center gap-6">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-4"
          >
            <Navbar.Link
              icon={<FacebookLogo size={27} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<InstagramLogo size={27} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<LinkedinLogo size={27} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<SignOut size={27} color="#444" />}
              iconAnimation={false}
            />
          </Navbar.Container>
          {/* <Navbar.Container className="flex gap-1">
            <Navbar.Toggle className="block" />
            Menu
          </Navbar.Container> */}
        </Navbar.Container>
        {/* <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2"
        >
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link
              linkName="Home"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <Navbar.Link
              linkName="Projects"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <Navbar.Link
              linkName="Blogs"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <Navbar.Link linkName="News" className="!py-0" />
            <Navbar.Link linkName="Resources" className="!py-0" />
          </Navbar.Container>
        </Navbar.Collapse> */}
      </Navbar.Container>
    </Navbar>
  );
};

export default AdminHeader;

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element as Section } from "react-scroll";
import { Logo, SectionHeading } from "../components/utils";
import { imageLoader } from "../lib/utils";

const index = ({ pages }) => {
  return (
    <div className="previewpage bg-grey-darken">
      <header className="header relative z-50 border-b border-white border-opacity-10">
        <div className="container mx-auto">
          <div className="header-inner flex items-center justify-between py-3">
            <Logo url="/" />
          </div>
        </div>
      </header>
      <main className="previewmain bg-grey">
        <div className="herosection herosection-bg">
          <div className="herosection-inner min-h-screen flex items-center bg-grey-darken">
            <div className="container mx-auto">
              <div className="herosection-content py-20 text-center">
                <h1 className="text-primary">
                  Ainsley Alceme Portfolio
                </h1>
                <p className="lead">
                  Interactive portfolio made with React
                </p>
                <Link href="/homepage2">
                  <a className="btn btn-large mt-4">
                    <span className="pl-2">View Portfolio</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer bg-grey-darken">
        <div className="container mx-auto">
          <p className="mb-0 py-4 text-center">
            &copy; {new Date().getFullYear()}, All right reserved
            <Link href="/">
              <a className="pl-1.5 font-medium text-heading no-underline hover-text-primary">
                NuclearThemes
              </a>
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      pages: [
       
        {
          id: 1,
          title: "Home Version 2",
          image: "/images/demo/homepage-2.jpg",
          path: "/homepage2",
        },
      ],
    },
  };
}

export default index;

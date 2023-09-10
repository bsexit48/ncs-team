/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Link from 'next/link';
interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const footerList = [
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'Marketplace',
    },
    {
      id: 3,
      name: 'FAQ',
    },
    {
      id: 4,
      name: 'Download',
    },
    {
      id: 5,
      name: 'Buy',
    },
    {
      id: 6,
      name: 'Contact',
    },
    {
      id: 7,
      name: 'About Us',
    },
    {
      id: 8,
      name: 'Sell',
    },
    {
      id: 9,
      name: 'Whitepaper',
    },
  ];
  return (
    <>
      <div className="footer">
        <div className="footer__wrapper container">
          <div className="footer__left">
            <div className="left__wrapper">
              <img
                className="img-fluid footer-logo"
                src="/assets/images/Logo/footer-logo.png"
                alt="footer-logo"
              />
              <div className="footer__socials">
                <div className="mr-1">
                  <Link href="https://t.me/ultimate_playerplayers">
                    <img className="img-fluid" src="/assets/images/Social/telegram.png" alt="Telegram" />
                  </Link>
                </div>
                <div className="mr-1">
                  <Link href="https://t.me/ultimate_playerplayersan">
                    <img className="img-fluid" src="/assets/images/Social/users.png" alt="" />
                  </Link>
                </div>
                <div className="mr-1">
                  <Link href="https://twitter.com/ultimate_playerplayers">
                    <img className="img-fluid" src="/assets/images/Social/twitter.png" alt="Twitter" />
                  </Link>
                </div>
                <div className="mr-1">
                  <Link href="https://discord.gg/WGMh7H3dSw">
                    <img className="img-fluid" src="/assets/images/Social/discord.png" alt="Discord" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__right">
            <div className="right__wrapper">
              {footerList.map((item) => (
                <div key={item.id} className="footer__item fs-14px fw-600">
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div className="footer__socials--mobile">
            JOIN US COMMUNITY
            <div className="d-flex justify-center align-items-center mt-1">
              <img className="img-fluid mr-1" src="/assets/images/Social/telegram.png" alt="Telegram" />
              <img className="img-fluid mr-1" src="/assets/images/Social/twitter.png" alt="Twitter" />
              <img className="img-fluid" src="/assets/images/Social/users.png" alt="other" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

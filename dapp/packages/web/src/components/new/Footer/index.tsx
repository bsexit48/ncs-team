import * as React from 'react';

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="footer">
      <div className="line"></div>
      <div className="footer__content">
        <div className="footer__detail">ultimate_playerplayer © 2021 all rights reserved</div>
        <div className="footer__socials">
          <a href="https://twitter.com/ultimate_playerplayers" target="_blank" rel="noopener noreferrer">
            <img src={'/assets/images/socials/twitter.png'} alt="Twitter" />
          </a>
          <a href="https://discord.gg/WGMh7H3dSw" target="_blank" rel="noopener noreferrer">
            <img src={'/assets/images/socials/discord.png'} alt="Discord" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCKzkjxk42PgOlVmYKngpuFQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={'/assets/images/socials/ytb.png'} alt="Ytb" />
          </a>
          <a href="https://t.me/ultimate_playerplayersann" target="_blank" rel="noopener noreferrer">
            <img src={'/assets/images/socials/telegram.png'} alt="Telegram" />
          </a>
          <a href="https://github.com/ultimate_playerplayers-BNB" target="_blank" rel="noopener noreferrer">
            <img src={'/assets/images/socials/github.png'} alt="Github" />
          </a>
          <a href="https://t.me/ultimate_playerplayers" target="_blank" rel="noopener noreferrer">
            <img src={'/assets/images/socials/group.png'} alt="Group" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

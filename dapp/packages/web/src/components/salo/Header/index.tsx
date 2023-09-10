/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { CustomButtonColors, CustomButtonVariants, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context';
import { IDataModal } from 'hooks/app/usePopUp';
import isMobile from 'is-mobile';
import { useRouter } from 'next/router';
import { shortenAddress } from 'utils';

import CustomButton from '../CustomButton';

interface IHeaderProps {
  openModal: (data: IDataModal) => void;
  setRefMobileMenu: (elm: any) => void;
  isOpenMobileMenu: boolean;
  toggleMenu: () => void;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { isConnected, account, refetchTokenBalance } = useAppContext();
  const { openModal, setRefMobileMenu, isOpenMobileMenu, toggleMenu } = props;
  const [selected, setSelected] = React.useState(1);
  const router = useRouter();
  const { asPath } = router;

  const goToPathname = (href: string, hash?: string) => {
    router.push({
      pathname: href,
      hash: hash ? hash : '',
    });
  };

  const handleClickSell = () => {
    if (isConnected) {
      goToPathname('/sell', 'listing');
    } else {
      openModal({ type: ETypePopUp.CONNECT_WALLET });
    }
    if (isMobile()) toggleMenu();
  };

  const openAccountModal = () => {
    openModal({ type: ETypePopUp.ACCOUNT });
  };

  React.useEffect(() => {
    if (asPath === '/login') {
      setSelected(5);
    } else if (asPath === '/') {
      setSelected(1);
    } else if (asPath.includes('buy')) {
      setSelected(2);
    } else if (asPath.includes('sell') || asPath.includes('inventory')) {
      setSelected(3);
    }
  }, [asPath]);

  const navList = [
    {
      id: 1,
      name: 'Home',
      onClick: () => {
        goToPathname('/');
        if (isMobile()) toggleMenu();
      },
    },
    {
      id: 2,
      name: 'Buy',
      onClick: () => {
        goToPathname('/');
        if (isMobile()) toggleMenu();
      },
    },
    {
      id: 3,
      name: 'Shop',
      onClick: () => {
        goToPathname('/shop');
        if (isMobile()) toggleMenu();
      },
    },
    {
      id: 4,
      name: 'Sell',
      onClick: handleClickSell,
    },
    {
      id: 5,
      name: 'Play',
    },
  ];

  const navListElms = navList.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <CustomButton
          onClick={item.onClick}
          variants={CustomButtonVariants.TEXTED}
          color={CustomButtonColors.BLUE}
          isActive={item.id === selected}
          text={item.name}
          className="main-menu mr-2"
        />
      </React.Fragment>
    );
  });

  const mobileNavElms = navList.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <div className={`mobile-navs ${item.id === selected ? 'active' : ''}`} onClick={item.onClick}>
          {item.name}
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ultimate_player-header">
      <div className="ultimate_player-header__logo">
        <img className="img-fluid" src="/assets/images/Logo/header-logo.png" alt="header-logo" />
      </div>
      <div className="ultimate_player-header__navs">{navListElms}</div>
      <div className="ultimate_player-header__connect-wallet">
        {isConnected ? (
          <div className="ultimate_player-header__wallet-address">
            <div className="" onClick={openAccountModal}>
              {shortenAddress(account)}
            </div>
          </div>
        ) : (
          <CustomButton
            variants={CustomButtonVariants.PARALLEL}
            isActive={selected === 5}
            color={CustomButtonColors.PURPLE}
            text="Connect wallet"
            onClick={() => {
              goToPathname('/login');
            }}
          />
        )}
      </div>
      <div className="ultimate_player-header__toggle-icon" id="toggle-icon" onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div
        className={`ultimate_player-header__mobile-menu ${isOpenMobileMenu ? 'open' : 'close'}`}
        ref={(elm) => setRefMobileMenu(elm)}
      >
        <div className="ultimate_player-header__mobile-navs">{mobileNavElms}</div>
        <div className={`ultimate_player-header__mobile-connect-wallet `}>
          {isConnected ? (
            <div className="ultimate_player-header__avatar" onClick={openAccountModal}>
              <img className="img-fluid" src="/assets/images/person.png" alt="person" />
            </div>
          ) : (
            <div
              className={`mobile-navs ${selected === 5 ? 'active' : ''}`}
              onClick={() => {
                goToPathname('/login');
              }}
            >
              Connect wallet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

import * as React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { CustomButtonVariants, ETypePopUp } from 'constants/index';
import { useAppContext } from 'context/index';
import { useRouter } from 'next/router';
import { addToNetwork, getAccountAndChain, shortenAddress } from 'utils';

import CustomButton from '../CustomButton';
import GenerateQRCode from '../QRCode/QRCode';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const router = useRouter();
  const { asPath } = router;
  const [selected, setSelected] = React.useState(2);
  const [isOpenMobileMenu, setToggleMobileMenu] = React.useState(false);
  const [isOpenPopUp, setOpenPopUp] = React.useState(false);
  const accountRef = React.useRef<any>(null);
  const setAccountRef = (elm: HTMLDivElement) => (accountRef.current = elm);
  const { isConnected, openModal, activate, account, error, tokenBalance, deactivate } = useAppContext();

  const goToPath = (path: string, needLogin?: boolean) => {
    const isOutSide = path.includes('https') || path.includes('http');
    if (isOutSide) {
      window.open(path, '_blank');
      return;
    }
    if (!needLogin || isConnected) {
      router.push(path);
      return;
    }
    // Toggle popup connect wallet
    openModal({
      type: ETypePopUp.CONNECT_WALLET,
    });
  };

  const login = () => {
    activate('injected');
  };

  const openModalConnectWallet = async () => {
    if (!(isConnected || error?.name === 'ChainUnsupportedError')) {
      openModal({
        type: ETypePopUp.CONNECT_WALLET,
      });
    }

    if (error?.name === 'ChainUnsupportedError') {
      if (error?.name === 'ChainUnsupportedError') {
        const { account } = await getAccountAndChain();
        addToNetwork(account, login);
      }
    }

    if (isConnected) {
      togglePopUp();
    }
  };

  const menu = [
    {
      id: 1,
      name: 'Home',
      onClick: () => {
        goToPath('https://ultimate_playerplayers.com/');
      },
    },
    {
      id: 2,
      name: 'Marketplace',
      onClick: () => {
        goToPath('/');
      },
    },
    {
      id: 3,
      name: 'Treasure Box',
      onClick: () => {
        goToPath('/box', true);
      },
    },
    {
      id: 4,
      name: 'Your Inventory',
      onClick: () => {
        goToPath('/inventory', true);
      },
    },
  ];

  React.useEffect(() => {
    if (asPath.includes('/box')) {
      setSelected(3);
    } else if (asPath.includes('inventory')) {
      setSelected(4);
    } else {
      setSelected(2);
    }
  }, [asPath]);

  const toggleMobileNavbar = () => {
    setToggleMobileMenu(!isOpenMobileMenu);
  };

  const togglePopUp = () => {
    setOpenPopUp(!isOpenPopUp);
  };

  const logout = () => {
    deactivate();
    setOpenPopUp(false);
    router.push('/');
  };

  React.useEffect(() => {
    if (isOpenPopUp) {
      const onClickOutSide = (event: MouseEvent) => {
        const buttonWalletDesktop: any = document.getElementById('button-wallet-desktop');
        const buttonWalletMobile: any = document.getElementById('button-wallet-mobile');
        if (
          !accountRef.current.contains(event.target) &&
          !buttonWalletDesktop?.contains(event.target) &&
          !buttonWalletMobile?.contains(event.target)
        ) {
          setOpenPopUp(false);
        }
      };
      document.addEventListener('click', onClickOutSide);
      return () => {
        document.removeEventListener('click', onClickOutSide);
      };
    }
  }, [isOpenPopUp]);

  return (
    <React.Fragment>
      <div className="ultimate_player-header">
        <img src={'/assets/images/logo.png'} alt="ultimate_player-logo" />
        <div className="ultimate_player-header__menu">
          <ul className="ultimate_player-header__content">
            {menu.map((item) => {
              return (
                <li
                  className={`ultimate_player-header__item ${selected === item.id ? 'actived' : ''}`}
                  onClick={item.onClick}
                  key={item.id}
                >
                  {item.name}
                </li>
              );
            })}
            <div id="button-wallet-desktop">
              <CustomButton
                variants={CustomButtonVariants.PURPLE}
                text={
                  error?.name === 'ChainUnsupportedError'
                    ? 'Switch network'
                    : isConnected
                    ? shortenAddress(account)
                    : 'connect wallet'
                }
                onClick={openModalConnectWallet}
              />
            </div>
          </ul>

          <div className="button-wallet__mobile" id="button-wallet-mobile">
            <CustomButton
              variants={CustomButtonVariants.PURPLE}
              text={
                error?.name === 'ChainUnsupportedError'
                  ? 'Switch network'
                  : isConnected
                  ? shortenAddress(account)
                  : 'connect wallet'
              }
              onClick={openModalConnectWallet}
            />
          </div>
          <div className="button-toggle" onClick={toggleMobileNavbar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className={`ultimate_player-header__menu-mobile ${isOpenMobileMenu ? 'show' : 'hide'}`}>
          <ul className="ultimate_player-header__content">
            {menu.map((item) => {
              return (
                <li
                  className={`ultimate_player-header__item ${selected === item.id ? 'actived' : ''}`}
                  onClick={() => {
                    item.onClick();
                    toggleMobileNavbar();
                  }}
                  key={item.id}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={`ultimate_player-header__popup ${isOpenPopUp ? 'show' : ''}`} ref={setAccountRef}>
          <p>Address</p>
          <div className="ultimate_player-header__popup-address">
            <span className="d-inline-block mr-1">{shortenAddress(account)}</span>
            <CopyToClipboard text={String(account)}>
              <img src={'/assets/images/copy-icon.png'} alt="copy-icon" className="cursor-pointer" />
            </CopyToClipboard>
          </div>
          <div className="ultimate_player-header__popup-balance">{tokenBalance} ultimate_player</div>
          <div className="line"></div>
          <div className="ultimate_player-header__popup-actions">
            {/* <div className="ultimate_player-header__popup-actions-item cursor-pointer">
              <img src={'/assets/images/settings.png'} alt="setting-icon" />
              <p>Setting</p>
            </div> */}
            <div className="ultimate_player-header__popup-actions-item cursor-pointer">
              {account && <GenerateQRCode account={account} />}
            </div>
            <div className="ultimate_player-header__popup-actions-item cursor-pointer" onClick={logout}>
              <img src={'/assets/images/logout.png'} alt="logout-icon" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </React.Fragment>
  );
};

export default Header;

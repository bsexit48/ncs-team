import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import LoopIcon from '@mui/icons-material/Loop';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { Box, IconButton, Popover, Typography } from '@mui/material';
///
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { ethers } from 'ethers';
import QRCode from 'qrcode.react';

interface IGenerateQRCodeProps {
  account: string;
}

const GenerateQRCode: React.FunctionComponent<IGenerateQRCodeProps> = (props) => {
  const { account } = props;

  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  //Order generate QRCode: publicKey;timestamp;signature
  const [qrValue, setQrValue] = React.useState('');
  const [loading, setLoading] = React.useState(false); // Sign message to get signature
  const [signature, setSignature] = React.useState('');

  const createQRCode = () => {
    if (signature) {
      const now = new Date().valueOf();
      setQrValue(`${account};${now};${signature}`);
    } else {
      // Sign message if not exist signature
      signMessage();
    }
  };

  React.useEffect(() => {
    // Create new QR code when open dropdown
    if (open) createQRCode();
  }, [open, signature]);

  const signMessage = async () => {
    setLoading(true);
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider
      .getSigner(account)
      .signMessage('Welcome to ultimate_player Players')
      .then((signature: any) => {
        setSignature(signature);
      })
      .catch((err: Error) => {
        window.alert(`Failure!${err && err.message ? `\n\n${err.message}` : ''}`);
      })
      .finally(() => setLoading(false));
  };

  return (
    <React.Fragment>
      <IconButton
        aria-label="qrcode"
        style={{ color: 'white', paddingLeft: 0 }}
        aria-describedby={id}
        onClick={handleClick}
      >
        <QrCodeIcon />
        <Typography variant="body2" style={{ color: 'white' }} component="div">
          &nbsp;&nbsp;QR code
        </Typography>
      </IconButton>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              boxShadow: 'none',
              backgroundImage: 'url(/assets/images/bg.png)',
              borderColor: '#92a8d1',
              borderStyle: 'solid',
              borderWidth: '1px',
              backgroundClip: 'padding-box',
            },
          }}
        >
          <DialogTitle id="alert-dialog-title">
            <Typography
              variant="h5"
              align="center"
              style={{ color: 'white', fontWeight: 'bold', fontFamily: 'SVN-Batman Forever Alternate' }}
            >
              LOGIN
            </Typography>

            {open ? (
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>
          <DialogContent>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                alt="new"
                style={{
                  maxWidth: 100,
                }}
              />
            </div>
            <Typography
              variant="body2"
              align="center"
              style={{
                color: 'white',
                maxWidth: 350,
                fontFamily: 'SVN-Batman Forever Alternate',
                fontStyle: 'normal',
              }}
            >
              Scan QR code below with Mobile app or copy text manually to get authorization.
            </Typography>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                my={3}
                mx={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{ backgroundColor: 'white', padding: '10px', maxWidth: 220 }}
                // sx={{ borderColor: 'error.main' }}
              >
                {qrValue && <QRCode value={qrValue} size={200} />}
              </Box>
            </div>
            {qrValue && (
              <Chip
                style={{ color: 'white', maxWidth: 350 }}
                variant="outlined"
                color="primary"
                label={qrValue}
              />
            )}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
              }}
            >
              {qrValue && (
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: '#037dd6',
                  }}
                  // onClick={() =>{  navigator.clipboard.writeText(qrValue);
                  // console.log("ssss")}}

                  onClick={() => {
                    navigator.clipboard.writeText(qrValue);
                    console.log(qrValue);
                  }}
                >
                  Copy
                </Button>
              )}
            </div>
          </DialogContent>
          {/* <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions> */}
        </Dialog>
      </div>
    </React.Fragment>
  );
};

export default GenerateQRCode;

import * as React from 'react';
import Head from 'next/head';

interface IAccountSettingsProps {}
const AccountSettings: React.FunctionComponent<IAccountSettingsProps> = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Account Settings</title>
      </Head>
      <div className="account-settings container h-100">
        <div className="account-settings__content row align-items-center h-100">
          <div className="account-settings__content-detail">
            <div className="justify-content-center  py-6">
              <h4 className="fs-30px fw-700 color-white">Account Settings</h4>
              <p className="fs-12px fw-700 color-white">This page is coming soon.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AccountSettings;

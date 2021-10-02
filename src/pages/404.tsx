import { Button } from 'antd';
import React from 'react';
import { history } from 'umi';

import LottiePlayer from '@/components/LottiePlayer';

import lottie404 from '@/assets/Lotties/404.json';

const NoFoundPage: React.FC<{}> = () => (
  <div style={{ textAlign: 'center' }}>
    <LottiePlayer animationData={lottie404} />

    <div className="ant-result-subtitle" style={{ marginTop: 30, marginBottom: 30 }}>
      Sorry, the page you visited does not exist.
    </div>

    <Button type="primary" onClick={() => history.push('/')}>
      Back Home
    </Button>
  </div>
);

export default NoFoundPage;

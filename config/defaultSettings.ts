import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'realDark',
  // 拂晓蓝
  primaryColor: '#13C2C2',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Demo',
  pwa: true,
  iconfontUrl: '',
};

export type { DefaultSettings };

export default proSettings;

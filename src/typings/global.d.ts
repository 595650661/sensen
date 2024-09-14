// * Vite
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
  VITE_API_URL: string;
  VITE_PORT: number;
  VITE_OPEN: boolean;
  VITE_GLOB_APP_TITLE: string;
  VITE_DROP_CONSOLE: boolean;
  VITE_PROXY_URL: string;
  VITE_BUILD_GZIP: boolean;
  VITE_REPORT: boolean;
  VITE_APP_E_BRIDGE_LOGIN: string; // 商桥登录页地址
  // VITE_PROXY_URL_CMCC: string; // 移动云
  VITE_PROXY_URL_DCMALL_PUB: string;
  VITE_APP_BASE_PATH: string;
  VITE_APP_BASE_URL: string;
}
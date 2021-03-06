export const versions = {
  '26.0.0': true,
  '27.0.0': true,
  '28.0.0': true,
  '29.0.0': true,
  '30.0.0': true,
  '31.0.0': true,
  '32.0.0': true,
};

export const DEFAULT_SDK_VERSION = '32.0.0';
export const FALLBACK_SDK_VERSION = '26.0.0';

export type SDKVersion = keyof typeof versions;

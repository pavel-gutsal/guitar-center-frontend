const sizes = {
  mobileS: '385px',
  mobileM: '470px',
  mobileL: '520px',
  tabletS: '750px',
  tablet: '900px',
  netbookS: '1000px',
  netbook: '1100px',
  laptopS: '1250px',
  laptop: '1440px',
  default: '1600px',
  hd: '1900px',
};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tabletS: `(max-width: ${sizes.tabletS})`,
  tablet: `(max-width: ${sizes.tablet})`,
  netbookS: `(max-width: ${sizes.netbookS})`,
  netbook: `(max-width: ${sizes.netbook})`,
  laptopS: `(max-width: ${sizes.laptopS})`,
  laptop: `(max-width: ${sizes.laptop})`,
  default: `(max-width: ${sizes.default})`,
  hd: `(max-width: ${sizes.hd})`,
};

import { ThemeProvider } from "styled-components";

const size = {
  small:'414px',//Extra Small Devices (Phones)
  mobile: '576px', //  Small Devices (Phones)
  tablet: '768px', // Small Devices (Tablets)
  laptop: '1024px', // Medium Devices (Tablets and Small Laptops)
  desktop: '1440px', // Large Devices (Desktops)
};

const theme = {
  device: {
    small: `(max-width: ${size.small})`, // Extra Small Devices
    mobile: `(min-width: ${parseInt(size.small) + 1}px) and (max-width: ${size.mobile})`, //Small Devices
    tablet: `(min-width: ${parseInt(size.mobile) + 1}px) and (max-width: ${size.tablet})`, // tabletDevices
    laptop: `(min-width: ${parseInt(size.tablet) + 1}px) and (max-width: ${size.laptop})`, // Medium Devices
    desktop: `(min-width: ${parseInt(size.laptop) + 1}px) and (max-width: ${size.desktop})`, // Large Devices
    desktopLarge: `(min-width: ${parseInt(size.desktop) + 1}px)`, // Extra Large Devices
  },
};

// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

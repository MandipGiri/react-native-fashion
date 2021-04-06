import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';
import {Box, theme} from '../../components';

const SIZE = theme.borderRadii.l * 2;

const Google = () => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 512 512"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeMiterlimit={2}>
    <Path
      d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
      fill="#fbbd00"
    />
    <Path
      d="M256 392l-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
      fill="#0f9d58"
    />
    <Path
      d="M139.131 325.477l-86.308 86.308a260.085 260.085 0 0022.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
      fill="#31aa52"
    />
    <Path
      d="M512 256a258.24 258.24 0 00-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 01-51.884 55.638l86.216 86.216a260.085 260.085 0 0025.235-22.158C485.371 388.667 512 324.38 512 256z"
      fill="#3c79e6"
    />
    <Path
      d="M352.167 159.833l10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
      fill="#cf2d48"
    />
    <Path
      d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 00-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
      fill="#eb4132"
    />
  </Svg>
);

const Facebook = () => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 512 512"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeMiterlimit={2}>
    <Path
      d="M512 256C512 114.615 397.385 0 256 0S0 114.615 0 256c0 127.777 93.616 233.685 216 252.89V330h-65v-74h65v-56.4c0-64.16 38.219-99.6 96.695-99.6 28.009 0 57.305 5 57.305 5v63h-32.281C305.918 168 296 187.733 296 207.978V256h71l-11.35 74H296v178.89C418.385 489.685 512 383.777 512 256z"
      fill="#1877f2"
    />
    <Path
      d="M355.65 330L367 256h-71v-48.022c0-20.245 9.917-39.978 41.719-39.978H370v-63s-29.297-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.89a257.912 257.912 0 0040 3.11c13.608 0 26.966-1.065 40-3.11V330h59.65z"
      fill="#fff"
    />
  </Svg>
);

const Twitter = () => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 512 512"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeMiterlimit={2}>
    <Circle cx={256} cy={256} r={256} fill="#1da1f2" />
    <Path
      d="M209.152 391.04c113.536 0 175.616-94.08 175.616-175.616 0-2.688 0-5.376-.128-7.936a126.45 126.45 0 0030.848-32c-11.008 4.864-22.912 8.192-35.456 9.728 12.8-7.68 22.528-19.712 27.136-34.176A124.989 124.989 0 01368 166.016c-11.264-12.032-27.264-19.456-45.056-19.456-34.048 0-61.696 27.648-61.696 61.696 0 4.864.512 9.6 1.664 14.08-51.328-2.56-96.768-27.136-127.232-64.512a61.916 61.916 0 00-8.32 30.976 61.446 61.446 0 0027.52 51.328c-10.112-.256-19.584-3.072-27.904-7.68v.768c0 29.952 21.248 54.784 49.536 60.544a61.529 61.529 0 01-16.256 2.176 58.93 58.93 0 01-11.648-1.152c7.808 24.576 30.592 42.368 57.6 42.88-21.12 16.512-47.744 26.368-76.672 26.368-4.992 0-9.856-.256-14.72-.896 27.008 17.664 59.52 27.904 94.336 27.904"
      fill="#fff"
      fillRule="nonzero"
    />
  </Svg>
);

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({children}: SocialIconProps) => {
  return (
    <Box
      marginHorizontal="s"
      backgroundColor="background"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center">
      {children}
    </Box>
  );
};
const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Twitter />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({});

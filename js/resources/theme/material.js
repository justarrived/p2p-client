import color from 'color';
import { Platform, Dimensions, PixelRatio } from 'react-native';
import { PRIMARY_THEME_COLOR, BLACK, WHITE } from '../../components/common/colors';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = 'material';

/**
  Native Base material design preset theme file.
  Custom brand colors are read and applied from the colors file.

  Note that this is a standard Native Base file/theme that has been ejected:
  https://docs.nativebase.io/CUSTOMIZE.html#Theming_NativeBase_Apps
**/
export default {
  platformStyle,
  platform,
    // AndroidRipple
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',

    // Badge
  badgeBg: PRIMARY_THEME_COLOR,
  badgeColor: WHITE,
    // New Variable
  badgePadding: (platform === 'ios') ? 3 : 0,

    // Button
  btnFontFamily: (platform === 'ios') ? 'Roboto' : 'Roboto_medium',
  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',

    // CheckBox
  CheckboxRadius: 0,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: (platform === 'ios') ? 0 : 5,
  CheckboxIconSize: (platform === 'ios') ? 18 : 14,
  CheckboxIconMarginTop: (platform === 'ios') ? undefined : 1,
  CheckboxFontSize: (platform === 'ios') ? 21 : 18,
  DefaultFontSize: 17,
  checkboxBgColor: PRIMARY_THEME_COLOR,
  checkboxSize: 20,
  checkboxTickColor: WHITE,

  // Segment
  segmentBackgroundColor: PRIMARY_THEME_COLOR,
  segmentActiveBackgroundColor: PRIMARY_THEME_COLOR,
  segmentTextColor: WHITE,
  segmentActiveTextColor: PRIMARY_THEME_COLOR,
  segmentBorderColor: WHITE,
  segmentBorderColorMain: PRIMARY_THEME_COLOR,

    // New Variable
  get defaultTextColor() {
    return this.textColor;
  },


  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return (platform === 'ios') ? this.fontSizeBase * 1.1 :
        this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  buttonPadding: 6,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },


    // Card
  cardDefaultBg: WHITE,


      // Color
  brandPrimary: PRIMARY_THEME_COLOR,
  brandInfo: PRIMARY_THEME_COLOR,
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandSidebar: '#252932',


    // Font
  fontFamily: 'Roboto',
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },


    // Footer
  footerHeight: 55,
  footerDefaultBg: PRIMARY_THEME_COLOR,


    // FooterTab
  tabBarTextColor: PRIMARY_THEME_COLOR,
  tabBarTextSize: (platform === 'ios') ? 14 : 11,
  activeTab: WHITE,
  sTabBarActiveTextColor: PRIMARY_THEME_COLOR,
  tabBarActiveTextColor: WHITE,
  tabActiveBgColor: undefined,

    // Tab
  tabDefaultBg: WHITE,
  topTabBarTextColor: PRIMARY_THEME_COLOR,
  topTabBarActiveTextColor: PRIMARY_THEME_COLOR,
  topTabActiveBgColor: undefined,
  topTabBarBorderColor: PRIMARY_THEME_COLOR,
  topTabBarActiveBorderColor: PRIMARY_THEME_COLOR,


    // Header
  toolbarBtnColor: WHITE,
  toolbarDefaultBg: PRIMARY_THEME_COLOR,
  toolbarHeight: (platform === 'ios') ? 76 : 56,
  toolbarIconSize: (platform === 'ios') ? 20 : 22,
  toolbarSearchIconSize: (platform === 'ios') ? 20 : 23,
  toolbarInputColor: PRIMARY_THEME_COLOR,
  searchBarHeight: (platform === 'ios') ? 30 : 40,
  toolbarInverseBg: '#222',
  toolbarTextColor: PRIMARY_THEME_COLOR,
  toolbarDefaultBorder: PRIMARY_THEME_COLOR,
  iosStatusbar: 'light-content',
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).hex();
  },


    // Icon
  iconFamily: 'Ionicons',
  iconFontSize: (platform === 'ios') ? 30 : 28,
  iconMargin: 7,
  iconHeaderSize: (platform === 'ios') ? 29 : 24,


    // InputGroup
  inputFontSize: 17,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',

  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#575757';
  },

  inputGroupMarginBottom: 10,
  inputHeightBase: 50,
  inputPaddingLeft: 5,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },


    // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: (platform === 'ios') ? 37 : 30,
  lineHeight: (platform === 'ios') ? 20 : 24,


    // List
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listItemHeight: 45,
  listBtnUnderlayColor: '#DDD',

    // Card
  cardBorderColor: '#ccc',

    // Changed Variable
  listItemPadding: (platform === 'ios') ? 10 : 12,

  listNoteColor: '#808080',
  listNoteSize: 13,


    // Progress Bar
  defaultProgressColor: PRIMARY_THEME_COLOR,
  inverseProgressColor: '#1A191B',


    // Radio Button
  radioBtnSize: (platform === 'ios') ? 25 : 23,
  radioSelectedColorAndroid: PRIMARY_THEME_COLOR,

    // New Variable
  radioBtnLineHeight: (platform === 'ios') ? 29 : 24,

  radioColor: '#7e7e7e',

  get radioSelectedColor() {
    return color(this.radioColor).darken(0.2).hex();
  },


    // Spinner
  defaultSpinnerColor: PRIMARY_THEME_COLOR,
  inverseSpinnerColor: '#1A191B',


    // Tabs
  tabBgColor: '#FF0000',
  tabFontSize: 15,
  tabTextColor: '#222222',


    // Text
  textColor: BLACK,
  inverseTextColor: WHITE,
  noteFontSize: 14,


    // Title
  titleFontfamily: (platform === 'ios') ? 'Roboto' : 'Roboto_medium',
  titleFontSize: 19,
  subTitleFontSize: 14,
  subtitleColor: WHITE,

    // New Variable
  titleFontColor: WHITE,


    // Other
  borderRadiusBase: 2,
  borderWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
  contentPadding: 10,

  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hex();
  },

  dropdownBg: BLACK,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  jumbotronBg: '#C9C9CE',
  jumbotronPadding: 30,
  deviceWidth,
  deviceHeight,

    // New Variable
  inputGroupRoundedBorderRadius: 30,
};

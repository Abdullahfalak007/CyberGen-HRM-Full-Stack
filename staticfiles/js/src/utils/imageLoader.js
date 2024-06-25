// utils/imageLoader.js
const imagePaths = {
  Dashboard: require("../../../images/Dashboard_icon_white.svg"),
  MyProfile: require("../../../images/myprofle_icon_white.svg"),
  Users: require("../../../images/Users_white.svg"),
  Jobs: require("../../../images/jobs_icon_white.svg"),
  Marketing: require("../../../images/marketing_white.svg"),
  PartnerManagement: require("../../../images/partner_management_white.svg"),
  Articles: require("../../../images/articles_white.svg"),
  RSSFeed: require("../../../images/rss_feed_icon_white.svg"),
  Settings: require("../../../images/settings_white.svg"),
  Route: require("../../../images/route_white.svg"),
  ContactUs: require("../../../images/contactUs_icon_white.svg"),
  Subscribers: require("../../../images/subscribers_white.svg"),
  Logout: require("../../../images/logout_icon_white.svg"),
};

const imageBlackPaths = {
  Dashboard: require("../../../images/Dashboard_icon_black.svg"),
  MyProfile: require("../../../images/myprofle_icon_black.svg"),
  Users: require("../../../images/Users_black.svg"),
  Jobs: require("../../../images/jobs_icon_black.svg"),
  Marketing: require("../../../images/marketing_black.svg"),
  PartnerManagement: require("../../../images/partner_management_black.svg"),
  Articles: require("../../../images/articles_black.svg"),
  RSSFeed: require("../../../images/rss_feed_icon_black.svg"),
  Settings: require("../../../images/settings_black.svg"),
  Route: require("../../../images/route_black.svg"),
  ContactUs: require("../../../images/contactUs_icon_black.svg"),
  Subscribers: require("../../../images/subscribers_black.svg"),
  Logout: require("../../../images/logout_icon_black.svg"),
};

export const getImagePath = (key, isSelected) => {
  return isSelected ? imageBlackPaths[key] : imagePaths[key];
};

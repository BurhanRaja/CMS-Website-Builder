import { v4 as uuid } from "uuid";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RedditIcon from "@mui/icons-material/Reddit";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const socialIcons = [
  {
    id: uuid(),
    iconName: "github",
    icon: <GitHubIcon />,
  },
  {
    id: uuid(),
    iconName: "instagram",
    icon: <InstagramIcon />,
  },
  {
    id: uuid(),
    iconName: "facebook",
    icon: <FacebookIcon />,
  },
  {
    id: uuid(),
    iconName: "linkedin",
    icon: <LinkedInIcon />,
  },
  {
    id: uuid(),
    iconName: "twitter",
    icon: <TwitterIcon />,
  },
  {
    id: uuid(),
    iconName: "youtube",
    icon: <YouTubeIcon />,
  },
  {
    id: uuid(),
    iconName: "reddit",
    icon: <RedditIcon />,
  },
  {
    id: uuid(),
    iconName: "pinterest",
    icon: <PinterestIcon />,
  },
  {
    id: uuid(),
    iconName: "whatsapp",
    icon: <WhatsAppIcon />,
  },
];

import ShareIcon from "@mui/icons-material/Share";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const allIcons = [
  {
    id: uuid(),
    name: "share",
    icon: <ShareIcon />,
  },
  {
    id: uuid(),
    name: "comment",
    icon: <ModeCommentIcon />,
  },
];

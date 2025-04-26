const mdxDeclaration = `
import Chip from '@mui/material/Chip';

export const Bullet = () => <><span style={{ fontWeight: 'normal', fontSize: '.5em' }}>&nbsp;●&nbsp;</span></>
`;

const formatMDXAdmonition = (
  { text, title, type },
  meta,
) => {
  const calloutType = type === "warning" ? "warning" : "info";
  return `:::${calloutType}[${title}]${text}:::`;
};

const formatMDXBadge = ({ text, classname }) => {
  const color = classname === "DEPRECATED" ? 'warning' : 'info';
  return `<Chip color="${color}" label="${text}" size="small" variant="outlined"/>`;
};

const formatMDXBullet = (text = "") => {
  return `<Bullet/>${text}`;
};

module.exports = {
  mdxDeclaration,
  formatMDXAdmonition,
  formatMDXBadge,
  formatMDXBullet
};

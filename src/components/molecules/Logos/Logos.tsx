import { Link } from '@atoms/index';
import ReactLogo from '@assets/react.svg?react';
import ViteLogo from '@assets/vite.svg?react';

const Logos = () => {
  return (
    <>
      <Link href="https://vitejs.dev" target="_blank">
        <ViteLogo className="logo" />
      </Link>
      <Link href="https://react.dev" target="_blank">
        <ReactLogo className="logo react" />
      </Link>
    </>
  );
};

export default Logos;

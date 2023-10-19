import Link from "@atoms/Link/Link.tsx";
import Image from "@atoms/Image/Image.tsx";
import reactLogo from "@assets/react.svg";
import viteLogo from '@assets/vite.svg'

const Logos = () => {
    return(
        <>
            <Link href="https://vitejs.dev" target="_blank">
                <Image src={viteLogo} className="logo" alt="Vite logo" />
            </Link>
            <Link href="https://react.dev" target="_blank">
                <Image src={reactLogo}  className="logo react" alt="React logo" />
            </Link>
        </>
    );
}

export default Logos;

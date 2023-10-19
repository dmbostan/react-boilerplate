import {LinkTypes} from "./Link.types.ts";

const Link = ({target, href, children}: LinkTypes) => {
    return(
      <a target={target} href={href}>{children}</a>
    );
}

export default Link;

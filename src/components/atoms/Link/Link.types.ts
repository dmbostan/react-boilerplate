import {ReactNode} from "react";

export type LinkTypes = {
    target?: '_blank' | '_self' | '_parent' | '_top',
    href: string,
    children: string | ReactNode | ReactNode[] | null
}

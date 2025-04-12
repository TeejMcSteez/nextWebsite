import Image from "next/image";


export default function NavbarMenuButton() {
 return (
    <Image
        src="/assets/menu.svg"
        width={50}
        height={50}
        alt="Menu Button"
        className="hover:-rotate-25
        dark:invert-20"
      />
 ); 
}
import HeaderCart from "../cart/HeaderCart";
import Logo from "../UI/Logo";

export default function Header() {
  return (
    <header className=" z-10 flex justify-between items-center bg-secondary fixed top-0 left-0 right-0 drop-shadow-md">
        <Logo />
        <HeaderCart/>
    </header>
  )
}

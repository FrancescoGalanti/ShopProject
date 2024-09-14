import LogoImage from "../../assets/react.svg"
export default function Logo() {
  return (
    <a className="text-black font-semibold flex items-center gap-2 uppercase " href="/">
      <img src={LogoImage} alt="" />
      React Shop
    </a>
  )
}

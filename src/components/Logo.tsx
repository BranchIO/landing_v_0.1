export default function Logo() {
  return (
    <a className="logo" href="#" aria-label="Branch home">
      <span className="logo-mark">
        {/* white mark on the green hero, black mark once the pill turns white */}
        <img className="logo-img logo-img--white" src="/branch-logo-white.png" alt="" />
        <img className="logo-img logo-img--black" src="/branch-logo-black.png" alt="" />
      </span>
      <span className="logo-word">Branch</span>
    </a>
  );
}

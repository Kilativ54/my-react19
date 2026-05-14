import Logo from "../Logo";
import UserMenu from "../UserMenu";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.header}>
      <div>
        <Logo />
        <UserMenu />
      </div>
    </header>
  );
}

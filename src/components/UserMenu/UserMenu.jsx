import css from "./UserMenu"

export default function UserMenu() {
    return (
      <div className={css.container}>
        <p>Welcome</p>
        <button>Log out</button>
      </div>
    );
}
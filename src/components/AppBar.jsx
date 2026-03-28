import Logo from "./Logo"
import UserMenu from "./UserMenu"

export default function AppBar() {
    return (<header>
        <div>
            <Logo />
            <UserMenu/>
            
        </div>
    </header>)
}
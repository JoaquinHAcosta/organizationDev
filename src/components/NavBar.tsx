import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import SideMenu from './SideMenu'

const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-between border">
        <Button variant="ghost" className="m-1 p-0" asChild>
          <SideMenu />
        </Button>
        <Button variant="ghost" className="m-1.5 p-0 rounded-full" asChild>
          <Avatar>
            <AvatarImage src="/user-avatar.jpg" />
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </nav>
  )
}

export default NavBar

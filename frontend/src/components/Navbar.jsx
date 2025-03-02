import { useAuthStore } from "../store/useAuthStore";

function Navbar() {
  const {authUser} = useAuthStore();

  return (
    <div>
      NavBar
    </div>
  )
}

export default Navbar;

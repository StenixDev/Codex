import { useAppStore } from '../store/appStore';

function NavBar() {
  const { theme, toggleTheme, user, login, logout } = useAppStore();

  return (
    <div>
      NavBar {theme}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <hr />
      {user ? (
        <>
          <span>
            {user} <button onClick={logout}>logout</button>
          </span>
        </>
      ) : (
        <span>
          hello Guest <button onClick={() => login('stenix')}>Login</button>
        </span>
      )}
    </div>
  );
}
export default NavBar;

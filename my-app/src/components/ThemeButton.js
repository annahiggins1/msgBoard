import sun from "../icons/sunicon.png";
import moon from "../icons/moon.svg";

//renders the two sun/moon buttons that allow the user to change the theme
export default function ThemeButton( { setTheme }) {
    return (
        <aside className="aside">
          <button className = "light-dark-button" style={{
            backgroundImage: `url(${sun})`,
          }}
          //sets the theme to light
          onClick={() => setTheme('light')}>
          </button>
          <button className="light-dark-button" style={{
            backgroundImage: `url(${moon})`,
          }}
          //sets the theme to dark
          onClick={() => setTheme('dark')}>
          </button>
        </aside>
    );
}
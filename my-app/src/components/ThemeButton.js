import sun from "../icons/sunicon.png";
import moon from "../icons/moon.svg";

export default function ThemeButton( { setTheme }) {
    return (
        <aside className="aside">
          <button className = "light-dark-button" style={{
            backgroundImage: `url(${sun})`,
          }}
          onClick={() => setTheme('light')}>
          </button>
          <button className="light-dark-button" style={{
            backgroundImage: `url(${moon})`,
          }}
          onClick={() => setTheme('dark')}>
          </button>
        </aside>
    );
}
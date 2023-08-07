import "../styles/navigationDesktop.scss";

const NavigationDesktop = ({ pages }) => {
  return (
      <nav>
        <ul className="pages">
          {pages.map((page) => (
            <li key={page}>
              <a>{page}</a>
            </li>
          ))}
        </ul>
      </nav>
  );
};

export default NavigationDesktop;

import config from '../config/index.json';

const Header = () => {
  const { company } = config;
  const { logo } = company;

  return (
    <div className="animate-fadeInUp pt-8 below-lg:flex below-lg:justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <a href="#">
        <img alt="Coinverse Logo" className="h-10 w-auto sm:h-10" src={logo} />
      </a>
    </div>
  );
};

export default Header;

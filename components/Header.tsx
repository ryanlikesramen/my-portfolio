import Container from '@/components/Container';
import Logo from './Logo';

const Header = () => {
  return (
    <header className = "border-b border-b-hoverColor bg-bodyColor text-white/80">
      <Container className = "py-5 flex items-center justify-between">
        <Logo title="Ryan Soriano" subtitle="." />
        <div>Right</div>
      </Container>
    </header>
  );
};

export default Header;
import logo from '../logo.svg';
import { HeaderWrapper, AppLogo } from './styles';

function AppHeader() {
  return (
    <HeaderWrapper>
      <AppLogo src={logo} alt="app-logo" />
    </HeaderWrapper>
  );
}

export default AppHeader;

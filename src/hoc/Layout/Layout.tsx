import NavBar from '../../components/NavBar';
import classes from './Layout.module.scss'

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={classes.Layout}>
      <NavBar/>

      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
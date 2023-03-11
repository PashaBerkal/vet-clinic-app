import Footer from '../../components/Footer';
import Header from '../../components/Header';
import classes from './Layout.module.scss';

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className={classes.Layout}>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;

import Header from "../../components/Header";
import classes from './Layout.module.scss'

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className={classes.Layout}>
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;
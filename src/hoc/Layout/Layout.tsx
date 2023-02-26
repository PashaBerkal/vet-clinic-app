import NavBar from '../../components/NavBar';

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <NavBar />
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;
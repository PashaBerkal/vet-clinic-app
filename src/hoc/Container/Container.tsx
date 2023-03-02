import classes from './Container.module.scss'

type Props = {
    children: React.ReactNode
}

const Container = ({children}: Props) => {
    return (
        <div className={classes.Container}>
            {children}
        </div>
    );
};

export default Container;
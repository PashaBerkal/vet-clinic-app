import classes from './Container.module.scss';

type Props = {
    children: React.ReactNode
}

const Container = ({ children }: Props) => (
  <div className={classes.Container}>
    {children}
  </div>
);

export default Container;

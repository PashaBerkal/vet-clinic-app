import Container from '../../hoc/Container';
import {ReactComponent as Logo} from './assets/logo.svg'
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <Container>
                <div className={classes.wrapper}>
                    <div className={classes.logo}>
                        <Logo/>
                        <div className={classes.logoText}> ВСЕ ВИДЫ ВЕТЕРИНАРНОЙ<br/>ДИАГНОСТИКИ И ЛЕЧЕНИЯ</div>
                    </div>
                    <div className={classes.time}>
                        <div className={classes.title}>
                            Время работы
                        </div>
                        <div className={classes.text}>
                        Пн-вс: 10:00—22:00 
                        <br />
                        и до последнего клиента
                        </div>
                    </div>
                    <div className={classes.address}>
                        <div className={classes.title}>
                            Наш адрес
                        </div>
                        <div className={classes.text}>
                            Россия, Москва, Округ САО, Район Дмитровский, <br />
                            Учинская улица, 6, 1 этаж <br />
                            Метро: Селигерская (2 км)
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
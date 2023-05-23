import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classes from './AccordionCard.module.scss';

interface PropsAccordionCard {
  diagnosis: string,
  prescription: string
}

const AccordionCard: React.FC<PropsAccordionCard> = ({ diagnosis, prescription }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean,
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion
      expanded={expanded === 'panel4'}
      onChange={handleChange('panel4')}
      className={classes.Accordion}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel4bh-header"
      >
        <Typography className={classes.title}>{diagnosis}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.subtitle}>
          {prescription}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionCard;

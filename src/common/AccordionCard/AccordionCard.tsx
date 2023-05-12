import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classes from './AccordionCard.module.scss';

const AccordionCard = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean,
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={classes.Accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="panel4bh-header"
      >
        <Typography className={classes.title}>Соскоб с кожи на паразиты и дерматофиты </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.subtitle}>
          Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
          amet egestas eros, vitae egestas augue. Duis vel est augue.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionCard;

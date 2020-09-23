import React, { ReactElement } from 'react'
import CountryItem from "../CountryItem/CountryItem";


import AccordionDetails from '@material-ui/core/AccordionDetails';

import { StyledAccordion, StyledAccordionSummary, ListTitle, List, StyledExpandIcon } from "./style";


type SimpleAccordionProps = {
    continentName: string;
    visitedCountry: ICountry[];
};

const SimpleAccordion = ({ continentName, visitedCountry }: SimpleAccordionProps) => {




    return (
        <>
            <StyledAccordion>
                <StyledAccordionSummary
                    expandIcon={<StyledExpandIcon />}
                    aria-controls={`${continentName}-content`}
                    id={`${continentName}-header`}
                >
                    <ListTitle >
                        {continentName} ({visitedCountry.length})
                    </ListTitle>
                </StyledAccordionSummary>
                <AccordionDetails>
                    <List key={continentName} >
                        {
                            visitedCountry.map(
                                (country): ReactElement => (
                                    <CountryItem
                                        listType="tabel"
                                        key={country.code}
                                        country={country}
                                        continent={continentName}
                                    />

                                )
                            )
                        }
                    </List>
                </AccordionDetails>
            </StyledAccordion>
        </>

    )
}

export default SimpleAccordion
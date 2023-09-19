import CustomTitle from "@/components/cutom-title";
import { Box, Container, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const accordionArr = [
  {
    id: "1",
    title: "Will you let me know when a role has been filled?",
    desc: "Read here the answers to some essential concerns regarding our employment procedure. Still have a question? Please feel free to contact us personally  lawyerspact@io.uk",
    ariaControls: "panel1a-content",
  },
  {
    id: "2",
    title: "Can I apply for multiple jobs?",
    desc: "Read here the answers to some essential concerns regarding our employment procedure. Still have a question? Please feel free to contact us personally  lawyerspact@io.uk",
    ariaControls: "panel2a-content",
  },
  {
    id: "3",
    title: "Can I apply for multiple jobs?",
    desc: "Read here the answers to some essential concerns regarding our employment procedure. Still have a question? Please feel free to contact us personally  lawyerspact@io.uk",
    ariaControls: "panel2a-content",
  },
  {
    id: "4",
    title:
      "I interviewed/applied last year and wasn’t selected. Can I reapply?",
    desc: "Read here the answers to some essential concerns regarding our employment procedure. Still have a question? Please feel free to contact us personally  lawyerspact@io.uk",
    ariaControls: "panel3a-content",
  },
  {
    id: "5",
    title: "How many jobs can I apply for at once?",
    desc: "Read here the answers to some essential concerns regarding our employment procedure. Still have a question? Please feel free to contact us personally  lawyerspact@io.uk",
    ariaControls: "panel4a-content",
  },
  {
    id: "5",
    title:
      "I’ve applied for a tech role, what does the technical interview involve?",
    desc: "Read here the answers to some essential concerns regarding our employment procedure. Still have a question? Please feel free to contact us personally  lawyerspact@io.uk",
    ariaControls: "panel5a-content",
  },
  {
    id: "6",
    title: "Do you consider past candidates' applications for future openings?",
    desc: "Read here the answers to some essential concerns regarding our employment procedure. Still have a question? Please feel free to contact us personally  lawyerspact@io.uk",
    ariaControls: "panel6a-content",
  },
  {
    id: "6",
    title: "How often do I have to go into the office?",
    desc: "Read here the answers to some essential concerns regarding our employment procedure. Still have a question? Please feel free to contact us personally  lawyerspact@io.uk",
    ariaControls: "panel6a-content",
  },
];

const FrequentlyAskedQuestions = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ padding: "30px 0" }}>
        <CustomTitle
          primaryText="FREQUENTLY"
          secondaryText="ASKED"
          tertiaryText="QUESTIONS"
          textFontSize="40px"
        />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            padding: "30px 0",
            textAlign: "center",
          }}
        >
          Read here the answers to some essential concerns regarding our
          employment procedure. Still have a question? Please feel free to
          contact us personally lawyerspact@io.uk
        </Typography>
        <Box sx={{margin:{xs:"0px", lg:"0px 250px"}}}>
          {accordionArr.map((item: any) => (
            <Accordion
              key={item.id}
              sx={{
                margin: "20px 0",
                padding: "10px 0",
                background: "#1A2028",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"#FEDE4B"}} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{ fontSize: "18px", fontWeight: "500", color: "#fff" }}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "400", color: "#fff" }}
                >
                  {item.desc}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default FrequentlyAskedQuestions;

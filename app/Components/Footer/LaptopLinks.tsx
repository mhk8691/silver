"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const items = [
  {
    id: "1",
    title: "درباره دارینه",
    items: [
      { title: "درباره‌ ما", link: "about-us" },
      { title: "سوالات متداول", link: "faq" },
      { title: "اپلیکیشن نقره", link: "application" },
      { title: "قوانین و مقررات", link: "rules" },
    ],
  },
 
  {
    id: "2",
    title: "دسترسی سریع",
    items: [
      { title: "محاسبه قیمت نقره", link: "/calculator" },
      { title: "قیمت نقره امروز", link: "/silver-price" },
    ],
  },
];

export default function LaptopLinks() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (id: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? id : false);
    };
  return (
    <Grid size={12} mt={2}>
      <Stack>
        {items.map((item) => {
          const isOpen = expanded === item.id;

          return (
            <React.Fragment key={item.id}>
              <Accordion
                key={item.id}
                expanded={isOpen}
                onChange={handleChange(item.id)}
                sx={{
                  background: "#FFFFFF",
                  py: 1,
                  borderRadius: "10px !important",
                  boxShadow: "none",
                  "&::before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    isOpen ? (
                      <SvgIcon
                        sx={{
                          fontSize: 30,
                          color: "#717475",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.9181 8.94971L13.3981 15.4697C12.6281 16.2397 11.3681 16.2397 10.5981 15.4697L4.07812 8.94971"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </SvgIcon>
                    ) : (
                      <SvgIcon
                        sx={{
                          fontSize: 30,
                          color: "#717475",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.9181 8.94971L13.3981 15.4697C12.6281 16.2397 11.3681 16.2397 10.5981 15.4697L4.07812 8.94971"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </SvgIcon>
                    )
                  }
                >
                  <Typography variant="body1" fontWeight={'bold'}>{item.title}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  {item.items.map((link) => (
                    <Link href={link.link} key={link.title}>
                      <Typography
                        variant="body2"
                        sx={{
                          mt: 1,
                          whiteSpace: "preLine",
                          lineHeight: "25px",
                          fontSize: {
                            xs: 12,
                            sm: 14,
                          },
                        }}
                      >
                        {link.title}
                      </Typography>
                    </Link>
                  ))}
                </AccordionDetails>
              </Accordion>
              <Divider />
            </React.Fragment>
          );
        })}
      </Stack>
    </Grid>
  );
}

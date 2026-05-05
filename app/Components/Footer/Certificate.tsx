"use client";
import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import { certificate } from "./Footer";

export default function Certificate({ isMobile }: { isMobile: boolean }) {
  return (
    <Grid
      size={3}
      container
      display={{
        xs: isMobile ? "flex" : "none",
        md: isMobile ? "none" : "flex",
      }}
      justifyContent={"center"}
      spacing={2}
      mt={{
        xs: 5,
        md: 0,
      }}
    >
    
      {certificate.map((item, index) => (
        <React.Fragment key={index}>
          <Grid
            size={6}
            key={index}
            display={"flex"}
            justifyContent={index % 2 === 0 ? "flex-end" : "flex-start"}
          >
            <Stack
              border={1}
              height={96}
              width={112}
              borderRadius={2.5}
              borderColor={"background.paper"}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                alt=""
                src={item}
                width={100}
                height={100}
                style={{
                  objectFit: "contain",
                  width: "70%",
                  height: "55%",
                }}
              />
            </Stack>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
}

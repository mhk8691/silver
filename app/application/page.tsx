import {  Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import AppDownloadItem from './AppDownloadItem'
import Image from 'next/image'
import Link from 'next/link'
import OverviewSlider from './OverviewSlider'
const applicationsList = [
    {
        title:'دانلود برای اندروید',
        items:[
            {
                id:1,
        image:'apk',
        url:'/test'
    },{
        id:2,
        image:'myket',
        url:'/test'
    },{
        id:3,
        image:'bazar',
        url:'/test'
    },]
    },
   {
    title:'دانلود برای iOS (آیفون)',
    items:[ {
        id:1,
        image:'PWA',
        url:'/test'
    },{id:2,
        image:'sibApp',
        url:'/test'
    },{id:3,
        image:'anar',
        url:'/test'
    },{id:4,
        image:'iApps',
        url:'/test'
    },{id:5,
        image:'sibIrani',
        url:'/test'
    },]
   }
]

export default function page() {
  return (
    <Container maxWidth={'lg'} sx={{mt:3,px:'40px !important'}}>
    <Grid container spacing={2}>
     <Grid size={{
        xs:12,
        md:7
     }}
     container
     >
        <Typography variant="h6" fontWeight={'bold'}>
           نرم افزار و اپلیکیشن خرید و فروش نقره - نقرینه

        </Typography>
        <Stack display={{
            md:'none'
        }} direction={'row'} justifyContent={'center'} width={'100%'} my={2}>
            <Image src={'main.webp'} width={'400'} height={322} alt='' />
        </Stack>
        <Typography variant="body2" >

اپلیکیشن نقره سی، بستری برای خرید و فروش آنلاین و راحت نقره خام و بدون اجرت است. با بھره مندی از امکانات اپلیکیشن نقره سی، سرمایه شما همیشه در دسترس شما بوده و برای <Link style={{color:'#6DA9E1',textDecoration:'underline'}} href={'/dashboard'}>
                خرید نقره آب شده
                </Link>  نیازی به مراجعه و حضور فیزیکی به بازار نقره نیست.
        </Typography>
           {
        applicationsList.map((item)=>(
          <Stack key={item.title} direction={'column'} gap={2}>
            <Typography variant="body1" fontWeight={'900'} >
                    {item.title}
                </Typography>
            <Grid container spacing={2} sx={{display:'flex',justifyContent:{
                xs:'center',
                md:'flex-start'
            }}}>
                {
                    item.items.map((application)=>(
                        <Grid   key={application.id}>
                            <AppDownloadItem  image={application.image} url={application.url}  />
                        </Grid>
                    ))
                }
            </Grid>
          </Stack>
        ))
    }
     </Grid>
     <Grid size={{xs:12,md:5}} pt={2} sx={{display:{
        xs:'none',
        md:'flex'
     }}}>
        <Image src={'/images/application-download/main.webp'} width={'400'} height={322} alt='' />
     </Grid>
    </Grid>
    <Typography variant="h6" fontSize={{
        xs:22,
        md:30
    }}
    sx={{my:4}} fontWeight={'bold'} >
        تصاویر اپ
    </Typography>
    <OverviewSlider/>
  
    </Container>
  )
}

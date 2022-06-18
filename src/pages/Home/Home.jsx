import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import useStyles from './styles'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import Vegetables from '../../components/Veggies/Vegetables';
import Popular from '../../components/Popular/Popular';

function Home({vitamins, popular}) {

  const classes = useStyles()
  return (
    <div className={classes.container}>
        <div className={classes.home}>
            <div className={classes.homeCont}>
                <h2 className={classes.title}>Our Veggies Section</h2>
                
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={false}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                {vitamins.map((recipe)=> {
                    return (
                        <SwiperSlide key={recipe.id}>
                            <Vegetables recipe={recipe}/>
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </div>
            <div className={classes.homeCont}>
                <h2 className={classes.title}>Popular Palette</h2>
                
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={false}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                {popular.map((recipe)=> {
                    return (
                        <SwiperSlide key={recipe.id}>
                            <Popular recipe={recipe}/>
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </div>

      </div>
    </div>
  )
}

export default Home

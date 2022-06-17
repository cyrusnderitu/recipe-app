import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import useStyles from './styles'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import Vegetables from '../../components/Veggies/Vegetables';

function Home({vitamins}) {

  const classes = useStyles()
  return (
    <div className={classes.container}>
        <div className={classes.home}>
            <h2 className={classes.title}>Our Veggies Market</h2>
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
    </div>
  )
}

export default Home

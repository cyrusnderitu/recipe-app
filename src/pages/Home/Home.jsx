import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import useStyles from './styles'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

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
                            <div className={classes.card}>
                                <img src={recipe.image} alt={recipe.cardTitle} className={classes.cardImg}/>
                                <p className={classes.cardTitle}>{recipe.title}</p>
                            </div>
                        </SwiperSlide>

                    )
                })}
            </Swiper>
      </div>
    </div>
  )
}

export default Home

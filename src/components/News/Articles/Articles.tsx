import React, {FC} from "react";
import {TabsDataType, ItemsType} from "../../../types/types";
import './Articles.scss'
import {SwiperSlide, Swiper} from "swiper/react";
import 'swiper/css'
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination} from "swiper";

type PropsType = {
    items: ItemsType
    tab: TabsDataType
}

const Articles: FC<PropsType> = (props) => {

    const toggleHover = (e: React.MouseEvent) => {
        e.currentTarget.classList.toggle('hover');
    };

    const mappedArticles = props.items.map(i =>
        i.categoryId === props.tab.id
            ? <SwiperSlide className='article__item' key={i.id} onClick={toggleHover}>
                <img className='article__image' src={i.image} alt='article-img'/>
                    <div className='article__desc'>
                        {i.description}
                    </div>
                <div className='article__hashtags-wrapper'>
                    {i.tags.map(i =>
                        <span className='article__hashtags' key={i.id}>
                                {`${i.name} `}
                        </span>
                    )}
                </div>
            </SwiperSlide>
            : '')

    return (
        <div className='article__wrapper'>
            <button className='swiper-button-prev'></button>
            <button className='swiper-button-next'></button>
            <div className='swiper-pagination'></div>
            <Swiper
                spaceBetween={16}
                slidesPerView={4}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                pagination={{
                    el: '.swiper-pagination'
                }}
                modules={[Navigation, Pagination]}
                breakpoints={{
                    320: {
                        slidesPerView: 1
                    },
                    376: {
                        slidesPerView: 1 // intentional property repeating
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1400: {
                        slidesPerView: 4
                    }
                }}
            >
                {(mappedArticles.filter(i => i !== '').length !== 0 ) // check if sorted arr in tab is empty
                    ? mappedArticles
                    : <div className='no-data'>No data found</div>}
            </Swiper>
        </div>
    )
}

export default Articles
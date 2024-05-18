import React from 'react'
import Slider from 'react-slick'

const SliderComp = () => {
    const settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
        <Slider {...settings}>
      <div className=''>
      <div>
        <div className='text-5xl font-bold hidden'>SecilGlam Bu Yılın En Modası</div>
        <div className='hidden'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        <div className='hidden'>İncele</div>
      </div>
        <img src='https://cdn.secilstore.com/docs/images/others/orj/9eafc36b-c043-4c48-ac7c-b5d30a4640bc.webp' alt=''/>
      </div>

      <div className=''>
      <div>
        <div className='text-5xl font-bold hidden'>SecilGlam Bu Yılın En Modası</div>
        <div className='hidden'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        <div className='hidden'>İncele</div>
      </div>
        <img src='https://cdn.secilstore.com/docs/images/others/orj/9b19a08f-152c-49e5-9c77-6c7e7ba1b4de.webp' alt=''/>
      </div>

      <div className=''>
      <div>
        <div className='text-5xl font-bold hidden'>SecilGlam Bu Yılın En Modası</div>
        <div className='hidden'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
        <div className='hidden'>İncele</div>
      </div>
        <img src='https://cdn.secilstore.com/docs/images/others/orj/faf22ae7-9e10-40f8-99c5-6d432a6b0854.webp' alt=''/>
      </div>

 
      </Slider>
    </div>
  )
}

export default SliderComp
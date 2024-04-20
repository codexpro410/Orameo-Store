import imgallery1 from "../../assets/images/Galleries/1060547_OLVD9J0.jpg"
import imgallery2 from "../../assets/images/Galleries/futuristic-hologram-smartwatch-wearable-technology.jpg"
import imgallery3 from "../../assets/images/Galleries/new-smartwatch-balancing-with-cliff.jpg"
import imgallery4 from "../../assets/images/Galleries/new-smartwatch-balancing-with-hand.jpg"
import imgallery5 from "../../assets/images/Galleries/new-smartwatch-balancing-with-pyramid.jpg"
import imgallery6 from "../../assets/images/Galleries/new-smartwatch-balancing-with-cliff.jpg"

const Gallery = () => {
  return (

<>
<ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-100 lg:w-1/3 lg:mb-0 mb-4">Master Gallery of Product</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably 
       heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img  className="w-full object-cover h-full object-center block" src={imgallery1}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img  className="w-full object-cover h-full object-center block" src={imgallery2}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img  className="w-full h-full object-cover object-center block" src={imgallery3}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img  className="w-full h-full object-cover object-center block" src={imgallery4}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img  className="w-full object-cover h-full object-center block" src={imgallery5}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img  className="w-full object-cover h-full object-center block" src={imgallery6}/>
        </div>
      </div>
    </div>
  </div>
</section>

</>


    )
}

export default Gallery


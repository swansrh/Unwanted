import React from 'react'
import './NewProductStyle.css'

function NewProducts() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            <div class="FontChangePLS">UNWANTED</div> merch is arriving soon
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Unwanted is an apparel brand that creates merch for you to wear and for your car to wear.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                <img
                                                    src="https://i.etsystatic.com/22691594/r/il/d64072/2430009860/il_fullxfull.2430009860_8dyd.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://www.picclickimg.com/00/s/ODAwWDgwMA==/z/Vi4AAOSwHqdfcosp/$/JDM-Car-Sticker-Kamikaze-Japan-Samurai-Vinyl-Auto-_1.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://www.u-buy.com.tw/productimg/?image=aHR0cHM6Ly9pLmViYXlpbWcuY29tL2ltYWdlcy9nL1gtRUFBT1N3c3ExY1prRHcvcy1sNTAwLnBuZw.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://cdn.shopify.com/s/files/1/2296/5505/products/BrightnessContrast_3_2000x.jpg?v=1573020092"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://cdn.shopify.com/s/files/1/0268/7873/8483/products/jdm-championr-mens-hoodie-supreme-drifter-style-199_1200x1200.jpg?v=1616100459"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://i.etsystatic.com/9116133/r/il/9e2efd/1701238537/il_fullxfull.1701238537_ft2d.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://www.dealsanimg.com/d/l400/pict/124325236255_/set-of-6-rear-window-banner-sticker-turbo-banzai-jdm-fits.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                            >
                                Check It Out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProducts
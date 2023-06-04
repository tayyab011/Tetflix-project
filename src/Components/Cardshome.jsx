import React from 'react';
import m from '../images/ms.png';
import n from '../images/ln.png';

const Cardshome = () => {
    return (
      <div>
        <section class="text-white bg-black body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/2 md:w-full">
                <div class="flex  rounded-lg shadow-lg shadow-rose-600 shadow-green-300 p-8 sm:flex-row flex-col">
                  <div class="w-32 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center flex-shrink-0">
                    <img src={m} className="w-full" alt="" />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-White text-lg title-font font-bold mb-3">
                   Enjoy on you tv
                    </h2>
                    <p class="leading-relaxed text-base">
                   Watch on smart TVs,Playstation,xbox,Apple TV and more.
                    </p>
                
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/2 md:w-full">
                <div class="flex  rounded-lg shadow-lg shadow-rose-600 shadow-green-300 p-8 sm:flex-row flex-col">
                  <div class="w-32 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center flex-shrink-0">
                    <img src={n} className="w-full" alt="" />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-white text-lg title-font font-bold mb-3">
                      Watch anywhere
                    </h2>
                    <p class="leading-relaxed text-base">
                      Strean unlimited movies on you phone,tablet,lapton and TVs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Cardshome;
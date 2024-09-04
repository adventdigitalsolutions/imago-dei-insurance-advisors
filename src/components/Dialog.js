/* eslint-disable @next/next/no-img-element */
'use client'

function Dialog() {
  return (
    <dialog id={`dialog`} className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative">
      <button onClick={() => {document.getElementById(`dialog`).close()}} className={`absolute flex justify-center items-center outline-none border-none -top-[2rem] -right-[2rem] hover:cursor-pointer rotate-45`}>
        <img className='px-4 sm:p-0 hover:scale-150 duration-200' src='/images/add-dark.svg' alt='close content'/>
      </button>
        <div className="mx-auto w-full">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
            Short heading goes here
          </h2>
          <div className="prose">
            <div>
              <p>
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est
                ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique
                consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
              </p>
              <p>
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In
                tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et.
                Quis lobortis at sit dictum eget nibh tortor commodo cursus.
              </p>
              <p>
                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum
                urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut
                id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
                tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere
                cursus diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default Dialog
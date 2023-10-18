function App() {
  return (
    <>
      <div className="w-[428px] h-[896px] bg-white rounded-[20px] outline mx-auto mt-[50px]">
        <div className="flex justify-end gap-10 pt-5 px-5">
          <svg
            className="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="minus">
              <path
                id="Vector"
                d="M5 12H19"
                stroke="#0F0E0F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <svg
            className="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="square">
              <path
                id="Vector"
                d="M16.6667 6H7.33333C6.59695 6 6 6.59695 6 7.33333V16.6667C6 17.403 6.59695 18 7.33333 18H16.6667C17.403 18 18 17.403 18 16.6667V7.33333C18 6.59695 17.403 6 16.6667 6Z"
                stroke="#0F0E0F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <svg
            className="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="x">
              <path
                id="Vector"
                d="M18 6L6 18"
                stroke="#0F0E0F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M6 6L18 18"
                stroke="#0F0E0F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
        <div className="flex gap-[34px] items-center px-5 pt-5">
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 12H21"
              stroke="#0F0E0F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#0F0E0F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="#0F0E0F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex gap-5">
            <button className="w-[126px] px-5 py-2 bg-func-button-color rounded-[100px] text-white text-base font-semibold font-['Poppins']">
              Calculator
            </button>
            <button className="w-[126px] px-5 py-2 rounded-[100px] text-black text-base font-semibold font-['Poppins'] focus:bg-color-red">
              Converter
            </button>
          </div>
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_4_942)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12Z"
                fill="#0F0E0F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1C11 0.447715 11.4477 0 12 0Z"
                fill="#0F0E0F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 20C12.5523 20 13 20.4477 13 21V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21C11 20.4477 11.4477 20 12 20Z"
                fill="#0F0E0F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.51164 3.51286C3.90217 3.12234 4.53533 3.12234 4.92586 3.51286L6.34586 4.93286C6.73638 5.32339 6.73638 5.95655 6.34586 6.34708C5.95533 6.7376 5.32217 6.7376 4.93164 6.34708L3.51164 4.92708C3.12112 4.53655 3.12112 3.90339 3.51164 3.51286Z"
                fill="#0F0E0F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.6523 17.6529C18.0428 17.2624 18.676 17.2624 19.0665 17.6529L20.4865 19.0729C20.877 19.4634 20.877 20.0966 20.4865 20.4871C20.096 20.8776 19.4628 20.8776 19.0723 20.4871L17.6523 19.0671C17.2617 18.6766 17.2617 18.0434 17.6523 17.6529Z"
                fill="#0F0E0F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1C0.447715 13 0 12.5523 0 12Z"
                fill="#0F0E0F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 12C20 11.4477 20.4477 11 21 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21C20.4477 13 20 12.5523 20 12Z"
                fill="#0F0E0F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.34586 17.6529C6.73638 18.0434 6.73638 18.6766 6.34586 19.0671L4.92586 20.4871C4.53533 20.8776 3.90217 20.8776 3.51164 20.4871C3.12112 20.0966 3.12112 19.4634 3.51164 19.0729L4.93164 17.6529C5.32217 17.2624 5.95533 17.2624 6.34586 17.6529Z"
                fill="#0F0E0F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.4865 3.51286C20.877 3.90339 20.877 4.53655 20.4865 4.92708L19.0665 6.34708C18.676 6.7376 18.0428 6.7376 17.6523 6.34708C17.2617 5.95655 17.2617 5.32339 17.6523 4.93286L19.0723 3.51286C19.4628 3.12234 20.096 3.12234 20.4865 3.51286Z"
                fill="#0F0E0F"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_942">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="mt-[80px] px-5">
          <div className="text-zinc-600 text-2xl font-light font-['Poppins'] flex justify-end">
            100 + 49 + 7 + 451 + 30
          </div>
          <div className="text-right text-stone-950 text-[88px] font-light font-['Poppins']">
            637
          </div>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-x-3 gap-y-3.5 m-5 font-normal text-center text-[34px] font-['Poppins']">
          <button className="w-[88px] h-[88px] bg-func-button-color rounded-[352px] text-center text-white text-[34px] font-medium">
            AC
          </button>
          <button className="w-[88px] h-[88px] bg-func-button-color rounded-[352px] text-white">
            <svg
              className="m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clip-path="url(#clip0_4_901)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.66323 4.45533C9.91642 4.16597 10.2822 4 10.6667 4H28C29.0609 4 30.0783 4.42143 30.8284 5.17157C31.5786 5.92172 32 6.93913 32 8V24C32 25.0609 31.5786 26.0783 30.8284 26.8284C30.0783 27.5786 29.0609 28 28 28H10.6667C10.2822 28 9.91642 27.834 9.66323 27.5447L0.329898 16.878C-0.109966 16.3753 -0.109966 15.6247 0.329898 15.122L9.66323 4.45533ZM11.2717 6.66667L3.10502 16L11.2717 25.3333H28C28.3536 25.3333 28.6928 25.1929 28.9428 24.9428C29.1929 24.6928 29.3333 24.3536 29.3333 24V8C29.3333 7.64638 29.1929 7.30724 28.9428 7.05719C28.6928 6.80714 28.3536 6.66667 28 6.66667H11.2717Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.9422 11.0572C25.4629 11.5778 25.4629 12.4221 24.9422 12.9428L16.9422 20.9428C16.4215 21.4635 15.5772 21.4635 15.0565 20.9428C14.5358 20.4221 14.5358 19.5778 15.0565 19.0572L23.0565 11.0572C23.5772 10.5365 24.4215 10.5365 24.9422 11.0572Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.0565 11.0572C15.5772 10.5365 16.4215 10.5365 16.9422 11.0572L24.9422 19.0572C25.4629 19.5778 25.4629 20.4221 24.9422 20.9428C24.4215 21.4635 23.5772 21.4635 23.0565 20.9428L15.0565 12.9428C14.5358 12.4221 14.5358 11.5778 15.0565 11.0572Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4_901">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="w-[88px] h-[88px] bg-func-button-color rounded-[352px] text-white">
            %
          </button>
          <button className="w-[88px] h-[88px] bg-func-button-color rounded-[352px] text-white text-5xl">
            ÷
          </button>

          <button className="w-[88px] h-[88px] bg-digits-button-color rounded-[352px]">
            7
          </button>
          <button className="w-[88px] h-[88px] bg-digits-button-color rounded-[352px]">
            8
          </button>
          <button className="w-[88px] h-[88px] bg-digits-button-color rounded-[352px]">
            9
          </button>
          <button className="w-[88px] h-[88px] bg-func-button-color rounded-[352px] text-5xl   rotate-45 text-white">
            +
          </button>

          <button className="w-[88px] h-[88px] bg-digits-button-color rounded-[352px]">
            4
          </button>
          <button className="w-[88px] h-[88px] bg-digits-button-color rounded-[352px]">
            5
          </button>
          <button className="w-[88px] h-[88px] bg-digits-button-color rounded-[352px]">
            6
          </button>
          <button className="w-[88px] h-[88px] bg-func-button-color rounded-[352px] text-white text-5xl">
            -
          </button>

          <button className="w-[88px] h-[88px] bg-digits-button-color rounded-[352px]">
            1
          </button>
          <button className="w-[88px] h-[88px] bg-digits-button-color rounded-[352px]">
            2
          </button>
          <button className="w-[88px] h-[88px] bg-digits-button-color rounded-[352px]">
            3
          </button>
          <button className="w-[88px] h-[88px] bg-func-button-color rounded-[352px] text-white text-5xl">
            +
          </button>

          <button className="w-[88px] h-[88px] bg-digits-button-color rounded-[352px]">
            <img
              src="src/img/plus-minus.png"
              alt="&#177;"
              className=" w-[24px] m-auto"
            />
          </button>
          <button className="w-[88px] h-[88px] bg-digits-button-color rounded-[352px]">
            0
          </button>
          <button className="w-[88px] h-[88px] bg-digits-button-color rounded-[352px] text-[40px]">
            ,
          </button>
          <button className="w-[88px] h-[88px] bg-func-button-color rounded-[352px] text-white text-[44px]">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;


 

interface TaskStatusCounts {
  done: number;
  inProgress: number;
  expired: number;
}

interface TaskStatusProps {
  tasksStats: TaskStatusCounts;
}

const Sidebar: React.FC<TaskStatusProps> = ({ tasksStats }) => {

  return (
    <div className=" sm:w-1/4 w-full  flex sm:flex-col flex-row justify-between  ">
      <div className="flex flex-col justify-between h-full w-full">
        <div className="flex flex-col items-start mb-2 gap-2 p-4 border rounded-lg  bg-[#ECEDEE] shadow-lg sm:h-1/3 w-full">
          <div
            className={`w-10 h-10 bg-[#F42D20]   flex items-center justify-center rounded-full`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="22" height="22" fill="url(#pattern0_1_280)" />
              <defs>
                <pattern
                  id="pattern0_1_280"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlinkHref="#image0_1_280" transform="scale(0.01)" />
                </pattern>
                <image
                  id="image0_1_280"
                  width="100"
                  height="100"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>

          <h3 className="text-[#797979] font-medium text-xl">Expired Tasks</h3>
          <h3 className="text-[#797979] font-medium text-2xl">{tasksStats.expired}</h3>
        </div>
        <div className="flex flex-col items-start mb-2 gap-2 p-4 border rounded-lg  bg-[#ECEDEE] shadow-lg sm:h-1/3 ">
          <div
            className={`w-10 h-10 bg-[#E89271]  flex items-center justify-center rounded-full`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.17571 6.24913C2.98734 5.28419 4.37885 4.8125 6.41663 4.8125H15.5833C17.6211 4.8125 19.0126 5.28419 19.8242 6.24913C20.628 7.20469 20.7044 8.46006 20.5756 9.63061L19.8878 16.9674C19.7868 17.9098 19.5502 18.943 18.7088 19.7117C17.8736 20.4748 16.5796 20.8542 14.6666 20.8542H7.3333C5.42035 20.8542 4.12637 20.4748 3.29116 19.7117C2.44972 18.943 2.21319 17.9098 2.11221 16.9674L2.11124 16.9583L1.42433 9.63063C1.29551 8.46008 1.37196 7.2047 2.17571 6.24913ZM3.22797 7.13421C2.79556 7.6483 2.67384 8.42076 2.79163 9.48522L2.7929 9.49665L3.47987 16.8254C3.57158 17.6773 3.76143 18.279 4.21857 18.6966C4.68273 19.1206 5.56125 19.4792 7.3333 19.4792H14.6666C16.4387 19.4792 17.3172 19.1206 17.7814 18.6966C18.2385 18.279 18.4284 17.6773 18.5201 16.8254L19.2082 9.48521C19.326 8.42075 19.2044 7.6483 18.772 7.13421C18.3461 6.62789 17.4597 6.1875 15.5833 6.1875H6.41663C4.54025 6.1875 3.65385 6.62789 3.22797 7.13421Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.0608 3.71285C8.02186 4.01112 8.02075 4.35008 8.02075 4.76667V5.5C8.02075 5.8797 7.71295 6.1875 7.33325 6.1875C6.95356 6.1875 6.64575 5.8797 6.64575 5.5L6.64575 4.74284C6.64573 4.35461 6.64571 3.93056 6.69737 3.53484C6.75091 3.12481 6.86562 2.68951 7.13436 2.30068C7.69969 1.4827 8.7353 1.14584 10.2666 1.14584H11.7333C13.2645 1.14584 14.3001 1.4827 14.8655 2.30068C15.1342 2.68951 15.2489 3.12481 15.3025 3.53484C15.3541 3.93057 15.3541 4.35462 15.3541 4.74285L15.3541 5.5C15.3541 5.8797 15.0463 6.1875 14.6666 6.1875C14.2869 6.1875 13.9791 5.8797 13.9791 5.5V4.76667C13.9791 4.35008 13.978 4.01112 13.939 3.71285C13.9009 3.42076 13.8323 3.22414 13.7344 3.08245C13.5664 2.83939 13.1353 2.52084 11.7333 2.52084H10.2666C8.86454 2.52084 8.43348 2.83939 8.26549 3.08245C8.16756 3.22414 8.09894 3.42076 8.0608 3.71285Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.85486 11.6882C9.85415 11.7537 9.85414 11.8283 9.85414 11.9167V12.8608C9.85414 13.1189 9.85639 13.3087 9.8788 13.4698C9.90035 13.6246 9.93457 13.7 9.96358 13.7409C9.99593 13.7865 10.1572 13.9792 11 13.9792C11.8466 13.9792 12.0059 13.7847 12.0376 13.7395C12.0667 13.6978 12.1009 13.6213 12.1221 13.4646C12.1441 13.3017 12.1458 13.111 12.1458 12.8517V11.9167C12.1458 11.8283 12.1458 11.7537 12.1451 11.6882C12.0796 11.6875 12.005 11.6875 11.9166 11.6875H10.0833C9.99489 11.6875 9.9203 11.6875 9.85486 11.6882ZM10.0532 10.3125C10.0632 10.3125 10.0733 10.3125 10.0833 10.3125H11.9166C11.9267 10.3125 11.9367 10.3125 11.9467 10.3125C12.1495 10.3125 12.3549 10.3124 12.5225 10.331C12.6934 10.35 12.9772 10.4008 13.2049 10.6284C13.4325 10.8561 13.4833 11.1399 13.5023 11.3108C13.5209 11.4784 13.5209 11.6838 13.5208 11.8866C13.5208 11.8966 13.5208 11.9066 13.5208 11.9167V12.862C13.5208 13.1 13.5208 13.3817 13.4847 13.649C13.4471 13.9263 13.365 14.241 13.1638 14.5282C12.7349 15.1407 11.9775 15.3542 11 15.3542C10.0278 15.3542 9.27234 15.1435 8.84178 14.536C8.63933 14.2504 8.55553 13.9367 8.51692 13.6593C8.47918 13.3881 8.47914 13.1024 8.47914 12.8608V11.9167C8.47914 11.9066 8.47913 11.8966 8.47913 11.8866C8.47908 11.6838 8.47904 11.4784 8.49766 11.3108C8.51665 11.1399 8.56741 10.8561 8.79508 10.6284C9.02275 10.4008 9.30657 10.35 9.47743 10.331C9.64506 10.3124 9.85048 10.3125 10.0532 10.3125Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.4018 9.67897C20.6252 9.98604 20.5573 10.416 20.2502 10.6393C18.0354 12.2501 15.505 13.2082 12.9192 13.5338C12.5425 13.5812 12.1987 13.3143 12.1512 12.9376C12.1038 12.5608 12.3707 12.217 12.7474 12.1696C15.1117 11.8718 17.4213 10.9966 19.4415 9.52733C19.7485 9.30401 20.1785 9.3719 20.4018 9.67897Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.83434 9.94253C2.0488 9.6292 2.47666 9.54904 2.78999 9.7635C4.75981 11.1117 6.98111 11.9243 9.24318 12.1776C9.62052 12.2199 9.89216 12.56 9.84991 12.9373C9.80766 13.3147 9.46751 13.5863 9.09018 13.5441C6.60391 13.2657 4.16855 12.3733 2.01337 10.8982C1.70003 10.6837 1.61988 10.2559 1.83434 9.94253Z"
                fill="white"
              />
            </svg>
          </div>

          <h3 className="text-[#797979] font-medium text-xl">
            All Active Tasks
          </h3>
          <h3 className="text-[#797979] font-medium text-2xl">{tasksStats.inProgress}</h3>
        </div>
        <div className="flex flex-col items-start mb-2 gap-2 p-4 border rounded-lg  bg-[#ECEDEE] shadow-lg sm:h-1/3 ">
          <div
            className={`w-10 h-10  bg-[#70A1E5] flex items-center justify-center rounded-full`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 2.52083C6.31974 2.52083 2.52087 6.31969 2.52087 11C2.52087 15.6803 6.31974 19.4792 11 19.4792C15.6803 19.4792 19.4792 15.6803 19.4792 11C19.4792 6.31969 15.6803 2.52083 11 2.52083ZM1.14587 11C1.14587 5.5603 5.56035 1.14583 11 1.14583C16.4397 1.14583 20.8542 5.5603 20.8542 11C20.8542 16.4397 16.4397 20.8542 11 20.8542C5.56035 20.8542 1.14587 16.4397 1.14587 11Z"
                fill="#F1F1F1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.6609 6.19666C11.0406 6.19666 11.3484 6.50446 11.3484 6.88416V10.6425C11.3484 10.7832 11.4021 10.9872 11.5216 11.1968C11.6412 11.4064 11.7893 11.5564 11.9097 11.6277L11.9115 11.6288L11.9115 11.6288L14.7532 13.3246C15.0793 13.5192 15.1858 13.9413 14.9913 14.2673C14.7967 14.5934 14.3746 14.6999 14.0486 14.5054L11.2087 12.8106C11.2084 12.8104 11.2081 12.8102 11.2078 12.81C10.8336 12.588 10.5329 12.2387 10.3272 11.878C10.1213 11.5169 9.97339 11.0792 9.97339 10.6425V6.88416C9.97339 6.50446 10.2812 6.19666 10.6609 6.19666Z"
                fill="#F1F1F1"
              />
            </svg>
          </div>

          <h3 className="text-[#797979] font-medium text-xl">
            Completed Tasks
          </h3>
          <h3 className="text-[#797979] font-medium text-2xl">{tasksStats.done}</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

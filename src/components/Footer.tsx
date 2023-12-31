const Footer = () => {
  return (
    <div className="bg-white fixed group bottom-6 right-6 w-12 h-12 rounded-full hover:w-auto hover:h-auto hover:rounded-xl shadow-lg">
      <div className="flex group-hover:hidden border border-white rounded-full">
        <img
          src="./me.png"
          className="rounded-full object-cover object-center"
        />
      </div>
      <div className="hidden group-hover:block">
        <div className="flex flex-col px-4 pt-6 pb-4 gap-2">
          <a
            className="px-6 py-3 text-white bg-[#3e54a3] hover:bg-[#29376b] rounded-full text-center uppercase italic font-bold space tracking-widest text-sm"
            href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Challenge
          </a>

          <a
            className="px-6 py-3 text-black bg-[#d9d9d9] hover:bg-[#B3B3B3] rounded-full text-center uppercase italic font-bold space tracking-widest text-sm"
            href="https://github.com/PrVille/frontend-mentor-newsletter-sign-up-with-success-message"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>

          <a
            className="px-6 py-3 text-white bg-[#ed2c49] hover:bg-[#bc102a] rounded-full text-center uppercase italic font-bold space tracking-widest text-sm"
            href="https://frontend-mentor-solutions-mu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Solutions
          </a>
        </div>

        <div className="border-t px-4 pt-4 pb-6 flex justify-between font-bold text-sm">
          <a
            href="https://www.linkedin.com/in/ville-prami/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 hover:opacity-100"
          >
            <svg
              className="h-6 w-6"
              fill="#0A66C2"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a
            href="https://www.codewars.com/users/PrVille"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 hover:opacity-100"
          >
            <svg
              className="h-6 w-6"
              fill="#B1361E"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Codewars</title>
              <path d="M1.072.142A1.072 1.072 0 0 0 0 1.214v21.572a1.072 1.072 0 0 0 1.072 1.072h21.856A1.072 1.072 0 0 0 24 22.786V1.214A1.072 1.072 0 0 0 22.928.142zm9.736 1.818a.904.904 0 0 1 .828.539.784.784 0 0 1 1.274.493.639.639 0 0 1 .29-.06c.33.008.59.262.625.575a1.322 1.322 0 0 1 .624-.515 1.325 1.325 0 0 1 1.718.71 1.098 1.098 0 0 1 .306-.236 1.102 1.102 0 0 1 1.483.479 1.094 1.094 0 0 1 .12.47.994.994 0 0 1 1.322 1.214.904.904 0 0 1 .874 1.438.784.784 0 0 1 .176 1.356.639.639 0 0 1 .19.224.642.642 0 0 1-.011.613 1.326 1.326 0 0 1 .482.235 1.334 1.334 0 0 1 .258 1.842 1.098 1.098 0 0 1 .35.15 1.102 1.102 0 0 1 .337 1.516 1.094 1.094 0 0 1-.344.344.994.994 0 0 1 .228 1.318 1.006 1.006 0 0 1-.605.434.904.904 0 0 1-.803 1.482.814.814 0 0 0-.008-.04.784.784 0 0 1-1.075.873.639.639 0 0 1-.098.28.625.625 0 0 1-.43.288 1.33 1.33 0 0 1 .023.456 1.334 1.334 0 0 1-1.44 1.173 1.098 1.098 0 0 1 .054.377 1.102 1.102 0 0 1-1.128 1.072 1.098 1.098 0 0 1-.47-.12.994.994 0 0 1-1.696.583.904.904 0 0 1-1.685.075.784.784 0 0 1-1.274-.493.639.639 0 0 1-.29.064.64.64 0 0 1-.621-.58l.004-.007a1.326 1.326 0 0 1-.632.523 1.334 1.334 0 0 1-1.718-.706 1.098 1.098 0 0 1-.306.232 1.102 1.102 0 0 1-1.48-.478 1.094 1.094 0 0 1-.123-.471.994.994 0 0 1-1.318-1.21.904.904 0 0 1-.874-1.442.784.784 0 0 1-.176-1.356.639.639 0 0 1-.194-.224.642.642 0 0 1 .011-.61l.019.004a1.326 1.326 0 0 1-.497-.239 1.334 1.334 0 0 1-.262-1.845 1.098 1.098 0 0 1-.35-.146 1.102 1.102 0 0 1-.337-1.52 1.094 1.094 0 0 1 .347-.34A.994.994 0 0 1 2.88 9a.904.904 0 0 1 .803-1.48.784.784 0 0 1 1.083-.836.639.639 0 0 1 .098-.28.649.649 0 0 1 .433-.288 1.33 1.33 0 0 1-.026-.452A1.334 1.334 0 0 1 6.716 4.49a1.098 1.098 0 0 1-.06-.377 1.101 1.101 0 0 1 1.13-1.073 1.094 1.094 0 0 1 .47.115.994.994 0 0 1 1.696-.579.904.904 0 0 1 .857-.617zM3.683 7.519a.784.784 0 0 0 .008.041l-.004-.04a.904.904 0 0 0-.004-.001zM17.502 19.61a1.098 1.098 0 0 0-.002-.004h-.037a1.334 1.334 0 0 0 .039.004zM13.825 3.507a1.322 1.322 0 0 0-.008.012l.008-.011zm-2.369-.014l-.003.003a.9.9 0 0 1-.665.27.896.896 0 0 1-.583-.232.994.994 0 0 1-.986.732.99.99 0 0 1-.362-.075 1.098 1.098 0 0 1-1.061 1.046 1.326 1.326 0 0 1 .123.736 1.334 1.334 0 0 1-.725 1.035 1.1 1.1 0 0 1 .307.795 1.106 1.106 0 0 1-.232.65c.321.18.53.523.523.915a1.016 1.016 0 0 1-.07.337.915.915 0 0 1 .82.937.923.923 0 0 1-.01.138.74.74 0 0 1 .157-.01c.343.007.627.25.702.57a.661.661 0 0 1 .38-.111c.31.007.561.224.632.511a.418.418 0 0 1 .381-.015 1.352 1.352 0 0 1 .303-.63.418.418 0 0 1-.12-.143.422.422 0 0 1 .004-.392.665.665 0 0 1-.325-1.117.736.736 0 0 1-.359-.336.74.74 0 0 1 .385-1.023.747.747 0 0 0-.06.026.915.915 0 0 1-.201-.262.915.915 0 0 1 .623-1.315V6.53a1.02 1.02 0 0 1 .437-1.371 1.012 1.012 0 0 1 .553-.112 1.11 1.11 0 0 1 .598-1.054 1.12 1.12 0 0 1 .06-.026.642.642 0 0 1-.109-.21.784.784 0 0 1-.455.132.784.784 0 0 1-.662-.396zm4.573 1.512a1.326 1.326 0 0 1-.587.46 1.334 1.334 0 0 1-1.255-.142v-.011a1.11 1.11 0 0 1-.553.66 1.106 1.106 0 0 1-.683.113 1.02 1.02 0 0 1-.553.889 1.016 1.016 0 0 1-.329.105.918.918 0 0 1-.43 1.169.923.923 0 0 1-.127.056.74.74 0 0 1 .086.13.738.738 0 0 1-.168.89.661.661 0 0 1 .28.283.655.655 0 0 1-.149.796.418.418 0 0 1 .153.164c.019.034.03.068.038.101a1.356 1.356 0 0 1 .672-.015.422.422 0 0 1 .056-.142.422.422 0 0 1 .34-.194.665.665 0 0 1 .796-.848.736.736 0 0 1 .112-.478.733.733 0 0 1 1.016-.224.915.915 0 0 1 .127-.306.915.915 0 0 1 1.27-.28.915.915 0 0 1 .179.153 1.02 1.02 0 0 1 1.408-.314 1.012 1.012 0 0 1 .374.422c.355-.24.833-.261 1.214-.015a1.11 1.11 0 0 1 .209.172.642.642 0 0 1 .082-.108.784.784 0 0 1-.332-.337.784.784 0 0 1 .03-.77.9.9 0 0 1-.553-.455.896.896 0 0 1-.075-.624.994.994 0 0 1-1.117-.511.994.994 0 0 1-.104-.359 1.098 1.098 0 0 1-1.427-.43zM5.249 7.37a.784.784 0 0 1-.124.46.784.784 0 0 1-.68.362c.06.235.026.49-.112.71a.896.896 0 0 1-.5.377c.31.325.373.829.12 1.225a.99.99 0 0 1-.255.269 1.098 1.098 0 0 1 .351 1.45 1.326 1.326 0 0 1 .691.276 1.334 1.334 0 0 1 .512 1.154c.28-.064.579-.019.84.15a1.106 1.106 0 0 1 .438.53 1.02 1.02 0 0 1 1.05.03 1.016 1.016 0 0 1 .257.231.914.914 0 0 1 1.225-.224.919.919 0 0 1 .112.086.74.74 0 0 1 .071-.142.74.74 0 0 1 .852-.306.661.661 0 0 1 .1-.381.664.664 0 0 1 .763-.273.418.418 0 0 1 .246-.373 1.36 1.36 0 0 1-.358-.523v-.008a.418.418 0 0 1-.25.075.422.422 0 0 1-.344-.19.665.665 0 0 1-1.132-.243.736.736 0 0 1-.47.149.733.733 0 0 1-.718-.755.915.915 0 0 1-.329.049.915.915 0 0 1-.855-1.177h-.004a1.016 1.016 0 0 1-.993-1.042 1.012 1.012 0 0 1 .168-.534 1.11 1.11 0 0 1-.64-1.035 1.11 1.11 0 0 1 .068-.358.65.65 0 0 1-.1-.019zm11.127 2.133a.913.913 0 0 1-1.225.224.926.926 0 0 1-.112-.082.74.74 0 0 1-.067.142.74.74 0 0 1-.852.302.661.661 0 0 1-.105.385.662.662 0 0 1-.762.277.418.418 0 0 1-.063.212.426.426 0 0 1-.075.086 1.356 1.356 0 0 1 .314.564.418.418 0 0 1 .187-.04.422.422 0 0 1 .343.194.665.665 0 0 1 1.136.242.736.736 0 0 1 .467-.153c.41.008.728.348.72.755a.74.74 0 0 1 0 .008v-.005a.915.915 0 0 1 .326-.052.915.915 0 0 1 .896.941.919.919 0 0 1-.037.236c.564.015 1.008.482.993 1.046a1.012 1.012 0 0 1-.168.534 1.11 1.11 0 0 1 .647 1.035 1.11 1.11 0 0 1-.075.362l.004-.007.1.018a.784.784 0 0 1 .124-.46.784.784 0 0 1 .68-.362.9.9 0 0 1 .112-.71.896.896 0 0 1 .504-.373.994.994 0 0 1-.123-1.225.99.99 0 0 1 .257-.269 1.098 1.098 0 0 1-.35-1.453 1.326 1.326 0 0 1-.696-.273h-.003a1.334 1.334 0 0 1-.512-1.158 1.082 1.082 0 0 1-.837-.145 1.106 1.106 0 0 1-.44-.535 1.02 1.02 0 0 1-1.05-.026 1.016 1.016 0 0 1-.258-.235zm-.094 3.116l-.007.066a.74.74 0 0 0 .007-.066zm-2.864-.259a1.36 1.36 0 0 1-.363.598.418.418 0 0 1 .194.187.422.422 0 0 1-.007.396.665.665 0 0 1 .329 1.113.736.736 0 0 1 .358.336.739.739 0 0 1-.32.994.915.915 0 0 1 .197.261.91.91 0 0 1-.396 1.233.919.919 0 0 1-.224.082v.004a1.02 1.02 0 0 1-.44 1.374 1.012 1.012 0 0 1-.55.109 1.11 1.11 0 0 1-.661 1.083.642.642 0 0 1 .112.21.026.026 0 0 1-.004 0v.003a.784.784 0 0 1 .456-.134.784.784 0 0 1 .661.392.9.9 0 0 1 .665-.27.896.896 0 0 1 .587.236.994.994 0 0 1 .982-.736.99.99 0 0 1 .362.079v.022a1.1 1.1 0 0 1 1.061-1.072 1.326 1.326 0 0 1-.123-.736c.056-.46.34-.837.725-1.035l.003.004a1.102 1.102 0 0 1-.31-.795 1.106 1.106 0 0 1 .232-.654 1.02 1.02 0 0 1-.452-1.251.915.915 0 0 1-.822-.934.923.923 0 0 1 .011-.142.74.74 0 0 1-.157.015.74.74 0 0 1-.698-.572.661.661 0 0 1-.385.112.667.667 0 0 1-.627-.512.418.418 0 0 1-.217.053.418.418 0 0 1-.18-.045zm-.964.93a1.36 1.36 0 0 1-.336.042c-.112 0-.22-.012-.322-.038a.418.418 0 0 1-.06.295.422.422 0 0 1-.343.195.665.665 0 0 1-.792.844.736.736 0 0 1-.112.478.74.74 0 0 1-1.02.224.915.915 0 0 1-.127.306.915.915 0 0 1-1.266.28.919.919 0 0 1-.183-.153v.004a1.02 1.02 0 0 1-1.408.31 1.012 1.012 0 0 1-.374-.418c-.355.239-.83.261-1.214.015a1.113 1.113 0 0 1-.21-.172.65.65 0 0 1-.081.105.784.784 0 0 1 .336.336.784.784 0 0 1-.034.77.89.89 0 0 1 .553.455.896.896 0 0 1 .075.624.994.994 0 0 1 1.12.515.99.99 0 0 1 .101.355 1.098 1.098 0 0 1 1.431.43 1.326 1.326 0 0 1 .587-.46c.43-.172.896-.104 1.255.142a1.106 1.106 0 0 1 .549-.65 1.106 1.106 0 0 1 .683-.108 1.02 1.02 0 0 1 .553-.893 1.02 1.02 0 0 1 .333-.104.916.916 0 0 1 .425-1.17.919.919 0 0 1 .131-.052.736.736 0 0 1-.09-.134.738.738 0 0 1 .169-.886.661.661 0 0 1-.28-.284.67.67 0 0 1 .149-.799.418.418 0 0 1-.15-.164.418.418 0 0 1-.048-.24z" />
            </svg>
          </a>

          <a
            href="https://www.frontendmentor.io/profile/PrVille"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 hover:opacity-100"
          >
            <svg
              className="h-6 w-6"
              fill="#3F54A3"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Frontend Mentor</title>
              <path d="M12.1706 1.2719a.732.732 0 00-.7186.732v13.914a.732.732 0 00.732.732.732.732 0 00.7318-.732V2.004a.732.732 0 00-.7452-.732zm11.0741 4.1685a.7339.7339 0 00-.2764.063L16.686 8.307a.7329.7329 0 000 1.3361l6.2823 2.8134a.7378.7378 0 00.2993.0648.732.732 0 00.2973-1.401l-4.786-2.1443 4.786-2.1366a.7339.7339 0 00.3698-.9664.7339.7339 0 00-.69-.4327zm-22.499 5.032a.7316.7316 0 00-.7223.9149c1.736 6.677 7.7748 11.341 14.6822 11.341a.732.732 0 000-1.464 13.7055 13.7055 0 01-13.266-10.2449.7316.7316 0 00-.6939-.547z" />
            </svg>
          </a>

          <a
            href="https://github.com/PrVille"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 hover:opacity-100"
          >
            <svg
              className="h-6 w-6"
              fill="#181717"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          <a
            href="https://villeprami.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 hover:opacity-100"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <title>Portfolio</title>
              <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer

const VeFlagIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 180 120"
      role="img"
    >
      <title>Flag of Venezuela</title>
      <desc>The flag of Venezuela is composed of three equal horizontal bands of yellow, blue and red. At the center of the blue band are eight five-pointed white stars arranged in a horizontal arc.</desc>
      <defs>
        <g id="d" transform="translate(0 -36)">
          <g id="c">
            <g id="b">
              <path
                id="a"
                fill="#fff"
                d="M0-5v5h3z"
                transform="rotate(18 0 -5)"
              />
              <use xlinkHref="#a" transform="scale(-1 1)" />
            </g>
            <use xlinkHref="#b" transform="rotate(72)" />
          </g>
          <use xlinkHref="#b" transform="rotate(-72)" />
          <use xlinkHref="#c" transform="rotate(144)" />
        </g>
      </defs>
      <path fill="#cf142b" d="M0 0h180v120H0Z" />
      <path fill="#00247d" d="M0 80h180V0H0Z" />
      <path fill="#fc0" d="M0 0h180v40H0Z" />
      <g strokeWidth=".96302092" transform="translate(0 .242)">
        <use
          xlinkHref="#d"
          width="100%"
          height="100%"
          transform="rotate(-70 105.507 -23.474) scale(1.0384)"
        />
        <use
          xlinkHref="#d"
          width="100%"
          height="100%"
          transform="rotate(-45.934 147.37 -62.402) scale(1.0384)"
        />
        <use
          xlinkHref="#d"
          width="100%"
          height="100%"
          transform="rotate(-30 205.59 -127.04) scale(1.0384)"
        />
        <use
          xlinkHref="#d"
          width="100%"
          height="100%"
          transform="rotate(-10 537.7 -472.587) scale(1.0384)"
        />
      </g>
      <g strokeWidth=".96302092" transform="matrix(-1 0 0 1 180.051 .242)">
        <use
          xlinkHref="#d"
          width="100%"
          height="100%"
          transform="rotate(-70 105.507 -23.474) scale(1.0384)"
        />
        <use
          xlinkHref="#d"
          width="100%"
          height="100%"
          transform="rotate(-45.934 147.37 -62.402) scale(1.0384)"
        />
        <use
          xlinkHref="#d"
          width="100%"
          height="100%"
          transform="rotate(-30 205.59 -127.04) scale(1.0384)"
        />
        <use
          xlinkHref="#d"
          width="100%"
          height="100%"
          transform="rotate(-10 537.7 -472.587) scale(1.0384)"
        />
      </g>
    </svg>
  );
};

export default VeFlagIcon;

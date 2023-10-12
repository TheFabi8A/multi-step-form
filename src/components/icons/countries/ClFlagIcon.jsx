const ClFlagIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      viewBox="0 0 6 4"
      role="img"
    >
      <title>Flag of Chile</title>
      <desc>
        The flag of Chile is composed of two equal horizontal bands of white and
        red, with a blue square of the same height as the white band
        superimposed in the canton. A white five-pointed star is centered in the
        blue square.
      </desc>
      <path d="M0 0h6v4H0z" />
      <path fill="#0039a6" d="M0 2V0h2v3z" />
      <path fill="#d72b1f" d="M0 2h6v2H0z" />
      <path d="m1 .5.294.904-.77-.558h.952l-.77.559z" />
    </svg>
  );
};

export default ClFlagIcon;

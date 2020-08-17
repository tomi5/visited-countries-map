interface IfillWithTheColor {
  country: string;
  color: string;
}

export const fillWithTheColor = ({
  country,
  color,
}: IfillWithTheColor): void => {
  const pathSvg = document.querySelectorAll(".countryBox");
  country &&
    [...pathSvg].some(
      (el: any) =>
        el.textContent === country && (el.style.backgroundColor = color)
    );
};

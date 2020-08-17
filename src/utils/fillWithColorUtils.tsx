interface IfillWithTheColor {
  country: string;
  color: string;
}

export const fillWithTheColor = ({
  country,
  color,
}: IfillWithTheColor): void => {
  const pathSVG: NodeListOf<SVGPathElement> = document.querySelectorAll("path");

  country &&
    [...pathSVG].some(
      (el: SVGElement) => el.textContent === country && (el.style.fill = color)
    );
};

interface IfillWithColor {
  country: string;
  color: string;
}

export const fillWithColor = ({ country, color }: IfillWithColor): void => {
  const pathSVG: NodeListOf<SVGPathElement> = document.querySelectorAll("path");

  country &&
    [...pathSVG].some(
      (el: SVGElement) => el.textContent === country && (el.style.fill = color)
    );
};

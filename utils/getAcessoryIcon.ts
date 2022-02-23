import SpeedSvg from "../assets/images/speed.svg";
import AccelarationSvg from "../assets/images/acceleration.svg";
import ForceSvg from "../assets/images/force.svg";
import GasolineSvg from "../assets/images/gasoline.svg";
import EnergySvg from "../assets/images/energy.svg";
import HybridSvg from "../assets/images/hybrid.svg";
import ExchangeSvg from "../assets/images/exchange.svg";
import PeopleSvg from "../assets/images/people.svg";
import CarSvg from "../assets/images/car.svg";

export function getAcessoryIcon(type: string) {
  switch (type) {
    case "speed":
      return SpeedSvg;
    case "acceleration":
      return AccelarationSvg;
    case "turning_diameter":
      return ForceSvg;
    case "gasoline_motor":
      return GasolineSvg;
    case "eletric_motor":
      return EnergySvg;
    case "hybrid_motor":
      return HybridSvg;
    case "exchange":
      return ExchangeSvg;
    case "seast":
      return PeopleSvg;

    default:
      return CarSvg;
  }
}

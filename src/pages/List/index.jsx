import { Grid } from "antd";
import DesktopMovieList from "./DesktopMovieList";
import MobileMovieList from "./MobileMovieList";

const MovieList = () => {
  const screens = Grid.useBreakpoint();

  return screens.md ? <DesktopMovieList /> : <MobileMovieList />;
};

export default MovieList;

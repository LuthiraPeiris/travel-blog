import SearchBox from "./SearchBox";
import AboutCard from "./AboutCard";
import LatestPosts from "./LatestPosts";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-[300px] lg:flex-shrink-0">
      <SearchBox />

      <AboutCard />

      <LatestPosts />
    </aside>
  );
}
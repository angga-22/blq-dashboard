import { ShortcutComp } from "./_components/Shortcut";
import { SwiperBanner } from "./_components/SwiperBanner";
import SwiperCollection from "./_components/SwiperCollection";

const Dashboard = async () => {
  return (
    <section data-testid="dashboard">
      <SwiperBanner />
      <ShortcutComp />
      <SwiperCollection />
    </section>
  );
};

export default Dashboard;

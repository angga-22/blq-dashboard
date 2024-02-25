import { InputSearch, PrimaryButton, ImageComp } from "@/app/_components/";
import Typography from "@/app/_components/Typography";
import BurgerMenu from "@/app/_assets/icons/burger-menu.svg";

type Props = {};

const Navbar = (_props: Props) => {
  const { BASE_API_ASSETS } = process.env;
  return (
    <nav className="sticky z-[99] top-0  bg-white px-0 py-4  text-white   ">
      <div className="mx-auto flex items-center justify-between  w-[420px] lg:w-[920px]">
        <div className="flex items-center">
          <div className="mr-4 flex w-[7.5rem] items-center">
            <ImageComp src={`${BASE_API_ASSETS}/logo/logo-new.svg`} alt="img" className="w-full" />
          </div>
          <div data-testid="burger-btn" className="flex hidden items-center lg:flex">
            <ImageComp src={BurgerMenu} alt="img" className="w-[1.3rem] pr-1" />
            <Typography variant="h6" restClass="text-base-green">
              카테고리
            </Typography>
          </div>
        </div>
        <div className="hidden w-[35%] lg:flex">
          <InputSearch />
        </div>
        <div className="hidden  items-center lg:flex">
          <ImageComp src={`${BASE_API_ASSETS}/common/home-event.svg`} alt="img" className="w-7 " />
          <PrimaryButton fill="filled" className="rounded-md pl-2">
            <Typography variant="h6" restClass="border-l-2 border-gray-300 pl-2 text-13">
              로그인 / 회원 가입
            </Typography>
          </PrimaryButton>
        </div>
        <div className="flex items-center lg:hidden">
          <ImageComp
            src={`${BASE_API_ASSETS}/common/bell_default.svg`}
            alt="bell"
            className="mx-2 w-6"
          />
          <ImageComp
            src={`${BASE_API_ASSETS}/common/search_new.svg`}
            alt="search"
            className="mx-2 w-4"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

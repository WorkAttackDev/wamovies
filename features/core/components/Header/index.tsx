import {
  HomeIcon,
  SearchIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  CollectionIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import HeaderItem from "./HeaderItem";

const links = [
  { title: "Início", Icon: HomeIcon, href: "/" },
  {
    title: "Tendência",
    Icon: LightningBoltIcon,
    href: "/?key=fetchTrending&page=1",
  },
  { title: "Verificado", Icon: BadgeCheckIcon },
  { title: "Colecção", Icon: CollectionIcon },
  { title: "Procurar", Icon: SearchIcon },
  { title: "Usuário", Icon: UserIcon },
];

const Header: React.FC = () => {
  return (
    <div>
      <header className='max-w-screen-xl mx-auto flex flex-col justify-between items-center p-5 sm:flex-row-reverse sm:p-8'>
        <Link href='/'>
          <h1 className='logo text-2xl text-white mb-4 sm:text-3xl'>
            WAMovies
          </h1>
        </Link>
        <div className='flex flex-wrap flex-grow justify-evenly sm:justify-start'>
          {links.map(({ Icon, title, href }) =>
            href ? (
              <Link key={title} href={href}>
                <a>
                  <HeaderItem title={title} Icon={Icon} />
                </a>
              </Link>
            ) : (
              <HeaderItem key={title} title={title} Icon={Icon} />
            )
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

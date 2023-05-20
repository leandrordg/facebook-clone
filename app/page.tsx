import Image from 'next/image';
import Link from 'next/link';
import {
  AiFillHeart,
  AiFillHome,
  AiFillLike,
  AiOutlineLike,
  AiOutlinePlus,
  AiOutlineShop,
} from 'react-icons/ai';
import { BiCaretDown, BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsCameraVideoFill, BsMessenger, BsSearch } from 'react-icons/bs';
import { CgMenuGridO } from 'react-icons/cg';
import { FaChevronDown, FaUserFriends } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineChatBubbleLeft } from 'react-icons/hi2';
import { IoLogoGameControllerA, IoMdClose, IoMdPhotos } from 'react-icons/io';
import { IoHappyOutline, IoNotifications } from 'react-icons/io5';
import { MdOndemandVideo } from 'react-icons/md';
import { RiVideoAddFill } from 'react-icons/ri';
import { SiFeedly } from 'react-icons/si';
import { SlMenu } from 'react-icons/sl';
import { TbShare3 } from 'react-icons/tb';
import { TfiAnnouncement, TfiReload } from 'react-icons/tfi';
import { TiGroup } from 'react-icons/ti';

const Home = () => {
  return (
    <div className="flex flex-col h-screen relative">
      <header className="bg-neutral-800 px-4 py-1 md:py-0 flex items-center border-b border-neutral-700 sticky top-0 z-10">
        <div className="flex items-center gap-2 flex-1">
          <Link href="/">
            <svg
              viewBox="0 0 36 36"
              className="x1lliihq x1k90msu x2h7rmj x1qfuztq"
              fill="url(#:0R1kjakqbkq75b5klba:)"
              height="40"
              width="40"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  x2="50%"
                  y1="97.0782153%"
                  y2="0%"
                  id=":0R1kjakqbkq75b5klba:"
                >
                  <stop offset="0%" stop-color="#0062E0"></stop>
                  <stop offset="100%" stop-color="#19AFFF"></stop>
                </linearGradient>
              </defs>
              <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
              <path
                fill="white"
                d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
              ></path>
            </svg>
          </Link>

          <div className="flex items-center bg-neutral-700 px-3 py-3 xl:py-0 xl:px-0 xl:pl-3 rounded-full overflow-hidden text-neutral-400">
            <BsSearch size={14} className="w-4 h-4" />
            <input
              type="text"
              placeholder="Pesquisar no Facebook"
              className="p-2.5 outline-none bg-transparent text-sm placeholder:text-neutral-400 hidden xl:block"
            />
          </div>

          <Link
            href="#"
            className="p-2 ml-2 rounded-md hover:bg-neutral-700 text-neutral-300 transition md:hidden"
          >
            <SlMenu size={26} />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-2 flex-[1.5] max-w-2xl">
          <Link
            href="#"
            className="flex-1 flex items-center justify-center py-2 border-b-[3px] border-blue-600 text-blue-600 rounded-t-md transition"
          >
            <AiFillHome size={28} className="mb-1" />
          </Link>
          <Link
            href="#"
            className="flex-1 flex items-center justify-center py-2 hover:bg-neutral-700 rounded-md transition text-neutral-400"
          >
            <MdOndemandVideo size={28} className="pb-1" />
          </Link>
          <Link
            href="#"
            className="flex-1 flex items-center justify-center py-2 hover:bg-neutral-700 rounded-md transition text-neutral-400"
          >
            <AiOutlineShop size={28} className="pb-1" />
          </Link>
          <Link
            href="#"
            className="flex-1 flex items-center justify-center py-2 hover:bg-neutral-700 rounded-md transition text-neutral-400"
          >
            <TiGroup size={28} className="pb-1" />
          </Link>
          <Link
            href="#"
            className="flex-1 hidden lg:flex items-center justify-center py-2 hover:bg-neutral-700 rounded-md transition text-neutral-400"
          >
            <IoLogoGameControllerA size={28} className="pb-1" />
          </Link>
          <Link
            href="#"
            className="flex-1 flex lg:hidden items-center justify-center py-2 hover:bg-neutral-700 rounded-md transition text-neutral-400"
          >
            <SlMenu size={26} />
          </Link>
        </nav>

        <div className="flex items-center justify-end gap-2 flex-1">
          <Link
            href="#"
            className="p-2 rounded-full bg-neutral-700 hover:bg-neutral-600 transition lg:hidden"
          >
            <AiOutlinePlus size={24} />
          </Link>

          <Link
            href="#"
            className="p-2 rounded-full bg-neutral-700 hover:bg-neutral-600 transition hidden lg:block"
          >
            <CgMenuGridO size={24} />
          </Link>

          <Link
            href="#"
            className="p-2 rounded-full bg-neutral-700 hover:bg-neutral-600 transition"
          >
            <BsMessenger size={24} />
          </Link>

          <Link
            href="#"
            className="p-2 rounded-full bg-neutral-700 hover:bg-neutral-600 transition relative"
          >
            <IoNotifications size={24} />
            <div className="bg-red-600 text-white absolute -top-1 -right-1 h-[18px] w-[18px] rounded-full flex items-center justify-center">
              <span className="text-xs">12</span>
            </div>
          </Link>

          <Link href="#" className="relative">
            <Image
              src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
              alt="Perfil"
              className="rounded-full object-cover min-w-[40px] min-h-[40px]"
              width={40}
              height={40}
            />
            <div className="bg-red-600 text-white absolute top-0 border-2 border-neutral-800 right-0 h-3 w-3 rounded-full flex items-center justify-center" />
          </Link>
        </div>
      </header>

      <div className="flex items-start">
        <aside className="p-3 hidden lg:flex flex-col flex-1 sticky top-[52px]">
          <div className="flex flex-col">
            <Link
              href="#"
              className="flex items-center gap-4 w-full hover:bg-neutral-700/50 p-2 rounded-md transition"
            >
              <Image
                src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                alt="Perfil"
                className="rounded-full object-cover min-w-[36px] min-h-[36px]"
                width={36}
                height={36}
              />
              <span className="text-sm font-semibold">Leandro Rodrigues</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 w-full hover:bg-neutral-700/50 p-2 rounded-md transition"
            >
              <FaUserFriends size={34} className="text-blue-400" />
              <span className="text-sm font-semibold">Amigos</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 w-full hover:bg-neutral-700/50 p-2 rounded-md transition"
            >
              <SiFeedly size={34} className="text-blue-400" />
              <span className="text-sm font-semibold">Mais Recentes</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 w-full hover:bg-neutral-700/50 p-2 rounded-md transition"
            >
              <div className="p-1 bg-blue-400 rounded-full">
                <TiGroup className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold">Grupos</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 w-full hover:bg-neutral-700/50 p-2 rounded-md transition"
            >
              <AiOutlineShop size={34} className="text-blue-400" />
              <span className="text-sm font-semibold">Marketplace</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 w-full hover:bg-neutral-700/50 p-2 rounded-md transition"
            >
              <MdOndemandVideo size={34} className="text-blue-400" />
              <span className="text-sm font-semibold">Watch</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 w-full hover:bg-neutral-700/50 p-2 rounded-md transition"
            >
              <div className="p-2 bg-neutral-700 rounded-full">
                <FaChevronDown className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold">Ver mais</span>
            </Link>
          </div>

          <div className="mt-3 mx-2 bg-neutral-700 h-[1px]" />

          <div className="flex flex-col">
            <div className="p-2">
              <span className="text-neutral-400 font-semibold">
                Seus atalhos
              </span>
            </div>

            <Link
              href="#"
              className="flex items-center gap-4 w-full hover:bg-neutral-700/50 p-2 rounded-md transition"
            >
              <div className="p-1 bg-blue-400 rounded-full">
                <TiGroup className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold">Grupos</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 w-full hover:bg-neutral-700/50 p-2 rounded-md transition"
            >
              <AiOutlineShop size={34} className="text-blue-400" />
              <span className="text-sm font-semibold">Marketplace</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 w-full hover:bg-neutral-700/50 p-2 rounded-md transition"
            >
              <MdOndemandVideo size={34} className="text-blue-400" />
              <span className="text-sm font-semibold">Watch</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 w-full hover:bg-neutral-700/50 p-2 rounded-md transition"
            >
              <div className="p-2 bg-neutral-700 rounded-full">
                <FaChevronDown className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold">Ver mais</span>
            </Link>
          </div>
        </aside>

        <main className="flex items-center justify-center flex-[3] py-4">
          <div className="max-w-2xl px-6 lg:px-0">
            <section className="grid gap-2 grid-cols-4 sm:grid-cols-5 relative">
              <div className="w-full h-48 cursor-pointer bg-neutral-700 relative rounded-lg shadow overflow-hidden hover:opacity-80 transition group">
                <Image
                  src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                  alt="Perfil"
                  className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform"
                  quality={100}
                  width={128}
                  height={128}
                />
                <div className="flex flex-col gap-2 justify-center items-center absolute bottom-0 w-full bg-neutral-800 py-2">
                  <div className="p-1 bg-blue-500 text-white rounded-full w-fit -mt-6 border-2 border-neutral-800">
                    <AiOutlinePlus className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-neutral-200">
                    Criar story
                  </span>
                </div>
              </div>

              <div className="w-full h-48 cursor-pointer relative rounded-lg shadow overflow-hidden hover:opacity-80 transition group">
                <Image
                  src="https://thumbs.dreamstime.com/b/paisagem-vertical-24983477.jpg"
                  alt="Perfil"
                  className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform"
                  quality={100}
                  width={128}
                  height={128}
                />
                <div className="absolute flex flex-col justify-between bottom-0 h-full w-full p-2 bg-black/30">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover rounded-full border-[3px] border-blue-500 w-10 h-10"
                    quality={100}
                    width={64}
                    height={64}
                  />
                  <span className="text-xs font-semibold text-white">
                    Leandro Rodrigues
                  </span>
                </div>
              </div>

              <div className="w-full h-48 cursor-pointer relative rounded-lg shadow overflow-hidden hover:opacity-80 transition group">
                <Image
                  src="https://thumbs.dreamstime.com/b/paisagem-vertical-24983477.jpg"
                  alt="Perfil"
                  className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform"
                  quality={100}
                  width={128}
                  height={128}
                />
                <div className="absolute flex flex-col justify-between bottom-0 h-full w-full p-2 bg-black/30">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover rounded-full border-[3px] border-blue-500 w-10 h-10"
                    quality={100}
                    width={64}
                    height={64}
                  />
                  <span className="text-xs font-semibold text-white">
                    Leandro Rodrigues
                  </span>
                </div>
              </div>

              <div className="w-full h-48 cursor-pointer relative rounded-lg shadow overflow-hidden hover:opacity-80 transition group">
                <Image
                  src="https://thumbs.dreamstime.com/b/paisagem-vertical-24983477.jpg"
                  alt="Perfil"
                  className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform"
                  quality={100}
                  width={128}
                  height={128}
                />
                <div className="absolute flex flex-col justify-between bottom-0 h-full w-full p-2 bg-black/30">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover rounded-full border-[3px] border-blue-500 w-10 h-10"
                    quality={100}
                    width={64}
                    height={64}
                  />
                  <span className="text-xs font-semibold text-white">
                    Leandro Rodrigues
                  </span>
                </div>
              </div>

              <div className="w-full hidden sm:block h-48 cursor-pointer bg-neutral-700 relative rounded-lg shadow overflow-hidden hover:opacity-80 transition group">
                <Image
                  src="https://thumbs.dreamstime.com/b/paisagem-vertical-24983477.jpg"
                  alt="Perfil"
                  className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform"
                  quality={100}
                  width={128}
                  height={128}
                />
                <div className="absolute flex flex-col justify-between bottom-0 h-full w-full p-2 bg-black/30">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover rounded-full border-[3px] border-blue-500 w-10 h-10"
                    quality={100}
                    width={64}
                    height={64}
                  />
                  <span className="text-xs font-semibold text-white">
                    Leandro Rodrigues
                  </span>
                </div>
              </div>

              <div className="absolute -right-5 top-[40%] p-2 rounded-full bg-neutral-700 hover:bg-neutral-600 transition shadow w-fit text-neutral-400 cursor-pointer">
                <FiArrowRight size={20} />
              </div>
            </section>

            <section className="mt-6 bg-neutral-800 px-3 py-2 rounded-lg">
              <div className="flex items-center gap-2">
                <Link href="#">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover min-w-[40px] min-h-[40px] rounded-full"
                    quality={100}
                    width={40}
                    height={40}
                  />
                </Link>
                <input
                  type="text"
                  placeholder="No que você está pensando, Leandro?"
                  className="py-2 px-3 rounded-full w-full bg-neutral-600/50 hover:bg-neutral-600 placeholder:text-neutral-400 cursor-pointer transition"
                />
              </div>

              <div className="my-3 h-[1px] bg-neutral-700 w-full" />

              <div className="flex items-center">
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 w-full rounded-md hover:bg-neutral-600/50 py-2 transition"
                >
                  <BsCameraVideoFill size={26} className="text-red-500" />
                  <span className="text-sm font-semibold text-neutral-400">
                    Vídeo ao vivo
                  </span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 w-full rounded-md hover:bg-neutral-600/50 py-2 transition"
                >
                  <IoMdPhotos size={26} className="text-green-500" />
                  <span className="text-sm font-semibold text-neutral-400">
                    Foto/vídeo
                  </span>
                </Link>
                <Link
                  href="#"
                  className="hidden sm:flex items-center justify-center gap-2 w-full rounded-md hover:bg-neutral-600/50 py-2 transition"
                >
                  <IoHappyOutline size={26} className="text-yellow-500" />
                  <span className="text-sm font-semibold text-neutral-400">
                    Sentimento/atividade
                  </span>
                </Link>
              </div>
            </section>

            <section className="mt-6 bg-neutral-800 px-3 py-2 rounded-lg">
              <Link
                href="#"
                className="py-2 px-3 rounded-full ring-2 flex items-center gap-2 w-fit hover:bg-neutral-600/50 transition"
              >
                <RiVideoAddFill size={26} className="text-purple-500" />
                <span className="text-blue-400 font-semibold text-sm">
                  Criar sala
                </span>
              </Link>
            </section>

            <section className="mt-6 bg-neutral-800 rounded-lg">
              <div className="flex items-center px-3 pt-2">
                <Link href="#">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover min-w-[40px] min-h-[40px] rounded-full cursor-pointer"
                    quality={100}
                    width={40}
                    height={40}
                  />
                </Link>

                <div className="flex flex-col px-3">
                  <Link href="#" className="text-sm font-bold">
                    Leandro Rodrigues
                  </Link>
                  <span className="text-xs text-neutral-400">10 min · 🌎</span>
                </div>

                <div className="flex items-center ml-auto">
                  <Link
                    href="#"
                    className="p-2 rounded-full hover:bg-neutral-700"
                  >
                    <BiDotsHorizontalRounded size={26} />
                  </Link>
                  <Link
                    href="#"
                    className="p-2 rounded-full hover:bg-neutral-700"
                  >
                    <IoMdClose size={26} />
                  </Link>
                </div>
              </div>

              <div className="my-2 px-3">
                <span className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae quae cupiditate asperiores, odit accusamus quam minus
                  quos culpa dolorum est nisi doloribus voluptates ipsum libero
                  nostrum praesentium tempora dolorem beatae.
                </span>
              </div>

              {/* Imagem */}
              <Image
                src="https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/342699124_103189456098987_4520198782180769489_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeFR7pFqzw295gIt_oWeBTYRODlmewB68VQ4OWZ7AHrxVFmjQZXD--KGXtLiRmnk3ry-427iqqnsn5QhzjPYfGem&_nc_ohc=UbJqeUdH3zYAX8vUq7K&_nc_ht=scontent.fcpq5-1.fna&oh=00_AfA4U-M9zBy4ABmmm0mHieRNOYvTxJ7BFDc1u1JYJwg6Ow&oe=6447B4B3"
                alt="Imagem teste"
                className="w-full h-full"
                width={1920}
                height={1080}
              />

              <div className="px-3 pb-2 flex flex-col">
                <div className="flex items-center pt-2">
                  <AiFillLike
                    size={20}
                    className="text-white bg-blue-500 rounded-full p-1 z-10"
                  />
                  <AiFillHeart
                    size={20}
                    className="text-white bg-red-500 rounded-full p-1 -ml-1"
                  />
                  <Link
                    href="#"
                    className="hover:underline ml-2 text-sm text-neutral-400"
                  >
                    3,8 mil
                  </Link>

                  <div className="ml-auto">
                    <Link
                      href="#"
                      className="hover:underline ml-2 text-sm text-neutral-400"
                    >
                      120 comentários
                    </Link>
                    <Link
                      href="#"
                      className="hover:underline ml-2 text-sm text-neutral-400"
                    >
                      40 compartilhamentos
                    </Link>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-neutral-700 my-2" />

                <div className="flex items-center gap-2">
                  <Link
                    href="#"
                    className="flex items-center justify-center hover:bg-neutral-700 rounded-md py-1 gap-2 text-neutral-400 w-full transition"
                  >
                    <AiOutlineLike size={24} />
                    <span className="text-sm font-semibold">Curtir</span>
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center justify-center hover:bg-neutral-700 rounded-md py-1 gap-2 text-neutral-400 w-full transition"
                  >
                    <HiOutlineChatBubbleLeft size={24} />
                    <span className="text-sm font-semibold">Comentar</span>
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center justify-center hover:bg-neutral-700 rounded-md py-1 gap-2 text-neutral-400 w-full transition"
                  >
                    <TbShare3 size={24} />
                    <span className="text-sm font-semibold">Compartilhar</span>
                  </Link>

                  <Link
                    href="#"
                    className="p-1 rounded-md hover:bg-neutral-700 transition flex items-center gap-1"
                  >
                    <Image
                      src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                      alt="Perfil"
                      className="object-cover min-w-[16px] min-h-[16px] rounded-full cursor-pointer"
                      quality={100}
                      width={64}
                      height={64}
                    />
                    <BiCaretDown size={20} />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>

        <div className="p-3 hidden md:flex flex-col flex-1 gap-4 overflow-y-scroll scrollbar-thin h-screen pb-16 sticky top-[52px]">
          <section className="bg-neutral-800 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <FaUserFriends size={16} className="text-blue-500" />
              <span className="text-sm font-semibold">
                Solicitações de amizade
              </span>
              <Link
                href="#"
                className="p-1 rounded-full hover:bg-neutral-700 transition ml-auto"
              >
                <BiDotsHorizontalRounded size={20} />
              </Link>
            </div>

            <Link
              href="#"
              className="p-2 rounded-md hover:bg-neutral-600/80 mt-2 flex items-start gap-4 transition"
            >
              <Image
                src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                alt="Perfil"
                className="object-cover min-w-[64px] min-h-[64px] rounded-full cursor-pointer"
                quality={100}
                width={64}
                height={64}
              />
              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-col xl:flex-row xl:items-center gap-1">
                  <span className="text-sm font-semibold">
                    Leandro Rodrigues
                  </span>
                  <span className="text-xs text-neutral-400">3 sem</span>
                </div>

                <div className="flex flex-col xl:flex-row xl:items-center gap-1">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover min-w-[16px] min-h-[16px] rounded-full cursor-pointer"
                    quality={100}
                    width={16}
                    height={16}
                  />
                  <span className="text-xs text-neutral-400">
                    15 amigos em comum
                  </span>
                </div>

                <div className="flex flex-col xl:flex-row items-center gap-1">
                  <button className="w-full py-2 rounded-md text-sm text-center bg-blue-500 font-semibold">
                    Confirmar
                  </button>
                  <button className="w-full py-2 rounded-md text-sm text-center bg-neutral-700 font-semibold">
                    Excluir
                  </button>
                </div>
              </div>
            </Link>
          </section>

          <div className="h-[1px] w-full bg-neutral-700" />

          <section className="flex flex-col gap-2">
            <div className="flex items-center text-neutral-400">
              <span className="font-semibold">Suas Páginas e perfis</span>
              <Link
                href="#"
                className="p-1 rounded-full hover:bg-neutral-700 transition ml-auto"
              >
                <BiDotsHorizontalRounded size={20} />
              </Link>
            </div>

            <Link
              href="#"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-800 transition"
            >
              <Image
                src="https://thumbs.dreamstime.com/b/paisagem-vertical-24983477.jpg"
                alt="Perfil"
                className="object-cover min-w-[40px] min-h-[40px] max-h-10 rounded-full cursor-pointer"
                quality={100}
                width={40}
                height={40}
              />
              <span className="font-semibold text-sm">Praia do Alto Mar</span>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-800 text-neutral-400 transition"
            >
              <TfiReload size={20} />
              <span className="text-sm">Mudar para Página</span>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-800 text-neutral-400 transition"
            >
              <TfiAnnouncement size={20} />
              <span className="text-sm">Criar Promoção</span>
            </Link>
          </section>

          <div className="h-[1px] w-full bg-neutral-700" />

          <section className="flex flex-col gap-2">
            <div className="flex items-center text-neutral-400">
              <span className="font-semibold">Contatos</span>

              <div className="flex items-center gap-2 ml-auto">
                <Link
                  href="#"
                  className="p-1 rounded-full hover:bg-neutral-700 transition"
                >
                  <RiVideoAddFill size={26} className="p-1" />
                </Link>
                <Link
                  href="#"
                  className="p-1 rounded-full hover:bg-neutral-700 transition"
                >
                  <BsSearch size={26} className="p-1" />
                </Link>
                <Link
                  href="#"
                  className="p-1 rounded-full hover:bg-neutral-700 transition"
                >
                  <BiDotsHorizontalRounded size={26} className="p-1" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <Link
                href="#"
                className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded-md transition"
              >
                <div className="relative w-fit">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover min-w-[32px] min-h-[32px] rounded-full"
                    quality={100}
                    width={32}
                    height={32}
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-neutral-900 rounded-full" />
                </div>
                <span className="text-sm font-semibold">Leandro Rodrigues</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded-md transition"
              >
                <div className="relative w-fit">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover min-w-[32px] min-h-[32px] rounded-full"
                    quality={100}
                    width={32}
                    height={32}
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-neutral-900 rounded-full" />
                </div>
                <span className="text-sm font-semibold">Leandro Rodrigues</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded-md transition"
              >
                <div className="relative w-fit">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover min-w-[32px] min-h-[32px] rounded-full"
                    quality={100}
                    width={32}
                    height={32}
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-neutral-900 rounded-full" />
                </div>
                <span className="text-sm font-semibold">Leandro Rodrigues</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded-md transition"
              >
                <div className="relative w-fit">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover min-w-[32px] min-h-[32px] rounded-full"
                    quality={100}
                    width={32}
                    height={32}
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-neutral-900 rounded-full" />
                </div>
                <span className="text-sm font-semibold">Leandro Rodrigues</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded-md transition"
              >
                <div className="relative w-fit">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover min-w-[32px] min-h-[32px] rounded-full"
                    quality={100}
                    width={32}
                    height={32}
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-neutral-900 rounded-full" />
                </div>
                <span className="text-sm font-semibold">Leandro Rodrigues</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded-md transition"
              >
                <div className="relative w-fit">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover min-w-[32px] min-h-[32px] rounded-full"
                    quality={100}
                    width={32}
                    height={32}
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-neutral-900 rounded-full" />
                </div>
                <span className="text-sm font-semibold">Leandro Rodrigues</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded-md transition"
              >
                <div className="relative w-fit">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover min-w-[32px] min-h-[32px] rounded-full"
                    quality={100}
                    width={32}
                    height={32}
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-neutral-900 rounded-full" />
                </div>
                <span className="text-sm font-semibold">Leandro Rodrigues</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded-md transition"
              >
                <div className="relative w-fit">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover min-w-[32px] min-h-[32px] rounded-full"
                    quality={100}
                    width={32}
                    height={32}
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-neutral-900 rounded-full" />
                </div>
                <span className="text-sm font-semibold">Leandro Rodrigues</span>
              </Link>
            </div>
          </section>

          <div className="h-[1px] w-full bg-neutral-700" />

          <section className="flex flex-col gap-2">
            <span className="font-semibold text-neutral-400">
              Conversas em grupo
            </span>

            <div className="flex flex-col">
              <Link
                href="#"
                className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded-md transition"
              >
                <div className="relative w-fit">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover min-w-[32px] min-h-[32px] rounded-full"
                    quality={100}
                    width={32}
                    height={32}
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-neutral-900 rounded-full" />
                </div>
                <span className="text-sm font-semibold">FÉRIAS 2023</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded-md transition"
              >
                <div className="relative w-fit">
                  <Image
                    src="https://lh3.googleusercontent.com/ogw/AOLn63FkYPjYNQmQxZ3QYKmVoHEXs9TRXdBI9D7I0aTmKg=s128-c-mo"
                    alt="Perfil"
                    className="object-cover min-w-[32px] min-h-[32px] rounded-full"
                    quality={100}
                    width={32}
                    height={32}
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-neutral-900 rounded-full" />
                </div>
                <span className="text-sm font-semibold">
                  CHAMPIONS LEAGUE 2023
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 hover:bg-neutral-800 p-2 rounded-md transition"
              >
                <div className="p-2 rounded-full bg-neutral-800">
                  <AiOutlinePlus size={18} />
                </div>
                <span className="text-sm font-semibold">Criar novo grupo</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;

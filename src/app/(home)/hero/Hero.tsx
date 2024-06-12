import Container from "@/components/container/Container";
import Rating from "../rating/Rating";
import SearchBar from "../searchBar/SearchBar";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full min-h-screen pt-[140px] md:pt-[160px] pb-6">
      <Container>
        <div className="flex gap-5">
          <div className="flex-1 flex flex-col gap-5">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Find Real Estate & Get <br className="hidden xl:block" /> Your
              Dream Place
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              autem dolorum eum iure quia reprehenderit assumenda corrupti
              laudantium laboriosam nostrum, maxime rerum aperiam voluptatibus
            </p>
            <SearchBar />
            <Rating />
          </div>
          <div className="flex-1 relative hidden md:block">
            <Image
              fill
              src="/assets/bg.png"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

import Container from "@/components/container/Container";
import { listData } from "@/lib/dummydata";
import React from "react";
import Filter from "./components/filter/Filter";
import Map from "./components/map/Map";
import "leaflet/dist/leaflet.css";
import RenderCards from "./components/renderCards/RenderCards";

const ListPage = () => {
  const data = listData;
  return (
    <main>
      <section className="w-full">
        <Container>
          <div className="w-full md:h-screen flex flex-col md:flex-row md:gap-5">
            <div
              className="flex-1 md:flex-[2] lg:flex-1 pt-[140px] md:pt-[160px] pb-10 md:pr-4 
              overflow-y-auto"
            >
              <Filter />
              <RenderCards />
            </div>
            <div
              className="h-[250px] md:h-auto md:flex-1 md:pt-[100px] pb-10 md:pb-0 flex justify-center 
              items-center"
            >
              <div className="w-full h-full max-h-[500px] md:py-10">
                <Map items={data} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ListPage;

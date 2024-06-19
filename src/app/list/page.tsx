import Container from "@/components/container/Container";
import { listData } from "@/lib/dummydata";
import React from "react";
import Filter from "./components/filter/Filter";
import Map from "./components/map/Map";
import "leaflet/dist/leaflet.css";
import Card from "@/components/card/Card";

const ListPage = () => {
  const data = listData;
  return (
    <main>
      <section className="w-full">
        <Container>
          <div className="w-full h-screen flex">
            <div className="flex-1 pt-[160px] pb-10 pr-5 overflow-y-auto">
              <Filter />
              <div className="flex flex-col gap-5 mt-5">
                {data.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="flex-1 pt-[160px]">
              <Map items={data} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ListPage;

import Container from "@/components/container/Container";
import React from "react";
import LeftInfo from "./components/leftInfo/LeftInfo";
import { singlePostData } from "@/lib/dummydata";
import RightInfo from "./components/rightInfo/RightInfo";

interface SinglePageProps {
  params: {
    id: string;
  };
}

const SinglePage = ({ params }: SinglePageProps) => {
  const data = singlePostData;

  return (
    <main className="relative">
      <section className="w-full h-screen overflow-y-scroll">
        <Container>
          <div className="w-full min-h-screen flex flex-col md:flex-row gap-10 flex-wrap">
            <LeftInfo data={data} />
            <RightInfo data={data} />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default SinglePage;

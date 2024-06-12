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
    <main>
      <section className="w-full relative">
        <Container>
          <div className="w-full min-h-screen pt-[160px] pb-10 flex gap-5">
            <LeftInfo data={data} />
            <RightInfo data={data} />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default SinglePage;

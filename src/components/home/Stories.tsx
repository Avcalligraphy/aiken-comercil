import BoxStories from "../molecules/BoxStories";
import Button from "../molecules/Button";
import { stories1, stories2, stories3 } from "../molecules/ListStories";

export default function Stories(){
    return (
      <section id="reviews" className="flex flex-col items-center mt-[147px] ">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="cmd:text-[54px] csm:text-3xl text-2xl leading-tight font-bold  text-center "
        >
          Real stories, real results
        </h1>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="text-center text-[#5A5A5A] text-base cmd:text-lg clg:text-[20.5px] mt-4 cmd:mt-[33px] "
        >
          See what others like you have experienced on their journey with Aiken
        </p>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="font-medium text-[14px] mt-[20px] leading-[28px] "
        >
          ⭐ 4.73 ▪️ 5,311 ratings ▪️ Trusted by 50K+ users
        </p>
        <div className=" mt-[64px] flex flex-row justify-center items-center gap-[120px] ">
          <div className="cxl:block hidden">
            <BoxStories stories={stories1} />
          </div>
          <div className="cmmd:block hidden">
            <BoxStories stories={stories2} />
          </div>
          <div className="">
            <BoxStories stories={stories3} />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="mt-[100px] mb-[300px]"
        >
          <a
            href="https://linktr.ee/aikenbook.id?fbclid=PAZXh0bgNhZW0CMTEAAaYFlLZbOhKbc-J2yesQL0JqsLbYY12PBnxzSB0icNNu8NCWo3glqU9ZkCQ_aem_K7GMaWuGC42dbAakE_4ZtA"
            target="_blank"
          >
            <Button
              text="Try Aiken free"
              bg="bg-gradient-to-r from-[#F9C623] to-[#A34D39] px-6 cmd:px-[50px]"
            />
          </a>
        </div>
      </section>
    );
}
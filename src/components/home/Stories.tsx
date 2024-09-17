import BoxStories from "../molecules/BoxStories";
import Button from "../molecules/Button";

export default function Stories(){
    return (
      <section id="reviews" className="flex flex-col items-center mt-[147px] ">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="text-[54px] font-bold leading-[56px] text-center "
        >
          Real stories, real results
        </h1>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="text-[#5A5A5A] mt-[16px] text-[20px] text-center "
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
        <div className=" mt-[64px] flex flex-row gap-[120px] ">
          <BoxStories />
          <BoxStories />
          <BoxStories />
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="mt-[100px] mb-[300px]"
        >
          <Button
            text="Try Aiken free"
            bg="bg-gradient-to-r from-[#F9C623] to-[#A34D39] px-[50px] "
          />
        </div>
      </section>
    );
}
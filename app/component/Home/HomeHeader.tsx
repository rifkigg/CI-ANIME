import Image from "next/image";
import InputSearch from "../Utilities/InputSearch";

const HomeHeader = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between md:items-center gap-4 p-3 bg-secondary w-[90%] mx-auto my-5 rounded-xl">
      <div className="">
        <h1>Welcome to CI ANIME</h1>
        <InputSearch width={"100px"}/>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
          minima nam expedita aut quis sit eos. Distinctio dolore sed blanditiis
          a hic accusamus laboriosam veniam nam fuga neque. Ad, at! Adipisci
          delectus tempora similique sunt eum, impedit quod sapiente natus
          reprehenderit, dolore quaerat a quidem sequi nesciunt aliquid atque
          quo beatae? Facere maiores neque iure. Quos vel rerum facilis qui
          voluptatem, necessitatibus possimus ipsa temporibus veniam quis
          dignissimos ipsum unde sequi deserunt quasi atque accusantium ex!
          Recusandae saepe expedita similique cum neque delectus, numquam nemo
          temporibus quos! Totam autem voluptatibus dicta, quidem dolorem, error
          repudiandae earum, unde iste asperiores saepe.
        </p>
      </div>
      <Image src="/images/icon.png" alt="icon" width={300} height={300} />
    </div>
  );
};

export default HomeHeader;

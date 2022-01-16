import desktopBestgear from "../assets/shared/desktop/image-best-gear.jpg";

const BestGear = () => {
  return (
    <main className='grid text-center gap-10 px-6 t:px-12 d:px-40 d:grid-cols-2 d:items-center d:pb-20'>
      <section className='justify-self-center rounded-lg bg-no-repeat bg-center bg-cover bg-m-bestgear t:bg-t-bestgear h-96 w-full d:hidden'></section>
      <article className='grid gap-10'>
        <h2 className='text-3xl tracking-wide font-semibold t:text-4xl t:w-4/6 t:mx-auto d:text-left d:ml-0'>
          BRINGING YOU THE <span className='text-moderate-orange'>BEST</span>{" "}
          AUDIO GEAR
        </h2>
        <p className='leading-7 text-black text-opacity-50 font-light t:px-6 pb-24 text-center d:w-5/6 d:text-left d:ml-0 d:px-0 d:pb-0'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </article>
      <img
        src={desktopBestgear}
        alt='best gear'
        className='hidden d:inline rounded-lg w-full'
      />
    </main>
  );
};

export default BestGear;

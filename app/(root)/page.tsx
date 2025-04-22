import Image from "next/image";

export default function Home() {
  return (
    <main className="lg:wrapper">
      <section className="flex flex-col items-center justify-between gap-15 px-6 py-12 mx-auto md:flex-row max-w-7xl">
        <div className="flex-1 space-y-6">
          <div className="title-label hidden uppercase text-left md:block">
            Your go-to platform for 3D printing files
          </div>
          <h1 className="text-[40px] md:text-[56px] md:my-6">
            Discover what’s possible with 3D printing
          </h1>
          <p className="large">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>
        </div>
        <div className="relative w-[33rem] h-[33rem]">
          <Image
            className="object-contain"
            src="/images/hero-image-home.png"
            alt="Printforge logo"
            fill
          />
        </div>
      </section>
    </main>
  );
}

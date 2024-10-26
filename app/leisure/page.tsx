'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Leisure() {
  const [seaImageIndex, setSeaImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const seaImage = [
    {
      src: "/nature-sea-1.JPG",
      alt: "Sea image 1",
      width: 380,
      height: 200,
    },
    {
      src: "/nature-sea-2.JPG",
      alt: "Sea image 2",
      width: 380,
      height: 200
    },
  ]
  const [mountainImageIndex, setMountainImageIndex] = useState(0);
  const mountainImage = [
    {
      src: "/nature-mountain-1.JPG",
      alt: "Mountain image 1",
      width: 380,
      height: 200
    },
    {
      src: "/nature-mountain-2.JPG",
      alt: "Mountain image 2",
      width: 380,
      height: 200
    },
    {
      src: "/nature-mountain-3.JPG",
      alt: "Mountain image 3",
      width: 380,
      height: 200
    },
    {
      src: "/nature-mountain-4.JPG",
      alt: "Mountain image 4",
      width: 380,
      height: 200
    },
    {
      src: "/nature-mountain-5.JPG",
      alt: "Mountain image 5",
      width: 380,
      height: 200
    },
    {
      src: "/nature-mountain-6.jpeg",
      alt: "Mountain image 6",
      width: 380,
      height: 200
    },
  ]

  const [eventImageIndex, setEventImageIndex] = useState(0);
  const mountainsImage = [
    {
      src: "/event-fireworks-2.JPG",
      alt: "fireworks image 2",
      width: 380,
      height: 200,
    },
    {
      src: "/event-fireworks-3.JPG",
      alt: "fireworks image 3",
      width: 380,
      height: 200,
    },
    {
      src: "/event-summer-cinema-2.jpg",
      alt: "summer-cinema image 2",
      width: 380,
      height: 200
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setSeaImageIndex((prevIndex) => (prevIndex + 1) % seaImage.length);
        setMountainImageIndex((prevIndex) => (prevIndex + 1) % mountainImage.length);
        setEventImageIndex((prevIndex) => (prevIndex + 1) % mountainsImage.length);
        setIsVisible(true);
      }, 500)
    }, 7000)

    return () => clearInterval(interval)
  }, [seaImage.length, mountainsImage.length]);

  return (
    <section className="pt-20 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <div className="grid gap-4 place-content-center space-y-4">
        <div className="md:grid grid-cols-2 px-4 md:space-x-16">
          <div className="flex flex-col items-center space-y-8 relative overflow-hidden">
            <Image src={seaImage[seaImageIndex].src} alt={seaImage[seaImageIndex].alt} width={seaImage[seaImageIndex].width} height={200} className={`sm:mb-4 bg-white transition-opacity duration-700 ease-in-out object-cover ${isVisible ? "opacity-100" : "opacity-0"}`}></Image>
          </div>
          <div className="flex flex-col mt-2">
            <div className="flex f sm:mb-4 md:mb-8 place-content-center">
              <p className="text-lg font-[family-name:var(--font-geist-sans)]">
                海
              </p>
            </div>
            <ul className="list-disc space-y-4">
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                海へのアクセスがしやすい
              </li>
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                夏場の日照時間が長い
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid grid-cols-2 px-4 md:space-x-16">
          <div className="flex flex-col items-center space-y-8 relative overflow-hidden">
            <Image src={mountainImage[mountainImageIndex].src} alt={mountainImage[mountainImageIndex].alt} width={mountainImage[mountainImageIndex].width} height={200} className={`sm:mb-4 bg-white transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}></Image>
          </div>
          <div className="flex flex-col mt-2">
            <div className="flex f sm:mb-4 md:mb-8 place-content-center">
              <p className="text-lg font-[family-name:var(--font-geist-sans)]">
                海と山
              </p>
            </div>
            <ul className="list-disc space-y-4">
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                山からも近い
              </li>
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                ウィンタースポーツも盛ん
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid grid-cols-2 px-4 md:space-x-16">
          <div className="flex flex-col items-center space-y-8 relative overflow-hidden">
            <Image src={mountainsImage[eventImageIndex].src} alt={mountainsImage[eventImageIndex].alt} width={mountainsImage[eventImageIndex].width} height={200} className={`sm:mb-4 bg-white transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}></Image>
          </div>
          <div className="flex flex-col mt-2">
            <div className="flex f sm:mb-4 md:mb-8 place-content-center">
              <p className="text-lg font-[family-name:var(--font-geist-sans)]">
                豊富なイベント
              </p>
            </div>
            <ul className="list-disc space-y-4">
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                花火大会
              </li>
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                野外映画上映会
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
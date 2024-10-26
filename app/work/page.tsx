'use client';
import { useEffect, useState } from "react";
import GithubPageImage from "../ui/component/GithuPageImage";

export default function Work() {
  const [itCompanyImageIndex, setItCompanyImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const itCompanyImage = [
    {
      src: "/amazon-logo.svg",
      alt: "Amazon logo",
      width: 200,
      height: 200,
    },
    {
      src: "/microsoft-logo.png",
      alt: "Microsoft logo",
      width: 200,
      height: 200
    },
    {
      src: "/apple-logo.svg",
      alt: "Apple logo",
      width: 200,
      height: 200
    },
    {
      src: "/google-logo.png",
      alt: "Google logo",
      width: 200,
      height: 200
    },
  ]

  const [japaneseRestaurantImageIndex, setJapaneseRestaurantImageIndex] = useState(0);
  const japaneseRestaurantsImage = [
    {
      src: "/tojos-restaurant.jpeg",
      alt: "tojos restaurant image",
      width: 300,
      height: 200,
    },
    {
      src: "/dambo.jpg",
      alt: "Dambo image",
      width: 300,
      height: 200
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setItCompanyImageIndex((prevIndex) => (prevIndex + 1) % itCompanyImage.length);
        setJapaneseRestaurantImageIndex((prevIndex) => (prevIndex + 1) % japaneseRestaurantsImage.length);
        setIsVisible(true);
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [itCompanyImage.length, japaneseRestaurantsImage.length]);

  return (
    <section className="pt-20 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <div className="grid gap-4 place-content-center space-y-4">
        <div className="md:grid grid-cols-2 px-4 md:space-x-16">
          <div className="flex flex-col items-center space-y-8 relative overflow-hidden">
            <GithubPageImage src={itCompanyImage[itCompanyImageIndex].src} alt={itCompanyImage[itCompanyImageIndex].alt} width={itCompanyImage[itCompanyImageIndex].width} height={200} className={`sm:mb-4 bg-white transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}></GithubPageImage>
          </div>
          <div className="flex flex-col mt-2">
            <div className="flex f sm:mb-4 md:mb-8 place-content-center">
              <p className="text-lg font-[family-name:var(--font-geist-sans)]">
                豊富なIT企業
              </p>
            </div>
            <ul className="list-disc space-y-4">
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                Amazon、Microsoft、GoogleなどのIT企業の支社が豊富
              </li>
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                大手のIT企業で働けるチャンスあり
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid grid-cols-2 px-4 md:space-x-16">
          <div className="flex flex-col items-center space-y-8 relative overflow-hidden">
            <GithubPageImage src={japaneseRestaurantsImage[japaneseRestaurantImageIndex].src} alt={japaneseRestaurantsImage[japaneseRestaurantImageIndex].alt} width={japaneseRestaurantsImage[japaneseRestaurantImageIndex].width} height={200} className={`sm:mb-4 bg-white transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}></GithubPageImage>
          </div>
          <div className="flex flex-col mt-2">
            <div className="flex f sm:mb-4 md:mb-8 place-content-center">
              <p className="text-lg font-[family-name:var(--font-geist-sans)]">
                豊富な日本食レストラン
              </p>
            </div>
            <ul className="list-disc space-y-4">
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                日本人従業員も多数勤務
              </li>
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                カリフォルニアロール発祥の寿司屋
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
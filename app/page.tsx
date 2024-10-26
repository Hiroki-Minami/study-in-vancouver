'use client';
import { useEffect, useState } from "react";
import GithubPageImage from "./ui/component/GithuPageImage";

export default function Home() {
  const [vancouverImageIndex, setVancouverImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const vancouverImage = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/57/Concord_Pacific_Master_Plan_Area.jpg",
      alt: "Vancouver Downtown",
      width: 380,
      height: 200,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Vancouver_%28BC%2C_Canada%29%2C_Canada_Place_--_2022_--_1847.jpg",
      alt: "Canada place",
      width: 380,
      height: 200
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Stanley_Park%2C_Vancouver_%287889964786%29.jpg",
      alt: "Stanley park",
      width: 380,
      height: 200
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Gastown_Steam_Clock_by_Kiyokun.JPG",
      alt: "Gastown",
      width: 380,
      height: 200
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setVancouverImageIndex((prevIndex) => (prevIndex + 1) % vancouverImage.length);
        setIsVisible(true);
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [vancouverImage.length])

  return (
    <section className="pt-20 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <div className="grid gap-4 place-content-center space-y-4">
        <div className="md:grid grid-cols-2 px-4 md:space-x-16">
          <div className="flex flex-col items-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42971566.19233834!2d-135.50027232440902!3d48.90060108939163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2z44Kr44OK44OA!5e0!3m2!1sja!2sjp!4v1729845658312!5m2!1sja!2sjp" width="400" height="300" className="boarder-0" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="flex flex-col mt-2">
            <div className="flex f sm:mb-4 md:mb-8 place-content-center">
              <p className="text-lg font-[family-name:var(--font-geist-sans)]">
                カナダについて
              </p>
            </div>
            <ul className="list-disc space-y-4">
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                ロシアに次いで面積が大きい
              </li>
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                人口は4000万人
              </li>
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                建国は1867年
              </li>
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                完全な独立は1982年
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid grid-cols-2 px-4 md:space-x-16">
          <div className="flex flex-col items-center space-y-8 relative overflow-hidden">
            <GithubPageImage src={vancouverImage[vancouverImageIndex].src} alt={vancouverImage[vancouverImageIndex].alt} width={vancouverImage[vancouverImageIndex].width} height={200} className={`sm:mb-4 bg-white transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}></GithubPageImage>
          </div>
          <div className="flex flex-col mt-2">
            <div className="flex f sm:mb-4 md:mb-8 place-content-center">
              <p className="text-lg font-[family-name:var(--font-geist-sans)]">
                バンクーバーについて
              </p>
            </div>
            <ul className="list-disc space-y-4">
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                トロント、モントリーオールに次ぐ第三の都市
              </li>
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                高緯度にも関わらず、過ごしやすい気候
              </li>
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                2010年に冬季オリンピック
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { getWhatsAppUrl } from "@/lib/whatsapp";
import Image from "next/image";
import NextLink from "next/link";

interface Hamper {
  id: number;
  title?: string;
  description?: string;
  image?: string;
  price?: number;
  isCustom?: boolean;
}

const hampers: Hamper[] = [
  {
    id: 1,
    title: "Sunshine Box",
    image: "/assets/landing-page/hampers/2.JPG",
    price: 1849,
  },
  {
    id: 2,
    title: "The Imperial Box",
    image: "/assets/landing-page/hampers/5.jpg",
    price: 2050,
  },
  {
    id: 3,
    title: "Butterfly Bliss",
    image: "/assets/landing-page/hampers/3.jpg",
    price: 1749,
  },
  {
    id: 4,
    isCustom: true,
    title: "Create Your Own Hamper",
    description:
      "Personalize your hamper just the way you want. We'll curate it beautifully for you.",
  },
];

export default function HampersGifting() {
  return (
    <section
      className="w-full px-6 sm:px-12 py-12"
      style={{ backgroundColor: "#F7F7F5" }}
      id="hampers"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold font-[amaranth] text-black">
            Hampers & Gifting
          </h2>
          <Image
            src="/assets/landing-page/hamperstar.png"
            height={200}
            width={200}
            alt="Star"
            className="w-12 h-12 -ml-4 -mt-4"
          />
        </div>

        {/* Hampers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hampers.map((hamper) =>
            hamper.isCustom ? (
              /* Custom CTA Card */
              <div
                key={hamper.id}
                className="flex flex-col justify-center items-center text-center h-64 rounded-2xl p-3 bg-gradient-to-br from-[#F4F2EC] to-[#EDEAE2] border border-dashed border-gray-300 hover:shadow-md hover:scale-[1.02] transition-all duration-300"
              >
                <div className="text-3xl mb-4">✨</div>

                <h3 className="text-lg md:text-xl font-bold text-black mb-1">
                  {hamper.title}
                </h3>

                <p className="text-sm text-gray-600 mb-5">
                  {hamper.description}
                </p>

				<NextLink href={getWhatsAppUrl()}>
					<button className="px-5 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 hover:cursor-pointer transition">
					Chat With Us
					</button>
				</NextLink>
              </div>
            ) : (
              /* Product Card */
              <div
                key={hamper.id}
                className="flex flex-col hover:scale-[1.02] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 mb-4 rounded-2xl overflow-hidden bg-gray-200 shrink-0">
                  <Image
                    src={hamper.image!}
                    alt={hamper.title || ""}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                    {hamper.title}
                  </h3>

                  <p className="text-lg md:text-xl text-black">
                    ₹{hamper.price}/-
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
import type { Metadata, Viewport } from "next";
import { Amaranth, Poppins } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const amaranth = Amaranth({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-amaranth",
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	themeColor: "#F7F7F5",
};

export const metadata: Metadata = {
	title: {
		default: "ZTreats - Premium Nuts, Dry Fruits & Gift Hampers",
		template: "%s | ZTreats",
	},
	description:
		"Discover ZTreats' premium collection of roasted nuts, dry fruits, and beautifully curated gift hampers. Quality snacks delivered fresh to your doorstep.",
	keywords: [
		"premium nuts",
		"dry fruits",
		"gift hampers",
		"cashews",
		"almonds",
		"walnuts",
		"healthy snacks",
		"corporate gifts",
		"ZTreats",
	],
	authors: [{ name: "ZTreats" }],
	creator: "ZTreats",
	publisher: "ZTreats",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://ztreats.com"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_IN",
		url: "https://ztreats.com",
		title: "ZTreats - Premium Nuts, Dry Fruits & Gift Hampers",
		description:
			"Discover ZTreats' premium collection of roasted nuts, dry fruits, and beautifully curated gift hampers.",
		siteName: "ZTreats",
		images: [
			{
				url: "/assets/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "ZTreats - Premium Nuts & Gift Hampers",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "ZTreats - Premium Nuts, Dry Fruits & Gift Hampers",
		description:
			"Discover ZTreats' premium collection of roasted nuts, dry fruits, and beautifully curated gift hampers.",
		images: ["/assets/og-image.jpg"],
		creator: "@ztreats",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
	category: "food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<body className={`${poppins.className} antialiased bg-[#F7F7F5]`}>
				<Header />
				<div className="mt-20">{children}</div>
				<Footer />
			</body>
		</html>
  );
}

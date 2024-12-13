import categories from "@/mock-categories.json";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 pt-24">
      <ul className="flex gap-4 text-gray-900">
        <li className="bg-gray-100 p-2 rounded-full hover:scale-110 transition-transform">
          <a href="">
            <FaFacebook className="size-6" />
          </a>
        </li>
        <li className="bg-gray-100 p-2 rounded-full hover:scale-110 transition-transform">
          <a href="">
            <FaInstagram className="size-6" />
          </a>
        </li>
        <li className="bg-gray-100 p-2 rounded-full hover:scale-110 transition-transform">
          <a href="">
            <FaLinkedin className="size-6" />
          </a>
        </li>
        <li className="bg-gray-100 p-2 rounded-full hover:scale-110 transition-transform">
          <a href="">
            <FaXTwitter className="size-6" />
          </a>
        </li>
      </ul>
      <ul className="flex gap-4 font-light">
        {categories.map((category) => (
          <li>
            <a href={`#${category.category}`} className="hover:underline">{category.category}</a>
          </li>
        ))}
      </ul>
      <span className="text-sm font-light bg-zinc-950 w-full flex justify-center p-2">
        <strong className="me-1">Designed by</strong>
        <span>Catalina Silva</span>
      </span>
    </footer>
  );
}

import { socialLinks } from "../constants/navitems";

export const GetInTouch = () => {
  return (
    <div className="mt-10">
      <div className="text-3xl font-bold text-center text-neutral-300 mb-6">
        Get In Touch
      </div>
      <div className="flex gap-6 justify-center">
      {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition"
             >{link.icon}</a>
          ))}
      </div>
    </div>
  );
};

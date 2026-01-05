import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export const socialLinks = [
    {
      href: "https://github.com/stutisk",
      icon: <FaGithub className="w-6 h-6" />,
      label: "GitHub",
    },
    {
      href: "https://x.com/StutiKumari13",
      icon: <FaXTwitter className="w-6 h-6" />,
      label: "X",
    },
    {
      href: "https://www.linkedin.com/in/stuti-kumari-8b03a9193/",
      icon: <FaLinkedin className="w-7 h-7" />,
      label: "LinkedIn",
    },
    {
      href: "https://peerlist.io/stutisk",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M15.13 21.75a6.75 6.75 0 0 0 6.708-6.005l.211-1.895a16.8 16.8 0 0 0 0-3.7l-.21-1.895a6.75 6.75 0 0 0-6.71-6.005H8.87a6.75 6.75 0 0 0-6.709 6.005l-.21 1.895a16.8 16.8 0 0 0 0 3.7l.21 1.895a6.75 6.75 0 0 0 6.71 6.005zM8.25 17a.75.75 0 0 0 1.5 0v-3.25H13a3.75 3.75 0 0 0 0-7.5H9a.75.75 0 0 0-.75.75zM13 12.25H9.75v-4.5H13a2.25 2.25 0 0 1 0 4.5"
          />
        </svg>
      ),
      label: "Peerlist",
    },
  ];
import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center p-0.5 text-sm font-medium w-33 my-2 cursor-pointer rounded-md",
  {
    variants: {
      variant: {
        primary:
          "overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
        secondary:
          "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 hover:bg-sky-700 hover:text-white hover:bg-gradient-to-br hover:from-green-400 hover:to-blue-600",
        logOut:
          "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 hover:text-white",
      },
    },
  }
);

const spanVariants = cva("w-33 px-5 py-2.5 rounded-md font-bold", {
  variants: {
    variant: {
      primary:
        "relative transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent",
      secondary: "dark:bg-transparent hover:bg-gray-800/40 rounded-md",
      logOut:
        "bg-transparent hover:bg-gradient-to-br hover:from-red-500/40 hover:to-purple-500/40",
    },
  },
});

const LiisaButton = ({ variant, size, className, children, ...props }) => {
  return (
    <button
      className={clsx(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className={clsx(spanVariants({ variant }))}>{children}</span>
    </button>
  );
};

export default LiisaButton;
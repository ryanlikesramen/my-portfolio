import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("w-screen-2xl mx-auto px-5", className)}>{children}</div>
  );
};

export default Container;

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";


type FullScreenProps = {
  alt: string;
  src: string | undefined;
};

export const FullScreenImage: React.FC<FullScreenProps> = ({ src, alt }) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
        Image not available
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          className="w-full h-48 object-cover rounded-md cursor-pointer"
          onError={() => setError(true)}
        />
      </DialogTrigger>

      <DialogContent className="w-screen h-screen max-w-none max-h-none p-0 bg-gray-200 border-0 shadow-none flex items-center justify-center">
        <DialogTitle className="sr-only">
          {alt || "Full Screen Image"}
        </DialogTitle>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}
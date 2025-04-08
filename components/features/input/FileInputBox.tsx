import { DocDisplay } from "../display/DocDisplay";
import { ImageDisplay } from "../display/ImageDisplay";

interface FileInputBoxProps {
  files: File[] | undefined;
  handleDelete: (index: number) => void;
}

export const FileInputBox = ({ files, handleDelete }: FileInputBoxProps) => {
  return (
    <div className="h-full mb-3 flex gap-2 px-2">
      {files &&
        files.map((file, index) => (
          <div key={index} className="relative">
            {file.type.startsWith("image") ? (
              <ImageDisplay file={file} />
            ) : (
              <DocDisplay file={file} />
            )}
            <button
              onClick={() => handleDelete(index)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center cursor-pointer"
              title="Remove"
            >
              ✕
            </button>
          </div>
        ))}
    </div>
  );
};

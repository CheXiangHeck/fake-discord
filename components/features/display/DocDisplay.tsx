import Image from "next/image";

interface DocDisplayProps {
  file: File;
}

export const DocDisplay = ({ file }: DocDisplayProps) => {
  let iconSrc = "/icons/icons8-file-50.png";

  if (
    file.type === "application/msword" ||
    file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    iconSrc = "/icons/icons8-word-48.png";
  } else if (
    file.type === "application/vnd.ms-excel" ||
    file.type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ) {
    iconSrc = "/icons/icons8-excel-48.png";
  } else if (
    file.type === "application/vnd.ms-powerpoint" ||
    file.type ===
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ) {
    iconSrc = "/icons/icons8-powerpoint-48.png";
  } else if (file.type.startsWith("image/")) {
    iconSrc = URL.createObjectURL(file);
  }

  return (
    <div className="w-20 h-20 flex flex-col justify-center items-center rounded-xl overflow-hidden bg-slate-900">
      <Image src={iconSrc} alt={file.name} width={50} height={50} />
      <p className="w-full p-2 text-center truncate">{file.name}</p>
    </div>
  );
};

export const Frame = ({children}: {children: React.ReactNode}) => {

  return (
    <div className="w-full h-full rounded-xl border-2 border-gray-700 flex overflow-hidden">
      {children}
    </div>
  );
};
